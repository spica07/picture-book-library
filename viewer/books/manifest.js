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
        cover: "../01_weather/illustrations_web/vol09_cover_fog.webp", available: true },
      { id: "weather-vol10", volume: "10권", title: "차가운 우박이", lesson: "겉모습과 속마음",
        cover: "../01_weather/illustrations_web/vol10_cover_hail.webp", available: true },
      { id: "weather-vol11", volume: "특별판", title: "하늘 마을 큰 잔치", lesson: "모두 함께라서 좋아",
        cover: "../01_weather/illustrations_web/vol11_special_cover_festival.webp", available: true }
    ]
  },
  {
    series: "달님이 이야기",
    seriesIcon: "🌙",
    books: [
      { id: "moon-vol01", volume: "1권", title: "가느다란 초승달", lesson: "작은 시작도 아름답다",
        cover: "../02_moon/illustrations_web/vol01_cover_crescent.webp", available: true },
      { id: "moon-vol02", volume: "2권", title: "반쪽이 상현달", lesson: "지금은 자라는 중 — 과정의 가치",
        cover: "../02_moon/illustrations_web/vol02_cover_first_quarter.webp", available: true },
      { id: "moon-vol03", volume: "3권", title: "둥근 보름달", lesson: "가득 찼을 때 나누는 마음",
        cover: "../02_moon/illustrations_web/vol03_cover_full_moon.webp", available: true },
      { id: "moon-vol04", volume: "4권", title: "느긋한 하현달", lesson: "줄어드는 것도 자연스러워 — 쉼과 내려놓음",
        cover: "../02_moon/illustrations_web/vol04_cover_last_quarter.webp", available: true },
      { id: "moon-vol05", volume: "5권", title: "새벽의 그믐달", lesson: "끝은 새로운 시작",
        cover: "../02_moon/illustrations_web/vol05_cover_waning_crescent.webp", available: true },
      { id: "moon-vol06", volume: "통합편", title: "달님이의 한 달 여행", lesson: "변화의 순환 — 모든 모습의 나가 소중해",
        cover: "../02_moon/illustrations_web/vol06_cover_journey.webp", available: true }
    ]
  },
  {
    series: "반짝반짝 태양계 친구들",
    seriesIcon: "🪐",
    books: [
      { id: "solar-vol01", volume: "1권", title: "뜨거운 마음 태양이", lesson: "보이지 않는 곳에서 모두를 돌보는 사랑",
        cover: "../03_solar_system/illustrations_web/vol01_cover_sun.webp", available: true },
      { id: "solar-vol02", volume: "2권", title: "빨리빨리 수성이", lesson: "차분함 — 천천히 해야 잘되는 일이 있어",
        cover: "../03_solar_system/illustrations_web/vol02_cover_mercury.webp", available: true },
      { id: "solar-vol03", volume: "3권", title: "반짝이는 금성이", lesson: "겉모습보다 솔직한 마음",
        cover: "../03_solar_system/illustrations_web/vol03_cover_venus.webp", available: true },
      { id: "solar-vol04", volume: "4권", title: "초록빛 지구", lesson: "우리 집(지구)의 소중함, 환경 사랑",
        cover: "../03_solar_system/illustrations_web/vol04_cover_earth.webp", available: true },
      { id: "solar-vol05", volume: "5권", title: "궁금쟁이 화성이", lesson: "호기심과 탐험 정신",
        cover: "../03_solar_system/illustrations_web/vol05_cover_mars.webp", available: true },
      { id: "solar-vol06", volume: "6권", title: "듬직한 목성이", lesson: "큰 몸은 누군가를 지키는 힘",
        cover: "../03_solar_system/illustrations_web/vol06_cover_jupiter.webp", available: true },
      { id: "solar-vol07", volume: "7권", title: "멋쟁이 토성이", lesson: "자랑보다 겸손, 진짜 멋은 마음에서",
        cover: "../03_solar_system/illustrations_web/vol07_cover_saturn.webp", available: true },
      { id: "solar-vol08", volume: "8권", title: "거꾸로 천왕성이", lesson: "남과 달라도 나만의 방식이 있어",
        cover: "../03_solar_system/illustrations_web/vol08_cover_uranus.webp", available: true },
      { id: "solar-vol09", volume: "9권", title: "멀리 있는 해왕성이", lesson: "멀리 있어도 마음은 가까운 우정",
        cover: "../03_solar_system/illustrations_web/vol09_cover_neptune.webp", available: true },
      { id: "solar-vol10", volume: "10권", title: "작아도 괜찮아 명왕성이", lesson: "이름표가 바뀌어도 나의 가치는 그대로",
        cover: "../03_solar_system/illustrations_web/vol10_cover_pluto.webp", available: true },
      { id: "solar-vol11", volume: "통합편", title: "태양계 대운동회", lesson: "서로 다른 재능이 모이면 멋진 하나가 돼",
        cover: "../03_solar_system/illustrations_web/vol11_special_cover_sports_day.webp", available: true }
    ]
  },
  {
    series: "파도 너머 바다 친구들",
    seriesIcon: "🌊",
    books: [
      { id: "ocean-vol01", volume: "1권", title: "아기 거북 바다의 첫 헤엄", lesson: "처음의 두려움을 이기는 용기",
        cover: "../04_ocean/illustrations_web/vol01_cover_first_swim.webp", available: true },
      { id: "ocean-vol02", volume: "2권", title: "여덟 팔 문어 아저씨", lesson: "도움의 손길은 많을수록 좋아",
        cover: "../04_ocean/illustrations_web/vol02_cover_octopus_helper.webp", available: true },
      { id: "ocean-vol03", volume: "3권", title: "노래하는 고래 할머니", lesson: "마음을 전하는 따뜻한 소리",
        cover: "../04_ocean/illustrations_web/vol03_cover_grandmother_whale.webp", available: true },
      { id: "ocean-vol04", volume: "4권", title: "아빠 해마의 포근한 주머니", lesson: "가족의 사랑은 여러 모습",
        cover: "../04_ocean/illustrations_web/vol04_cover_father_seahorse.webp", available: true },
      { id: "ocean-vol05", volume: "5권", title: "말미잘 집의 흰동가리", lesson: "서로 다른 친구도 도우며 살아 (공생)",
        cover: "../04_ocean/illustrations_web/vol05_cover_clownfish_anemone.webp", available: true },
      { id: "ocean-vol06", volume: "6권", title: "사실은 수줍은 상어 아저씨", lesson: "겉모습으로 판단하지 않기",
        cover: "../04_ocean/illustrations_web/vol06_cover_shy_shark.webp", available: true },
      { id: "ocean-vol07", volume: "7권", title: "둥실둥실 해파리 언니", lesson: "흐름에 몸을 맡기는 여유",
        cover: "../04_ocean/illustrations_web/vol07_cover_jellyfish_sister.webp", available: true },
      { id: "ocean-vol08", volume: "8권", title: "다시 자라는 불가사리", lesson: "아파도 다시 회복할 수 있다는 믿음",
        cover: "../04_ocean/illustrations_web/vol08_cover_regrowing_starfish.webp", available: true },
      { id: "ocean-vol09", volume: "9권", title: "바다의 아파트, 산호 마을", lesson: "우리가 사는 곳을 함께 지키기 (환경)",
        cover: "../04_ocean/illustrations_web/vol09_cover_coral_apartment.webp", available: true },
      { id: "ocean-vol10", volume: "10권", title: "깜깜한 바다의 등불, 아귀", lesson: "어둠 속에도 빛은 있다",
        cover: "../04_ocean/illustrations_web/vol10_cover_deep_sea_anglerfish.webp", available: true }
    ]
  },
  {
    series: "도토리 숲 동물 친구들",
    seriesIcon: "🐿️",
    books: [
      { id: "animals-vol01", volume: "1권", title: "도토리 부자 다람쥐 또리", lesson: "나눔과 준비성",
        cover: "../05_animals/illustrations_web/vol01_cover_acorn_squirrel.webp", available: true },
      { id: "animals-vol02", volume: "2권", title: "밤의 파수꾼 부엉이 부리", lesson: "나의 시간, 나의 역할이 있어",
        cover: "../05_animals/illustrations_web/vol02_cover_night_watch_owl.webp", available: true },
      { id: "animals-vol03", volume: "3권", title: "귀가 큰 토끼 토토", lesson: "조심성도 소중한 능력",
        cover: "../05_animals/illustrations_web/vol03_cover_big_ears_rabbit.webp", available: true },
      { id: "animals-vol04", volume: "4권", title: "안아 주고 싶은 고슴도치 치치", lesson: "내 방식대로 마음을 전하면 돼",
        cover: "../05_animals/illustrations_web/vol04_cover_hedgehog_apples.webp", available: true },
      { id: "animals-vol05", volume: "5권", title: "거짓말한 여우 여울이", lesson: "정직과 신뢰",
        cover: "../05_animals/illustrations_web/vol05_cover_mischievous_fox.webp", available: true }
    ]
  },
  {
    series: "쿵쿵 공룡 마을 친구들",
    seriesIcon: "🦖",
    books: [
      { id: "dinosaurs-vol01", volume: "1권", title: "무서운 게 아니야, 티노", lesson: "힘은 누군가를 지키는 데 쓰는 것",
        cover: "../06_dinosaurs/illustrations_web/vol01_cover_tino.webp", available: true },
      { id: "dinosaurs-vol02", volume: "2권", title: "뿔 셋 달린 용감이, 트리케", lesson: "진짜 용기란 무서워도 나서는 것",
        cover: "../06_dinosaurs/illustrations_web/vol02_cover_trike.webp", available: true },
      { id: "dinosaurs-vol03", volume: "3권", title: "목이 긴 브라키, 높은 마음", lesson: "넓게 보는 마음, 다툼을 멈추는 지혜",
        cover: "../06_dinosaurs/illustrations_web/vol03_cover_braki.webp", available: true },
      { id: "dinosaurs-vol04", volume: "4권", title: "빠른 발 랩터 삼형제", lesson: "경쟁보다 팀워크",
        cover: "../06_dinosaurs/illustrations_web/vol04_cover_raptor_brothers.webp", available: true },
      { id: "dinosaurs-vol05", volume: "5권", title: "등에 지붕을 단 스테고", lesson: "느려도 든든한 존재",
        cover: "../06_dinosaurs/illustrations_web/vol05_cover_stego_roof.webp", available: true },
      { id: "dinosaurs-vol06", volume: "6권", title: "하늘 꼬마 우체부, 하늘이", lesson: "남의 자리가 커 보여도, 내 자리가 소중해",
        cover: "../06_dinosaurs/illustrations_web/vol06_cover_haneul_mail.webp", available: true },
      { id: "dinosaurs-vol07", volume: "7권", title: "갑옷 입은 겁쟁이 안키", lesson: "겁이 많아도 누군가를 지킬 수 있어",
        cover: "../06_dinosaurs/illustrations_web/vol07_cover_anki_hail_shelter.webp", available: true },
      { id: "dinosaurs-vol08", volume: "8권", title: "뿌우뿌우 음악가 파라", lesson: "나의 소리와 표현이 누군가를 도와",
        cover: "../06_dinosaurs/illustrations_web/vol08_cover_para_music_fog.webp", available: true },
      { id: "dinosaurs-vol09", volume: "9권", title: "바다에서 온 친구, 모사", lesson: "사는 곳이 달라도 친구가 될 수 있어",
        cover: "../06_dinosaurs/illustrations_web/vol09_cover_mosa_lake_friend.webp", available: true },
      { id: "dinosaurs-vol10", volume: "10권", title: "누구의 알일까?", lesson: "함께 돌보는 마음, 가족의 의미",
        cover: "../06_dinosaurs/illustrations_web/vol10_cover_spotted_egg_nest.webp", available: true }
    ]
  },
  {
    series: "마음 마을 친구들",
    seriesIcon: "💛",
    books: [
      { id: "emotions-vol01", volume: "1권", title: "반짝반짝 기쁨이", lesson: "작은 기쁨 찾기",
        cover: "../07_emotions/illustrations_web/vol01_cover_joy.webp", available: true },
      { id: "emotions-vol02", volume: "2권", title: "파랑파랑 슬픔이", lesson: "울어도 괜찮아",
        cover: "../07_emotions/illustrations_web/vol02_cover_sadness.webp", available: true },
      { id: "emotions-vol03", volume: "3권", title: "활활 화남이", lesson: "화 다루기 3단계",
        cover: "../07_emotions/illustrations_web/vol03_cover_anger.webp", available: true },
      { id: "emotions-vol04", volume: "4권", title: "덜덜 무서움이", lesson: "무서움은 경보등",
        cover: "../07_emotions/illustrations_web/vol04_cover_fear.webp", available: true },
      { id: "emotions-vol05", volume: "5권", title: "발그레 부끄럼이", lesson: "한 문장부터 천천히",
        cover: "../07_emotions/illustrations_web/vol05_cover_shyness.webp", available: true },
      { id: "emotions-vol06", volume: "6권", title: "새콤한 질투", lesson: "질투가 올라오면 말로 바꿔요",
        cover: "../07_emotions/illustrations_web/vol06_cover_jealousy.webp", available: true },
      { id: "emotions-vol07", volume: "7권", title: "뭉게뭉게 심심이", lesson: "심심해야 상상이 자라요",
        cover: "../07_emotions/illustrations_web/vol07_cover_boredom.webp", available: true },
      { id: "emotions-vol08", volume: "8권", title: "두근두근 설렘이", lesson: "감정에 이름 붙이기",
        cover: "../07_emotions/illustrations_web/vol08_cover_excitement.webp", available: true },
      { id: "emotions-vol09", volume: "9권", title: "무거운 미안함이", lesson: "사과는 마음을 가볍게 해요",
        cover: "../07_emotions/illustrations_web/vol09_cover_guilt.webp", available: true },
      { id: "emotions-vol10", volume: "10권", title: "작지만 강한 용기", lesson: "무서워도 한 발",
        cover: "../07_emotions/illustrations_web/vol10_cover_courage.webp", available: true },
      { id: "emotions-vol11", volume: "통합편", title: "마음 마을 무지개 축제", lesson: "모든 감정이 다 필요해요",
        cover: "../07_emotions/illustrations_web/vol11_special_cover_rainbow_festival.webp", available: true }
    ]
  }
];
