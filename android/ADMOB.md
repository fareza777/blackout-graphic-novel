# AdMob in Blackout Frequency

The Android build defaults to Google's official demo app and ad units. No AdMob account, production identifier, or API secret is needed to test this edition. Demo ads generate no publisher revenue.

| Format | Placement | Demo identifier |
| --- | --- | --- |
| App | SDK / UMP configuration | `ca-app-pub-3940256099942544~3347511713` |
| Anchored adaptive banner | Bottom of the station menu, separate from controls | `ca-app-pub-3940256099942544/9214589741` |
| Interstitial | Forward transitions into chapters 2 and 3 | `ca-app-pub-3940256099942544/1033173712` |
| Rewarded | Player-selected scene hint in Quests | `ca-app-pub-3940256099942544/5224354917` |

## Player experience

The banner has a dedicated native container and an Advertisement label. It never overlays artwork or text. It is hidden on the splash, onboarding, every story screen, dialogs, and full-screen ads. A missing banner leaves no empty reserved space.

Interstitials require three minutes after launching the app, four minutes since any full-screen ad started, an available preloaded ad, and a forward chapter boundary. Each of the two chapter boundaries can show at most once per saved run. Opening the app, returning from the background, turning a page, making ordinary choices, reaching an ending, and exiting never trigger an interstitial. If no ad is ready, the next chapter begins immediately; an ad that loads later is not shown retroactively. The new chapter is saved before an ad is requested.

Rewarded ads are offered only for unfinished interactive tasks: inspection, radio tuning, evidence comparison, power allocation, and hub calls. The offer states the exact reward before the player chooses it: one contextual hint for the current scene, saved for the current night. Hints use the scene's actual remaining objects, frequency, evidence pair, or available calls. Story progress, resources, quest access, choices, and endings remain available without ads.

Only the SDK's earned-reward callback creates a reward receipt. Closing early, a failed load, or a failed presentation grants nothing. A receipt is persisted natively before notifying the story, applied idempotently to that run and scene, and acknowledged only after the game save succeeds. Unacknowledged receipts survive process recreation. This is a local, non-transferable hint reward; it is not a financial balance.

Voiceover and radio ambience pause before a full-screen ad, privacy form, background transition, or headphone disconnection. Reading, art, save data, and all 353 VO files remain local. Ads need a network connection; their unavailability never blocks the game. Ad loads are asynchronous, cached for less than an hour, and retried conservatively. SDK initialization runs on a background thread. Ad views and SDK callbacks are managed by the Android layer, separately from the trusted local story WebView.

## Build and test

Run `tools/build-apk.ps1` from the project root. The default signed output is `output/android/Blackout-Frequency-v1.1.0-test-ads.apk`. The original release identity is preserved, and versionCode 2 allows this APK to update versionCode 1 without uninstalling the game.

The project uses GMA Next-Gen SDK 1.5.0 and UMP 4.0.0. The demo configuration does not present a publisher-specific consent form because it has no publisher-configured UMP messages. Production mode requires the UMP consent flow before SDK initialization and ad requests, and exposes Ad privacy choices in Settings when UMP requires it. Consent errors do not stop gameplay or manufacture consent.

The framework-only instrumentation runner accepts these modes on an owned Android emulator/device:

```powershell
adb shell am instrument -w -e mode offline com.blackoutfrequency.game.test/com.blackoutfrequency.game.OfflineSmokeInstrumentation
adb shell am instrument -w -e mode ads com.blackoutfrequency.game.test/com.blackoutfrequency.game.OfflineSmokeInstrumentation
adb shell am instrument -w -e mode interstitial com.blackoutfrequency.game.test/com.blackoutfrequency.game.OfflineSmokeInstrumentation
```

The ads mode loads actual Google demo creatives, checks the startup guard, earns a hint through the SDK callback, and reloads the saved hint. The interstitial mode waits for the shipped warmup guard and uses a chapter-end save fixture to exercise the real forward transition. It introduces no production policy bypass. Native unit tests cover frequency limits and durable reward delivery; JavaScript tests cover contextual hints, run matching, idempotency, and unchanged story outcomes.

## Production configuration

Keep test mode enabled until the app's own AdMob registration and Privacy & messaging settings are ready. Production IDs are public configuration, not secrets. A production Gradle build must explicitly provide all four identifiers; missing IDs or Google's demo publisher cause the build to fail:

```powershell
.\gradlew.bat :app:assembleRelease -PadmobTestMode=false `
  -PadmobAppId=YOUR_ADMOB_APP_ID `
  -PadmobBannerId=YOUR_BANNER_UNIT_ID `
  -PadmobInterstitialId=YOUR_INTERSTITIAL_UNIT_ID `
  -PadmobRewardedId=YOUR_REWARDED_UNIT_ID
```

Use your existing `BLACKOUT_SIGNING_PROPERTIES` for a signed production build. Configure AdMob consent messages and ad-content settings for the actual audience, then verify the required store disclosures with the final SDK configuration. Do not distribute a demo edition as a live monetized release.

Official references: [Next-Gen setup](https://developers.google.com/admob/android/next-gen/quick-start), [Google demo IDs](https://developers.google.com/admob/android/next-gen/test-ads), [UMP consent](https://developers.google.com/admob/android/privacy).
