# Analysis Period Selector Simplification — Figma QA Checkpoint

**Date:** 2026-09-13  
**Status:** PO APPROVED / FIGMA APPLIED / QA PASS / NO CURSOR HANDOFF

## Decision

The primary Analysis period selector is simplified from four persistent options to three:

- `4주` — default / recent training pattern
- `3개월` — medium-term trend
- `1년` — long-term trend

The previous `6개월` option is removed from the primary MVP selector.

Reason:
- `3개월` and `1년` already cover the meaningful medium/long-term review questions for the current MVP.
- `6개월` adds another persistent tab on the 360px Analysis surface while overlapping those roles.
- if real usage later shows a distinct need, `6개월` can return through a future expanded/custom period control rather than occupying a permanent primary tab now.

`1주` and `전체` remain excluded for the reasons already recorded in `2026-09-05-analysis-tab-ia.md`.

## Reference review

Before the PO decision, current fitness/activity references were checked in Mobbin. The relevant pattern is that products vary widely, but compact three-level selectors are common when the product wants to emphasize a small number of meaningful time scales; examples include Tonal `Week / Month / Year` and AllTrails `Month / Year / All`. More analytics-heavy products expose more ranges.

This reference review informed the simplification but does not copy another product's period semantics.

## Canonical policy update

`docs/ux-decisions/2026-09-05-analysis-tab-ia.md` is revised so the approved Analysis Home period contract is now:

- default: `4주`
- options: `4주 / 3개월 / 1년`

Any older checkpoint that still lists `4주 / 3개월 / 6개월 / 1년` is superseded on this specific period-selector point by the revised canonical IA and this checkpoint.

## Figma implementation

Canonical file:
- `W3lZurXCXbThP67rF2xk2b`

Page:
- `07 분석 · 운동 기록` — `233:2078`

New shared component set:
- `AnalysisPeriodTabs` — `961:1368`

Variants:
- `Active=4주` — `961:1347`
- `Active=3개월` — `961:1354`
- `Active=1년` — `961:1361`

Current refined 07A:
- frame `887:936`
- `PeriodTabs` instance `887:941`
- remains `360 × 54` full-bleed at screen level
- default active = `4주`

The component reuses the existing Fitness fixed-tab visual language:
- `heading/02` typography
- brand-primary active text/underline
- border-subtle bottom rail
- equal-width Fill tabs

## Migration

All Analysis-page instances that were still using the old 4-tab period component were swapped to the new `AnalysisPeriodTabs` default `4주` variant while preserving each instance's existing width.

Migrated instances: `7`
- `842:7281`
- `843:596`
- `843:605`
- `876:943`
- `876:997`
- `887:941`
- `887:1033`

This includes older exploration/reference frames on the Analysis page so the page no longer visually carries two competing period contracts.

## QA

Current refined 07A screenshot/read-back after migration:
- three tabs visible: `4주 / 3개월 / 1년`
- `4주` active state and underline: PASS
- 360px full-width rail preserved: PASS
- trend card and lower Analysis content position: PASS
- no clipping/collision introduced: PASS

## Chart contract impact

The chart frame and metric rules are unchanged by this decision.

The remaining adaptive chart work must now define buckets only for:
- `4주`
- `3개월`
- `1년`

Still open:
1. Y-axis max / nice-number rounding / headroom
2. bucket definitions for the three approved periods
3. X-axis label density
4. bar width / gap adaptation
5. tap / tooltip behavior
6. zero / insufficient-data behavior
7. long-duration formatting

**NO CURSOR IMPLEMENTATION HANDOFF.**