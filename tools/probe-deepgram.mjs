import fs from 'node:fs/promises';
const key=process.env.DEEPGRAM_API_KEY;
if(!key)throw new Error('Set DEEPGRAM_API_KEY in the process environment.');
const url=new URL('https://api.deepgram.com/v2/speak');
url.search=new URLSearchParams({model:'flux-donovan-en',encoding:'linear16',container:'wav',sample_rate:'24000',expressivity:'0',speed:'1'});
const text='The city loses power while you are still taking off your wet coat. For a moment, the dispatch room is as dark as the harbor outside. Then the generator coughs into life. Someone is still listening.';
const response=await fetch(url,{method:'POST',headers:{Authorization:`Token ${key}`,'Content-Type':'application/json'},body:JSON.stringify({text}),signal:AbortSignal.timeout(90000)});
console.log(JSON.stringify({status:response.status,type:response.headers.get('content-type'),requestId:response.headers.get('dg-request-id')}));
if(!response.ok){console.log((await response.text()).slice(0,1200));process.exitCode=1;}else{await fs.mkdir('output/voice-auditions',{recursive:true});const bytes=Buffer.from(await response.arrayBuffer());await fs.writeFile('output/voice-auditions/narrator-flux.wav',bytes);console.log(JSON.stringify({saved:'output/voice-auditions/narrator-flux.wav',bytes:bytes.length,characters:text.length}));}
