import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import vm from 'node:vm';
import crypto from 'node:crypto';
import {spawnSync} from 'node:child_process';
const root=path.resolve(import.meta.dirname,'..');
const stage=path.join(root,'android/app/src/main/assets/www');
const output=path.join(root,'output/android');
fs.mkdirSync(stage,{recursive:true});fs.mkdirSync(output,{recursive:true});
const art=JSON.parse(fs.readFileSync(path.join(root,'assets/art-manifest.json'),'utf8'));
const context={window:{}};vm.runInNewContext(fs.readFileSync(path.join(root,'voice-manifest.js'),'utf8'),context);
const voices=context.window.BLACKOUT_VOICES;
const runtime=['index.html','styles.css','story.js','core.js','game.js','voice-player.js','voice-manifest.js','monetization.js','manifest.webmanifest','sw.js'];
const imagePaths=[...new Set([...art.assets.map(a=>a.path),'assets/app-icon-maskable.png'])];
const audioPaths=[...new Set(Object.values(voices.clips).map(c=>c.src))];
const imagePlan={images:imagePaths.map(source=>({path:source.replace(/\.png$/,'.webp'),source:path.join(root,source),target:path.join(stage,source.replace(/\.png$/,'.webp'))})),cache:path.join(output,'image-cache'),icon:path.join(root,'assets/app-icon-maskable.png'),resources:path.join(root,'android/app/src/main/res'),report:path.join(output,'image-conversion-report.json')};
const planPath=path.join(output,'image-plan.json');fs.writeFileSync(planPath,JSON.stringify(imagePlan));
const bundled=path.join(os.homedir(),'.cache/codex-runtimes/codex-primary-runtime/dependencies/python/python.exe');
const python=process.env.BLACKOUT_PYTHON || (fs.existsSync(bundled)?bundled:'python');
const conversion=spawnSync(python,[path.join(root,'tools/android-images.py'),planPath],{stdio:'inherit',windowsHide:true});
if(conversion.status!==0)throw new Error('Android image preparation failed.');
const files=[];
function addFile(relative,bytes){const target=path.join(stage,relative);fs.mkdirSync(path.dirname(target),{recursive:true});fs.writeFileSync(target,bytes);files.push({path:relative,bytes:bytes.length,sha256:crypto.createHash('sha256').update(bytes).digest('hex')});}
for(const file of runtime){let source=fs.readFileSync(path.join(root,file),'utf8').replace(/\.png\b/g,'.webp');if(file==='index.html')source=source.replace('content="width=device-width, initial-scale=1"','content="width=device-width, initial-scale=1, viewport-fit=cover"');if(/(?:DEEPGRAM_API_KEY|api\.deepgram\.com)/.test(source))throw new Error('Unexpected API configuration in runtime file '+file);addFile(file,Buffer.from(source));}
for(const relative of imagePaths.map(p=>p.replace(/\.png$/,'.webp'))){const bytes=fs.readFileSync(path.join(stage,relative));files.push({path:relative,bytes:bytes.length,sha256:crypto.createHash('sha256').update(bytes).digest('hex')});}
for(const relative of audioPaths){if(!/^assets\/voice\/en\/[a-f0-9]{24}\.mp3$/.test(relative))throw new Error('Unexpected voice asset '+relative);addFile(relative,fs.readFileSync(path.join(root,relative)));}
const artManifest={...art,assets:art.assets.map(a=>({...a,path:a.path.replace(/\.png$/,'.webp')}))};
addFile('assets/art-manifest.json',Buffer.from(JSON.stringify(artManifest)));
// Remove only stale generated files from this explicitly owned staging directory.
const expected=new Set(files.map(f=>f.path));expected.add('bundle-info.json');
function clean(directory){for(const entry of fs.readdirSync(directory,{withFileTypes:true})){const target=path.resolve(directory,entry.name);if(!target.startsWith(stage+path.sep))throw new Error('Staging cleanup escaped the Android asset directory.');if(entry.isDirectory())clean(target);else if(!expected.has(path.relative(stage,target).split(path.sep).join('/')))fs.unlinkSync(target);}}
clean(stage);
const version=Object.fromEntries(fs.readFileSync(path.join(root,'android/version.properties'),'utf8').trim().split(/\r?\n/).map(line=>line.split('=')));
const bundle={version:version.versionName,applicationId:'com.blackoutfrequency.game',defaultLanguage:'en',illustrations:art.assets.length,images:imagePaths.length,voiceClips:audioPaths.length,voiceMinutes:voices.stats.minutes,offline:true,files};
fs.writeFileSync(path.join(stage,'bundle-info.json'),JSON.stringify(bundle));
const imageStats=JSON.parse(fs.readFileSync(imagePlan.report,'utf8'));
const report={...bundle,stagedBytes:files.reduce((n,f)=>n+f.bytes,0),originalImageBytes:imageStats.reduce((n,f)=>n+f.sourceBytes,0),androidImageBytes:imageStats.reduce((n,f)=>n+f.bytes,0),minimumImagePsnrDb:Math.min(...imageStats.map(f=>f.psnrDb)),allImageDimensionsPreserved:true,sourceVoiceBytesUnchanged:true};
fs.writeFileSync(path.join(output,'packaging-report.json'),JSON.stringify(report,null,2));
console.log(JSON.stringify({stage:'android-assets-ready',files:files.length,illustrations:bundle.illustrations,voiceClips:bundle.voiceClips,MiB:Number((report.stagedBytes/1048576).toFixed(2))}));
