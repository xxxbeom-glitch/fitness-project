# Shared Trend Chart Card Geometry

**Date:** 2026-09-13  
**Status:** PO APPROVED / FIGMA APPLIED / QA PASS / NO CURSOR HANDOFF

## Scope

This decision defines one shared chart-card geometry contract for the current line charts used in:

- `07A` Analysis home trend
- `04D` Exercise Detail > Growth

The two charts keep different data/scale semantics, but their card shell, Y-axis column, plot region, X-axis row, and unit placement must use the same geometry.

Canonical Figma file:
- `W3lZurXCXbThP67rF2xk2b`

Current nodes:
- 07A `AnalysisTrendLineChart_총중량_4주` — `1025:1589`
- 04D `ExerciseGrowthTrendLineChart_중량_4주` — `1001:630`

## Approved geometry

Chart card:
- size `320 × 176`
- chart-specific outer safe area is based on `16px`, separate from the standard content-card `20px` rule

Horizontal structure:
- left outer safe area: `16px`
- Y-axis label column: `28px`
- Y-axis -> plot gap: `8px`
- plot starts at `x=52`
- plot width: `252px`
- right outer safe area: `16px`

Vertical structure:
- optional unit label: `x=16`, `y=16`, `28 × 12`
- plot bucket frame: `x=52`, `y=40`, `252 × 88`
- grid levels: `y=40 / 68 / 96 / 124`
- Y-axis labels: `x=16`, `28 × 14`, aligned to the four grid levels
- X-axis bucket row: `x=52`, `y=132`, `252 × 28`
- bottom safe area after the X-axis row: `16px`

4-week horizontal bucket geometry:
- `252px / 4 = 63px` per bucket
- plot points and X labels use synchronized equal Auto Layout buckets
- point/label centers relative to the chart: `83.5 / 146.5 / 209.5 / 272.5`
- trend vector remains an overlay connecting the bucket-centered points

## Unit treatment

When the metric needs a unit label, show it once in the Y-axis column instead of repeating it on every tick.

Current weight examples:
- 07A total weight: `kg`
- 04D weight growth: `kg`

Unit typography:
- SUIT Medium `10 / 12`
- `text/tertiary`
- right aligned inside the `28px` Y-axis column

For non-weight metrics, use the appropriate unit or omit the unit label when the selected metric copy already makes the unit unambiguous.

## Semantic differences that remain

The shared geometry does **not** merge the two data contracts.

07A Analysis:
- aggregate trend
- Y-axis remains zero-based
- current metric choices: `총 중량 / 세트 / 시간`

04D Growth:
- one selected exercise's progression
- Y-axis remains local/adaptive rather than forced to zero
- current weight example uses `중량 변화`

Do not apply 04D adaptive scaling to 07A, and do not force 04D to zero solely for visual reuse.

## Figma implementation note

The current two chart frames remain separate because their scale rules, labels, data points, and future recording-type behavior differ. The shared requirement is the geometry contract above, not a rigid single chart component that would couple their data semantics.

If a reusable chart implementation is introduced later, it must preserve this shared shell while allowing independent scale/data configuration.

## QA

Read-back after PO approval:

07A:
- card `320 × 176`: PASS
- plot `52,40 / 252 × 88`: PASS
- X-axis `52,132 / 252 × 28`: PASS
- `kg` at `16,16 / 28 × 12`: PASS
- full-screen screenshot: PASS

04D:
- card `320 × 176`: PASS
- plot `52,40 / 252 × 88`: PASS
- X-axis `52,132 / 252 × 28`: PASS
- `kg` at `16,16 / 28 × 12`: PASS
- full-screen screenshot: PASS

No clipping, overflow, or point/X-label alignment regression observed.

## Development boundary

No Cursor/development handoff is authorized by this decision.
