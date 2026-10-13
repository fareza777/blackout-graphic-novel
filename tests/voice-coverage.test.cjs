'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..'),context={window:{}};
vm.runInNewContext(fs.readFileSync(path.join(root,'story.js'),'utf8'),context);
vm.runInNewContext(fs.readFileSync(path.join(root,'voice-manifest.js'),'utf8'),context);
const data=context.window.GAME_DATA,manifest=context.window.BLACKOUT_VOICES;
const records=[];
function add(key,text){assert.equal(typeof text?.en,'string',key+' must have English text');records.push([key,text.en.split('\n\n').filter(Boolean)]);}
for(const [key,scene]of Object.entries(data.scenes)){add('scene:'+key,scene.text);for(const [i,v]of(scene.textVariants||[]).entries())add(`variant:${key}:${i}`,v.text);for(const v of scene.encounters||[])add('encounter:'+v.id,v.text);}
for(const [key,e]of Object.entries(data.endings))add('ending:'+key,e.body);data.epilogues.forEach((e,i)=>add('epilogue:'+i,e.text));for(const [key,e]of Object.entries(data.evidence))add('evidence:'+key,e.body);
test('every English story page, variant, random encounter, ending, afterword and evidence note has a real local recording',()=>{
  let count=0;for(const [key,paragraphs]of records){assert.deepEqual(Array.from(manifest.records[key]),paragraphs,key+' record order');for(const paragraph of paragraphs){count++;const clip=manifest.clips[paragraph];assert.ok(clip,'Missing recording: '+key);assert.match(clip.src,/^assets\/voice\/en\/[a-f0-9]{24}\.mp3$/);assert.ok(clip.duration>0&&clip.duration<120,'Reasonable page length');const file=path.join(root,clip.src);assert.ok(fs.existsSync(file),'Missing audio: '+clip.src);const bytes=fs.readFileSync(file);assert.ok(bytes.length>2500);assert.equal(bytes.toString('ascii',0,3),'ID3','A mastered MP3 must have a valid header');let end=0;for(const cue of clip.cues){assert.ok(manifest.cast[cue.speaker]);assert.ok(cue.start>=end);assert.ok(cue.end>cue.start&&cue.end<=clip.duration);end=cue.end;}}}
  assert.equal(count,354);assert.equal(records.length,178);assert.equal(manifest.stats.paragraphs,count);assert.equal(Object.keys(manifest.clips).length,manifest.stats.uniqueClips);
});
test('casting preserves the operator identity and distinguishes the main characters',()=>{
  assert.equal(manifest.cast.echo.model,manifest.cast.operator.model);assert.equal(manifest.cast.echo.effect,'radio');
  const roles=['operator','mara','iman','raka','lia','sari','salim','arga','nila'];assert.equal(new Set(roles.map(id=>manifest.cast[id].model)).size,9);
  const arrival=data.scenes.arrival.text.en.split('\n\n')[1];const speakers=manifest.clips[arrival].cues.map(c=>c.speaker);assert.ok(speakers.includes('echo'));assert.ok(speakers.includes('mara'));assert.ok(speakers.includes('operator'));
  const letter=manifest.clips[data.scenes['letter-listen'].text.en.split('\n\n')[0]];assert.ok(letter.cues.some(c=>c.speaker==='nila'));
});
test('runtime ships audio without a Deepgram credential or runtime synthesis calls',()=>{
  for(const name of ['index.html','game.js','voice-player.js','voice-manifest.js','sw.js']){const source=fs.readFileSync(path.join(root,name),'utf8');assert.doesNotMatch(source,/api\.deepgram\.com|DEEPGRAM_API_KEY|Authorization:\s*['"`]/,name+' must be playable without an API credential');}
  assert.equal(manifest.language,'en');assert.equal(manifest.provider,'Deepgram');assert.ok(manifest.stats.estimatedUSD<12);
});
