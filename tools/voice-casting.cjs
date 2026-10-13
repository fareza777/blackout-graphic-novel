'use strict';
// Direct speech is cast explicitly. Prose between quotations stays with the narrator.
const cast = {
  narrator: {name:'Narrator',model:'flux-donovan-en',direction:'Intimate, thoughtful; allow the human details to breathe.'},
  operator: {name:'Operator',model:'flux-donovan-en',direction:'Measured, honest; growing less certain and more present.'},
  echo: {name:'ECHO',model:'flux-donovan-en',effect:'radio',direction:'The operator’s own recorded voice, with a narrow radio band.'},
  mara: {name:'Mara',model:'flux-alexis-en',direction:'Calm, caring and firm under pressure.'},
  iman: {name:'Iman',model:'flux-wade-en',direction:'Warm, practical; dry humor beneath fatigue.'},
  raka: {name:'Raka',model:'flux-cole-en',direction:'Young, earnest; frightened without becoming frantic.'},
  lia: {name:'Lia',model:'flux-haley-en',direction:'Clear, composed and attentive; warmth without sentimentality.'},
  sari: {name:'Bu Sari',model:'flux-brittany-en',direction:'Mature, kind, capable; wry neighborhood humor.'},
  salim: {name:'Salim',model:'flux-cliff-en',direction:'Mature, low and weathered; regret expressed plainly.'},
  arga: {name:'Arga',model:'flux-miles-en',direction:'Polished, restrained and confident, even when cornered.'},
  nila: {name:'Nila',model:'flux-sienna-en',direction:'Warm and familiar, an ordinary message that acquires new weight.'},
  girl: {name:'Young caller',model:'flux-haley-en',direction:'Soft, clear and unhurried.'},
  man: {name:'Caller',model:'flux-wade-en',direction:'Natural, practical and tired.'},
  woman: {name:'Caller',model:'flux-sienna-en',direction:'Warm, resourceful, finding humor in a difficult night.'},
  olderWoman: {name:'Caller',model:'flux-brittany-en',direction:'Mature, warm, gently wry.'},
  olderMan: {name:'Caller',model:'flux-cliff-en',direction:'Weathered and practical.'},
  boy: {name:'Young caller',model:'flux-cole-en',direction:'Earnest, clear and uncertain.'},
  worker: {name:'Gate worker',model:'flux-wade-en',direction:'Tired, gently amused and caring.'}
};
const overrides = {};
function assign(record, paragraph, speakers) { speakers.forEach((speaker,index)=>overrides[`${record}/${paragraph}/${index}`]=speaker); }
assign('scene:arrival',1,['echo','mara','operator']);
assign('scene:pressure',0,['operator','raka']);assign('scene:pressure',1,['mara']);
assign('scene:after-pressure',0,['raka']);assign('scene:after-pressure',2,['operator']);
assign('variant:after-pressure:0',0,['operator','raka']);assign('variant:after-pressure:0',1,['raka']);
assign('variant:after-pressure:1',0,['raka','raka']);assign('variant:after-pressure:1',1,['mara']);
assign('scene:reconstructed',1,['iman']);assign('scene:reconstructed',2,['mara','mara']);
assign('variant:reconstructed:0',1,['operator']);assign('variant:reconstructed:0',2,['mara','mara']);
assign('scene:evacuation',2,['raka','raka']);
assign('variant:evacuation:0',0,['iman']);assign('variant:evacuation:0',1,['iman','iman']);assign('variant:evacuation:0',2,['raka','raka']);
assign('variant:evacuation:1',0,['iman','iman']);assign('variant:evacuation:1',1,['raka']);
assign('variant:evacuation:2',2,['raka']);
assign('scene:final-call',1,['echo']);assign('variant:final-call:0',0,['mara']);assign('variant:final-call:1',0,['raka']);assign('variant:final-call:2',0,['mara']);assign('variant:final-call:3',0,['raka','raka']);
for(let i=0;i<4;i++)assign(`variant:final-call:${i}`,2,['echo']);
assign('scene:ending',1,['echo']);assign('scene:wrong-voice',0,['echo','narrator']);
assign('scene:culpability',0,['arga','arga']);
assign('scene:act-two-close',2,['lia','operator']);
assign('scene:switch-betrayal',1,['operator']);assign('scene:switch-betrayal',2,['iman','iman']);
assign('variant:crossing-report:0',1,['iman','iman']);assign('variant:crossing-report:2',1,['iman']);
assign('scene:public-channel',2,['lia']);assign('scene:before-publication',2,['lia','lia']);
assign('variant:final-send:3',1,['woman']);assign('scene:dawn-crossing',2,['operator']);
assign('scene:letter-listen',0,['nila','nila']);
assign('scene:dog-bark',0,['worker','worker']);assign('scene:dog-bark',1,['worker','worker']);
assign('scene:dog-home',2,['operator','operator','lia']);
const encounterCast = {
  'encounter-window-1':'girl','encounter-window-2':'man','encounter-window-3':'woman',
  'encounter-rooftops-1':'olderWoman','encounter-rooftops-2':'olderWoman',
  'encounter-tunnel-1':'woman','encounter-tunnel-2':'olderMan','encounter-tunnel-3':'boy',
  'encounter-cargo-1':'man','encounter-cargo-3':'olderMan',
  'encounter-rescue-1':'boy','encounter-rescue-2':'woman','encounter-rescue-3':'olderMan',
  'encounter-static-1':'olderMan','encounter-static-3':'girl'
};
for(const [index,speaker] of [[0,'sari'],[4,'worker'],[7,'girl'],[21,'woman'],[38,'olderMan'],[44,'raka']])assign(`epilogue:${index}`,0,[speaker]);
assign('evidence:relay-message',0,['echo']);assign('evidence:red-strap',1,['raka']);assign('evidence:nila-message',0,['nila']);
function speakerFor(record, paragraph, index) {
  const id=`${record.key}/${paragraph}/${index}`;
  if(overrides[id])return overrides[id];
  if(record.key.startsWith('encounter:'))return encounterCast[record.key.slice(10)] || 'narrator';
  if(record.key.startsWith('evidence:') || record.key.startsWith('ending:') || record.key.startsWith('epilogue:'))return 'narrator';
  return cast[record.speaker] ? record.speaker : 'narrator';
}
module.exports={cast,overrides,speakerFor};
