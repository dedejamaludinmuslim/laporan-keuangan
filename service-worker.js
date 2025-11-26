// service-worker.js
self.addEventListener('install', (event) => {
  // Langsung aktif tanpa nunggu versi lama
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Untuk saat ini belum pakai caching khusus.
// Nanti kalau mau bisa ditambah strategi cache di sini.
self.addEventListener('fetch', (event) => {
  // pass-through
});
