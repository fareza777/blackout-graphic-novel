import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import {spawnSync} from 'node:child_process';
const root=path.resolve(import.meta.dirname,'..'),context={window:{}};
vm.runInNewContext(fs.readFileSync(path.join(root,'voice-manifest.js'),'utf8'),context);
const manifest=context.window.BLACKOUT_VOICES,seen=new Set(),results=[];
for(const clip of Object.values(manifest.clips)){
  if(seen.has(clip.src))continue;seen.add(clip.src);
  const decoded=spawnSync('ffmpeg',['-hide_banner','-loglevel','error','-i',path.join(root,clip.src),'-f','s16le','-ac','1','-ar','24000','pipe:1'],{windowsHide:true,maxBuffer:16*1024*1024});
  if(decoded.status!==0)throw new Error('Undecodable audio: '+clip.src);
  const bytes=decoded.stdout;let peak=0,sum=0,quiet=0,longestQuiet=0;
  for(let i=0;i<bytes.length;i+=2){const value=bytes.readInt16LE(i);peak=Math.max(peak,Math.abs(value));sum+=value*value;if(Math.abs(value)<50){quiet++;longestQuiet=Math.max(longestQuiet,quiet);}else quiet=0;}
  const duration=bytes.length/48000,rms=Math.sqrt(sum/(bytes.length/2))/32768;
  const result={src:clip.src,duration:Number(duration.toFixed(3)),peak:Number((peak/32768).toFixed(4)),rmsDb:Number((20*Math.log10(rms)).toFixed(2)),longestDigitalSilence:Number((longestQuiet/24000).toFixed(3))};
  if(Math.abs(duration-clip.duration)>.2||result.peak>=.999||rms<.005||result.longestDigitalSilence>5)throw new Error('Audio quality check failed: '+JSON.stringify(result));
  results.push(result);if(results.length%80===0)console.log(JSON.stringify({checked:results.length,total:manifest.stats.uniqueClips}));
}
const summary={checked:results.length,minutes:Number((results.reduce((n,r)=>n+r.duration,0)/60).toFixed(2)),maxPeak:Math.max(...results.map(r=>r.peak)),quietestRmsDb:Math.min(...results.map(r=>r.rmsDb)),loudestRmsDb:Math.max(...results.map(r=>r.rmsDb)),longestDigitalSilence:Math.max(...results.map(r=>r.longestDigitalSilence))};
fs.writeFileSync(path.join(root,'output','voice-audio-verification.json'),JSON.stringify({summary,clips:results},null,2));console.log(JSON.stringify(summary));
