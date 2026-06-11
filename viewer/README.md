# 그림동화 HTML 뷰어

`index.html`을 더블클릭해 열면 책장이 나타납니다. (서버 없이 파일로 바로 동작)

## 뷰어 기능

- **캐러셀 넘김**: 좌우로 미는 슬라이드 전환 — 화면 클릭/탭(다음 장), 방향키(←→), 양옆 버튼, 손가락 스와이프/마우스 드래그 모두 지원
- **큰 그림 레이아웃**: 삽화가 화면의 남는 공간을 모두 차지하고, 글 상자는 아래에 컴팩트하게 표시
- **읽어주기(TTS)**: 상단 `🔊 읽기` = 현재 장면 한 번 읽기, `▶ 자동 읽기` = 읽고 나서 자동으로 다음 장으로 (브라우저 내장 한국어 음성 사용, 미지원 브라우저에선 버튼이 자동으로 숨음)
- **반응형**: 데스크톱·태블릿·모바일(세로/가로) 모두 대응. 세로 화면에선 그림+글이 가운데로 모이고, 모바일에선 넘김 버튼이 하단 모서리로 이동

## 구조

```
viewer/
├── index.html            책장 (라이브러리 홈)
├── book.html             공용 책 뷰어 셸 — book.html?book=책ID
├── common/               ★ 모든 책이 공유하는 소스
│   ├── storybook.js      뷰어 엔진 (페이지 넘김, 키보드 ←→, 스와이프, 진행 바)
│   ├── storybook.css     뷰어 스타일
│   └── library.css       책장 스타일
└── books/                ★ 책마다 하나씩 추가하는 데이터
    ├── manifest.js       책장에 표시할 전체 책 목록
    ├── weather-vol01.js  1권 뭉게뭉게 구름이
    ├── weather-vol02.js  2권 주룩주룩 비방울이
    ├── weather-vol03.js  3권 쨍쨍 해님이
    └── weather-vol04.js  4권 우르릉 천둥이
```

HTML/CSS/JS 공통 소스는 `common/`에 한 번만 있고, 책은 **데이터 파일**로만 존재합니다.

## 새 책 추가하는 법 (2단계)

1. `books/<책ID>.js` 데이터 파일 생성 — 기존 파일을 복사해 수정하면 됩니다.

   ```js
   registerBook({
     id: "weather-vol05",
     series: "날씨 친구들",
     volume: "5권",
     title: "번쩍번쩍 번개",
     age: "5~7세",
     lesson: "함께 가는 즐거움",
     imageBase: "../01_weather/illustrations_16x9/",  // 삽화 폴더 (viewer/ 기준 상대경로)
     cover: "vol05_cover_lightning.png",
     backCoverQuote: "뒷표지 문구",
     parentGuide: { question: "…", activity: "…", message: "…" },
     scenes: [
       { image: "vol05_scene01_….png", text: "장면 본문\n줄바꿈은 \\n" },
       // …장면 수만큼 반복
     ]
   });
   ```

2. `books/manifest.js`의 해당 항목을 `available: true`로 바꾸거나 새 항목을 추가.
   (새 시리즈라면 `{ series, seriesIcon, books: [...] }` 블록을 하나 더 추가)

끝. 책장과 뷰어에 자동으로 나타납니다.

## 현재 상태

- 읽기 가능: 날씨 친구들 1~5권 (삽화 완성분)
- 준비 중 표시: 6~10권 + 특별판 (표지만 생성됨 — 본문 삽화 생성 후 데이터 파일 추가)
