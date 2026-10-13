(function () {
  'use strict';
  const data = window.GAME_DATA;
  const engine = window.BLACKOUT;
  const SAVE_KEY = 'blackout-frequency-save-v1';
  const SETTINGS_KEY = 'blackout-frequency-settings-v1';
  const REVIEW_KEY = 'blackout-frequency-review-v1';
  const $ = id => document.getElementById(id);
  const copy = {
    voices:['Voices','Kontak'], notes:['Notes','Catatan'], previous:['Back','Kembali'], readNext:['Continue →','Lanjut →'],
    responseNext:['Choose your response →','Tentukan jawabanmu →'],responseStage:['Your next move','Langkahmu berikutnya'],readConversation:['Read the conversation','Baca percakapannya'],
    responsePrompt:['What will you say over the radio?','Apa yang akan kamu sampaikan lewat radio?'],hubResponsePrompt:['Some calls can wait. Others may need you now. Which one will you follow?','Sebagian panggilan bisa menunggu. Yang lain mungkin membutuhkanmu sekarang. Panggilan mana yang akan kamu ikuti?'],
    settings:['Settings','Pengaturan'], soundOff:['Sound off','Suara mati'], soundOn:['Sound on','Suara aktif'],
    demoBadge:['PLAYABLE CHAPTER · 01','BAB DEMO · 01'], heroEyebrow:['One night. Three voices. Your call.','Satu malam. Tiga suara. Keputusanmu.'],
    heroSummary:['Three voices in a city gone dark. Find the truth. Decide who gets through.','Tiga suara di kota yang padam. Temukan kebenaran. Tentukan siapa yang bisa keluar.'],
    begin:['Begin the night →','Mulai malam ini →'], resume:['Continue transmission','Lanjutkan komunikasi'],
    homeNote:['Explore the station. Find the signal. Make the call.','Jelajahi stasiun. Temukan sinyal. Tentukan langkah.'],
    featureExplore:['Investigate your surroundings','Selidiki sekitarmu'], featureConnect:['Connect the evidence','Hubungkan bukti'], featureDecide:['Live with your decisions','Hadapi akibat keputusanmu'],
    stationLabel:['NORTH COAST / STATION 04','PESISIR UTARA / STASIUN 04'], contacts:['On the other end','Di ujung panggilan'], backupPower:['Backup battery','Baterai cadangan'],
    stationNote:['The receiver runs on battery. The city circuits need your generator.','Penerima memakai baterai. Sirkuit kota membutuhkan generator.'],
    notebook:['FIELD NOTES','CATATAN LAPANGAN'], notebookHint:['Details worth remembering.','Detail yang perlu diingat.'],
    noEvidence:['Your notebook is empty. Inspect the station to find your first lead.','Catatanmu masih kosong. Periksa stasiun untuk menemukan petunjuk.'],
    autoSaved:['Progress saved on this device','Progres tersimpan di perangkat ini'], unsaved:['This browser cannot save progress','Browser ini tidak dapat menyimpan progres'], returnHome:['Return to station menu','Kembali ke menu stasiun'],
    language:['Language','Bahasa'], automatic:['Automatic · device language','Otomatis · bahasa perangkat'],
    languageNote:['Automatic follows your device when supported. Other languages use English.','Otomatis mengikuti bahasa perangkat yang didukung. Bahasa lainnya memakai English.'],
    ambientAudio:['Ambient radio audio','Suara suasana radio'], audioNote:['All clues are also shown as text. Headphones are optional.','Semua petunjuk juga ditampilkan sebagai teks. Headphone tidak diperlukan.'],
    done:['Done','Selesai'], close:['Close','Tutup'], restartTitle:['Begin a new night?','Mulai malam baru?'],
    restartNote:['Your current chapter progress will be replaced. Language and audio settings stay the same.','Progres bab saat ini akan diganti. Pengaturan bahasa dan suara tetap sama.'], newNight:['Start a new night','Mulai malam baru'], cancel:['Cancel','Batal'],
    operator:['You','Kamu'], operatorRole:['Temporary night operator','Operator malam pengganti'], system:['Station log','Catatan stasiun'], systemRole:['Observation','Pengamatan'],
    chapter:['CHAPTER 01','BAB 01'], uncertain:['Distant','Menjauh'], neutral:['Listening','Mendengarkan'], connected:['Trusting','Percaya'],
    artDesk:['Rain at the dispatch station. The operator is seen from behind.','Hujan di stasiun komunikasi. Operator terlihat dari belakang.'],
    artHands:['Yellow-gloved hands grip a damaged radio. No face is visible.','Tangan bersarung kuning menggenggam radio rusak. Tidak ada wajah terlihat.'],
    artCorridor:['A courier seen from behind in a dark corridor.','Kurir terlihat dari belakang di lorong gelap.'],
    artEmpty:['An empty corridor, a radio and a red strap left behind.','Lorong kosong, radio dan tali merah tertinggal.'],
    sceneCaption:['COASTAL DISPATCH / RESERVE LINE','KOMUNIKASI PESISIR / JALUR CADANGAN'],
    inspectHint:['Find the log and the circuit diagram.','Temukan catatan dan diagram sirkuit.'],
    collected:['Note saved','Catatan tersimpan'], alreadyCollected:['Already saved','Sudah tersimpan'], deskReady:['Ready to answer.','Siap menjawab.'],
    frequency:['Frequency','Frekuensi'], signal:['Signal strength','Kekuatan sinyal'], tuningHint:['Frequency hint: circuit diagram in Notes.','Petunjuk frekuensi: diagram di Catatan.'],
    tuneLower:['Lower frequency','Turunkan frekuensi'], tuneHigher:['Raise frequency','Naikkan frekuensi'], lockSignal:['Lock signal','Kunci sinyal'],
    signalWeak:['Static. Keep tuning.','Masih berderau. Setel lagi.'], signalClear:['Clear signal. Ready to lock.','Sinyal jernih. Siap dikunci.'],
    signalLocked:['Dispatch saved to Notes.','Pesan tersimpan di Catatan.'], cannotLock:['Weak signal. Check the frequency in Notes.','Sinyal lemah. Periksa frekuensi di Catatan.'],
    compareHint:['Select two notes that contradict each other, then compare them. You may also continue without verifying the order.','Pilih dua catatan yang bertentangan, lalu bandingkan. Kamu juga bisa melanjutkan tanpa memeriksa perintah.'],
    compare:['Compare selected notes','Bandingkan catatan terpilih'], selectTwo:['Choose two notes to compare.','Pilih dua catatan untuk dibandingkan.'],
    mismatch:['These notes do not establish the broadcast time.','Catatan ini tidak memastikan waktu siaran.'],
    verified:['00:18 on the broadcast. Recorded at 00:31. The times do not match.','Siaran: 00.18. Direkam: 00.31. Waktunya tidak cocok.'],
    clinic:['CLINIC','KLINIK'], relay:['RELAY','RELAI'], dock:['DOCK','DERMAGA'],
    clinicDetail:['Evacuation lights. Mara can lead people out.','Lampu evakuasi. Mara bisa memandu orang keluar.'],
    relayDetail:['Trace calls. Send evidence outside.','Lacak panggilan. Kirim bukti keluar.'],
    dockDetail:['Open the gate for Raka.','Buka gerbang untuk Raka.'],
    powerHint:['Your generator can sustain exactly two circuits. Select the routes before committing.','Generatormu mampu memasok tepat dua sirkuit. Pilih jalur sebelum mengunci keputusan.'],
    confirmPower:['Commit power routing','Kunci pembagian daya'], twoCircuits:['Select exactly two circuits.','Pilih tepat dua sirkuit.'],
    swapCircuit:['Turn off a circuit before enabling another.','Matikan satu sirkuit sebelum menyalakan yang lain.'],
    darkRoute:['Left without power','Tidak mendapat daya'], gridCommitted:['Power routed. The dark circuit will change what happens next.','Daya telah dibagi. Sirkuit yang gelap memengaruhi kejadian berikutnya.'],
    powerAlready:['The routing is committed. Your choices now determine the rescue.','Pembagian daya sudah dikunci. Pilihanmu berikutnya menentukan penyelamatan.'],
    choiceLocked:['Complete the station activity to continue.','Selesaikan kegiatan stasiun untuk melanjutkan.'],
    relationshipChanged:['Your response changed the connection.','Jawabanmu mengubah hubungan.'], decisionSaved:['Decision recorded.','Keputusan tercatat.'],
    endingKicker:['DAWN / TRANSMISSION ENDED','FAJAR / KOMUNIKASI BERAKHIR'], endingMara:['Mara & the clinic','Mara & klinik'], endingRaka:['Raka','Raka'], endingTruth:['The dispatch evidence','Bukti pesan pusat'],
    evacuated:['Evacuated','Berhasil keluar'], stranded:['Arrival unconfirmed','Belum ada kabar tiba'], escaped:['Reached shelter','Mencapai tempat aman'], unanswered:['No arrival reply yet','Belum ada jawaban dari tempat aman'], released:['Sent beyond the station','Terkirim keluar stasiun'], contained:['Remains in your notebook','Tersimpan di catatanmu'],
    choicesMade:['Decisions recorded','Keputusan tercatat'], replay:['Try another route','Coba jalur lain'],
    openFrequencyTitle:['Two voices, still here','Dua suara, masih di sini'],
    openFrequencyBody:['Mara and Raka answer from shelter. The thirteen-minute mismatch has left your station. You keep the line open. Someone is still listening.','Mara dan Raka menjawab dari tempat aman. Bukti selisih tiga belas menit terkirim keluar. Kanal tetap kamu buka. Seseorang masih mendengarkan.'],
    quietDawnTitle:['A quiet landing','Pendaratan yang sunyi'],
    quietDawnBody:['Mara and Raka reach shelter. The strange order stays in your notebook. Their breathing is steady. The city is still dark.','Mara dan Raka mencapai tempat aman. Perintah janggal tetap di catatanmu. Napas mereka mulai tenang. Kota masih gelap.'],
    oneVoiceTitle:['One voice answers','Satu suara menjawab'],
    oneVoiceBody:['One voice answers from shelter. The other line stays silent. You write the last known position in the log, and call again.','Satu suara menjawab dari tempat aman. Kanal lain masih sunyi. Kamu mencatat posisi terakhirnya, lalu memanggil lagi.'],
    deadAirTitle:['No answer yet','Belum ada jawaban'],
    deadAirBody:['Neither caller has confirmed arrival. You write both names on the rescue board and leave their lines open. Silence is not an answer.','Keduanya belum memberi kabar tiba. Kamu menulis nama mereka di papan penyelamatan dan membiarkan kanal terbuka. Sunyi bukan jawaban.'],
    truthSentExtra:['The evidence still reached the outside. It will carry a record of the unanswered calls.','Bukti tetap terkirim keluar. Di dalamnya tersimpan jejak panggilan yang tak terjawab.'],
    sceneRegion:['Story and activities','Cerita dan kegiatan'], contactsRegion:['Contacts and station','Kontak dan stasiun'], evidenceRegion:['Evidence notebook','Catatan bukti']
  };
  Object.assign(copy, {
    demoBadge:['THREE CHAPTERS · MANY POSSIBLE DAWNS','TIGA BAB · BANYAK KEMUNGKINAN FAJAR'],
    begin:['New game →','Permainan baru →'],returnHome:['Station menu','Menu stasiun'],
    heroSummary:['A voice on the radio knows your name. Someone has been turning rescue into a weapon. Keep listening. The night is not finished with you.','Suara di radio mengenal namamu. Seseorang menjadikan penyelamatan sebagai senjata. Terus dengarkan. Malam ini belum selesai denganmu.'],
    splashEyebrow:['A story carried by voices','Cerita yang dibawa suara'],splashEnter:['Enter the frequency →','Masuk ke frekuensi →'],splashNote:['An original faceless graphic novel','Novel grafis orisinal tanpa wajah'],
    onboardingEyebrow:['Before the night begins','Sebelum malam dimulai'],onboardingSkip:['Skip introduction','Lewati pengantar'],onboardingFinish:['Enter the station →','Masuk ke stasiun →'],
    onboardingOneTitle:['Listen. Look closer.','Dengar. Perhatikan lagi.'],
    onboardingOneBody:['A ringing telephone can lie. A cold cup can tell the truth. Inspect the station and collect the details that other people leave behind.','Telepon yang berdering bisa berbohong. Cangkir dingin bisa berkata jujur. Periksa stasiun dan simpan detail yang ditinggalkan orang lain.'],
    onboardingTwoTitle:['Your hands change the story.','Tanganmu mengubah cerita.'],
    onboardingTwoBody:['Tune a live signal. Connect two pieces of evidence. Choose which routes receive power. The people on the other end will remember how you answer.','Cari sinyal langsung. Hubungkan dua bukti. Pilih jalur yang mendapat daya. Orang di ujung panggilan akan mengingat caramu menjawab.'],
    onboardingThreeTitle:['No two nights arrive alike.','Setiap malam punya suaranya.'],
    onboardingThreeBody:['Follow the main investigation, or stop for someone who needs you. New games bring different encounters. Your current night stays the same when you return.','Ikuti penyelidikan utama, atau berhenti demi orang yang membutuhkanmu. Permainan baru membawa pertemuan berbeda. Malammu tetap sama saat kamu kembali.'],
    gallery:['Art gallery','Galeri ilustrasi'],guide:['How to play','Cara bermain'],about:['About','Tentang'],share:['Share','Bagikan'],rate:['Rate this story','Nilai cerita ini'],viewArt:['View art','Lihat ilustrasi'],quests:['Quests','Misi'],
    textSize:['Text size','Ukuran teks'],textRegular:['Regular','Biasa'],textLarge:['Large','Besar'],reduceMotion:['Reduce motion','Kurangi gerakan'],
    aboutVersion:['Original interactive graphic novel · 1.0','Novel grafis interaktif orisinal · 1.0'],
    aboutStory:['A city without light. People who still answer. A story about the promises we make when nobody can see us.','Kota tanpa cahaya. Orang-orang yang masih menjawab. Cerita tentang janji yang kita buat saat tak ada yang melihat.'],
    aboutCredits:['Original story, code, and AI-assisted illustrations created for Blackout Frequency. All characters are fictional. People appear only from behind, in silhouette, or with their faces fully covered.','Cerita, kode, dan ilustrasi berbantuan AI dibuat khusus untuk Frekuensi Padam. Semua tokoh fiktif. Sosok manusia hanya tampak dari belakang, sebagai siluet, atau dengan wajah tertutup sepenuhnya.'],
    aboutAccess:['Play with or without sound. Adjust text size, language, and motion in Settings. Your progress stays on this device.','Mainkan dengan atau tanpa suara. Atur ukuran teks, bahasa, dan gerakan di Pengaturan. Progres tersimpan di perangkat ini.'],
    shareNote:['Send someone a frequency worth listening to.','Bagikan frekuensi yang layak didengarkan.'],shareMessage:['Share message','Pesan berbagi'],copyShare:['Copy message','Salin pesan'],shareDevice:['Share…','Bagikan…'],
    shareInvitation:['I am playing Blackout Frequency: a coastal city goes dark, a radio keeps ringing, and every answer changes someone’s night.','Saya bermain Frekuensi Padam: kota pesisir padam, radio terus berdering, dan setiap jawaban mengubah malam seseorang.'],
    shareLocal:['This preview runs on your device. The message contains no public download link yet.','Pratinjau ini berjalan di perangkatmu. Pesan belum menyertakan tautan unduhan publik.'],
    copied:['Message copied.','Pesan tersalin.'],copyManual:['Select the message and copy it with your device’s copy command.','Pilih pesan, lalu gunakan perintah salin di perangkatmu.'],shared:['Share sheet opened.','Panel berbagi dibuka.'],shareUnavailable:['Sharing is unavailable here. You can copy the message instead.','Berbagi belum tersedia di sini. Kamu bisa menyalin pesannya.'],
    rateNote:['How did the night stay with you?','Apa yang tertinggal dari malam ini?'],reviewLabel:['A few words, if you like','Beberapa kata, kalau kamu mau'],rateLocal:['Your rating is saved on this device. It is not posted to an app store.','Penilaian tersimpan di perangkat ini. Penilaian tidak dikirim ke toko aplikasi.'],saveReview:['Save my rating','Simpan penilaian'],ratingSaved:['Your words are saved here. Thank you for leaving them.','Kata-katamu tersimpan di sini. Terima kasih sudah meninggalkannya.'],chooseRating:['Choose a star rating first.','Pilih jumlah bintang dulu.'],ratingNotSaved:['This browser could not save your rating.','Browser ini tidak dapat menyimpan penilaianmu.'],star:['star','bintang'],stars:['stars','bintang'],
    questNote:['Follow the signal. Remember the people.','Ikuti sinyalnya. Ingat orang-orangnya.'],mainQuests:['Main investigation','Penyelidikan utama'],sideQuests:['People worth stopping for','Orang yang layak kita temani'],questActive:['In progress','Sedang dijalani'],questComplete:['Completed','Selesai'],questAvailable:['A lead worth following','Petunjuk yang bisa diikuti'],questMissed:['The moment has passed','Kesempatannya sudah berlalu'],questLocked:['Still ahead','Masih menunggu'],questCompletedToast:['A promise kept','Janji yang ditepati'],questEmpty:['Your first lead is waiting at the station.','Petunjuk pertamamu menunggu di stasiun.'],
    galleryNote:['The places and moments your journey has uncovered. Open an illustration to see every detail.','Tempat dan momen yang ditemukan dalam perjalananmu. Buka ilustrasi untuk melihatnya utuh.'],galleryEmpty:['Begin the night to uncover its illustrations.','Mulai malam ini untuk membuka ilustrasinya.'],illustration:['Illustration','Ilustrasi'],artUnavailable:['This illustration is still being prepared.','Ilustrasi ini masih disiapkan.'],
    chapterPrefix:['CHAPTER','BAB'],choicesPage:['More paths','Jalur lainnya'],nextChoices:['More →','Lainnya →'],previousChoices:['← Earlier','← Sebelumnya'],
    inspectGeneric:['Look for the marked details.','Periksa detail yang ditandai.'],inspectReady:['The clues are in your notebook.','Petunjuk sudah tersimpan di catatanmu.'],tuningHint:['The target frequency is written in your Notes.','Frekuensi tujuan tertulis di Catatan.'],signalLocked:['The transmission is saved in Notes.','Transmisi tersimpan di Catatan.'],mismatch:['These two notes do not settle the question. Try another connection.','Dua catatan ini belum menjawabnya. Coba hubungan yang lain.'],evidenceVerified:['The pieces fit. A new conclusion is in your notebook.','Kedua petunjuk cocok. Kesimpulan baru tersimpan di catatanmu.'],
    endingRescue:['The people at the bridge','Orang-orang di jembatan'],endingWitness:['Private identities','Identitas pribadi'],endingArchive:['The archive','Arsip'],rescueSafe:['Reached higher ground','Mencapai tempat tinggi'],rescuePartial:['Partial crossing; search continues','Sebagian lewat; pencarian berlanjut'],rescueLost:['The crossing was lost','Penyeberangan terputus'],witnessProtected:['Identity protected','Identitas terlindungi'],witnessExposed:['Identity exposed','Identitas terungkap'],archiveBurned:['Destroyed','Dimusnahkan'],archiveShared:['Verified and released','Diperiksa dan disebarkan'],archiveUnverified:['Released without verification','Disebarkan tanpa pemeriksaan'],endingDetails:['Read the people’s epilogues','Baca kisah sesudahnya'],epilogueTitle:['After the night','Sesudah malam itu'],endingSummary:['Your route through the night','Jalurmu sepanjang malam'],seeOutcome:['See outcome','Lihat hasil'],galleryMoment:['Moment','Momen'],contactPresent:['On the line','Di kanal ini'],restartNote:['Your current journey will be replaced. A new night brings new encounters. Language, audio, and accessibility settings stay.','Perjalanan saat ini akan diganti. Malam baru membawa pertemuan baru. Pengaturan bahasa, suara, dan aksesibilitas tetap tersimpan.']
  });
  Object.assign(copy, {
    languageNote:['English is the default. Choose Automatic to follow your device. Unsupported languages use English.','Bahasa awal adalah Inggris. Pilih Otomatis untuk mengikuti perangkat. Bahasa lain memakai Inggris.'],
    voiceover:['English voiceover','Sulih suara Inggris'],voiceNote:['A full cast voices every story route. Voiceover stays in English when the text language changes.','Setiap jalur cerita dibacakan oleh para tokohnya. Suara tetap berbahasa Inggris saat bahasa teks diganti.'],
    voiceAutoplay:['Play each page automatically','Putar setiap halaman otomatis'],voiceVolume:['Voice volume','Volume suara'],voiceSpeed:['Voice speed','Kecepatan suara'],
    voicePlay:['Play voiceover','Putar sulih suara'],voicePause:['Pause voiceover','Jeda sulih suara'],voiceReplay:['Replay this page','Ulangi halaman ini'],voicePosition:['Voiceover position','Posisi sulih suara'],voiceOff:['Voiceover off','Suara nonaktif'],voiceRetry:['Audio unavailable · tap to retry','Audio belum tersedia · ketuk untuk coba lagi'],voiceLoading:['Loading…','Memuat…'],recordedVoice:['Recorded voice','Suara rekaman'],shareOpened:['Share sheet opened.','Pilihan berbagi dibuka.']
  });
  const savedSettings = readStorage(SETTINGS_KEY);
  Object.assign(copy, {
    stationAssist:['A clearer signal','Sinyal yang lebih jernih'],
    rewardHintNote:['Watch an optional ad to unlock one helpful hint for your current scene. You can return to the hint any time during this night.','Tonton iklan opsional untuk membuka satu petunjuk bagi adegan ini. Petunjuk bisa dibaca lagi selama permainan malam ini.'],
    watchHint:['Watch ad · unlock one hint','Tonton iklan · buka satu petunjuk'],
    loadHintAd:['Load an optional ad','Muat iklan opsional'],
    hintAdLoading:['Loading an optional ad…','Memuat iklan opsional…'],
    hintAdOffline:['Connect to the internet to load an optional ad.','Hubungkan ke internet untuk memuat iklan opsional.'],
    hintAdUnavailable:['No ad is available right now. You can keep playing and try again later.','Iklan belum tersedia. Kamu bisa terus bermain dan mencoba lagi nanti.'],
    hintAdClosed:['The ad closed before a hint was earned. You can try again later.','Iklan ditutup sebelum petunjuk didapat. Kamu bisa mencoba lagi nanti.'],
    hintUnlocked:['Hint unlocked · saved for this night','Petunjuk terbuka · tersimpan untuk malam ini'],
    adPrivacy:['Ad privacy choices','Pilihan privasi iklan']
  });
  let settings = window.BLACKOUT_AUDIO.normalizeSettings(savedSettings,window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  writeStorage(SETTINGS_KEY,settings);
  function deviceLanguage(){try{return window.BlackoutAndroid?.getDeviceLanguage()||navigator.language;}catch(_){return navigator.language;}}
  let language = engine.languageFor(settings.language, deviceLanguage());
  let state = engine.restoreState(readStorage(SAVE_KEY), data);
  const monetization=window.BLACKOUT_MONETIZATION;
  const nativeAds=typeof window.BlackoutAndroid?.showRewarded==='function';
  let adState={online:false,rewardedReady:false,loading:false,privacyRequired:false};
  let pendingReward=null,chapterContinuation=null;
  let toastTimer;
  let audio;
  let saveAvailable = true;
  let onboardingIndex = 0;
  let rating = 0;
  let inspectionResizeObserver;
  let currentStoryVoice=null;
  let evidenceVoiceReturn=null;
  const voiceLibrary=window.BLACKOUT_VOICES;
  const voicePlayer=new window.BLACKOUT_AUDIO.VoicePlayer({media:$('voiceMedia'),onChange:updateVoiceControls});
  voicePlayer.configure(settings);
  function clockTime(seconds){const value=Math.max(0,Math.floor(seconds||0));return `${Math.floor(value/60)}:${String(value%60).padStart(2,'0')}`;}
  function updateVoiceControls(view) {
    const panel=$('voicePanel');panel.hidden=!view.clip;panel.dataset.state=view.status;panel.dataset.speaker=view.speaker;panel.dataset.source=view.clip?.src||'';
    const active=view.status==='playing'||view.status==='loading';
    $('voicePlay').textContent=active?'Ⅱ':'▶';$('voicePlay').setAttribute('aria-label',t(active?'voicePause':'voicePlay'));
    $('voiceReplay').setAttribute('aria-label',t('voiceReplay'));$('voiceProgress').setAttribute('aria-label',t('voicePosition'));
    const actor=voiceLibrary?.cast[view.speaker];
    $('voiceSpeaker').textContent=!settings.voiceover?t('voiceOff'):view.status==='error'?t('voiceRetry'):view.status==='loading'?t('voiceLoading'):view.speaker==='echo'?t('recordedVoice'):view.speaker==='narrator'&&language==='id'?'Narator':actor?.name||'Narrator';
    $('voiceTime').textContent=`EN · ${clockTime(view.elapsed)} / ${clockTime(view.duration)}`;
    $('voiceProgress').max=String(Math.max(0.1,view.duration));$('voiceProgress').value=String(view.elapsed);$('voiceProgress').setAttribute('aria-valuetext',`${clockTime(view.elapsed)} / ${clockTime(view.duration)}`);
    $('voiceProgress').disabled=!view.clip||view.status==='error';$('voiceReplay').disabled=!view.clip;
    panel.setAttribute('aria-label',t('voiceover'));
    if(audio){const target=active?0.008:0.025;audio.master.gain.setTargetAtTime(target,audio.context.currentTime,0.18);}
  }
  function narrationClips(value){return String(value||'').split('\n\n').filter(Boolean).map(paragraph=>voiceLibrary?.clips[paragraph]).filter(Boolean);}
  function setStoryVoice(value,context,autoplay=settings.voiceAutoplay){
    currentStoryVoice={value,context};
    if($('evidenceDialog').open)return;
    $('storyVoiceSlot').append($('voicePanel'));
    voicePlayer.setClips(narrationClips(value),{autoplay:autoplay&&settings.voiceover,context});
  }
  function setEvidenceVoice(value,context){
    if(!evidenceVoiceReturn)evidenceVoiceReturn={elapsed:voicePlayer.view.elapsed,story:currentStoryVoice};
    voicePlayer.pause();$('evidenceVoiceSlot').append($('voicePanel'));
    voicePlayer.setClips(narrationClips(value),{autoplay:false,context:'note:'+context});
  }
  function saveVoiceSettings(){writeStorage(SETTINGS_KEY,settings);voicePlayer.configure(settings);}
  function syncAdPlacement(){if(nativeAds)try{window.BlackoutAndroid.setAdPlacement(document.body.dataset.screen,Boolean(document.querySelector('dialog[open]')),language);}catch(_){/* An unavailable ad service never prevents reading. */}}
  function updateRewardControls(){
    const scene=data.scenes[state?.scene],unlocked=Boolean(state?.flags[monetization.hintKey(state.scene)]);
    $('rewardHintCard').hidden=!nativeAds||(!unlocked&&!monetization.canOfferHint(state,data));
    $('adPrivacySection').hidden=!nativeAds||!adState.privacyRequired;
    $('rewardHintText').hidden=!unlocked;$('rewardHintText').textContent=unlocked?monetization.hint(state,data,language):'';
    $('rewardHintNote').hidden=unlocked;$('rewardHintBtn').hidden=unlocked;
    $('rewardHintBtn').disabled=Boolean(pendingReward)||adState.loading;
    $('rewardHintBtn').textContent=t(adState.rewardedReady?'watchHint':adState.loading?'hintAdLoading':'loadHintAd');
    $('rewardHintStatus').textContent=t(unlocked?'hintUnlocked':adState.rewardedReady?'':!adState.online?'hintAdOffline':adState.loading?'hintAdLoading':'hintAdUnavailable');
  }
  function reconcileRewards(){
    if(!nativeAds||!state)return;
    try{for(const receipt of JSON.parse(window.BlackoutAndroid.getPendingRewards())){
      if(monetization.grantReceipt(state,receipt,data)){save();if(saveAvailable)window.BlackoutAndroid.acknowledgeReward(receipt);}
      else window.BlackoutAndroid.acknowledgeReward(receipt);
    }}catch(_){/* A persisted earned receipt can be applied when the bridge returns. */}
    updateRewardControls();
  }
  window.addEventListener('blackout-ad-event',event=>{
    const detail=event.detail;if(!detail||typeof detail!=='object')return;
    if(detail.type==='state'){adState=detail;updateRewardControls();return;}
    if(detail.type==='rewarded'){
      if(detail.status==='earned')reconcileRewards();
      if(['unavailable','failed','dismissed'].includes(detail.status)&&detail.key===pendingReward){pendingReward=null;updateRewardControls();if(!state?.flags[monetization.hintKey(state.scene)])$('rewardHintStatus').textContent=t(detail.status==='dismissed'?'hintAdClosed':'hintAdUnavailable');}
    }
    if(detail.type==='interstitial'&&detail.key===chapterContinuation?.key&&['skipped','failed','dismissed'].includes(detail.status)){
      const pending=chapterContinuation;chapterContinuation=null;
      if(state?.runId===pending.run&&document.body.dataset.screen==='game')render(true);
    }
  });
  const onboardingPages = [
    ['onboardingOneTitle','onboardingOneBody'],['onboardingTwoTitle','onboardingTwoBody'],['onboardingThreeTitle','onboardingThreeBody']
  ];
  const compactLayout = window.matchMedia('(max-width: 900px)');
  const stationSidebar = document.querySelector('.station-sidebar');
  const notesSidebar = document.querySelector('.evidence-sidebar');
  function t(key) { return copy[key]?.[language === 'id' ? 1 : 0] || key; }
  function text(value) { return typeof value === 'string' ? value : (value?.[language] || value?.en || ''); }
  function node(tag, className, content) { const element = document.createElement(tag); if (className) element.className = className; if (content !== undefined) element.textContent = content; return element; }
  function readStorage(key) { try { return JSON.parse(localStorage.getItem(key)); } catch (_) { return null; } }
  function writeStorage(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); return true; } catch (_) { return false; } }
  function save() { if (state) saveAvailable = writeStorage(SAVE_KEY, state); $('saveStatus').textContent = t(saveAvailable ? 'autoSaved' : 'unsaved'); }
  function hasProgress() { return Boolean(state); }
  function toast(message) { clearTimeout(toastTimer); $('toast').textContent = message; $('toast').hidden = false; toastTimer = setTimeout(() => { $('toast').hidden = true; }, 3600); }
  function paragraphs(target, value) { target.replaceChildren(...String(value).split('\n\n').filter(Boolean).map(part => node('p','',part))); }
  function activityFor(id, defaults = {}) {
    const activity = state.activities[id] ||= {};
    for (const [key,value] of Object.entries(defaults)) if (activity[key] === undefined) activity[key] = value;
    return activity;
  }
  function syncAuxiliaryPanels() {
    if (compactLayout.matches) {
      $('stationDialogContent').append(stationSidebar);
      $('notesDialogContent').append(notesSidebar);
    } else {
      for (const id of ['stationDialog','notesDialog']) if ($(id).open) $(id).close();
      document.querySelector('.game-layout').prepend(stationSidebar);
      document.querySelector('.game-layout').append(notesSidebar);
    }
  }
  function setScreen(name) {
    if(name!=='game')voicePlayer.pause();
    const views = {splash:'splashScreen',onboarding:'onboardingScreen',home:'home',game:'game'};
    for (const [key,id] of Object.entries(views)) $(id).hidden = key !== name;
    document.body.dataset.screen = name;
    syncAdPlacement();
    $('contactsBtn').hidden = name !== 'game';
    $('notesBtn').hidden = name !== 'game';
    window.scrollTo({top:0,behavior:'instant'});
  }
  function applyAccessibility() {
    document.body.dataset.textSize = settings.textSize;
    document.body.dataset.reduceMotion = String(settings.reduceMotion);
    $('textSizeSelect').value = settings.textSize;
    $('motionToggle').checked = settings.reduceMotion;
  }
  function renderOnboarding() {
    const page = onboardingPages[onboardingIndex];
    $('onboardingTitle').textContent = t(page[0]);
    $('onboardingBody').textContent = t(page[1]);
    $('onboardingArt').src = `assets/scene-onboarding-${onboardingIndex+1}.png`;
    $('onboardingArt').alt = t(page[0]);
    $('onboardingCount').textContent = `${onboardingIndex+1} / ${onboardingPages.length}`;
    $('onboardingBack').disabled = onboardingIndex === 0;
    $('onboardingNext').textContent = t(onboardingIndex === onboardingPages.length-1 ? 'onboardingFinish' : 'readNext');
  }
  function showOnboarding() { onboardingIndex=0; setScreen('onboarding'); renderOnboarding(); }
  function finishOnboarding() { settings.onboardingSeen=true; writeStorage(SETTINGS_KEY,settings); showHome(); }
  const hubQuestStages={
    'storm-hub':['bell','medicine','enc-window','enc-rooftops'],
    'channel-hub':['witness','letter','enc-tunnel','enc-cargo'],
    'final-hub':['dog','enc-rescue','enc-static']
  };
  const artOverrides={'encounter-window-3':'encounter-window-3-v2','final-ending-exposedWitness':'final-ending-exposedWitness-v2'};
  function hubStage(sceneId) { return (hubQuestStages[sceneId] || []).filter(id=>state?.quests?.[id]==='complete').length; }
  function artPath(sceneId,stage) {
    const scene=data.scenes[sceneId];
    const key=scene?.artKey || sceneId;
    if(scene?.encounters?.length && state){const encounter=engine.encounterFor(state,sceneId,scene);return `assets/scene-${artOverrides[encounter.id] || encounter.id}.png`;}
    if(sceneId==='final-ending' && state){const endingKey=`final-ending-${engine.outcome(state).ending}`;return `assets/scene-${artOverrides[endingKey] || endingKey}.png`;}
    if(hubQuestStages[sceneId]){const selected=stage ?? hubStage(sceneId);return `assets/scene-${key}${selected>0?`-${selected}`:''}.png`;}
    return `assets/scene-${key}.png`;
  }
  function artLabel(sceneId,stage) {
    const scene=data.scenes[sceneId];
    if(sceneId==='final-ending' && state){const ending=engine.outcome(state).ending;return text(data.endings?.[ending]?.title) || text(scene.location);}
    const title=text(scene?.title || scene?.location);
    return hubQuestStages[sceneId]?`${title} · ${t('galleryMoment')} ${(stage ?? hubStage(sceneId))+1}`:title;
  }
  function artDescription(sceneId,stage) { const scene=data.scenes[sceneId];return hubQuestStages[sceneId] || sceneId==='final-ending'?artLabel(sceneId,stage):text(scene?.artDescription || scene?.artAlt || scene?.location) || t('illustration'); }
  function openArt(sceneId,stage) {
    const scene=data.scenes[sceneId]; if(!scene)return;
    $('artDialogTitle').textContent=artLabel(sceneId,stage);
    $('artDialogImage').src=artPath(sceneId,stage); $('artDialogImage').alt=artDescription(sceneId,stage);
    $('artDialogCaption').textContent=artDescription(sceneId,stage);
    $('artDialog').showModal();
  }
  function unlockedScenes() { return state ? [...new Set([...state.visited,state.scene])].filter(id=>data.scenes[id]) : []; }
  function renderGallery() {
    const grid=$('galleryGrid'); grid.replaceChildren();
    const scenes=unlockedScenes();
    if(!scenes.length){grid.append(node('p','muted',t('galleryEmpty')));return;}
    for(const id of scenes){const stages=hubQuestStages[id]?Array.from({length:hubStage(id)+1},(_,stage)=>stage):[undefined];for(const stage of stages){const button=node('button','gallery-card');button.type='button';button.dataset.scene=id;if(stage!==undefined)button.dataset.stage=String(stage);const img=node('img');img.src=artPath(id,stage);img.alt=artDescription(id,stage);img.loading='lazy';button.append(img,node('span','',artLabel(id,stage)));button.addEventListener('click',()=>openArt(id,stage));grid.append(button);}}
  }
  function questEntries() { return Array.isArray(data.quests) ? data.quests.map(item=>[item.id,item]) : Object.entries(data.quests || {}); }
  function questStatus(id,quest) {
    if(state?.quests?.[id])return state.quests[id];
    if(state && quest.completeFlag && state.flags[quest.completeFlag])return 'complete';
    if(state && quest.completeWhen && engine.meets(state,quest.completeWhen))return 'complete';
    if(!state)return 'unstarted';
    if(quest.requires && !engine.meets(state,quest.requires))return 'locked';
    if(quest.requiresQuest && !engine.questMeets(state,quest.requiresQuest))return 'locked';
    return 'unstarted';
  }
  function renderQuests() {
    updateRewardControls();
    const list=$('questList');list.replaceChildren();
    const unlocked=new Set(unlockedScenes());
    const entries=questEntries().filter(([id,quest])=>state?.quests?.[id] || !quest.unlockScene || unlocked.has(quest.unlockScene));
    if(!entries.length){list.append(node('p','muted',t('questEmpty')));return;}
    for(const category of ['main','side']){
      const available=entries.filter(([,quest])=>(quest.type || quest.kind || 'side')===category);
      if(!available.length)continue;
      list.append(node('h3','quest-section-title',t(category==='main'?'mainQuests':'sideQuests')));
      for(const [id,quest] of available){const status=questStatus(id,quest);const item=node('article','quest-item');item.dataset.status=status;item.append(node('p','quest-kind',t(category==='main'?'mainQuests':'sideQuests')),node('h3','quest-title',text(quest.title)),node('p','quest-description',text(quest.description || quest.body)),node('p','quest-status',t(status==='complete'?'questComplete':status==='active'?'questActive':status==='missed'?'questMissed':status==='locked'?'questLocked':'questAvailable')));list.append(item);}
    }
  }
  function shareMessage() {
    const lines=[t('shareInvitation')];
    if(state && data.scenes[state.scene]?.type==='ending'){const result=engine.outcome(state);const ending=data.endings?.[result.ending];lines.push(`${text(ending?.title) || t(`${result.ending}Title`)} · ${state.history.length} ${t('choicesMade').toLowerCase()}.`);}
    const local=Boolean(window.BlackoutAndroid)||/^(localhost|127(?:\.\d+){3}|\[?::1\]?)$/i.test(location.hostname) || location.protocol==='file:';
    if(!local)lines.push(`${location.origin}${location.pathname}`);
    return {message:lines.join('\n\n'),local};
  }
  function showShare() {
    const shared=shareMessage();$('shareText').value=shared.message;$('shareStatus').textContent=shared.local&&!window.BlackoutAndroid?t('shareLocal'):'';$('nativeShareBtn').hidden=typeof navigator.share!=='function'&&!window.BlackoutAndroid;$('shareDialog').showModal();
  }
  async function copyShare() {
    try{if(navigator.clipboard?.writeText){await navigator.clipboard.writeText($('shareText').value);$('shareStatus').textContent=t('copied');return;}}catch(_){/* The selected text below remains usable when clipboard access is denied. */}
    $('shareText').focus();$('shareText').select();
    let copied=false;try{copied=document.execCommand('copy');}catch(_){}
    $('shareStatus').textContent=t(copied?'copied':'copyManual');
  }
  async function nativeShare() {
    if(window.BlackoutAndroid){try{window.BlackoutAndroid.shareStory($('shareText').value);$('shareStatus').textContent=t('shareOpened');}catch(_){$('shareStatus').textContent=t('shareUnavailable');}return;}
    if(typeof navigator.share!=='function'){ $('shareStatus').textContent=t('shareUnavailable');return; }
    try{await navigator.share({title:text(data.title),text:$('shareText').value});$('shareStatus').textContent=t('shared');}catch(error){if(error.name!=='AbortError')$('shareStatus').textContent=t('shareUnavailable');}
  }
  function renderRating() {
    $('ratingStars').setAttribute('aria-label',t('rate'));
    $('ratingStars').querySelectorAll('button').forEach(button=>{const value=Number(button.dataset.rating);button.setAttribute('aria-pressed',String(value===rating));button.classList.toggle('selected',value<=rating);button.setAttribute('aria-label',`${value} ${t(value===1?'star':'stars')}`);});
  }
  function showRating() {
    const review=readStorage(REVIEW_KEY);rating=Number.isInteger(review?.stars)?Math.max(0,Math.min(5,review.stars)):0;$('reviewText').value=typeof review?.comment==='string'?review.comment.slice(0,400):'';$('reviewStatus').textContent='';renderRating();$('rateDialog').showModal();
  }
  function saveReview() {
    if(!rating){$('reviewStatus').textContent=t('chooseRating');return;}
    const saved=writeStorage(REVIEW_KEY,{stars:rating,comment:$('reviewText').value.trim().slice(0,400),updatedAt:new Date().toISOString()});$('reviewStatus').textContent=t(saved?'ratingSaved':'ratingNotSaved');
  }
  function renderLanguage() {
    language = engine.languageFor(settings.language, deviceLanguage());
    document.documentElement.lang = language;
    document.title = text(data.title);
    document.querySelectorAll('[data-i18n]').forEach(element => { element.textContent = t(element.dataset.i18n); });
    $('languageIndicator').textContent = `${language.toUpperCase()}${settings.language === 'auto' ? ' · AUTO' : ''}`;
    const brand = document.querySelector('.brand-text');
    brand.innerHTML = language === 'id' ? 'FREKUENSI<br>PADAM' : 'BLACKOUT<br>FREQUENCY';
    $('brandHome').setAttribute('aria-label',`${text(data.title)} · ${t('returnHome')}`);
    $('heroTitle').innerHTML = language === 'id' ? 'Frekuensi<br><em>Padam.</em>' : 'Blackout<br><em>Frequency.</em>';
    $('splashTitle').innerHTML = $('heroTitle').innerHTML;
    document.querySelector('.about-brand h3').textContent=text(data.title);
    $('splashArt').alt=language==='id'?'Stasiun radio sunyi di atas kota yang padam':'A silent radio station above a city in darkness';
    $('menuArt').alt=language==='id'?'Stasiun radio pesisir di atas kota gelap':'A coastal radio station overlooking a dark city';
    document.querySelector('.menu-grid').setAttribute('aria-label',language==='id'?'Menu permainan':'Game menu');
    $('languageSelect').value = settings.language;
    $('languageSelect').options[0].textContent = t('automatic');
    $('audioToggle').checked = settings.audio;
    $('voiceToggle').checked=settings.voiceover;$('voiceAutoplayToggle').checked=settings.voiceAutoplay;
    $('voiceVolume').value=String(settings.voiceVolume*100);$('voiceSpeed').value=String(settings.voiceSpeed);updateVoiceControls(voicePlayer.view);
    $('soundBtn').textContent = t(settings.audio ? 'soundOn' : 'soundOff');
    $('soundBtn').setAttribute('aria-pressed', String(settings.audio));
    document.querySelectorAll('.dialog-close').forEach(button => button.setAttribute('aria-label', t('close')));
    document.querySelector('.station-sidebar').setAttribute('aria-label',t('contactsRegion'));
    document.querySelector('.evidence-sidebar').setAttribute('aria-label',t('evidenceRegion'));
    document.querySelector('.play-column').setAttribute('aria-label',t('sceneRegion'));
    $('powerMeter').setAttribute('aria-label',t('backupPower'));
    $('resumeBtn').hidden = !hasProgress();
    applyAccessibility();renderOnboarding();renderRating();
    if($('questDialog').open)renderQuests();
    if($('galleryDialog').open)renderGallery();
    if($('shareDialog').open){const shared=shareMessage();$('shareText').value=shared.message;$('shareStatus').textContent=shared.local&&!window.BlackoutAndroid?t('shareLocal'):'';}
    if (state && !$('game').hidden) render(false);
  }
  function showHome() { setScreen('home'); $('resumeBtn').hidden = !hasProgress(); }
  function enterGame() { if(!state){startNew();return;}setScreen('game');if (settings.audio) startAudio();render(true); }
  function startNew() { state = engine.newState(); pendingReward=null;chapterContinuation=null;save();reconcileRewards();enterGame(); }
  function symbolFor(character) { return { mara:'◷', iman:'ϟ', raka:'↗', operator:'⌁', system:'≡' }[character] || '⌁'; }
  function renderContacts() {
    $('contactList').replaceChildren();
    const met=new Set(['mara','iman','raka',...unlockedScenes().map(id=>data.scenes[id].speaker)]);
    for (const [id, character] of Object.entries(data.characters)) {
      if(!met.has(id))continue;
      const contact = node('div','contact'); contact.dataset.character = id;contact.classList.toggle('active',data.scenes[state.scene]?.speaker===id);
      contact.append(node('span','contact-symbol',symbolFor(id)));
      const info = node('div','contact-info'); info.append(node('span','contact-name',text(character.name)),node('span','contact-role',text(character.role)));
      const trust=state.trust[id] || 0;
      const relation = trust < 0 ? 'uncertain' : trust > 0 ? 'connected' : 'neutral';
      const line = node('div','trust-line'); line.append(node('span','trust-label',t(id in state.trust?relation:'contactPresent')));
      if(id in state.trust){const dots = node('span','trust-dots', '●'.repeat(Math.max(1,trust+3)) + '○'.repeat(6-Math.max(1,trust+3))); dots.setAttribute('aria-hidden','true'); line.append(dots);}info.append(line); contact.append(info); $('contactList').append(contact);
    }
    $('powerValue').textContent = `${state.power}%`; $('powerFill').style.width = `${state.power}%`; $('powerMeter').setAttribute('aria-valuenow',String(state.power));
  }
  function showEvidence(id) { const item = data.evidence[id];if(!item)return; $('evidenceDialogTitle').textContent = text(item.title); paragraphs($('evidenceDialogBody'),text(item.body)); $('evidenceDialog').showModal();setEvidenceVoice(item.body.en,id); }
  function renderEvidence() {
    $('evidenceList').replaceChildren(); $('evidenceCount').textContent = String(state.evidence.length); $('noEvidence').hidden = state.evidence.length > 0;
    for (const id of state.evidence.filter(id=>data.evidence[id])) { const button=node('button','evidence-item'); button.type='button'; button.append(node('span','evidence-name',text(data.evidence[id].title)),node('span','evidence-hint',language === 'id' ? 'Buka catatan ↗' : 'Read note ↗')); button.addEventListener('click',()=>showEvidence(id)); $('evidenceList').append(button); }
  }
  function sceneText(scene) { return text(engine.narrativeFor(state,state.scene,scene)); }
  const responsePrompts = {
    pressure:{en:'Raka is frightened and the dock gate is still closed. Will you help him move first, or press him about the delivery?',id:'Raka ketakutan dan gerbang dermaga masih tertutup. Kamu akan membantunya bergerak dulu, atau mendesaknya soal kiriman itu?'},
    disclosure:{en:'Mara and Iman are waiting for your assessment. How much of the evidence—and its uncertainty—will you share?',id:'Mara dan Iman menunggu penilaianmu. Seberapa banyak bukti, beserta hal yang belum pasti, akan kamu sampaikan?'},
    'rescue-plan':{en:'Raka needs an exit. Will you guide him toward Mara’s service door, or keep him at the dock gate?',id:'Raka membutuhkan jalan keluar. Kamu akan mengarahkannya ke pintu servis Mara, atau memintanya tetap di gerbang dermaga?'},
    'wrong-voice':{en:'You recognize your voice in the recording. Will you tell the live channel now, or trace the source first?',id:'Kamu mengenali suaramu dalam rekaman. Kamu akan memberi tahu kanal langsung sekarang, atau melacak sumbernya dulu?'},
    'director-call':{en:'Arga is still on the private line. Will you question him directly, or keep him talking while you copy the order?',id:'Arga masih berada di jalur pribadi. Kamu akan menanyainya langsung, atau membiarkannya bicara sambil menyalin perintah itu?'},
    'ledger-choice':{en:'The archive contains evidence and private identities. What will you carry to the tower?',id:'Arsip itu memuat bukti sekaligus identitas pribadi. Apa yang akan kamu bawa ke menara?'},
    'switch-betrayal':{en:'Arga offers to release the platform. Will you keep the rescue public, or demand confirmation that Iman’s route is open?',id:'Arga menawarkan untuk membuka panggung. Kamu akan menjaga penyelamatan di kanal publik, atau meminta kepastian jalur Iman sudah terbuka?'},
    'flood-choice':{en:'People are waiting on both sides of the crossing. Choose the route you can support with what you have learned and secured.',id:'Orang-orang menunggu di kedua sisi penyeberangan. Pilih rute yang dapat kamu bantu dengan petunjuk dan bantuan yang sudah diperoleh.'},
    publication:{en:'Your next transmission will decide what becomes public. How will you release the evidence without forgetting the people inside it?',id:'Transmisi berikutnya menentukan apa yang menjadi milik publik. Bagaimana kamu akan mengirim bukti tanpa melupakan orang-orang di dalamnya?'},
    'letter-answer':{en:'Nila’s message belongs to an ordinary day you cannot return to. What part of it will you keep with you?',id:'Pesan Nila berasal dari hari biasa yang tak bisa kamu datangi lagi. Bagian mana yang ingin kamu bawa bersamamu?'}
  };
  function hasResponseStage(scene) { return ['dialogue','hub','random'].includes(scene.type) && (scene.encounters?.length || scene.choices?.length>1); }
  function responsePrompt(scene) {
    if(scene.type==='hub' && scene.choices.filter(choice=>engine.choiceAvailable(state,choice)).length===1)return language==='id'?'Panggilan yang bisa kamu tangani di sini sudah selesai. Saatnya melanjutkan penyelidikan.':'You have followed the calls you can help here. It is time to continue the investigation.';
    if(scene.type==='random')return language==='id'?'Apa yang akan kamu lakukan selanjutnya?':'What will you do next?';
    return text(responsePrompts[state.scene]) || t(scene.type==='hub'?'hubResponsePrompt':'responsePrompt');
  }
  function fitReadingFrame() {
    if(!state || $('game').hidden)return;
    const column=document.querySelector('.play-column');
    column.classList.remove('compact-art','text-focus');
    if(!['dialogue','hub','random'].includes(column.dataset.type) || (column.dataset.phase==='decision' && column.dataset.type!=='hub'))return;
    if(column.scrollHeight>column.clientHeight+1)column.classList.add('compact-art');
    if(column.scrollHeight>column.clientHeight+1)column.classList.add('text-focus');
  }
  function enterScene(scene) {
    for (const id of scene.onEnterEvidence || []) if(data.evidence[id])engine.addEvidence(state,id);
    for(const [id,status] of Object.entries(scene.onEnterQuests || scene.onEnterEffects?.quests || {}))if(['active','complete','missed'].includes(status))state.quests[id]=status;
    for(const [id,value] of Object.entries(scene.onEnterFlags || scene.onEnterEffects?.flags || {}))if(typeof value==='boolean')state.flags[id]=value;
    const start=scene.questStart || scene.startQuest;
    for(const id of Array.isArray(start)?start:start?[start]:[])if(!state.quests[id])state.quests[id]='active';
    for(const [id,quest] of questEntries())if((quest.kind || quest.type)==='main' && quest.unlockScene===state.scene && !state.quests[id])state.quests[id]='active';
  }
  function render(focus = false) {
    const scene = data.scenes[state.scene];
    if (!scene) { showHome(); return; }
    enterScene(scene);
    inspectionResizeObserver?.disconnect();
    renderContacts(); renderEvidence();
    document.querySelector('.play-column').dataset.type = scene.type;
    $('location').textContent = text(scene.location); $('chapterLabel').textContent = `${t('chapterPrefix')} ${String(scene.chapter || 1).padStart(2,'0')}`;
    $('sceneArt').className = 'scene-art';
    $('sceneImage').src=artPath(state.scene);$('sceneImage').alt=artDescription(state.scene);$('sceneImage').dataset.sceneId=state.scene;$('artCaption').textContent = text(scene.artCaption || scene.location);
    const character=data.characters[scene.speaker]; $('speakerName').textContent=character?text(character.name):t(scene.speaker === 'operator' ? 'operator' : 'system'); $('speakerRole').textContent=character ? text(character.role) : t(scene.speaker === 'operator' ? 'operatorRole' : 'systemRole'); $('speakerSymbol').textContent=symbolFor(scene.speaker);
    const beats = sceneText(scene).split('\n\n').filter(Boolean);
    const activity = activityFor(state.scene,{beatIndex:0});
    activity.beatIndex = Math.max(0,Math.min(activity.beatIndex,beats.length-1));
    const staged=hasResponseStage(scene);
    const finalBeat = activity.beatIndex === beats.length-1;
    const responding=Boolean(staged && finalBeat && activity.readingComplete);
    document.querySelector('.play-column').dataset.phase=responding?'decision':'reading';
    paragraphs($('storyText'),responding?responsePrompt(scene):beats[activity.beatIndex] || '');
    $('storyText').hidden=scene.type==='ending';
    $('beatNavigation').hidden = (!staged && beats.length <= 1) || scene.type==='ending';
    $('beatCount').textContent = responding?t('responseStage'):`${activity.beatIndex+1} / ${beats.length}`;
    $('previousBeat').disabled = !responding && activity.beatIndex === 0;
    $('previousBeat').textContent=t(responding?'readConversation':'previous');
    $('nextBeat').hidden = responding || (finalBeat && !staged);
    $('nextBeat').textContent=t(finalBeat && staged?'responseNext':'readNext');
    $('interactionHost').replaceChildren(); $('choices').replaceChildren();
    if(finalBeat && (!staged || responding)) {
      if (scene.type === 'inspect') renderInspect(scene);
      if (scene.type === 'tune') renderTune(scene);
      if (scene.type === 'evidence') renderCompare(scene);
      if (scene.type === 'power') renderPower(scene);
      if (scene.recap) renderRecap();
      if (scene.type === 'ending') renderEnding(); else renderChoices(scene);
    }
    if(scene.type!=='ending')setStoryVoice(responding?'':engine.narrativeFor(state,state.scene,scene).en.split('\n\n').filter(Boolean)[activity.beatIndex],`${state.scene}:${activity.beatIndex}:${responding?'response':'reading'}`);
    save();
    fitReadingFrame();
    requestAnimationFrame(fitReadingFrame);
    if (focus) { $('storyText').tabIndex=-1; $('storyText').focus({preventScroll:true}); window.scrollTo({top:0,behavior:'instant'}); }
  }
  function canAdvance(scene) {
    if (scene.type === 'inspect') return Boolean(state.flags[scene.completeFlag || (state.scene==='desk'?'deskReady':`${state.scene}Inspected`)]);
    if (scene.type === 'tune') return Boolean(state.flags[scene.completeFlag || scene.tune?.completeFlag || 'signalLocked']);
    if (scene.type === 'power') return state.flags.gridCommitted;
    return true;
  }
  function renderChoices(scene) {
    $('choices').replaceChildren();
    if (!canAdvance(scene)) return;
    const encounter=engine.encounterFor(state,state.scene,scene);
    const choices=(encounter?.choices || scene.choices || []).filter(choice=>engine.choiceAvailable(state,choice));
    const activity=activityFor(state.scene,{choicePage:0});
    const pageSize=choices.length>3?2:3;
    const pages=Math.max(1,Math.ceil(choices.length/pageSize));
    activity.choicePage=Math.max(0,Math.min(activity.choicePage,pages-1));
    for (const choice of choices.slice(activity.choicePage*pageSize,(activity.choicePage+1)*pageSize)) {
      const button=node('button','choice-button'); button.type='button'; button.dataset.choice=choice.id;
      button.disabled = !canAdvance(scene);
      button.append(node('span','choice-label',text(choice.label)),node('span','choice-arrow','→'));
      if (button.disabled) button.setAttribute('aria-label',`${text(choice.label)}. ${t('choiceLocked')}`);
      button.addEventListener('click',()=> {
        const completed=Object.entries(choice.effects?.quests || {}).filter(([,status])=>status==='complete').map(([id])=>id);
        const departingHub=scene.type==='hub' && choice.id===scene.choices?.at(-1)?.id;
        const hubId=state.scene;
        if (!engine.applyChoice(state,choice)) return;
        if(departingHub)for(const [id,quest] of questEntries())if(quest.kind==='side'&&quest.unlockScene===hubId&&!state.quests[id])state.quests[id]='missed';
        save();
        const breakKey=monetization.chapterBreak(state,scene,data.scenes[state.scene]);
        if(nativeAds&&breakKey){
          voicePlayer.pause();chapterContinuation={key:breakKey,run:state.runId};
          $('choices').querySelectorAll('button').forEach(item=>item.disabled=true);
          try{window.BlackoutAndroid.showInterstitial(breakKey);}catch(_){chapterContinuation=null;render(true);}
        }else render(true);
        if(completed.length){const quest=questEntries().find(([id])=>id===completed[0]);toast(`${t('questCompletedToast')}${quest?`: ${text(quest[1].title)}`:''}`);}else if(choice.effects?.trust)toast(t('relationshipChanged'));
      });
      $('choices').append(button);
    }
    if(pages>1){const nav=node('div','beat-navigation');const previous=node('button','text-button',t('previousChoices'));previous.type='button';previous.disabled=activity.choicePage===0;const next=node('button','secondary-button',t('nextChoices'));next.type='button';next.disabled=activity.choicePage===pages-1;const count=node('span','beat-count',`${activity.choicePage+1} / ${pages}`);count.setAttribute('aria-live','polite');previous.addEventListener('click',()=>{activity.choicePage--;renderChoices(scene);save();});next.addEventListener('click',()=>{activity.choicePage++;renderChoices(scene);save();});nav.append(previous,count,next);$('choices').append(nav);}
  }
  function collect(id) { if(!data.evidence[id])return;const added=engine.addEvidence(state,id); renderEvidence(); save(); toast(`${t(added ? 'collected' : 'alreadyCollected')}: ${text(data.evidence[id].title)}`); }
  function fitHotspotLabels(map) {
    const width=map.clientWidth,height=map.clientHeight;if(!width || !height)return;
    const origin=map.getBoundingClientRect();const edge=4,gap=5,placed=[];
    const buttons=[...map.querySelectorAll('.hotspot')];
    const rectangles=buttons.map(button=>{const rect=button.getBoundingClientRect();return {left:rect.left-origin.left-map.clientLeft,top:rect.top-origin.top-map.clientTop,width:rect.width,height:rect.height};});
    const overlap=(a,b)=>Math.max(0,Math.min(a.left+a.width,b.left+b.width)-Math.max(a.left,b.left))*Math.max(0,Math.min(a.top+a.height,b.top+b.height)-Math.max(a.top,b.top));
    const bounded=rect=>rect.left>=edge && rect.top>=edge && rect.left+rect.width<=width-edge && rect.top+rect.height<=height-edge;
    const ordered=buttons.map((button,index)=>({button,rect:rectangles[index]})).sort((a,b)=>a.rect.top-b.rect.top);
    for(const {button,rect} of ordered){
      const label=button.querySelector('.hotspot-label');label.style.width='max-content';label.style.maxWidth=`${Math.min(110,width-2*edge)}px`;label.style.transform='none';label.style.bottom='auto';
      const size=label.getBoundingClientRect();const labelWidth=Math.min(size.width,width-2*edge),labelHeight=Math.min(size.height,height-2*edge);
      const centeredLeft=Math.max(edge,Math.min(width-edge-labelWidth,rect.left+(rect.width-labelWidth)/2));
      const centeredTop=Math.max(edge,Math.min(height-edge-labelHeight,rect.top+(rect.height-labelHeight)/2));
      const candidates=[
        {left:centeredLeft,top:rect.top-gap-labelHeight,width:labelWidth,height:labelHeight},
        {left:centeredLeft,top:rect.top+rect.height+gap,width:labelWidth,height:labelHeight},
        {left:rect.left-gap-labelWidth,top:centeredTop,width:labelWidth,height:labelHeight},
        {left:rect.left+rect.width+gap,top:centeredTop,width:labelWidth,height:labelHeight}
      ].filter(bounded);
      const penalty=candidate=>placed.reduce((sum,item)=>sum+overlap(candidate,item)*10,0)+rectangles.reduce((sum,item)=>sum+overlap(candidate,item)*4,0);
      let target=candidates.reduce((best,candidate)=>!best || penalty(candidate)<penalty(best)?candidate:best,null);
      if(!target || penalty(target)>0){
        let bestDistance=Infinity;
        for(let top=edge;top<=height-edge-labelHeight;top+=6)for(let left=edge;left<=width-edge-labelWidth;left+=6){const candidate={left,top,width:labelWidth,height:labelHeight};if(penalty(candidate)>0)continue;const distance=Math.hypot(left+labelWidth/2-rect.left-rect.width/2,top+labelHeight/2-rect.top-rect.height/2);if(distance<bestDistance){bestDistance=distance;target=candidate;}}
      }
      target ||= {left:centeredLeft,top:Math.max(edge,Math.min(height-edge-labelHeight,rect.top-gap-labelHeight)),width:labelWidth,height:labelHeight};
      label.style.left=`${target.left-rect.left}px`;label.style.top=`${target.top-rect.top}px`;placed.push(target);
    }
  }
  function renderInspect(scene) {
    const host=$('interactionHost');
    const flag=scene.completeFlag || (state.scene==='desk'?'deskReady':`${state.scene}Inspected`);
    const required=scene.requiredEvidence || (state.scene==='desk'?['shift-log','maintenance-note']:(scene.hotspots || []).map(hotspot=>hotspot.evidence).filter(Boolean));
    function complete(){const evidenceReady=required.every(id=>state.evidence.includes(id));const hotspotsReady=(scene.requiredHotspots || []).every(id=>activityFor(state.scene,{visited:[]}).visited.includes(id));state.flags[flag]=evidenceReady&&hotspotsReady;return state.flags[flag];}
    complete();
    const map=node('div','hotspot-map');const image=node('img','hotspot-image');image.src=artPath(state.scene);image.alt=artDescription(state.scene);map.append(image);
    const detail=node('p','inspection-status',complete()?t('inspectReady'):text(scene.inspectHint) || t('inspectGeneric')); detail.setAttribute('aria-live','polite');
    const visited = activityFor(state.scene,{visited:[]}).visited;
    for (const hotspot of scene.hotspots || []) {
      const button=node('button','hotspot'); button.type='button'; button.dataset.hotspot=hotspot.id;const x=Math.max(15,Math.min(85,hotspot.x || 50));button.style.left=`${x}%`; button.style.top=`${Math.max(30,Math.min(85,hotspot.y || 50))}%`;button.setAttribute('aria-pressed',String(visited.includes(hotspot.id)));button.setAttribute('aria-label',text(hotspot.title));
      const label=node('span','hotspot-label',text(hotspot.title));label.style.maxWidth='110px';label.style.whiteSpace='normal';label.style.textAlign='center';
      if(x<=23){label.style.left='0';label.style.transform='none';}else if(x>=76){label.style.left='100%';label.style.transform='translateX(-100%)';}
      button.append(node('span','hotspot-dot',visited.includes(hotspot.id)?'✓':'+'),label);
      button.addEventListener('click',()=> {
        const activity=activityFor(state.scene,{visited:[]}); activity.visited=[...new Set([...activity.visited,hotspot.id])];
        button.querySelector('.hotspot-dot').textContent='✓';
        button.setAttribute('aria-pressed','true');
        if(hotspot.evidence) collect(hotspot.evidence);
        detail.textContent=complete()?t('inspectReady'):text(scene.inspectHint) || t('inspectGeneric');
        $('evidenceDialogTitle').textContent=text(hotspot.title);
        paragraphs($('evidenceDialogBody'),hotspot.evidence&&data.evidence[hotspot.evidence]?text(data.evidence[hotspot.evidence].body):text(hotspot.description));
        $('evidenceDialog').showModal();
        if(hotspot.evidence&&data.evidence[hotspot.evidence])setEvidenceVoice(data.evidence[hotspot.evidence].body.en,hotspot.evidence);
        else {voicePlayer.pause();$('voicePanel').hidden=true;}
        renderChoices(scene); save();
      }); map.append(button);
    }
    host.append(map,detail);
    fitHotspotLabels(map);
    if(typeof ResizeObserver==='function'){inspectionResizeObserver=new ResizeObserver(()=>fitHotspotLabels(map));inspectionResizeObserver.observe(map);}
  }
  function renderTune(scene) {
    const tune=scene.tune || {target:96.4,clue:'relay-message'};
    const flag=scene.completeFlag || tune.completeFlag || 'signalLocked';
    const activity=activityFor(state.scene,{frequency:91.2});
    const console=node('div',`radio-console${state.flags[flag]?' is-complete':''}`);
    const header=node('div','trust-line'); header.append(node('label','',t('frequency'))); header.firstChild.htmlFor='radioFrequency';
    const value=node('span','radio-frequency'); header.append(value);
    const slider=node('input','radio-range'); slider.type='range'; slider.min='88'; slider.max='108'; slider.step='0.1'; slider.id='radioFrequency'; slider.value=activity.frequency;
    const bar=node('div','signal-bar'); bar.setAttribute('role','meter'); bar.setAttribute('aria-label',t('signal')); bar.setAttribute('aria-valuemin','0'); bar.setAttribute('aria-valuemax','100'); const fill=node('div','signal-fill'); bar.append(fill);
    const readout=node('p','radio-readout'); readout.setAttribute('aria-live','polite');
    const controls=node('div','radio-actions'); const lower=node('button','secondary-button','− 0.1'); lower.type='button';lower.setAttribute('aria-label',t('tuneLower')); const higher=node('button','secondary-button','+ 0.1'); higher.type='button';higher.setAttribute('aria-label',t('tuneHigher')); const lock=node('button','primary-button',t('lockSignal'));lock.type='button';lock.id='lockSignalBtn';controls.append(lower,higher,lock);
    function update() { activity.frequency=Number(slider.value);value.textContent=`${activity.frequency.toFixed(1)} MHz`; const strength=engine.signalStrength(activity.frequency,tune.target);fill.style.width=`${strength*100}%`;bar.setAttribute('aria-valuenow',String(Math.round(strength*100)));slider.setAttribute('aria-valuetext',`${activity.frequency.toFixed(1)} MHz`);readout.textContent=t(state.flags[flag]?'signalLocked':Math.abs(activity.frequency-tune.target)<=0.25001?'signalClear':'signalWeak'); if(audio) audio.tone.frequency.setTargetAtTime(48+strength*10,audio.context.currentTime,0.1); save(); }
    slider.addEventListener('input',update);lower.addEventListener('click',()=>{slider.value=(Number(slider.value)-0.1).toFixed(1);update();});higher.addEventListener('click',()=>{slider.value=(Number(slider.value)+0.1).toFixed(1);update();});
    lock.addEventListener('click',()=> { if(!engine.lockSignal(state,Number(slider.value),tune.target,tune.clue,flag)) {toast(t('cannotLock'));return;} render(false);toast(t('signalLocked')); });
    lock.disabled=Boolean(state.flags[flag]);console.append(header,slider,bar,node('p','radio-hint',text(tune.hint) || t('tuningHint')),readout,controls);$('interactionHost').append(console);update();
  }
  function renderCompare(scene) {
    const configuration=scene.compare || scene.evidence || {pair:['shift-log','relay-message'],reward:'forged-time'};
    const flag=configuration.flag || scene.completeFlag || 'verified';
    const activity=activityFor(state.scene,{selected:[],evidencePage:0});
    const group=node('div','evidence-compare');
    const options=node('div','evidence-options');const result=node('p','comparison-result');result.setAttribute('aria-live','polite');
    const compare=node('button','primary-button',t('compare'));compare.type='button';compare.id='compareEvidenceBtn';
    function update(){ options.querySelectorAll('button').forEach(button=>button.setAttribute('aria-pressed',String(activity.selected.includes(button.dataset.evidence))));compare.disabled=activity.selected.length!==2||Boolean(state.flags[flag]);compare.hidden=Boolean(state.flags[flag]); if(state.flags[flag]) result.textContent=text(configuration.success) || t(flag==='verified'?'verified':'evidenceVerified');save(); }
    const candidates=(configuration.options || state.evidence.filter(id=>id!==configuration.reward)).filter(id=>state.evidence.includes(id)&&data.evidence[id]);
    const pageSize=4;const pages=Math.max(1,Math.ceil(candidates.length/pageSize));activity.evidencePage=Math.max(0,Math.min(activity.evidencePage,pages-1));
    for(const id of candidates.slice(activity.evidencePage*pageSize,(activity.evidencePage+1)*pageSize)) { const option=node('button','evidence-option');option.append(node('strong','',text(data.evidence[id].title)),node('span','evidence-excerpt',text(data.evidence[id].excerpt)));option.type='button';option.dataset.evidence=id;option.setAttribute('aria-pressed',String(activity.selected.includes(id)));option.disabled=Boolean(state.flags[flag]);option.addEventListener('click',()=> {if(activity.selected.includes(id)) activity.selected=activity.selected.filter(item=>item!==id);else {if(activity.selected.length===2) activity.selected.shift();activity.selected.push(id);}result.textContent='';update();});options.append(option); }
    compare.addEventListener('click',()=> {if(engine.compareEvidence(state,activity.selected,configuration.pair,configuration.reward,flag)){renderEvidence();options.querySelectorAll('button').forEach(button=>button.disabled=true);renderChoices(scene);toast(t('collected'));}else result.textContent=t('mismatch');update();});
    group.append(options,compare,result);$('interactionHost').append(group);update();
    if(pages>1){const nav=node('div','beat-navigation');const previous=node('button','text-button',t('previousChoices'));previous.type='button';previous.disabled=activity.evidencePage===0;const next=node('button','secondary-button',t('nextChoices'));next.type='button';next.disabled=activity.evidencePage===pages-1;previous.addEventListener('click',()=>{activity.evidencePage--;render(false);});next.addEventListener('click',()=>{activity.evidencePage++;render(false);});nav.append(previous,node('span','beat-count',`${activity.evidencePage+1} / ${pages}`),next);group.insertBefore(nav,compare);}
  }
  function renderPower(scene) {
    const activity=activityFor(state.scene,{circuits:[]});
    const group=node('div','power-routing');
    const grid=node('div','power-grid');const status=node('p','grid-status');status.setAttribute('aria-live','polite');
    const confirm=node('button','primary-button',t('confirmPower'));confirm.type='button';confirm.id='confirmPowerBtn';
    function update(){grid.querySelectorAll('button').forEach(button=>button.setAttribute('aria-pressed',String(activity.circuits.includes(button.dataset.circuit))));confirm.disabled=activity.circuits.length!==2||Boolean(state.flags.gridCommitted);confirm.hidden=Boolean(state.flags.gridCommitted);const dark=['clinic','relay','dock'].filter(id=>!activity.circuits.includes(id));status.textContent=activity.circuits.length===2?`${t('darkRoute')}: ${t(dark[0])}.`:t('twoCircuits');save();}
    for(const id of ['clinic','relay','dock']){const button=node('button','circuit');button.type='button';button.dataset.circuit=id;button.setAttribute('aria-pressed',String(activity.circuits.includes(id)));button.disabled=Boolean(state.flags.gridCommitted);button.append(node('span','circuit-icon',{clinic:'◷',relay:'⌁',dock:'↗'}[id]),node('span','circuit-name',t(id)),node('span','circuit-detail',t(`${id}Detail`)));button.addEventListener('click',()=>{if(activity.circuits.includes(id))activity.circuits=activity.circuits.filter(item=>item!==id);else if(activity.circuits.length<2)activity.circuits.push(id);else{toast(t('swapCircuit'));return;}update();});grid.append(button);}
    confirm.addEventListener('click',()=>{if(!engine.allocatePower(state,activity.circuits))return;grid.querySelectorAll('button').forEach(button=>button.disabled=true);renderContacts();renderChoices(scene);update();toast(t('gridCommitted'));});group.append(grid,status,confirm);$('interactionHost').append(group);update();
  }
  function outcomeRows(result,actOne=false) {
    const outcomes=node('div','ending-outcomes');
    const rows=actOne?
      [['endingMara',result.mara?'evacuated':'stranded'],['endingRaka',result.raka?'escaped':'unanswered'],['endingTruth',result.truth?'released':'contained']]:
      [['endingRescue',result.rescued?(state.flags.massEvacuation?'rescueSafe':'rescuePartial'):'rescueLost'],['endingWitness',state.flags.protectedNames || state.flags.destroyedArchive?'witnessProtected':'witnessExposed'],['endingArchive',state.flags.destroyedArchive?'archiveBurned':result.archiveVerified?'archiveShared':'archiveUnverified']];
    for(const [label,value] of rows){const item=node('div','outcome');item.append(node('span','outcome-label',t(label)),node('span','outcome-value',t(value)));outcomes.append(item);}
    return outcomes;
  }
  function renderRecap() {
    const result=engine.outcomeActOne(state);const button=node('button','text-button',t('endingSummary'));button.type='button';
    button.addEventListener('click',()=>{$('evidenceDialogTitle').textContent=t(`${result.ending}Title`);paragraphs($('evidenceDialogBody'),t(`${result.ending}Body`));$('evidenceDialogBody').append(outcomeRows(result,true));$('evidenceDialog').showModal();});
    $('interactionHost').append(button);
  }
  function renderEnding() {
    const result=engine.outcome(state);
    const ending=data.endings?.[result.ending];
    const endingTitle=text(ending?.title) || t(`${result.ending}Title`);
    const englishStory=(ending?.body?.en||'').split('\n\n').filter(Boolean);
    const story=(text(ending?.body) || t(`${result.ending}Body`)).split('\n\n').filter(Boolean).map((value,index)=>({kind:'story',value,english:englishStory[index]}));
    const epilogues=(data.epilogues || []).filter(item=>engine.meets(state,item.requires)).map(item=>({kind:'epilogue',value:text(item.text),english:item.text.en}));
    const pages=[...story,...epilogues,{kind:'summary'}];
    const activity=activityFor(state.scene,{endingPage:0});activity.endingPage=Math.max(0,Math.min(activity.endingPage,pages.length-1));
    const page=pages[activity.endingPage];
    setStoryVoice(page.english||'',`ending:${result.ending}:${activity.endingPage}`);
    const card=node('div','ending-card');card.append(node('p','ending-kicker',t('endingKicker')),node('h2','',page.kind==='epilogue'?t('epilogueTitle'):page.kind==='summary'?t('endingSummary'):endingTitle));
    if(page.value)card.append(node('p','ending-description',page.value));
    if(page.kind==='summary'){
      card.append(outcomeRows(result,!ending),node('p','muted',`${t('choicesMade')}: ${state.history.length} · ${t('questComplete')}: ${Object.entries(state.quests).filter(([id,status])=>status==='complete'&&!id.startsWith('enc-')).length}`));
      const actions=node('div','ending-actions');const replay=node('button','primary-button',t('replay'));replay.type='button';replay.addEventListener('click',()=> $('restartDialog').showModal());const home=node('button','secondary-button',t('returnHome'));home.type='button';home.addEventListener('click',showHome);actions.append(replay,home);card.append(actions);
    }
    const nav=node('div','beat-navigation');const previous=node('button','text-button',t('previous'));previous.type='button';previous.disabled=activity.endingPage===0;const next=node('button','secondary-button',t('readNext'));next.type='button';next.hidden=activity.endingPage===pages.length-1;
    previous.addEventListener('click',()=>{activity.endingPage--;render(false);});next.addEventListener('click',()=>{activity.endingPage++;render(false);});
    const position=node('div');position.style.display='flex';position.style.flexDirection='column';position.style.alignItems='center';position.append(node('span','beat-count',`${activity.endingPage+1} / ${pages.length}`));
    if(page.kind!=='summary'){const summary=node('button','text-button',t('seeOutcome'));summary.type='button';summary.style.color='var(--cyan)';summary.addEventListener('click',()=>{activity.endingPage=pages.length-1;render(false);});position.append(summary);}
    nav.append(previous,position,next);card.append(nav);$('interactionHost').append(card);
  }
  async function startAudio() {
    if(audio){await audio.context.resume().catch(()=>{});return;}
    try{const AudioContext=window.AudioContext||window.webkitAudioContext;if(!AudioContext)return;const context=new AudioContext();const master=context.createGain();master.gain.value=0.025;master.connect(context.destination);const buffer=context.createBuffer(1,context.sampleRate*2,context.sampleRate);const channel=buffer.getChannelData(0);for(let i=0;i<channel.length;i++)channel[i]=(Math.random()*2-1)*0.35;const noise=context.createBufferSource();noise.buffer=buffer;noise.loop=true;const filter=context.createBiquadFilter();filter.type='lowpass';filter.frequency.value=420;noise.connect(filter);filter.connect(master);const tone=context.createOscillator();tone.type='sine';tone.frequency.value=50;const gain=context.createGain();gain.gain.value=0.15;tone.connect(gain);gain.connect(master);noise.start();tone.start();audio={context,master,noise,tone};await context.resume();}catch(_){/* Audio is optional; all clues stay available as text. */}
  }
  function setAudio(enabled){settings.audio=enabled;writeStorage(SETTINGS_KEY,settings);if(enabled)startAudio();else if(audio)audio.context.suspend();$('soundBtn').textContent=t(enabled?'soundOn':'soundOff');$('soundBtn').setAttribute('aria-pressed',String(enabled));$('audioToggle').checked=enabled;}
  $('startBtn').addEventListener('click',()=>hasProgress()?$('restartDialog').showModal():startNew());
  $('resumeBtn').addEventListener('click',enterGame);$('confirmRestart').addEventListener('click',()=>{$('restartDialog').close();startNew();});
  $('settingsBtn').addEventListener('click',()=> $('settingsDialog').showModal());$('homeBtn').addEventListener('click',showHome);$('brandHome').addEventListener('click',event=>{event.preventDefault();showHome();});
  $('menuSettingsBtn').addEventListener('click',()=> $('settingsDialog').showModal());
  $('splashEnter').addEventListener('click',()=>settings.onboardingSeen?showHome():showOnboarding());
  $('onboardingBtn').addEventListener('click',showOnboarding);
  $('onboardingBack').addEventListener('click',()=>{onboardingIndex=Math.max(0,onboardingIndex-1);renderOnboarding();});
  $('onboardingNext').addEventListener('click',()=>{if(onboardingIndex===onboardingPages.length-1)finishOnboarding();else{onboardingIndex++;renderOnboarding();}});
  $('onboardingSkip').addEventListener('click',finishOnboarding);
  $('aboutBtn').addEventListener('click',()=> $('aboutDialog').showModal());
  $('shareBtn').addEventListener('click',showShare);
  $('copyShareBtn').addEventListener('click',copyShare);
  $('nativeShareBtn').addEventListener('click',nativeShare);
  $('rateBtn').addEventListener('click',showRating);
  $('ratingStars').querySelectorAll('button').forEach(button=>button.addEventListener('click',()=>{rating=Number(button.dataset.rating);renderRating();$('reviewStatus').textContent='';}));
  $('saveReviewBtn').addEventListener('click',saveReview);
  $('questsBtn').addEventListener('click',()=>{renderQuests();$('questDialog').showModal();});
  $('galleryBtn').addEventListener('click',()=>{renderGallery();$('galleryDialog').showModal();});
  $('viewArtBtn').addEventListener('click',()=>state&&openArt(state.scene));
  $('activityArtBtn').addEventListener('click',()=>state&&openArt(state.scene));
  $('contactsBtn').addEventListener('click',()=>$('stationDialog').showModal());
  $('notesBtn').addEventListener('click',()=>$('notesDialog').showModal());
  $('previousBeat').addEventListener('click',()=>{const activity=activityFor(state.scene);if(activity.readingComplete)activity.readingComplete=false;else activity.beatIndex=Math.max(0,activity.beatIndex-1);render(true);});
  $('nextBeat').addEventListener('click',()=>{const activity=activityFor(state.scene);const scene=data.scenes[state.scene];const count=sceneText(scene).split('\n\n').filter(Boolean).length;if(activity.beatIndex===count-1 && hasResponseStage(scene))activity.readingComplete=true;else activity.beatIndex++;render(true);});
  compactLayout.addEventListener('change',syncAuxiliaryPanels);
  document.querySelectorAll('[data-close]').forEach(button=>button.addEventListener('click',()=>$(button.dataset.close).close()));
  $('languageSelect').addEventListener('change',event=>{settings.language=event.target.value;writeStorage(SETTINGS_KEY,settings);renderLanguage();});
  $('textSizeSelect').addEventListener('change',event=>{settings.textSize=event.target.value==='large'?'large':'regular';writeStorage(SETTINGS_KEY,settings);applyAccessibility();fitReadingFrame();});
  $('motionToggle').addEventListener('change',event=>{settings.reduceMotion=event.target.checked;writeStorage(SETTINGS_KEY,settings);applyAccessibility();});
  $('adPrivacyBtn').addEventListener('click',()=>{voicePlayer.pause();save();window.BlackoutAndroid?.showAdPrivacyOptions();});
  $('rewardHintBtn').addEventListener('click',()=>{
    if(!nativeAds||!state||pendingReward)return;
    if(!adState.rewardedReady){window.BlackoutAndroid.refreshAds();return;}
    pendingReward=monetization.requestKey(state);voicePlayer.pause();save();updateRewardControls();
    try{window.BlackoutAndroid.showRewarded(pendingReward);}catch(_){pendingReward=null;updateRewardControls();}
  });
  $('soundBtn').addEventListener('click',()=>setAudio(!settings.audio));$('audioToggle').addEventListener('change',event=>setAudio(event.target.checked));
  $('voicePlay').addEventListener('click',()=>{if(!settings.voiceover){settings.voiceover=true;$('voiceToggle').checked=true;saveVoiceSettings();}voicePlayer.toggle();});
  $('voiceReplay').addEventListener('click',()=>{if(!settings.voiceover){settings.voiceover=true;$('voiceToggle').checked=true;saveVoiceSettings();}voicePlayer.replay();});
  $('voiceProgress').addEventListener('input',event=>voicePlayer.seek(Number(event.target.value)));
  $('voiceToggle').addEventListener('change',event=>{settings.voiceover=event.target.checked;saveVoiceSettings();});
  $('voiceAutoplayToggle').addEventListener('change',event=>{settings.voiceAutoplay=event.target.checked;saveVoiceSettings();});
  $('voiceVolume').addEventListener('input',event=>{settings.voiceVolume=Number(event.target.value)/100;saveVoiceSettings();});
  $('voiceSpeed').addEventListener('change',event=>{settings.voiceSpeed=Number(event.target.value);saveVoiceSettings();});
  // A modal or background tab pauses the current performance; resuming is always a deliberate tap.
  new MutationObserver(mutations=>{if(mutations.some(m=>m.target.open))voicePlayer.pause();syncAdPlacement();}).observe(document.body,{subtree:true,attributes:true,attributeFilter:['open']});
  $('evidenceDialog').addEventListener('close',()=>{const restore=evidenceVoiceReturn;evidenceVoiceReturn=null;$('storyVoiceSlot').append($('voicePanel'));if(restore?.story){setStoryVoice(restore.story.value,restore.story.context,false);voicePlayer.seek(restore.elapsed);}else updateVoiceControls(voicePlayer.view);});
  document.addEventListener('visibilitychange',()=>{if(document.hidden)voicePlayer.pause();});
  document.addEventListener('visibilitychange',()=>{if(!audio)return;if(document.hidden)audio.context.suspend();else if(settings.audio)audio.context.resume().catch(()=>{});});
  window.addEventListener('pagehide',()=>{voicePlayer.pause();save();});
  window.addEventListener('resize',fitReadingFrame);
  window.addEventListener('blackout-native-pause',()=>{voicePlayer.pause();if(audio)audio.context.suspend().catch(()=>{});save();});
  if(!window.BlackoutAndroid && 'serviceWorker' in navigator && location.protocol!=='file:')window.addEventListener('load',()=>{navigator.serviceWorker.register('./sw.js').catch(()=>{/* The story remains playable without an offline worker. */});});
  if(nativeAds)try{adState=JSON.parse(window.BlackoutAndroid.getAdState());}catch(_){}
  reconcileRewards();updateRewardControls();
  syncAuxiliaryPanels();renderLanguage();setScreen('splash');
})();
