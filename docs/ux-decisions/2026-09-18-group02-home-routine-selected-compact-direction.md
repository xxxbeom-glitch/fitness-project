# 2026-09-18 Group 02 Home routine-selected compact direction

**Status:** PARTIALLY SUPERSEDED 2026-09-20 · HISTORICAL REFERENCE

## Supersession note

The selected-routine Quick Start portion of this document is superseded by `docs/ux-decisions/2026-09-20-group02-home-with-routine-simplification.md`.

Current 02B uses the same Quick Start as 02A (`빈 운동 / 내 루틴 만들기`) and keeps only the `내 루틴` 2×n grid as the with-routine lower section. Weekday/today-next/selected-routine Home semantics are not part of the current MVP.

The historical visual exploration rationale remains for provenance only.

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

## 02A / 02D canonical Home-state alignment

After the 02B compact Home direction was approved, the Product Owner requested the remaining canonical Home states to use the same visual language.

### 02A_Home_NoRoutine

Canonical screen:
- `02A_Home_NoRoutine` — `1346:686`

Reflected:
- Home scroll top padding = `24px`
- Home top-level section gap = `24px`
- one-off `어떻게 운동을 시작할까요?` title removed
- shared `SectionHeader / Trailing=None` now uses title `빠른 시작`
- existing shared `StartChoiceCard` variants are preserved and updated rather than replaced:
  - `Type=BlankWorkout` — `1719:1042`
  - `Type=BuildOwn` — `1719:1047`
- both StartChoiceCard variants = `320 × 80`
- existing white surface / radius 12 / subtle 0 2px 8px shadow remain
- both use the same `36 × 36` soft circular chevron action as the approved 02B quick-start language
- `BlankWorkout`: `빈 운동` / `루틴 없이 바로 기록`
- `BuildOwn`: `내 루틴 만들기` / `운동과 세트를 직접 구성`
- `최근 운동` remains as state-specific secondary content

### 02D_Home_Active

Canonical screen:
- `02D_Home_Active` — `1346:710`

Reflected:
- Home scroll top padding = `24px`
- Home top-level section gap = `24px`
- shared `SectionHeader / Trailing=None` remains `진행 중인 운동`
- existing shared `RoutineFocusCard / State=Active` master `1719:1036` is preserved and compacted to `320 × 80`
- old target-muscle tag row is removed from the Active Home card
- old large `운동 계속하기` CTA is removed from the Active Home card
- card now uses routine title + active progress meta + the same `36 × 36` soft circular chevron action
- active title/meta typography matches approved 02B quick-start typography
- `최근 운동` remains as state-specific secondary content

### Shared implementation/design-system rule

No duplicate Home card component was introduced.

The alignment reuses and updates existing Common_Component masters:
- `StartChoiceCard`
- `RoutineFocusCard / State=Active`
- existing `chevron-right` component
- existing `brand/soft` + `action/primary` token pairing

This keeps the Home states visually consistent while preserving their different product states.

### Focused QA — 02A / 02D

Read-back:
- 02A StartChoice cards: `320 × 80` × 2
- 02A quick-action count: 1 per card
- 02D Active card: `320 × 80`
- 02D quick-action count: 1
- 02A / 02D scroll top padding and section gap: `24px`
- visible text overflow: `0`
- visible text font family: SUIT
- missing main-component links in both screens: `0`
- whole-MVP instances after this maintenance: `1,971 / 1,971`
- whole-MVP non-`Common_Component` instance sources: `0`

Focused QA: **PASS**

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
