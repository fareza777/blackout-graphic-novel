package com.blackoutfrequency.game;

import android.annotation.SuppressLint;
import android.app.AlertDialog;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.graphics.Color;
import android.graphics.Insets;
import android.media.AudioManager;
import android.os.Build;
import android.os.Bundle;
import android.view.View;
import android.view.WindowInsets;
import android.view.WindowInsetsController;
import android.webkit.JavascriptInterface;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.widget.FrameLayout;
import android.widget.LinearLayout;
import android.view.ViewGroup;
import androidx.webkit.WebViewClientCompat;
import androidx.activity.ComponentActivity;
import androidx.activity.OnBackPressedCallback;

public final class MainActivity extends ComponentActivity {
    private WebView webView;
    private BroadcastReceiver noisyReceiver;
    private AdController ads;

    @SuppressLint("SetJavaScriptEnabled")
    @Override protected void onCreate(Bundle state) {
        super.onCreate(state);
        LinearLayout root = new LinearLayout(this);
        root.setOrientation(LinearLayout.VERTICAL);
        root.setBackgroundColor(Color.rgb(11, 16, 18));
        if (Build.VERSION.SDK_INT >= 30) getWindow().setDecorFitsSystemWindows(false);
        else getWindow().getDecorView().setSystemUiVisibility(View.SYSTEM_UI_FLAG_LAYOUT_STABLE | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION);
        root.setOnApplyWindowInsetsListener((view, insets) -> {
            if (Build.VERSION.SDK_INT >= 30) {
                Insets safe = insets.getInsets(WindowInsets.Type.systemBars() | WindowInsets.Type.displayCutout() | WindowInsets.Type.ime());
                view.setPadding(safe.left, safe.top, safe.right, safe.bottom);
            } else view.setPadding(insets.getSystemWindowInsetLeft(), insets.getSystemWindowInsetTop(), insets.getSystemWindowInsetRight(), insets.getSystemWindowInsetBottom());
            return insets;
        });
        setContentView(root);
        if (Build.VERSION.SDK_INT >= 30 && getWindow().getInsetsController() != null) getWindow().getInsetsController().setSystemBarsAppearance(0, WindowInsetsController.APPEARANCE_LIGHT_STATUS_BARS | WindowInsetsController.APPEARANCE_LIGHT_NAVIGATION_BARS);

        // WebView owns the media audio focus. A second native request would
        // receive focus loss when the same WebView starts its voice recording.
        webView = new WebView(this);
        webView.setId(View.generateViewId());
        webView.setBackgroundColor(Color.rgb(11, 16, 18));
        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setAllowFileAccess(false);
        settings.setAllowContentAccess(false);
        settings.setAllowFileAccessFromFileURLs(false);
        settings.setAllowUniversalAccessFromFileURLs(false);
        settings.setMixedContentMode(WebSettings.MIXED_CONTENT_NEVER_ALLOW);
        settings.setMediaPlaybackRequiresUserGesture(false);
        settings.setJavaScriptCanOpenWindowsAutomatically(false);
        settings.setSupportMultipleWindows(false);
        settings.setSupportZoom(false);
        settings.setTextZoom(100);
        WebView.setWebContentsDebuggingEnabled(BuildConfig.DEBUG);
        webView.addJavascriptInterface(new AndroidBridge(), "BlackoutAndroid");
        AssetServer assets = new AssetServer(this);
        webView.setWebChromeClient(new WebChromeClient());
        webView.setWebViewClient(new WebViewClientCompat() {
            @Override public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest request) { return assets.respond(request.getUrl(), request.getRequestHeaders()); }
            @Override public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                if (AssetServer.isGameUri(request.getUrl())) return false;
                if (request.isForMainFrame() && ("https".equals(request.getUrl().getScheme()) || "http".equals(request.getUrl().getScheme()))) {
                    try { startActivity(new Intent(Intent.ACTION_VIEW, request.getUrl())); } catch (android.content.ActivityNotFoundException ignored) { }
                }
                return true;
            }
        });
        root.addView(webView, new LinearLayout.LayoutParams(LinearLayout.LayoutParams.MATCH_PARENT, 0, 1));
        LinearLayout bannerSlot = new LinearLayout(this);
        root.addView(bannerSlot, new LinearLayout.LayoutParams(LinearLayout.LayoutParams.MATCH_PARENT, LinearLayout.LayoutParams.WRAP_CONTENT));
        ads = new AdController(this, bannerSlot, this::pauseGame, event -> {
            if (webView != null && !isDestroyed()) webView.evaluateJavascript("window.dispatchEvent(new CustomEvent('blackout-ad-event',{detail:" + event + "}));", null);
        });
        root.requestApplyInsets();
        webView.loadUrl(AssetServer.START_URL);

        noisyReceiver = new BroadcastReceiver() { @Override public void onReceive(Context context, Intent intent) { pauseGame(); } };
        if (Build.VERSION.SDK_INT >= 33) registerReceiver(noisyReceiver, new IntentFilter(AudioManager.ACTION_AUDIO_BECOMING_NOISY), Context.RECEIVER_NOT_EXPORTED);
        else registerReceiver(noisyReceiver, new IntentFilter(AudioManager.ACTION_AUDIO_BECOMING_NOISY));
        getOnBackPressedDispatcher().addCallback(this, new OnBackPressedCallback(true) {
            @Override public void handleOnBackPressed() { handleBack(); }
        });
    }

    final class AndroidBridge {
        @JavascriptInterface public String getAdState() { return ads.stateJson(); }
        @JavascriptInterface public void setAdPlacement(String screen, boolean modal, String language) { if (screen != null) runOnUiThread(() -> ads.placement(screen, modal, language)); }
        @JavascriptInterface public void refreshAds() { runOnUiThread(ads::refresh); }
        @JavascriptInterface public void showInterstitial(String key) { runOnUiThread(() -> ads.showInterstitial(key)); }
        @JavascriptInterface public void showRewarded(String key) { runOnUiThread(() -> ads.showRewarded(key)); }
        @JavascriptInterface public String getPendingRewards() { return ads.pendingRewards(); }
        @JavascriptInterface public void acknowledgeReward(String key) { ads.acknowledgeReward(key); }
        @JavascriptInterface public void showAdPrivacyOptions() { runOnUiThread(ads::showPrivacyOptions); }
        @JavascriptInterface public String getDeviceLanguage() { return getResources().getConfiguration().getLocales().get(0).toLanguageTag(); }
        @JavascriptInterface public void shareStory(String message) {
            if (message == null || message.length() > 10000) return;
            runOnUiThread(() -> {
                if (isFinishing() || isDestroyed()) return;
                pauseGame();
                Intent share = new Intent(Intent.ACTION_SEND).setType("text/plain").putExtra(Intent.EXTRA_TEXT, message).putExtra(Intent.EXTRA_SUBJECT, getString(R.string.app_name));
                startActivity(Intent.createChooser(share, getString(R.string.share_title)));
            });
        }
    }
    private void pauseGame() {
        if (webView != null) webView.evaluateJavascript("window.dispatchEvent(new Event('blackout-native-pause'));", null);
    }
    private void handleBack() {
        pauseGame();
        webView.evaluateJavascript("(function(){var dialogs=Array.from(document.querySelectorAll('dialog[open]'));if(dialogs.length){dialogs[dialogs.length-1].close();return 'handled';}var screen=document.body.dataset.screen;if(screen==='game'){document.getElementById('homeBtn').click();return 'handled';}if(screen==='onboarding'){document.getElementById('onboardingSkip').click();return 'handled';}return document.documentElement.lang==='id'?'exit-id':'exit-en';})()", result -> {
            if (isFinishing() || isDestroyed() || "\"handled\"".equals(result)) return;
            boolean indonesian = "\"exit-id\"".equals(result);
            new AlertDialog.Builder(this)
                .setTitle(indonesian ? "Tinggalkan frekuensi?" : "Leave the frequency?")
                .setMessage(indonesian ? "Progresmu tersimpan. Kamu bisa melanjutkan malam ini nanti." : "Your progress is saved. You can continue this night when you return.")
                .setNegativeButton(indonesian ? "Tetap di sini" : "Stay", (dialog, which) -> dialog.dismiss())
                .setPositiveButton(indonesian ? "Keluar" : "Exit", (dialog, which) -> finish())
                .show();
        });
    }
    @Override protected void onPause() { if (ads != null) ads.pause(); pauseGame(); if (webView != null) webView.onPause(); super.onPause(); }
    @Override protected void onResume() { super.onResume(); if (webView != null) webView.onResume(); if (ads != null) ads.resume(); }
    @Override protected void onDestroy() {
        if (noisyReceiver != null) unregisterReceiver(noisyReceiver);
        if (ads != null) ads.destroy();
        if (webView != null) { webView.removeJavascriptInterface("BlackoutAndroid"); ((ViewGroup) webView.getParent()).removeView(webView); webView.destroy(); webView = null; }
        super.onDestroy();
    }
    WebView gameView() { return webView; }
}
