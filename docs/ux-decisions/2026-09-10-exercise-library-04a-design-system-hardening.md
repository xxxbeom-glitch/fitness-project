# Exercise Library 04A — Design System Hardening — 2026-09-10

**Status:** QA PASS / CANONICAL VISUAL STRUCTURE
**Scope:** Group 04 `04A_Search` design-system structure only. Product behavior is unchanged.

## Why this pass happened

The approved 04A screen visually matched the current product direction, but several repeated UI parts were still screen-local frames with raw typography/color/spacing values.

The goal of this pass was to keep the approved 04A information architecture and interaction behavior while converting the screen to real reusable assets and bound design-system values where appropriate.

## Canonical Figma

File:

- `W3lZurXCXbThP67rF2xk2b`

Page:

- `04 운동 목록 · 상세` — `233:2075`

Screen:

- `04A_Search` — `207:1238`

Shared/common UI page:

- `MVP_공용_UI` — `105:3113`

New reusable Fitness-specific components:

- `FilterSelectButton` — `583:1505`
- `ExerciseSearchRow` — `583:1515`

Reused existing Tracker APP / project assets:

- `SearchField` remains the existing component instance
- `Nav Header` remains the existing component instance
- `SectionHeader / Style=Subtle` is now reused for `최근 운동` and `전체 운동`
- `ExerciseRowDetailAction` remains reused inside `ExerciseSearchRow`
- `ExerciseRowSelectionIndicator` remains reused inside `ExerciseSearchRow`

## Reuse decision

An existing Tracker APP `ExerciseRow` component was reviewed before creating `ExerciseSearchRow`.

It was not reused directly because its current structure is a different product pattern: it includes workout-style tags/detail content and does not match the compact Add Exercise search row with the right-side detail affordance plus independent selection indicator.

Creating a Fitness-specific search-row component was therefore necessary rather than duplicating the existing component role.

No suitable Tracker APP filter-select trigger component was found for the current two-column `장비 / 부위` selector trigger, so the existing approved visual was promoted into the reusable `FilterSelectButton` component.

## Applied system bindings

### FilterSelectButton

- minimum interaction/visual height = `44px`
- `spacing/8` internal gap
- `spacing/12` horizontal padding
- `radius/md`
- `bg/surface`
- `border/default` color
- `border/default` width
- `label/02`
- `text/primary`
- existing chevron icon instance retained

### ExerciseSearchRow

- row size remains the approved compact `320 × 72` Fitness search-row density
- `spacing/8` root gap
- `spacing/12` thumbnail-to-info gap
- `spacing/4` exercise-name/meta gap
- thumbnail `radius/sm`
- exercise name = `heading/02` + `text/primary`
- exercise meta = `caption/01` + `text/secondary`
- existing `ExerciseRowDetailAction` nested instance retained
- existing `ExerciseRowSelectionIndicator` nested instance retained
- row images remain instance overrides so each exercise keeps its own thumbnail

### Section headers

`최근 운동` and `전체 운동` now use the existing Tracker APP `SectionHeader / Style=Subtle` component instance rather than local frames.

Fitness screen overrides retain the current app typography/color language:

- `label/01`
- `text/secondary`

### List / layout

- `SearchContent` gap bound to `spacing/16`
- search/filter tool group gap bound to `spacing/12`
- filter-control row gap bound to `spacing/8`
- existing list dividers retain their approved geometry and are bound to `border/default` color

## QA result

### QA-1 — Structure / Auto Layout: PASS

- `04A_Search` remains `360 × 954`
- current search/list IA is unchanged
- filter triggers now use reusable component instances
- section headers now use real Tracker APP component instances
- all 9 visible exercise sample rows use the shared `ExerciseSearchRow` component
- approved thumbnail/name/meta/detail-action structure is preserved
- 44px filter control height satisfies the current minimum interaction target

### QA-2 — Design-system / Binding: PASS

- raw filter-button surface/border/radius/text values were replaced by reusable component bindings
- raw exercise-row name/meta typography and color were replaced by local text styles and semantic color variables
- repeated row gaps and thumbnail radius are bound to local variables
- list divider color is bound to `border/default`
- existing SearchField, Nav Header, SectionHeader, detail action, and selection-indicator assets are reused rather than redrawn

### QA-3 — Screenshot / Product: PASS

- screenshot comparison after the hardening pass shows no product-level hierarchy regression
- search → equipment/body filter → recent exercises → all exercises remains clear
- increased filter height remains visually balanced with the 44px SearchField
- denser exercise list presentation is preserved

## Boundary

This pass does **not** change:

- Add Exercise filtering behavior
- recent/all exercise semantics
- exercise selection behavior
- right-side detail/history navigation
- canonical Production exercise taxonomy

04B/04C/04H may reuse the new shared components during their final structural QA, but this checkpoint only certifies canonical 04A.

No Cursor implementation handoff yet.
