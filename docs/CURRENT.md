# CURRENT — Fitness Project

**Updated:** 2026-09-10

## Current mode

`PRODUCT/UX FIGMA · GROUP 05 ACTIVE WORKOUT ACTIVE · EXERCISE REPLACEMENT LOCALIZATION QA PASS · NO CURSOR IMPLEMENTATION HANDOFF`

## Resume rule

다음 대화에서는 이미 PO 승인 또는 QA PASS된 범위를 다시 처음부터 검토하지 않는다.

재개 순서:

`PROJECT_INSTRUCTIONS → CURRENT → latest active checkpoint → NEXT OPEN ITEM`

## Latest active checkpoint

- `docs/ux-decisions/2026-09-10-group05-exercise-replacement-localization.md`

Supporting checkpoints:

- `docs/ux-decisions/2026-09-10-group05-rest-timer-localization.md`
- `docs/ux-decisions/2026-09-10-routinelist-action-bottomsheet-correction.md`
- `docs/ux-decisions/2026-09-10-action-menu-binding-qa.md`
- `docs/ux-decisions/2026-09-10-action-menu-presentation.md`
- `docs/ux-decisions/2026-09-10-group05-recovery-presentation-correction.md`
- `docs/ux-decisions/2026-09-10-group05-figma-foundation.md`

PO clarification에 따라 Group 05 Active Workout은 기존 옛 Group 05 카드 스타일을 기준으로 새로 그리지 않고, 현재 승인된 Routine 계열 중 **`03E2_Routine_Create_WithExercises`를 visual/interaction foundation으로 재사용**한다.

Current Group 05 foundation:

- `05A_Workout_Weight` — `148:1979`
- `05F_Workout_RestTimer` — `721:3460`
- `05G_Exercise_Replace_Suggest` — `713:14539`
- `05H_Exercise_Replace_Selected` — `713:14526`
- `05I_Workout_Menu` — `148:3392`
- `05J_Reorder` — `36:3609`
- shared UI page — `MVP_공용_UI` — `105:3113`
- local component library — `635:788`

Group 05 current binding state:

- active workout `ExerciseCard` variants are local and stale visual/layout instance overrides were cleaned from visible Group 05 screens
- `LeftAction=Back, RightAction=Timer` is a true variant inside the local `Nav Header` component set
- `icon/timer-refresh` is inside `LOCAL_COMPONENT_LIBRARY`
- repeated attachment status UI is local `AttachmentTag` component `693:6035`
- `RestTimerPill` is local component `721:3456` inside `LOCAL_COMPONENT_LIBRARY`
- `05F_Workout_RestTimer` uses the local `RestTimerPill` and current local Active Workout component structure
- `RestTimerPill` uses existing local `glass/surface-20`, `radius/full`, spacing, text, danger-state Variables and local `display/01`; no new token added
- `RestTimerPill`: remote Variable 0 / missing Variable 0 / remote Style 0 / missing Style 0
- `05F_Workout_RestTimer`: missing main 0 / remote main 0 / remote Variable 0 / missing Variable 0 / remote Style 0 / missing Style 0
- replacement flow uses local `RadioButton` component set `723:918`
- replacement flow uses local `ExerciseReplaceItem` component set `723:938`
- `05G_Exercise_Replace_Suggest` and `05H_Exercise_Replace_Selected` use only local component mains, Variables and Styles
- `RadioButton`, `ExerciseReplaceItem`, `05G`, `05H`: missing main 0 / remote main 0 / missing Variable 0 / remote Variable 0 / missing Style 0 / remote Style 0
- 05I uses local icon-action `ActionSheet` / `ActionRows`
- local action icons include `icon/replace`, `icon/trash`, `icon/copy`; existing local `icon/edit` / `icon/drag-handle` are reused
- new action-menu family is rebound to existing local colors / spacing / radius / typography styles; no new token was added
- all bottom-sheet `ActionSheet` variants match canonical `BottomSheet / Menu` surface semantics: `glass/surface-20` + existing GLASS effect
- `ActionRows` inside bottom sheets use `bg/default` + local border treatment
- 03A also uses the shared bottom-sheet presentation through `ActionSheet / Mode=RoutineList`; the temporary floating-panel treatment is superseded
- `ActionRows`, `ActionSheet`, `05I`, `03A_Routine_List_Menu`, `03F_Routine_Exercise_Menu`: missing main 0 / remote main 0
- 05J uses local `ReorderRow` / `icon/drag-handle`
- visible Group 05 dialog states use local `DialogCard` / `DialogButtons`
- visible raw `AttachmentTag` frame 0
- `ExerciseCard` / `DialogCard` stale visual-layout overrides 0

Representative visual read-back after latest changes: `05F_Workout_RestTimer`, `05G_Exercise_Replace_Suggest`, `05H_Exercise_Replace_Selected`, `05I`, `03A_Routine_List_Menu`, `03F_Routine_Exercise_Menu` PASS.

### Exercise replacement presentation + binding

Current represented flow:

`05I 대체 운동 → 05G 추천 미선택 → 05H 추천 선택 → 선택 완료`

Confirmed presentation:

- initial replacement screen recommends three similar exercises
- replacement is single-select
- before selection, `선택 완료` is disabled
- after one exercise is selected, `선택 완료` is enabled
- `다른 운동 보기` is the escape path to browse outside the recommended three
- duplicated content heading was removed; local `Nav Header` owns `대체 운동 선택` and the body keeps only the helper copy
- copied 360×800 reference screens were normalized to Group 05 360×780

Figma reflection:

- `05G_Exercise_Replace_Suggest` — `713:14539`
- `05H_Exercise_Replace_Selected` — `713:14526`
- local `RadioButton` component set — `723:918`
  - `State=Unchecked`
  - `State=Checked`
- local `ExerciseReplaceItem` component set — `723:938`
  - `Selected=False`
  - `Selected=True`

Existing local `Nav Header`, `CTA Button`, `Tag`, Variables and text styles are reused. No new token was created.

Binding QA:

- `RadioButton`: missing main 0 / remote main 0 / missing Variable 0 / remote Variable 0 / missing Style 0 / remote Style 0
- `ExerciseReplaceItem`: missing main 0 / remote main 0 / missing Variable 0 / remote Variable 0 / missing Style 0 / remote Style 0
- `05G`: missing main 0 / remote main 0 / missing Variable 0 / remote Variable 0 / missing Style 0 / remote Style 0
- `05H`: missing main 0 / remote main 0 / missing Variable 0 / remote Variable 0 / missing Style 0 / remote Style 0
- screenshot read-back after top-level layout and footer-label corrections: PASS

Open replacement-flow policy:

- exact behavior when the user attempts replacement **after one or more sets of the current exercise have already been completed** is not yet decided
- completed workout records must not be silently discarded

Canonical record:

- `docs/ux-decisions/2026-09-10-group05-exercise-replacement-localization.md`

### Rest timer presentation + binding

Confirmed direction:

- set completion automatically starts the rest timer
- rest timer appears as a compact toast / pill dropping down from the top
- countdown remains visible in the pill by default
- only `X` is exposed as the visible control in the toast
- `X` closes the visible toast UI; it does not open a complex timer-control flow
- when countdown reaches the end, the pill moves upward and disappears
- timer never blocks continuing the workout
- exact vibration / sound / background-notification behavior remains deferred

Figma reflection:

- local `RestTimerPill` — `721:3456`
- `05F_Workout_RestTimer` — `721:3460`
- old hidden `05F_Workout_RestTimer_TBD` removed
- temporary copied `410_Rest_Timer` frame removed from Group 05 after localization

The copied `410_Rest_Timer` source contained no actual Figma prototype reactions. Motion is locked as a product interaction rule; `05F` is the static representative state.

Canonical records:

- `docs/ux-decisions/2026-09-03-rest-timer-behavior.md`
- `docs/ux-decisions/2026-09-10-group05-rest-timer-localization.md`

### Action-menu presentation + binding

Confirmed direction:

- 05I `...` menu: `대체 운동 / 순서 변경 / 삭제` icon action bottom sheet
- `운동 정보` is not duplicated in 05I because tapping the exercise name is the information entry
- routine-edit exercise card `...`: `순서 변경 / 대체 운동 / 삭제` icon action bottom sheet
- 03A routine-list card `...`: `복제 / 수정 / 삭제` icon action bottom sheet
- custom-exercise `수정 / 삭제` icon action-sheet variant exists in the local library; Group 04 canonical screens were not reopened solely to add a menu state that does not currently exist

Figma reflection:

- local `ActionRows` component set — `707:1114`
- local `ActionSheet` component set — `707:1197`
- `ActionSheet / Mode=RoutineList` — `714:664`
- `03A_Routine_List_Menu` — `706:5023`
- `03F_Routine_Exercise_Menu` — `706:5087`
- imported temporary action-menu reference screens removed from Group 05 after localization

Binding QA current state:

- bottom-sheet `ActionRows` surface → local `bg/default`
- bottom-sheet action-row border → existing local border treatment
- bottom-sheet action-row dividers → local `bg/elevated`
- labels → local `label/02` + `text/primary`
- `icon/replace`, `icon/trash`, `icon/copy` foregrounds → local `text/primary`
- `ActionSheet` surface → local `glass/surface-20`
- `ActionSheet` effect → canonical `BottomSheet / Menu` GLASS effect
- ActionSheet title → `heading/01` + `text/primary`
- ActionSheet subtitle → `body/02` + `text/secondary`
- 03A dim layer → local `bg/overlay`
- no new token added

Canonical records:

- `docs/ux-decisions/2026-09-10-action-menu-presentation.md`
- `docs/ux-decisions/2026-09-10-action-menu-binding-qa.md`
- `docs/ux-decisions/2026-09-10-routinelist-action-bottomsheet-correction.md`

The earlier 03A floating-panel interpretation is superseded by the latest PO correction above. Other action-menu QA remains valid.

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

Important: replacement behavior after completed sets and `05N_Workout_OtherRoutine` remain subject to product-flow review. 05F is no longer deferred.

---

# ACTIVE TRACK — Group 05 운동 중

Canonical Figma:

- file: `W3lZurXCXbThP67rF2xk2b`
- page: `05 운동 중` — `233:2076`
- current main screen: `05A_Workout_Weight` — `148:1979`
- current rest timer screen: `05F_Workout_RestTimer` — `721:3460`
- replacement suggest screen: `05G_Exercise_Replace_Suggest` — `713:14539`
- replacement selected screen: `05H_Exercise_Replace_Selected` — `713:14526`
- current menu screen: `05I_Workout_Menu` — `148:3392`
- current reorder screen: `05J_Reorder` — `36:3609`
- shared UI page: `MVP_공용_UI` — `105:3113`
- local component library: `635:788`

### Locked foundation

- 05 Active Workout main UI continues from `03E2_Routine_Create_WithExercises`, not from a parallel card system.
- KG / REPS editable exercise-card structure is reused from the current local `ExerciseCard` family.
- Active Workout uses local `Mode=Workout` variant.
- attachment status chip remains visually aligned with Group 03 approved treatment.
- rest timer uses local `RestTimerPill` and is an overlay toast/pill, not an inline persistent banner.
- replacement recommendations use local `ExerciseReplaceItem` + `RadioButton`; no copied external replacement components remain in canonical 05G/05H.
- existing local Variables/Styles/Components take priority over creating new assets.
- no external library dependency may be reintroduced.
- no screen-instance detach shortcut.

### Workflow for Group 05

Product/UX decision and Figma screen work proceed together:

`one interaction/state review → PO decision where needed → immediate Figma reflection → focused QA → next interaction/state`

Do not complete all planning first and postpone all Figma work to the end.

## NEXT OPEN ITEM — exact resume point

Decide the replacement edge case first:

- when a user has already completed one or more sets for the current exercise and then chooses `대체 운동`, define exactly how those completed records and the newly selected exercise coexist
- do not silently discard completed set records
- reflect only the resulting edge case if additional UI is actually needed

After that, return to:

- `05N_Workout_OtherRoutine` — `148:3561`

05N trigger context:

- a routine/workout is already active
- while it is active, the user goes to the Routine list and attempts to start a different routine
- `05N` is the conflict-confirmation state shown at that point

Do not reopen passed 05F/action-menu/replacement localization work without a concrete conflict.

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
- `docs/ux-decisions/2026-09-10-action-menu-binding-qa.md`
- `docs/ux-decisions/2026-09-10-routinelist-action-bottomsheet-correction.md`
- `docs/ux-decisions/2026-09-10-group05-rest-timer-localization.md`
- `docs/ux-decisions/2026-09-10-group05-exercise-replacement-localization.md`

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
- 03A has an explicit bottom-sheet `...` representative state using shared `ActionSheet / Mode=RoutineList`; this explicit PO change does not reopen unrelated Group 03 QA

Checkpoint:

- `docs/ux-decisions/2026-09-10-figma-local-component-migration.md`
- `docs/ux-decisions/2026-09-10-action-menu-presentation.md`
- `docs/ux-decisions/2026-09-10-action-menu-binding-qa.md`
- `docs/ux-decisions/2026-09-10-routinelist-action-bottomsheet-correction.md`

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
