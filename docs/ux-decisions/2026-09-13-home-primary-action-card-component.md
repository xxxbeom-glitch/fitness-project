# Home Primary Action Card — Shared Component Consolidation

**Date:** 2026-09-13  
**Status:** FIGMA QA PASS / SHARED HOME COMPONENT / NO CURSOR HANDOFF

## Purpose

Consolidate the repeated Home primary-action cards into one shared Figma component family instead of leaving state-specific raw frames.

## Canonical Figma

File:
- `W3lZurXCXbThP67rF2xk2b`

Shared component set:
- `HomePrimaryActionCard` — `949:618`

Variant property:
- `State`

Variants:
- `State=NoRoutine` — `949:615` — `320 × 140`
- `State=RoutineSelected` — `949:616` — `320 × 140`
- `State=ActiveWorkout` — `949:617` — `320 × 158`

## Shared layout contract

- standard horizontal padding = `spacing/20`
- standard vertical padding = `spacing/20`
- card radius = `12`
- content-to-action gap = `spacing/12`
- existing compact button components remain nested/shared; buttons were not rebuilt locally
- `SectionHeader` stays a separate shared component and is composed above this card; it is not embedded into the card family

NoRoutine text-stack spacing was normalized from `6` to `4` so all three states use the same compact text-stack rhythm.

## Migration

Replaced Home raw frames with shared component instances:

- `02A_Home_NoRoutine`
  - instance `949:620`
  - `State=NoRoutine`
- `02B_Home_RoutineSelected`
  - instance `949:632`
  - `State=RoutineSelected`
- `02C_Home_RoutinePicker`
  - instance `949:644`
  - `State=RoutineSelected`
- `02D_Home_Active`
  - instance `949:654`
  - `State=ActiveWorkout`

The previous raw card frames were removed from the active Home screen structure.

## QA

Focused read-back and rendered visual QA were performed on representative Home states:
- `02A_Home_NoRoutine`
- `02B_Home_RoutineSelected`
- `02D_Home_Active`

Result:
- PASS
- no clipping/collision observed
- state-specific styling and content remain intact
- NoRoutine height reduced by 2px (`142 → 140`) as a direct consequence of the approved text-stack gap normalization

## Boundary

This is a Figma/design-system cleanup only.

Current Group 07 Analysis NEXT OPEN ITEM remains unchanged:
- adaptive chart Y-axis max/rounding
- period buckets
- X-axis density
- bar width/gap
- tooltip/tap
- zero/insufficient states

**NO CURSOR IMPLEMENTATION HANDOFF.**