# MVP Implementation Handoff

**Status:** SCREEN DESIGN FROZEN · CURSOR HANDOFF PREPARED · IMPLEMENTATION NOT STARTED · CONDITIONAL READY  
**Updated:** 2026-09-20

## 1. Purpose

이 문서는 현재 MVP를 Cursor가 구현할 때 따라야 하는 **implementation-facing product / behavior / data / design contract**다.

목표:
- Cursor가 오래된 기획이나 superseded 추천 루틴 흐름을 구현하지 않게 한다.
- Figma에 보이는 정적 화면과 GitHub에 정의된 동적 행동을 함께 전달한다.
- 구현 중 임의 제품 결정을 금지한다.
- 테스트/회귀 기준을 구현 전에 고정한다.

이 문서는 기술 스택을 새로 결정하지 않는다.

## 2. Authority

제품 의미 / 행동:
1. Product Owner의 최신 명시 결정
2. 최신 유효 Decision
3. `docs/24_PRODUCT_DIRECTION_V2.md`
4. `docs/01_PRODUCT_POLICY.md`
5. `docs/00_PROJECT_BRIEF.md`

화면 / visual:
- canonical Figma file `W3lZurXCXbThP67rF2xk2b`
- page `MVP_전체_와이어프레임` — `34:1076`
- shared component page `Common_Component`
- screen freeze: `docs/ux-decisions/2026-09-20-mvp-screen-design-freeze.md`

구현/QA:
- `PROJECT_INSTRUCTIONS.md`
- `docs/06_ENGINEERING_HARNESS.md`
- `docs/11_GLOBAL_INVARIANTS.md`
- `docs/12_REGRESSION_MATRIX.md`
- `docs/07_QA_RELEASE_HARNESS.md`

화면 목록:
- `docs/implementation/MVP_SCREEN_INVENTORY.md`

검증:
- `docs/implementation/MVP_HANDOFF_QA.md`

## 3. Explicitly superseded / forbidden implementation sources

Cursor는 아래를 current requirement로 사용하지 않는다.

- 추천 설문 / 추천 결과 캐러셀
- ready-made 추천 루틴 목록 / 상세 / 저장
- `내 루틴 / 추천 루틴` 탭
- 추천 루틴 운동 완료 후 저장 다이얼로그
- recommendation-heavy onboarding
- `product/wireframe/*`의 오래된 추천 루틴 및 dark-theme 표현
- 과거 Figma frame 이름/화면이 현재 94-frame inventory에 없을 경우 그 화면
- radius exploration preview

현재 MVP에는 **추천 루틴 기능이 없다**.

## 4. Product definition / MVP boundary

제품:
- general-purpose weight-training tracker
- 사용자가 빠르게 운동을 시작하고 기록하고, 기록을 다음 운동과 분석에 재사용하는 것이 핵심

MVP 포함:
- provider authentication
- first-run basic profile
- Home
- saved routine CRUD
- blank workout
- exercise search/filter/detail
- custom exercise CRUD
- active workout logging
- previous performance
- add/remove/reorder exercises and sets
- automatic rest timer
- manual timer
- exercise replacement
- workout completion
- workout history
- basic analysis/body distribution
- settings/profile/account deletion/support
- kg/lb display setting
- language setting

MVP 제외:
- 추천 루틴
- recommendation matcher/questionnaire
- AI coach/chat
- automatic progressive overload
- RPE/RIR
- social feed/sharing
- billing/subscription product
- Health Connect / Apple Health
- watch apps
- nutrition/PT tooling

`구독 관리`은 현재 future-facing stub이며 실제 billing flow를 구현하지 않는다.

## 5. App information architecture

First run:

`Splash -> Login -> Basic Info -> Home`

New-account required basic info:
- 성별: 남성 / 여성
- 생년월일: full date

Primary navigation:
- 홈
- 루틴
- 분석
- 설정

Exercise library/search is contextual and is not a fifth primary tab.

One active workout at a time.

When an active workout exists:
- Home provides return/resume entry.
- starting another routine follows the approved current-workout end/save dialog flow.

## 6. Authentication / account contract

Supported provider entry:
- Android: Google / Kakao
- iOS: Google / Kakao / Apple

UI semantics:
- provider buttons use unified `계속하기`
- no separate email/password MVP sign-up path

After provider auth:
- known linked identity -> sign in existing internal account
- first-time identity -> create internal account -> first-run basic info

Legal/privacy:
- Terms and Privacy links accessible at first entry
- first-time account requires explicit Terms agreement before normal setup completes
- Privacy Policy remains separately viewable
- do not invent a generic mandatory privacy-consent checkbox for normal service-required processing
- existing users are not asked for the same agreement on every login

Exact release legal copy / lawful-basis verification remains pre-release work.

## 7. Home contract

### No routine — `02A_Home_NoRoutine`

Primary actions:
- `빈 운동`
- `내 루틴 만들기`

No recommendation entry.

`빈 운동`:
- creates one active workout
- no saved-routine link
- zero exercises initially
- does not auto-create a routine

### Routine selected — `02B_Home_RoutineSelected`

- quick start of current/next saved routine
- blank-workout entry remains available
- compact `내 루틴` grid provides saved-routine access
- routine tiles are whole-card targets; no tile chevron

### Active workout — `02D_Home_Active`

- current workout is primary
- tapping compact active card resumes the current active workout
- no second active workout is silently created

## 8. Routine contract

Routine scope:
- user-created saved routines only

Supported:
- create
- view
- edit
- delete
- add/remove/reorder exercises
- set configuration
- optional weekday/scheduling metadata where used by current flow

### Routine name

User-entered name is optional.

Rules:
- empty name is not an error
- name alone never disables save
- save eligibility depends on the other existing routine-validity rules
- first save with blank name -> `나의 루틴 YYMMDD`
- additional auto names on same local date -> `나의 루틴 YYMMDD (2)`, `(3)` ...
- entered names are preserved
- generated name becomes editable
- later exercise edits do not regenerate the name

Figma interpretation:
- `03E_Routine_Create` Save is Disabled because no exercise is composed, not because its name is blank.
- no extra blank-name-with-exercises screen is required.

### Routine/history integrity

Editing or deleting a routine must not rewrite previously completed workout history.

## 9. Exercise identity / custom exercise contract

Exercise identity is stable.

Required for custom exercise create:
- 운동명
- 주 타겟 근육
- 기록 방식

Optional:
- 장비
- 보조 타겟 근육

Save:
- bottom Primary CTA `저장`
- Create header right action = none
- Edit header right action = Trash

History lock:
- if completed history exists, recording type is read-only
- do not open selector
- no tap toast
- show neutral inline hint:
  `기록이 있는 운동은 기록 방식을 변경할 수 없어요.`

Custom exercise history remains independent even if display metadata/name changes.

## 10. Recording types

Canonical policy:
- `docs/ux-decisions/2026-09-05-exercise-recording-types.md`

MVP active:
1. `weight_reps` -> external weight + reps
2. `reps` -> reps
3. `duration` -> seconds/time
4. `assisted_weight_reps` -> assistance weight + reps

Schema-level reserved, no dedicated MVP UI:
- `weight_duration`
- `distance_duration`
- `distance_weight`

Out of MVP:
- `added_weight_reps`

Do not coerce unsupported semantics into another type.

### Assisted machine

- display input meaning as `보조 kg`
- stored value is the actual machine assistance setting
- higher assistance must not be interpreted as higher performance
- do not apply ordinary weight PR / 1RM / ordinary weight-volume semantics
- first-use helper may explain:
  `보조 kg가 클수록 머신의 도움도 커집니다.`

### Duration blocker

Storage meaning is approved: duration is stored in seconds.

However the Active Workout interaction is **not approved yet**:
- countdown vs stopwatch
- start/stop UI
- target time vs actual time
- finish signal
- exact rest-timer start condition

Cursor must not invent this behavior.

Verdict for this component state: `DECISION NEEDED`.

## 11. Active Workout contract

Canonical visual shell:
- `05A_Workout_Weight` — `148:1979`

Core:
- one active workout
- full exercise list remains in one workout surface
- current exercise can be interacted with without forcing a page-per-exercise model
- previous performance stays near set input
- set completion can be corrected
- exercises can be added/removed/reordered
- sets can be added/removed
- common edits should not require network access

### Blank-workout zero-exercise derived state

No additional top-level Figma frame is required.

Use the `05A` shell:
- title = `빈 운동`
- WorkoutLiveBar remains
- ExerciseList = empty
- existing `운동 추가` remains available
- exercise selection uses existing search/selection flow
- selected exercises then use normal shared exercise-card semantics
- saved routine is not created implicitly

### Previous performance

Previous performance must resolve by stable exercise identity and correct recording semantics.

Do not map previous performance by display name alone.

### Structural edits vs saved routine

When a workout was started from a saved routine and its structure changed, use the approved completion/update prompt.

Current copy/meaning:
- title: `바꾼 내용을 루틴에도 저장할까요?`
- secondary: `오늘만 적용`
- primary: `루틴에 저장`

No silent saved-routine mutation.

## 12. Workout timers

Three separate concepts must not be conflated:
- workout elapsed time
- automatic Rest Timer
- Manual Timer

### Automatic Rest Timer

- set completion may start rest behavior according to approved Group 05 policy
- RestLiveBar must not block workout logging

### Manual Timer

Canonical:
- `05Q_ManualTimer_Idle`
- `05Q_ManualTimer_Running`
- `05Q_ManualTimer_Paused`

Rules:
- default `01:30`
- only `-15초 / +15초`
- no direct text time entry
- Idle -> `타이머 시작`
- Running -> `일시정지`
- Paused -> `초기화 / 계속하기`
- X closes; Running/Paused X terminates the manual timer
- reopening begins at Idle `01:30`
- zero stays at `00:00`, no negative time
- no auto-close/reset/completion screen
- while automatic Rest Timer is active, manual-timer nav action is unavailable
- do not run both countdown timers simultaneously

## 13. Workout end / discard / other-routine / replacement

Use canonical dialogs and exact current copy from:
- `docs/ux-decisions/2026-09-19-dialog-copy-simplification.md`

Behavior must distinguish:
- end incomplete workout
- end completed workout
- discard current workout
- start another routine while active
- replacement when completed-set data would be deleted
- save structural changes back to source routine

Destructive actions must affect only the intended current data.

## 14. Completion / History / Analysis

Workout completion:
- completion dashboard is the post-workout destination
- current variants include Default, no-PR, Volume-N/A
- save only the work that product policy defines as completed/retained
- do not duplicate a completed workout on retry/navigation

History:
- completed history is historical fact
- routine/exercise definition edits do not rewrite old records
- deletion affects only the selected workout record

Analysis:
- use current canonical Group 07 screens
- body distribution assets already applied through shared components
- PR/history/progress calculations must respect recording-type semantics
- no ordinary weight-performance interpretation for assisted-weight exercises

Detailed recording-type-specific PR/progression formulas not explicitly approved must not be invented.

## 15. Settings / profile / account

Settings grouping follows canonical Group 08 Figma.

Profile:
- profile photo/nickname editable
- Logout is a plain centered action above Save, not a grouped account-card row

Units:
- kg/lb presentation setting
- source values must not drift through repeated conversions

Workout settings:
- default rest time and timer-end sound surfaces exist

Language:
- 한국어 / English
- immediate-selection presentation

Notifications:
- implement only the current approved surface/behavior; do not invent notification categories/backend scheduling not specified.

Subscription:
- `구독 관리` is a stub
- feedback: `준비 중인 기능이에요.`
- do not add payment/billing

Support inquiry:
- category sheet
- image attachment slots
- submit success/failure states
- exact retention period/disclosure is pre-release follow-up

Terms / Privacy:
- current screen entry opens external/public documents
- final production URLs remain pre-release follow-up

Account deletion:
- in-app path required
- final destructive confirmation required
- no provider re-auth immediately before deletion
- final confirmation is irreversible from user perspective
- delete normal account-associated product data
- unlink/revoke supported linked providers
- legally required retention is the only allowed retention exception and must be isolated from ordinary product data

Backend deletion mechanics/timing remain implementation detail requiring defined safe behavior before release.

## 16. Persistence / sync contract — critical

Active workout reliability is P0.

### Local durability

Workout/session changes are written to durable local storage immediately.

Network availability must not be required to:
- enter/edit kg
- enter/edit reps
- complete/uncomplete set
- preserve active-session progress

### Sync

Change-driven, not polling-driven.

Ordinary edits:
- coalesce with 3-second debounce after latest change

Immediate sync-attempt boundaries:
- set completion
- workout completion
- app background
- network reconnection

Offline/failure:
- pending changes remain durably queued
- retry after connectivity returns
- sync failure must not block the workout

Authority:
- while active, current active device durable local state is authoritative for newest unsynchronized workout edits
- cloud must not overwrite newer pending local workout state with an older synchronized snapshot
- after successful sync, cloud account record is long-term canonical for completed workouts/routines/custom exercises/profile/optional body data
- local data remains offline working copy/recovery replica

Exact simultaneous multi-device conflict policy for non-active records is not yet locked. Do not silently discard accepted local changes.

## 17. Implementation-neutral domain boundaries

The storage/schema technology is not selected here, but implementation must keep these identities separable:

- Account / provider identity
- Profile
- Exercise identity
- Custom exercise identity
- Saved routine
- Routine exercise/configuration
- Active workout session
- Workout exercise snapshot/reference
- Set record
- Completed workout/history
- User settings

Required integrity:
- persisted entities use stable identity, not display-name joins
- completed history does not depend on current mutable routine definitions to preserve its facts
- custom exercise history remains attributable after rename
- recording type meaning is stored/preserved with sufficient historical integrity
- deletion boundaries are explicit

This section is a domain contract, not a mandated SQL/document schema.

## 18. Visual implementation contract

Canonical visual artifact:
- Figma `W3lZurXCXbThP67rF2xk2b`
- `MVP_전체_와이어프레임`
- `Common_Component`

Baseline:
- mobile authored viewport: `360 × 780`
- standard page inset: `20px`
- standard content width at 360: `320px`
- typography: SUIT
- repeated UI must follow current shared-component visual contract

Current Light colors:
- brand/primary `#218F8A`
- action/primary `#1A7E79`
- brand/soft `#DCEFED`
- bg/canvas `#F6F7F7`
- bg/surface `#FFFFFF`
- bg/subtle `#EFF2F2`
- border/subtle `#EAEEED`
- border/default `#E7EBEA`
- border/strong `#D7DCDA`
- text/primary `#242927`
- text/secondary `#626866`
- text/tertiary `#929A98`
- success `#4F8A61`
- danger `#C85A64`

Surface:
- content/grouped cards: no outer border + subtle `0 2px 8px` shadow around 5%
- controls may retain semantic border
- do not introduce default background blur

Logo:
- default Tampin AppLogo = brand/primary
- Splash = white Tampin wordmark on brand-primary background

Radius:
- use current canonical Figma/component values
- **do not apply the preview-only size-aware radius exploration**

Responsive/runtime:
- frames taller than 780 represent scroll composition; do not create physically taller device viewports
- reproduce scroll/pinned/fixed behavior from the canonical screen structure
- do not hard-code screenshots as bitmap UI

## 19. Exercise visual assets

Current:
- body-map Production visual assets are applied in Group 07
- current Figma exercise thumbnails use the approved thumbnail component treatment
- thumbnail border = 1px INSIDE `border/subtle`

Still open:
- full ~3,000 Production thumbnail crop run
- exception QA
- exact Production exercise-to-media mapping

Implementation rule:
- build against the stable thumbnail/media interface
- do not hard-code the three visual-preview samples as semantic exercise mapping
- final visual/media QA waits for Production mapping

## 20. Dialog copy

All live MVP dialog title/body/action copy is canonical in:
- `docs/ux-decisions/2026-09-19-dialog-copy-simplification.md`

Do not restore older longer copy from screenshots/history.

## 21. Accessibility / interaction baseline

At minimum:
- controls remain readable at narrow mobile width
- visual icon may be smaller but interactive targets should follow the current design-system touch-target contract
- disabled/selected/destructive state must remain distinguishable
- text should not be truncated when equivalent Figma state wraps
- core workout actions remain obvious
- do not rely on color alone for critical completion/destructive meaning where the current component includes another cue

Exact platform accessibility APIs depend on the selected technology stack.

## 22. Do not invent

Cursor must stop and report `DECISION NEEDED` rather than choosing product behavior when any of these are unclear:

- technology stack / production architecture
- launch platform priority
- `duration` Active Workout timed-set interaction
- unapproved PR/progression formula
- unresolved non-active multi-device conflict behavior
- release legal URLs/copy/retention period
- notification delivery/backend behavior beyond approved UI
- billing/subscription
- AI/personalization/recommendation behavior
- any screen/flow absent from current authority where the behavior materially changes user data

## 23. Current implementation blockers

### BLOCKER A — production technology stack / architecture

No current canonical production app technology stack was found in the reviewed authority docs.

Do not choose framework, database, backend, navigation framework, DI/state architecture, or sync infrastructure merely to begin coding.

Requires Product Owner decision before first implementation Issue.

### BLOCKER B — duration Active Workout interaction

`recording_type = duration` is MVP-active at the data-policy level, but timed-set interaction remains explicitly deferred.

Requires focused Product/UX decision before implementation of duration exercise logging.

### Non-blocking early-development side track

Production exercise-thumbnail crop/mapping QA remains open.

It blocks final visual/media completion, not initial app shell/domain implementation.

## 24. Development sequencing after blockers are resolved

Do not implement the entire app in one Cursor task.

Recommended issue sequence, adjusted to the selected architecture after PO approval:

1. app foundation / design tokens / navigation shell
2. auth + first-run basic info
3. core persistence/domain identity + settings primitives
4. routine CRUD
5. exercise library/search/custom exercise
6. active workout core + durable local recovery
7. timers / reorder / replacement / end flows
8. completion + history
9. analysis
10. settings/account/support
11. production exercise-media mapping
12. release hardening / privacy / runtime QA

For high-risk active-session/persistence work, create explicit Impact Gate and regression plan before coding.

## 25. Acceptance criteria for MVP implementation

Functional:
- new user can authenticate, finish required basic info, and enter Home
- user can create/edit/delete a saved routine
- user can start from a saved routine
- user can start blank without creating a saved routine
- user can add exercises and record supported set data
- user can edit/correct active workout data
- active workout survives required interruption/restart scenarios
- user can complete/save workout once
- completed workout appears correctly in history/analysis
- previous performance maps to correct exercise identity
- custom exercises keep independent history
- kg/lb presentation does not corrupt stored values
- user can use current settings/profile/account/support flows
- account deletion follows approved destructive/data scope

Product:
- no recommended-routine UI/flow exists
- no automatic routine/history mutation outside approved explicit action
- blank routine name behaves according to auto-name policy
- one active workout invariant is preserved

Design:
- canonical 94-frame visual language is respected
- current shared-component relationships are translated into reusable production UI rather than duplicated one-off styling
- current Light tokens/SUIT/logo/dialog copy are reflected
- no preview-only radius rollout
- final media mapping remains replaceable without UI redesign

QA:
- affected regression packs selected per Issue
- Logic / Integration / Runtime evidence kept separate
- P0 blocker = 0 before release
- active-session recovery reaches required runtime/device evidence before final PASS

## 26. Handoff verdict

**CONDITIONAL PASS**

Verified:
- product direction aligned
- obsolete recommended-routine requirements removed from current core docs
- MVP screen design frozen
- canonical 94-frame inventory read back from Figma
- component linkage baseline verified
- major runtime-derived states documented
- engineering/QA contracts aligned

Not ready to start production implementation yet because:
1. technology stack / architecture is not locked
2. duration timed-set interaction is not locked

After those two decisions and explicit PO development authorization:
- create the first scoped implementation Issue
- hand only that Issue + this contract to Cursor
- implement/test/QA incrementally
