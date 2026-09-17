# Group 03 Routine Detail — Card Layout Stabilization Checkpoint

**Date:** 2026-09-17  
**Status:** FIGMA REFLECTED · FOCUSED QA PASS · PRODUCT FLOW UNCHANGED · NO CURSOR HANDOFF

## Scope

This checkpoint records a focused design-system maintenance fix for recurring visual regressions in Group 03 routine-detail screens.

Affected canonical Figma screens:
- file `W3lZurXCXbThP67rF2xk2b`
- page `MVP_전체_와이어프레임` — `34:1076`
- `03C_추천루틴상세` — `40:2272`
- `03D_Routine_Detail` — `34:1447`

The change does not reopen Group 03 product behavior. It only stabilizes card styling and Auto Layout sizing so the same square-card/fixed-height regression does not recur during later design-system maintenance.

## Root cause

Two structural layers were being mistaken for visual card surfaces during broad design-system cleanup:

- `ExerciseCardList`
- `ExerciseCard_WithAttachment`

Those wrappers carried surface fill and/or card shadow despite having `cornerRadius = 0`, which could visually cover the canonical rounded `ExerciseCard` beneath them.

In addition, several Group 03 `ExerciseCard` instances retained old fixed-height overrides (`366px`) even though the canonical `ExerciseCard` master uses vertical Auto Layout with content-driven sizing.

## Stabilized structure

### Canonical ExerciseCard

The actual card remains the only card-styled surface:
- shared `ExerciseCard` component set — `637:3561`
- current View variant — `637:3562`
- radius `12` through the existing Radius variable binding
- semantic surface fill retained
- shared card elevation retained
- vertical Auto Layout
- height = `HUG / 내용에 맞게 조절`

### Structural list wrapper

Old `ExerciseCardList` wrappers on 03C/03D were renamed:
- `ExerciseListContainer`

Rules:
- structural wrapper only
- no fill
- no stroke
- no shadow
- vertical Auto Layout
- height = HUG

Canonical nodes:
- 03C — `379:2226`
- 03D — `379:1022`

### Attachment wrapper

Old `ExerciseCard_WithAttachment` wrappers were renamed:
- `ExerciseAttachmentOverlay`

Rules:
- structural wrapper only
- no fill
- no stroke
- no shadow
- vertical Auto Layout
- height = HUG
- inner `ExerciseCard` remains normal Auto Layout content
- `AttachmentTag` is the only absolute overlay layer

Canonical nodes:
- 03C — `404:1893`
- 03D — `404:1896`

The same wrapper cleanup was also applied to other live MVP `ExerciseCard_WithAttachment` wrappers so later broad card-style operations cannot match them by misleading `Card` naming and reintroduce square surfaces.

## Group 03 height normalization

### 03C

All 6 `ExerciseCard` instances now use:
- `primaryAxisSizingMode = AUTO`
- `layoutSizingVertical = HUG`
- no fixed card-height override

`ExerciseListContainer` and `RoutineDetailContent` also use HUG so downstream layout grows from content.

### 03D

All 4 `ExerciseCard` instances now use:
- `primaryAxisSizingMode = AUTO`
- `layoutSizingVertical = HUG`
- no fixed card-height override

`ExerciseListContainer` and `RoutineDetailContent` also use HUG.

### Screen roots

03C and 03D roots were normalized to vertical Auto Layout with content-driven height so content growth and the bottom `운동 시작` footer move together instead of relying on manually maintained absolute heights.

## Focused QA

PASS:
- 03C visible exercise cards: `6 / 6` rounded correctly
- 03D visible exercise cards: `4 / 4` rounded correctly
- Group 03 fixed-height ExerciseCard count: `0`
- Group 03 card instances remain linked to shared `ExerciseCard` master
- structural wrappers with card fill/shadow: `0`
- old live wrapper names `ExerciseCard_WithAttachment` / `ExerciseCardList`: `0`
- attachment tags remain visually overlaid without controlling wrapper height
- 03C screenshot PASS
- 03D screenshot PASS
- bottom workout CTA remains correctly positioned after content-driven sizing

## Regression rule

Future design-system migrations must style card surfaces by actual component role/master linkage, not by broad layer-name matching containing `Card`.

`ExerciseListContainer` and `ExerciseAttachmentOverlay` are structural-only and must not receive card fill, radius, or elevation.

`ExerciseCard` height must remain content-driven unless a specific product requirement explicitly introduces a fixed-height state.

## Result

**PASS — Group 03 routine-detail cards are stabilized around the shared ExerciseCard master, with structural wrappers visually neutral and all live Group 03 cards using content-driven height.**

Group 03 remains CLOSED from a Product/UX perspective.

**NO CURSOR IMPLEMENTATION HANDOFF.**