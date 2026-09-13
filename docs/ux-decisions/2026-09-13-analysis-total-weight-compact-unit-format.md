# 07A Analysis Total Weight — Compact Y-axis Unit Format

**Date:** 2026-09-13  
**Status:** PO APPROVED / FIGMA APPLIED / QA PASS / NO CURSOR HANDOFF

## Scope

This decision applies only to the `07A` Analysis home `운동 추이 > 총 중량` Y-axis tick-label formatter.

It supersedes the previous Korean compact examples such as `5천 / 1만 / 1.5만` in the 07A trend-chart contract. All other metric, period, bucket, tooltip, chart-shell, and zero-based scale rules remain unchanged.

Canonical Figma:
- file `W3lZurXCXbThP67rF2xk2b`
- page `07 분석 · 운동 기록` — `233:2078`
- screen `07A_분석홈_부위Row딥링크_Exploration` — `887:936`
- chart `AnalysisTrendLineChart_총중량_4주` — `1025:1589`

---

## Approved formatter

Use English compact magnitude suffixes for `총 중량` Y-axis ticks:

- below `1,000` -> raw number, e.g. `750`
- `1,000` to below `1,000,000` -> `K`
- `1,000,000` to below `1,000,000,000` -> `M`
- `1,000,000,000+` -> `B` fallback support

Examples:
- `1,000kg` -> `1K`
- `5,000kg` -> `5K`
- `12,000kg` -> `12K`
- `150,000kg` -> `150K`
- `1,200,000kg` -> `1.2M`
- `10,000,000kg` -> `10M`

Decimal policy:
- use at most one decimal place when needed for a readable rounded tick
- remove trailing `.0`
- axis ticks still come from the existing rounded/nice-step Y-scale policy; do not use arbitrary exact workout totals as tick labels

Unit policy:
- keep `kg` once in the Y-axis unit slot
- do not repeat `kg` on every tick
- exact values remain available in tooltip with thousands separators, e.g. `153,420kg`

`B` is supported as a formatter fallback for robustness; it is not an expected normal fitness-data range.

---

## Figma sample

The current 4-week review sample was updated from Korean magnitude labels to:
- `15K`
- `10K`
- `5K`
- `0`

Single unit label remains:
- `kg` — `1039:1042`

No chart geometry changed.
The approved shared 04D/07A chart-card shell remains:
- card `320 × 176`
- Y-axis column `28px`
- plot `252 × 88`
- synchronized X-axis Auto Layout buckets

---

## 04D boundary

This compact suffix decision does **not** change the current `04D` exercise-growth Y-axis presentation.

04D shows one exercise's representative metric and keeps its local/adaptive scale with direct values such as:
- `75`
- `77.5`
- `80`
- `82.5`

04D may adopt compact suffixes only if a future selected metric genuinely reaches a magnitude where direct labels no longer fit; that is not part of this decision.

---

## QA

Figma read-back and full-screen screenshot after the update:
- `15K / 10K / 5K / 0` visible: PASS
- single `kg` unit preserved: PASS
- Y-axis column width unchanged: PASS
- no clipping/collision: PASS
- shared chart geometry unchanged: PASS

No Cursor/development handoff.