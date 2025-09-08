if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register('sw.js')
    .then(() => console.log("Seu Service Worker foi registrado"))
    .catch(err => console.log("Erro ao registrar Service Worker:", err))
}