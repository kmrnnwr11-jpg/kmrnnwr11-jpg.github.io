// Service worker minimale: rende l'app installabile (PWA) e apribile anche offline.
// Salva il "guscio" dell'app (pagina + JS/CSS/icone). NON tocca le chiamate dati/login,
// che passano sempre dalla rete così i dati restano sempre aggiornati e sicuri.
const CACHE = "paghepro-v1";
const GUSCIO = ["/", "/index.html", "/favicon.svg", "/manifest.webmanifest"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(GUSCIO)).then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((chiavi) => Promise.all(chiavi.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  // Solo stessa origine; le chiamate API (dati, login) vanno sempre in rete.
  if (url.origin !== self.location.origin) return;
  if (url.pathname.startsWith("/api/")) return;

  // Apertura della pagina: prova la rete, e se manca usa il guscio salvato → l'app si apre offline.
  if (req.mode === "navigate") {
    event.respondWith(fetch(req).catch(() => caches.match("/index.html")));
    return;
  }

  // Risorse statiche (JS/CSS/immagini): se in cache le uso subito, altrimenti rete e poi salvo.
  event.respondWith(
    caches.match(req).then(
      (hit) =>
        hit ||
        fetch(req).then((res) => {
          if (res.ok && res.type === "basic") {
            const copia = res.clone();
            caches.open(CACHE).then((c) => c.put(req, copia));
          }
          return res;
        }),
    ),
  );
});
