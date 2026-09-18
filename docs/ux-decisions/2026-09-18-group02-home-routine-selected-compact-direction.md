# 2026-09-18 Group 02 Home routine-selected compact direction

**Status:** PO-DIRECTED EXPLORATION · FIGMA REFLECTED · CANONICAL PROMOTION PENDING · NO CURSOR HANDOFF

## Context

The existing routine-selected Home (`02B_Home_RoutineSelected`) had two product/visual problems after the blank-workout entry was added to 02A:

1. once a saved routine existed, Home no longer exposed a direct blank-workout entry
2. the selected-routine hero card + large `운동 시작` CTA occupied too much of the 360 × 780 Home viewport

The Product Owner reopened only this targeted Home presentation problem. This does not reopen unrelated Group 02 behavior.

## Direction explored

Canonical Figma file:
- `W3lZurXCXbThP67rF2xk2b`
- page `MVP_전체_와이어프레임` — `34:1076`

Existing canonical screen remains:
- `02B_Home_RoutineSelected` — `1329:593`

Current selected exploration:
- `02B_Home_RoutineSelected_Exploration_SlimActions` — `2001:8788`

Earlier exploration candidates retained for comparison:
- `02B_Home_RoutineSelected_Exploration_BlankAccess` — `1991:8656`
- `02B_Home_RoutineSelected_Exploration_CompactStart` — `1998:8692`

## Current selected visual direction

### 1. Quick Start

The large selected-routine hero is replaced by two compact quick-start cards using the same card language.

Selected routine card:
- `Push Day`
- meta: `5개 운동 · 약 50분`
- card size: about `320 × 80`
- white surface / existing card radius / subtle shadow
- right-side action: `36 × 36` circular icon action

Blank workout card:
- `빈 운동`
- meta: `루틴 없이 바로 기록`
- same size / surface / radius / shadow as the selected-routine card
- same right-side `36 × 36` circular icon action

Quick-start icon action styling:
- reuse existing `Common_Component` `chevron-right` vector component
- circular background uses `brand/soft`
- chevron uses `action/primary`
- follows the established muscle-tag color principle: soft background + saturated foreground
- no external SVG / no duplicate icon asset

Quick Start section header:
- shared `SectionHeader` is preserved
- `Trailing=None`
- previous temporary `루틴 변경` action was removed because the My Routine list directly provides alternative routine access

### 2. My Routine

The former Home `최근 운동` region is replaced in the exploration by a compact `내 루틴` section.

Current presentation:
- shared `SectionHeader`
- title `내 루틴`
- existing design-system `Trailing=Action`
- action copy `새 루틴`
- no custom plus/chevron overlay; the original SectionHeader design-system format is retained

Routine preview:
- one grouped card
- two `60px` rows + `1px` divider
- `Pull Day` — `5개 운동 · 약 50분`
- `Leg Day` — `6개 운동 · 약 55분`
- routine rows use existing row/divider component language
- large standalone RoutineListCard treatment and muscle tags are not used on Home

## Exploration history / rejected alternatives

The following were explored and intentionally not kept as the current direction:

1. large selected-routine hero + large full-width `운동 시작` CTA
   - rejected because the hero occupied too much of the Home viewport

2. tall standalone `내 루틴` cards
   - rejected because multiple cards made Home vertically heavy

3. compact selected-routine card with embedded text `운동 시작` button
   - rejected because the button read too strongly as a pill/chip and created awkward visual weight

4. separate full-width `운동 시작` + `빈 운동 시작` two-button row
   - rejected because it reintroduced excessive CTA mass

5. section-header custom actions (`루틴 변경 + chevron`, `plus circle + 새 루틴`)
   - reverted after PO request to preserve the existing SectionHeader design-system format

6. Quick Start `루틴 변경` text action
   - removed because alternative routines are already directly available in `내 루틴`

## Product behavior represented by the exploration

- saved-routine users retain direct blank-workout access from Home
- starting a blank workout still follows the locked 2026-09-18 blank-workout policy: zero saved-routine dependency, zero initial exercises, existing exercise-add flow
- `내 루틴` becomes the direct Home access to other saved routines
- `새 루틴` remains a routine-creation entry
- recommended ready-made routines remain a secondary Routine-area path and are not restored as a Home primary action

## Current boundary

This checkpoint records the current PO-directed Home direction and Figma exploration history.

It does **not** yet declare the exploration node `2001:8788` to be the canonical `02B_Home_RoutineSelected` screen.

Canonical promotion requires an explicit PO decision to replace/update `1329:593`. Until then:
- keep `1329:593` as the existing canonical 02B
- keep `2001:8788` as the current selected exploration
- do not start Cursor implementation

## Related open follow-up

The blank-workout zero-exercise Active Workout destination remains required and is still a separate targeted Group 05 follow-up.

## Development boundary

No Cursor / implementation handoff is authorized.
