(function (scope) {
  'use strict';
  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
  const statuses = new Set(['active', 'complete', 'missed']);
  const object = value => value && typeof value === 'object' && !Array.isArray(value);
  function languageFor(preference, deviceLanguage) {
    if (preference === 'en' || preference === 'id') return preference;
    return /^id(?:-|$)/i.test(deviceLanguage || '') ? 'id' : 'en';
  }
  function hash(value) {
    let result = 2166136261;
    for (const character of String(value)) result = Math.imul(result ^ character.charCodeAt(0), 16777619);
    result ^= result << 13; result ^= result >>> 17; result ^= result << 5;
    return result >>> 0;
  }
  function makeSeed(seed) {
    if (typeof seed === 'number' && Number.isFinite(seed)) return seed >>> 0;
    if (typeof seed === 'string') return hash(seed);
    const crypto = scope.crypto || globalThis.crypto;
    if (crypto?.getRandomValues) return crypto.getRandomValues(new Uint32Array(1))[0];
    return hash(`${Date.now()}:${Math.random()}`);
  }
  function newState(seed) {
    const value = makeSeed(seed);
    return { version: 2, seed: value, runId: `run-${value.toString(16).padStart(8, '0')}`, scene: 'arrival', trust: { mara: 0, iman: 0, raka: 0 }, flags: { verified: false }, power: 100, evidence: [], visited: [], history: [], activities: {}, quests: { 'live-lines': 'active' }, encounters: {} };
  }
  function randomFor(state, key) { return hash(`${state.seed}:${key}`) / 4294967296; }
  function encounterFor(state, sceneId, scene) {
    const encounters = Array.isArray(scene?.encounters) ? scene.encounters : [];
    if (!encounters.length) return null;
    state.encounters ||= {};
    const existing = encounters.find(item => item.id === state.encounters[sceneId]);
    if (existing) return existing;
    const selected = encounters[Math.floor(randomFor(state, `encounter:${sceneId}`) * encounters.length)];
    state.encounters[sceneId] = selected.id;
    return selected;
  }
  function meets(state, required) {
    return Object.entries(required || {}).every(([key, value]) => typeof value === 'boolean' ? Boolean(state.flags[key]) === value : state.flags[key] === value);
  }
  function questMeets(state, required) {
    if (typeof required === 'string') return state.quests?.[required] === 'complete';
    return Object.entries(required || {}).every(([key, value]) => Array.isArray(value) ? value.includes(state.quests?.[key] || 'unstarted') : (state.quests?.[key] || 'unstarted') === value);
  }
  function choiceAvailable(state, choice) {
    return Boolean(choice && meets(state, choice.requires) && questMeets(state, choice.requiresQuest));
  }
  function narrativeFor(state, sceneId, scene) {
    const encounter = encounterFor(state, sceneId, scene);
    const variant = (scene.textVariants || []).find(item => meets(state, item.requires) && questMeets(state, item.requiresQuest));
    return encounter?.text || variant?.text || scene.text;
  }
  function restoreState(saved, data) {
    if (!object(saved) || ![1, 2].includes(saved.version) || !data?.scenes?.[saved.scene]) return null;
    // A legacy run gets a stable seed from its recorded choices, so migration never rerolls it.
    const seed = saved.version === 2 && Number.isInteger(saved.seed) ? saved.seed : hash(JSON.stringify({ scene: saved.scene, history: saved.history || [] }));
    const state = newState(seed);
    state.scene = saved.scene;
    if (typeof saved.runId === 'string' && /^run-[a-z\d-]{1,64}$/i.test(saved.runId)) state.runId = saved.runId;
    for (const key of Object.keys(state.trust)) state.trust[key] = clamp(Number(saved.trust?.[key]) || 0, -3, 3);
    for (const [key, value] of Object.entries(object(saved.flags) ? saved.flags : {})) if (typeof value === 'boolean') state.flags[key] = value;
    state.power = Number.isFinite(saved.power) ? clamp(saved.power, 0, 100) : 100;
    state.evidence = [...new Set((Array.isArray(saved.evidence) ? saved.evidence : []).filter(id => data.evidence?.[id]))];
    state.visited = [...new Set((Array.isArray(saved.visited) ? saved.visited : []).filter(id => data.scenes[id]))];
    state.history = (Array.isArray(saved.history) ? saved.history : []).filter(entry => object(entry) && typeof entry.scene === 'string' && typeof entry.choice === 'string').slice(-200).map(entry => ({ scene: entry.scene, choice: entry.choice }));
    for (const [id, status] of Object.entries(object(saved.quests) ? saved.quests : {})) if (statuses.has(status)) state.quests[id] = status;
    const hasMainQuest = Array.isArray(data.quests) ? data.quests.some(quest => quest.id === 'live-lines') : Boolean(data.quests?.['live-lines']);
    if (saved.version === 1 && hasMainQuest) {
      const chapter = Number(data.scenes[state.scene].chapter) || 1;
      if (state.scene === 'ending' || chapter >= 2) {
        state.quests['live-lines'] = 'complete';
        state.quests['borrowed-voice'] = 'active';
      }
      if (chapter >= 3) {
        state.quests['borrowed-voice'] = 'complete';
        state.quests['last-transmission'] = 'active';
      }
    }
    for (const [id, selected] of Object.entries(object(saved.encounters) ? saved.encounters : {})) if (data.scenes[id]?.encounters?.some(item => item.id === selected)) state.encounters[id] = selected;
    for (const [id, activity] of Object.entries(object(saved.activities) ? saved.activities : {})) {
      const scene = data.scenes[id];
      if (!scene || !object(activity)) continue;
      const restored = {};
      if (scene.type === 'inspect') restored.visited = [...new Set((Array.isArray(activity.visited) ? activity.visited : []).filter(value => scene.hotspots?.some(hotspot => hotspot.id === value)))];
      if (scene.type === 'tune') restored.frequency = Number.isFinite(activity.frequency) ? clamp(activity.frequency, 88, 108) : 91.2;
      if (scene.type === 'evidence') restored.selected = [...new Set((Array.isArray(activity.selected) ? activity.selected : []).filter(value => state.evidence.includes(value)))].slice(0, 2);
      if (scene.type === 'power') restored.circuits = [...new Set((Array.isArray(activity.circuits) ? activity.circuits : []).filter(value => ['clinic', 'relay', 'dock'].includes(value)))].slice(0, 2);
      if ('beatIndex' in activity) {
        const narrative = narrativeFor(state, id, scene);
        const count = Math.min(...['en', 'id'].map(language => (narrative?.[language] || narrative?.en || '').split('\n\n').filter(Boolean).length));
        const index = Number.isFinite(activity.beatIndex) ? Math.floor(activity.beatIndex) : 0;
        restored.beatIndex = clamp(index, 0, Math.max(0, count - 1));
      }
      for (const key of ['choicePage', 'evidencePage', 'endingPage']) {
        if (key in activity) restored[key] = clamp(Number.isFinite(activity[key]) ? Math.floor(activity[key]) : 0, 0, 100);
      }
      if (['dialogue','hub','random'].includes(scene.type) && typeof activity.readingComplete === 'boolean') restored.readingComplete = activity.readingComplete;
      state.activities[id] = restored;
    }
    return state;
  }
  function applyChoice(state, choice) {
    if (!choiceAvailable(state, choice)) return false;
    const effects = choice.effects || {};
    for (const [key, value] of Object.entries(effects.trust || {})) if (key in state.trust && Number.isFinite(value)) state.trust[key] = clamp(state.trust[key] + value, -3, 3);
    for (const [key, value] of Object.entries(effects.flags || {})) if (typeof value === 'boolean') state.flags[key] = value;
    for (const [key, value] of Object.entries(effects.quests || {})) {
      if (statuses.has(value) && (state.quests[key] !== 'complete' || value === 'complete')) state.quests[key] = value;
    }
    for (const id of effects.evidence || []) addEvidence(state, id);
    state.power = clamp(state.power + (Number.isFinite(effects.power) ? effects.power : 0), 0, 100);
    state.history.push({ scene: state.scene, choice: choice.id });
    if (state.history.length > 200) state.history.shift();
    state.visited = [...new Set([...state.visited, state.scene])];
    state.scene = choice.next;
    return true;
  }
  function addEvidence(state, id) {
    if (typeof id !== 'string' || !id || state.evidence.includes(id)) return false;
    state.evidence.push(id);
    return true;
  }
  function signalStrength(frequency, target) {
    if (!Number.isFinite(frequency) || !Number.isFinite(target)) return 0;
    return clamp(1 - Math.abs(frequency - target) / 3.5, 0, 1);
  }
  function lockSignal(state, frequency, target, evidence, flag = 'signalLocked') {
    if (!Number.isFinite(frequency) || !Number.isFinite(target) || Math.abs(frequency - target) > 0.25001) return false;
    if (!state.flags[flag]) state.power = clamp(state.power - 8, 0, 100);
    state.flags[flag] = true;
    addEvidence(state, evidence);
    return true;
  }
  function compareEvidence(state, selected, pair, reward, flag = 'verified') {
    if (!Array.isArray(selected) || !Array.isArray(pair) || pair.length !== 2 || new Set(pair).size !== 2 || selected.length !== 2 || !pair.every(id => selected.includes(id)) || !selected.every(id => state.evidence.includes(id))) return false;
    state.flags[flag] = true;
    addEvidence(state, reward);
    return true;
  }
  function allocatePower(state, circuits) {
    const options = ['clinic', 'relay', 'dock'];
    const selected = [...new Set(Array.isArray(circuits) ? circuits : [])].filter(id => options.includes(id));
    if (selected.length !== 2) return false;
    if (!state.flags.gridCommitted) state.power = clamp(state.power - 12, 0, 100);
    for (const id of options) state.flags[`${id}Powered`] = selected.includes(id);
    state.flags.gridCommitted = true;
    return true;
  }
  function outcomeActOne(state) {
    const mara = Boolean(state.flags.clinicPowered && state.trust.mara >= 0);
    const raka = Boolean((state.flags.holdPosition && state.flags.dockPowered && state.trust.raka >= 0) || (state.flags.escortCourier && state.flags.clinicPowered && state.trust.mara >= 0 && state.trust.raka >= 1));
    const truth = Boolean(state.flags.verified && state.flags.relayPowered && state.flags.sharedEvidence);
    const ending = mara && raka ? (truth ? 'openFrequency' : 'quietDawn') : (mara || raka ? 'oneVoice' : 'deadAir');
    return { mara, raka, truth, ending };
  }
  function outcome(state) {
    const actOne = outcomeActOne(state);
    if (!state.flags.publishedFull && !state.flags.protectedNames && !state.flags.destroyedArchive) return actOne;
    const completedQuests = Object.entries(state.quests).filter(([id, status]) => !id.startsWith('enc-') && status === 'complete').map(([id]) => id);
    const rescued = Boolean(state.flags.massEvacuation || state.flags.bridgeHeld || state.flags.manualRoute);
    const verified = Boolean(state.flags.archiveVerified);
    const witnessSafe = Boolean(state.flags.witnessSafe);
    let ending;
    if (state.flags.destroyedArchive) ending = 'ashes';
    else if (!rescued) ending = 'lostSignal';
    else if (!verified) ending = 'fracturedTruth';
    else if (state.flags.protectedNames) ending = 'shelteredTruth';
    else if (witnessSafe) ending = 'exposedWitness';
    else ending = state.flags.massEvacuation ? 'fullSignal' : 'fracturedTruth';
    return { ...actOne, truth: verified && Boolean(state.flags.publishedFull || state.flags.protectedNames), ending, rescued, witnessSafe, archiveVerified: verified, completedQuests };
  }
  scope.BLACKOUT = { languageFor, newState, restoreState, meets, questMeets, choiceAvailable, applyChoice, addEvidence, signalStrength, lockSignal, compareEvidence, allocatePower, outcome, finalOutcome: outcome, outcomeActOne, randomFor, encounterFor, narrativeFor };
})(typeof window === 'undefined' ? globalThis : window);
