# 23 RECOMMENDATION SYSTEM V1

**Status:** IN PROGRESS · ONBOARDING INPUT BASELINE COMPLETE · RESULT CAROUSEL BASELINE CONFIRMED · EXIT PATH FOLLOW-UP · SPLIT MAPPING ON HOLD
**Updated:** 2026-09-01

## Purpose

Define the recommendation system before implementation. Screen-level UX must not outrun confirmed product rules.

## First-run eligibility gate — CONFIRMED

Onboarding is shown only for a genuinely new Fitness account that has not completed first-run setup.

- new account, first successful login -> first-run onboarding
- existing account that already completed onboarding -> Home
- reinstall / relogin / another device does not make existing account new
- incomplete onboarding resumes from persisted account/onboarding state

## Recommendation intake baseline — CONFIRMED

Initial recommendation inputs:

1. goal
2. training experience
3. weekly training availability
4. preferred workout duration

Equipment inventory is not collected during initial intake. Initial recommendation is gym-first and assumes a broadly equipped commercial gym; equipment mismatch is handled later through substitution.

## Recommendation intake interaction — CONFIRMED

The four recommendation inputs are **not four consecutive full-screen onboarding steps**.

After `추천 루틴 받기`, the app opens one `추천 루틴 설정` screen with four rows:

- 운동 목표
- 운동 경력
- 주당 가능일
- 운동 시간

Interaction:

- row tap -> bottom sheet
- select value -> return to same settings screen
- selected value appears inline and can be changed again
- all four values remain visible together
- `내 루틴 추천받기` is disabled until all four required values exist
- once complete, CTA becomes active

The sheet reuses the established Figma unit-settings pattern: dim overlay, 32px top corners, 20px horizontal padding, 52px option rows, standard 58px CTA.

## Goal — CONFIRMED

User-facing options:

1. `근육 증가`
2. `체지방 감량`
3. `건강·체력 향상`

Product decision:

- `근육 증가` and `근력 향상` are not exposed as two separate first-run goal choices
- `근육 증가` is retained as the single muscle/performance-oriented onboarding goal
- `근력 향상` remains important in workout progression, but is handled later through load/repetition history and progression behavior rather than a separate onboarding branch
- this is a product-taxonomy simplification for MVP; it does **not** claim that hypertrophy and maximal-strength programming are physiologically identical
- exact downstream program differences among the three confirmed goals still need to be defined before implementation

## Training experience — CONFIRMED

User-facing options:

1. `처음이에요`
2. `6개월 미만이에요`
3. `6개월~1년 미만이에요`
4. `1년 이상이에요`

Intent:

- segment the first year more closely
- keep `1년 이상` broad for MVP
- experience is a supporting signal, not a complete skill/strength classification
- `1년 이상` does not automatically mean advanced lifter

### Experience-based weekly frequency ceiling — CONFIRMED

| Training experience | Maximum prescribed resistance-training sessions / week |
|---|---:|
| `처음이에요` | 3 |
| `6개월 미만이에요` | 4 |
| `6개월~1년 미만이에요` | 5 |
| `1년 이상이에요` | 6 |

Baseline ceiling:

`frequency ceiling = min(user weekly availability, experience cap)`

This is a ceiling, not a requirement to always prescribe the ceiling.

## Weekly availability — CONFIRMED

Question meaning:

`일주일에 현실적으로 최대 며칠까지 운동할 수 있나요?`

Options:

`1일 / 2일 / 3일 / 4일 / 5일 / 6일 / 7일`

Semantics:

- selected value = maximum realistic weekly availability
- it is not the exact number the app must prescribe
- prescribed training days must never exceed the selected maximum
- no specific weekday selection is required in this onboarding step
- weekday scheduling remains optional later

## Workout duration — CONFIRMED

Question meaning:

`한 번 운동할 때 현실적으로 얼마나 시간을 쓸 수 있나요?`

Options:

- `30분`
- `45분`
- `60분`
- `90분 이상`

Semantics:

- selected value = the user's realistic **maximum resistance-training session time**
- the value is a planning budget, not a promise that every session must last exactly that long
- set-to-set rest time is included in this budget
- separate cardio time is not included in this onboarding value
- the matcher may create a shorter session when appropriate, but should not routinely design a session that exceeds the selected time budget
- exact exercise-count / set-count allocation for each time bucket remains a later program-design decision

## Demographic profile data — CONFIRMED FIELD + CONTROL SHAPE / SEPARATE FROM MATCHER

The broader new-user profile onboarding collects the following required demographic/profile values:

- sex: `남성 / 여성`
- birth date: full date of birth rather than age band or manually entered current age

Confirmed control behavior:

- sex is selected directly with two equal-width buttons using the existing 52px control height
- no bottom sheet/dropdown is used for sex
- there is no `응답 안 함` option
- birth date uses the existing input visual as a text field
- no right-side chevron/arrow is shown on birth date
- placeholder/example: `1999-01-01`
- intended primary format: `YYYY-MM-DD`

Product rules:

- sex and birth date are collected only in first-run profile onboarding and persisted to the account
- returning users are not asked again merely because they relogin, reinstall, or use another device
- sex and birth date are **not recommendation-matcher inputs** at this stage
- they are not used to guess starting working weight
- birth date may later support age calculation / age policy / audience segmentation, but the recommendation system must not present it as a training-quality input unless a later decision creates a real program effect

Detailed input masking/validation/error behavior remains implementation follow-up and does not block moving to the next product area.

## Legal / privacy / minimum-age — FINAL POLICY PASS LATER

Product Owner explicitly deferred these items so current planning can move on:

- minimum account age / age restriction
- service Terms acknowledgement placement
- Privacy Policy / personal-data disclosure placement
- Google/Kakao provider consent versus Fitness-owned legal/privacy notices
- whether legal/privacy treatment can be integrated into the basic-information step without a separate standalone legal screen

Current working direction is to avoid an unnecessary standalone legal screen if the required disclosure/acknowledgement can be integrated cleanly into the basic-information step, but this is **not yet final policy**.

These items must be reviewed together before implementation/release is finalized.

## Recommendation result experience — CONFIRMED BASELINE

After all four recommendation inputs are complete, the recommendation branch does **not** save a routine immediately and does **not** enter Home yet.

Acceptance flow:

`추천 설정 완료 -> 추천 결과 전용 화면 -> 3개 후보를 카드 캐러셀로 비교 -> 이 루틴으로 시작하기 -> 선택한 프로그램 저장 -> Home`

### Result screen identity

The recommendation result is a **dedicated first-run selection experience**, visually distinct from both:

- onboarding input screens
- the normal Home / bottom-navigation app shell

Before the user accepts one candidate:

- no recommended program is saved to `내 루틴`
- the normal Home layout is not shown
- bottom navigation is not required on the result-selection screen

### Result header — CONFIRMED SHAPE

Keep the top of the result screen deliberately simple.

- one primary head copy remains
- onboarding-condition chips are removed from the result header
- small eyebrow / extra supporting description are not required there
- candidate frequency/time details can live in the program card itself rather than being repeated above it

### Three-candidate model

Show **three curated candidates** that are all valid for the user's collected constraints and training-experience safety envelope.

Current baseline candidate types:

1. `기본형` — balanced default; can carry a provisional `가장 추천` treatment
2. `간결형` — fewer decisions / simpler and shorter session emphasis
3. `볼륨형` — more training-volume emphasis while remaining inside the same user's allowed experience/time constraints

Important rule:

- these are **not** `초급 / 중급 / 고급` choices
- a user must not bypass the experience-based safety/complexity envelope by swiping to a harder candidate
- all three candidates are pre-filtered to remain appropriate for the same user

The exact user-facing candidate names/copy may be refined, but the three-safe-variant model is the approved baseline.

### Carousel interaction

- one candidate card is active at a time
- the active candidate uses **nearly the full available content width** so the program itself is the dominant object on the screen
- previous side-peek treatment is removed; adjacent candidate cards do not need to remain partially visible
- horizontal swipe/drag changes the active candidate
- pagination indicates `1 / 3`, `2 / 3`, `3 / 3` and provides the discoverability signal for additional candidates
- the bottom CTA applies to the currently active candidate
- primary CTA: `이 루틴으로 시작하기`
- back navigation may return to recommendation settings for changes
- internal program-day switching is done with explicit DAY controls rather than a second horizontal-swipe layer, avoiding nested horizontal-gesture conflict

### Candidate card content — CONFIRMED SHAPE

The candidate card must show **the actual workout prescription**, not only abstract descriptors such as `balanced`, `simple`, or `higher volume`.

For a multi-day candidate, the card must let the user inspect each training day before acceptance.

Required card information shape:

- candidate type/name
- weekly frequency / expected session-time context
- day selector such as `DAY 1 / DAY 2 / DAY 3` when the candidate contains multiple sessions
- actual exercise names for the selected day
- prescription for each exercise in a compact format such as `8–12회 × 3세트` or another program-defined repetition/set prescription
- exercise rows should optimize scan speed: exercise name on the left, repetition × set prescription on the right where space allows
- CTA remains outside/below the program-content area and applies to the whole active candidate

The card should make the practical question **“그래서 실제로 무슨 운동을 하게 되는가?”** answerable before the user accepts the program.

The recommendation result must not force the user to accept a candidate based only on marketing-style summaries.

Exact exercise names, exercise order, repetition targets, set counts, and day composition shown in the current wireframe are **illustrative placeholders** until program-template rules and the exercise DB are finalized. The UX requirement to expose the prescription is confirmed; the sample prescription itself is not product policy.

### Recommendation result exit / skip — REQUIREMENT IDENTIFIED · DETAIL OPEN

The user must not be trapped into accepting one of the three recommendation candidates.

Confirmed requirement:

- if none of the candidates is wanted, the user needs a path to leave the recommendation-result selection without accepting a candidate
- leaving/skipping must **not** automatically save any candidate to `내 루틴`

Not yet confirmed:

- exact user-facing label such as `건너뛰기`
- exact placement of that control
- whether skip goes directly to a routine-empty Home
- whether confirmation is needed
- where `추천 다시 받기` is exposed later in Home/Routine
- whether the current `추천 조건 수정` secondary action remains or is replaced by back navigation

Working direction for next review:

`추천 결과 -> 선택 안 함/건너뛰기 -> 추천 프로그램 미저장 상태로 first-run recommendation selection 종료 -> 이후 추천 다시 받기 가능`

This direction is intentionally **not final policy yet**; the exact post-skip state must be confirmed in the next planning pass.

### What may differ between the three candidates

The candidate variants may differ in parameters such as:

- simplicity / exercise-selection breadth
- session density
- weekly set-volume emphasis
- exercise count / set allocation within the selected duration budget

Exact parameter ranges are **not yet confirmed**. They must be defined together with duration budgeting, exercise DB, program-template QA, and recovery constraints.

### Example-only wireframe frequency

The current result wireframe may use a `주 3일` example to communicate the card concept.

This is **not** a confirmation that any specific onboarding answer maps to three prescribed days, and it does not resume the held `prescribed frequency -> routine split / routine count` decision.

## Superseded legacy recommendation-result clauses

This 2026-09-01 result baseline supersedes only the older presentation clauses that said the app shows **one single recommended routine** before acceptance.

Retained from the older Decisions:

- recommendations still come from curated / QA-reviewed templates, not free-form LLM generation
- structured onboarding inputs still drive matching
- weekday scheduling remains optional
- after the user explicitly accepts a candidate, the selected program is saved and the user proceeds to Home

Therefore the `one primary recommended routine` wording in DEC-006 and the `single recommended routine` wording in DEC-014 are legacy presentation details and must not be used to override this newer result policy.

## Current wireframe scope

Canonical wireframe visualizes:

`로그인 -> 기본정보 -> 시작 방식 -> 추천 설정 -> 추천 결과 캐러셀 검토안`

It includes:

- basic profile controls: equal-width `남성 / 여성` buttons + birth-date text field `1999-01-01`
- confirmed goal options `근육 증가 / 체지방 감량 / 건강·체력 향상`
- confirmed training-experience options
- confirmed weekly-availability 1–7 day sheet
- confirmed workout-duration `30 / 45 / 60 / 90분 이상` sheet
- recommendation-result carousel structure with three safe candidate types
- minimal result header with one main head copy
- one near-full-content-width active program card at a time
- day selector + visible exercise/prescription list inside each candidate card

Current production wireframe version: `2026-09-01.11`.

Important checkpoint:

- the newly identified recommendation-result skip/exit requirement is **documented but not yet visualized** in the current wireframe
- result-card detailed visual polish is intentionally deferred

It intentionally does **not** finalize:

- prescribed frequency -> routine split / routine count
- exact day-by-day exercise composition
- exact exercise/set volume derived from workout duration
- final parameter differences among `기본형 / 간결형 / 볼륨형`
- post-acceptance / post-skip Home default-state design
- exact skip UI and post-skip state

## Product Owner hold — 2026-09-01

`prescribed weekly frequency -> routine split / routine count` mapping is **ON HOLD** by Product Owner request.

Do not continue or wireframe the previously discussed 1–6 day split table until Product Owner explicitly resumes this decision.

The already-confirmed experience-based frequency ceilings remain recorded policy; only the downstream split mapping is paused.

## Remaining recommendation-system decisions

Immediate resume point:

- recommendation-result skip/exit action and post-skip state

Deferred after that:

- exact downstream program effects of the confirmed goal choices
- other downstream effects of experience bands beyond weekly ceiling
- prescribed frequency -> routine split / routine count **ON HOLD**
- workout duration -> exact exercise/set budget
- exact differentiation rules for `기본형 / 간결형 / 볼륨형`
- deterministic template matching / tie-break rules
- substitution rules
- first-workout handoff / load calibration
- result-card detailed visual polish

## Deferred non-matcher policy

- onboarding legal/privacy/minimum-age final policy pass

## Constraints retained

- recommendation and self-build remain equal first-run entry modes
- recommendation uses curated / QA-reviewed templates, not free-form LLM generation
- weekday assignment remains optional
- initial recommendation remains gym-first
- starting working weight is not guessed from sex/gender
- first-load calibration happens inside the actual workout
- recommendations should favor common, understandable gym movements and practical substitutions
- accepted recommended routines converge into the same routine/workout/history system as self-built routines
