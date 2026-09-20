# MVP Screen Behavior Matrix

**Status:** SCREEN-BY-SCREEN QA · 94 / 94 MAPPED · FIX / DECISION NEEDED ITEMS EXPLICIT  
**Verified:** 2026-09-20

## Purpose

Cursor가 canonical Figma의 각 top-level frame을 어떤 제품 상태로 구현해야 하는지 화면별로 매핑한다.

각 행은 다음을 구분한다.
- **Purpose / Entry** — 이 화면/상태가 언제 필요한지
- **Primary behavior / Exit** — 주요 액션과 다음 상태
- **Implementation rule** — Figma만 보고 임의 해석하면 안 되는 데이터/상태 규칙
- **QA** — `PASS`, `FIX`, `DECISION NEEDED`, `CONDITIONAL`

이 문서는 `MVP_SCREEN_INVENTORY.md`의 94개 canonical frame 전부를 포함한다.

## Cross-screen findings

### RESOLVED-02 — Primary BottomAppBar contract and root placement

Current product IA destinations:
- 홈
- 루틴
- 분석
- 설정

2026-09-20 targeted Figma maintenance fully resolves the prior bottom-navigation design gap.

Shared component:
- local `BottomAppBar` component set = `2078:2401`
- variants = `Active=홈 / 루틴 / 분석 / 설정`
- Light container = `bg/surface` + existing `Elevation/Card`
- active = `brand/primary`
- inactive = `text/secondary`

Placement:
- only the seven approved root surfaces contain the BottomAppBar
- authored 360×780 placement = `x=0 / y=641 / 360×78`
- long Analysis/Settings compositions use the same first-viewport position to represent fixed viewport navigation
- production scroll content must reserve bottom inset so final content can move above the bar
- non-root/detail/edit/workout/overlay state frames do not add a separate BottomAppBar

Approved root surfaces:
- `02A_Home_NoRoutine`
- `02B_Home_WithRoutine`
- `02D_Home_Active`
- `03A_Routine_List`
- `03B_Routine_Empty`
- `07A_Analysis_Home`
- `08A_Settings_Home`

Canonical records:
- `docs/ux-decisions/2026-09-20-bottom-app-bar-light-component-foundation.md`
- `docs/ux-decisions/2026-09-20-bottom-app-bar-root-placement.md`

Verdict: **PASS — prior FIX-01 closed.**

### RESOLVED-04 — Weekday / today-next / selected-routine Home semantics removed from MVP

PO-approved 2026-09-20:
- weekday assignment is not part of the current MVP
- Home has no `오늘의 운동 / 다음 운동` state
- Home has no hidden selected/default routine
- `02B_Home_WithRoutine` uses the same Quick Start as 02A: `빈 운동 / 내 루틴 만들기`
- only the lower section changes from 02A `최근 운동` to 02B `내 루틴` 2 × n grid
- Active Workout still overrides normal Home with 02D resume state

Canonical decision:
- `docs/ux-decisions/2026-09-20-group02-home-with-routine-simplification.md`

Verdict: **PASS — former DECISION-01 resolved.**

### DECISION-02 — Routine duplicate semantics are not specified

`03A_Routine_List_Menu` visibly exposes `복제`, and the routine list contains a representative `하체 루틴 B (복제)`.

Missing current contract:
- copied name rule
- whether weekday metadata is copied
- whether exercise/set configuration is deep-copied
- destination after duplication
- collision handling for repeated duplicate names

Verdict: **DECISION NEEDED before implementing Duplicate.**

### DECISION-03 — W / D / F routine-set semantics are not specified

Current Routine create/edit cards visibly contain set identifiers such as:
- `W`
- normal numbered sets
- `D`
- `F`

No current implementation authority reviewed in this QA defines:
- their user-facing meaning
- whether/how a user changes set type
- persistence representation
- completion behavior
- volume / PR / history treatment

Verdict: **DECISION NEEDED. Cursor must not infer Warm-up / Drop / Failure semantics without a Product Decision.**

### DECISION-04 — Automatic Rest Timer runtime edge policy

Locked:
- set completion automatically starts Rest Timer
- RestLiveBar stays visible for the countdown
- `휴식 종료` terminates it
- reaching zero removes the bar

Still explicitly deferred:
- another set completes while Rest Timer is already running → replace / restart / keep-current rule
- exact zero-completion sound / vibration / background-notification behavior

Verdict: **DECISION NEEDED before full Rest Timer runtime implementation.**

### DECISION-05 — Active-session recovery system-notification UX

Locked:
- active workout survives interruption/restart
- normal recovery does not use a dedicated in-app recovery screen/banner
- ongoing active session should be surfaced through the system notification area

Still undefined:
- notification copy
- actions/controls
- platform-specific persistent/ongoing behavior

Verdict: **DECISION NEEDED before recovery-notification implementation.**

### CONDITIONAL-01 — iOS Apple sign-in variant depends on platform decision

Policy:
- Android = Google / Kakao
- iOS = Google / Kakao / Apple

Frozen `01A_Login` only renders Google / Kakao. Account-deletion copy also currently references Google/Kakao.

Verdict:
- Android-first implementation: current Figma is sufficient for provider presentation
- iOS launch scope: Apple provider state/copy requires implementation/design alignment

### RESOLVED-01 — Brand naming

Deep QA found stale `G Fit` working-name text in current top-level product docs while canonical visual branding was already Tampin.

Resolved during this QA:
- `docs/24_PRODUCT_DIRECTION_V2.md` → Tampin
- `docs/00_PROJECT_BRIEF.md` → Tampin

Current implementation-facing brand = **Tampin**.

---

# 00 — Splash

| Screen | Purpose / Entry | Primary behavior / Exit | Implementation rule | QA |
|---|---|---|---|---|
| `00_Splash` | Cold app launch | Continue into auth/session routing | Brand-primary background + white Tampin wordmark. Do not add loading copy/indicator absent a new decision. | PASS |

# 01 — Authentication / First Run

| Screen | Purpose / Entry | Primary behavior / Exit | Implementation rule | QA |
|---|---|---|---|---|
| `01A_Login` | Signed-out entry | Google/Kakao continue; Terms/Privacy open public docs; 문의하기 opens support path | Unified sign-up/login semantics; no email/password path. Provider continuation is not Terms agreement. Existing-account vs first-time account branches after provider auth. | PASS for Android surface · CONDITIONAL Apple variant if iOS |
| `01C_Basic_Info` | First-time/incomplete onboarding account after auth | Select sex + enter DOB + explicitly agree to Terms; all required valid states enable `시작하기` → Home. Back → Login. | Sex + valid DOB + Terms agreement required. Back keeps onboarding incomplete; same provider identity resumes the same account at Basic Info on next auth. No duplicate account for interrupted onboarding. | PASS |
| `01C1_Basic_Info_Error` | Invalid DOB | Correct field; CTA stays Disabled until sex + valid DOB + Terms agreement are all satisfied | Current inline error = `올바른 생년월일 8자리를 입력해주세요.` Terms agreement remains an independent required state. | PASS |
| `01A1_Login_Error_Overlay_Cases` | Login failure reference board | General / network / service errors use DialogCard; retry or close | Not a separate navigation route. Use current 2026-09-19 dialog copy. | PASS |
| `01C2_Basic_Info_Focused` | DOB field focus state | Continue input | Component state only; not separate route. | PASS |
| `01C3_Basic_Info_Filled` | DOB filled but one or more other required states not yet valid | Complete sex selection and/or Terms agreement | Filled DOB alone does not imply form-valid. | PASS |
| `01C4_Basic_Info_Disabled` | DOB input unavailable/disabled representative state | No edit while disabled | Component-state reference; exact runtime trigger must come from feature state, not be invented. | PASS as visual state |


### RESOLVED-03 — Group 00–01 first-run consent / resume alignment

PO-approved 2026-09-20 amendment:
- Login keeps Terms/Privacy links but no longer claims provider continuation itself equals Terms agreement
- explicit Terms agreement moves to Basic Info via shared `TermsAgreementRow`
- `시작하기` requires sex + valid DOB + Terms agreement
- Basic Info Back → Login while onboarding remains incomplete
- re-auth with the same provider identity resumes the same incomplete internal account at Basic Info
- focused Figma/component QA PASS

Canonical record:
- `docs/ux-decisions/2026-09-20-group00-01-first-run-closure.md`

Verdict: **PASS — Group 00–01 closed.**

# 02 — Home

| Screen | Purpose / Entry | Primary behavior / Exit | Implementation rule | QA |
|---|---|---|---|---|
| `02A_Home_NoRoutine` | Home with no saved routine | `빈 운동` → zero-exercise Active Workout; `내 루틴 만들기` → routine create; recent workout row opens its record | Blank workout creates no saved routine. Recommendation entry absent. | PASS |
| `02B_Home_WithRoutine` | Home with one or more saved routines | `빈 운동` → blank workout; `내 루틴 만들기` / `새 루틴` → routine create; `내 루틴` renders saved routines in 2×n grid | Quick Start is identical to 02A. No weekday/today-next/selected-routine semantics. Exact routine-tile tap destination remains a Group 02 decision. | DECISION NEEDED — routine-tile tap |
| `02D_Home_Active` | Home while one active workout exists | active card → resume same session; recent workout → record detail | Never create a second active session silently. | PASS |

# 03 — Routine

| Screen | Purpose / Entry | Primary behavior / Exit | Implementation rule | QA |
|---|---|---|---|---|
| `03A_Routine_List` | Saved-routine root list | + → create; card → detail; more → routine menu | User-created routines only. No recommendation tab/catalog. | PASS |
| `03B_Routine_Empty` | Routine root with zero saved routines | `루틴 만들기` → create | Header intentionally has no redundant + action in this state. | PASS |
| `03D_Routine_Detail` | View saved routine | Edit → edit; `운동 시작` → Active Workout | Summary shows exercise count / estimated time / set count. Completed history must not depend on later routine edits. | PASS; DECISION-01 affects schedule only |
| `03E_Routine_Create` | New routine, before exercises | Back → leave or unsaved confirm when changed; `운동 추가` → exercise selection; Save initially Disabled | Routine name is optional. Current Disabled Save is because routine is otherwise invalid/empty, not because name is blank. | PASS |
| `03F_Routine_Edit` | Edit existing routine | Back with changes → 03EF; Trash → delete confirm; exercise menu; add exercise; Save → updated detail | Existing routine history is immutable. Recording values here are planned/configured values, not past performance rewrite. | PASS |
| `03E2_Routine_Create_WithExercises` | Create routine after adding exercises | edit set config / exercise menu / add exercise; Save → new routine detail | Blank name remains saveable if other validity rules are satisfied; auto-name on first save. | PASS |
| `03A_Routine_List_Menu` | Routine-row action sheet | `복제`, `수정`, `삭제`, close | Modify/delete routes are defined; duplicate semantics are not sufficiently defined. | DECISION-02 |
| `03F_Routine_Exercise_Menu` | Exercise action inside routine create/edit | `순서 변경` → reuse 05J pattern; `대체 운동` → replacement flow; `삭제` removes this routine exercise | Replacement must use selected exercise's own latest personal record; do not copy old exercise performance values. | PASS |
| `03EF_Routine_Unsaved_Confirm` | Back from changed create/edit | `계속 편집` returns; `나가기` discards unsaved changes | Exact current dialog copy is canonical. | PASS |
| `03F_Routine_Delete_Confirm` | Delete saved routine | Cancel returns; Delete removes routine → routine list | Completed workout history remains. | PASS |
| `03D_Routine_Detail_Empty` | Existing routine has zero exercises | Edit or `운동 추가` to rebuild routine | Routine can remain after its final exercise is removed through cross-feature custom-exercise deletion. | PASS |

## Group 03 runtime rules recovered during deep QA

These approved rules must be implemented even though they are not separately drawn as new frames:

- create Save → newly created routine's `03D_Routine_Detail`
- edit Save → updated `03D_Routine_Detail`
- delete confirmed → `03A_Routine_List`
- changed create/edit + Back → `03EF_Routine_Unsaved_Confirm`
- replacement:
  - selected replacement does not inherit the removed exercise's kg/reps
  - use the selected exercise's own latest personal record according to its recording type
  - if that exercise has no prior history, initialize one empty set row
- estimated duration:
  - unchanged routine with valid history → median of up to 3 recent fully completed sessions, rounded to 5 minutes
  - no valid history or structural change → planned-structure fallback
  - load/reps set default active time = 45 sec
  - duration set = programmed duration
  - configured rest wins; otherwise 90 sec between sets
  - exercise transition = 60 sec
  - partial sessions excluded
  - structural changes invalidate history estimate
  - kg/reps-only edits do not invalidate the history estimate

Recommendation-template duration language from older Group 03 history is superseded and must not be implemented.

# 04 — Exercise Library / Detail / Custom Exercise

| Screen | Purpose / Entry | Primary behavior / Exit | Implementation rule | QA |
|---|---|---|---|---|
| `04D_Exercise_Detail_Info` | Exercise detail info tab | Back; switch Recent/Growth tabs | Media + equipment + target muscles + method/checkpoints. Attachment-specific media falls back to base exercise media when absent. | PASS |
| `04E_Custom_Create` | Create custom exercise, invalid/incomplete state | field selectors; Save disabled until required fields valid | Required = name, primary muscle, recording type. Equipment + secondary muscle optional. | PASS |
| `04F_Custom_Edit` | Edit custom exercise without history lock | edit fields; Trash; Save valid changes → same exercise detail | Rename/metadata edit must preserve stable exercise identity/history. | PASS |
| `04D_Exercise_Detail_History` | weight_reps history tab | switch tabs | Native weight+reps display; historical records immutable. | PASS |
| `04H_Exercise_Attachment_Selection` | Attachment/grip selection overlay from exercise selection flow | choose preset attachment or direct-input path | Attachment text/media mapping is independent from base exercise identity. | PASS |
| `04A_Search` | Exercise add/search root | search; equipment/body filter; select exercise; + → custom create | Search/filter must use stable exercise catalog data, not display-only hardcoding. | PASS |
| `04A_Filter_Equipment_Page` | Equipment filter | single select → return to search with filter applied | Current options follow Figma taxonomy. | PASS |
| `04A_Filter_BodyPart_Page` | Body-part filter | single select → return to search with filter applied | Current options follow Figma taxonomy. | PASS |
| `04B_Search_Selected` | Exercise search with pending selected exercises | selection footer commits selected exercises back to originating flow | A newly created custom exercise returns here already selected. | PASS |
| `04C_Search_Empty` | No search results | change query/filter or `직접 운동 만들기` → custom create | Do not show fake matches. | PASS |
| `04H_Custom_Attachment_Input` | Direct attachment text-entry state | enter custom attachment and return to selection flow | Direct/custom attachment text does not auto-map to arbitrary media; use base exercise media fallback. | PASS |
| `04D_Exercise_Detail_Growth` | weight_reps growth | period select / PR summary | Recording-type-native metrics only. | PASS |
| `04D_Exercise_Detail_History_Reps` | reps-only history | tabs | Reps only; no fake kg. | PASS |
| `04D_Exercise_Detail_Growth_Reps` | reps-only growth | period select | Native repetitions. | PASS |
| `04D_Exercise_Detail_History_Duration` | duration history | tabs | Store/display native seconds/time. | PASS |
| `04D_Exercise_Detail_Growth_Duration` | duration growth | period select | Native duration growth; this does not define Active Workout timed-set interaction. | PASS |
| `04D_Exercise_Detail_History_Assisted` | assisted history | tabs | Assistance kg + reps; assistance meaning is inverse to ordinary lifted weight. | PASS |
| `04D_Exercise_Detail_Growth_Assisted` | assisted growth | period select | Do not interpret higher assistance as better. | PASS |
| `04D_Exercise_Detail_History_Empty` | No exercise history | switch tab/back | No fake data. | PASS |
| `04D_Exercise_Detail_Growth_Empty` | No growth history | switch tab/back | No fake trend. | PASS |
| `04D_Exercise_Detail_Growth_Insufficient` | Some history but not enough for trend | wait for 2+ comparable records | Show current PR section while trend remains insufficient. | PASS |
| `04I_Custom_Equipment_Select` | Custom-exercise equipment selector | optional single select → return | No selection is allowed. | PASS |
| `04J_Custom_PrimaryMuscle_Select` | Primary muscle selector | required single select → return | Required for filter/analysis attribution. | PASS |
| `04K_Custom_SecondaryMuscle_Select` | Secondary muscle selector | optional single select including `선택 안 함` | One optional secondary target. | PASS |
| `04L_Custom_RecordingType_Select` | Recording-type selector | choose one of 4 active MVP types → return | Must map to stable recording_type enum; do not expose reserved types. | PASS |
| `04F_Custom_Edit_HistoryLocked` | Edit custom exercise with completed history | metadata edits allowed; recording type is read-only | No selector/no toast on locked row; persistent inline hint explains restriction. | PASS |
| `04E_Custom_Create_Valid` | Valid custom-exercise create state | Save → return to originating exercise-add/search flow with new exercise selected | No separate success screen. | PASS |
| `04EF_Custom_Unsaved_Confirm` | Leave changed custom exercise | continue edit or discard | Current simplified dialog copy canonical. | PASS |
| `04F_Custom_Delete_Confirm` | Delete custom exercise | Cancel / Delete | Remove from exercise catalog and all saved routines; completed workout history remains. Last removal may leave an empty routine. | PASS |

# 05 — Active Workout

| Screen | Purpose / Entry | Primary behavior / Exit | Implementation rule | QA |
|---|---|---|---|---|
| `05A_Workout_Weight` | Core active workout for weight+reps example | edit/complete sets; add/delete sets; exercise menu; add exercise; timer; end/cancel | Durable local state authoritative while active. Previous performance by stable exercise identity. | DECISION-03 for W/D/F; duration separate blocker |
| `05I_Workout_Menu` | Current-exercise action sheet | replace / reorder / delete / close | Delete affects current session exercise only unless separately updating saved routine at completion. | PASS |
| `05J_Reorder` | Exercise order editor | reorder; Complete returns to originating workout/routine context | Reorder must not alter historical exercise identity/data. | PASS |
| `05K_End_Incomplete` | End with unfinished planned work | Continue workout / End and save | Save only completed work according to approved partial-completion semantics. | PASS |
| `05L_End_Complete` | End after all planned sets complete | Continue workout / End workout | Persist one completed workout. | PASS |
| `05M_Discard` | Discard current active workout | Continue / delete current workout record | Destructive action deletes current unsaved session input, not prior history. | PASS |
| `05O_Workout_UpdateRoutine` | Source routine structurally changed during workout | `오늘만 적용` or `루틴에 저장` | Workout history is preserved either way; source routine changes only by explicit user choice. | PASS |
| `05H_Exercise_Replace_Selected` | Replacement first batch with one selected | selection complete → replace or 05P if completed sets exist | Single-select. No mutation until confirm. | PASS |
| `05G_Exercise_Replace_Suggest` | Replacement first candidate batch | select candidate; `다른 운동 보기` switches candidate batch | Candidate pool max 6; max 3 shown; no infinite/new candidate generation. | PASS |
| `05N_Workout_OtherRoutine_Incomplete` | User tries to start another routine while current is incomplete | Continue current / End then start selected routine | Save completed sets only; if source routine structure changed, handle 05O before starting new routine. | PASS |
| `05N_Workout_OtherRoutine_Complete` | Start another routine after current planned sets complete | Continue / save current then start selected routine | Preserve one-active-workout invariant. | PASS |
| `05G2_Exercise_Replace_SecondBatch` | Second replacement candidate group | select or `다른 운동 보기` cycles within already secured groups | No `전체 운동에서 찾기`; no 7th+ candidate. | PASS |
| `05P_Exercise_Replace_DeleteConfirm` | Replacement after >=1 completed set in current exercise | Cancel or delete those current-session completed sets and replace | Never delete prior-date history. | PASS |
| `05A_Workout_Weight_Scrolled_3rdExercise` | Scroll/pinned-shell reference | same active-workout actions at scrolled position | Implement as scroll state, not separate route. Preserve pinned/live elements. | PASS |
| `05F_Workout_RestTimer` | Automatic Rest Timer active after set completion | Continue logging; `휴식 종료` terminates countdown; zero removes bar | Fixed-bottom RestLiveBar; no ±15/pause/reset. Manual Timer unavailable while rest is active. | PASS visual / DECISION-04 runtime edge |
| `05Q_ManualTimer_Idle` | Manual timer popup idle | ±15 sec; start; X dismiss | Default 01:30; no direct time typing. | PASS |
| `05Q_ManualTimer_Running` | Manual timer counting down | ±15 sec; pause; X terminates timer | No simultaneous automatic Rest Timer. | PASS |
| `05Q_ManualTimer_Paused` | Manual timer paused | reset / continue / X terminate | Reopen after close starts fresh Idle 01:30. | PASS |

## Group 05 replacement rules

- maximum secured candidates per source exercise = 6
- show max 3 at once
- first/second groups must not duplicate
- `다른 운동 보기` cycles between those secured groups
- no seventh or later candidate
- no `전체 운동에서 찾기` route
- if fewer than six exist, only actual candidates participate
- candidate browsing itself never changes current workout
- replacement commits only after explicit `선택 완료`
- 0 completed sets → replace without destructive dialog
- >=1 completed set → `05P`
- confirmed 05P deletes only completed-set records for the replaced exercise in the current active session
- past completed workout history remains untouched

# 06 — Completion

| Screen | Purpose / Entry | Primary behavior / Exit | Implementation rule | QA |
|---|---|---|---|---|
| `06A_Completion_Default` | Completed workout with PR + applicable volume | `기록 상세 보기` → saved-session detail; `홈으로 돌아가기` → Home | Summary derives from final session state: elapsed time excluding explicit pause, final completed sets, exercises with ≥1 completed set, eligible completed weight_reps volume only. | PASS |
| `FINAL_06_PR_NONE_CASE` | Completed workout with no valid PR | same exits | Hide PR card entirely; no empty/error placeholder. | PASS |
| `FINAL_06_VOLUME_NA_CASE` | Completion where total weight-volume is not applicable | same exits | Keep volume metric cell; display `—`, never `0kg`. | PASS |

# 07 — Analysis / Workout History

| Screen | Purpose / Entry | Primary behavior / Exit | Implementation rule | QA |
|---|---|---|---|---|
| `07D_Workout_History_Detail` | Saved workout-session detail | Back; Trash → delete confirm | Show all valid PRs for this session; 2×2 summary; body distribution; performed exercise table. | PASS |
| `07A_Analysis_Home` | Analysis root | `총 중량 / 세트 / 시간`; `4주 / 3개월 / 1년`; body-area/recent progress/history drilldown | Default = 총 중량 + 4주. 총 중량=eligible completed weight×reps; 세트=completed set count; 시간=saved session duration. Approved rolling/month buckets, adaptive zero-based scale, current Korean compact kg-axis labels, and point tooltip apply. | PASS |
| `07B_BodyArea_Detail` | Selected body-area drilldown | period tabs; view contributor exercise list | Show all contributors; sort by muscle-exposure contribution + recency tie-break. Trailing aggregate is recording-type native: weight volume / reps total / duration total / assisted reps total. | PASS |
| `07B_BodyArea_Detail_Empty` | Body-area/period has no records | change period/back | Keep section shell; no body-map fake activity. | PASS |
| `07D_Workout_History_Detail_DeleteConfirm` | Delete saved workout session | Cancel / Delete | Delete whole session; recalc derived analysis/PR/history; previous valid destination or Home fallback. | PASS |

## Group 07 data rules

07A body-map basis:
- one final completed set → primary muscle +1.0, secondary muscle +0.5
- no multiplication by weight/reps/duration/assistance
- no runtime guess from exercise name when muscle mapping is missing
- score is an exposure/distribution heuristic, not recovery/readiness physiology

07A trend:
- periods: 4주 = rolling 28 days / 4 weekly buckets; 3개월 = rolling 91 days / 13 weekly buckets; 1년 = 12 calendar-month buckets
- 총 중량: eligible completed load × reps only; weightless recording types excluded rather than converted
- 세트: completed/persisted sets
- 시간: saved workout-session duration
- total-weight Y-axis: current final Figma/Group 07 closure uses Korean compact labels such as `1.5만 / 1만 / 5천 / 0`, with `kg` shown once
- point tap shows exact period/value tooltip; no drag scrub
- real zero and unavailable/pre-history are distinct

- total volume counts only completed `weight_reps` sets as weight × reps
- if no eligible completed weight_reps set: `총 볼륨 = —`
- reps / duration / assisted values are never coerced into kg
- 07D PR card:
  - hide when no valid PR
  - show all valid session PRs
  - order by session exercise display order
  - native recording-type format
  - do not repeat identical duplicate PR results merely because multiple sets matched
- deleting a saved workout removes its contributions from:
  - Analysis totals
  - body distribution
  - recent workout lists
  - exercise history
  - PR/history-derived views

# 08 — Settings / Account / Support

| Screen | Purpose / Entry | Primary behavior / Exit | Implementation rule | QA |
|---|---|---|---|---|
| `08A_Settings_Home` | Settings root | profile / subscription stub / workout / units / notifications / language / legal / inquiry | Theme and FAQ are not current MVP rows. Subscription is not billing. | PASS |
| `08D_Workout_Settings` | Workout preferences | default rest time; timer sound; vibration; keep-screen-on | Current representative states: vibration On, keep-screen-on Off. Persist user preference. | PASS |
| `08E_Notification_Settings` | Notification preferences | toggle rest-timer notification and updates/notices | Current UI defaults show both On. Delivery/backend behavior beyond approved UI must not be invented. | CONDITIONAL |
| `08D1_Default_Rest_Time_Sheet` | Set default rest duration | 5-second increments; Complete applies value | Current representative value 2:00. | PASS |
| `08D2_Timer_End_Sound` | Timer sound selection | choose 기본 / 차임 / 벨 | Final production sound assets/labels remain release follow-up. | CONDITIONAL asset |
| `08C_Unit_Settings_Sheet` | Weight display unit | choose kg/lb; Save | Conversion must not progressively mutate source values. Current selection = kg. | PASS |
| `08B1_Profile_Photo_Sheet` | Change profile photo | photo select / default image / cancel | Photo is optional profile presentation. | PASS |
| `08B_Profile` | Profile edit | photo; nickname; Logout; Save; More → account sheet | Logout is plain centered action above Save. | PASS |
| `08B2_Account_Management_Sheet` | Account actions from profile More | account deletion / cancel | Do not add unrelated account functions. | PASS |
| `08B3_Account_Deletion` | Destructive pre-confirmation explanation | `계정 탈퇴하기` → final confirmation | No recovery/grace period after final confirm. Provider wording is Google/Kakao-oriented. | CONDITIONAL-01 |
| `08B4_Account_Deletion_Confirm` | Final destructive confirmation | Cancel / 탈퇴하기 | Delete normal account product data; unlink linked providers; legal-retention exception only. | CONDITIONAL-01 |
| `08G_Support_Inquiry` | Support form | category / reply email / content / up to 3 images / send | Exact retention/disclosure is release follow-up. | PASS for UI |
| `08G1_Inquiry_Category_Sheet` | Inquiry category selection | select category → form | Current options = app error / workout-record·routine / analysis·data / account·login / feature suggestion / other. | PASS |
| `08G2_Inquiry_Submitted` | Send success | Confirm dismisses success | Current simplified dialog copy canonical. | PASS |
| `08G3_Inquiry_Send_Failed` | Send failure | Cancel / retry | Retry after connectivity check; do not silently duplicate submissions. | PASS |
| `08H_Language_Settings` | Language selection | Korean / English applies immediately | Current selection = Korean. No separate Save. | PASS |
| `08A1_Settings_Home_SubscriptionToast` | Subscription row tapped | show `준비 중인 기능이에요.` and remain Settings | No billing/product catalog implementation. | PASS |

# Cross-screen route rules not encoded as Figma prototype reactions

Current canonical frames inspected in this QA have no usable Figma prototype reactions for the product routing contract.

Therefore production navigation must follow GitHub behavior rules, not inferred node links.

Key routes:
- Login success existing account → Home
- first-time auth → Basic Info → Home
- Home blank workout → existing Group 05 shell, zero ExerciseList
- Home routine create / Routine + / Routine empty CTA → 03E
- Routine detail Start → Active Workout
- exercise selection commit → return to originating routine/active-workout flow
- custom exercise Create Save → originating search with new exercise selected
- custom exercise Edit Save → that exercise detail
- workout completion Detail → 07D saved-session detail
- workout completion Home → Home
- Settings legal rows → public external legal documents

# Final screen-by-screen verdict

Mapped canonical frames: **94 / 94**

### PASS / adequately specified
Most static/state/detail/dialog/sheet screens in Groups 01, 04, 06, 07, 08, and the locked parts of Groups 02/03/05.

### FIX
- none in the current frozen visual contract.

### DECISION NEEDED
2. Routine `복제` exact behavior.
3. W / D / F routine-set semantics.
4. Automatic Rest Timer already-running / end-feedback runtime policy.
5. Active-session recovery system-notification UX.
6. Duration Active Workout timed-set interaction.
7. Production technology stack / platform architecture.

### CONDITIONAL
- Apple sign-in/account copy if iOS is included in launch scope.
- notification runtime/delivery semantics beyond the current settings UI.
- final timer sound assets.
- Production exercise-thumbnail crop/mapping.

**Result: the 94 screens are now individually mapped, but the implementation handoff is NOT a full PASS until the DECISION NEEDED items above are resolved.**
