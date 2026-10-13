import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import crypto from 'node:crypto';
import {createRequire} from 'node:module';
import {spawnSync} from 'node:child_process';
const require=createRequire(import.meta.url);
const {cast,speakerFor,overrides}=require('./voice-casting.cjs');
const root=path.resolve(import.meta.dirname,'..');
const cacheDir=path.join(root,'output','voice-cache');
const outDir=path.join(root,'assets','voice','en');
fs.mkdirSync(cacheDir,{recursive:true});fs.mkdirSync(outDir,{recursive:true});
let previousFiles=[],previousClips={};
if(fs.existsSync(path.join(root,'voice-manifest.js'))){const previous={window:{}};vm.runInNewContext(fs.readFileSync(path.join(root,'voice-manifest.js'),'utf8'),previous);previousClips=previous.window.BLACKOUT_VOICES.clips;previousFiles=Object.values(previousClips).map(c=>c.src);}
const context={window:{}};vm.runInNewContext(fs.readFileSync(path.join(root,'story.js'),'utf8'),context);
const data=context.window.GAME_DATA, records=[];
function add(key,value,speaker='narrator'){if(value?.en)records.push({key,speaker,paragraphs:value.en.split('\n\n').filter(Boolean)});}
for(const [id,s] of Object.entries(data.scenes)){add(`scene:${id}`,s.text,s.speaker);for(const [i,v]of(s.textVariants||[]).entries())add(`variant:${id}:${i}`,v.text,s.speaker);for(const e of s.encounters||[])add(`encounter:${e.id}`,e.text,s.speaker);}
for(const [id,e]of Object.entries(data.endings))add(`ending:${id}`,e.body);
data.epilogues.forEach((e,i)=>add(`epilogue:${i}`,e.text));
for(const [id,e]of Object.entries(data.evidence))add(`evidence:${id}`,e.body);
const hash=value=>crypto.createHash('sha256').update(value).digest('hex').slice(0,24);
const quotesUsed=new Set(), paragraphs=[], jobs=new Map(), quoteReview=[];
const underTwenty=['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
const tens=['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
const minuteWord=value=>value<20?underTwenty[value]:tens[Math.floor(value/10)]+(value%10?' '+underTwenty[value%10]:'');
const normalize=text=>text.replace(/[‘’]/g,"'").replace(/[“”]/g,'').replace(/\bMHz\b/g,'megahertz').replace(/\bECHO\b/g,'Echo').replace(/\bUNFINISHED\b/g,'unfinished').replace(/\bBISCUIT\b/g,'Biscuit').replace(/\bSIXTY\b/g,'sixty').replace(/^Header:/,'Broadcast header:').replace(/\b00:(\d{2})\b/g,(_,m)=>Number(m)===0?'midnight':`twelve ${Number(m)<10?'oh ':''}${minuteWord(Number(m))} a.m.`).replace(/\b02:10\b/g,'two ten a.m.').replace(/a\.m\.\./g,'a.m.').replace(/\s+/g,' ').trim();
for(const record of records)record.paragraphs.forEach((original,paragraph)=>{
  const segments=[];
  function segment(text,speaker){if(!text.trim())return;const clean=normalize(text);if(!clean)return;const prior=segments.at(-1);if(prior?.speaker===speaker){prior.source+=text;prior.text=normalize(prior.source);}else segments.push({speaker,source:text,text:clean});}
  let cursor=0,index=0;
  for(const match of original.matchAll(/“([^”]*)”|‘([^’]*)’/g)){
    segment(original.slice(cursor,match.index),'narrator');
    const speaker=speakerFor(record,paragraph,index),id=`${record.key}/${paragraph}/${index}`;
    quotesUsed.add(id);quoteReview.push({id,speaker,text:match[1]??match[2]});
    segment(match[0],speaker);cursor=match.index+match[0].length;index++;
  }
  segment(original.slice(cursor),'narrator');
  if(segments.map(s=>s.source).join('')!==original)throw new Error(`Text reconstruction failed: ${record.key}/${paragraph}`);
  for(const s of segments){const voice=cast[s.speaker];s.job=hash(JSON.stringify({model:voice.model,text:s.text,expressivity:0,speed:1}));if(!jobs.has(s.job))jobs.set(s.job,{id:s.job,model:voice.model,text:s.text,characters:s.text.length});}
  paragraphs.push({id:hash(original),original,record:record.key,paragraph,segments});
});
for(const id of Object.keys(overrides))if(!quotesUsed.has(id))throw new Error('Unused casting override: '+id);
fs.writeFileSync(path.join(root,'output','voice-casting-review.json'),JSON.stringify(quoteReview,null,2));
fs.writeFileSync(path.join(root,'output','voice-production-plan.json'),JSON.stringify({records:records.length,paragraphs:paragraphs.length,jobs:[...jobs.values()],cast,paragraphMap:paragraphs},null,2));
const characters=[...jobs.values()].reduce((n,j)=>n+j.characters,0);
console.log(JSON.stringify({stage:'plan',records:records.length,paragraphs:paragraphs.length,segments:jobs.size,characters,estimatedUSD:Number((characters*0.000045).toFixed(4))}));
if(process.argv.includes('--plan'))process.exit(0);
const ledgerPath=path.join(root,'output','voice-generation-ledger.json');
let ledger=fs.existsSync(ledgerPath)?JSON.parse(fs.readFileSync(ledgerPath,'utf8')):{provider:'Deepgram',modelFamily:'Flux TTS',pricePerThousandCharactersUSD:0.045,probeCharacters:197,attempts:[]};
function saveLedger(){fs.writeFileSync(ledgerPath,JSON.stringify(ledger,null,2));}
const key=process.env.DEEPGRAM_API_KEY;
const pending=[...jobs.values()].filter(j=>!fs.existsSync(path.join(cacheDir,j.id+'.wav')));
if(pending.length&&!key)throw new Error('Set DEEPGRAM_API_KEY in the process environment; it is never saved in game files.');
let completed=jobs.size-pending.length,failed=false;
async function generate(job){
  for(let attempt=0;attempt<4;attempt++){
    if(failed)return;
    const total=ledger.probeCharacters+ledger.attempts.reduce((n,a)=>n+a.characters,0)+job.characters;
    if(total*0.000045>12){failed=true;throw new Error('Voice production budget cap reached (US$12).');}
    const entry={segment:job.id,characters:job.characters,model:job.model,startedAt:new Date().toISOString(),status:'pending'};ledger.attempts.push(entry);saveLedger();
    try{
      const url=new URL('https://api.deepgram.com/v2/speak');url.search=new URLSearchParams({model:job.model,encoding:'linear16',container:'wav',sample_rate:'24000',expressivity:'0',speed:'1'});
      const response=await fetch(url,{method:'POST',headers:{Authorization:`Token ${key}`,'Content-Type':'application/json'},body:JSON.stringify({text:job.text}),signal:AbortSignal.timeout(120000)});
      entry.status=response.status;entry.requestId=response.headers.get('dg-request-id');entry.billedCharacters=Number(response.headers.get('dg-char-count'))||job.characters;
      if(!response.ok){saveLedger();const retry=response.status===429||response.status>=500;await response.body?.cancel();if(!retry){failed=true;throw new Error(`Deepgram request failed: HTTP ${response.status}, segment ${job.id}.`);}if(attempt===3)throw new Error(`Deepgram retry limit: HTTP ${response.status}.`);await new Promise(r=>setTimeout(r,1500*2**attempt));continue;}
      const bytes=Buffer.from(await response.arrayBuffer());if(bytes.toString('ascii',0,4)!=='RIFF'||bytes.length<1000)throw new Error('Invalid or empty WAV returned for '+job.id);
      fs.writeFileSync(path.join(cacheDir,job.id+'.wav'),bytes);entry.bytes=bytes.length;entry.finishedAt=new Date().toISOString();saveLedger();completed++;
      if(completed%20===0||completed===jobs.size)console.log(JSON.stringify({stage:'generate',completed,total:jobs.size,conservativeUSD:Number(((ledger.probeCharacters+ledger.attempts.reduce((n,a)=>n+a.characters,0))*0.000045).toFixed(3))}));return;
    }catch(error){entry.error=error.name+': '+error.message;saveLedger();if(failed||attempt===3){failed=true;throw error;}await new Promise(r=>setTimeout(r,1500*2**attempt));}
  }
}
let nextJob=0;
await Promise.all(Array.from({length:8},async()=>{while(nextJob<pending.length&&!failed){const job=pending[nextJob++];await generate(job);}}));
if(failed)throw new Error('Production stopped; successful WAV segments are cached for a safe resume.');
function command(args,input){const result=spawnSync('ffmpeg',['-hide_banner','-loglevel','error',...args],{input,maxBuffer:64*1024*1024,windowsHide:true});if(result.status!==0)throw new Error('Audio mastering failed: '+String(result.stderr).slice(0,500));return result.stdout;}
const decoded=new Map();
function pcm(segment){const cacheKey=segment.job+':'+(cast[segment.speaker].effect||'clean');if(decoded.has(cacheKey))return decoded.get(cacheKey);const args=['-i',path.join(cacheDir,segment.job+'.wav')];if(cast[segment.speaker].effect==='radio')args.push('-af','highpass=f=180,lowpass=f=3600,aecho=0.8:0.85:65:0.08');args.push('-f','s16le','-ac','1','-ar','24000','pipe:1');const source=command(args);let start=0,end=source.length/2;const threshold=100,frame=240;function audible(i){let sum=0;for(let j=i;j<Math.min(i+frame,end);j++){const s=source.readInt16LE(j*2);sum+=s*s;}return Math.sqrt(sum/frame)>threshold;}
  while(start+frame<end&&!audible(start))start+=frame;let tail=end-frame;while(tail>start&&!audible(tail))tail-=frame;start=Math.max(0,start-1920);end=Math.min(end,tail+frame+2400);
  const bytes=Buffer.from(source.subarray(start*2,end*2));let sum=0,peak=0;for(let i=0;i<bytes.length;i+=2){const s=bytes.readInt16LE(i);sum+=s*s;peak=Math.max(peak,Math.abs(s));}
  const rms=Math.sqrt(sum/(bytes.length/2)),gain=Math.min(2.5,Math.max(0.5,2600/Math.max(rms,1)),29000/Math.max(peak,1));
  for(let i=0;i<bytes.length;i+=2)bytes.writeInt16LE(Math.round(bytes.readInt16LE(i)*gain),i);
  decoded.set(cacheKey,bytes);return bytes;
}
const clips={},recordIndex={},dupes=new Map();let mastered=0,totalDuration=0,totalBytes=0;
for(const paragraph of paragraphs){
  let clip=dupes.get(paragraph.id);
  if(!clip){
    const file=hash(JSON.stringify([paragraph.id,paragraph.segments.map(s=>[s.job,cast[s.speaker].effect||'clean']),'master-1']))+'.mp3';
    const prior=previousClips[paragraph.original];
    if(prior?.src==='assets/voice/en/'+file && fs.existsSync(path.join(outDir,file)))clip=prior;
    else{
      const parts=[Buffer.alloc(2400)],cues=[];let samples=1200;
      for(const segment of paragraph.segments){const bytes=pcm(segment);const duration=bytes.length/48000;cues.push({speaker:segment.speaker,start:Number((samples/24000).toFixed(3)),end:Number((samples/24000+duration).toFixed(3))});parts.push(bytes,Buffer.alloc(3360));samples+=bytes.length/2+1680;}
      // Source and mastering hashes keep offline caches from retaining an outdated performance.
      parts.push(Buffer.alloc(4800));samples+=2400;const bytes=Buffer.concat(parts);
      command(['-y','-f','s16le','-ar','24000','-ac','1','-i','pipe:0','-af','alimiter=limit=0.95:level=false','-codec:a','libmp3lame','-b:a','96k','-map_metadata','-1',path.join(outDir,file)],bytes);
      clip={src:'assets/voice/en/'+file,duration:Number((samples/24000).toFixed(3)),cues};mastered++;
    }
    dupes.set(paragraph.id,clip);totalDuration+=clip.duration;totalBytes+=fs.statSync(path.join(outDir,file)).size;
  }
  clips[paragraph.original]=clip;(recordIndex[paragraph.record]||=[])[paragraph.paragraph]=paragraph.original;
}
const successCharacters=ledger.attempts.filter(a=>a.status===200).reduce((n,a)=>n+a.billedCharacters,ledger.probeCharacters);
const stats={records:records.length,paragraphs:paragraphs.length,uniqueClips:dupes.size,segments:jobs.size,characters,generatedCharacters:successCharacters,estimatedUSD:Number((successCharacters*0.000045).toFixed(4)),minutes:Number((totalDuration/60).toFixed(2)),bytes:totalBytes,voices:new Set(Object.values(cast).map(v=>v.model)).size};
const manifest={version:1,language:'en',provider:'Deepgram',modelFamily:'Flux TTS',generatedAt:new Date().toISOString(),cast,stats,records:recordIndex,clips};
fs.writeFileSync(path.join(root,'voice-manifest.js'),`'use strict';\nwindow.BLACKOUT_VOICES = ${JSON.stringify(manifest)};\n`);
const referenced=new Set(Object.values(clips).map(c=>c.src));
for(const old of new Set(previousFiles)){if(referenced.has(old)||!/^assets\/voice\/en\/[a-f0-9]{24}\.mp3$/.test(old))continue;const target=path.resolve(root,old);if(!target.startsWith(outDir+path.sep))throw new Error('Audio cleanup escaped its output directory.');if(fs.existsSync(target))fs.unlinkSync(target);}
fs.writeFileSync(path.join(root,'output','voice-production-report.json'),JSON.stringify({...stats,cast,priceSource:'https://deepgram.com/pricing',note:'Estimated character charges; the Deepgram dashboard is the billing authority.'},null,2));
// A spoiler-light casting reel uses the same mastered files that ship in the game.
const auditionParagraphs=['scene:arrival','scene:mara-call','scene:iman-call','scene:raka-call','scene:borrowed-breath','scene:bell-call','scene:witness-call','scene:director-call','scene:letter-listen'];
const reel=[];for(const key of auditionParagraphs){const original=recordIndex[key]?.[key==='scene:borrowed-breath'?1:0];if(original){reel.push(command(['-i',path.join(root,clips[original].src),'-f','s16le','-ac','1','-ar','24000','pipe:1']),Buffer.alloc(24000));}}
command(['-y','-f','s16le','-ar','24000','-ac','1','-i','pipe:0','-codec:a','libmp3lame','-b:a','96k',path.join(root,'output','voice-auditions','english-cast-preview.mp3')],Buffer.concat(reel));
console.log(JSON.stringify({stage:'complete',...stats}));
