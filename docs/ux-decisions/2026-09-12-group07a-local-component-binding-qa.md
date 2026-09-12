# Group 07A — Local Component / Binding QA

**Date:** 2026-09-12  
**Status:** FIGMA STRUCTURE / LOCAL COMPONENT BINDING PASS · UI CONTENT STILL PO REVIEW  
**Scope:** `07A_분석홈_Exploration`을 01–06과 같은 current-file local component / local Variable / local Style 구조로 정리

## Canonical Figma

- file: `W3lZurXCXbThP67rF2xk2b`
- page: `07 분석 · 운동 기록` — `233:2078`
- screen: `07A_분석홈_Exploration` — `836:1112`
- shared UI page: `MVP_공용_UI` — `105:3113`

## Reuse retained

Already-valid local instances were preserved:
- `Nav Header`
- `fixed-tab-bar` four-tab period selector
- `WorkoutRow`
- `chevron-right`

## Missing patterns promoted to local components

Existing local assets did not provide the exact approved current SUIT-based structures below, so the repeated screen-owned frames were promoted rather than left as detached/ad-hoc UI.

### `MetricCard`
- master: `854:1167`
- screen instances:
  - 운동 횟수 `854:1174`
  - 완료 세트 `854:1177`
  - 운동 시간 `854:1180`

### `AnalysisSectionHeader`
- component set: `854:1190`
- variants:
  - `Action=None` — `854:1185`
  - `Action=Trailing` — `854:1189`
- replaces all four 07A section-header frames.

The older generic `SectionHeader` family was not reused because its current master uses legacy Inter treatment and does not support the required trailing action structure. Existing 01–06 consumers were not modified.

### `AnalysisProgressRow`
- master: `854:6951`
- replaces the three repeated recent-progress rows.
- nested chevron remains the existing local `chevron-right` instance.

All new masters were moved to `MVP_공용_UI`.

## Binding audit

07A actual tree after migration:
- total instances: **19** including nested instances
- external component instance: **0**
- external Variable: **0**
- external Style: **0**
- raw solid color drift: **0**
- raw non-zero spacing/padding drift: **0**
- raw non-zero radius drift: **0**

New masters (`MetricCard`, `AnalysisSectionHeader`, `AnalysisProgressRow`) also independently audit to:
- external component: **0**
- external Variable: **0**
- external Style: **0**
- raw token drift: **0**

Text continues to use current local SUIT text styles.

## Structure / visual QA

- repeated Metric / SectionHeader / ProgressRow structures are real component instances rather than duplicated frames.
- content stacks remain Auto Layout where applicable.
- top-level screen canvas remains a fixed screen frame by design.
- component conversion initially exposed text-width regression for `11시간` and the longer 랫풀다운 comparison string; this was corrected at the master level.
- final screenshot read-back confirms the pre-migration visual hierarchy is preserved with no wrapping regression.

## Boundary

This PASS is mechanical design-system/component binding QA only. It does not approve the 07A information architecture/content density or lock open analysis formulas.

## NEXT OPEN ITEM

Continue Product Owner review of `07A_분석홈_Exploration` content and behavior.

**NO CURSOR IMPLEMENTATION HANDOFF.**