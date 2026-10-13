# Blackout Frequency

A complete, original three-act interactive graphic novel about one night in a flooded coastal radio station. A false rescue order uses your own voice. Keep real callers alive, trace the archive that borrowed it, and decide what truth should become public.

## Play

Serve this folder with Python, then open the local URL:

```powershell
python -m http.server 8765 --bind 127.0.0.1
```

Open `http://127.0.0.1:8765/`. The splash leads to a three-page introduction, then New game or Continue transmission. A signed Android edition is also available at `output/android/Blackout-Frequency-v1.1.0-test-ads.apk`. The complete story, artwork, and VO are playable offline. See `android/README.md` for build and installation details. A Play Store listing has not been published.

## Android ads

Version 1.1.0 integrates GMA Next-Gen SDK with Google's demo IDs by default. An adaptive banner appears only in the station menu. Interstitials can appear at the two forward chapter boundaries, with a three-minute startup guard, a four-minute shared full-screen cooldown, and one impression per boundary per saved run. Rewarded ads offer one contextual hint for an unfinished interactive task, only after the player chooses Watch ad. Earned hints are saved; canceling or unavailable ads never grant rewards or block the story. Production mode gates requests through UMP consent. Details and test IDs are in [android/ADMOB.md](android/ADMOB.md).

The repository includes original artwork, mastered MP3s, source, authoring tools, and the Android Gradle wrapper. Generated builds, voice production caches, local SDK paths, credentials, and private signing files are excluded from version control. Build the APK with `tools/build-apk.ps1`; its release identity is stored privately outside this project.

## What is playable

- 69 scene locations across three chapters, with a resolved central mystery.
- Three main quests and five optional side quests: the market bell, shelter supplies, a private message, a missing witness, and a stranded dog.
- Six random encounter slots with three authored variants each: 18 encounters and 36 persistent response consequences.
- Six principal endings and 45 conditional afterword passages that remember choices and unfinished promises.
- Station inspection, radio tuning, evidence comparison, power allocation, rescue routes, trust, and decisions about publishing evidence.
- An app icon, splash, onboarding, New game, Continue, Settings, About, Share, local Rate, quest journal, contacts, notes, and an unlocked art gallery.

Random encounters are seeded when a new game starts. They remain stable through reloads and language changes. A new game creates a fresh seed; chance can still repeat a previous encounter. Quest hubs remove completed errands, so returning cannot farm rewards.

## Reading and accessibility

Connected, justified paragraphs give each conversation its setting, reactions, and emotional progression. Multi-option responses appear after the conversation, with a way to return and read it again. The reading frame gives longer prose more room on a phone while keeping the illustration available through View art. The main game is designed for a single phone viewport, with paged choices and compact activities. Dialogs hold longer notes and the gallery. Large text and unusually short screens retain a scrolling fallback so controls remain reachable. All artwork uses contain framing; View art opens the entire illustration.

English is the initial and source language. Players can select Automatic to follow an Indonesian device locale (English for other locales), or choose English or Bahasa Indonesia explicitly. Existing explicit language choices are preserved. Settings include text size, reduced motion, optional radio ambience, and English voiceover controls. Every clue can be read without sound. Keyboard-accessible controls include radio adjustment buttons.

## English voiceover

Deepgram Flux TTS supplies nine distinct voices. Donovan narrates and voices the operator; Alexis plays Mara, Wade plays Iman, Cole plays Raka, Haley plays Lia, Brittany plays Bu Sari, Cliff plays Salim, Miles plays Arga, and Sienna plays Nila. Supporting callers use appropriate voices from this cast. Dialogue is attributed individually inside each paragraph. The recorded dispatch uses the operator’s voice with a subtle radio treatment, consistent with the story.

The voice edition covers every English narrative paragraph: the three acts, conditional variants, random encounters, six endings, 45 afterwords, and evidence notes. Its 353 mastered MP3 files contain about 121 minutes across all branches, totaling about 84 MiB. A page’s audio joins narration and character dialogue, with consistent levels and room around voice changes. Play/pause, replay, seeking, volume, speed, and automatic page playback are available. It never chooses a response or turns a story page automatically. Opening a menu, changing a page, or hiding the app stops overlapping playback. Evidence notes have their own optional playback; closing a note restores the story’s audio position.

Voiceover stays in English when the text is translated. Audio is generated during production and shipped as local files; playing or replaying the game makes no Deepgram API call. No API credential is included in the app. `voice-manifest.js` maps exact paragraphs to recordings and speaker cues. `output/voice-production-report.json` records duration, size, and estimated character charges. `output/voice-speech-verification.json` records automated transcription checks; those checks assess intelligibility, not the quality of acting by ear. A casting preview is in `output/voice-auditions/english-cast-preview.mp3`.

To regenerate changed prose, supply `DEEPGRAM_API_KEY` temporarily in your process environment and run `node tools/build-voiceover.mjs`. Successful source recordings are reused from `output/voice-cache/`. Production has a conservative US$12 character-charge cap and never saves the credential. `--plan` reports coverage and estimated generation cost without contacting Deepgram. The authoring tools and uncompressed source recordings are not required to play the game.

## Saving, sharing, and installation

Progress, the current passage, selected encounter variants, settings, and ratings save locally in this browser. They are not synchronized between devices. Valid earlier chapter saves are migrated. Continue resumes the current night.

On a supported browser, the web manifest allows home-screen installation. Serve over HTTPS for remote use; localhost is suitable for development. The service worker caches the app shell, illustrations after they are viewed, and voice pages after they are loaded. Cached audio supports offline seeking. Unvisited art and unheard audio still need a connection. Large media is loaded on demand, and device cache limits may affect offline availability.

Share uses the device share sheet when supported, with Copy message as a fallback. A local preview shares the story invitation without a localhost download link. When hosted at a public URL, that URL is included. Rate saves a personal 1–5 star review on this device; it does not post to an app store. A store listing can be wired in after publication.

## Art and source

The 110 selected illustrations and branding assets were generated for this project with the built-in image generation tool. They total about 304 MiB and load as needed. Characters appear only from behind, as silhouettes, or with fully opaque covered faces. No visible facial anatomy is part of the design. `assets/art-manifest.json` records the exact generation prompts and saved paths, including two revised compositions. It includes dedicated artwork for hub returns, random variants, and all six endings. The maskable app icon repeats the same brand mark intentionally. A complete journey with every side quest reveals 80 distinct images; other encounter variants and endings appear on different journeys.

- `story.js`: bilingual scenes, quests, evidence, encounter variants, endings, and afterwords.
- `STORY_BIBLE.md`: plot continuity and character motivations; contains spoilers.
- `ART_BRIEF.json`: scene art direction and bilingual descriptions.
- `core.js`: deterministic state, quest gates, investigation, power, and ending rules.
- `game.js`, `index.html`, `styles.css`: responsive interface and local app flow.
- `voice-player.js`, `voice-manifest.js`, `assets/voice/en/`: English casting, playback, and mastered recordings.
- `manifest.webmanifest`, `sw.js`: install metadata and offline support.

The reference is Buff Studio's *7Days*: https://play.google.com/store/apps/details?id=com.buffstudio.sevendays_free . Blackout Frequency has its own characters, plot, dialogue, mechanics, and artwork.

## Verification

```powershell
node --test tests/*.test.cjs
```

The checks cover bilingual content, reachable branches, all six ending routes, save migration, quest replay gates, seeded encounters, all 36 random responses and their afterwords, independent artwork hashes, and offline behavior. Browser verification additionally exercises the app menus and a full three-act journey at phone size. Screenshots are saved in `output/`.
