// Installing cache
self.addEventListener('install', function(event) {
  let urlsTocache = [
    '/',
    'main.js',
  ];
  event.waitUntil(
    caches.open('curcvt-v1').then(function(cache) {
      return cache.addAll(urlsTocache);
    })
  );
});

// fetching the cache resources 
self.addEventListener('fetch', function(event){
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if(response) return response;
      return fetch(event.request);
    })
  );
})

