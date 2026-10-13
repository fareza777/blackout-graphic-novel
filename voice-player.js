'use strict';
(function (root) {
  const clamp=(value,min,max,fallback)=>Number.isFinite(Number(value))?Math.max(min,Math.min(max,Number(value))):fallback;
  function normalizeSettings(saved={},reducedMotion=false) {
    const settings=saved && typeof saved==='object' && !Array.isArray(saved)?{...saved}:{};
    // Earlier releases selected the device language automatically. This release starts in English.
    if(!settings.englishDefaultVersion && settings.language==='auto')settings.language='en';
    if(!['en','id','auto'].includes(settings.language))settings.language='en';
    settings.englishDefaultVersion=1;
    settings.audio=Boolean(settings.audio);
    settings.voiceover=typeof settings.voiceover==='boolean'?settings.voiceover:true;
    settings.voiceAutoplay=typeof settings.voiceAutoplay==='boolean'?settings.voiceAutoplay:true;
    settings.voiceVolume=clamp(settings.voiceVolume,0,1,0.9);
    settings.voiceSpeed=clamp(settings.voiceSpeed,0.75,1.5,1);
    settings.textSize=settings.textSize==='large'?'large':'regular';
    settings.reduceMotion=typeof settings.reduceMotion==='boolean'?settings.reduceMotion:reducedMotion;
    settings.onboardingSeen=Boolean(settings.onboardingSeen);
    return settings;
  }
  class VoicePlayer {
    constructor({media,onChange=()=>{}}={}) {
      this.media=media||new Audio();this.media.preload='metadata';this.onChange=onChange;
      this.queue=[];this.index=0;this.signature='';this.status='empty';this.token=0;
      this.enabled=true;this.media.volume=0.9;this.media.playbackRate=1;
      for(const event of ['timeupdate','durationchange','loadedmetadata','seeking','seeked'])this.media.addEventListener(event,()=>this.emit());
      this.media.addEventListener('playing',()=>{if(!this.clip)return;if(!this.enabled){this.pause();return;}this.status='playing';this.emit();});
      this.media.addEventListener('waiting',()=>{if(this.clip&&!this.media.paused){this.status='loading';this.emit();}});
      this.media.addEventListener('pause',()=>{if(this.clip&&this.status!=='ended'&&this.status!=='error')this.status='paused';this.emit();});
      this.media.addEventListener('error',()=>{if(this.clip){this.status='error';this.emit();}});
      this.media.addEventListener('ended',()=>{
        if(this.index<this.queue.length-1&&this.enabled){this.index++;this.loadCurrent(true);}
        else{this.status='ended';this.emit();}
      });
    }
    get clip(){return this.queue[this.index]||null;}
    get view(){const clip=this.clip,elapsed=this.media.currentTime||0;return {clip,status:this.status,elapsed,duration:Number.isFinite(this.media.duration)&&this.media.duration>0?this.media.duration:clip?.duration||0,speaker:clip?.cues?.find(cue=>elapsed>=cue.start&&elapsed<cue.end)?.speaker||clip?.cues?.[0]?.speaker||'narrator',index:this.index,queueLength:this.queue.length,enabled:this.enabled};}
    emit(){this.onChange(this.view);}
    configure(settings){this.enabled=settings.voiceover;this.media.volume=settings.voiceVolume;this.media.playbackRate=settings.voiceSpeed;this.media.preservesPitch=true;if(!this.enabled)this.pause();this.emit();}
    setClips(clips,{autoplay=false,context=''}={}) {
      const queue=(clips||[]).filter(Boolean),signature=context+'|'+queue.map(c=>c.src).join('|');
      if(signature===this.signature)return;
      this.token++;this.media.pause();this.queue=queue;this.index=0;this.signature=signature;
      if(!queue.length){this.status='empty';this.media.removeAttribute('src');this.media.load();this.emit();return;}
      this.loadCurrent(autoplay);
    }
    loadCurrent(autoplay){this.token++;this.media.pause();this.media.src=this.clip.src;this.media.load();this.status='ready';this.emit();if(autoplay&&this.enabled)this.play();}
    async play(){if(!this.clip||!this.enabled)return;const token=++this.token;if(this.status==='ended')this.media.currentTime=0;if(this.status==='error')this.media.load();this.status='loading';this.emit();try{await this.media.play();if(token===this.token){this.status='playing';this.emit();}}catch(error){if(token!==this.token)return;this.status=error.name==='NotAllowedError'?'ready':error.name==='AbortError'?'paused':'error';this.emit();}}
    pause(){this.token++;this.media.pause();if(this.clip&&this.status!=='ended'&&this.status!=='error')this.status='paused';this.emit();}
    replay(){if(!this.clip)return;if(this.index!==0){this.index=0;this.loadCurrent(true);}else{this.media.currentTime=0;this.status='ready';this.play();}}
    toggle(){if(this.status==='playing'||this.status==='loading')this.pause();else this.play();}
    seek(seconds){if(!this.clip)return;this.media.currentTime=clamp(seconds,0,this.view.duration,0);if(this.status==='ended')this.status='paused';this.emit();}
  }
  const api={VoicePlayer,normalizeSettings};
  if(typeof module==='object'&&module.exports)module.exports=api;else root.BLACKOUT_AUDIO=api;
})(typeof window!=='undefined'?window:globalThis);
