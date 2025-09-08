const CACHE_NAME = "calculadora de gastos";
const FILES_TO_CACHE = [
  'index.html',
  'style.css',
  'script.js',
  'manifest.json',
  'Icons/img.png',
  'Icons/img2.png'
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

