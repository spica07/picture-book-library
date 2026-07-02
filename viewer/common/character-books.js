/* ============================================================
 * character-books.js - 주제별 캐릭터 삽화북 데이터 렌더러
 * ============================================================ */
(function () {
  "use strict";

  var library = window.LIBRARY || [];

  function makeEl(tag, className) {
    var el = document.createElement(tag);
    if (className) el.className = className;
    return el;
  }

  function addText(el, text) {
    el.textContent = text || "";
    return el;
  }

  function seriesSlug(series) {
    var firstBook = (series.books || [])[0];
    if (firstBook && firstBook.id) return firstBook.id.replace(/-vol\d+$/, "");
    return String(series.series || "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  }

  function seriesBySlug(slug) {
    return library.find(function (series) {
      return seriesSlug(series) === slug;
    });
  }

  function artPath(series) {
    return "character_art/" + seriesSlug(series) + "-cast.webp";
  }

  function artPngPath(series) {
    return "character_art/" + seriesSlug(series) + "-cast.png";
  }

  function fallbackCover(series) {
    var firstBook = (series.books || [])[0];
    return firstBook ? firstBook.cover : "";
  }

  function characterBooks() {
    return library.map(function (series) {
      var books = (series.books || []).filter(function (book) { return book.available; });
      return {
        series: series,
        slug: seriesSlug(series),
        books: books,
        art: artPath(series)
      };
    }).filter(function (item) {
      return item.books.length;
    });
  }

  function totalCharacters() {
    return characterBooks().reduce(function (sum, item) {
      return sum + item.books.length;
    }, 0);
  }

  function hasFinalConsonant(text) {
    var value = String(text || "").replace(/[^\uac00-\ud7a3]/g, "");
    if (!value) return false;
    var code = value.charCodeAt(value.length - 1) - 0xac00;
    return code >= 0 && code <= 11171 && code % 28 !== 0;
  }

  function objectParticle(text) {
    return hasFinalConsonant(text) ? "을" : "를";
  }

  function profileDescription(book) {
    return "『" + book.title + "』 캐릭터는 '" + book.lesson + "'" + objectParticle(book.lesson) + " 보여 줍니다.";
  }

  function imageWithFallback(src, fallback, alt) {
    var image = document.createElement("img");
    image.src = src;
    image.alt = alt || "";
    image.loading = "lazy";
    if (fallback) {
      image.onerror = function () {
        image.onerror = null;
        image.src = fallback;
      };
    }
    return image;
  }

  function renderIndex(options) {
    var root = options.root;
    var count = options.count;
    var items = characterBooks();

    root.innerHTML = "";
    if (count) count.textContent = items.length + "권";

    var grid = makeEl("div", "char-book-grid");
    items.forEach(function (item) {
      var link = makeEl("a", "char-book-card");
      link.href = "character-book.html?series=" + encodeURIComponent(item.slug);

      var figure = makeEl("figure", "char-book-cover");
      figure.appendChild(imageWithFallback(item.art, artPngPath(item.series), item.series.series + " 캐릭터 삽화"));

      var body = makeEl("div", "char-book-card-body");
      body.appendChild(addText(makeEl("span", "char-series-kicker"), item.books.length + "명의 캐릭터"));
      body.appendChild(addText(makeEl("strong", "char-book-name"), item.series.seriesIcon + " " + item.series.series));

      link.appendChild(figure);
      link.appendChild(body);
      grid.appendChild(link);
    });

    root.appendChild(grid);
  }

  function renderDetail(options) {
    var params = new URLSearchParams(location.search);
    var slug = params.get("series") || "";
    var series = seriesBySlug(slug);
    var root = options.root;

    if (!series) {
      document.title = "캐릭터 삽화북을 찾을 수 없어요";
      if (options.title) options.title.textContent = "캐릭터 삽화북을 찾을 수 없어요";
      if (options.kicker) options.kicker.textContent = "다시 선택해 주세요";
      root.innerHTML = '<section class="char-empty"><a class="char-home" href="characters.html">삽화북 목록으로</a></section>';
      return;
    }

    var books = (series.books || []).filter(function (book) { return book.available; });
    var art = artPath(series);

    document.title = series.series + " 캐릭터 삽화북 — 그림동화 책장";
    if (options.title) options.title.textContent = series.seriesIcon + " " + series.series;
    if (options.kicker) options.kicker.textContent = books.length + "명의 캐릭터";

    root.innerHTML = "";

    var hero = makeEl("section", "char-hero");
    var figure = makeEl("figure", "char-hero-art");
    figure.appendChild(imageWithFallback(art, artPngPath(series), series.series + " 캐릭터 전체 삽화"));

    hero.appendChild(figure);
    root.appendChild(hero);

    var profileGrid = makeEl("section", "char-profile-grid");
    books.forEach(function (book, index) {
      var card = makeEl("article", "char-profile-card");
      card.appendChild(addText(makeEl("span", "char-profile-no"), String(index + 1).padStart(2, "0")));
      card.appendChild(addText(makeEl("h3"), book.title));
      card.appendChild(addText(makeEl("p"), profileDescription(book)));

      var actions = makeEl("div", "char-profile-actions");
      var original = makeEl("a", "char-profile-link");
      original.href = "book.html?book=" + encodeURIComponent(book.id);
      original.textContent = "원래 동화 보기";
      actions.appendChild(original);
      card.appendChild(actions);

      profileGrid.appendChild(card);
    });
    root.appendChild(profileGrid);
  }

  window.CharacterBooks = {
    renderIndex: renderIndex,
    renderDetail: renderDetail,
    characterBooks: characterBooks,
    totalCharacters: totalCharacters
  };
})();
