# Blackout Frequency for Android

The signed universal APK is `output/android/Blackout-Frequency-v1.1.0-test-ads.apk`, relative to the project root. It supports Android 8.0 and newer with a current Android System WebView. All 110 illustrations and 353 English voice recordings are bundled and playable offline. AdMob uses network access and its SDK's normal manifest permissions; the app requests no storage, microphone, camera, or runtime permissions. AndroidX also declares the app's own signature permission for protected receivers.

The app uses a local HTTPS asset origin, persistent on-device saves, native Share, safe screen insets, and the system Back action. WebView owns Android media audio focus so a second native focus request cannot interrupt the voiceover. Voiceover pauses when the app is backgrounded or headphones disconnect. English is the initial language; Automatic follows the phone locale. Rate remains an on-device story rating until an actual store listing exists.

AdMob defaults to official Google demo IDs for an adaptive menu banner, chapter-boundary interstitials, and optional contextual hints through rewarded ads. See [ADMOB.md](ADMOB.md) for placement rules, consent handling, durable rewards, testing, and production configuration. The browser edition has no ads.

## Build

From the project root in PowerShell:

```powershell
.\tools\build-apk.ps1
```

Requirements: Node.js, Python with Pillow/WebP, JDK 17 or newer, Android SDK platform 36 and build-tools 36.0.0. Set `ANDROID_SDK_ROOT` and `JAVA_HOME` for your machine. The included Gradle wrapper is pinned to 8.14.3 with its official distribution checksum. The build runs native unit tests, Android lint, release signing, and signature verification.

The image packer creates Android-only WebP copies without cropping or resizing the artwork. Images that need it use lossless encoding. Original PNGs remain untouched. MP3 files are copied byte for byte and stored directly inside the APK so seeking works without a server. Only runtime files are bundled; authoring tools, WAV sources, reports, and credentials are excluded.

The persistent release identity is created under `%USERPROFILE%\.codex\app-signing\blackout-frequency\`, outside the project and APK. Keep a private backup of both `release.p12` and `release-signing.properties` to sign future compatible updates. `BLACKOUT_SIGNING_PROPERTIES` can point to a restored identity. Never distribute these two private files with the game.

## Verification

```powershell
node --test tests/*.test.cjs
python tools/verify-apk.py
```

Native unit tests verify byte ranges, every bundled asset digest, trusted local content loading, and WebView configuration. The instrumented test in `app/src/androidTest` exercises English startup, real offline VO playback, pause/replay/seek, HTTP byte ranges over packaged audio, Back, background pause, and saved-page restoration. It can test the actual signed release APK by building the test APK with the same signing identity:

```powershell
cd android
$env:BLACKOUT_SIGNING_PROPERTIES = "$env:USERPROFILE/.codex/app-signing/blackout-frequency/release-signing.properties"
.\gradlew.bat :app:assembleReleaseAndroidTest
adb install -r ../output/android/Blackout-Frequency-v1.1.0-test-ads.apk
adb install -r app/build/outputs/apk/androidTest/release/app-release-androidTest.apk
adb shell am instrument -w com.blackoutfrequency.game.test/com.blackoutfrequency.game.OfflineSmokeInstrumentation
```

The test APK is a development artifact and is not part of the deliverable. APK signature, archive integrity, bundled-asset hashes, permissions, and Android compatibility are recorded in `output/android/apk-verification.json`. The release was also installed and tested on an Android 15 emulator with actual Google demo ads and in airplane mode, including an audio-focus interruption. The installed APK hash matched the delivered APK. The device record and gameplay screenshot are in `output/android/device-verification.json` and `output/android/apk-gameplay.png`. See [VERIFICATION.md](VERIFICATION.md) for the verified release digest and results.
