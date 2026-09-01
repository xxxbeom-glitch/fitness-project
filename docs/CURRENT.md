# CURRENT — Fitness Project

**Updated:** 2026-09-01

## Current mode

`PRODUCT / UX PLANNING — HOME DEFAULT-STATE WIREFRAME REVIEW · ONBOARDING BASELINE COMPLETE`

신규 사용자 onboarding의 핵심 구조와 입력 UX는 현재 기준으로 충분히 확정했다. 현재 기획 초점은 **활성 운동이 없는 Home 기본 상태**다.

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

## Onboarding baseline — COMPLETE FOR CURRENT PLANNING PASS

New account:

`로그인 -> 기본정보 -> 시작 방식 -> 추천 설정 1화면`

Existing account:

`로그인 -> Home`

Incomplete first-run onboarding resumes from persisted account state.

### Basic profile information

Confirmed required fields:

- 성별: `남성 / 여성`
- 생년월일: 실제 full date of birth

Confirmed controls:

- 성별은 bottom sheet/dropdown이 아니라 **기존 52px 높이 영역을 2등분한 남성/여성 버튼**으로 직접 선택
- 두 성별 버튼은 동일한 너비/높이를 사용
- `응답 안 함` 옵션 없음
- 생년월일은 **기존 input visual을 유지한 텍스트필드**
- 생년월일 필드의 우측 화살표/chevron 없음
- placeholder/example: `1999-01-01`
- primary input format intent: `YYYY-MM-DD`
- 현재 나이 직접 입력이나 연령대가 아니라 생년월일을 저장
- 성별/생년월일은 추천 matcher와 분리
- 시작 중량 추정에 사용하지 않음
- 재로그인/재설치/다른 기기 로그인만으로 다시 입력시키지 않음

Implementation-detail follow-up:

- input masking / invalid-date / future-date / field error behavior
- exact keyboard behavior

These do not need additional Product Owner planning before moving to the next product area.

### Legal / privacy / minimum-age policy — DEFERRED TO FINAL ONBOARDING POLICY PASS

Do not block current product planning on this now.

Still to decide near implementation/release:

- minimum account age / age restriction
- Terms of Use acknowledgement placement
- Privacy Policy / personal-data disclosure placement
- whether required legal/privacy treatment is fully integrated into the basic-information screen or needs any separate confirmation state
- exact handling of Google/Kakao provider consent versus Fitness-owned terms/privacy notices

Current working direction only, **not final policy**:

- avoid adding an unnecessary standalone legal screen if the required disclosure/acknowledgement can be cleanly integrated into the basic-information step
- final legal/privacy structure must be reviewed as one package before release

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

Because recommendation-result composition depends on this downstream program structure, do not force recommendation-result UX ahead of the held mapping.

## Canonical wireframe

GitHub source:
- `product/wireframe/index.html`

Current version:
- `2026-09-01.7`

Production:
- `https://liftly-wireframe.vercel.app`

The wireframe now contains:

### Confirmed onboarding baseline

- login
- basic profile information: segmented `남성 / 여성` + text-field birth date with `1999-01-01` placeholder
- start mode
- recommendation settings list
- confirmed goal / experience / weekly availability / workout-duration sheets
- completed-input CTA state

Do not keep expanding onboarding wireframes unless a later policy decision materially changes the flow.

### Home default-state review — NOT CONFIRMED

Four review states are shown together for Product Owner discussion:

1. **추천 루틴 있음 + 요일 스케줄 없음**
   - `다음 운동` primary card
   - intended only when a recommended/internal sequence actually defines a next session

2. **요일 스케줄 있음**
   - `오늘의 운동` primary card
   - next scheduled session shown as secondary information

3. **직접 만든 독립 루틴만 있음**
   - app does not invent a `다음 운동`
   - Home emphasizes quick selection/start from `내 루틴`

4. **루틴 없음**
   - empty state
   - `추천 루틴 받기 / 직접 루틴 만들기` remain equal choices

These are review proposals only. Do **not** write them into Screen Decision policy as confirmed until Product Owner explicitly chooses the Home behavior.

Canonical Figma:
- `https://www.figma.com/design/W3lZurXCXbThP67rF2xk2b/LIFTLY_%EC%B5%9C%EC%A2%85?node-id=0-1&t=59Hp4z7hcHf5nNL5-1`

## Current Home decision to discuss

The next decision should be made from the new wireframe rather than abstract discussion:

- should Home be primarily a **workout-start surface**?
- when is the app allowed to name one routine as `다음 운동`?
- should `오늘의 운동` appear only when a weekday schedule actually exists?
- for independent self-built routines, should Home present quick routine choices instead of guessing a next routine?

Already confirmed and not reopened:

- primary bottom navigation: `홈 / 루틴 / 분석 / 설정`
- if a workout is active, Home exposes a persistent one-tap return state
- active-workout return UI appears on Home only

## Open later, but not part of the immediate Home decision

- onboarding legal/privacy/minimum-age final policy pass
- exact program effects of each confirmed goal
- workout-duration -> exact exercise/set budget
- other experience effects beyond frequency ceiling
- split/routine-count mapping — **ON HOLD**
- recommendation output contract
- deterministic template matching / substitutions
- recommendation-result UX
- first-workout handoff / load calibration

## Existing IA / workout rules remain valid

- exercise library is contextual, not a primary tab
- one active workout at a time
- active session survives restart until finish/discard
- Routine/Analysis/Settings remain usable while workout is active under existing lock rules
- structural edits during workout apply to current session and may prompt saved-routine update at completion
- load/reps changes are performance records and do not trigger routine-structure update prompts

## Canonical source rule

GitHub remains Source of Truth. For planning/wireframe work, start from `product/README.md`. `product/wireframe/index.html` is the canonical web-wireframe source; Vercel runtime is never a separate source of truth.
