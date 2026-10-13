'use strict';
const CACHE = 'blackout-frequency-v5-admob';
const SHELL = ['./', './index.html', './styles.css', './core.js', './story.js', './voice-manifest.js', './voice-player.js', './game.js', './styles.css?v=voices-1', './core.js?v=voices-1', './story.js?v=voices-1', './voice-manifest.js?v=voices-1', './voice-player.js?v=voices-1', './game.js?v=voices-1', './manifest.webmanifest'];
SHELL.push('./monetization.js','./monetization.js?v=ads-1');
const OPTIONAL = ['./assets/app-icon.png', './assets/app-icon-maskable.png', './assets/art-manifest.json'];

async function audioRange(response, range) {
  if(!range)return response;
  const bytes=await response.arrayBuffer(),length=bytes.byteLength;
  const match=/^bytes=(\d*)-(\d*)$/.exec(range);
  let start=0,end=length-1;
  if(match && (match[1] || match[2])){
    if(match[1]){start=Number(match[1]);if(match[2])end=Math.min(end,Number(match[2]));}
    else start=Math.max(0,length-Number(match[2]));
  }else start=-1;
  if(start<0 || start>=length || end<start)return new Response(null,{status:416,headers:{'Content-Range':`bytes */${length}`}});
  return new Response(bytes.slice(start,end+1),{status:206,headers:{'Content-Type':response.headers.get('Content-Type')||'audio/mpeg','Content-Range':`bytes ${start}-${end}/${length}`,'Content-Length':String(end-start+1),'Accept-Ranges':'bytes'}});
}

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await cache.addAll(SHELL);
    await Promise.allSettled(OPTIONAL.map(path => cache.add(path)));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.filter(name => name.startsWith('blackout-frequency-') && name !== CACHE).map(name => caches.delete(name)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== self.location.origin) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    // Download a page’s complete audio once. Seek requests also work from the offline cache.
    if(url.pathname.includes('/assets/voice/')){
      const saved=await cache.match(url.href);
      if(saved)return audioRange(saved,request.headers?.get('Range'));
      try{
        const response=await fetch(url.href);
        if(response.ok && response.status===200){try{await cache.put(url.href,response.clone());}catch(_){/* Streaming remains available if storage is full. */}}
        return response.ok?audioRange(response,request.headers?.get('Range')):response;
      }catch(_){return Response.error();}
    }
    // Each illustration is cached when first viewed; the novel remains usable offline without a large initial download.
    if (request.destination === 'image') {
      const saved = await cache.match(request);
      if (saved) return saved;
      const response = await fetch(request);
      if (response.ok) {
        try { await cache.put(request, response.clone()); } catch (_) { /* A full offline cache must never hide a successfully loaded illustration. */ }
      }
      return response;
    }
    try {
      const response = await fetch(request, { cache: 'no-cache' });
      if (response.ok) {
        try { await cache.put(request, response.clone()); } catch (_) { /* Online content remains usable when this device cannot cache it. */ }
      }
      return response;
    } catch (error) {
      const saved = await cache.match(request);
      if (saved) return saved;
      if (request.mode === 'navigate') return (await cache.match('./index.html')) || Response.error();
      return Response.error();
    }
  })());
});
