# Group 04 Session Handoff — 2026-09-10

**Status:** SCREEN-LEVEL DESIGN CLOSED · FINAL CLOSURE QA PENDING

## Canonical Figma

- file: `W3lZurXCXbThP67rF2xk2b`
- page: `04 운동 목록 · 상세` — `233:2075`
- shared UI page: `MVP_공용_UI` — `105:3113`

## Current Group 04 state

Screen-level Product/UX + Figma work for Group 04 is complete enough to stop further visual iteration unless final closure QA finds a blocker.

Canonical states:

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

## Latest approved / applied details

### 04A / 04B list system

- `FilterSelectButton` and `ExerciseSearchRow` shared components are used for the canonical exercise search/list structure.
- 04B uses the approved V2 selected-exercise chips pattern.
- selected strip heading = `선택한 운동 (N개)`.
- selected chips use one horizontal free-scroll row.
- chip X keeps the visible icon compact while the remove hit target remains `44×44`.
- selection state stays consistent between selected chips and duplicated exercise rows.

### SelectedExerciseChip moved to shared UI

- master component: `SelectedExerciseChip` — `569:1335`.
- the master was moved from the Group 04 working page to `MVP_공용_UI`.
- node ID remained unchanged.
- all 10 current 04B instances remain linked to the same master.
- Group 04 now contains instances only, not the detached/stray master.

### 04A filter full pages

- equipment/body-part filters remain dedicated full pages.
- current `OptionItem` rows use `52px` height.
- list dividers remain between items, excluding the last item.
- row left/right padding is now `0`, so text/check alignment follows the same 20px page content line as the list/dividers.
- content remains vertically scrollable.

### 04C empty state

PO chose the 03B empty-state format as the app-level pattern.

04C now follows the same structure:

- centered title
- centered supporting copy
- compact Primary button directly below
- no fixed full-width bottom CTA

Current copy:

- title: `검색 결과가 없어요`
- description: `다른 이름으로 검색하거나 필터를 조정해보세요.`
- button: `직접 운동 만들기`

### Nav Header shared behavior

Shared `Nav Header` action slots were normalized:

- left/right action hit area = `44×44`
- left icon is aligned to the left edge inside its slot
- right icon is aligned to the right edge inside its slot
- visible icon size remains `24×24`
- page/header inset remains 20px
- centered title stays visually centered

Reference: `2026-09-10-nav-header-action-edge-alignment.md`.

### 04D detail

- flat information treatment remains approved.
- media is the only prominent rounded visual surface.
- metadata rows are flat with dividers.
- `운동 방법` = numbered list.
- `핵심 체크포인트` now uses the same numbered-list format.
- both lists use `spacing/12` and FILL + height-auto long-copy behavior.
- detail content is vertically scrollable.

### 04E / 04F

- create/edit forms are vertically scrollable for shorter screens.
- existing design-system components/tokens remain reused.
- 04F delete area stays outside the scrolling form as intended.

### 04G

- exercise history content remains vertically scrollable.
- root `minHeight` constraint that blocked short-device shrinking was removed.
- short-height validation was completed without changing the canonical 360×954 visual state.

### 04H

- attachment picker UI remains aligned.
- background uses the canonical exercise-list shell.
- OptionItem dividers remain present.
- direct-input state remains separate and valid.
- Production attachment allowlists/media mapping are still a deferred data task, not a visual blocker.

## Product presentation rule retained

Muscle/body-part presentation remains context-sensitive:

- when the body part is a grouping/status signal (e.g. Routine Group 03), the existing colored muscle label UI may be used.
- in the dense exercise search/list, `주동근 · 장비` remains simple supporting text; do not add colored labels merely for visual consistency.

## Do not reopen

Unless a new conflict/regression appears, do not redo:

- Hevy/Mobbin reference research
- 04B V1/V2/V3 comparison
- approved V2 chip direction
- bottom-sheet vs full-page filter decision
- 04D card-vs-flat treatment
- already passed small-screen fixes for 04D/E/F/G
- completed Group 04 design-system hardening screen by screen

## NEXT OPEN ITEM

Group 04 still needs only closure QA, not another design pass:

1. **Final sample-data QA** — check exercise names / equipment / body-part examples used in Group 04 against the canonical Production taxonomy. Treat temporary stress-test examples as samples, not taxonomy decisions.
2. **Final Group 04 integration QA** — one scoped A~H structure/binding/screenshot review, focused only on regressions from the latest shared changes (Nav Header, Empty State, filter rows, SelectedExerciseChip move). Do not redo already passed unrelated QA.
3. If no blocker is found, mark **Group 04 CLOSED**.
4. Resume deferred **Analysis body-area granularity / body-map mapping** from `docs/ux-decisions/2026-09-05-analysis-tab-ia.md` and related Analysis decisions.

## Preserved deferred data work

Do not confuse the visual Group 04 closure with Exercise DB production generation.

- canonical baseline = 195 exercises
- P0 additions = 16
- target derived Production artifact = 211
- P0 data/default-media source lock is already PASS
- derived 211-row workbook/runtime DB is not yet regenerated
- exact Production attachment allowlists/canonical IDs/media mapping remain deferred

## Development boundary

**NO CURSOR IMPLEMENTATION HANDOFF.**

Product Owner has not opened development transition for this scope.
