'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

test('versioned shell works immediately offline, code revalidates online, and viewed art remains available', async () => {
  const listeners = {};
  const origin = 'http://localhost:8765';
  const responses = new Map();
  const oldCaches = new Set(['blackout-frequency-v1', 'another-app']);
  let online = true;
  let fetchCount = 0;
  const fetchCalls = [];
  const normalize = input => new URL(typeof input === 'string' ? input : input.url, origin + '/').href;
  const response = body => ({ ok: true, body, clone() { return response(body); } });
  const cache = {
    async addAll(paths) { for (const value of paths) responses.set(normalize(value), response('cached:' + value)); },
    async add(value) { responses.set(normalize(value), response('cached:' + value)); },
    async match(value) { return responses.get(normalize(value)); },
    async put(value, valueResponse) { responses.set(normalize(value), valueResponse); }
  };
  const context = vm.createContext({
    URL, Response,
    self: { location: { origin }, clients: { async claim() {} }, async skipWaiting() {}, addEventListener(name, callback) { listeners[name] = callback; } },
    caches: { async open() { return cache; }, async keys() { return [...oldCaches]; }, async delete(name) { oldCaches.delete(name); return true; } },
    async fetch(request, options) { fetchCount++; fetchCalls.push({ url: normalize(request), cache: options?.cache }); if (!online) throw new Error('offline'); return response('network:' + normalize(request)); }
  });
  vm.runInContext(fs.readFileSync(path.resolve(__dirname, '../sw.js'), 'utf8'), context);
  async function lifecycle(name) { let pending; listeners[name]({ waitUntil(value) { pending = value; } }); await pending; }
  async function fetchRequest(url, destination, mode = 'same-origin') {
    let pending;
    listeners.fetch({ request: { url, method: 'GET', destination, mode }, respondWith(value) { pending = value; } });
    return pending;
  }
  await lifecycle('install');
  const index = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
  const versionedResources = [
    ['styles.css', 'style'], ['core.js', 'script'], ['story.js', 'script'], ['voice-manifest.js','script'], ['voice-player.js','script'], ['game.js', 'script']
  ];
  online = false;
  for (const [file, destination] of versionedResources) {
    const resource = file + '?v=voices-1';
    assert.ok(index.includes(resource), 'The installed page must request the tested revision of ' + file);
    const saved = await fetchRequest(origin + '/' + resource, destination);
    assert.equal(saved.body, 'cached:./' + resource, 'The versioned ' + file + ' must be precached, before any online page load');
  }
  online = true;
  await lifecycle('activate');
  assert.ok(!oldCaches.has('blackout-frequency-v1'));
  assert.ok(oldCaches.has('another-app'), 'Activation must preserve unrelated applications');
  const art = origin + '/assets/scene-arrival.png';
  const first = await fetchRequest(art, 'image');
  assert.ok(first.body.startsWith('network:'));
  const fetched = fetchCount;
  await fetchRequest(art, 'image');
  assert.equal(fetchCount, fetched, 'Viewed art should not be downloaded again');
  const storyUrl = origin + '/story.js?v=voices-1';
  const code = await fetchRequest(storyUrl, 'script');
  assert.ok(code.body.startsWith('network:'), 'Online story revisions must replace stale cached content');
  assert.equal(fetchCalls.at(-1).url, storyUrl);
  assert.equal(fetchCalls.at(-1).cache, 'no-cache', 'Online code must revalidate rather than reuse a stale HTTP response');
  online = false;
  assert.equal((await fetchRequest(art, 'image')).body, first.body);
  assert.equal((await fetchRequest(storyUrl, 'script')).body, code.body);
  assert.equal((await fetchRequest(origin + '/?source=app', 'document', 'navigate')).body, 'cached:./index.html');
  assert.equal(await fetchRequest('https://unrelated.example/file', 'script'), undefined, 'The worker must never intercept other origins');
  online = true;
  cache.put = async () => { throw new Error('QuotaExceededError'); };
  const uncachedArt = await fetchRequest(origin + '/assets/scene-new.png', 'image');
  assert.ok(uncachedArt.body.startsWith('network:'), 'A full cache must not break newly loaded art');
  const freshCode = await fetchRequest(origin + '/game.js', 'script');
  assert.ok(freshCode.body.startsWith('network:'), 'A full cache must not replace fresh code with a stale fallback');
  assert.equal(fetchCalls.at(-1).cache, 'no-cache', 'Code must still revalidate when the offline cache is full');
});

test('voice audio caches a complete file and serves seek ranges offline without redownloading',async()=>{
  const listeners={},origin='http://localhost:8765',saved=new Map();let online=true,downloads=0;
  const cache={async match(key){return saved.get(key)?.clone();},async put(key,response){saved.set(key,response.clone());}};
  const context=vm.createContext({URL,Response,self:{location:{origin},addEventListener(name,fn){listeners[name]=fn;}},caches:{async open(){return cache;}},async fetch(url){downloads++;assert.equal(typeof url,'string','Range headers must not be forwarded when downloading the full file');if(!online)throw new Error('offline');return new Response('0123456789',{headers:{'Content-Type':'audio/mpeg'}});}});
  vm.runInContext(fs.readFileSync(path.resolve(__dirname,'../sw.js'),'utf8'),context);
  async function request(range,file='test.mp3'){let pending;listeners.fetch({request:{url:origin+'/assets/voice/en/'+file,method:'GET',headers:new Headers(range?{Range:range}:{})},respondWith(p){pending=p;}});return pending;}
  let response=await request('bytes=2-5');assert.equal(response.status,206);assert.equal(response.headers.get('Content-Range'),'bytes 2-5/10');assert.equal(await response.text(),'2345');assert.equal(downloads,1);
  online=false;response=await request('bytes=-3');assert.equal(await response.text(),'789');assert.equal(downloads,1);
  response=await request('bytes=6-');assert.equal(await response.text(),'6789');
  response=await request();assert.equal(response.status,200);assert.equal(await response.text(),'0123456789');
  response=await request('bytes=30-40');assert.equal(response.status,416);
  assert.equal((await request(null,'unvisited.mp3')).type,'error');
  online=true;cache.put=async()=>{throw new Error('quota');};assert.equal(await (await request(null,'new.mp3')).text(),'0123456789');
});
