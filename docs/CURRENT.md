# CURRENT — Fitness Project

**Updated:** 2026-09-10

## Current mode

`PRODUCT/UX FIGMA · GROUP 05 ACTIVE WORKOUT ACTIVE · REPLACEMENT FLOW FINALIZED + CLEANED · NEXT: GROUP 05 CLOSURE REVIEW · NO CURSOR IMPLEMENTATION HANDOFF`

## Resume rule

다음 대화에서는 이미 PO 승인 또는 QA PASS된 범위를 다시 처음부터 검토하지 않는다.

재개 순서:

`PROJECT_INSTRUCTIONS → CURRENT → latest active checkpoint → NEXT OPEN ITEM`

## Latest active checkpoint

- `docs/ux-decisions/2026-09-10-group05-exercise-replacement-localization.md`

Supporting checkpoints:

- `docs/ux-decisions/2026-09-10-group05-other-routine-switch.md`
- `docs/ux-decisions/2026-09-10-exercisecard-exerciseinfo-layout.md`
- `docs/ux-decisions/2026-09-10-group05-rest-timer-localization.md`
- `docs/ux-decisions/2026-09-10-routinelist-action-bottomsheet-correction.md`
- `docs/ux-decisions/2026-09-10-action-menu-binding-qa.md`
- `docs/ux-decisions/2026-09-10-action-menu-presentation.md`
- `docs/ux-decisions/2026-09-10-group05-recovery-presentation-correction.md`
- `docs/ux-decisions/2026-09-10-group05-figma-foundation.md`

---

# ACTIVE TRACK — Group 05 운동 중

Canonical Figma:

- file: `W3lZurXCXbThP67rF2xk2b`
- page: `05 운동 중` — `233:2076`
- main: `05A_Workout_Weight` — `148:1979`
- rest timer: `05F_Workout_RestTimer` — `721:3460`
- replacement first group / unselected: `05G_Exercise_Replace_Suggest` — `713:14539`
- replacement selected representative: `05H_Exercise_Replace_Selected` — `713:14526`
- replacement second group: `05G2_Exercise_Replace_SecondBatch` — `731:3906`
- replacement completed-set delete confirm: `05P_Exercise_Replace_DeleteConfirm` — `734:3883`
- action menu: `05I_Workout_Menu` — `148:3392`
- reorder: `05J_Reorder` — `36:3609`
- end incomplete: `05K_End_Incomplete` — `36:3620`
- end complete: `05L_End_Complete` — `36:3623`
- discard: `05M_Discard` — `36:3626`
- other-routine incomplete: `05N_Workout_OtherRoutine_Incomplete` — `727:3622`
- other-routine complete: `05N_Workout_OtherRoutine_Complete` — `727:3842`
- routine update: `05O_Workout_UpdateRoutine` — `148:3730`
- shared UI: `MVP_공용_UI` — `105:3113`
- local component library: `635:788`

## Group 05 locked foundation

- Active Workout UI continues from approved `03E2_Routine_Create_WithExercises`; do not create a parallel card system.
- local `ExerciseCard` component set `637:3561` is canonical.
- `ExerciseCard > CardHeader > ExerciseInfo` uses vertical Fill + vertically centered content across all variants.
- existing Variables / Styles → Components → Patterns → Examples are reused before adding assets.
- no screen-instance detach shortcut.
- no external library dependency may be reintroduced.

## Rest timer — CLOSED / QA PASS

- completed set automatically starts rest timer.
- `RestTimerPill` local component `721:3456` is used as a top overlay toast/pill.
- timer does not block continuing the workout.
- X dismisses visible pill only.
- completion moves pill upward/disappears.
- `05F_Workout_RestTimer` local binding QA: missing/remote component, Variable, Style = 0.

## Action menu — CLOSED / QA PASS

- Active Workout `...`: `대체 운동 / 순서 변경 / 삭제`.
- routine-edit exercise `...`: `순서 변경 / 대체 운동 / 삭제`.
- routine-list `...`: `복제 / 수정 / 삭제`.
- local `ActionRows` / `ActionSheet` family reused; missing/remote main = 0.

## Exercise replacement — PO APPROVED / FIGMA REFLECTED / QA PASS

Canonical visible replacement states are intentionally reduced to **4**:

1. `05G_Exercise_Replace_Suggest` — first 3, unselected
2. `05H_Exercise_Replace_Selected` — selected-state representative
3. `05G2_Exercise_Replace_SecondBatch` — remaining up to 3
4. `05P_Exercise_Replace_DeleteConfirm` — completed-set destructive confirmation

Removed as redundant:

- `05H2_Exercise_Replace_SecondBatch_Selected` — deleted; selection meaning is already represented by `05H`.

Recommendation policy:

`first 3 ↔ 다른 운동 보기 ↔ second 3`

- prepare up to 6 replacement candidates per exercise.
- show up to 3 at a time.
- the two groups do not duplicate each other.
- `다른 운동 보기` cycles only inside those preselected candidates.
- never introduce a 7th+ candidate.
- do not expose `전체 운동에서 찾기`.
- replacement is applied only after selection + `선택 완료`.

Completed-set replacement policy:

- completed set = 0 → replace directly without destructive dialog.
- completed set ≥ 1 → show `05P_Exercise_Replace_DeleteConfirm`.
- title: `완료한 세트 기록을 삭제할까요?`
- description: `대체 운동으로 변경하면 이 운동에서 완료한 세트 기록이 삭제됩니다.`
- actions: `취소 / 삭제하고 변경`.
- confirm deletes completed-set records for **that exercise in the current session only**, then replaces it.
- past saved workout history is not affected.
- this is an explicit confirmed destructive action, never a silent discard.

Focused cleanup QA:

- replacement-related top-level screen count = 4.
- redundant second-batch selected screen = 0.
- copied 430 / DRAFT replacement screen = 0.
- `05P`: missing main 0 / remote main 0 / missing Variable 0 / remote Variable 0 / missing Style 0 / remote Style 0.
- final copy screenshot read-back = PASS.
- no new token/component added.

Canonical record:

- `docs/ux-decisions/2026-09-10-group05-exercise-replacement-localization.md`

## Other-routine switch — CLOSED / QA PASS

Trigger: active workout exists and user attempts to start another routine.

- do not stack generic 05N then 05K/05L.
- inspect current workout state and directly show matching 05N dialog.
- incomplete → `05N_Workout_OtherRoutine_Incomplete`.
- complete → `05N_Workout_OtherRoutine_Complete`.
- both reuse local `DialogCard / DialogButtons`.
- missing/remote component, Variable, Style = 0.

Canonical record:

- `docs/ux-decisions/2026-09-10-group05-other-routine-switch.md`

## Active-session recovery — CLOSED

- in-progress session survives interruption/restart.
- no dedicated in-app recovery banner.
- ongoing active session is surfaced through system notification area.
- returning to app resumes same active workout.

Canonical record:

- `docs/ux-decisions/2026-09-10-active-session-system-notification.md`

## NEXT OPEN ITEM — exact resume point

**Group 05 closure review.**

Only check whether any unresolved Product/UX interaction remains in Group 05 after the replacement edge-case decision.

- do not reopen passed 05F / action menu / replacement / ExerciseInfo / 05N work without a concrete conflict.
- if no unresolved interaction remains, record Group 05 closure and move to the next Product/UX track.
- do not start Cursor/development handoff unless Product Owner explicitly switches to development.

Related policy references:

- `docs/ux-decisions/2026-09-03-active-workout-routine-update.md`
- `docs/ux-decisions/2026-09-03-rest-timer-behavior.md`
- `docs/ux-decisions/2026-09-03-workout-end-flow.md`
- `docs/ux-decisions/2026-09-03-cable-attachment-active-workout.md`
- `docs/ux-decisions/2026-09-05-exercise-recording-types.md`
- `docs/ux-decisions/2026-09-05-duration-exercise-recording.md`
- `docs/ux-decisions/2026-09-03-assisted-machine-recording.md`
- `docs/ux-decisions/2026-09-10-active-session-system-notification.md`
- `docs/ux-decisions/2026-09-10-action-menu-presentation.md`
- `docs/ux-decisions/2026-09-10-action-menu-binding-qa.md`
- `docs/ux-decisions/2026-09-10-routinelist-action-bottomsheet-correction.md`
- `docs/ux-decisions/2026-09-10-group05-rest-timer-localization.md`
- `docs/ux-decisions/2026-09-10-group05-exercise-replacement-localization.md`
- `docs/ux-decisions/2026-09-10-exercisecard-exerciseinfo-layout.md`
- `docs/ux-decisions/2026-09-10-group05-other-routine-switch.md`

---

# CLOSED TRACK — 01–04 local component / token migration

Canonical Figma pages:

- `01 로그인 · 첫 진입` — `233:2072`
- `02 홈` — `233:2073`
- `03 루틴` — `233:2074`
- `04 운동 목록 · 상세` — `233:2075`
- shared UI — `MVP_공용_UI` — `105:3113`
- local component library — `635:788`

Rules/results:

- approved existing local components retained.
- external families localized only where no local equivalent existed.
- no detach-based screen duplication.
- nested external dependencies replaced.
- Variable/Style bindings rebound to local foundations.
- post-migration representative visual/artifact QA PASS.

Checkpoint:

- `docs/ux-decisions/2026-09-10-figma-local-component-migration.md`

---

# CLOSED TRACK — Group 04 운동 목록 · 상세

Group 04 screen-level Product/UX remains CLOSED.

Closure record:

- `docs/ux-decisions/2026-09-10-group04-closure-qa.md`

Do not reopen solely because component ownership changed.

---

# PRESERVED DEFERRED TRACK — Analysis

Approved hierarchy remains locked:

1. 분석 홈
2. 부위별 분석
3. 운동별 성장
4. 운동 기록
5. 운동 기록 상세

Locked basics:

- default period = 최근 4주
- choices = 4주 / 3개월 / 6개월 / 1년
- headline metrics = 운동 횟수 / 완료 세트 / 운동 시간
- body-map contribution: primary completed set `1.0`, secondary `0.5`, incomplete `0`
- no kg/reps/duration/assistance multiplier for body-map contribution.

Resume references:

- `docs/ux-decisions/2026-09-05-analysis-tab-ia.md`
- `docs/ux-decisions/2026-09-05-analysis-body-area-drilldown.md`
- `docs/ux-decisions/2026-09-05-analysis-exercise-progress.md`

Preserved next Analysis item:

`canonical muscle/body-part taxonomy → practical front/back body-map regions mapping`

---

# PRESERVED DEFERRED DATA TRACK — Exercise DB / media

- existing canonical exercises = **195**
- P0 additions = **16**
- target derived Production artifact = **211**
- P0 canonical/data row QA = PASS / LOCKED
- P0 default media source lock = PASS
- derived 211-row workbook/runtime DB = not yet regenerated
- exact Production attachment allowlists / canonical IDs / media mapping = deferred

References:

- `docs/exercise-db/2026-09-05-p0-211-production-promotion-qa-result.md`
- `docs/exercise-db/2026-09-05-p0-16-default-media-source-lock.md`
- `docs/ux-decisions/2026-09-05-exercise-recording-types.md`

---

# Development boundary

**NO CURSOR IMPLEMENTATION HANDOFF.**

Product Owner가 개발 전환을 명시하기 전까지 Product/UX/Figma 단계에서 계속 진행한다.
