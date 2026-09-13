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

## Current migrated usages

### 02A Home — recent workout
- composition frame: `34:1217`
- `ListCard` instance: `952:7340`
- rows: 3 × shared `RecentWorkoutRow`
- dividers: 2 × `Divider / Role=Content`

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

- 02A Home full-screen screenshot after migration: PASS
- current 07A full-screen screenshot after migration: PASS
- no clipping, spacing, divider, or radius regression observed
- read-back confirms all three migrated grouped cards use `ListCard` master `952:611`
- outer feature composition frames no longer own duplicate fills/radii

## Scope boundary

This change standardizes the grouped-list shell only. It does not force unrelated single-content cards, metric cards, action cards, or chart cards into `ListCard`.

Current Analysis NEXT OPEN ITEM remains the adaptive chart scale/bucket contract.

**NO CURSOR IMPLEMENTATION HANDOFF.**