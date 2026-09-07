# Routine Figma Alignment — 2026-09-07

**Status:** PO APPROVED DIRECTION / FIGMA APPLIED / VISUAL QA PASS
**Scope:** Routine list, empty, detail, create, create-after-add, edit

## Source decisions kept

This pass aligns the Routine Figma screens with existing approved product policy rather than introducing a new routine model.

Canonical product rules retained:

- user-facing routine management uses independent saved routines rather than a mandatory program -> day hierarchy
- MVP 1 does not expose weekday assignment for saved routines
- a saved routine is a plan/template, while actual kg/reps are workout-session data
- a self-built routine must contain structured exercise prescription data, at minimum set count and target rep range
- saved-routine management remains separate from live workout logging

References:

- `docs/08_DECISIONS.md` — DEC-001, DEC-007, DEC-012
- `docs/14_IA_STORYBOARD.md`
- `docs/ux-decisions/2026-09-06-home-routine-selection.md`

## Figma

File: `W3lZurXCXbThP67rF2xk2b`
Page: `Page 1`

### 201_Routine_List — aligned

Node: `1:701`

Changes:

- root Routine-tab back arrow hidden
- weekday schedule copy removed
- routine cards now use neutral metadata such as `5개 운동 · 약 50분`
- tags now represent routine body-area examples instead of time / exercise-count chips
- normalized to 360x780

### 203_Routine_List_Empty — aligned

Node: `1:738`

Changes:

- root Routine-tab back arrow hidden
- existing empty-state direction retained

### 210_Routine_Detail — aligned

Node: `1:747`

Changes:

- removed workout-entry style `SET / KG / REPS` tables
- retained high-level summary metrics: exercise count / estimated duration / total sets
- added compact `운동 구성` list
- each exercise row shows exercise name + body area + routine prescription, e.g. `3세트 · 8–12회`
- bottom CTA remains `운동 시작`
- normalized to 360x780

### 220_Routine_Create — aligned initial state

Node: `1:757`

Changes:

- removed `운동 요일` selector entirely
- structure is now `루틴 이름 -> 운동 추가`
- save CTA is `저장` and remains Disabled in the incomplete initial state

### 221_Routine_Create_WithExercises — added

Node: `341:927`

Purpose:

Represents the create flow after exercises have been added, which was previously missing from the Figma set.

Current structure:

- routine name
- `운동 구성`
- compact prescription rows
- trailing per-row management affordance
- `운동 추가`
- enabled `저장`

### 230_Routine_Edit — aligned

Node: `1:777`

Changes:

- removed weekday selector
- removed live-workout-style kg/reps entry table
- replaced with compact routine prescription rows
- rows expose a management affordance rather than inline workout logging
- retains `운동 추가`, `저장`, and destructive delete entry
- normalized to 360x780

## Compact routine prescription row

Current Figma presentation:

- exercise name
- secondary line: `body area · set count · target rep range`
- edit/create states expose a trailing management affordance
- detail state is read-only

Example:

- `체스트 프레스 머신`
- `가슴 · 3세트 · 8–12회`

This is a screen-level pattern for the current review pass; it is not yet promoted as a new global reusable component.

## QA

Visual QA completed for:

- 201 Routine list
- 203 Routine empty
- 210 Routine detail
- 220 Routine create initial
- 221 Routine create with exercises
- 230 Routine edit

Content audit PASS:

- no remaining `운동 요일` / weekday-schedule copy in the aligned Routine screens
- no remaining workout-entry `KG / REPS / SET` headers in Routine detail/edit
- 201 / 203 / 210 / 220 / 221 / 230 are all represented at 360x780

## Open follow-up

Not closed by this pass:

- exact tap behavior / bottom-sheet content when editing one prescription row
- reorder interaction details
- active-workout read-only Routine-management feedback state using the existing shared dialog component
- final sample exercise/body-area copy after the exercise-library content pass

No Cursor implementation handoff yet.
