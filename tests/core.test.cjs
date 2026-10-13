'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const crypto = require('node:crypto');
const root = path.resolve(__dirname, '..');
const read = name => fs.readFileSync(path.join(root, name), 'utf8');
const context = vm.createContext({ window: {} });
vm.runInContext(read('core.js'), context, { filename: 'core.js' });
vm.runInContext(read('story.js'), context, { filename: 'story.js' });
const core = context.window.BLACKOUT;
const data = context.window.GAME_DATA;
const plain = value => JSON.parse(JSON.stringify(value));
const copy = value => plain(value);
const circuits = [['clinic', 'relay'], ['clinic', 'dock'], ['relay', 'dock']];
const fixture = {
  evidence: { a: {}, b: {}, clue: {}, reward: {} },
  scenes: {
    arrival: { type: 'dialogue', text: { en: 'One.\n\nTwo.', id: 'Satu.\n\nDua.' } },
    inspect: { type: 'inspect', hotspots: [{ id: 'log' }], text: { en: 'Look.', id: 'Lihat.' } },
    tune: { type: 'tune', text: { en: 'Listen.', id: 'Dengar.' } },
    evidence: { type: 'evidence', text: { en: 'Compare.', id: 'Cocokkan.' } },
    power: { type: 'power', text: { en: 'Choose.', id: 'Pilih.' } },
    sample: {
      type: 'dialogue', text: { en: 'One.\n\nTwo.\n\nThree.', id: 'Satu.\n\nDua.\n\nTiga.' },
      textVariants: [{ requires: { verified: true }, text: { en: 'Short.\n\nFinal.', id: 'Pendek.\n\nAkhir.' } }]
    },
    random: {
      type: 'random', text: { en: 'Base.', id: 'Dasar.' },
      encounters: ['a', 'b', 'c'].map(id => ({ id, text: { en: 'First.\n\nLast.', id: 'Awal.\n\nAkhir.' }, choices: [] }))
    }
  }
};
function roundTrip(state, content = fixture) {
  const restored = core.restoreState(copy(state), content);
  assert.ok(restored, 'A valid save must restore');
  assert.deepEqual(plain(restored), plain(state), 'A save must preserve committed and draft progress');
  return restored;
}
function localized(value, label) {
  assert.equal(typeof value?.en, 'string', label + ': missing English');
  assert.equal(typeof value?.id, 'string', label + ': missing Indonesian');
  assert.ok(value.en.trim() && value.id.trim(), label + ': empty translation');
}
function sceneChoices(state, scene) {
  return core.encounterFor(state, state.scene, scene)?.choices || scene.choices || [];
}
function enter(state) {
  const scene = data.scenes[state.scene];
  assert.ok(scene, 'Missing scene ' + state.scene);
  for (const id of scene.onEnterEvidence || []) core.addEvidence(state, id);
  for (const [id, status] of Object.entries(scene.onEnterQuests || {})) state.quests[id] = status;
  const activity = state.activities[state.scene] ||= {};
  activity.beatIndex = Math.min(...['en', 'id'].map(language => core.narrativeFor(state, state.scene, scene)[language].split('\n\n').filter(Boolean).length)) - 1;
  return scene;
}
function activity(state, scene, policy) {
  const draft = state.activities[state.scene];
  if (scene.type === 'inspect') {
    draft.visited = scene.hotspots.map(item => item.id);
    for (const hotspot of scene.hotspots) {
      if (hotspot.evidence) core.addEvidence(state, hotspot.evidence);
      for (const [flag, value] of Object.entries(hotspot.effects?.flags || {})) state.flags[flag] = value;
    }
    state.flags[scene.completeFlag || 'deskReady'] = true;
  }
  if (scene.type === 'tune') {
    draft.frequency = scene.tune.target;
    assert.equal(core.lockSignal(state, draft.frequency, scene.tune.target, scene.tune.clue, scene.completeFlag || scene.tune.flag || 'signalLocked'), true);
  }
  if (scene.type === 'evidence') {
    const specification = scene.compare || scene.evidence;
    draft.selected = policy.verify ? [...specification.pair] : [];
    if (policy.verify) assert.equal(core.compareEvidence(state, draft.selected, specification.pair, specification.reward, specification.flag || 'verified'), true);
  }
  if (scene.type === 'power') {
    draft.circuits = [...policy.circuits];
    assert.equal(core.allocatePower(state, draft.circuits), true);
  }
}
function run(seed, policy = {}) {
  policy = { verify: true, circuits: circuits[0], optional: true, final: 'protectedNames', ...policy };
  let state = core.newState(seed);
  const visits = new Map();
  for (let step = 0; step < 240; step++) {
    const scene = enter(state);
    if (scene.type === 'ending' && (!scene.choices || !scene.choices.length)) return state;
    activity(state, scene, policy);
    const available = sceneChoices(state, scene).filter(choice => core.choiceAvailable(state, choice));
    assert.ok(available.length, 'Dead end at ' + state.scene);
    const count = visits.get(state.scene) || 0;
    visits.set(state.scene, count + 1);
    const mainFinal = available.find(choice => choice.effects?.flags?.[policy.final]);
    const questChoice = available.find(choice => Object.entries(choice.effects?.quests || {}).some(([id, status]) => status === 'active' && data.quests?.find(quest => quest.id === id)?.kind === 'side'));
    const preferred = available.find(choice => choice.id === policy.choices?.[state.scene]);
    const index = Math.floor(core.randomFor(state, 'choice:' + step) * available.length);
    const choice = preferred || mainFinal || (policy.optional && questChoice) || available[index];
    assert.equal(core.applyChoice(state, choice), true);
    state = roundTrip(state, data);
  }
  assert.fail('Route exceeded 240 decisions (hub gating may be broken)');
}

test('locale follows device support with explicit language overrides', () => {
  for (const device of ['id', 'id-ID', 'ID-id']) assert.equal(core.languageFor('auto', device), 'id');
  for (const device of ['en-US', 'fr-FR', 'identity', '', undefined]) assert.equal(core.languageFor('auto', device), 'en');
  assert.equal(core.languageFor('en', 'id-ID'), 'en');
  assert.equal(core.languageFor('id', 'en-US'), 'id');
});

test('seeded encounters vary across runs and remain stable for each scene', () => {
  const signatures = new Set();
  const selected = new Set();
  for (let seed = 0; seed < 160; seed++) {
    const state = core.newState(seed);
    const same = core.newState(seed);
    const signature = [];
    for (let index = 0; index < 6; index++) {
      const id = 'slot-' + index;
      const encounter = core.encounterFor(state, id, fixture.scenes.random);
      assert.equal(core.encounterFor(same, id, fixture.scenes.random).id, encounter.id);
      assert.equal(core.encounterFor(state, id, fixture.scenes.random).id, encounter.id);
      signature.push(encounter.id);
      selected.add(encounter.id);
    }
    signatures.add(signature.join('/'));
  }
  assert.deepEqual([...selected].sort(), ['a', 'b', 'c']);
  assert.ok(signatures.size > 50, 'Multiple encounters must produce many replay combinations');
});

test('encounter selection survives reload, pagination and a changed seed', () => {
  const state = core.newState(23);
  state.scene = 'random';
  const encounter = core.encounterFor(state, 'random', fixture.scenes.random);
  state.activities.random = { beatIndex: 1 };
  const restored = roundTrip(state);
  assert.equal(core.encounterFor(restored, 'random', fixture.scenes.random).id, encounter.id);
  restored.seed = 999;
  assert.equal(core.encounterFor(restored, 'random', fixture.scenes.random).id, encounter.id, 'An already visited encounter must never reroll');
});

test('random encounter reading and response phases survive saves without accepting malformed flags', () => {
  const sceneId = 'encounter-rescue';
  const scene = data.scenes[sceneId];
  assert.equal(scene.type, 'random', 'This regression must exercise an actual random scene');
  for (const readingComplete of [true, false]) {
    const state = core.newState(23);
    state.scene = sceneId;
    const encounter = core.encounterFor(state, sceneId, scene);
    const lastBeat = encounter.text.en.split('\n\n').filter(Boolean).length - 1;
    state.activities[sceneId] = { beatIndex: lastBeat, choicePage: 0, readingComplete };
    const restored = roundTrip(state, data);
    assert.equal(restored.activities[sceneId].readingComplete, readingComplete);
    assert.equal(core.encounterFor(restored, sceneId, scene).id, encounter.id);
    assert.equal(restored.activities[sceneId].beatIndex, lastBeat);
  }
  for (const malformed of ['true', 'false', 1, 0, null, {}, []]) {
    const state = core.newState(23);
    state.scene = sceneId;
    const encounter = core.encounterFor(state, sceneId, scene);
    state.activities[sceneId] = { beatIndex: 1, readingComplete: malformed };
    const restored = core.restoreState(copy(state), data);
    assert.equal(Object.hasOwn(restored.activities[sceneId], 'readingComplete'), false, 'Only a boolean may restore the response phase');
    assert.equal(restored.activities[sceneId].beatIndex, 1, 'Invalid phase data must not discard valid reading progress');
    assert.equal(core.encounterFor(restored, sceneId, scene).id, encounter.id);
  }
});

test('legacy saves migrate once without losing decisions and invalid versions are rejected', () => {
  const legacy = { version: 1, scene: 'arrival', trust: { mara: 2 }, flags: { verified: true }, power: 72, evidence: ['a'], visited: ['arrival'], history: [{ scene: 'arrival', choice: 'continue' }], activities: { arrival: { beatIndex: 1 } } };
  const first = core.restoreState(legacy, fixture);
  const second = core.restoreState(legacy, fixture);
  assert.equal(first.version, 2);
  assert.equal(first.seed, second.seed);
  assert.equal(first.runId, second.runId);
  assert.equal(first.activities.arrival.beatIndex, 1);
  assert.equal(first.trust.mara, 2);
  assert.deepEqual(plain(first.evidence), ['a']);
  roundTrip(first);
  const formerFinale = core.restoreState({ ...legacy, scene: 'ending', evidence: ['shift-log', 'relay-message'], activities: { ending: { beatIndex: 0 } } }, data);
  assert.ok(formerFinale, 'The original chapter ending must resume into the expanded novel');
  assert.equal(formerFinale.scene, 'ending');
  assert.equal(data.scenes[formerFinale.scene].type, 'dialogue');
  assert.equal(formerFinale.quests['live-lines'], 'complete');
  assert.equal(formerFinale.quests['borrowed-voice'], 'active');
  assert.deepEqual(plain(formerFinale.evidence), ['shift-log', 'relay-message']);
  roundTrip(formerFinale, data);
  for (const invalid of [null, false, [], {}, { version: 99, scene: 'arrival' }, { version: 2, scene: 'absent' }]) assert.equal(core.restoreState(invalid, fixture), null);
});

test('malformed save fields cannot break controls or bypass ownership', () => {
  const restored = core.restoreState({
    version: 2, seed: 1, scene: 'evidence', trust: { mara: 500, iman: -500, raka: 'bad' }, power: -4,
    flags: { verified: false, valid: true, invalid: 'yes' }, evidence: ['a', 'a', 'absent'],
    visited: ['arrival', 'arrival', 'absent'], quests: { bell: 'complete', broken: 'yes', 'enc-window': 'complete' },
    encounters: { random: 'absent' },
    history: Array.from({ length: 220 }, () => ({ scene: 'arrival', choice: 'continue' })),
    activities: { inspect: { visited: true }, tune: { frequency: 'bad' }, evidence: { selected: ['a', 'absent'] }, power: { circuits: 123 } }
  }, fixture);
  assert.ok(restored);
  assert.deepEqual(plain(restored.trust), { mara: 3, iman: -3, raka: 0 });
  assert.equal(restored.power, 0);
  assert.equal(restored.flags.invalid, undefined);
  assert.equal(restored.quests.broken, undefined);
  assert.equal(restored.quests['enc-window'], 'complete');
  assert.equal(restored.history.length, 200);
  assert.deepEqual(plain(restored.evidence), ['a']);
  assert.deepEqual(plain(restored.activities.evidence.selected), ['a']);
  assert.deepEqual(plain(restored.activities.inspect.visited), []);
  assert.equal(restored.activities.tune.frequency, 91.2);
  roundTrip(restored);
});

test('page restoration respects conditional and bilingual narrative length', () => {
  for (const verified of [false, true]) {
    const last = verified ? 1 : 2;
    for (const [index, expected] of [[0, 0], [1.8, 1], [-4, 0], [99, last], [NaN, 0], ['1', 0]]) {
      const state = core.newState(1);
      state.scene = 'sample'; state.flags.verified = verified;
      state.activities.sample = { beatIndex: index };
      assert.equal(core.restoreState(state, fixture).activities.sample.beatIndex, expected);
    }
  }
  const bilingual = copy(fixture);
  bilingual.scenes.sample.textVariants[0].text.id = 'Akhir.';
  const state = core.newState(1);
  state.scene = 'sample'; state.flags.verified = true; state.activities.sample = { beatIndex: 99 };
  assert.equal(core.restoreState(state, bilingual).activities.sample.beatIndex, 0);
  const pages = core.newState(5);
  pages.scene = 'sample';
  pages.activities.sample = { beatIndex: 1, choicePage: 3, evidencePage: 2, endingPage: 5, readingComplete: true };
  roundTrip(pages);
  pages.activities.sample.readingComplete = false;
  roundTrip(pages);
  pages.activities.sample = { choicePage: Infinity, evidencePage: -7, endingPage: 400 };
  const restored = core.restoreState(pages, fixture);
  assert.equal(restored.activities.sample.choicePage, 0);
  assert.equal(restored.activities.sample.evidencePage, 0);
  assert.equal(restored.activities.sample.endingPage, 100);
});

test('quest gates prevent repeat rewards and generic effects preserve evidence uniqueness', () => {
  const state = core.newState(1);
  const begin = { id: 'take-bell', next: 'sample', requiresQuest: { bell: 'unstarted' }, effects: { quests: { bell: 'active' } } };
  const complete = { id: 'ring-bell', next: 'arrival', requiresQuest: { bell: 'active' }, effects: { quests: { bell: 'complete' }, trust: { mara: 2 }, power: 8, flags: { communityBell: true }, evidence: ['a', 'a'] } };
  assert.equal(core.choiceAvailable(state, begin), true);
  assert.equal(core.applyChoice(state, begin), true);
  assert.equal(core.choiceAvailable(state, begin), false);
  assert.equal(core.applyChoice(state, complete), true);
  const committed = copy(state);
  assert.equal(core.applyChoice(state, complete), false);
  assert.deepEqual(plain(state), committed);
  assert.equal(core.choiceAvailable(state, { requiresQuest: 'bell' }), true);
  assert.deepEqual(plain(state.evidence), ['a']);
  assert.equal(state.power, 100);
  core.applyChoice(state, { id: 'leave-hub', next: 'arrival', effects: { quests: { bell: 'missed' } } });
  assert.equal(state.quests.bell, 'complete', 'Leaving a hub must preserve already completed side quests');
  roundTrip(state);
});

test('independent radio channels charge once each and reject invalid frequencies', () => {
  const state = core.newState(1);
  for (const frequency of [96.15, 96.4, 96.65]) assert.equal(core.lockSignal(state, frequency, 96.4, 'clue'), true);
  assert.equal(state.power, 92);
  assert.equal(core.lockSignal(state, 101.8, 101.8, 'b', 'archiveSignal'), true);
  assert.equal(core.lockSignal(state, 101.8, 101.8, 'b', 'archiveSignal'), true);
  assert.equal(state.power, 84);
  assert.ok(state.flags.signalLocked && state.flags.archiveSignal);
  for (const frequency of [96.149, 96.651, NaN, Infinity]) {
    const before = copy(state);
    assert.equal(core.lockSignal(state, frequency, 96.4, 'a'), false);
    assert.deepEqual(plain(state), before);
  }
  assert.equal(core.signalStrength(96.4, 96.4), 1);
  assert.equal(core.signalStrength(88, 96.4), 0);
});

test('each evidence puzzle needs the actual two owned documents', () => {
  const state = core.newState(1);
  core.addEvidence(state, 'a'); core.addEvidence(state, 'b');
  for (const selection of [[], ['a'], ['a', 'a'], ['a', 'clue'], ['a', 'b', 'clue']]) {
    const before = copy(state);
    assert.equal(core.compareEvidence(state, selection, ['a', 'b'], 'reward', 'archiveVerified'), false);
    assert.deepEqual(plain(state), before);
  }
  assert.equal(core.compareEvidence(state, ['b', 'a'], ['a', 'b'], 'reward', 'archiveVerified'), true);
  assert.equal(state.flags.archiveVerified, true);
  assert.equal(state.flags.verified, false, 'A second puzzle must not overwrite an earlier verification flag');
  assert.equal(core.compareEvidence(state, ['a', 'b'], ['a', 'b'], 'reward', 'archiveVerified'), true);
  assert.deepEqual(plain(state.evidence), ['a', 'b', 'reward']);
});

test('power supports exactly two distinct circuits and never spends twice', () => {
  for (const pair of circuits) {
    const state = core.newState(1);
    assert.equal(core.allocatePower(state, pair), true);
    assert.equal(state.power, 88);
    assert.equal(core.allocatePower(state, pair), true);
    assert.equal(state.power, 88);
    for (const id of ['clinic', 'relay', 'dock']) assert.equal(state.flags[id + 'Powered'], pair.includes(id));
  }
  for (const invalid of [[], ['clinic'], ['clinic', 'clinic'], ['clinic', 'relay', 'dock'], null]) assert.equal(core.allocatePower(core.newState(1), invalid), false);
});

test('act-one rescue reflects the actual chosen route', () => {
  const state = core.newState(1);
  state.trust = { mara: 2, iman: 1, raka: 2 };
  core.allocatePower(state, ['relay', 'dock']);
  state.flags.escortCourier = true;
  assert.equal(core.outcomeActOne(state).raka, false);
  state.flags.escortCourier = false; state.flags.holdPosition = true;
  assert.equal(core.outcomeActOne(state).raka, true);
  state.flags.holdPosition = false;
  core.allocatePower(state, ['clinic', 'relay']);
  state.flags.escortCourier = true; state.flags.verified = true; state.flags.sharedEvidence = true;
  assert.equal(core.outcomeActOne(state).ending, 'openFrequency');
});

test('six final outcomes depend on verification, rescue, publication and witness protection', () => {
  const cases = [
    ['fullSignal', { publishedFull: true, archiveVerified: true, massEvacuation: true }],
    ['shelteredTruth', { protectedNames: true, archiveVerified: true, bridgeHeld: true }],
    ['ashes', { destroyedArchive: true, manualRoute: true }],
    ['exposedWitness', { publishedFull: true, archiveVerified: true, manualRoute: true, witnessSafe: true }],
    ['fracturedTruth', { publishedFull: true, massEvacuation: true }],
    ['lostSignal', { publishedFull: true, archiveVerified: true }]
  ];
  for (const [ending, flags] of cases) {
    const state = core.newState(1); Object.assign(state.flags, flags);
    assert.equal(core.finalOutcome(state).ending, ending);
  }
});

test('all English and Indonesian story fields and destinations are complete', () => {
  localized(data.title, 'title');
  for (const [id, item] of Object.entries(data.characters)) localized(item.role, 'character ' + id);
  for (const [id, item] of Object.entries(data.evidence)) {
    localized(item.title, 'evidence ' + id + ' title'); localized(item.body, 'evidence ' + id + ' body'); localized(item.excerpt, 'evidence ' + id + ' excerpt');
  }
  const types = new Set(['dialogue', 'hub', 'random', 'inspect', 'tune', 'evidence', 'power', 'ending']);
  for (const [id, scene] of Object.entries(data.scenes)) {
    assert.ok(types.has(scene.type), 'Unsupported scene type ' + id);
    localized(scene.location, 'scene ' + id + ' location'); localized(scene.text, 'scene ' + id);
    const batches = [scene.choices || [], ...(scene.encounters || []).map(item => item.choices || [])];
    for (const encounter of scene.encounters || []) localized(encounter.text, 'encounter ' + id + '/' + encounter.id);
    for (const variant of scene.textVariants || []) localized(variant.text, 'variant ' + id);
    for (const choices of batches) {
      const ids = new Set();
      for (const choice of choices) {
        localized(choice.label, 'choice ' + id + '/' + choice.id);
        assert.ok(data.scenes[choice.next], 'Broken destination ' + id + '/' + choice.id + ' -> ' + choice.next);
        assert.ok(!ids.has(choice.id), 'Duplicate choice ' + id + '/' + choice.id); ids.add(choice.id);
        for (const relation of Object.keys(choice.effects?.trust || {})) assert.ok(data.characters[relation]);
        for (const evidence of choice.effects?.evidence || []) assert.ok(data.evidence[evidence], 'Missing awarded evidence ' + evidence);
      }
    }
    for (const hotspot of scene.hotspots || []) {
      localized(hotspot.title, 'hotspot ' + id); localized(hotspot.description, 'hotspot description ' + id);
      if (hotspot.evidence) assert.ok(data.evidence[hotspot.evidence]);
    }
    for (const evidence of scene.onEnterEvidence || []) assert.ok(data.evidence[evidence]);
    if (scene.tune) assert.ok(data.evidence[scene.tune.clue]);
    const compare = scene.compare || scene.evidence;
    if (compare) for (const evidence of [...compare.pair, compare.reward]) assert.ok(data.evidence[evidence]);
  }
  for (const [id, ending] of Object.entries(data.endings || {})) {
    localized(ending.title, 'ending title ' + id); localized(ending.body, 'ending body ' + id);
  }
  localized(data.tagline, 'tagline');
  for (const chapter of data.chapters) localized(chapter.title, 'chapter ' + chapter.id);
  for (const quest of data.quests) {
    localized(quest.title, 'quest title ' + quest.id);
    localized(quest.description, 'quest description ' + quest.id);
    assert.ok(data.scenes[quest.unlockScene], 'Quest unlock scene is missing: ' + quest.id);
  }
  for (const [index, epilogue] of data.epilogues.entries()) localized(epilogue.text, 'epilogue ' + index);
});

test('coherent narrative passages remain aligned when language changes', t => {
  let longest = 0;
  for (const [id, scene] of Object.entries(data.scenes)) {
    for (const narrative of [scene.text, ...(scene.textVariants || []).map(item => item.text), ...(scene.encounters || []).map(item => item.text)]) {
      const en = narrative.en.split('\n\n').filter(Boolean);
      const idText = narrative.id.split('\n\n').filter(Boolean);
      assert.equal(en.length, idText.length, id + ' changes page count across languages');
      for (const beat of [...en, ...idText]) {
        longest = Math.max(longest, beat.length);
        assert.ok(beat.trim(), id + ' contains an empty passage');
      }
    }
  }
  for (const narrative of [...Object.values(data.endings).map(ending => ending.body), ...data.epilogues.map(item => item.text)]) {
    const en = narrative.en.split('\n\n').filter(Boolean);
    const idText = narrative.id.split('\n\n').filter(Boolean);
    assert.equal(en.length, idText.length, 'Ending or epilogue changes page count across languages');
    for (const beat of [...en, ...idText]) { assert.ok(beat.trim(), 'Ending or epilogue contains an empty passage'); longest = Math.max(longest, beat.length); }
  }
  t.diagnostic('Longest narrative page: ' + longest + ' characters');
});

test('UI dictionary includes both languages and static local files exist', () => {
  const source = read('game.js');
  const declaration = source.match(/  const copy = (\{[\s\S]*?\n  \});/);
  assert.ok(declaration, 'UI dictionary not found');
  const dictionary = plain(vm.runInNewContext('(' + declaration[1] + ')'));
  for (const extension of source.matchAll(/Object\.assign\(copy, (\{[\s\S]*?\n  \})\);/g)) {
    Object.assign(dictionary, plain(vm.runInNewContext('(' + extension[1] + ')')));
  }
  for (const [id, value] of Object.entries(dictionary)) assert.ok(value.length === 2 && value.every(text => typeof text === 'string' && text.trim()), 'Incomplete UI translation ' + id);
  const html = read('index.html');
  for (const match of html.matchAll(/data-i18n="([^"]+)"/g)) assert.ok(dictionary[match[1]], 'Unknown HTML translation ' + match[1]);
  for (const match of source.matchAll(/\bt\('([^']+)'\)/g)) assert.ok(dictionary[match[1]], 'Unknown UI translation ' + match[1]);
  const refs = [...html.matchAll(/(?:src|href)="([^"]+)"/g)].map(match => match[1]);
  for (const match of read('styles.css').matchAll(/url\(\s*['"]?([^)'"\s]+)['"]?\s*\)/g)) refs.push(match[1]);
  for (const ref of refs) {
    if (ref.startsWith('#') || /^(?:https?:|data:)/.test(ref)) continue;
    assert.ok(fs.existsSync(path.resolve(root, ref.split(/[?#]/)[0])), 'Missing local resource ' + ref);
  }
});

test('PWA declares real icons and a local offline shell', () => {
  const manifest = JSON.parse(read('manifest.webmanifest'));
  assert.equal(manifest.display, 'standalone');
  assert.equal(manifest.lang, 'en');
  assert.ok(manifest.icons.some(icon => icon.purpose === 'maskable'));
  for (const icon of manifest.icons) {
    const bytes = fs.readFileSync(path.join(root, icon.src));
    const actualSize = bytes.readUInt32BE(16) + 'x' + bytes.readUInt32BE(20);
    assert.equal(icon.sizes, actualSize, 'Manifest icon size must match its actual PNG');
  }
  const sw = read('sw.js');
  assert.ok(sw.includes("request.destination === 'image'"));
  assert.ok(sw.includes("url.origin !== self.location.origin"));
  for (const name of ['index.html', 'styles.css', 'core.js', 'story.js', 'game.js']) assert.ok(sw.includes(name), 'Offline shell omits ' + name);
});

test('expanded story has three main quests, five side quests and all six endings', () => {
  assert.ok(Object.keys(data.scenes).length >= 60, 'Expanded novel needs at least 60 scenes');
  const quests = Object.values(data.quests);
  assert.equal(quests.filter(quest => quest.kind === 'main').length, 3);
  assert.equal(quests.filter(quest => quest.kind === 'side').length, 5);
  assert.deepEqual(Object.keys(data.endings).sort(), ['ashes', 'exposedWitness', 'fracturedTruth', 'fullSignal', 'lostSignal', 'shelteredTruth']);
  const randomScenes = Object.values(data.scenes).filter(scene => scene.encounters?.length);
  assert.ok(randomScenes.length >= 6);
  for (const scene of randomScenes) assert.equal(scene.encounters.length, 3);
});

test('seeded complete routes reach the finale and preserve every activity on reload', t => {
  const outcomes = new Set();
  const visited = new Set();
  for (let seed = 1; seed <= 45; seed++) {
    const state = run(seed, {
      verify: seed % 4 !== 0, circuits: circuits[seed % 3], optional: seed % 5 !== 0,
      final: ['publishedFull', 'protectedNames', 'destroyedArchive'][seed % 3]
    });
    outcomes.add(core.finalOutcome(state).ending);
    for (const scene of [...state.visited, state.scene]) visited.add(scene);
    assert.equal(data.scenes[state.scene].type, 'ending');
    assert.ok(state.history.length > 20, 'The expanded story must reach later acts');
  }
  t.diagnostic('Observed final outcomes: ' + [...outcomes].join(', '));
  t.diagnostic('Visited scenes across replay routes: ' + visited.size);
  assert.ok(outcomes.size >= 4, 'Real choices must reach diverse endings');
  assert.ok(visited.size >= 50, 'Routes should exercise main and optional scenes');
});

test('all six endings are reachable through real quests, activities and publication choices', t => {
  const cases = [
    ['fullSignal', { final: 'publishedFull', optional: false, choices: { 'storm-hub': 'help-bell', 'channel-hub': 'follow-stair', 'flood-choice': 'bell-crossing' } }],
    ['exposedWitness', { final: 'publishedFull', optional: true, choices: { 'flood-choice': 'manual-crossing' } }],
    ['shelteredTruth', { final: 'protectedNames', choices: { 'flood-choice': 'manual-crossing' } }],
    ['fracturedTruth', { final: 'protectedNames', verify: false, choices: { 'flood-choice': 'manual-crossing' } }],
    ['lostSignal', { final: 'publishedFull', choices: { 'flood-choice': 'retreat-crossing' } }],
    ['ashes', { final: 'destroyedArchive', choices: { 'flood-choice': 'manual-crossing' } }]
  ];
  for (const [ending, policy] of cases) {
    const state = run(42, policy);
    assert.equal(core.finalOutcome(state).ending, ending, 'Real route did not produce ' + ending);
    assert.equal(state.quests['last-transmission'], 'complete');
    assert.equal(state.scene, 'final-ending');
    t.diagnostic(ending + ': ' + state.history.length + ' decisions, ' + Object.keys(state.encounters).length + ' random encounters');
    for (const quest of data.quests.filter(item => item.kind === 'side')) {
      if (state.quests[quest.id] !== 'complete') continue;
      for (const scene of Object.values(data.scenes)) {
        for (const choice of scene.choices) {
          if (choice.requiresQuest?.[quest.id] === 'unstarted') assert.equal(core.choiceAvailable(state, choice), false, 'Completed quest can be replayed for rewards: ' + quest.id);
        }
      }
    }
  }
});

test('every randomized response produces a persistent distinct consequence and an epilogue', t => {
  const signatures = new Set();
  let responses = 0;
  for (const [id, scene] of Object.entries(data.scenes)) {
    for (const encounter of scene.encounters || []) {
      for (const choice of encounter.choices) {
        const state = core.newState(15);
        state.scene = id;
        state.encounters[id] = encounter.id;
        assert.equal(core.choiceAvailable(state, choice), true);
        assert.equal(core.applyChoice(state, choice), true);
        roundTrip(state, data);
        assert.ok(data.epilogues.some(epilogue => core.meets(state, epilogue.requires)), 'Random response has no later consequence: ' + choice.id);
        const signature = JSON.stringify(Object.entries(state.flags).sort(([a], [b]) => a.localeCompare(b)));
        assert.ok(!signatures.has(signature), 'Random responses produce identical flags: ' + choice.id);
        signatures.add(signature);
        responses++;
      }
    }
  }
  assert.equal(responses, 36);
  t.diagnostic(responses + ' distinct persistent random responses with matching epilogues');
});

test('each novel scene uses a distinct complete local illustration', t => {
  const keys = new Set();
  const hashes = new Map();
  let totalBytes = 0;
  for (const [id, scene] of Object.entries(data.scenes)) {
    assert.equal(typeof scene.artKey, 'string', 'Scene needs its own art key: ' + id);
    assert.ok(!keys.has(scene.artKey), 'Scene reuses another illustration key: ' + id);
    keys.add(scene.artKey);
    const file = path.join(root, 'assets', 'scene-' + scene.artKey + '.png');
    assert.ok(fs.existsSync(file), 'Missing scene illustration: ' + id);
    const bytes = fs.readFileSync(file);
    assert.equal(bytes.subarray(0, 8).toString('hex'), '89504e470d0a1a0a', 'Invalid PNG: ' + id);
    assert.equal(bytes.subarray(-12).toString('hex'), '0000000049454e44ae426082', 'Incomplete PNG: ' + id);
    assert.ok(bytes.readUInt32BE(16) >= 512 && bytes.readUInt32BE(20) >= 512, 'Illustration is too small: ' + id);
    const digest = crypto.createHash('sha256').update(bytes).digest('hex');
    assert.ok(!hashes.has(digest), 'Scene ' + id + ' reuses art from ' + hashes.get(digest));
    hashes.set(digest, id);
    totalBytes += bytes.length;
  }
  const hubDeclaration = read('game.js').match(/const hubQuestStages=(\{[\s\S]*?\n  \});/);
  assert.ok(hubDeclaration, 'Hub art stages are not declared');
  const hubStages = plain(vm.runInNewContext('(' + hubDeclaration[1] + ')'));
  const overrideDeclaration = read('game.js').match(/const artOverrides=(\{[^\n]*\});/);
  const overrides = overrideDeclaration ? plain(vm.runInNewContext('(' + overrideDeclaration[1] + ')')) : {};
  const variants = [];
  for (const [id, stages] of Object.entries(hubStages)) for (let stage = 1; stage <= stages.length; stage++) variants.push('scene-' + id + '-' + stage);
  for (const ending of Object.keys(data.endings)) variants.push('scene-final-ending-' + ending);
  for (const scene of Object.values(data.scenes)) for (const encounter of scene.encounters || []) variants.push('scene-' + encounter.id);
  for (let page = 1; page <= 3; page++) variants.push('scene-onboarding-' + page);
  for (const variant of variants) {
    const key = variant.replace(/^scene-/, '');
    const selected = 'scene-' + (overrides[key] || key);
    const file = path.join(root, 'assets', selected + '.png');
    assert.ok(fs.existsSync(file), 'Missing hub, ending or introduction illustration: ' + variant);
    const bytes = fs.readFileSync(file);
    assert.equal(bytes.subarray(0, 8).toString('hex'), '89504e470d0a1a0a', 'Invalid variant PNG: ' + variant);
    assert.equal(bytes.subarray(-12).toString('hex'), '0000000049454e44ae426082', 'Incomplete variant PNG: ' + variant);
    assert.ok(bytes.readUInt32BE(16) >= 512 && bytes.readUInt32BE(20) >= 512, 'Art variant is too small: ' + variant);
    const digest = crypto.createHash('sha256').update(bytes).digest('hex');
    assert.ok(!hashes.has(digest), 'Art variant ' + variant + ' reuses another illustration');
    hashes.set(digest, variant);
    totalBytes += bytes.length;
  }
  const manifest = JSON.parse(read('assets/art-manifest.json'));
  assert.equal(manifest.expectedDistinctAssets, 110);
  assert.equal(manifest.assets.length, 110);
  const selectedPaths = new Set();
  const selectedHashes = new Set();
  const selectedDimensions = new Map();
  let selectedBytes = 0;
  for (const asset of manifest.assets) {
    assert.ok(!selectedPaths.has(asset.path), 'Art manifest repeats a path: ' + asset.path);
    selectedPaths.add(asset.path);
    assert.ok(fs.existsSync(path.join(root, asset.path)), 'Art manifest links a missing file: ' + asset.path);
    assert.ok(typeof asset.prompt === 'string' && asset.prompt.trim(), 'Art provenance is missing: ' + asset.path);
    const bytes = fs.readFileSync(path.join(root, asset.path));
    assert.equal(bytes.subarray(0, 8).toString('hex'), '89504e470d0a1a0a', 'Invalid selected PNG: ' + asset.path);
    assert.equal(bytes.subarray(-12).toString('hex'), '0000000049454e44ae426082', 'Incomplete selected PNG: ' + asset.path);
    const width = bytes.readUInt32BE(16); const height = bytes.readUInt32BE(20);
    assert.ok(width >= 512 && height >= 512, 'Selected art is too small: ' + asset.path);
    const dimensions = width + 'x' + height;
    selectedDimensions.set(dimensions, (selectedDimensions.get(dimensions) || 0) + 1);
    const digest = crypto.createHash('sha256').update(bytes).digest('hex');
    assert.ok(!selectedHashes.has(digest), 'Art manifest selects an identical illustration twice: ' + asset.path);
    selectedHashes.add(digest);
    selectedBytes += bytes.length;
  }
  for (const replacement of Object.values(overrides)) assert.ok(selectedPaths.has('assets/scene-' + replacement + '.png'), 'Art manifest omits a selected repair: ' + replacement);
  t.diagnostic(hashes.size + ' unique novel and introduction PNGs; ' + Math.round(totalBytes / 1048576) + ' MiB of original art, loaded as each scene appears');
  t.diagnostic(selectedHashes.size + ' distinct selected assets; ' + Math.round(selectedBytes / 1048576) + ' MiB; dimensions: ' + JSON.stringify(Object.fromEntries(selectedDimensions)));
});
