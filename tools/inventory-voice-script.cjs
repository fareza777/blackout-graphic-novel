const fs=require('node:fs'),vm=require('node:vm');const c={window:{}};vm.runInNewContext(fs.readFileSync('story.js','utf8'),c);const d=c.window.GAME_DATA;
const records=[];const quotes=[];
function add(key,text,speaker='narrator'){if(!text?.en)return;const paragraphs=text.en.split('\n\n').filter(Boolean);records.push({key,speaker,paragraphs});paragraphs.forEach((p,paragraph)=>{let i=0;for(const m of p.matchAll(/“([^”]*)”|‘([^’]*)’/g)){quotes.push({key,paragraph,index:i++,quote:m[1]??m[2],before:p.slice(Math.max(0,m.index-90),m.index),after:p.slice(m.index+m[0].length,m.index+m[0].length+100),label:speaker});}});}
for(const [key,s]of Object.entries(d.scenes)){add('scene:'+key,s.text,s.speaker);for(const [i,v]of(s.textVariants||[]).entries())add('variant:'+key+':'+i,v.text,s.speaker);for(const v of s.encounters||[])add('encounter:'+v.id,v.text,s.speaker);}
for(const [k,e]of Object.entries(d.endings))add('ending:'+k,e.body);for(const [i,e]of d.epilogues.entries())add('epilogue:'+i,e.text);for(const [k,e]of Object.entries(d.evidence))add('evidence:'+k,e.body);
fs.mkdirSync('output',{recursive:true});fs.writeFileSync('output/voice-script-inventory.json',JSON.stringify({records,quotes},null,2));
console.log(JSON.stringify({records:records.length,paragraphs:records.reduce((n,r)=>n+r.paragraphs.length,0),quotes:quotes.length,characters:records.reduce((n,r)=>n+r.paragraphs.join('').length,0)}));
for(const q of quotes)console.log(`${q.key}/${q.paragraph}/${q.index} [${q.label}] ${q.before} <<${q.quote}>> ${q.after}`);
