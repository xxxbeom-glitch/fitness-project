# CURRENT — Fitness Project

**Updated:** 2026-09-01

## Current mode

`PRODUCT / UX PLANNING — RECOMMENDATION SYSTEM V1 · FIRST-RUN ONBOARDING DESIGN ACTIVE`

현재 실행 초점은 **신규 사용자 onboarding과 추천 루틴 시스템의 입력/매칭 규칙을 먼저 확정하는 것**이다.

Top-level IA와 active-workout navigation/state 규칙은 이미 확정되어 있으며 그대로 유지한다. 추천 시스템의 upstream logic이 충분히 설계되기 전에는 추천 결과 화면이나 추가 Figma screen production을 앞서 진행하지 않는다.

No Cursor implementation task is authorized at this stage.

## Product / planning authority

기획·UX·와이어프레임 작업 공통 진입점:
- `product/README.md`

Canonical product/planning sources:
- `docs/08_DECISIONS.md`
- `docs/13_SCREEN_DESIGN_DECISIONS.md`
- `docs/14_IA_STORYBOARD.md`
- `docs/23_RECOMMENDATION_SYSTEM_V1.md` — current recommendation-system working source
- `docs/09_TECHNICAL_STACK.md`

## Current first-run / recommendation rules

Confirmed / current baseline:

- authentication required
- onboarding is shown only for a genuinely new account that has not completed first-run setup
- returning account login, reinstall, or another-device login skips onboarding and goes directly to Home
- incomplete first-run onboarding resumes from persisted account state
- first-run offers two equal primary paths: `추천 루틴 받기 / 내 루틴 직접 만들기`
- initial recommendation inputs are:
  1. goal
  2. training experience
  3. weekly training availability
  4. preferred workout duration
- the four recommendation inputs are **not four full-screen wizard steps**
- after choosing recommendation, the user sees one `추천 루틴 설정` screen containing all four rows
- tapping a row opens a bottom sheet; after selection the user returns to the same settings screen
- the recommendation CTA remains disabled until all four values are present
- confirmed training-experience choices:
  - `처음이에요`
  - `6개월 미만이에요`
  - `6개월~1년 미만이에요`
  - `1년 이상이에요`
- experience is a supporting matcher signal; `1년 이상` does not automatically mean advanced lifter
- confirmed weekly-availability choices: `1일 / 2일 / 3일 / 4일 / 5일 / 6일 / 7일`
- weekly availability means the **maximum realistic number of days the user can train**, not the exact number the app must prescribe
- the matcher may prescribe fewer sessions but must never prescribe more than the selected maximum
- the onboarding input captures day count only; specific weekday assignment remains optional later
- confirmed experience-based weekly resistance-training ceilings:
  - `처음이에요` → 최대 3회
  - `6개월 미만이에요` → 최대 4회
  - `6개월~1년 미만이에요` → 최대 5회
  - `1년 이상이에요` → 최대 6회
- baseline ceiling rule: `min(user weekly availability, experience cap)`
- this is a ceiling rather than a requirement to always prescribe the maximum; later goal/duration/template rules may prescribe fewer sessions
- equipment inventory is excluded from the initial recommendation intake
- initial recommendation is gym-first and assumes a broadly equipped commercial-gym context
- equipment mismatch is handled later through practical exercise substitution
- recommendation uses curated / QA-reviewed template matching rather than free-form LLM generation
- sex/gender and age are collected in the broader new-user onboarding as profile / future advertising-segmentation data, not as recommendation matcher inputs
- sex/gender and age are not used to guess a starting working weight
- first-load calibration happens in the actual first workout

Still open:
- exact sex/gender and age field shape / consent treatment
- final goal options and what each option changes in the training program
- other downstream effects of each confirmed experience band beyond the frequency ceiling
- prescribed weekly frequency -> split / routine-count mapping
- workout duration -> exercise/set budget mapping
- recommendation output contract
- deterministic template matching / tie-break rules
- substitution rules
- recommendation-result presentation

## Confirmed IA / active-workout rules

Confirmed in `docs/14_IA_STORYBOARD.md` and retained:
- primary bottom navigation: `홈 / 루틴 / 분석 / 설정`
- exercise library is contextual, not a standalone primary tab
- user-facing saved routines are independent daily routines; no mandatory higher-level program container
- active workout keeps the primary bottom navigation visible
- Home alone exposes the persistent active-workout return state
- 루틴 / 분석 / 설정 remain visually normal during an active workout
- only one active workout session exists at a time
- starting another routine while one is active asks the user how to handle the current record: save partial work / discard / cancel
- a partial save stores only actually completed sets/exercises; unperformed planned work is excluded
- History/Analysis marks that record as a partial record rather than a fully completed planned routine
- structural changes made inside an active workout apply immediately to the current session
- at workout completion, if the structure differs from the saved source routine, the app asks whether the saved routine should also be updated
- load/reps changes are workout-performance records and do not trigger the saved-routine update prompt
- while a workout is active, the Routine tab remains browseable but saved routine creation/edit/delete is locked
- current-session exercise add/remove/replace, reorder, and planned set-count changes remain available inside the active-workout screen

## Canonical wireframe / visual references

GitHub canonical wireframe source:
- `product/wireframe/index.html`
- deployment / validation rules: `product/wireframe/README.md`
- machine-readable Vercel binding: `product/wireframe/PROJECT_BINDING.json`

Canonical Product Owner-facing runtime:
- `https://liftly-wireframe.vercel.app`

Canonical Figma:
- `https://www.figma.com/design/W3lZurXCXbThP67rF2xk2b/LIFTLY_%EC%B5%9C%EC%A2%85?node-id=0-1&t=59Hp4z7hcHf5nNL5-1`

Use the one fixed web artifact for cumulative wireframe review. Do not create separate Product Owner-facing wireframe URLs for individual questions.

The current wireframe visual baseline follows the Figma system already inspected: SUIT, dark background/surface tokens, `#34D399` primary, 20px side padding, 12px standard radius, 58px CTA, and the existing unit-settings bottom-sheet pattern.

## Current next action

Continue `docs/23_RECOMMENDATION_SYSTEM_V1.md` one decision at a time.

Next decision:
1. map prescribed weekly frequency `1–6회` to default routine split / routine count

Then continue:
2. workout-duration mapping
3. exact effects of experience bands / goal choices where still open
4. recommendation output contract
5. matcher / substitutions
6. recommendation result UX
7. first-workout handoff / load calibration

Candidate goal choices remain a working proposal until explicitly confirmed:
- 근육 증가
- 근력 향상
- 체지방 감량
- 건강·체력 향상

Do not return to recommendation-result A/B/C presentation until the upstream recommendation rules are defined.

Exercise DB normalization and Planfit gap analysis remain backlog work and do not block this sequence.

## Visual-system authority

The previously completed Tonal Phase-A baseline remains valid when Figma execution resumes:
- `docs/15_TONAL_DESIGN_SYSTEM_SPEC.md`
- `docs/16_FIGMA_TONAL_BUILD_INSTRUCTIONS.md`
- `docs/17_FIGMA_AGENT_EXECUTION_QA.md`
- `docs/21_TONAL_PRODUCT_PATTERNS_AUDIT.md`
- `docs/22_TONAL_PREFIGMA_CONSOLIDATION_QA.md`

Latest completed design-system QA remains PASS through F5 revalidation.

## Canonical source rule

GitHub remains the Source of Truth for product policy, decisions, IA/storyboard state, recommendation rules, execution rules, QA state, and next action.

For planning/wireframe work, `product/README.md` is the stable entry point and `product/wireframe/index.html` is the canonical web-wireframe source. Runtime deployment is never allowed to become a separate source of truth.
