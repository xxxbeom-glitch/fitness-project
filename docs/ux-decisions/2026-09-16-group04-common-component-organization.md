# Group 04 Common_Component Organization — Maintenance QA

**Date:** 2026-09-16  
**Status:** ARTIFACT MAINTENANCE COMPLETE · FOCUSED QA PASS · GROUP 04 REMAINS CLOSED

## Scope

This is a **design-system organization maintenance pass only** after Group 04 product/UX closure.

It does not reopen or change any approved Group 04 product behavior, screen policy, copy, layout, recording-type policy, custom-exercise policy, attachment policy, or canonical screen definition.

The missing final housekeeping step was to move the Group 04-confirmed component masters and their direct support assets out of the legacy `MVP_공용_UI` source area and into the canonical `Common_Component` page.

## Figma organization result

Canonical Figma file:
- `W3lZurXCXbThP67rF2xk2b`

Canonical component page:
- `Common_Component` — `1313:8699`

New confirmed group:
- `04_GROUP_CONFIRMED_COMPONENTS` — `1561:941`

The existing confirmed group stack is now organized as:
- `01_GROUP_CONFIRMED_COMPONENTS`
- `03_GROUP_CONFIRMED_COMPONENTS`
- `04_GROUP_CONFIRMED_COMPONENTS`
- `05_GROUP_CONFIRMED_COMPONENTS`

`05_GROUP_CONFIRMED_COMPONENTS` was moved lower on the Common_Component canvas only to make room for Group 04. No 05 component or production screen semantics changed.

## Moved originals

The following existing masters were **moved, not duplicated**, so their original IDs and instance relationships remain intact.

Search / selection:
- `SearchField` — `638:3349`
- `FilterSelectButton` — `583:1505`
- `OptionItem` — `636:886`
- `ExerciseSearchRow` — `583:1515`
- `ExerciseSearchRow_Selected` — `598:1392`
- `SelectedExerciseChip` — `569:1335`
- `ExerciseRowSelectionIndicator` — `514:1208`
- `ExerciseRowDetailAction` — `514:1209`
- `ListSectionLabel` — `638:3359`

Detail / metadata:
- `fixed-tab-bar` — `638:3298`
- `SectionHeader` — `942:7323`
- `PeriodSegmentedControl` — `1010:1113`
- `RowLabel` — `638:3323`
- `RowValue` — `638:3325`
- `FlatKeyValueRow` — `1090:1104`
- `DateHeader` — `638:3347`
- `EmptyState` — `1406:845`
- `DualCTA` — `638:3344`
- `thumbnail/photo-register` — `638:3338`

Support icons:
- `chevron-right` — `636:893`
- `icon/check` — `636:895`
- `icon/search` — `638:3295`

Existing shared masters already canonical in Group 01 / Group 03 were reused and not duplicated or moved again.

## Master-canvas cleanup

`FlatKeyValueRow` had two variants separated by a legacy 5,200 px canvas gap.

For component-library organization only:
- the same two variant components and IDs were retained
- their master-canvas positions were compacted side-by-side
- the component-set canvas changed from `5520 × 80` to `680 × 80`
- no instance content or production-screen layout changed

## Focused QA

### Source / instance integrity

Read-back on Group 04 page `04 운동 목록 · 상세` — `233:2075`:
- total component instances inspected: `512`
- source resolving to `Common_Component`: `512 / 512`
- legacy `MVP_공용_UI` source references remaining in Group 04: `0`
- missing main-component links: `0`
- local component/component-set masters inside the Group 04 production page: `0`

Source ownership after organization:
- `01_GROUP_CONFIRMED_COMPONENTS`: `70` instances
- `03_GROUP_CONFIRMED_COMPONENTS`: `41` instances
- `04_GROUP_CONFIRMED_COMPONENTS`: `401` instances

### Visual QA

Focused screenshots were checked after moving the original masters:
- `04A_Search` — `207:1238` — PASS
- `04D_Exercise_Detail_Info` — `40:2325` — PASS
- `04E_Custom_Create` — `34:1672` — PASS
- `04_GROUP_CONFIRMED_COMPONENTS` library organization — PASS after spacing cleanup

No clipping, missing component, detached-instance regression, or visible production-screen change was found.

## Result

**PASS — the previously omitted Group 04 Common_Component organization step is complete. Group 04 remains CLOSED.**

Next product/UX work remains:
- Group 06 — 운동 완료 final closure QA

**NO CURSOR IMPLEMENTATION HANDOFF.**