# 2026-09-18 MVP Figma Maintenance Checkpoint

**Date:** 2026-09-18  
**Status:** PO APPROVED · FIGMA REFLECTED · FOCUSED QA PASS · NO CURSOR HANDOFF

## Scope

Targeted post-closure Figma/product-policy maintenance performed on Groups 03–05.

This checkpoint records only the explicit PO-directed amendments below. Previously closed flows remain closed unless a later Decision explicitly supersedes them.

Canonical Figma:
- file: `W3lZurXCXbThP67rF2xk2b`
- MVP page: `MVP_전체_와이어프레임` — `34:1076`
- shared page: `Common_Component`

---

## Group 03 — Routine maintenance

### Routine Summary surface
- shared `Routine Summary` master uses the same `bg/workout-live` token as Workout LiveBar
- token: `VariableID:1485:921`
- existing border treatment preserved
- representative 03C / 03D / empty instances inherit the shared change

### ExerciseCard View simplification
- `Mode=View` no longer shows the trailing more/ellipsis action
- freed horizontal space is reassigned to exercise information/name
- View exercise-name width expands from 148 → 204
- Edit / Workout modes retain their existing trailing action behavior

### SetActions spacing
- add/delete action gap reduced from 16 → 6
- existing `spacing/6` token reused
- affected shared modes: Edit / Workout / WorkoutReps / WorkoutDuration / WorkoutAssisted
- resulting action stack height: 90

### Routine-name policy
Decision authority:
- `docs/ux-decisions/2026-09-18-group03-routine-name-auto-default-policy.md`

Locked:
- name input optional
- blank valid routine saves as `나의 루틴 YYMMDD`
- same-date automatic names append `(2)`, `(3)`...
- generated name remains editable and does not regenerate after later exercise edits

Figma create/save-state alignment for this policy remains the explicit Group 03 focused follow-up unless separately completed.

---

## Group 04 — Exercise library / custom exercise maintenance

### 04B selected-row spacing
`04B_Search_Selected` selected exercise row:
- selection indicator width remains 4
- gap between the left selected indicator and row content increased one spacing level
- effective gap: 4 → 8
- shared selected row structure remains linked

### 04E standalone settings divider cleanup
`CustomExerciseSettingsSection` standalone cards:
- removed obsolete bottom divider from each independent row
- applied across Default / Filled / FilledNoSecondary / HistoryLocked variants
- affected fields: equipment / primary muscle / secondary muscle / recording type

The grouped-list divider rule remains unchanged for actual continuous lists.

### Custom exercise required fields
Decision authority:
- `docs/ux-decisions/2026-09-15-group04-custom-exercise-selection-flow.md`

Required:
- `운동명`
- `주 타겟 근육`
- `기록 방식`

Optional:
- `장비`
- `보조 타겟 근육`

### Custom exercise save action
Decision authority:
- `docs/ux-decisions/2026-09-15-group04-custom-exercise-save-destination.md`

Locked action hierarchy:
- primary commit = bottom Primary CTA `저장`
- Create header right = none
- Edit header right = Trash
- Edit save starts Disabled until a valid change exists
- old header Save pattern removed
- old bottom `운동 삭제 / 확인` DualCTA removed

Shared Figma:
- `CustomExerciseSaveFooter`
- `State=Default / Disabled`

Applied:
- `04E_Custom_Create`
- `04E_Custom_Create_Valid`
- `04EF_Custom_Unsaved_Confirm`
- `04F_Custom_Edit`
- `04F_Custom_Edit_HistoryLocked`

### CTA Button label-binding repair
Shared `CTA Button`:
- repaired missing Label component-property binding on Disabled / Pressed variants
- this fixed rendered dummy `버튼 텍스트` in 04E/F footer Save states
- current rendered label = `저장`

### History-locked recording type
`04F_Custom_Edit_HistoryLocked`:
- recording type remains `ValueOnly` read-only
- tap does not open selector
- tap does not trigger Toast
- persistent neutral inline hint is shown:
  - `기록이 있는 운동은 기록 방식을 변경할 수 없어요.`

Shared additions:
- `icon/hint` → `State=Error / Info`
- existing Group 01 validation remains Error
- new `InlineHint` shared component
- Info hint uses caption-style text + `text/secondary`
- icon/text gap = 4
- settings/hint gap = 8

Focused read-back:
- no Toast instance
- recording type = ValueOnly
- no bottom-footer overlap
- PASS

---

## Group 05 — Replacement exercise visual maintenance

### Exercise replacement options
Shared `ExerciseReplaceItem` converted to the accepted standalone-card surface:
- fill = `bg/surface`
- no outer stroke
- radius = 12
- subtle `0 2px 8px` shadow at ~5%
- RadioButton selection behavior unchanged

Visible result:
- `05H_Exercise_Replace_Selected`
- shared-component inheritance also aligns `05G_Exercise_Replace_Suggest`
- shared-component inheritance also aligns `05G2_Exercise_Replace_SecondBatch`

The existing Group 05 exception remains:
- replacement selection uses RadioButton
- commit uses explicit `선택 완료`

### ActionRows contrast adjustment

PO approved the shared bottom-sheet/action-sheet `ActionRows` background adjustment.

Applied to all shared variants:
- `Mode=Workout, Buttons=3`
- `Mode=RoutineExercise, Buttons=3`
- `Mode=RoutineList, Buttons=3`
- `Mode=CustomExercise, Buttons=2`

Change:
- background: `bg/default` → `bg/surface`
- outer `border/default` preserved
- vertical Divider treatment preserved

Intent:
- improve separation between action columns by increasing background/divider contrast slightly
- do not strengthen the divider itself
- representative state: `05I_Workout_Menu`
- focused read-back + screenshot QA PASS

### Secondary CTA outline
Problem:
- `CTA Button / Secondary` using global `border/default #E7EBEA` was too weak against the Light canvas.

Resolution:
- do not change global `border/default`
- add semantic `border/strong`
  - Light: `#D7DCDA`
  - Dark: `#343635`
- Secondary Default + Pressed use `border/strong`
- Secondary Disabled remains `border/default`

Representative verification:
- `05H_Exercise_Replace_Selected` bottom `다른 운동 보기` CTA
- outline remains visible but intentionally subtle

---

## QA boundary

Focused QA was performed on the changed representative states after each amendment.

Verified:
- shared component linkage preserved for changed UI
- no intentional detach introduced
- target labels/rendered states read back correctly
- no target-screen overlap after inline-hint insertion
- replacement card surface and Secondary CTA border bindings read back correctly

This checkpoint does **not** re-run already accepted whole-MVP QA.

---

## Development boundary

No Cursor / implementation handoff is authorized.

Product/UX + Figma remains the active execution boundary until the Product Owner explicitly transitions to development.
