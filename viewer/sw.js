/* ============================================================
 * sw.js — 그림동화 PWA 서비스 워커
 * - 셸(HTML/CSS/JS/책 데이터)은 설치 시 미리 캐시
 * - 삽화는 한 번 본 페이지부터 캐시 (cache-first)
 * - 새 책을 추가하면 아래 CACHE_VERSION 을 올려야 셸이 갱신됨
 * ============================================================ */
var CACHE_VERSION = "storybook-v5";

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
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET") return;

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
