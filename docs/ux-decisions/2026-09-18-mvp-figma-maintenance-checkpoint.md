# 2026-09-18 MVP Figma Maintenance Checkpoint

**Date:** 2026-09-18  
**Status:** PO APPROVED · FIGMA REFLECTED · FOCUSED QA PASS · NO CURSOR HANDOFF

## Scope

Targeted post-closure Figma/product-policy maintenance performed on Groups 02–05 and Group 08.

This checkpoint records only the explicit PO-directed amendments below. Previously closed flows remain closed unless a later Decision explicitly supersedes them.

Canonical Figma:
- file: `W3lZurXCXbThP67rF2xk2b`
- MVP page: `MVP_전체_와이어프레임` — `34:1076`
- shared page: `Common_Component`

---

## Group 02 — Home no-routine start amendment

Decision authority:
- `docs/ux-decisions/2026-09-18-group02-home-blank-workout-entry.md`

PO-approved product change:
- `02A_Home_NoRoutine` no longer leads with recommended routines
- primary actions are `빈 운동 시작` and `내 루틴 만들기`
- `빈 운동 시작` starts an unsaved-routine active workout with zero exercises, then uses the existing exercise-add flow
- completing a blank workout creates normal workout history but does not automatically create a saved routine
- recommended ready-made routines remain an MVP secondary path under the Routine area

Figma:
- `02A_Home_NoRoutine` — `1346:686`
- shared `HomeStartChoiceCard` — `1719:1048`
- former `Type=Recommended` variant repurposed as `Type=BlankWorkout` — `1719:1042`
- copy:
  - title `빈 운동 시작`
  - description `루틴 없이 운동을 추가하며 바로 기록해보세요.`
- `Type=BuildOwn` unchanged

Focused read-back:
- 02A first card resolves to `Type=BlankWorkout`
- BuildOwn remains unchanged
- screenshot generated for representative 02A state
- PASS for the 02A amendment itself

Direct linked follow-up:
- current Figma has no dedicated zero-exercise Active Workout state
- create one as a targeted Group 05 follow-up without reopening unrelated Group 05 behavior

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

## Group 08 — Settings visual maintenance

### 08D1 default rest-time wheel picker container

PO approved aligning `08D1_Default_Rest_Time_Sheet` with the internal-box treatment already used by other Group 08 bottom sheets.

Shared Figma:
- `WheelPicker/SingleColumn` master: `1169:1105`
- representative instance: `WheelPicker_RestTime` — `1170:697`
- representative screen: `08D1_Default_Rest_Time_Sheet` — `1163:676`

Applied:
- picker background = `bg/default` (`VariableID:278:917`)
- radius = `12` using the existing radius token (`VariableID:278:910`)
- picker width/height remain `320 × 200`
- existing wheel rows remain unchanged
- existing selected-row top/bottom lines remain unchanged
- no extra stroke or shadow added

Intent:
- match the visual hierarchy of other Group 08 bottom-sheet internal containers such as `OptionsList`
- keep the wheel-picker interaction distinct while removing the previous “floating directly on the sheet” appearance

Focused read-back:
- `bg/default` binding verified
- radius 12 verified
- both selection lines preserved
- PASS

## Group 08 — Support inquiry attachment maintenance

### 08G attached-image remove affordance

PO approved a removable attachment badge for `08G_Support_Inquiry`.

Shared Figma:
- `AttachmentSlot` set: `1255:1161`
- Filled variant: `1255:1150`
- shared `SupportInquiryContent`: `1882:9310`
- `RemoveBadge`: `1928:8903`
- representative screen: `08G_Support_Inquiry` — `1257:927`

Locked visual treatment:
- Filled attachment exposes a circular remove badge overlapping the slot top-right edge
- badge size remains `20 × 20`
- badge position inside Filled slot: `x=56 / y=-2`
- fill uses dark `neutral/900`
- 1px light outline uses `neutral/100`
- existing subtle shared shadow is retained
- badge radius uses `radius/full`
- Filled slot and `AttachmentSlots` container do not clip overflow so the overlapping badge remains fully visible

Close glyph:
- PO-provided `close 1` SVG from the 08G screen was used as the source
- source contained two 12 × 12 vectors
- vectors were copied into `RemoveBadge`, reduced to `6 × 6`, and centered at `x=7 / y=7`
- vector stroke uses `neutral/100` for contrast on the dark badge
- temporary imported `close 1` source frame was removed after reuse

Representative 08G state:
- `AttachmentSlot_1` = Filled with remove badge
- `AttachmentSlot_2 / 3` = Empty
- this visually documents the attached-image state while preserving the existing three-image limit

Focused screenshot/read-back QA:
- badge is no longer clipped
- badge remains visually attached to the slot edge rather than floating outside
- shared Filled variant carries the treatment
- PASS

---

## Cross-group — Launch / branding / thumbnail visual maintenance

### 02A start-card shadow clipping correction
Observed issue:
- `02A_Home_NoRoutine` start-card shadows were visually cut even though the card shadow values themselves were correct.

Root cause:
- local layout wrapper `StartChoiceSection` matched the card width and had `Clip content = ON`
- the actual Home scroll viewport is still the intended clipping boundary

Applied:
- `StartChoiceSection` — `1346:693`
- `Clip content: ON → OFF`
- card shadow values unchanged
- actual Home scroll viewport clipping remains unchanged

Current rule:
- simple layout wrappers around shadowed cards should not clip visual overflow
- real viewport / scroll / mask containers may continue to clip intentionally

Focused read-back:
- `StartChoiceSection.clipsContent = false`
- PASS

### AppLogo artwork replacement
PO supplied final Tampin black/white wordmark artwork and requested replacement inside the existing shared AppLogo size.

Shared Figma:
- `AppLogo` — `633:3251`
- size remains `139 × 28`

Applied:
- internal artwork replaced with Tampin black/white image assets
- current Light usage displays the black artwork
- white artwork is retained for dark/brand-background use
- existing AppLogo instances remain the same size

Representative existing usages remain linked in:
- `01A_Login`
- `02A_Home_NoRoutine`
- `02B_Home_RoutineSelected`
- `02D_Home_Active`

### 00_Splash finalized
Three launch-screen candidates were explored in Figma:
- Light continuity
- Dark
- Brand-primary

PO selected the Brand-primary candidate.

Final screen:
- `00_Splash` — `1961:8909`
- `360 × 780`
- background = `brand/primary`
- centered white Tampin wordmark = `139 × 28`
- no loading indicator
- no supporting copy

The two rejected candidate frames were removed.

This increases the current top-level MVP screen-frame count from `97` to `98`.

### Exercise thumbnail production-style visual preview
PO supplied three real exercise thumbnail source images under:
- `Common_Component > thumbs` — `1962:10943`

Current source sample count:
- `3`

Applied:
- all current visible MVP exercise-thumbnail instances now use one of the three supplied source images
- repeated exercise names are kept visually consistent across screens
- current affected exercise-thumbnail instances: `93`
- affected top-level screens containing exercise thumbnails: `19`

Important scope boundary:
- this is a **visual production-thumbnail style preview**
- the three supplied samples do not semantically map to every exercise currently shown in the wireframes
- this does **not** replace the deferred final Production Exercise DB/media mapping work

### Exercise thumbnail subtle outline
Because the supplied thumbnail imagery and surrounding UI both use very light backgrounds, PO approved a very subtle common outline.

Shared treatment:
- stroke = `1px`
- alignment = `INSIDE`
- semantic token = `border/subtle` (`VariableID:278:922`)
- current Light value = `#EAEEED`

Applied through shared thumbnail masters used by:
- 64 × 64 exercise cards
- 52 × 52 exercise search rows
- 44 × 44 analysis rows
- replacement-exercise cards

Unchanged:
- thumbnail dimensions
- existing corner radii
- image aspect ratio

Focused whole-MVP read-back:
- exercise thumbnails found: `93`
- thumbnails with the approved subtle outline: `93 / 93`
- previous placeholder image remaining in current exercise-thumbnail instances: `0`
- PASS

---

## QA boundary

Focused QA was performed on the changed representative states after each amendment.

Verified:
- 02A no-routine action now uses the shared BlankWorkout variant while BuildOwn remains unchanged
- shared component linkage preserved for changed UI
- no intentional detach introduced
- target labels/rendered states read back correctly
- no target-screen overlap after inline-hint insertion
- replacement card surface and Secondary CTA border bindings read back correctly
- 08D1 WheelPicker internal-box fill/radius bindings and selection lines read back correctly
- 08G Filled attachment remove badge geometry, close-glyph placement, and overflow visibility read back correctly
- 02A start-card shadow clipping fix read back with local wrapper clipping disabled while viewport clipping remains intact
- shared AppLogo remains 139 × 28 after Tampin artwork replacement
- final `00_Splash` uses `brand/primary` + centered white Tampin wordmark and rejected candidates are removed
- all 93 current MVP exercise thumbnails use the supplied real-image preview set and inherit 1px INSIDE `border/subtle`
- whole-MVP component linkage after this maintenance: `1,977 / 1,977` instances resolve to a main component; non-`Common_Component` sources = `0`

This checkpoint does **not** re-run already accepted whole-MVP QA.

---

## Development boundary

No Cursor / implementation handoff is authorized.

Product/UX + Figma remains the active execution boundary until the Product Owner explicitly transitions to development.
