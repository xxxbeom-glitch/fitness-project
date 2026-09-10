# CURRENT — Fitness Project

**Updated:** 2026-09-10

## Current mode

`PRODUCT/UX FIGMA · GROUP 05 ACTIVE WORKOUT ACTIVE · LOCAL ACTION MENU PATTERN PASS · NO CURSOR IMPLEMENTATION HANDOFF`

## Resume rule

다음 대화에서는 이미 PO 승인 또는 QA PASS된 범위를 다시 처음부터 검토하지 않는다.

재개 순서:

`PROJECT_INSTRUCTIONS → CURRENT → latest active checkpoint → NEXT OPEN ITEM`

## Latest active checkpoint

- `docs/ux-decisions/2026-09-10-action-menu-presentation.md`

Supporting checkpoints:

- `docs/ux-decisions/2026-09-10-group05-recovery-presentation-correction.md`
- `docs/ux-decisions/2026-09-10-group05-figma-foundation.md`

PO clarification에 따라 Group 05 Active Workout은 기존 옛 Group 05 카드 스타일을 기준으로 새로 그리지 않고, 현재 승인된 Routine 계열 중 **`03E2_Routine_Create_WithExercises`를 visual/interaction foundation으로 재사용**한다.

Current Group 05 foundation:

- `05A_Workout_Weight` — `148:1979`
- `05I_Workout_Menu` — `148:3392`
- `05J_Reorder` — `36:3609`
- shared UI page — `MVP_공용_UI` — `105:3113`
- local component library — `635:788`

Group 05 current binding state:

- active workout `ExerciseCard` variants are local and stale visual/layout instance overrides were cleaned from visible Group 05 screens
- `LeftAction=Back, RightAction=Timer` is a true variant inside the local `Nav Header` component set
- `icon/timer-refresh` is inside `LOCAL_COMPONENT_LIBRARY`
- repeated attachment status UI is local `AttachmentTag` component `693:6035`
- 05I now uses local icon-action `ActionSheet` / `ActionRows`
- local action icons include `icon/replace`, `icon/trash`, `icon/copy`; existing local `icon/edit` / `icon/drag-handle` are reused
- 05J uses local `ReorderRow` / `icon/drag-handle`
- visible Group 05 dialog states use local `DialogCard` / `DialogButtons`
- current visible Group 05 screens retain local component ownership and external Variable 0 / missing Variable 0
- visible raw `AttachmentTag` frame 0
- `ExerciseCard` / `DialogCard` stale visual-layout overrides 0

Representative visual read-back after the latest action-menu change: `05I` PASS.

### Action-menu presentation

Confirmed direction:

- 05I `...` menu: `대체 운동 / 순서 변경 / 삭제` icon action bottom sheet
- `운동 정보` is not duplicated in 05I because tapping the exercise name is the information entry
- routine-edit exercise card `...`: `순서 변경 / 대체 운동 / 삭제` icon action bottom sheet
- 03A routine-list card `...`: bottom sheet is not used; use a compact floating icon panel `복제 / 수정 / 삭제`
- custom-exercise `수정 / 삭제` icon action-sheet variant exists in the local library; Group 04 canonical screens were not reopened solely to add a menu state that does not currently exist

Figma reflection:

- local `ActionRows` component set — `707:1114`
- local `ActionSheet` component set — `707:1197`
- `03A_Routine_List_Menu` — `706:5023`
- `03F_Routine_Exercise_Menu` — `706:5087`
- imported temporary action-menu reference screens removed from Group 05 after localization

Canonical decision/checkpoint:

- `docs/ux-decisions/2026-09-10-action-menu-presentation.md`

### Active-session recovery presentation correction

The session-reliability/recovery requirement remains locked, but the previous `05P_Workout_Recovery` in-app banner presentation was not the intended UX.

Confirmed direction:

- an in-progress workout remains active across interruption/restart
- do **not** show a dedicated in-app `진행 중이던 운동을 복구했어요` screen/banner
- surface the ongoing active session through the **system notification area**
- returning to the app continues the same active workout session

Figma reflection:

- `05P_Workout_Recovery` (`148:3892`) removed from `05 운동 중`
- no replacement in-app recovery banner created

Canonical decision:

- `docs/ux-decisions/2026-09-10-active-session-system-notification.md`

Important: the page-wide/local-binding QA pass does not imply Product/UX approval of every draft state. `05N_Workout_OtherRoutine` remains subject to product-flow review. Hidden `05F_Workout_RestTimer_TBD` remains deferred.

---

# ACTIVE TRACK — Group 05 운동 중

Canonical Figma:

- file: `W3lZurXCXbThP67rF2xk2b`
- page: `05 운동 중` — `233:2076`
- current main screen: `05A_Workout_Weight` — `148:1979`
- current menu screen: `05I_Workout_Menu` — `148:3392`
- current reorder screen: `05J_Reorder` — `36:3609`
- shared UI page: `MVP_공용_UI` — `105:3113`
- local component library: `635:788`

### Locked foundation

- 05 Active Workout main UI continues from `03E2_Routine_Create_WithExercises`, not from a parallel card system.
- KG / REPS editable exercise-card structure is reused from the current local `ExerciseCard` family.
- Active Workout uses local `Mode=Workout` variant.
- attachment status chip remains visually aligned with Group 03 approved treatment.
- existing local Variables/Styles/Components take priority over creating new assets.
- no external library dependency may be reintroduced.
- no screen-instance detach shortcut.

### Workflow for Group 05

Product/UX decision and Figma screen work proceed together:

`one interaction/state review → PO decision where needed → immediate Figma reflection → focused QA → next interaction/state`

Do not complete all planning first and postpone all Figma work to the end.

## NEXT OPEN ITEM — exact resume point

Return to the temporarily deferred product-flow review for:

- `05N_Workout_OtherRoutine` — `148:3561`

Re-present the switch-to-another-routine behavior to the PO and decide it before changing 05N. Do not reopen the just-passed action-menu work.

Hidden `05F_Workout_RestTimer_TBD` remains deferred.

Related locked policy references include:

- `docs/ux-decisions/2026-09-03-active-workout-routine-update.md`
- `docs/ux-decisions/2026-09-03-rest-timer-behavior.md`
- `docs/ux-decisions/2026-09-03-workout-end-flow.md`
- `docs/ux-decisions/2026-09-03-cable-attachment-active-workout.md`
- `docs/ux-decisions/2026-09-05-exercise-recording-types.md`
- `docs/ux-decisions/2026-09-05-duration-exercise-recording.md`
- `docs/ux-decisions/2026-09-03-assisted-machine-recording.md`
- `docs/ux-decisions/2026-09-10-active-session-system-notification.md`
- `docs/ux-decisions/2026-09-10-action-menu-presentation.md`

---

# CLOSED TRACK — 01–04 local component / token migration

Canonical Figma:

- file: `W3lZurXCXbThP67rF2xk2b`
- `01 로그인 · 첫 진입` — `233:2072`
- `02 홈` — `233:2073`
- `03 루틴` — `233:2074`
- `04 운동 목록 · 상세` — `233:2075`
- shared UI page: `MVP_공용_UI` — `105:3113`
- migration management frame: `LOCAL_COMPONENT_LIBRARY` — `635:788`

Migration rules/results:

- existing valid local components were retained
- external component families were localized only when no local equivalent existed
- previously localized component families were reused on later pages instead of duplicated
- screen instances were component-swapped; no detach-based screen duplication was used
- nested external component dependencies were also replaced
- external Variable/Style bindings and screen overrides were rebound to current local foundations
- existing Variant / Component Property / Auto Layout / instance override behavior was preserved
- representative post-migration visual/artifact read-back: PASS

Local foundation additions made only where an approved existing role had no local equivalent:

- dialog typography roles: `dialog/title`, `dialog/secondary`, `dialog/primary`
- Tag roles: `tag-bg/tricep`, `tag/tricep`, `tag-bg/shoulder`, `tag/shoulder` plus required local primitives
- `neutral/50`
- `border/thin = 0.5`
- action-menu family: `ActionRows`, `ActionSheet`, `icon/replace`, `icon/trash`, `icon/copy`

Important component cleanup:

- existing local Nav Header nested icons are now local
- existing Group 04 `ExerciseRowDetailAction` / `FilterSelectButton` nested chevron is now local
- `ExerciseSearchRow_Selected` master `598:1392` is now placed on `MVP_공용_UI` while preserving the same master ID and existing instance links
- 03A now has an explicit panel-style `...` representative state; this explicit PO change does not reopen unrelated Group 03 QA

Checkpoint:

- `docs/ux-decisions/2026-09-10-figma-local-component-migration.md`
- `docs/ux-decisions/2026-09-10-action-menu-presentation.md`

Do not reopen 01–04 visual design solely because component ownership changed.

---

# CLOSED TRACK — Group 04 운동 목록 · 상세

Group 04 screen-level Product/UX remains CLOSED.

Canonical page:

- `04 운동 목록 · 상세` — `233:2075`

Canonical states include:

- `04A_Search` — `207:1238`
- `04B_Search_Selected` — `515:1140`
- `04C_Search_Empty` — `539:1050`
- `04D_운동상세` — `40:2325`
- `04E_Custom_Create` — `34:1672`
- `04F_Custom_Edit` — `34:1692`
- `04G_Exercise_History` — `34:1714`
- `04H_Exercise_Attachment_Selection` — `170:2174`
- `04A_Filter_Equipment_Page` — `515:3327`
- `04A_Filter_BodyPart_Page` — `515:3514`
- `04H_Custom_Attachment_Input` — `552:3356`

Closure record:

- `docs/ux-decisions/2026-09-10-group04-closure-qa.md`

The local-component migration did not reopen or redesign Group 04. Post-migration structure/binding/visual regression QA remained PASS.

The local `ActionSheet / CustomExercise` variant is available for a future actual custom-exercise `...` trigger, but no new Group 04 screen was added by the latest action-menu change.

---

# PRESERVED DEFERRED TRACK — Analysis

Approved Analysis hierarchy remains locked:

1. 분석 홈
2. 부위별 분석
3. 운동별 성장
4. 운동 기록
5. 운동 기록 상세

Analysis basics already locked:

- default period = 최근 4주
- choices = 4주 / 3개월 / 6개월 / 1년
- headline metrics = 운동 횟수 / 완료 세트 / 운동 시간
- body-map contribution heuristic: primary completed set `1.0`, secondary `0.5`, incomplete `0`
- do not multiply the body-map value by kg/reps/duration/assistance
- do not label the heuristic as optimal/undertrained/overtrained/recovered

When Group 05/06 sequencing allows Analysis to resume, continue from:

- `docs/ux-decisions/2026-09-05-analysis-tab-ia.md`
- `docs/ux-decisions/2026-09-05-analysis-body-area-drilldown.md`
- `docs/ux-decisions/2026-09-05-analysis-exercise-progress.md`

Preserved next Analysis item:

`canonical muscle/body-part taxonomy → practical front/back body-map regions mapping`

---

# PRESERVED DEFERRED DATA TRACK — Exercise DB / media

Do not reopen completed broad source/video QA without a concrete Production conflict.

- existing canonical exercises = **195**
- P0 additions = **16**
- target derived Production artifact = **211**
- P0 canonical/data row QA = PASS / LOCKED
- P0 default media source lock = PASS
- derived 211-row workbook/runtime DB = **not yet regenerated**
- exact Production attachment allowlists / canonical IDs / media mapping = deferred

References:

- `docs/exercise-db/2026-09-05-p0-211-production-promotion-qa-result.md`
- `docs/exercise-db/2026-09-05-p0-16-default-media-source-lock.md`
- `docs/ux-decisions/2026-09-05-exercise-recording-types.md`

---

# Development boundary

**NO CURSOR IMPLEMENTATION HANDOFF.**

Product Owner가 개발 전환을 명시하기 전까지 Product/UX/Figma 단계에서 계속 진행한다.
