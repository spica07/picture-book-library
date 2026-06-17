/* ============================================================
 * sw.js — 그림동화 PWA 서비스 워커
 * - 셸(HTML/CSS/JS/책 데이터)은 설치 시 미리 캐시
 * - 삽화는 한 번 본 페이지부터 캐시 (cache-first)
 * - 새 책을 추가하면 아래 CACHE_VERSION 을 올려야 셸이 갱신됨
 * ============================================================ */
var CACHE_VERSION = "storybook-v19";

var SHELL = [
  "./",
  "./index.html",
  "./book.html",
  "./manifest.webmanifest",
  "./common/storybook.css",
  "./common/storybook.js",
  "./common/library.css",
  "./books/manifest.js",
  "./books/weather-vol01.js",
  "./books/weather-vol02.js",
  "./books/weather-vol03.js",
  "./books/weather-vol04.js",
  "./books/weather-vol05.js",
  "./books/weather-vol06.js",
  "./books/weather-vol07.js",
  "./books/weather-vol08.js",
  "./books/weather-vol09.js",
  "./books/weather-vol10.js",
  "./books/weather-vol11.js",
  "./books/moon-vol01.js",
  "./books/moon-vol02.js",
  "./books/moon-vol03.js",
  "./books/moon-vol04.js",
  "./books/moon-vol05.js",
  "./books/moon-vol06.js",
  "./books/solar-vol01.js",
  "./books/solar-vol02.js",
  "./books/solar-vol03.js",
  "./books/solar-vol04.js",
  "./books/solar-vol05.js",
  "./books/solar-vol06.js",
  "./books/solar-vol07.js",
  "./books/solar-vol08.js",
  "./books/solar-vol09.js",
  "./books/solar-vol10.js",
  "./books/solar-vol11.js",
  "./books/ocean-vol01.js",
  "./books/ocean-vol02.js",
  "./books/ocean-vol03.js",
  "./books/ocean-vol04.js",
  "./books/ocean-vol05.js",
  "./books/ocean-vol06.js",
  "./books/ocean-vol07.js",
  "./books/ocean-vol08.js",
  "./books/ocean-vol09.js",
  "./books/ocean-vol10.js",
  "./books/ocean-vol11.js",
  "./books/animals-vol01.js",
  "./books/animals-vol02.js",
  "./books/animals-vol03.js",
  "./books/animals-vol04.js",
  "./books/animals-vol05.js",
  "./books/animals-vol06.js",
  "./books/animals-vol07.js",
  "./books/animals-vol08.js",
  "./books/animals-vol09.js",
  "./books/animals-vol10.js",
  "./books/animals-vol11.js",
  "./books/dinosaurs-vol01.js",
  "./books/dinosaurs-vol02.js",
  "./books/dinosaurs-vol03.js",
  "./books/dinosaurs-vol04.js",
  "./books/dinosaurs-vol05.js",
  "./books/dinosaurs-vol06.js",
  "./books/dinosaurs-vol07.js",
  "./books/dinosaurs-vol08.js",
  "./books/dinosaurs-vol09.js",
  "./books/dinosaurs-vol10.js",
  "./books/dinosaurs-vol11.js",
  "./books/emotions-vol01.js",
  "./books/emotions-vol02.js",
  "./books/emotions-vol03.js",
  "./books/emotions-vol04.js",
  "./books/emotions-vol05.js",
  "./books/emotions-vol06.js",
  "./books/emotions-vol07.js",
  "./books/emotions-vol08.js",
  "./books/emotions-vol09.js",
  "./books/emotions-vol10.js",
  "./books/emotions-vol11.js",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(CACHE_VERSION).then(function (cache) {
      // HTTP 캐시를 우회해 항상 서버의 최신 셸을 담는다
      return cache.addAll(SHELL.map(function (url) {
        return new Request(url, { cache: "reload" });
      }));
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (key) {
        if (key !== CACHE_VERSION) return caches.delete(key);
      }));
    }).then(function () {
      return self.clients.claim();
    }).then(function () {
      var scopePath = location.pathname.replace(/[^/]*$/, "");
      return self.clients.matchAll({ type: "window", includeUncontrolled: true })
        .then(function (clients) {
          return Promise.all(clients.map(function (client) {
            if (client.navigate && client.url.indexOf(location.origin + scopePath) === 0) {
              return client.navigate(client.url);
            }
          }));
        });
    })
  );
});

self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET") return;

  var url = new URL(e.request.url);
  var scopePath = location.pathname.replace(/[^/]*$/, "");
  var shellPath = url.pathname.indexOf(scopePath) === 0
    ? "./" + url.pathname.slice(scopePath.length)
    : "";
  var isShell = url.origin === location.origin && SHELL.indexOf(shellPath) !== -1;

  if (isShell) {
    e.respondWith(
      fetch(new Request(e.request, { cache: "reload" })).then(function (res) {
        if (res.ok) {
          var copy = res.clone();
          caches.open(CACHE_VERSION).then(function (cache) {
            cache.put(e.request, copy);
          });
        }
        return res;
      }).catch(function () {
        return caches.match(e.request);
      })
    );
    return;
  }

  e.respondWith(
    caches.match(e.request).then(function (cached) {
      if (cached) return cached; // 캐시 우선 (삽화·셸 모두)
      return fetch(e.request).then(function (res) {
        // 성공한 같은 출처 응답(삽화 등)은 캐시에 저장해 오프라인 대비
        if (res.ok && new URL(e.request.url).origin === location.origin) {
          var copy = res.clone();
          caches.open(CACHE_VERSION).then(function (cache) {
            cache.put(e.request, copy);
          });
        }
        return res;
      });
    })
  );
});
