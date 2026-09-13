# Shared ListCard Shell — Figma QA Checkpoint

**Date:** 2026-09-13  
**Status:** FIGMA SHARED COMPONENT / QA PASS / NO CURSOR HANDOFF

## Decision

Grouped card-style lists use one reusable visual shell component rather than recreating surface/radius on each feature card.

Shared component:
- `ListCard` — `952:611`

`ListCard` owns only the grouped-list container surface:
- width baseline `320`
- vertically resizable by composition
- `bg/surface` binding (`VariableID:278:920`)
- `radius/md` binding (`VariableID:278:910`)
- no internal padding
- no row-count variants

Feature-specific rows and dividers remain separate reusable components/patterns. This avoids `Rows=2 / Rows=3 / Rows=4` variant growth and keeps row content flexible.

## Composition rule

A grouped list is composed as:
1. `ListCard` instance as the visual background shell
2. feature-specific row instances above it
3. shared `Divider / Role=Content` between rows
4. row components own their own horizontal/vertical spacing

The feature composition frame itself does not own a duplicate fill or radius.

For Home recent-workout compositions, the feature wrapper is named `RecentWorkoutList` rather than `RecentWorkoutCard` so the raw composition frame is not confused with the shared `ListCard` component.

## Current migrated usages

### 02 Home — recent workout
The canonical primary Home states now share the same structure:
- `02A_Home_NoRoutine` — `34:1194`
  - composition frame `RecentWorkoutList` — `34:1217`
  - `ListCard` — `952:7340`
- `02B_Home_RoutineSelected` — `34:1228`
  - composition frame `RecentWorkoutList` — `947:7128`
  - `ListCard` — `947:7129`
- `02D_Home_Active` — `34:1310`
  - composition frame `RecentWorkoutList` — `947:7157`
  - `ListCard` — `947:7158`

Each current Home recent-workout composition uses:
- 3 × shared `RecentWorkoutRow` (`937:7292` master)
- 2 × shared `Divider / Role=Content`
- `SectionHeader / Trailing=Action` with `최근 운동 / 전체 기록`
- `spacing/20` row horizontal padding

The three primary Home states also consistently reuse:
- `HomePrimaryActionCard` state variant
- shared `HeatmapCard`
- shared `SectionHeader`

`02C_Home_RoutinePicker` is not included in this cleanup because it is the picker/transitional state rather than one of the three canonical primary Home states requested for this pass.

### 07A Analysis — recent record change
- composition frame: `887:994`
- `ListCard` instance: `952:7341`
- rows: 3 × `ProgressRow`
- dividers: 2 × `Divider / Role=Content`

### 07A Analysis — recent workout
- composition frame: `887:1000`
- `ListCard` instance: `952:613`
- rows: 2 × shared `RecentWorkoutRow`
- divider: 1 × `Divider / Role=Content`

## QA

- 02A / 02B / 02D structural read-back: PASS
- each has exactly 1 `ListCard`, 3 `RecentWorkoutRow`, 2 content dividers, 1 Action SectionHeader, 1 HomePrimaryActionCard and 1 HeatmapCard
- obsolete `RecentWorkoutCard` wrapper name count across 02A / 02B / 02D = `0`
- 02B and 02D focused full-screen screenshots: PASS
- no clipping, spacing, divider, radius, or component regression observed
- current 07A full-screen screenshot after ListCard migration: PASS

## Scope boundary

This change standardizes the grouped-list shell only. It does not force unrelated single-content cards, metric cards, action cards, or chart cards into `ListCard`.

Current Analysis NEXT OPEN ITEM remains the adaptive chart scale/bucket contract.

**NO CURSOR IMPLEMENTATION HANDOFF.**