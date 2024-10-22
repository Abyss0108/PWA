const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
  '/',
  '/Notas',
  '/Especialistas',
  '/Ayuda',
  '/Contacto',
  '/static/css/main.ea3524be.css',  // Archivos estáticos que también necesitarás para estas páginas
  '/static/js/main.ea3524be.js',
  // Agrega aquí otros archivos que quieras cachear, como imágenes, etc.
];

// Durante la fase de instalación, se agregan los archivos especificados al caché
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Archivos cacheados');
        return cache.addAll(urlsToCache);
      })
  );
});

// Activa el nuevo Service Worker y limpia el caché antiguo si es necesario
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            console.log('Cache antiguo eliminado');
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Intercepta las solicitudes y las sirve desde el caché si está disponible, o desde la red si no
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Si el recurso está en caché, lo devuelve desde el caché
        if (response) {
          return response;
        }
        // Si no está en caché, lo busca en la red
        return fetch(event.request).then(
          (networkResponse) => {
            // Si la respuesta es válida, la añade al caché para futuras solicitudes
            if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
              return networkResponse;
            }

            const responseToCache = networkResponse.clone();

            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return networkResponse;
          }
        );
      })
      .catch(() => {
        // Si está offline y no encuentra el recurso, muestra una página de fallback (opcional)
        return caches.match('/');
      })
  );
});
