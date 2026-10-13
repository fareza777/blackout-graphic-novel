'use strict';
const test=require('node:test'),assert=require('node:assert/strict');
const {VoicePlayer,normalizeSettings}=require('../voice-player.js');
class Media {
  constructor(){this.events={};this.currentTime=0;this.duration=NaN;this.paused=true;this.playCount=0;}
  addEventListener(event,listener){(this.events[event]||=[]).push(listener);}
  fire(event){for(const listener of this.events[event]||[])listener();}
  pause(){this.paused=true;this.fire('pause');}
  load(){this.currentTime=0;this.duration=NaN;}
  removeAttribute(){this.src='';}
  play(){this.paused=false;this.playCount++;if(this.failure)return Promise.reject(this.failure);this.fire('playing');return this.pending||Promise.resolve();}
}
const clip=(name='a')=>({src:`assets/voice/en/${name}.mp3`,duration:12,cues:[{speaker:'narrator',start:0,end:5},{speaker:'mara',start:5,end:12}]});
test('English is the initial language, explicit language choices survive, and legacy auto migrates once',()=>{
  assert.equal(normalizeSettings(null).language,'en');assert.equal(normalizeSettings({language:'auto'}).language,'en');
  assert.equal(normalizeSettings({language:'id'}).language,'id');assert.equal(normalizeSettings({language:'auto',englishDefaultVersion:1}).language,'auto');
  const s=normalizeSettings({voiceVolume:9,voiceSpeed:3,voiceover:false});assert.equal(s.voiceVolume,1);assert.equal(s.voiceSpeed,1.5);assert.equal(s.voiceover,false);
});
test('page changes cancel playback, repeated render preserves position, and choices clear audio',async()=>{
  const media=new Media(),p=new VoicePlayer({media});p.setClips([clip()],{autoplay:true,context:'arrival:0'});await Promise.resolve();assert.equal(p.status,'playing');
  media.currentTime=6;p.setClips([clip()],{autoplay:true,context:'arrival:0'});assert.equal(media.currentTime,6);assert.equal(media.playCount,1);assert.equal(p.view.speaker,'mara');
  p.setClips([clip('b')],{autoplay:false,context:'arrival:1'});assert.equal(media.paused,true);assert.equal(media.currentTime,0);assert.equal(p.status,'ready');
  p.setClips([],{context:'choice'});assert.equal(p.clip,null);assert.equal(media.src,'');assert.equal(p.status,'empty');
});
test('mute, replay, seek and explicit pause are stable while play is pending',async()=>{
  const media=new Media(),p=new VoicePlayer({media});let finish;media.pending=new Promise(r=>finish=r);p.setClips([clip()],{autoplay:true});p.pause();finish();await Promise.resolve();await Promise.resolve();assert.equal(p.status,'paused');assert.equal(media.paused,true);
  media.pending=null;p.configure(normalizeSettings({voiceover:false,voiceVolume:.4,voiceSpeed:1.25}));await p.play();assert.equal(media.paused,true);assert.equal(media.volume,.4);assert.equal(media.playbackRate,1.25);
  p.configure(normalizeSettings({}));p.seek(99);assert.equal(media.currentTime,12);p.replay();await Promise.resolve();assert.equal(media.currentTime,0);assert.equal(p.status,'playing');
});
test('autoplay rejection leaves a usable play button; note paragraphs play in order without advancing the story',async()=>{
  const media=new Media(),p=new VoicePlayer({media});media.failure={name:'NotAllowedError'};p.setClips([clip()],{autoplay:true});await Promise.resolve();assert.equal(p.status,'ready');
  media.failure=null;p.setClips([clip(),clip('b')],{context:'note'});await p.play();media.fire('ended');await Promise.resolve();assert.equal(p.index,1);assert.equal(p.clip.src,clip('b').src);media.fire('ended');assert.equal(p.status,'ended');p.replay();await Promise.resolve();assert.equal(p.index,0);
});
