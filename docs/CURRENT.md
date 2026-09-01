# CURRENT — Fitness Project

**Updated:** 2026-09-01

## Current mode

`PRODUCT / UX PLANNING — FIRST-RUN ONBOARDING WIREFRAME UPDATED · SPLIT MAPPING ON HOLD`

현재 실행 초점은 **신규 사용자 onboarding의 확정 흐름을 canonical wireframe에 반영한 상태를 유지하는 것**이다.

Top-level IA와 active-workout navigation/state 규칙은 기존 확정안을 그대로 유지한다. Cursor implementation은 아직 승인되지 않았다.

## Product / planning authority

기획·UX·와이어프레임 작업 공통 진입점:
- `product/README.md`

Canonical sources:
- `docs/08_DECISIONS.md`
- `docs/13_SCREEN_DESIGN_DECISIONS.md`
- `docs/14_IA_STORYBOARD.md`
- `docs/23_RECOMMENDATION_SYSTEM_V1.md`
- `product/wireframe/index.html`
- `product/wireframe/README.md`

## Current confirmed onboarding flow

New account:

`로그인 -> 기본정보 -> 시작 방식 -> 추천 설정 1화면`

Existing account:

`로그인 -> Home`

Incomplete first-run onboarding resumes from persisted account state.

### Start mode

Equal first-run paths:

- `추천 루틴 받기`
- `내 루틴 직접 만들기`

### Recommendation settings interaction

The recommendation path uses one settings screen, not four full-screen questions.

Rows:

1. 운동 목표
2. 운동 경력
3. 주당 가능일
4. 운동 시간

Each row opens a bottom sheet. All four values remain visible together and editable. `내 루틴 추천받기` stays disabled until all four are populated.

### Confirmed training-experience choices

- `처음이에요`
- `6개월 미만이에요`
- `6개월~1년 미만이에요`
- `1년 이상이에요`

### Confirmed weekly availability

Options:

`1일 / 2일 / 3일 / 4일 / 5일 / 6일 / 7일`

Meaning:

- maximum realistic number of days the user can make available
- not the exact number the app must prescribe
- specific weekday assignment is not required during onboarding

### Confirmed experience-based frequency ceiling

- 처음 -> max 3/week
- < 6 months -> max 4/week
- 6 months to < 1 year -> max 5/week
- 1+ year -> max 6/week

Baseline ceiling:

`min(user weekly availability, experience cap)`

This remains a ceiling only.

## Explicit hold

Product Owner requested that the following work **stop for now**:

- prescribed weekly frequency -> routine split / routine count mapping
- previously discussed 1–6 day split table

Do not continue or wireframe this mapping until Product Owner explicitly resumes it.

## Canonical wireframe

GitHub source:
- `product/wireframe/index.html`

Current version:
- `2026-09-01.2`

Production:
- `https://liftly-wireframe.vercel.app`

The current wireframe intentionally visualizes **onboarding only**:

- login
- basic profile information
- start mode
- recommendation settings list
- confirmed training-experience bottom sheet
- confirmed weekly-availability 1–7 day bottom sheet
- completed-input CTA state

It intentionally does not show recommendation-result details or routine-split mapping yet.

Canonical Figma:
- `https://www.figma.com/design/W3lZurXCXbThP67rF2xk2b/LIFTLY_%EC%B5%9C%EC%A2%85?node-id=0-1&t=59Hp4z7hcHf5nNL5-1`

## Still open, but not automatically continued

- sex/gender and age exact field shape / consent treatment
- final goal options and program effects
- workout-duration choices / volume budget
- other experience effects beyond frequency ceiling
- split/routine-count mapping — **ON HOLD**
- recommendation output contract
- deterministic template matching / substitutions
- recommendation-result UX
- first-workout handoff / load calibration

## Existing IA / workout rules remain valid

- primary bottom navigation: `홈 / 루틴 / 분석 / 설정`
- exercise library is contextual, not a primary tab
- one active workout at a time
- active session survives restart until finish/discard
- Home exposes active-workout return state
- Routine/Analysis/Settings remain usable while workout is active under existing lock rules
- structural edits during workout apply to current session and may prompt saved-routine update at completion
- load/reps changes are performance records and do not trigger routine-structure update prompts

## Canonical source rule

GitHub remains Source of Truth. For planning/wireframe work, start from `product/README.md`. `product/wireframe/index.html` is the canonical web-wireframe source; Vercel runtime is never a separate source of truth.
