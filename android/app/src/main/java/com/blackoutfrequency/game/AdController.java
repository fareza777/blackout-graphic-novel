package com.blackoutfrequency.game;

import android.app.Activity;
import android.content.Context;
import android.content.SharedPreferences;
import android.net.ConnectivityManager;
import android.net.Network;
import android.net.NetworkCapabilities;
import android.view.Gravity;
import android.view.View;
import android.widget.FrameLayout;
import android.widget.LinearLayout;
import android.widget.TextView;
import com.google.android.libraries.ads.mobile.sdk.MobileAds;
import com.google.android.libraries.ads.mobile.sdk.initialization.InitializationConfig;
import com.google.android.libraries.ads.mobile.sdk.banner.AdSize;
import com.google.android.libraries.ads.mobile.sdk.banner.AdView;
import com.google.android.libraries.ads.mobile.sdk.banner.BannerAd;
import com.google.android.libraries.ads.mobile.sdk.banner.BannerAdRequest;
import com.google.android.libraries.ads.mobile.sdk.common.AdLoadCallback;
import com.google.android.libraries.ads.mobile.sdk.common.AdRequest;
import com.google.android.libraries.ads.mobile.sdk.common.FullScreenContentError;
import com.google.android.libraries.ads.mobile.sdk.common.LoadAdError;
import com.google.android.libraries.ads.mobile.sdk.interstitial.InterstitialAd;
import com.google.android.libraries.ads.mobile.sdk.interstitial.InterstitialAdEventCallback;
import com.google.android.libraries.ads.mobile.sdk.rewarded.RewardedAd;
import com.google.android.libraries.ads.mobile.sdk.rewarded.RewardedAdEventCallback;
import com.google.android.ump.ConsentInformation;
import com.google.android.ump.ConsentRequestParameters;
import com.google.android.ump.UserMessagingPlatform;
import org.json.JSONObject;
import java.util.HashSet;
import java.util.function.Consumer;

/** All SDK views and callbacks stay native; the story WebView serves local files only. */
final class AdController {
    private static final long RETRY_MS = 60_000;
    private static final long MAX_AD_AGE_MS = 55 * 60_000;
    private final Activity activity;
    private final LinearLayout bannerSlot;
    private final FrameLayout bannerContent;
    private final TextView bannerLabel;
    private final Runnable pauseGame;
    private final Consumer<JSONObject> emit;
    private final SharedPreferences preferences;
    private final RewardLedger rewards;
    private final AdPolicy policy;
    private final ConnectivityManager connectivity;
    private ConnectivityManager.NetworkCallback networkCallback;
    private ConsentInformation consent;
    private AdView banner;
    private InterstitialAd interstitial;
    private RewardedAd rewarded;
    private long interstitialAt, rewardedAt, interstitialAttempt, rewardedAttempt, bannerAttempt;
    private boolean interstitialLoading, rewardedLoading, bannerLoaded;
    private boolean initialized, initializing, consentStarted, consentUpdated, consentFormPending;
    private boolean foreground, busy, destroyed, menuSeen, modal;
    private String screen = "splash";
    private volatile String snapshot = "{}";

    AdController(Activity activity, LinearLayout bannerSlot, Runnable pauseGame, Consumer<JSONObject> emit) {
        this.activity = activity; this.bannerSlot = bannerSlot; this.pauseGame = pauseGame; this.emit = emit;
        preferences = activity.getSharedPreferences("blackout_ads", Context.MODE_PRIVATE);
        rewards = new RewardLedger(preferences);
        policy = new AdPolicy(System.currentTimeMillis(), preferences.getLong("last_fullscreen", 0), preferences.getStringSet("chapter_breaks", new HashSet<>()));
        connectivity = (ConnectivityManager) activity.getSystemService(Context.CONNECTIVITY_SERVICE);
        bannerLabel = new TextView(activity); bannerLabel.setText("Advertisement"); bannerLabel.setTextColor(0xff9daaaa); bannerLabel.setTextSize(10); bannerLabel.setGravity(Gravity.CENTER);
        int gap = dp(12); bannerLabel.setPadding(gap, gap, gap, dp(4));
        bannerContent = new FrameLayout(activity); bannerContent.setPadding(gap, 0, gap, gap);
        bannerSlot.setOrientation(LinearLayout.VERTICAL); bannerSlot.addView(bannerLabel); bannerSlot.addView(bannerContent);
        bannerSlot.setVisibility(View.GONE);
        networkCallback = new ConnectivityManager.NetworkCallback() {
            @Override public void onAvailable(Network network) { ui(() -> { maybeInitialize(); preload(); publish(); }); }
            @Override public void onLost(Network network) { ui(AdController.this::publish); }
            @Override public void onCapabilitiesChanged(Network network, NetworkCapabilities capabilities) { ui(() -> { maybeInitialize(); preload(); publish(); }); }
        };
        connectivity.registerDefaultNetworkCallback(networkCallback);
        publish();
    }
    private int dp(int value) { return Math.round(value * activity.getResources().getDisplayMetrics().density); }
    private void ui(Runnable action) { activity.runOnUiThread(() -> { if (!destroyed && !activity.isDestroyed()) action.run(); }); }
    private boolean connected() {
        NetworkCapabilities capabilities = connectivity.getNetworkCapabilities(connectivity.getActiveNetwork());
        return capabilities != null && capabilities.hasCapability(NetworkCapabilities.NET_CAPABILITY_INTERNET);
    }
    private boolean allowed() { return BuildConfig.ADMOB_TEST_MODE || (consent != null && consent.canRequestAds()); }
    void placement(String screen, boolean modal, String language) {
        if (!screen.matches("splash|onboarding|home|game")) return;
        this.screen = screen; this.modal = modal;
        bannerLabel.setText("id".equals(language) ? "Iklan" : "Advertisement");
        if (screen.equals("home")) { menuSeen = true; maybeInitialize(); maybeConsentForm(); }
        preload(); publish();
    }
    void refresh() { maybeInitialize(); preload(); publish(); }
    void resume() { foreground = true; maybeInitialize(); maybeConsentForm(); preload(); publish(); }
    void pause() { foreground = false; updateBanner(); }
    String stateJson() { return snapshot; }
    String pendingRewards() { return rewards.pendingJson(); }
    void acknowledgeReward(String key) { if (AdPolicy.validReward(key)) rewards.acknowledge(key); }

    private void maybeInitialize() {
        if (destroyed || !menuSeen || !foreground || !connected()) return;
        if (!BuildConfig.ADMOB_TEST_MODE && !consentStarted) {
            consentStarted = true;
            consent = UserMessagingPlatform.getConsentInformation(activity);
            consent.requestConsentInfoUpdate(activity, new ConsentRequestParameters.Builder().build(),
                () -> ui(() -> { consentUpdated = true; consentFormPending = true; maybeConsentForm(); publish(); }),
                error -> ui(() -> { consentStarted = false; if (allowed()) initializeSdk(); publish(); }));
        }
        if (allowed()) initializeSdk();
    }
    private void maybeConsentForm() {
        if (!consentFormPending || !foreground || busy || !screen.equals("home") || modal) return;
        consentFormPending = false; busy = true; pauseGame.run(); updateBanner();
        UserMessagingPlatform.loadAndShowConsentFormIfRequired(activity, error -> ui(() -> {
            busy = false; if (allowed()) initializeSdk(); preload(); publish();
        }));
    }
    private void initializeSdk() {
        if (initialized || initializing || !allowed()) return;
        initializing = true;
        Thread initialization = new Thread(() -> {
            try {
                MobileAds.initialize(activity.getApplicationContext(), new InitializationConfig.Builder(BuildConfig.ADMOB_APP_ID).build(),
                    status -> ui(() -> { initialized = true; initializing = false; preload(); publish(); }));
            } catch (RuntimeException error) { ui(() -> { initializing = false; publish(); }); }
        }, "Blackout-AdMob-init");
        initialization.setDaemon(true); initialization.start();
    }
    private void preload() {
        if (!initialized || !allowed() || !foreground || busy || !connected()) return;
        long now = System.currentTimeMillis();
        if (interstitial != null && now - interstitialAt >= MAX_AD_AGE_MS) interstitial = null;
        if (rewarded != null && now - rewardedAt >= MAX_AD_AGE_MS) rewarded = null;
        if (interstitial == null && !interstitialLoading && now - interstitialAttempt >= RETRY_MS) {
            interstitialLoading = true; interstitialAttempt = now;
            InterstitialAd.load(new AdRequest.Builder(BuildConfig.ADMOB_INTERSTITIAL_ID).build(), new AdLoadCallback<InterstitialAd>() {
                @Override public void onAdLoaded(InterstitialAd ad) { ui(() -> { interstitialLoading = false; interstitial = ad; interstitialAt = System.currentTimeMillis(); publish(); }); }
                @Override public void onAdFailedToLoad(LoadAdError error) { ui(() -> { interstitialLoading = false; interstitial = null; publish(); }); }
            });
        }
        if (rewarded == null && !rewardedLoading && now - rewardedAttempt >= RETRY_MS) {
            rewardedLoading = true; rewardedAttempt = now;
            RewardedAd.load(new AdRequest.Builder(BuildConfig.ADMOB_REWARDED_ID).build(), new AdLoadCallback<RewardedAd>() {
                @Override public void onAdLoaded(RewardedAd ad) { ui(() -> { rewardedLoading = false; rewarded = ad; rewardedAt = System.currentTimeMillis(); publish(); }); }
                @Override public void onAdFailedToLoad(LoadAdError error) { ui(() -> { rewardedLoading = false; rewarded = null; publish(); }); }
            });
        }
        if (screen.equals("home") && !modal && banner == null && now - bannerAttempt >= RETRY_MS) loadBanner();
    }
    private void loadBanner() {
        View parent = (View) bannerSlot.getParent();
        int availableWidth = parent.getWidth() - parent.getPaddingLeft() - parent.getPaddingRight() - bannerContent.getPaddingLeft() - bannerContent.getPaddingRight();
        if (availableWidth <= 0) return;
        bannerAttempt = System.currentTimeMillis(); banner = new AdView(activity);
        final AdView requestView = banner;
        bannerContent.addView(banner, new FrameLayout.LayoutParams(-2, -2, Gravity.CENTER));
        int width = Math.max(1, Math.round(availableWidth / activity.getResources().getDisplayMetrics().density));
        AdSize size = AdSize.getCurrentOrientationAnchoredAdaptiveBannerAdSize(activity, width);
        banner.loadAd(new BannerAdRequest.Builder(BuildConfig.ADMOB_BANNER_ID, size).build(), new AdLoadCallback<BannerAd>() {
            @Override public void onAdLoaded(BannerAd ad) { ui(() -> { if (banner == requestView) { bannerLoaded = true; publish(); } }); }
            @Override public void onAdFailedToLoad(LoadAdError error) { ui(() -> { if (banner == requestView) { destroyBanner(); publish(); } }); }
        });
    }
    private void updateBanner() {
        bannerSlot.setVisibility(bannerLoaded && foreground && !busy && !modal && allowed() && screen.equals("home") ? View.VISIBLE : View.GONE);
    }
    void showInterstitial(String key) {
        long now = System.currentTimeMillis();
        if (!foreground || busy || modal || !screen.equals("game") || !allowed() || interstitial == null || now - interstitialAt >= MAX_AD_AGE_MS || !policy.canShowInterstitial(key, now)) {
            result("interstitial", key, "skipped"); preload(); return;
        }
        final InterstitialAd ad = interstitial; interstitial = null; interstitialAttempt = 0; busy = true; pauseGame.run(); publish();
        ad.setAdEventCallback(new InterstitialAdEventCallback() {
            @Override public void onAdShowedFullScreenContent() { ui(() -> { recordShown(key); result("interstitial", key, "shown"); }); }
            @Override public void onAdDismissedFullScreenContent() { ui(() -> finishFullscreen("interstitial", key, "dismissed")); }
            @Override public void onAdFailedToShowFullScreenContent(FullScreenContentError error) { ui(() -> finishFullscreen("interstitial", key, "failed")); }
        });
        try { ad.show(activity); } catch (RuntimeException error) { finishFullscreen("interstitial", key, "failed"); }
    }
    void showRewarded(String key) {
        if (!AdPolicy.validReward(key)) { result("rewarded", key, "unavailable"); return; }
        if (rewards.pending().contains(key)) { result("rewarded", key, "earned"); return; }
        if (!foreground || busy || !screen.equals("game") || !allowed() || rewarded == null || System.currentTimeMillis() - rewardedAt >= MAX_AD_AGE_MS) {
            result("rewarded", key, "unavailable"); preload(); return;
        }
        final RewardedAd ad = rewarded; rewarded = null; rewardedAttempt = 0; busy = true; pauseGame.run(); publish();
        ad.setAdEventCallback(new RewardedAdEventCallback() {
            @Override public void onAdShowedFullScreenContent() { ui(() -> { recordShown(null); result("rewarded", key, "shown"); }); }
            @Override public void onAdDismissedFullScreenContent() { ui(() -> finishFullscreen("rewarded", key, "dismissed")); }
            @Override public void onAdFailedToShowFullScreenContent(FullScreenContentError error) { ui(() -> finishFullscreen("rewarded", key, "failed")); }
        });
        try {
            ad.show(activity, reward -> {
                // The SDK's earned callback is the only place that creates a receipt.
                if (rewards.recordEarned(key)) ui(() -> result("rewarded", key, "earned"));
            });
        } catch (RuntimeException error) { finishFullscreen("rewarded", key, "failed"); }
    }
    private void recordShown(String key) {
        policy.shown(key, System.currentTimeMillis());
        preferences.edit().putLong("last_fullscreen", policy.lastShownAt()).putStringSet("chapter_breaks", policy.seen()).apply();
    }
    private void finishFullscreen(String type, String key, String status) {
        busy = false; result(type, key, status); preload(); publish();
    }
    void showPrivacyOptions() {
        if (BuildConfig.ADMOB_TEST_MODE || consent == null || !foreground || busy || !privacyRequired()) return;
        busy = true; pauseGame.run(); destroyBanner(); interstitial = null; rewarded = null; publish();
        UserMessagingPlatform.showPrivacyOptionsForm(activity, error -> ui(() -> { busy = false; preload(); publish(); }));
    }
    private boolean privacyRequired() { return consent != null && consentUpdated && consent.getPrivacyOptionsRequirementStatus() == ConsentInformation.PrivacyOptionsRequirementStatus.REQUIRED; }
    private void result(String type, String key, String status) {
        JSONObject event = new JSONObject();
        try { event.put("type", type).put("key", key).put("status", status); } catch (org.json.JSONException impossible) { throw new IllegalStateException(impossible); }
        emit.accept(event);
    }
    private void publish() {
        updateBanner(); JSONObject state = new JSONObject();
        try {
            state.put("type", "state").put("testMode", BuildConfig.ADMOB_TEST_MODE).put("online", connected())
                .put("rewardedReady", rewarded != null && allowed() && !busy).put("interstitialReady", interstitial != null && allowed() && !busy)
                .put("bannerLoaded", bannerLoaded).put("busy", busy).put("loading", initializing || rewardedLoading)
                .put("privacyRequired", privacyRequired());
        } catch (org.json.JSONException impossible) { throw new IllegalStateException(impossible); }
        snapshot = state.toString(); emit.accept(state);
    }
    private void destroyBanner() { bannerLoaded = false; if (banner != null) { bannerContent.removeView(banner); banner.destroy(); banner = null; } }
    void destroy() {
        destroyed = true; destroyBanner(); interstitial = null; rewarded = null;
        if (networkCallback != null) { connectivity.unregisterNetworkCallback(networkCallback); networkCallback = null; }
    }
}
