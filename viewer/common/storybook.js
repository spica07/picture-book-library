/* ============================================================
 * storybook.js — 그림동화 공용 뷰어 엔진 (캐러셀 + 읽어주기)
 * book.html?book=<책ID> 형태로 호출되면 books/<책ID>.js 를
 * 동적으로 로드해 페이지를 렌더링한다.
 * 책 데이터 파일은 registerBook({...}) 을 호출하기만 하면 된다.
 *
 * - 캐러셀: 모든 페이지를 가로 트랙에 두고 슬라이드 전환
 * - 입력: ←→ 방향키, 양옆 버튼, 드래그/스와이프(터치·마우스)
 * - 읽어주기: Web Speech API(ko-KR) — 한 장 읽기 / 자동 읽기(끝나면 다음 장)
 * ============================================================ */
(function () {
  "use strict";

  var book = null;

  // 책 데이터 파일이 호출하는 등록 함수
  window.registerBook = function (data) {
    book = data;
  };

  var state = {
    pages: [],     // {type: 'cover'|'scene'|'back', ...}
    texts: [],     // 페이지별 읽어주기용 문장
    index: 0,
    speaking: false,
    autoRead: false
  };

  var el = {}; // 캐시된 DOM 요소

  /* ---------- 초기화 ---------- */

  document.addEventListener("DOMContentLoaded", function () {
    var bookId = new URLSearchParams(location.search).get("book");
    if (!bookId || !/^[\w-]+$/.test(bookId)) {
      showError("책을 찾을 수 없어요", "주소에 ?book=책ID 가 필요해요.<br>책장에서 책을 골라 주세요.");
      return;
    }
    var script = document.createElement("script");
    script.src = "books/" + bookId + ".js";
    script.onload = function () {
      if (!book) {
        showError("책 데이터 오류", "데이터 파일에 registerBook() 호출이 없어요.");
        return;
      }
      init();
    };
    script.onerror = function () {
      showError("책을 찾을 수 없어요", "books/" + bookId + ".js 파일이 없어요.");
    };
    document.head.appendChild(script);
  });

  function showError(title, msg) {
    document.getElementById("app").innerHTML =
      '<div class="sb-error">' +
      "<h1>" + title + "</h1>" +
      "<p>" + msg + "</p>" +
      '<a class="sb-btn" href="index.html">📚 책장으로 가기</a>' +
      "</div>";
  }

  /* ---------- 페이지 구성 ---------- */

  function buildPages() {
    state.pages = [{ type: "cover" }];
    state.texts = [book.series + " " + book.volume + ", " + book.title + "."];
    book.scenes.forEach(function (scene, i) {
      state.pages.push({ type: "scene", scene: scene, num: i + 1 });
      state.texts.push(scene.text.replace(/\n/g, " "));
    });
    state.pages.push({ type: "back" });
    state.texts.push("끝. " + book.backCoverQuote);
  }

  function originalImgUrl(file) {
    return book.imageBase + file;
  }

  function webImgUrl(file) {
    var base = book.webImageBase || book.imageBase.replace(/illustrations_16x9\/$/, "illustrations_web/");
    return base + file.replace(/\.(png|jpe?g)$/i, ".webp");
  }

  function imgUrl(file) {
    return webImgUrl(file);
  }

  function imgFallbackAttr(file) {
    var original = originalImgUrl(file);
    if (imgUrl(file) === original) return "";
    return ' onerror="this.onerror=null;this.src=\'' + original + '\'"';
  }

  function slideHtml(page) {
    if (page.type === "cover") {
      return (
        '<section class="sb-slide sb-cover">' +
        '  <figure class="sb-figure">' +
        '    <img class="sb-img" src="' + imgUrl(book.cover) + '" alt="' + book.title + ' 표지"' + imgFallbackAttr(book.cover) + '>' +
        "  </figure>" +
        '  <div class="sb-cover-text">' +
        '    <p class="sb-series">' + book.series + " · " + book.volume + "</p>" +
        '    <h1 class="sb-title">' + book.title + "</h1>" +
        '    <p class="sb-meta">' + book.age + " | " + book.scenes.length + "장면 | " + book.lesson + "</p>" +
        '    <button class="sb-btn" data-action="start">📖 읽기 시작</button>' +
        "  </div>" +
        "</section>"
      );
    }
    if (page.type === "scene") {
      return (
        '<section class="sb-slide sb-scene">' +
        '  <figure class="sb-figure">' +
        '    <img class="sb-img" src="' + imgUrl(page.scene.image) + '" alt="장면 ' + page.num + '" loading="lazy"' + imgFallbackAttr(page.scene.image) + '>' +
        "  </figure>" +
        '  <div class="sb-text">' +
        page.scene.text.split("\n").map(function (line) { return "<p>" + line + "</p>"; }).join("") +
        "  </div>" +
        "</section>"
      );
    }
    var guide = book.parentGuide;
    return (
      '<section class="sb-slide sb-back">' +
      '  <div class="sb-back-card">' +
      '    <h2 class="sb-end-mark">— 끝 —</h2>' +
      '    <p class="sb-quote">“' + book.backCoverQuote + "”</p>" +
      '    <div class="sb-guide">' +
      "      <h3>👨‍👩‍👧 부모 가이드</h3>" +
      "      <ul>" +
      "        <li><strong>읽은 후 질문</strong> " + guide.question + "</li>" +
      "        <li><strong>연계 활동</strong> " + guide.activity + "</li>" +
      (guide.science ? "        <li><strong>과학 포인트</strong> " + guide.science + "</li>" : "") +
      "        <li><strong>핵심 메시지</strong> " + guide.message + "</li>" +
      "      </ul>" +
      "    </div>" +
      '    <div class="sb-back-actions">' +
      '      <button class="sb-btn" data-action="restart">🔄 다시 읽기</button>' +
      '      <a class="sb-btn sb-btn-light" href="index.html">📚 책장으로</a>' +
      "    </div>" +
      "  </div>" +
      "</section>"
    );
  }

  /* ---------- 렌더링 ---------- */

  function init() {
    document.title = book.title + " — " + book.series;
    buildPages();

    var app = document.getElementById("app");
    app.innerHTML =
      '<header class="sb-header">' +
      '  <a class="sb-home" href="index.html" title="책장으로">📚 책장</a>' +
      '  <span class="sb-book-title">' + book.series + " · " + book.volume + " 〈" + book.title + "〉</span>" +
      '  <span class="sb-spacer"></span>' +
      '  <button class="sb-chip" id="sb-read" title="이 장면 읽어주기">🔊 읽기</button>' +
      '  <button class="sb-chip" id="sb-auto" title="자동으로 읽고 다음 장으로 넘어가요">▶ 자동 읽기</button>' +
      '  <span class="sb-page-count" id="sb-count"></span>' +
      "</header>" +
      '<main class="sb-viewport" id="sb-viewport">' +
      '  <div class="sb-track" id="sb-track">' +
      state.pages.map(slideHtml).join("") +
      "  </div>" +
      "</main>" +
      '<button class="sb-nav sb-prev" id="sb-prev" aria-label="이전 장면">‹</button>' +
      '<button class="sb-nav sb-next" id="sb-next" aria-label="다음 장면">›</button>' +
      '<div class="sb-progress"><div class="sb-progress-bar" id="sb-bar"></div></div>';

    el.viewport = document.getElementById("sb-viewport");
    el.track = document.getElementById("sb-track");
    el.count = document.getElementById("sb-count");
    el.bar = document.getElementById("sb-bar");
    el.prev = document.getElementById("sb-prev");
    el.next = document.getElementById("sb-next");
    el.read = document.getElementById("sb-read");
    el.auto = document.getElementById("sb-auto");

    el.prev.addEventListener("click", function () { go(state.index - 1); });
    el.next.addEventListener("click", function () { go(state.index + 1); });

    // 슬라이드 안의 버튼 (읽기 시작 / 다시 읽기)
    el.track.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-action]");
      if (!btn) return;
      if (btn.dataset.action === "start") go(1);
      if (btn.dataset.action === "restart") go(0);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") go(state.index + 1);
      if (e.key === "ArrowLeft") go(state.index - 1);
    });

    initDrag();
    initTts();
    update(true);
  }

  function go(index) {
    if (index < 0 || index >= state.pages.length || index === state.index) {
      update(); // 범위 밖이면 제자리로 스냅백
      return;
    }
    state.index = index;
    update();
  }

  function update(instant) {
    el.track.classList.remove("sb-dragging");
    el.track.style.transform = "translateX(" + (-state.index * 100) + "%)";

    el.count.textContent = (state.index + 1) + " / " + state.pages.length;
    el.bar.style.width = ((state.index + 1) / state.pages.length * 100) + "%";
    el.prev.disabled = state.index === 0;
    el.next.disabled = state.index === state.pages.length - 1;

    preloadNeighbors();

    // 페이지가 바뀌면 진행 중이던 낭독을 멈추고,
    // 자동 읽기 모드면 전환 애니메이션 후 새 페이지를 읽는다
    stopSpeech();
    if (state.autoRead && !instant) {
      setTimeout(function () {
        if (state.autoRead) speakCurrent();
      }, 550);
    }
  }

  // 옆 장면 이미지를 미리 받아 슬라이드 전환을 부드럽게 한다
  function preloadNeighbors() {
    [state.index + 1, state.index + 2, state.index - 1].forEach(function (i) {
      var p = state.pages[i];
      if (p && p.type === "scene") {
        var img = new Image();
        img.src = imgUrl(p.scene.image);
      }
    });
  }

  /* ---------- 드래그 / 스와이프 ---------- */

  function initDrag() {
    var drag = { on: false, startX: 0, startY: 0, dx: 0, dy: 0, width: 1 };

    el.viewport.addEventListener("pointerdown", function (e) {
      if (e.target.closest("button, a")) return; // 버튼 클릭은 드래그 아님
      drag.on = true;
      drag.startX = e.clientX;
      drag.startY = e.clientY;
      drag.dx = 0;
      drag.dy = 0;
      drag.width = el.viewport.clientWidth;
      try { el.viewport.setPointerCapture(e.pointerId); } catch (err) { /* 일부 브라우저는 미지원 */ }
    });

    el.viewport.addEventListener("pointermove", function (e) {
      if (!drag.on) return;
      drag.dx = e.clientX - drag.startX;
      drag.dy = e.clientY - drag.startY;
      if (Math.abs(drag.dx) < 8) return; // 살짝 움직임은 무시
      var pct = (drag.dx / drag.width) * 100;
      var atEdge =
        (state.index === 0 && drag.dx > 0) ||
        (state.index === state.pages.length - 1 && drag.dx < 0);
      if (atEdge) pct *= 0.3; // 양 끝에서는 저항감
      el.track.classList.add("sb-dragging");
      el.track.style.transform =
        "translateX(calc(" + (-state.index * 100) + "% + " + pct + "%))";
    });

    el.viewport.addEventListener("pointerup", function () {
      if (!drag.on) return;
      drag.on = false;
      if (Math.abs(drag.dx) > drag.width * 0.15) {
        go(state.index + (drag.dx < 0 ? 1 : -1)); // 스와이프: 민 방향으로
      } else if (Math.abs(drag.dx) < 8 && Math.abs(drag.dy) < 8) {
        go(state.index + 1); // 탭/클릭: 다음 장으로
      } else {
        update(); // 어중간한 드래그: 제자리로 스냅백
      }
      drag.dx = 0;
    });

    el.viewport.addEventListener("pointercancel", function () {
      if (!drag.on) return;
      drag.on = false;
      drag.dx = 0;
      update(); // 취소된 드래그는 제자리로
    });
  }

  /* ---------- 읽어주기 (Web Speech API) ---------- */

  var koVoice = null;

  function initTts() {
    if (!("speechSynthesis" in window)) {
      el.read.style.display = "none";
      el.auto.style.display = "none";
      return;
    }
    function pickVoice() {
      var voices = speechSynthesis.getVoices().filter(function (v) {
        return v.lang && v.lang.indexOf("ko") === 0;
      });
      // 자연스러운 신경망 계열(Google/Neural/Natural 등)을 우선 선택,
      // 없으면 기기에 있는 첫 한국어 음성 사용 (예: Windows의 Heami)
      koVoice =
        voices.find(function (v) { return /google|neural|natural|premium|online/i.test(v.name); }) ||
        voices[0] ||
        null;
    }
    pickVoice();
    speechSynthesis.addEventListener("voiceschanged", pickVoice);

    el.read.addEventListener("click", function () {
      if (state.speaking) stopSpeech();
      else speakCurrent();
    });

    el.auto.addEventListener("click", function () {
      state.autoRead = !state.autoRead;
      el.auto.classList.toggle("sb-on", state.autoRead);
      el.auto.textContent = state.autoRead ? "⏸ 자동 읽기" : "▶ 자동 읽기";
      if (state.autoRead) speakCurrent();
      else stopSpeech();
    });

    // 페이지를 떠날 때 낭독 정리
    window.addEventListener("beforeunload", function () {
      speechSynthesis.cancel();
    });
  }

  function speakCurrent() {
    stopSpeech();
    var u = new SpeechSynthesisUtterance(state.texts[state.index]);
    u.lang = "ko-KR";
    if (koVoice) u.voice = koVoice;
    u.rate = 0.95; // 아이가 따라 듣기 좋은 속도
    u.pitch = 1.05;
    u.onend = function () {
      setSpeaking(false);
      // 자동 읽기: 다 읽으면 다음 장으로 (마지막 장이면 종료)
      if (state.autoRead) {
        if (state.index < state.pages.length - 1) {
          setTimeout(function () {
            if (state.autoRead) go(state.index + 1);
          }, 700);
        } else {
          state.autoRead = false;
          el.auto.classList.remove("sb-on");
          el.auto.textContent = "▶ 자동 읽기";
        }
      }
    };
    u.onerror = function () { setSpeaking(false); };
    setSpeaking(true);
    speechSynthesis.speak(u);
  }

  function stopSpeech() {
    if ("speechSynthesis" in window) speechSynthesis.cancel();
    setSpeaking(false);
  }

  function setSpeaking(on) {
    state.speaking = on;
    if (el.read) {
      el.read.textContent = on ? "⏹ 멈춤" : "🔊 읽기";
      el.read.classList.toggle("sb-on", on);
    }
  }
})();
