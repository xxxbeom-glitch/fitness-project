# Exercise Library 04B — Design-system QA — 2026-09-10

**Status:** PASS / CANONICAL 04B UPDATED
**Scope:** `04B_Search_Selected` design-system cleanup and selected-state consistency

## Canonical Figma

- file: `W3lZurXCXbThP67rF2xk2b`
- page: `04 운동 목록 · 상세` — `233:2075`
- screen: `04B_Search_Selected` — `515:1140`

## Fixes applied

### Search / filters

The legacy 38px hand-built filter frames in 04B were removed.

04B now reuses the same canonical search/filter structure as 04A:

- search field = existing `SearchField` instance
- equipment filter = `FilterSelectButton` instance
- body filter = `FilterSelectButton` instance
- filter height = 44px
- existing surface / border / radius / spacing / typography bindings retained

### Selected-exercise section

The selected-exercise heading is no longer a local raw frame/text pattern.

- heading = existing `SectionHeader / Style=Subtle` instance
- copy = `선택한 운동 (10개)` in the current stress sample; runtime remains `선택한 운동 (N개)`
- selected section = vertical Auto Layout, height hugs content
- selected chip viewport = horizontal overflow, width fills parent
- selected-section and chip-row gaps bind to existing spacing tokens
- existing `SelectedExerciseChip` component and 44px close hit target remain unchanged

### Recent / all exercise list

The legacy local 04B section headers and exercise rows were removed.

04B now reuses the same component-based list structure as canonical 04A:

- `최근 운동` = existing `SectionHeader / Style=Subtle`
- `전체 운동` = existing `SectionHeader / Style=Subtle`
- exercise rows = reusable selected-row component derived from the canonical `ExerciseSearchRow` structure
- selected-row content keeps the approved 8px leading slot
- selection indicator continues to use the existing `ExerciseRowSelectionIndicator / Selected` state
- row typography/color/spacing bindings remain inherited from the canonical search-row component
- right-side detail affordance remains separate from selection

Reusable selected row master:

- `ExerciseSearchRow_Selected` — `598:1392`

### Selected-state consistency

The 10-chip stress sample contains all exercise identities currently visible in the recent/all list sample.

Therefore every visible occurrence of those exercise identities now shows selected state, including duplicate appearances across `최근 운동` and `전체 운동`.

This fixes the previous contradiction where `레그 익스텐션`, `사이드 레터럴 레이즈`, and `케이블 크런치` appeared in the selected chips but displayed as unselected rows.

This is UI sample-state consistency only; the 10 sample names are not a Production taxonomy decision.

### Scroll safety

Existing 04B bottom CTA behavior is preserved:

- fixed footer = 100px
- `SearchContent` vertical scroll remains enabled
- bottom safe content inset = 120px
- `SearchContent` main section gap now binds to the existing 16px spacing token

## QA

### QA-1 — Structure / Auto Layout: PASS

- root remains `360 × 954` vertical shell
- filter controls use the same 44px canonical component structure as 04A
- selected section hugs content instead of depending on the old fixed local header geometry
- selected chip row remains horizontally scrollable
- recent/all list uses reusable component instances
- vertical scroll + 120px bottom inset remain intact

### QA-2 — Design-system / Binding: PASS

- no legacy raw filter frames remain in canonical 04B
- recent/all headings use shared `SectionHeader`
- exercise rows use reusable component instances rather than local row frames
- row text styles and semantic text colors remain bound through the canonical component
- selected-row 8px leading spacing is bound to the existing spacing token
- selected-strip and page section gaps use existing spacing variables

### QA-3 — Screenshot / Product: PASS

- selected chips remain neutral line chips with visible horizontal continuation
- all currently visible exercises shown in the 10-chip sample display the selected indicator consistently
- selected rows preserve the approved indicator slot and thumbnail alignment
- filter controls visually match 04A
- `최근 운동` / `전체 운동` hierarchy remains readable
- fixed `10개 운동 추가` CTA remains intact
- no new visual collision was found in the baseline viewport

## Next

Continue Group 04 final QA with `04C_Search_Empty` next. Do not redo 04B unless a new contradiction or PO-requested visual change appears.

No Cursor handoff yet.
