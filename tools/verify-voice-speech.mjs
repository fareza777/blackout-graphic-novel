import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
const root=path.resolve(import.meta.dirname,'..'),cache=path.join(root,'output','voice-cache');
const plan=JSON.parse(fs.readFileSync(path.join(root,'output','voice-production-plan.json'),'utf8'));
const master=process.argv.includes('--master');
let work=plan.jobs.map(j=>({...j,file:path.join(cache,j.id+'.wav')}));
if(master){const context={window:{}};vm.runInNewContext(fs.readFileSync(path.join(root,'voice-manifest.js'),'utf8'),context);const manifest=context.window.BLACKOUT_VOICES;const seen=new Set();work=plan.paragraphMap.filter(p=>{if(seen.has(p.original))return false;seen.add(p.original);return true;}).map(p=>({id:path.basename(manifest.clips[p.original].src,'.mp3'),file:path.join(root,manifest.clips[p.original].src),text:p.segments.map(s=>s.text).join(' '),model:'mastered cast'}));}
const reportPath=path.join(root,'output',master?'voice-master-verification.json':'voice-speech-verification.json');
const report=fs.existsSync(reportPath)?JSON.parse(fs.readFileSync(reportPath,'utf8')):{provider:'Deepgram Nova-3',note:'Automated intelligibility check, not a listening review.',segments:{}};
const key=process.env.DEEPGRAM_API_KEY;
const tokens=text=>text.toLowerCase().replace(/[’']/g,'').replace(/[^a-z0-9]+/g,' ').trim().split(/\s+/).filter(Boolean);
function compare(expected,actual){const a=tokens(expected),b=tokens(actual),matrix=Array.from({length:a.length+1},()=>new Uint16Array(b.length+1));for(let i=0;i<=a.length;i++)matrix[i][0]=i;for(let j=0;j<=b.length;j++)matrix[0][j]=j;for(let i=1;i<=a.length;i++)for(let j=1;j<=b.length;j++)matrix[i][j]=Math.min(matrix[i-1][j]+1,matrix[i][j-1]+1,matrix[i-1][j-1]+(a[i-1]===b[j-1]?0:1));return {words:a.length,edits:matrix[a.length][b.length],wordErrorRate:Number((matrix[a.length][b.length]/Math.max(1,a.length)).toFixed(4))};}
const jobs=work.filter(j=>fs.existsSync(j.file)&&!report.segments[j.id]);
if(jobs.length&&!key)throw new Error('DEEPGRAM_API_KEY must be supplied through the process environment.');
let next=0,done=0;
await Promise.all(Array.from({length:6},async()=>{while(next<jobs.length){const job=jobs[next++];let success=false;
  for(let attempt=0;attempt<3&&!success;attempt++){
    const url=new URL('https://api.deepgram.com/v1/listen');url.search=new URLSearchParams({model:'nova-3',language:'en',punctuate:'true',smart_format:'false'});
    let response;try{response=await fetch(url,{method:'POST',headers:{Authorization:`Token ${key}`,'Content-Type':master?'audio/mpeg':'audio/wav'},body:fs.readFileSync(job.file),signal:AbortSignal.timeout(120000)});}catch(error){if(attempt===2)throw error;continue;}
    if(!response.ok){await response.body?.cancel();if(response.status===429||response.status>=500){await new Promise(r=>setTimeout(r,1200*(attempt+1)));continue;}throw new Error('Speech verification HTTP '+response.status);}
    const body=await response.json(),alternative=body.results?.channels?.[0]?.alternatives?.[0];
    report.segments[job.id]={model:job.model,text:job.text,transcript:alternative?.transcript||'',confidence:alternative?.confidence||0,duration:body.metadata?.duration||0,requestId:body.metadata?.request_id,...compare(job.text,alternative?.transcript||'')};
    fs.writeFileSync(reportPath,JSON.stringify(report,null,2));done++;success=true;if(done%40===0)console.log(JSON.stringify({stage:'speech-check',checked:done,available:jobs.length}));
  }
  if(!success)throw new Error('Speech verification retry limit.');
}}));
const all=work.map(j=>report.segments[j.id]).filter(Boolean),flagged=all.filter(s=>s.wordErrorRate>.18&&s.edits>2).sort((a,b)=>b.wordErrorRate-a.wordErrorRate);
report.summary={checked:all.length,totalSegments:work.length,minutes:Number((all.reduce((n,s)=>n+s.duration,0)/60).toFixed(2)),billedMinutes:Number((Object.values(report.segments).reduce((n,s)=>n+s.duration,0)/60).toFixed(2)),words:all.reduce((n,s)=>n+s.words,0),edits:all.reduce((n,s)=>n+s.edits,0),flagged:flagged.length};
fs.writeFileSync(reportPath,JSON.stringify(report,null,2));
console.log(JSON.stringify({stage:'speech-check-complete',...report.summary}));
for(const item of flagged.slice(0,15))console.log(JSON.stringify({model:item.model,wer:item.wordErrorRate,expected:item.text,heard:item.transcript}));
