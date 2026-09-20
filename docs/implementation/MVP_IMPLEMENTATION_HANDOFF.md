# MVP Implementation Handoff

**Status:** SCREEN DESIGN FROZEN · 94-SCREEN BEHAVIOR QA COMPLETE · FIX / DECISION NEEDED · IMPLEMENTATION NOT STARTED  
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

화면별 행동 매핑:
- `docs/implementation/MVP_SCREEN_BEHAVIOR_MATRIX.md`

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

**Primary navigation design is now locked:** `Common_Component > BottomAppBar` (`2078:2401`) is the canonical shared component and is placed only on the seven approved root surfaces. Use `docs/ux-decisions/2026-09-20-bottom-app-bar-root-placement.md` for visibility, fixed-placement, active-variant, overlay, and root-switch behavior.

Exercise library/search is contextual and is not a fifth primary tab.

One active workout at a time.

When an active workout exists:
- Home provides return/resume entry.
- starting another routine follows the approved current-workout end/save dialog flow.

## 6. Authentication / account contract

Supported provider entry:
- Android: Google / Kakao
- iOS: Google / Kakao / Apple

Current Figma `01A_Login` renders Google / Kakao only. This is sufficient for an Android-first launch surface. If iOS is in launch scope, Apple sign-in presentation and related provider copy must be aligned before that platform is implemented.

UI semantics:
- provider buttons use unified `계속하기`
- no separate email/password MVP sign-up path

After provider auth:
- known completed identity -> sign in existing internal account
- first-time identity -> create/resolve internal account in onboarding-incomplete state -> first-run basic info
- same provider identity must resolve the same incomplete internal account after an interrupted first-run flow

Legal/privacy:
- Login keeps Terms and Privacy links accessible at first entry
- Login provider continuation itself is not the explicit Terms agreement
- the prior Login copy `계속하면 서비스 이용약관에 동의합니다.` is not used
- first-time/incomplete account collects explicit Terms agreement on Basic Info through `TermsAgreementRow`
- `시작하기` requires sex + valid DOB + Terms agreement
- Privacy Policy remains separately viewable
- do not invent a generic mandatory privacy-consent checkbox for normal service-required processing
- existing completed users are not asked for the same agreement on every login

Basic Info Back:
- return to Login
- preserve onboarding-incomplete state
- do not create a duplicate internal account for the same provider identity
- next successful auth with that same provider identity resumes Basic Info until the required setup is completed

Canonical decision:
- `docs/ux-decisions/2026-09-20-group00-01-first-run-closure.md`

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

### Saved routines exist — `02B_Home_WithRoutine`

- Quick Start is identical to `02A_Home_NoRoutine`: `빈 운동` + `내 루틴 만들기`
- no saved routine is automatically promoted into Quick Start
- compact `내 루틴` 2 × n grid provides saved-routine access
- `새 루틴` remains a routine-creation entry
- no weekday/today-next/selected-routine Home semantics
- exact `내 루틴` tile tap destination remains unresolved; do not invent it

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

**Weekday/scheduling is outside the current MVP.** Do not implement routine weekday assignment, `오늘의 운동`, `다음 운동`, or hidden selected/default routine behavior. Canonical decision: `docs/ux-decisions/2026-09-20-group02-home-with-routine-simplification.md`.

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

### Routine flow / destination rules

- Create Save → newly created routine's `03D_Routine_Detail`
- Edit Save → updated `03D_Routine_Detail`
- changed Create/Edit + Back → `03EF_Routine_Unsaved_Confirm`
- confirmed routine delete → `03A_Routine_List`
- `순서 변경` reuses the approved reorder pattern and returns to the originating routine create/edit context
- `대체 운동` reuses the replacement flow
- a replacement exercise does not inherit kg/reps from the removed exercise
- use the replacement exercise's own latest personal record according to its recording type
- no personal history → initialize one empty set row

### Routine estimated-duration rule

For the visible `예상 시간` metric:
- unchanged routine with valid history → median of up to 3 recent fully completed sessions, rounded to 5 minutes
- no valid history or structural change → planned-structure fallback
- load/reps set default active time = 45 sec
- duration set = programmed duration
- configured rest wins; otherwise fallback rest = 90 sec between sets
- exercise transition = 60 sec
- partial sessions excluded
- structural changes invalidate the history estimate
- kg/reps-only edits do not invalidate the history estimate

Older recommendation-template duration rules are superseded because recommended routines are removed.

### Routine duplicate blocker

`03A_Routine_List_Menu` visibly contains `복제`, but the current authority does not define its exact data-copy/name/destination semantics.

Cursor must not implement Duplicate until Product Owner resolves:
- copied-name rule
- copied metadata scope
- deep-copy boundary for exercise/set configuration
- destination after duplication
- repeated-name collision behavior

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

### Custom exercise save / delete destinations

- Create Save → return to the originating exercise add/list flow with the newly created custom exercise already selected, using the existing `04B_Search_Selected` pattern
- no separate creation-success screen
- Edit Save → return to that exercise detail with updated metadata
- confirmed custom-exercise delete:
  - remove the custom exercise from the exercise catalog
  - remove it from saved routines that contain it
  - preserve completed workout history
  - if a saved routine loses its final exercise, keep the routine and represent it with `03D_Routine_Detail_Empty`

### Attachment media fallback

- reviewed attachment-specific media exists → use it
- otherwise → use canonical base exercise media
- direct/custom attachment text does not auto-map to arbitrary media
- absence of attachment-specific media does not create a separate no-media detail route

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

### W / D / F set-type blocker

The current Routine / Active Workout Figma visibly contains set-row identifiers `W`, normal numbered rows, `D`, and `F`.

The current reviewed authority does not define:
- user-facing meaning of W / D / F
- how set type is selected/changed
- persistence representation
- completion behavior
- volume / PR / history calculation behavior

Cursor must not infer Warm-up / Drop / Failure semantics. This is a separate `DECISION NEEDED` item.

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

Locked behavior:
- completing a set automatically starts the Rest Timer; there is no separate Start action
- while countdown runs, show fixed-bottom `RestLiveBar`
- RestLiveBar does not replace the pinned Nav Header / WorkoutLiveBar
- countdown reaching `00:00` removes the RestLiveBar
- `휴식 종료` explicitly terminates the current rest countdown and removes the bar
- there is no MVP action that only hides the bar while keeping that same Rest Timer running invisibly
- no Rest Timer `+15초 / -15초 / pause / reset`
- Rest Timer never blocks set/exercise progression

Current unresolved runtime edge:
- if another set is completed while a Rest Timer is already running, the exact replace/restart/keep-current rule is not approved
- exact zero-completion feedback across sound / vibration / background notification remains deferred despite the current Settings surfaces

Cursor must not invent these runtime rules.

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

### Active-session recovery presentation

Locked:
- in-progress workout persistence/recovery remains required across interruption/restart
- normal recovery does not show a dedicated in-app recovery screen or `복구했어요` banner
- product direction surfaces the ongoing active session through the system notification area
- re-entry opens the same active workout session; it is not a newly created/recovered-copy session

Still unresolved:
- exact system-notification copy
- notification actions/controls
- platform-specific persistent/ongoing-notification behavior

Cursor must not invent those notification UX details.

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

### Replacement-candidate policy

- prepare at most 6 candidates for the source exercise
- show at most 3 at a time
- first and second groups must not duplicate
- `다른 운동 보기` cycles only between already secured candidate groups
- do not generate/show a 7th+ candidate
- there is no `전체 운동에서 찾기` route in the approved replacement flow
- if fewer than 6 candidates exist, use only the available candidates
- browsing candidates never mutates the active workout
- replacement commits only after explicit selection + `선택 완료`
- 0 completed sets in the source exercise → replace without destructive confirmation
- 1+ completed sets → show `05P_Exercise_Replace_DeleteConfirm`
- confirmed 05P deletes only the current session's completed sets for that exercise, then replaces it
- prior completed workout history is never deleted by replacement

### Starting another routine while active

- incomplete current workout → save completed sets only, end current session, then start selected routine
- complete current workout → save current workout, end, then start selected routine
- if the source saved routine has structural changes, handle `05O_Workout_UpdateRoutine` before the new routine starts
- preserve one-active-workout invariant

## 14. Completion / History / Analysis

Workout completion:
- completion dashboard is the post-workout destination
- current variants include Default, no-PR, Volume-N/A
- save only the work that product policy defines as completed/retained
- do not duplicate a completed workout on retry/navigation

Completion metric rules:
- workout time = elapsed time from Start to End, excluding explicitly paused time
- backgrounding alone does not auto-pause workout time
- recovered active sessions continue preserved session timing
- completed sets = final completed/check state only; repeated check/uncheck events do not duplicate count
- completed exercise count = exercises with at least one final completed set
- total volume = Σ(recorded weight × actual reps) for final completed eligible `weight_reps` sets only
- assisted/duration/reps-only records are not coerced into kg volume
- current completion/session-detail N/A policy: when no eligible completed weight-volume exists, keep the metric cell and display `—`, never `0kg`

History:
- completed history is historical fact
- routine/exercise definition edits do not rewrite old records
- deletion affects only the selected workout record

Analysis:
- use current canonical Group 07 screens
- body distribution assets already applied through shared components
- PR/history/progress calculations must respect recording-type semantics
- no ordinary weight-performance interpretation for assisted-weight exercises

07A trend:
- periods = `4주 / 3개월 / 1년`; default = `4주`
- metric selector = `총 중량 / 세트 / 시간`; default = `총 중량`
- `총 중량` = Σ(weight × completed reps) for eligible completed weight-bearing sets; weightless records are excluded, not converted
- `세트` = count of completed/persisted sets
- `시간` = total completed saved-workout session duration in the bucket
- 4주 = rolling 28 days / four 7-day buckets
- 3개월 = rolling 91 days / thirteen 7-day buckets
- 1년 = 12 calendar-month buckets ending in current month
- Y-axis starts at 0 and uses readable rounded adaptive steps
- total-weight Y-axis uses the current final Korean compact labels for large values, e.g. `1.5만 / 1만 / 5천 / 0`; `kg` is shown once rather than repeated on every tick
- tap a bucket/point → anchored tooltip with exact period + exact metric; outside tap dismisses; no drag scrub
- zero-value eligible bucket and unavailable/pre-history bucket are distinct
- entirely empty selected period keeps chart region and shows `이 기간에는 운동 기록이 없어요`

Body distribution:
- data basis = completed-set muscle exposure
- each mapped primary muscle = 1.0 point per final completed set
- each mapped secondary muscle = 0.5 point
- unfinished/unpersisted set = 0
- do not multiply this score by load/reps/duration/assistance
- do not label the map as recovery/readiness/undertrained/overtrained
- exercise without usable muscle mapping remains in workout history but is excluded from body-map calculation rather than guessed from its name

Group 07 locked rules:
- total volume counts only completed `weight_reps` sets as weight × reps
- if a saved session has no eligible completed `weight_reps` set, keep the volume metric and display `—`; never `0kg`
- 07D PR card:
  - hide when no valid PR
  - show all valid PRs generated by that session
  - order by workout-session exercise display order
  - use native recording-type formatting
  - do not duplicate identical PR results merely because multiple sets matched
- 07B contributor list:
  - show all contributor exercise rows
  - no arbitrary first-N truncation / no `더보기`
  - sort by selected-area contribution score descending, recency as tie-break
  - trailing metric uses selected-period native aggregate, not a universal kg value:
    - `weight_reps` → Σ(weight × completed reps)
    - `reps` → total completed reps
    - `duration` → total completed duration
    - `assisted_weight_reps` → total completed reps; do not multiply assistance kg
  - trailing aggregate does not redefine contribution sorting
  - page scroll handles long content; no nested contributor-list scroll
- confirmed 07D workout deletion:
  - delete the whole saved workout session
  - remove its contributions from analysis totals, body distribution, recent workout lists, exercise history, and PR/history-derived views
  - recalculate derived data from remaining history
  - return to previous valid parent; use Home as fallback if the prior destination is invalid

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
- current Figma surfaces rest-timer notification and updates/notices toggles
- implement only the approved setting surface/state
- do not invent delivery scheduling, permission timing, backend push infrastructure, or new notification categories

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
- Group 02 `내 루틴` tile tap destination
- routine duplicate semantics
- W / D / F routine-set semantics
- `duration` Active Workout timed-set interaction
- unapproved PR/progression formula
- unresolved non-active multi-device conflict behavior
- Rest Timer behavior when another set completes while a rest countdown is already active
- exact Rest Timer zero-completion sound/vibration/background-notification behavior
- active-session recovery system-notification copy/actions/controls
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

### BLOCKER D — routine Duplicate semantics

The `복제` menu action exists visually, but exact copy/name/metadata/destination behavior is not defined.

Requires PO decision before implementation.

### BLOCKER E — W / D / F routine-set semantics

Routine create/edit set rows visibly contain W / D / F, while the current 05A Active Workout representative screen shows numbered rows only. Their intended product/data/calculation meaning and whether they should carry into Active Workout are not defined in current authority.

Requires PO decision before implementing these set types.

### BLOCKER F — duration Active Workout interaction

`recording_type = duration` is MVP-active at the data-policy level, but timed-set interaction remains explicitly deferred.

Requires focused Product/UX decision before implementation of duration exercise logging.

### BLOCKER G — automatic Rest Timer runtime edge policy

RestLiveBar presentation/trigger/end action are locked, but the current authority explicitly leaves open:
- what happens if another set completes while a Rest Timer is already counting down
- exact sound/vibration/background-notification feedback when rest reaches zero

Requires Product/UX runtime policy before full Rest Timer implementation.

### BLOCKER H — active-session recovery system notification UX

Recovery persistence is required and the in-app recovery banner is explicitly rejected. The session should be surfaced through the system notification area, but notification copy/actions/controls remain undefined.

Requires platform-aware UX decision before implementing the recovery notification surface.

### Conditional platform alignment — iOS

If iOS is part of launch scope:
- add/align Apple sign-in presentation
- align provider-specific account/deletion copy where necessary

This is resolved together with launch-platform priority.

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

**FIX / DECISION NEEDED**

Verified:
- all 94 canonical screens have screen-level behavior mapping in `MVP_SCREEN_BEHAVIOR_MATRIX.md`
- product direction aligned
- obsolete recommended-routine requirements removed from current core docs
- MVP screen design frozen
- canonical 94-frame inventory read back from Figma
- component linkage baseline verified
- major runtime-derived states documented
- engineering/QA contracts aligned

Not ready to start production implementation yet because:
1. Group 02 `내 루틴` tile tap behavior is not yet locked
2. routine Duplicate semantics are undefined
3. W / D / F routine-set semantics are undefined
4. technology stack / architecture is not locked
5. duration timed-set interaction is not locked
6. automatic Rest Timer runtime edge/end-feedback policy is not locked
7. active-session recovery system-notification UX is not locked
8. launch-platform decision controls whether Apple-provider UI/copy alignment is required

Current implementation-facing product brand is Tampin; the stale G Fit working-name text found during deep QA has been corrected in the current Product Direction / Project Brief.

After the required FIX / DECISION NEEDED items and explicit PO development authorization:
- create the first scoped implementation Issue
- hand only that Issue + this contract to Cursor
- implement/test/QA incrementally
