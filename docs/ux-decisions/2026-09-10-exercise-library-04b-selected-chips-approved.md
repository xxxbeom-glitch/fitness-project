# Exercise Library 04B — Selected Exercise Chips — 2026-09-10

**Status:** PO APPROVED / CANONICAL
**Scope:** Group 04 `04B_Search_Selected` selected-exercise overview and fixed bottom CTA scroll safety

## Decision

Product Owner selected **V2 — selected chips** as the canonical selected-exercise overview for 04B.

When one or more exercises are selected, place a selected-exercise section between the equipment/body-part filters and `최근 운동`.

Canonical copy:

- `선택한 운동 (N개)`

Canonical interaction/presentation:

- selected exercises are shown as a **single horizontal free-scroll chip row**
- do not use snap-style card carousel behavior
- each selected exercise is represented by its own removable/deselect chip
- chip order follows the current selection state/order used by the add-exercise flow
- removing/deselecting a chip updates the same shared exercise-selection state used by the list rows
- the selected section disappears when selected count becomes 0
- the fixed bottom CTA remains `N개 운동 추가`

`최근 운동` is still historical recency and is not repurposed as the selected list.

## Component reuse

Do not invent a separate visual chip family for this state unless a later design-system decision requires it.

The existing Tracker APP `FilterChip` component is reused for the current selected-exercise chip treatment:

- component set: `FilterChip`
- state: `Active`
- existing semantic bindings retained, including `brand/primary`, `bg/default`, `label/01`, `spacing/16`, `spacing/8`, and `radius/full`
- current removable affordance is represented in the chip label as `운동명 ×`

The previous comparison-only `+N` summary chip is removed from the canonical pattern. All selected items remain available by horizontal scrolling.

## Canonical Figma

File:

- `W3lZurXCXbThP67rF2xk2b`

Page:

- `04 운동 목록 · 상세` — `233:2075`

Canonical screen:

- `04B_Search_Selected` — `515:1140`

Approved V2 source/reference:

- `04B_V2_Selected_Chips_APPROVED` — `560:1293`

Promoted selected section in canonical 04B:

- `SelectedExerciseChips_HorizontalScroll` — `566:1340`

Current screenshot sample uses 10 selected exercises only to stress-test horizontal overflow. The visible sample names are **UI sample data, not a new Production taxonomy decision**. Final exercise-list/filter sample-data QA against the canonical Production taxonomy remains a separate next step.

## Scroll safety

04B has a fixed/absolute bottom selection footer of 100px.

The canonical scrollable `SearchContent` bottom padding is now 120px so the list can scroll its final content above the fixed footer instead of leaving the final exercise row hidden behind `N개 운동 추가`.

This is a Figma interaction/layout safety rule; runtime implementation must preserve equivalent safe bottom content inset.

## QA result

### QA-1 — Structure / Auto Layout: PASS

- canonical 04B remains `360 × 954` vertical screen shell
- selected section is inserted after search/filter controls and before `최근 운동`
- selected section uses vertical Auto Layout
- chip viewport uses horizontal Auto Layout
- chip viewport is clipped and configured for horizontal overflow
- current 10-chip stress sample exceeds viewport width, confirming real horizontal overflow
- canonical vertical content remains scrollable
- 120px bottom content padding clears the fixed 100px CTA footer

### QA-2 — Design system / Binding: PASS

- all selected chips remain genuine Tracker APP `FilterChip` instances
- Active variant/property integrity retained
- existing typography/color/spacing/radius bindings retained
- no detached duplicate chip component was introduced

### QA-3 — Screenshot / Product: PASS

- `선택한 운동 (10개)` is visible directly below filters
- the next chip is partially visible at the right edge, naturally indicating horizontal continuation
- recent/all exercise list hierarchy remains intact
- fixed `10개 운동 추가` CTA remains visible
- no initial-viewport collision or screen-level contradiction found

## Superseded comparison state

The earlier 1/2/3 comparison is closed by this PO decision.

- 1안 summary row — not selected
- **2안 selected chips — selected / canonical**
- 3안 expanded selected list — not selected

The old comparison frames may remain as historical design references, but only canonical `04B_Search_Selected` controls product continuation.

## Next

1. final exercise-list/filter sample-data QA against canonical Production taxonomy
2. final Group 04 A~H structure/binding/screenshot QA
3. if no screen-level blocker remains, close Group 04 and resume Analysis body-area granularity

No Cursor implementation handoff yet.
