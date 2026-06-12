/* ============================================================
 * manifest.js — 책장에 표시할 전체 책 목록
 * 새 책을 만들면 books/<id>.js 데이터 파일을 추가하고
 * 여기에 한 항목만 등록하면 책장에 자동으로 나타난다.
 *   available: true  → 읽을 수 있는 책 (books/<id>.js 필요)
 *   available: false → 표지만 있는 "준비 중" 책
 * ============================================================ */
window.LIBRARY = [
  {
    series: "날씨 친구들",
    seriesIcon: "⛅",
    books: [
      { id: "weather-vol01", volume: "1권", title: "뭉게뭉게 구름이", lesson: "자기 정체성, 나다움의 발견",
        cover: "../01_weather/illustrations_web/vol01_cover_cloud.webp", available: true },
      { id: "weather-vol02", volume: "2권", title: "주룩주룩 비방울이", lesson: "누구나 소중한 역할이 있다",
        cover: "../01_weather/illustrations_web/vol02_cover_raindrop.webp", available: true },
      { id: "weather-vol03", volume: "3권", title: "쨍쨍 해님이", lesson: "쉼의 소중함, 감사하는 마음",
        cover: "../01_weather/illustrations_web/vol03_cover_sun.webp", available: true },
      { id: "weather-vol04", volume: "4권", title: "우르릉 천둥이", lesson: "단점이 장점이 될 수 있다",
        cover: "../01_weather/illustrations_web/vol04_cover_thunder.webp", available: true },
      { id: "weather-vol05", volume: "5권", title: "번쩍번쩍 번개", lesson: "빠른 것보다 함께가 중요해",
        cover: "../01_weather/illustrations_web/vol05_cover_lightning.webp", available: true },
      { id: "weather-vol06", volume: "6권", title: "살랑살랑 바람이", lesson: "보이지 않아도 소중한 존재",
        cover: "../01_weather/illustrations_web/vol06_cover_wind.webp", available: true },
      { id: "weather-vol07", volume: "7권", title: "펑펑 눈송이", lesson: "다름은 특별함이야",
        cover: "../01_weather/illustrations_web/vol07_cover_snowflake.webp", available: true },
      { id: "weather-vol08", volume: "8권", title: "일곱 빛깔 무지개", lesson: "화해와 갈등 해결",
        cover: "../01_weather/illustrations_web/vol08_cover_rainbow.webp", available: true },
      { id: "weather-vol09", volume: "9권", title: "뿌연 안개", lesson: "천천히 가도 괜찮아",
        cover: "../01_weather/illustrations_web/vol09_cover_fog.webp", available: false },
      { id: "weather-vol10", volume: "10권", title: "차가운 우박이", lesson: "겉모습과 속마음",
        cover: "../01_weather/illustrations_web/vol10_cover_hail.webp", available: false },
      { id: "weather-vol11", volume: "특별판", title: "하늘 마을 큰 잔치", lesson: "모두 함께라서 좋아",
        cover: "../01_weather/illustrations_web/vol11_special_cover_festival.webp", available: false }
    ]
  },
  {
    series: "달님이 이야기",
    seriesIcon: "🌙",
    books: [
      { id: "moon-vol01", volume: "1권", title: "가느다란 초승달", lesson: "작은 시작도 아름답다",
        cover: "../02_moon/illustrations_web/vol01_cover_crescent.webp", available: true },
      { id: "moon-vol02", volume: "2권", title: "반쪽이 상현달", lesson: "지금은 자라는 중 — 과정의 가치",
        cover: "../02_moon/illustrations_web/vol02_cover_first_quarter.webp", available: true }
    ]
  }
];
