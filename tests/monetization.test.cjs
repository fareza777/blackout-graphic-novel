'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const context=vm.createContext({window:{},console});
for(const file of ['story.js','core.js','monetization.js'])vm.runInContext(fs.readFileSync(path.join(__dirname,'..',file),'utf8'),context);
const data=context.window.GAME_DATA,engine=context.window.BLACKOUT,ads=context.window.BLACKOUT_MONETIZATION;
const fresh=()=>{const state=engine.newState(123);state.scene='desk';return state;};
test('earned receipts grant one persistent scene hint without changing the story or resources',()=>{
  const state=fresh(),before=JSON.stringify(state);const receipt=ads.requestKey(state);
  assert.equal(ads.grantReceipt(state,receipt,data),true);
  assert.equal(state.flags[ads.hintKey('desk')],true);
  const once=JSON.stringify(state);ads.grantReceipt(state,receipt,data);assert.equal(JSON.stringify(state),once);
  const restored=engine.restoreState(JSON.parse(once),data);assert.equal(restored.flags[ads.hintKey('desk')],true);
  delete state.flags[ads.hintKey('desk')];assert.equal(JSON.stringify(state),before);
});
test('receipts from another night, malformed requests and non-task scenes grant nothing',()=>{
  for(const value of ['hint:run-other:desk','hint:run-0000007b:missing','hint:run-0000007b:arrival','hint:run-0000007b:ending',null,'<script>']){
    const state=fresh(),before=JSON.stringify(state);assert.equal(ads.grantReceipt(state,value,data),false);assert.equal(JSON.stringify(state),before);
  }
});
test('automatic ads are offered only when moving forward into chapter two or three',()=>{
  const state=fresh();assert.equal(ads.chapterBreak(state,{chapter:1},{chapter:2}),'run-0000007b:chapter-2');
  for(const pair of [[1,1],[2,1],[2,2],[3,3],[3,4]])assert.equal(ads.chapterBreak(state,{chapter:pair[0]},{chapter:pair[1]}),'');
});
test('reward offers are restricted to unfinished interactive tasks',()=>{
  const state=fresh();assert.equal(ads.canOfferHint(state,data),true);
  state.activities.desk={visited:data.scenes.desk.hotspots.map(item=>item.id)};assert.equal(ads.canOfferHint(state,data),false);
  state.scene='arrival';assert.equal(ads.canOfferHint(state,data),false);state.scene='ending';assert.equal(ads.canOfferHint(state,data),false);
});
test('tactical hints use actual radio targets, owned records and unexamined objects in both languages',()=>{
  const state=fresh();state.activities.desk={visited:[data.scenes.desk.hotspots[0].id]};
  assert.ok(!ads.hint(state,data).includes(data.scenes.desk.hotspots[0].title.en));
  for(const [sceneId,scene] of Object.entries(data.scenes)){
    if(!['inspect','tune','evidence','power','hub'].includes(scene.type))continue;state.scene=sceneId;
    for(const language of ['en','id']){const text=ads.hint(state,data,language);assert.ok(text.length>35,sceneId);assert.ok(!/undefined|NaN/.test(text),sceneId);}
    if(scene.type==='tune')assert.ok(ads.hint(state,data).includes(scene.tune.target.toFixed(1)));
    if(scene.type==='evidence')for(const id of scene.compare.pair)assert.ok(ads.hint(state,data).includes(data.evidence[id].title.en));
  }
});
