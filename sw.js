const CACHE_NAME = "calculadora de gastos";
const FILES_TO_CACHE = [
  '/Aplicação PWA/',
  '/Aplicação PWA/index.html',
  '/Aplicação PWA/style.css',
  '/Aplicação PWA/script.js',
  '/Aplicação PWA/manifest.json',
  '/Aplicação PWA/imgs/img.png',
  '/Aplicação PWA/imgs/img2.png'
];

self.addEventListener("install", (event) => {
    caches.open("calculadora de gastos").then((cache) => {
        console.log("Cache aberto")
        cache.addAll(FILES_TO_CACHE);
    });
});
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});

