# 02_moon 삽화 생성 계획서 (16:9)

이미지 생성 도구가 있는 세션에서 이 문서대로 생성하면, `viewer/books/moon-vol01~06.js`가
이미 이 파일명들을 참조하고 있어서 **manifest.js에 시리즈 블록만 추가하면 바로 서비스됩니다.**

## 생성 규격 (01_weather와 동일)

- 출력 폴더: `02_moon/illustrations_16x9/`
- 포맷: PNG, 16:9 가로 (기존과 동일하게 1672×941 수준)
- 글자·워터마크 금지 (`no text, no letters`)
- 총 94장: 표지 6 + 본문 88 (1~5권 각 14장면, 통합편 18장면)

## 공통 스타일 (모든 프롬프트 끝에 붙임) — [STYLE]

```
children's picture book illustration, dreamy night sky theme, deep navy and
soft purple gradient background with warm golden moonlight, twinkling stars,
soft pastel glow, kawaii style characters with big sparkling eyes and rosy
cheeks, gentle gouache painting style, cozy and magical atmosphere, never
scary, clean composition for ages 5-7, no text, no letters, wide 16:9
landscape composition
```

네거티브: `realistic, photo, scary, horror, pitch black darkness, complex details, text, watermark, adult style, harsh shadows`

## 캐릭터 약어 (프롬프트의 […]를 아래 문구로 치환)

- **[FACE]** = `warm golden-yellow glowing body, big gentle sparkling eyes, soft rosy cheeks, sweet kind smile`
- **[CRESCENT]** = `a thin crescent moon character curved like an eyebrow, [FACE]`
- **[HALF_R]** = `a half moon character with right side glowing golden and left side soft dark blue, [FACE]`
- **[FULL]** = `a big round full moon character glowing brightly with warm aura, [FACE]`
- **[HALF_L]** = `a half moon character with left side glowing golden and right side soft dark blue, [FACE]`
- **[WANING]** = `a very thin waning crescent moon character curved to the left, delicate elegant glow, [FACE]`
- **[BORA]** = `a cute 6-year-old Korean girl with short bob hair and star-shaped hairpin, yellow pajamas with moon pattern`
- **[GRANDMA]** = `a wise grandmother star character with warm orange-gold glow, tiny round spectacles, knitted stardust shawl`
- **[VENUS]** = `a bright cheerful morning star character with brilliant white-blue sparkle, energetic playful grin`
- **[RABBIT]** = `a tiny fluffy cream-white baby rabbit with big eyes`

⭐ 일관성 핵심: 달님이의 몸 모양은 권마다 달라도 **[FACE] 문구는 절대 바꾸지 말 것**.
시간대별 하늘: 초승달=`purple-orange twilight sky`, 상현달=`deep navy early night sky`,
보름달=`rich midnight blue sky`, 하현달·그믐달=`soft indigo-to-pink dawn sky`.

---

## 1권 『가느다란 초승달』 — 15장

| 파일명 | 프롬프트 (+[STYLE]) |
|---|---|
| vol01_cover_crescent.png | book cover, [CRESCENT] with gentle smile in purple twilight sky, soft stars around, eyebrow-shaped elegant curve |
| vol01_scene01_first_appearance.png | western twilight sky in purple and orange gradient just after sunset, [CRESCENT] appearing shyly, first appearance after dark nights |
| vol01_scene02_thin_body_puzzle.png | [CRESCENT] looking down at its own thin body, tilted head, puzzled expression, evening sky |
| vol01_scene03_small_among_stars.png | [CRESCENT] shrinking shyly among many brilliantly twinkling stars, feeling small, comparison composition |
| vol01_scene04_hiding_behind_cloud.png | [CRESCENT] half-hiding behind a soft cloud curtain, embarrassed expression, peeking out |
| vol01_scene05_bora_points_sky.png | view from sky: [BORA] standing in a garden pointing excitedly at the western twilight sky, jumping with joy |
| vol01_scene06_bora_makes_wish.png | [BORA] with hands together making a wish with closed eyes under the twilight sky, [CRESCENT] peeking out from behind cloud in surprise |
| vol01_scene07_touched_moon.png | close-up of [CRESCENT] coming out from behind the cloud, blushing cheeks, sparkling touched eyes, heart-warming moment |
| vol01_scene08_grandma_star_talks.png | [GRANDMA] talking gently to [CRESCENT], cozy night sky scene |
| vol01_scene09_seed_sprout_baby.png | [GRANDMA] speaking, a dreamy thought bubble showing a tiny seed, a small sprout, and a little baby, metaphor illustration |
| vol01_scene10_growth_preview.png | night sky showing dotted-line preview of moon phases gradually growing from thin crescent to full moon, hopeful future visualization |
| vol01_scene11_beautiful_curve.png | [CRESCENT] glowing confidently with its most beautiful curve, looking like a smiling mouth in the sky, elegant golden light |
| vol01_scene12_family_sky_smile.png | [BORA] and her mother looking up at the sky laughing together, the crescent moon above them like the sky is smiling, warm family moment |
| vol01_scene13_confident_crescent.png | confident [CRESCENT] shining proudly, surrounding stars twinkling like applause, joyful night sky celebration |
| vol01_scene14_window_wish_wink.png | view through a child's bedroom window: [BORA] making a wish toward the crescent moon, the moon winking back at her, cozy warm ending scene |

## 2권 『반쪽이 상현달』 — 15장 (하늘: deep navy early night sky)

| 파일명 | 프롬프트 (+[STYLE]) |
|---|---|
| vol02_cover_first_quarter.png | book cover, [HALF_R] smiling with its bright side, reflected in a mirror-like lake, navy night sky |
| vol02_scene01_phases_calendar.png | calendar-like row of moon shapes showing a thin crescent gradually growing thicker each night, gentle progression |
| vol02_scene02_mirror_pond.png | [HALF_R] surprised at its own reflection in a mirror-like pond, only right half glowing, deep navy early night sky |
| vol02_scene03_searching_dark_half.png | [HALF_R] patting and looking around its dark left half, worried searching expression |
| vol02_scene04_looking_everywhere.png | [HALF_R] lifting a cloud and peeking between stars, searching for its lost half, curious composition |
| vol02_scene05_bora_half_cookie.png | [BORA] with round open mouth pointing at the half moon, holding a half-eaten cookie, night garden |
| vol02_scene06_sad_half_moon.png | [HALF_R] drooping sadly, its dark half looking even darker, melancholy night sky |
| vol02_scene07_grandma_laughs.png | [GRANDMA] approaching with a kind knowing chuckle toward sad [HALF_R] |
| vol02_scene08_dark_half_outline.png | [GRANDMA] pointing as the dark half outline of the moon character glows faintly visible, gentle revelation moment |
| vol02_scene09_sunlight_reaches.png | distant warm sun light rays reaching the half moon character across the sky, explaining reflected light |
| vol02_scene10_half_full_cup.png | [GRANDMA] showing a cup half-filled with sparkling water, optimistic half-full metaphor, cozy scene |
| vol02_scene11_hugging_dark_half.png | [HALF_R] tenderly hugging its own dark half, warm self-acceptance moment |
| vol02_scene12_mom_moon_book.png | mother showing [BORA] a picture book about moon phases, cozy bedroom lamp light |
| vol02_scene13_bora_reaches_up.png | [BORA] on tiptoes stretching her hand up toward the half moon as if measuring height together, playful night scene |
| vol02_scene14_dream_of_full_moon.png | confident [HALF_R] shining, a dotted-line dream of a full moon ahead, hopeful ending |

## 3권 『둥근 보름달』 — 15장 (하늘: rich midnight blue sky)

| 파일명 | 프롬프트 (+[STYLE]) |
|---|---|
| vol03_cover_full_moon.png | book cover, [FULL] smiling warmly in the center of night sky, moonlit village below, harvest festival cozy mood |
| vol03_scene01_rising_full_moon.png | [FULL] rising majestically over a hill, grand and warm golden glow, rich midnight blue sky |
| vol03_scene02_spinning_joyful.png | [FULL] spinning around joyfully, sparkling light dust scattering, delighted expression |
| vol03_scene03_light_over_world.png | wide landscape of moonlight gently illuminating mountains, fields, village and sea at night |
| vol03_scene04_stars_celebrate.png | stars twinkling like fireworks celebrating around proud [FULL] |
| vol03_scene05_crying_in_forest.png | [RABBIT] lost and crying in a dark but not scary forest, soft shadows |
| vol03_scene06_lost_rabbit_closeup.png | close-up of teary [RABBIT] surrounded by gentle tree silhouettes |
| vol03_scene07_moonbeam_path.png | [FULL] leaning down to shine a silver spotlight beam on a forest path, [RABBIT] looking up with hopeful teary eyes, magical rescue moment |
| vol03_scene08_rabbit_hops_home.png | [RABBIT] hopping happily along a silver moonlit path, warm light of rabbit home in distance |
| vol03_scene09_rabbit_family_thanks.png | rabbit family waving thankfully toward the sky in front of their burrow |
| vol03_scene10_chuseok_family.png | korean family in hanbok gathered on a wooden bench in a yard with songpyeon rice cakes, Chuseok harvest festival night, [BORA] among them |
| vol03_scene11_family_wishes.png | the family together holding hands up in wishes toward [FULL] |
| vol03_scene12_wish_bubbles.png | soft wish speech-bubbles floating up from the village to [FULL] listening tenderly |
| vol03_scene13_sharing_light.png | moonlight spreading evenly to rabbit home, Bora's yard and night travelers, generous sharing composition |
| vol03_scene14_bora_moon_smile.png | happy face of [BORA] making eye contact with smiling [FULL], warm mutual smile ending |

## 4권 『느긋한 하현달』 — 15장 (하늘: soft indigo-to-pink dawn sky)

| 파일명 | 프롬프트 (+[STYLE]) |
|---|---|
| vol04_cover_last_quarter.png | book cover, [HALF_L] floating relaxed in a soft dawn sky with hints of morning light, peaceful smile |
| vol04_scene01_shrinking_surprise.png | [HALF_L] startled at its slightly shaved reflection in a mirror pond |
| vol04_scene02_shrinking_days.png | day-by-day sequence of the moon getting slimmer, moon character expression gradually worried |
| vol04_scene03_worried_blanket.png | worried half moon character hugging a cloud like a blanket |
| vol04_scene04_grandma_hug.png | [GRANDMA] warmly embracing the worried moon character, comforting scene |
| vol04_scene05_moon_cycle_rhythm.png | moon phases drawn in a gentle circle showing waxing and waning rhythm, like a cycle of seasons |
| vol04_scene06_breathing_together.png | [GRANDMA] and moon character breathing in and out together, soft flowing air arrows, calm meditation mood |
| vol04_scene07_pointing_dawn.png | [GRANDMA] pointing toward the dawn side of the sky, curious moon character looking |
| vol04_scene08_dawn_half_moon.png | [HALF_L] rising in a hushed early dawn sky over a quiet sleeping village |
| vol04_scene09_early_lights.png | view from sky of first lights turning on: a bakery window glowing and a milk delivery man setting out in dawn streets |
| vol04_scene10_milkman_smiles.png | a friendly milk delivery man on a bicycle looking up smiling at [HALF_L] in dawn sky |
| vol04_scene11_bakery_window.png | [HALF_L] seen through a steamy bakery window where a baker kneads dough, warm bread glow |
| vol04_scene12_lighting_dawn_workers.png | [HALF_L] softly lighting the paths of early morning workers, satisfied gentle smile |
| vol04_scene13_relaxed_dawn_moon.png | [HALF_L] reclining comfortably against the dawn sky, utterly relaxed pose |
| vol04_scene14_bora_morning_wave.png | [BORA] opening her window in early morning waving at the half moon, fresh dawn light |

## 5권 『새벽의 그믐달』 — 15장 (하늘: soft indigo-to-pink dawn sky, 동쪽)

| 파일명 | 프롬프트 (+[STYLE]) |
|---|---|
| vol05_cover_waning_crescent.png | book cover, [WANING] in the eastern dawn sky, calm mysterious mood, a bright morning star sparkling nearby |
| vol05_scene01_thread_thin_moon.png | [WANING] thin as a thread in dawn sky, curved opposite to the first crescent |
| vol05_scene02_lonely_dawn_glow.png | [WANING] glowing wistfully beside small dawn stars, quiet melancholy beauty |
| vol05_scene03_farewell_to_stars.png | [WANING] waving goodbye to stars and clouds, stars with teary sparkling eyes |
| vol05_scene04_venus_arrives.png | [VENUS] sparkling brightly approaching [WANING], dawn sky meeting |
| vol05_scene05_trembling_goodbye.png | [WANING] with head bowed sadly, [VENUS] tilting head curiously |
| vol05_scene06_venus_laughs_memory.png | [VENUS] giggling warmly, a thought bubble showing the same moon character sulking last month, gentle humor |
| vol05_scene07_cycle_diagram.png | flowing diagram of waning crescent, dark night, then new crescent, cycle of renewal illustration |
| vol05_scene08_new_clothes_curtain.png | imaginative scene of the moon character slipping behind a starry curtain and changing into sparkling new clothes |
| vol05_scene09_friends_beside_moon.png | [GRANDMA] and [VENUS] smiling warmly on both sides of [WANING] |
| vol05_scene10_graceful_thin_glow.png | [WANING] with brightened hopeful face, its thin body glowing elegantly |
| vol05_scene11_moonless_starry_night.png | moonless dark night sky filled with extra many bright stars, [BORA] tilting her head in her garden |
| vol05_scene12_mom_bora_window.png | [BORA] and her mother chatting cozily at the window about the resting moon |
| vol05_scene13_crescent_returns.png | thin new crescent moon character reappearing in purple-orange twilight western sky, [BORA] waving joyfully from her garden, reunion full of hope |
| vol05_scene14_phases_circle_finale.png | all moon phases from crescent to waning crescent holding hands dancing in a big circle, finale celebration night sky |

## 통합편 『달님이의 한 달 여행』 — 19장

| 파일명 | 프롬프트 (+[STYLE]) |
|---|---|
| vol06_cover_journey.png | book cover, five moon phases (crescent, half, full, half, thin crescent) holding hands in a big circle dance around [BORA] holding a telescope, celebration finale composition, magical night sky |
| vol06_scene01_classroom_homework.png | cheerful kindergarten classroom, teacher handing out moon observation diary notebooks, [BORA] excited |
| vol06_scene02_dark_sky_diary.png | [BORA] with a small telescope puzzled under a moonless starry night, drawing a black circle in her diary |
| vol06_scene03_first_crescent_found.png | thin crescent moon in purple twilight sky, [BORA] delightedly drawing a thin curve in her diary |
| vol06_scene04_crescent_winks.png | [CRESCENT] winking down at [BORA], playful connection |
| vol06_scene05_sunlight_growing.png | distant sun light rays reaching the moon character as it slowly fills out, soft light arrows |
| vol06_scene06_first_quarter_diary.png | [HALF_R] in southern night sky, Bora's diary page with a half moon drawing, deep navy sky |
| vol06_scene07_cheering_together.png | [BORA] at her window clenching fists cheering, [HALF_R] clenching fist back, mutual encouragement |
| vol06_scene08_full_moon_rises.png | wide panoramic composition, huge golden [FULL] rising over a hill, breathtaking warm night |
| vol06_scene09_moonlight_everyone.png | moonlight evenly covering a rabbit family, Bora's family yard and the whole village, warm sharing scene |
| vol06_scene10_sun_earth_moon.png | [BORA] drawing a simple cute diagram of sun, earth and moon positions in her diary |
| vol06_scene11_waning_relaxed.png | slightly slimmer moon character with an easygoing relaxed expression, unafraid this time |
| vol06_scene12_dawn_last_quarter.png | [HALF_L] in dawn sky, [BORA] in pajamas yawning while drawing it in her diary |
| vol06_scene13_dawn_workers_moon.png | [HALF_L] shining over a dawn bakery and a milk delivery bicycle |
| vol06_scene14_thin_farewell_wave.png | [WANING] waving gently in the eastern dawn sky, see-you-soon mood |
| vol06_scene15_diary_full_month.png | open diary filled with a whole month of moon drawings from crescent to waning crescent, proud [BORA] |
| vol06_scene16_drawings_become_moon.png | magical scene of the diary's moon drawings glowing and merging into one moon character |
| vol06_scene17_all_phases_expressions.png | all moon phase shapes arranged in a glowing circle like different expressions of one character |
| vol06_scene18_bora_offers_diary.png | [BORA] holding out an empty moon observation diary toward the reader, tonight's moon smiling in the sky |

---

## 생성 후 마무리 절차

1. 위 94장 생성 → `02_moon/illustrations_16x9/`에 저장 (파일명 정확히 일치)
2. `viewer/books/manifest.js`에 달님이 시리즈 블록 추가 (아래 복사):

```js
{
  series: "달님이 이야기",
  seriesIcon: "🌙",
  books: [
    { id: "moon-vol01", volume: "1권", title: "가느다란 초승달", lesson: "작은 시작도 아름답다",
      cover: "../02_moon/illustrations_16x9/vol01_cover_crescent.png", available: true },
    { id: "moon-vol02", volume: "2권", title: "반쪽이 상현달", lesson: "지금은 자라는 중 — 과정의 가치",
      cover: "../02_moon/illustrations_16x9/vol02_cover_first_quarter.png", available: true },
    { id: "moon-vol03", volume: "3권", title: "둥근 보름달", lesson: "가득 찼을 때 나누는 마음",
      cover: "../02_moon/illustrations_16x9/vol03_cover_full_moon.png", available: true },
    { id: "moon-vol04", volume: "4권", title: "느긋한 하현달", lesson: "줄어드는 것도 자연스러워",
      cover: "../02_moon/illustrations_16x9/vol04_cover_last_quarter.png", available: true },
    { id: "moon-vol05", volume: "5권", title: "새벽의 그믐달", lesson: "끝은 새로운 시작",
      cover: "../02_moon/illustrations_16x9/vol05_cover_waning_crescent.png", available: true },
    { id: "moon-vol06", volume: "통합편", title: "달님이의 한 달 여행", lesson: "변화의 순환 — 모든 모습의 나가 소중해",
      cover: "../02_moon/illustrations_16x9/vol06_cover_journey.png", available: true }
  ]
}
```

3. `viewer/sw.js`: `SHELL`에 `"./books/moon-vol01.js"` ~ `moon-vol06.js` 추가하고 `CACHE_VERSION` 올리기
4. git 커밋 & 푸시 → 1~2분 후 사이트 반영
