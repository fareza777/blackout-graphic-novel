(function (scope) {
  'use strict';
  const local=(value,language)=>value?.[language]||value?.en||'';
  const hintKey=scene=>'adHint:'+scene;
  function canOfferHint(state,data){
    const scene=data.scenes[state?.scene];if(!scene)return false;
    if(scene.type==='inspect')return (state.activities[state.scene]?.visited?.length||0)<(scene.hotspots?.length||0);
    if(scene.type==='tune')return !state.flags[scene.completeFlag||scene.tune?.completeFlag||'signalLocked'];
    if(scene.type==='evidence')return !state.flags[scene.compare?.flag];
    if(scene.type==='power')return !state.flags.gridCommitted;
    return scene.type==='hub'&&(scene.choices||[]).slice(0,-1).some(choice=>scope.BLACKOUT.choiceAvailable(state,choice));
  }
  function requestKey(state){return state?`hint:${state.runId}:${state.scene}`:'';}
  function chapterBreak(state,from,to){return to?.chapter>from?.chapter&&[2,3].includes(to.chapter)?`${state.runId}:chapter-${to.chapter}`:'';}
  function grantReceipt(state,receipt,data){
    if(!state||typeof receipt!=='string')return false;
    const match=/^hint:(run-[a-z0-9-]{1,64}):([a-z0-9-]{1,64})$/.exec(receipt);
    if(!match||match[1]!==state.runId||!['inspect','tune','evidence','power','hub'].includes(data.scenes[match[2]]?.type))return false;
    state.flags[hintKey(match[2])]=true;return true;
  }
  function hint(state,data,language='en'){
    const scene=data.scenes[state?.scene];if(!scene)return '';
    const id=language==='id',say=(en,indonesian)=>id?indonesian:en;
    if(scene.type==='inspect'){
      const seen=state.activities[state.scene]?.visited||[];
      const missing=scene.hotspots?.filter(item=>!seen.includes(item.id)).map(item=>local(item.title,language)).filter(Boolean);
      return missing?.length?say('Look more closely at '+missing.join(' and ')+'. Each detail has something to tell you.','Periksa '+missing.join(' dan ')+' lebih dekat. Setiap detail menyimpan petunjuk.'):
        say('You have examined this room. Use the route below to follow what you found.','Ruangan ini sudah kamu periksa. Ikuti jalur di bawah untuk melanjutkan petunjuknya.');
    }
    if(scene.type==='tune')return say(`Bring the dial close to ${scene.tune?.target?.toFixed(1)} MHz. Lock the signal when the transmission becomes clear.`,`Dekatkan pemutar ke ${scene.tune?.target?.toFixed(1)} MHz. Kunci sinyal saat siarannya jernih.`);
    if(scene.type==='evidence'){
      const pair=scene.compare?.pair||[];
      return pair.length?say('Compare '+pair.map(key=>local(data.evidence[key]?.title,language)).join(' with ')+'. Pay attention to the time and who was still there.','Bandingkan '+pair.map(key=>local(data.evidence[key]?.title,language)).join(' dengan ')+'. Perhatikan waktu dan siapa yang masih ada di sana.'):
        say('Look for a detail that two independent records can confirm.','Cari detail yang bisa dikonfirmasi oleh dua catatan berbeda.');
    }
    if(scene.type==='power')return say('You can support two circuits. The clinic protects patients; the relay keeps information moving; the dock gives the courier a route. Choose the promise you can keep.','Kamu bisa menyalakan dua sirkuit. Klinik melindungi pasien, relai menjaga informasi, dan dermaga memberi jalan untuk kurir. Pilih janji yang bisa kamu tepati.');
    if(scene.type==='hub'){
      const calls=(scene.choices||[]).slice(0,-1).filter(choice=>scope.BLACKOUT.choiceAvailable(state,choice)).slice(0,2).map(choice=>'“'+local(choice.label,language)+'”');
      return calls.length?say('These calls are still open: '+calls.join(' and ')+'. Follow them before leaving the channel; they may change the help available later.','Panggilan ini masih terbuka: '+calls.join(' dan ')+'. Ikuti sebelum meninggalkan kanal; bantuan yang tersedia nanti bisa berubah.'):
        say('The calls you can help on this channel are complete. You can carry what you learned into the next part of the investigation.','Panggilan yang bisa dibantu di kanal ini sudah selesai. Bawa petunjuk yang didapat ke bagian penyelidikan berikutnya.');
    }
    if(state.scene==='publication')return say('Truth needs proof, and witnesses need protection. Check your verified records and the names inside them before transmitting.','Kebenaran membutuhkan bukti, dan saksi membutuhkan perlindungan. Periksa catatan terverifikasi serta nama di dalamnya sebelum mengirim.');
    return say('Read the whole conversation before choosing. Notice who needs immediate help, and what you can verify instead of assume. Your notebook keeps the facts you have collected.','Baca percakapan sampai selesai sebelum memilih. Perhatikan siapa yang perlu segera ditolong dan apa yang bisa kamu pastikan. Buku catatan menyimpan fakta yang sudah kamu kumpulkan.');
  }
  scope.BLACKOUT_MONETIZATION={hintKey,canOfferHint,requestKey,chapterBreak,grantReceipt,hint};
})(typeof window==='undefined'?globalThis:window);
