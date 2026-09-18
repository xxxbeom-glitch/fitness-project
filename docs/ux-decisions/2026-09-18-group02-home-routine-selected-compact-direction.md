# 2026-09-18 Group 02 Home routine-selected compact direction

**Status:** PO APPROVED · CANONICAL FIGMA REFLECTED · FOCUSED QA PASS · NO CURSOR HANDOFF

## Context

The existing routine-selected Home (`02B_Home_RoutineSelected`) had two product/visual problems after the blank-workout entry was added to 02A:

1. once a saved routine existed, Home no longer exposed a direct blank-workout entry
2. the selected-routine hero card + large `운동 시작` CTA occupied too much of the 360 × 780 Home viewport

The Product Owner reopened only this targeted Home presentation problem. This did not reopen unrelated Group 02 behavior.

## Canonical Figma

Canonical Figma file:
- `W3lZurXCXbThP67rF2xk2b`
- page `MVP_전체_와이어프레임` — `34:1076`

Canonical screen:
- `02B_Home_RoutineSelected` — `1329:593`

The approved B-grid direction was promoted into the existing canonical `1329:593` frame so the canonical node identity/position is preserved.

All temporary 02B Home exploration frames were deleted after promotion:
- BlankAccess
- CompactStart
- SlimActions
- A / OneColumn
- B / Grid2xN source copy
- C / Hybrid

## Approved Home direction

### 1. Quick Start

The large selected-routine hero is replaced by two compact quick-start cards using the same card language.

Selected routine card:
- `Push Day`
- meta: `5개 운동 · 약 50분`
- approximately `320 × 80`
- white surface / existing radius / subtle shadow
- right-side action: `36 × 36` circular icon action

Blank workout card:
- `빈 운동`
- meta: `루틴 없이 바로 기록`
- same size / surface / radius / shadow as the selected-routine card
- same right-side circular icon action

Quick-start icon action styling:
- reuses existing `Common_Component` `chevron-right` vector component
- circular background uses `brand/soft`
- chevron uses `action/primary`
- follows the established muscle-tag color principle: soft background + saturated foreground
- no external SVG / duplicate icon asset

Quick Start section header:
- shared `SectionHeader`
- `Trailing=None`
- no `루틴 변경` action because alternative saved routines are directly available in `내 루틴`

### 2. My Routine

The former Home `최근 운동` region is replaced by compact `내 루틴`.

Section header:
- shared `SectionHeader`
- title `내 루틴`
- existing design-system `Trailing=Action`
- action copy `새 루틴`
- no custom plus/chevron overlay

Approved routine preview:
- `2 × n` grid
- two-column row width = `320`
- gap = `8px`
- each routine tile = `156 × 88`
- current examples:
  - `Pull Day` — `5개 운동 · 약 50분`
  - `Leg Day` — `6개 운동 · 약 55분`
- tile content uses routine name + workout count/time only
- right-side chevron is intentionally omitted
- the whole tile is the routine-selection affordance
- large standalone RoutineListCard treatment, muscle tags, grouped divider list, and row chevrons are not used on Home

## Exploration history / rejected alternatives

The following were explored and intentionally rejected before final approval:

1. large selected-routine hero + large full-width `운동 시작` CTA
   - rejected because the hero occupied too much of the Home viewport

2. tall standalone `내 루틴` cards
   - rejected because multiple cards made Home vertically heavy

3. compact selected-routine card with embedded text `운동 시작` button
   - rejected because the button read too strongly as a pill/chip and created awkward visual weight

4. separate full-width `운동 시작` + `빈 운동 시작` two-button row
   - rejected because it reintroduced excessive CTA mass

5. section-header custom actions (`루틴 변경 + chevron`, `plus circle + 새 루틴`)
   - reverted to preserve the existing SectionHeader design-system format

6. Quick Start `루틴 변경` text action
   - removed because alternative routines are directly accessible in `내 루틴`

7. grouped single-card routine list
   - rejected because the rows read too much like a settings/menu list

8. one-column independent routine cards
   - retained as an exploration only, then rejected in favor of higher-density 2-column tiles

9. hybrid one-column + grid layout
   - rejected in favor of a consistent 2-column routine grid

10. 2-column grid with right chevrons
   - chevrons removed in the final approved state for a cleaner tile presentation

## Product behavior represented by the approved Home

- saved-routine users retain direct blank-workout access from Home
- starting a blank workout still follows the locked 2026-09-18 blank-workout policy: zero saved-routine dependency, zero initial exercises, existing exercise-add flow
- `내 루틴` provides direct Home access to other saved routines
- `새 루틴` remains a routine-creation entry
- recommended ready-made routines remain a secondary Routine-area path and are not restored as a Home primary action

## Focused Figma QA

Post-promotion read-back:
- only one top-level `02B_Home*` frame remains: canonical `1329:593`
- canonical viewport remains `360 × 780`
- My Routine section = `320 × 124`
- tiles = `156 × 88` × 2
- right chevrons in My Routine tiles = `0`
- visible text overflow = `0`
- visible text font family = SUIT
- missing main-component links inside canonical 02B = `0`

Focused QA: **PASS**

## Related open follow-up

The blank-workout zero-exercise Active Workout destination remains required and is still a separate targeted Group 05 follow-up.

## Development boundary

No Cursor / implementation handoff is authorized.
