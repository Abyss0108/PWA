const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache = [
  './views/Inicio',
  './views/Notas',
  './views/Especialistas',
  './views/Ayuda',
  './views/Contacto',
  './views/Terminos',
  './views/Politicas',
  './views/Cookies'
];

// Instalación del service worker y almacenamiento en caché
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Archivos en caché');
        return cache.addAll(urlsToCache);
      })
  );
});

// Recuperación de recursos del caché
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Devuelve la respuesta si está en caché, de lo contrario, hace una solicitud a la red
        return response || fetch(event.request);
      })
  );
});

// Actualización del service worker
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
