import fs from 'node:fs';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const files=execFileSync('git',['ls-files','-z'],{cwd:root,windowsHide:true}).toString().split('\0').filter(Boolean);
const issues=[];let bytes=0;
for(const relative of files){
  if(/^(?:output\/|android\/app\/src\/main\/assets\/www\/)|(?:^|\/)\.env(?:\.|$)|(?:^|\/)build\/|(?:^|\/)local\.properties$|\.(?:apk|aab|p12|jks|keystore|wav)$|signing.*\.properties$/i.test(relative))issues.push({file:relative,reason:'Generated or private file'});
  const buffer=fs.readFileSync(path.join(root,relative));bytes+=buffer.length;
  if(buffer.length>=100*1024*1024)issues.push({file:relative,reason:'Exceeds the GitHub per-file size limit'});
  if(!/\.(?:png|webp|mp3|jar)$/i.test(relative)){
    const source=buffer.toString('utf8');
    if(/\b(?:sk-[A-Za-z0-9_-]{16,}|gh[pousr]_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{20,}|AIza[A-Za-z0-9_-]{20,})\b/.test(source))issues.push({file:relative,reason:'Possible credential literal'});
    if(/\b[0-9a-f]{40}\b/i.test(source))issues.push({file:relative,reason:'Review possible 40-character credential before publishing'});
  }
}
if(issues.length){console.error(JSON.stringify({issues}));process.exitCode=1;}
else console.log(JSON.stringify({trackedFiles:files.length,sourceMiB:Number((bytes/1048576).toFixed(2)),noPrivateOrGeneratedFiles:true,noCredentialLiterals:true}));
