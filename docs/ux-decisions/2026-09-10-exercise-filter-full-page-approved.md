# Exercise Library Filters — Full Page Selection — 2026-09-10

**Status:** PO APPROVED / CANONICAL
**Scope:** Group 04 Add Exercise equipment/body-part filter selection surfaces

## Decision

The current Add Exercise filter selection UI uses **full-page single-select screens**, not bottom sheets.

This supersedes the bottom-sheet filter direction recorded in `2026-09-09-exercise-library-hevy-alignment.md` for the two filter pickers only.

Reason:

- equipment has 10 current UI options and body part has 8
- the previous sheets were already tall on the 360x954 reference viewport
- on shorter phones they would require a large nested scroll surface inside a sheet, reducing the main benefit of a bottom sheet
- full-page selection scales better if filter options grow later

## Behavior

- equipment: single-select, one value at a time
- body part: single-select, one value at a time
- both filters can be active together and combine on the same exercise list
- tapping an option applies the value and returns to Add Exercise
- selected value is shown in the filter trigger when returning
- `전체` clears that category filter
- no Apply CTA is required

## Canonical Figma

File: `W3lZurXCXbThP67rF2xk2b`

Page: `04 운동 목록 · 상세` — `233:2075`

Supporting states:

- `04A_Filter_Equipment_Page` — `515:3327`
- `04A_Filter_BodyPart_Page` — `515:3514`

The previous nodes were converted in place from:

- `04A_Filter_Equipment_Sheet`
- `04A_Filter_BodyPart_Sheet`

## Construction

Both pages:

- fixed Figma reference viewport `360 x 954`
- vertical page Auto Layout
- existing `Nav Header` reused
- title = `장비 선택` / `부위 선택`
- `LeftAction=Back`
- `RightAction=None`
- full-page `FilterPageContent` below the header
- content has 20px page inset and vertical scrolling enabled
- existing `OptionItem` instances are reused without detaching
- selected `OptionItem` remains the existing green text + check state
- no dim overlay, sheet handle, sheet glass shell, or rounded sheet container remains

## QA

### Structure QA — PASS

- page shells remain 360x954 vertical Auto Layout
- `FilterPageContent` fills the area below status/header using Fill sizing on both axes
- content is vertical-scroll capable for shorter/runtime viewports
- option lists remain semantic vertical Auto Layout
- no bottom-sheet overlay/shell remains

### Component / binding QA — PASS for canonical filter screens

- existing `Nav Header` instance retained
- existing `OptionItem` instances retained with their component variants/properties
- no detached or screen-only duplicate option rows introduced
- `FilterPageContent` 20px padding is bound to Tracker APP `spacing/20`
- the two currently selected `전체` labels are locally bound to Tracker APP `brand/primary`, matching the existing check-icon token binding

Library note:

- the imported Tracker APP `OptionItem` selected-state source still exposes its selected-label green as a raw fill in the library source
- the canonical filter screens use a local instance override so their current artifact is token-bound without detaching the component
- a future Tracker APP library maintenance pass may centralize that binding at the source component; this does not block Group 04 screen QA

### Screenshot QA — PASS

- equipment page shows all 10 current options cleanly as a full-page list
- body-part page shows all 8 current options cleanly as a full-page list
- selected `전체` state and check remain visually clear
- no sheet-height or nested-sheet-scroll issue remains on the canonical 360x954 reference screen

## Regression QA — 04H attachment picker divider repair

During the post-change visual check, the Product Owner identified that the row dividers inside `04H_Exercise_Attachment_Selection` had disappeared.

Canonical repair:

- screen: `04H_Exercise_Attachment_Selection` — `170:2174`
- list: `AttachmentOptions` — `170:2284`
- keep the existing seven `OptionItem` instances and 52px row geometry
- first six rows use a bottom divider; the final `직접 입력` row has no divider
- divider color is bound to existing `border/default`
- divider weight is bound to existing `border/thin` (`0.5px` in the current Tracker APP token set)
- dividers are implemented as bottom strokes on the existing row instances, not detached rows or extra layout-height separators
- sheet height and option-list height remain unchanged

Post-repair structure/binding QA and screenshot QA: **PASS**.

## Boundary

Current option labels remain UI/sample taxonomy and are still subject to the existing final Production taxonomy sample-data QA.

No Cursor implementation handoff yet.
