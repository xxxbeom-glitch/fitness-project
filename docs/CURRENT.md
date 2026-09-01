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

### Basic profile information

Confirmed required fields:

- 성별: `남성 / 여성`
- 생년월일: 실제 full date of birth

Rules:

- `응답 안 함` 옵션 없음
- 현재 나이 직접 입력이나 연령대가 아니라 생년월일을 저장
- 성별/생년월일은 추천 matcher와 분리
- 시작 중량 추정에 사용하지 않음
- 재로그인/재설치/다른 기기 로그인만으로 다시 입력시키지 않음
- 생년월일 입력 UI 컨트롤의 세부 방식은 후속 UI/구현 단계에서 정할 수 있음
- 최소 연령, 개인정보 고지/동의, 향후 광고 활용 정책은 별도 오픈 이슈

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

### Confirmed goal choices

- `근육 증가`
- `체지방 감량`
- `건강·체력 향상`

`근력 향상` is not a separate first-run goal. Strength progression is handled later through load/repetition history and progression behavior. This is an MVP taxonomy simplification, not a claim that hypertrophy and strength programming are identical.

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

### Confirmed workout duration

Options:

`30분 / 45분 / 60분 / 90분 이상`

Meaning:

- maximum realistic resistance-training session time
- includes set-to-set rest
- excludes separate cardio time
- acts as a planning budget; a recommended session may be shorter
- exact exercise-count / set-count budget per option remains a later decision

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
- `2026-09-01.5`

Production:
- `https://liftly-wireframe.vercel.app`

The current wireframe intentionally visualizes **onboarding only**:

- login
- basic profile information: `성별(남성/여성) + 생년월일`
- start mode
- recommendation settings list
- confirmed goal bottom sheet: `근육 증가 / 체지방 감량 / 건강·체력 향상`
- confirmed training-experience bottom sheet
- confirmed weekly-availability 1–7 day bottom sheet
- confirmed workout-duration `30 / 45 / 60 / 90분 이상` bottom sheet
- completed-input CTA state

It intentionally does not show recommendation-result details or routine-split mapping yet.

Canonical Figma:
- `https://www.figma.com/design/W3lZurXCXbThP67rF2xk2b/LIFTLY_%EC%B5%9C%EC%A2%85?node-id=0-1&t=59Hp4z7hcHf5nNL5-1`

## Still open, but not automatically continued

- privacy/consent/minimum-age policy for sex and birth date
- exact program effects of each confirmed goal
- workout-duration -> exact exercise/set budget
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
