package com.blackoutfrequency.game;

import android.app.Activity;
import android.app.Instrumentation;
import android.content.Intent;
import android.content.Context;
import android.graphics.Bitmap;
import android.media.AudioAttributes;
import android.media.AudioFocusRequest;
import android.media.AudioManager;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.view.ViewGroup;
import android.view.View;
import android.view.PixelCopy;
import android.webkit.WebView;
import java.io.File;
import java.io.FileOutputStream;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicReference;

/** Exercises the signed release through public Android and visible game UI APIs only. */
public final class OfflineSmokeInstrumentation extends Instrumentation {
    private Activity activity;
    private int checks;
    private String mode;
    @Override public void onCreate(Bundle arguments) { super.onCreate(arguments); mode=arguments == null ? "offline" : arguments.getString("mode", "offline"); start(); }
    @Override public void onStart() {
        Bundle result = new Bundle();
        try {
            if (mode.equals("ads")) exerciseAds(); else if (mode.equals("interstitial")) exerciseInterstitial(); else exerciseGame();
            result.putString("stream", "\n" + (mode.equals("offline") ? "OFFLINE_SMOKE_PASSED" : "ADMOB_" + mode.toUpperCase() + "_PASSED") + "\nChecks: " + checks + "\n");
            result.putInt("checks", checks);
            finish(Activity.RESULT_OK, result);
        } catch (Throwable error) {
            StringWriter trace = new StringWriter(); error.printStackTrace(new PrintWriter(trace));
            try { trace.append("\nGame state: ").append(js("JSON.stringify({screen:document.body.dataset.screen,voice:document.getElementById('voicePanel')?.dataset.state,time:document.getElementById('voiceMedia')?.currentTime,paused:document.getElementById('voiceMedia')?.paused,error:document.getElementById('voiceMedia')?.error?.code,beat:document.getElementById('beatCount')?.textContent})")); } catch (Throwable ignored) { }
            try { trace.append("\nAd state: ").append(js("window.BlackoutAndroid.getAdState()")); screenshot("admob-failure.png"); } catch (Throwable ignored) { }
            result.putString("stream", "\nOFFLINE_SMOKE_FAILED\n" + trace);
            result.putString("shortMsg", String.valueOf(error.getMessage()));
            finish(Activity.RESULT_CANCELED, result);
        }
    }
    private WebView gameView() { ViewGroup content = activity.findViewById(android.R.id.content); return (WebView) ((ViewGroup) content.getChildAt(0)).getChildAt(0); }
    private void check(boolean condition, String message) { if (!condition) throw new AssertionError(message); checks++; }
    private String js(String source) throws Exception {
        AtomicReference<String> result = new AtomicReference<>(); CountDownLatch latch = new CountDownLatch(1);
        runOnMainSync(() -> gameView().evaluateJavascript(source, value -> { result.set(value); latch.countDown(); }));
        check(latch.await(15, TimeUnit.SECONDS), "Web content did not answer"); return result.get();
    }
    private void until(String condition) throws Exception {
        until(condition,20000);
    }
    private void until(String condition, long waitMillis) throws Exception {
        long timeout = System.currentTimeMillis() + waitMillis;
        do { if ("true".equals(js(condition))) return; Thread.sleep(250); } while (System.currentTimeMillis() < timeout);
        throw new AssertionError("Game condition was not reached: " + condition);
    }
    private void screenshot(String name) throws Exception {
        AtomicReference<Bitmap> bitmap = new AtomicReference<>();
        CountDownLatch copied = new CountDownLatch(1); AtomicReference<Integer> result = new AtomicReference<>();
        runOnMainSync(() -> {
            View decor=activity.getWindow().getDecorView();
            bitmap.set(Bitmap.createBitmap(decor.getWidth(),decor.getHeight(),Bitmap.Config.ARGB_8888));
            PixelCopy.request(activity.getWindow(),bitmap.get(),status->{result.set(status);copied.countDown();},new Handler(Looper.getMainLooper()));
        });
        check(copied.await(10,TimeUnit.SECONDS) && result.get()==PixelCopy.SUCCESS,"Activity screenshot could not be copied");
        Bitmap image = bitmap.get();
        try (FileOutputStream stream = new FileOutputStream(new File(activity.getExternalFilesDir(null), name))) { image.compress(Bitmap.CompressFormat.PNG, 100, stream); }
    }
    private void startAtMenu() throws Exception {
        activity=startActivitySync(new Intent().setClassName(getTargetContext(),"com.blackoutfrequency.game.MainActivity").addFlags(Intent.FLAG_ACTIVITY_NEW_TASK));
        until("document.readyState==='complete' && document.body.dataset.screen==='splash'");js("document.getElementById('splashEnter').click()");
        until("['home','onboarding'].includes(document.body.dataset.screen)");
        js("if(document.body.dataset.screen==='onboarding')document.getElementById('onboardingSkip').click()");
        until("document.body.dataset.screen==='home'");
    }
    private void startNewGame() throws Exception {
        js("document.getElementById('startBtn').click();if(document.getElementById('restartDialog').open)document.getElementById('confirmRestart').click()");
        until("document.body.dataset.screen==='game'");
    }
    private void progress(String message) { Bundle status=new Bundle();status.putString("stream", "\n"+message+"\n");sendStatus(0,status); }
    private void dismissAd() throws Exception {
        long deadline=System.currentTimeMillis()+30000;
        do {
            if("false".equals(js("JSON.parse(window.BlackoutAndroid.getAdState()).busy")))return;
            sendKeyDownUpSync(android.view.KeyEvent.KEYCODE_BACK);Thread.sleep(500);
        }while(System.currentTimeMillis()<deadline);
        throw new AssertionError("The SDK ad close control was unavailable");
    }
    private void exerciseAds() throws Exception {
        startAtMenu();
        until("JSON.parse(window.BlackoutAndroid.getAdState()).bannerLoaded && JSON.parse(window.BlackoutAndroid.getAdState()).rewardedReady && JSON.parse(window.BlackoutAndroid.getAdState()).interstitialReady",120000);
        check("true".equals(js("JSON.parse(window.BlackoutAndroid.getAdState()).testMode")),"Only demo ads may be tested");
        screenshot("admob-banner.png");progress("Real Google demo banner, rewarded and interstitial loaded.");
        startNewGame();
        js("window.__adResults=[];window.addEventListener('blackout-ad-event',event=>window.__adResults.push(event.detail));window.BlackoutAndroid.showInterstitial(JSON.parse(localStorage.getItem('blackout-frequency-save-v1')).runId+':chapter-2')");
        until("window.__adResults.some(item=>item.type==='interstitial'&&item.status==='skipped')");
        js("document.getElementById('nextBeat').click();document.getElementById('nextBeat').click();document.querySelector('#choices .choice-button').click()");
        until("document.getElementById('sceneImage').dataset.sceneId==='desk'");
        js("document.getElementById('questsBtn').click()");until("!document.getElementById('rewardHintCard').hidden && !document.getElementById('rewardHintBtn').disabled");
        screenshot("admob-reward-offer.png");js("document.getElementById('rewardHintBtn').click()");
        until("JSON.parse(window.BlackoutAndroid.getAdState()).busy");progress("Real rewarded ad opened; waiting for the SDK earned callback.");
        until("JSON.parse(localStorage.getItem('blackout-frequency-save-v1')).flags['adHint:desk']===true",120000);
        progress("Real earned callback granted a persisted scene hint.");dismissAd();
        until("!document.getElementById('rewardHintText').hidden && document.getElementById('rewardHintBtn').hidden");
        check("true".equals(js("JSON.parse(localStorage.getItem('blackout-frequency-save-v1')).power===100")),"A hint must not alter story resources");
        until("window.BlackoutAndroid.getPendingRewards()==='[]'");screenshot("admob-hint-earned.png");
        runOnMainSync(()->gameView().reload());until("document.readyState==='complete' && document.body.dataset.screen==='splash'");
        js("document.getElementById('splashEnter').click()");until("document.body.dataset.screen==='home'");
        js("document.getElementById('resumeBtn').click();document.getElementById('questsBtn').click()");
        until("!document.getElementById('rewardHintText').hidden && document.getElementById('rewardHintBtn').hidden");
        progress("Earned hint survived reload; one reward was delivered and acknowledged.");runOnMainSync(()->activity.finish());
    }
    private void exerciseInterstitial() throws Exception {
        startAtMenu();until("JSON.parse(window.BlackoutAndroid.getAdState()).interstitialReady",120000);startNewGame();
        // Install the fixture after the game's normal pagehide autosave has completed.
        js("var fixture=window.BLACKOUT.newState(7391);fixture.scene='act-two-close';fixture.quests['live-lines']='complete';fixture.quests['borrowed-voice']='complete';window.addEventListener('pagehide',()=>localStorage.setItem('blackout-frequency-save-v1',JSON.stringify(fixture)),{once:true});location.reload()");
        until("document.readyState==='complete' && document.body.dataset.screen==='splash'");js("document.getElementById('splashEnter').click()");until("document.body.dataset.screen==='home'");
        js("document.getElementById('resumeBtn').click()");until("document.getElementById('sceneImage').dataset.sceneId==='act-two-close'");
        progress("Chapter-end save restored. Waiting for the genuine three-minute first-ad guard.");
        // The production policy is tested as shipped; no bypass or test clock is exposed.
        long start=System.currentTimeMillis();while(System.currentTimeMillis()-start<182000){Thread.sleep(1000);}
        js("for(var i=0;i<8&&!document.getElementById('nextBeat').hidden;i++)document.getElementById('nextBeat').click();document.querySelector('#choices .choice-button').click()");
        until("JSON.parse(window.BlackoutAndroid.getAdState()).busy");progress("Real Google demo interstitial opened only at the chapter boundary.");Thread.sleep(6000);dismissAd();
        until("document.getElementById('sceneImage').dataset.sceneId==='tower-approach'");
        check("true".equals(js("JSON.parse(localStorage.getItem('blackout-frequency-save-v1')).scene==='tower-approach'")),"Chapter must be saved before the ad");
        runOnMainSync(()->activity.finish());
    }
    private void exerciseGame() throws Exception {
        Intent intent = new Intent().setClassName(getTargetContext(), "com.blackoutfrequency.game.MainActivity").addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        activity = startActivitySync(intent);
        until("document.readyState==='complete' && document.getElementById('splashEnter') && document.documentElement.lang==='en'");
        js("document.getElementById('splashEnter').click()");
        until("document.body.dataset.screen==='onboarding'||document.body.dataset.screen==='home'");
        js("if(document.body.dataset.screen==='onboarding')document.getElementById('onboardingSkip').click()");
        js("document.getElementById('startBtn').click();if(document.getElementById('restartDialog').open)document.getElementById('confirmRestart').click()");
        until("document.body.dataset.screen==='game' && document.getElementById('voiceMedia').currentTime>0.25");
        until("document.getElementById('voiceMedia').currentTime>1.5 && !document.getElementById('voiceMedia').paused");
        check("null".equals(js("document.getElementById('voiceMedia').error")), "Voice media error");
        until("document.getElementById('sceneImage').naturalWidth>0");
        check("\"contain\"".equals(js("getComputedStyle(document.getElementById('sceneImage')).objectFit")), "Art must remain uncropped");
        check("true".equals(js("document.documentElement.scrollWidth===document.documentElement.clientWidth")), "Horizontal overflow");
        check("true".equals(js("document.querySelector('.play-column').scrollHeight<=document.querySelector('.play-column').clientHeight+1")), "Reading frame overflow");
        js("document.getElementById('voicePlay').click()"); until("document.getElementById('voiceMedia').paused");
        js("document.getElementById('voiceProgress').value='5';document.getElementById('voiceProgress').dispatchEvent(new Event('input',{bubbles:true}))");
        until("document.getElementById('voiceMedia').currentTime>=4.9");
        js("document.getElementById('voiceReplay').click()");
        until("!document.getElementById('voiceMedia').paused && document.getElementById('voiceMedia').currentTime<2");
        AudioManager manager = (AudioManager) getTargetContext().getSystemService(Context.AUDIO_SERVICE);
        AudioFocusRequest interruption = new AudioFocusRequest.Builder(AudioManager.AUDIOFOCUS_GAIN)
            .setAudioAttributes(new AudioAttributes.Builder().setUsage(AudioAttributes.USAGE_ALARM).build())
            .setOnAudioFocusChangeListener(change -> { }, new Handler(Looper.getMainLooper())).build();
        try {
            runOnMainSync(() -> check(manager.requestAudioFocus(interruption) == AudioManager.AUDIOFOCUS_REQUEST_GRANTED, "Test interruption was not granted audio focus"));
            until("document.getElementById('voiceMedia').paused");
        } finally { runOnMainSync(() -> manager.abandonAudioFocusRequest(interruption)); }
        js("fetch(document.getElementById('voiceMedia').src,{headers:{Range:'bytes=0-31'}}).then(async r=>{var result=document.createElement('output');result.id='androidRangeResult';result.hidden=true;result.textContent=r.status+':'+(await r.arrayBuffer()).byteLength;document.body.append(result)})");
        until("document.getElementById('androidRangeResult')?.textContent==='206:32'");
        js("document.getElementById('settingsBtn').click()");
        sendKeyDownUpSync(android.view.KeyEvent.KEYCODE_BACK);
        until("!document.getElementById('settingsDialog').open");
        check("true".equals(js("document.body.dataset.screen==='game'")), "Back must close the dialog before leaving the game");
        js("document.getElementById('nextBeat').click()"); until("document.getElementById('beatCount').textContent==='2 / 3'");
        runOnMainSync(() -> callActivityOnPause(activity)); until("document.getElementById('voiceMedia').paused");
        runOnMainSync(() -> callActivityOnResume(activity));
        check("true".equals(js("document.getElementById('voiceMedia').paused")), "Returning must not resume VO unexpectedly");
        runOnMainSync(() -> gameView().reload()); until("document.readyState==='complete' && document.body.dataset.screen==='splash'");
        js("document.getElementById('splashEnter').click()"); until("document.body.dataset.screen==='home'");
        js("document.getElementById('resumeBtn').click()"); until("document.getElementById('beatCount').textContent==='2 / 3'");
        js("document.getElementById('voicePlay').click()"); until("document.getElementById('voiceMedia').paused");
        js("document.getElementById('previousBeat').click();document.getElementById('voicePlay').click()"); until("document.getElementById('voiceMedia').paused");
        screenshot("blackout-frequency-android.png");
        runOnMainSync(() -> activity.finish());
    }
}
