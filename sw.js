importScripts('https://cdn.jsdelivr.net/npm/@titaniumnetwork-dev/ultraviolet@3.2.5/dist/uv.bundle.js');
importScripts('https://cdn.jsdelivr.net/npm/@titaniumnetwork-dev/ultraviolet@3.2.5/dist/uv.sw.js');

const sw = new UVServiceWorker({
    prefix: '/service/',
    bare: 'https://tomp.app/'
});

self.addEventListener('fetch', (event) => {
    event.respondWith(sw.fetch(event));
});
