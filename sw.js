/* Service Worker de "Mi Estrella"
   Guarda la app en caché para que funcione sin conexión, para siempre. */

const CACHE = 'mi-estrella-v1';
const ARCHIVOS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-512-maskable.png',
  './apple-touch-icon.png'
];

// Al instalar: guardamos todos los archivos en caché.
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ARCHIVOS)).then(() => self.skipWaiting())
  );
});

// Al activar: borramos cachés antiguas de versiones anteriores.
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(claves =>
      Promise.all(claves.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if(event.request.method !== 'GET') return;

  const esNavegacion = event.request.mode === 'navigate' ||
    (event.request.destination === 'document');

  if(esNavegacion){
    // La página (HTML): RED PRIMERO, para ver siempre la última versión.
    // Si no hay conexión, se usa la copia guardada en caché.
    event.respondWith(
      fetch(event.request).then(red => {
        const copia = red.clone();
        caches.open(CACHE).then(cache => cache.put('./index.html', copia));
        return red;
      }).catch(() => caches.match(event.request).then(r => r || caches.match('./index.html')))
    );
    return;
  }

  // El resto (iconos, manifest…): CACHÉ PRIMERO, más rápido y estable sin conexión.
  event.respondWith(
    caches.match(event.request).then(resp => {
      if(resp) return resp;
      return fetch(event.request).then(red => {
        if(red && red.status === 200 && red.type === 'basic'){
          const copia = red.clone();
          caches.open(CACHE).then(cache => cache.put(event.request, copia));
        }
        return red;
      });
    })
  );
});
