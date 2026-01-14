self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('losa-cache').then(cache =>
      cache.addAll(['index.html'])
    )
  );
});
