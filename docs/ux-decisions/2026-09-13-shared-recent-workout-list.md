# Shared Recent Workout List Pattern

**Date:** 2026-09-13  
**Status:** FIGMA QA PASS / SHARED COMPONENT REUSE / NO CURSOR HANDOFF

## Scope

This checkpoint records the Product Owner-directed alignment of the `최근 운동` block between `02A_Home_NoRoutine` and current `07A` Analysis.

Canonical Figma file:
- `W3lZurXCXbThP67rF2xk2b`

Affected frames:
- `02A_Home_NoRoutine` — `34:1194`
- current refined 07A — `887:936`

## Shared structure

`최근 운동` now uses the same visual/component pattern in both Home and Analysis:
- shared 24px `SectionHeader / Trailing=Action`
- title = `최근 운동`
- trailing action = `전체 기록`
- one shared outer `RecentWorkoutCard`
- transparent workout rows inside the card
- `Divider / Role=Content` between rows
- divider inset aligns to the 20px card content line
- row horizontal padding = `spacing/20`
- left = routine/workout name
- right = performed date immediately before chevron
- workout duration is not shown in this summary row

## Shared row component

The previous Analysis-local master was promoted to a cross-screen component:
- old name: `AnalysisRecentWorkoutRow`
- current name: `RecentWorkoutRow`
- component id: `937:7292`

Current live instances: `5`
- 02A Home: `943:693`, `943:701`, `943:709`
- 07A Analysis: `937:7298`, `937:7304`

## 02A Home result

The old three separate rounded `WorkoutRow` cards were replaced by one list card:
- card frame: `34:1217` (`RecentWorkoutCard`)
- height: `182`
- rows: 3 × 60px
- dividers: 2 × 1px

Existing 02A sample content is preserved:
- `상체 루틴 A` — `7월 14일`
- `하체 루틴 B` — `7월 12일`
- `상체 루틴 A` — `7월 10일`

The section header now also exposes the existing `전체 기록` action, matching the Analysis pattern.

## QA

Focused Figma screenshot/read-back:
- `02A_Home_NoRoutine`: PASS
- current 07A recent-workout section: PASS
- no clipping/collision observed
- shared `RecentWorkoutRow` has exactly 5 live instances across the two screens

## Supersedes

This checkpoint supersedes earlier notes that said:
- `AnalysisRecentWorkoutRow` was Analysis-local
- 02 Home usages remained unchanged

## Resume point

Group 07 Product/UX review remains active. The NEXT OPEN ITEM is unchanged:
1. define adaptive chart Y-axis max / rounding
2. define period bucket rules
3. define X-axis label density
4. define bar width / gap adaptation
5. define tap / tooltip behavior
6. define zero / insufficient-data behavior

No development/Cursor handoff.