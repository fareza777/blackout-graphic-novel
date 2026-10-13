# Android 1.1.0 verification

Verified on 13 October 2026 using the signed release APK, a Google APIs Android 15 emulator, and Android System WebView 124.0.6367.219. These are emulator results; a physical-device test has not been performed.

Delivered file: `Blackout-Frequency-v1.1.0-test-ads.apk` (148,868,493 bytes).

SHA-256: `2e6acb7a621dd5c76b37184366564082afc1d095f002b414e2b2972ea2ae0a1b`.

The installed APK's digest matched this exact file. The release keeps the original signing identity and advances versionCode to 2. All four AdMob identifiers in the compiled app belong to Google's demo publisher.

| Check | Result |
| --- | --- |
| JavaScript game, story, media, offline, and monetization tests | 36 passed |
| Android unit tests | 12 passed |
| Android release lint | 0 errors |
| APK signature, archive, permissions, and 475 runtime file hashes | Passed |
| Actual AdMob demo banner and rewarded flow | `ADMOB_ADS_PASSED`, 85 assertions |
| Actual AdMob demo interstitial at a chapter transition | `ADMOB_INTERSTITIAL_PASSED`, 93 assertions |
| Game in airplane mode, with Wi-Fi and mobile data disabled | `OFFLINE_SMOKE_PASSED`, 53 assertions |

The ads test loaded actual Google demo creatives for all three formats. A rewarded hint was granted through the SDK's earned callback, saved without changing story resources, acknowledged, and retained after reloading the game. The startup interstitial guard rejected an early request. The chapter test restored a chapter-end save fixture, waited for the shipped three-minute guard, displayed the real demo interstitial, and continued to the saved next chapter after dismissal. No production clock or policy bypass was added.

The offline test exercised English startup, contained artwork, phone layout, real bundled VO playback, pause/replay/seeking, audio-focus interruption, MP3 byte ranges, Android Back, background pause, and saved-page restoration.

Build reports, result logs, screenshots, the final APK, and its checksum are generated under `output/android/` and excluded from Git. See [ADMOB.md](ADMOB.md) for test commands and production configuration. Production ad IDs and publisher-specific UMP messages were not exercised by this demo build.
