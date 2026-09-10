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

## Selected chip visual — PO LOCKED

The earlier filled-green `FilterChip/Active` treatment is **superseded** for selected exercises.

Canonical selected-exercise chip:

- dedicated reusable component: `SelectedExerciseChip`
- transparent / no filled color
- 1px line outline using the existing `border/default` semantic color
- pill radius using existing `radius/full`
- visual chip height: 32px
- text: existing `label/01`, `text/primary`
- trailing remove affordance: visible X/close icon remains **16×16px**, using `text/secondary`
- internal horizontal gap between label and close slot: 4px
- left padding: 12px
- right padding: 8px
- vertical padding: 8px

The horizontal padding is intentionally asymmetric. The X icon sits inside a 16px visual slot and therefore already contains visual whitespace around the visible mark; reducing the right container padding from 12px to 8px makes the **visible** left/right whitespace look balanced.

### Close touch target — PO LOCKED

The visible X must not be enlarged just to make it easier to tap.

- visible close glyph remains **16×16px**
- add a separate invisible semantic layer named `CloseHitArea`
- `CloseHitArea` size = **44×44px**
- center the 44×44 target on the visible X
- the 32px visual chip itself does not grow
- selected-chip horizontal interaction viewport height = **44px**, with the 32px visual chips vertically centered, so the 44px target is not clipped
- runtime implementation must bind this hit area to the same deselect/remove action as the selected exercise state

This preserves the compact visual density while providing a practical mobile touch target.

This selected chip is intentionally separate from the existing filter chip family because its structure includes a trailing remove icon, asymmetric padding and an enlarged semantic close target that the current `FilterChip` API does not support cleanly.

The previous comparison-only `+N` summary chip remains removed from the canonical pattern. All selected items remain available by horizontal scrolling.

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
- horizontal viewport — `566:1343`

Reusable selected chip component:

- `SelectedExerciseChip` — `569:1335`
- visible close icon — `569:1337`
- invisible close touch target — `CloseHitArea` (`44×44`)

Current screenshot sample uses 10 selected exercises only to stress-test horizontal overflow. The visible sample names are **UI sample data, not a new Production taxonomy decision**. Final exercise-list/filter sample-data QA against the canonical Production taxonomy remains a separate next step.

## Scroll safety

04B has a fixed/absolute bottom selection footer of 100px.

The canonical scrollable `SearchContent` bottom padding is 120px so the list can scroll its final content above the fixed footer instead of leaving the final exercise row hidden behind `N개 운동 추가`.

This is a Figma interaction/layout safety rule; runtime implementation must preserve equivalent safe bottom content inset.

## QA result

### QA-1 — Structure / Auto Layout: PASS

- canonical 04B remains `360 × 954` vertical screen shell
- selected section is inserted after search/filter controls and before `최근 운동`
- selected section uses vertical Auto Layout
- chip viewport uses horizontal Auto Layout
- chip viewport is clipped and configured for horizontal overflow
- current 10-chip stress sample exceeds viewport width, confirming real horizontal overflow
- each chip is a reusable `SelectedExerciseChip` instance rather than an ad-hoc screen-only frame
- component uses 12px left / 8px right / 8px vertical padding with a 4px label-to-icon gap
- visible X remains 16×16px
- `CloseHitArea` is 44×44px and absolutely centered on the visible X
- canonical and approved-reference chip viewports are 44px high with 32px visual chips vertically centered
- canonical vertical content remains scrollable
- 120px bottom content padding clears the fixed 100px CTA footer

### QA-2 — Design system / Binding: PASS

- selected chips use `SelectedExerciseChip` instances
- label is exposed as a component text property
- spacing uses existing `spacing/12`, `spacing/8`, `spacing/4`
- outline uses existing `border/default`
- radius uses existing `radius/full`
- text uses existing `label/01`, `text/primary`
- close icon uses existing `text/secondary` semantic color
- touch-target enlargement is handled by a separate semantic frame, not by changing the icon size or visual chip styling
- no green fill remains on selected-exercise chips
- no detached duplicate chip instances were introduced

### QA-3 — Screenshot / Product: PASS

- `선택한 운동 (10개)` is visible directly below filters
- selected chips read as neutral line-only objects rather than filter/brand-state pills
- trailing X is visually lighter and the 12/8 asymmetric padding appears optically balanced
- visible X size remains unchanged after touch-target enlargement
- added 44px interaction height does not create a visual collision or break the list hierarchy
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
