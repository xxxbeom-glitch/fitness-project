# Analysis Trend Chart — X-axis Alignment QA

**Date:** 2026-09-13  
**Status:** FIGMA APPLIED / QA PASS / NO CURSOR HANDOFF

## Scope

Focused visual/alignment QA for the shared `AnalysisTrendChart` after PO review of the X-axis label positioning.

Canonical Figma file: `W3lZurXCXbThP67rF2xk2b`

Shared chart masters:
- `AnalysisTrendChart/4주` — `967:1123`
- `AnalysisTrendChart/3개월` — `967:1140`
- `AnalysisTrendChart/1년` — `967:1157`

Current 07A live chart instance:
- `967:1216`

## Alignment rule

Each visible X-axis label is centered on the exact bucket/bar it represents.

Do not position X labels independently by eye or clamp only the text group edges in a way that breaks bucket alignment.

Current Figma implementation:
- visible X-label frame width: `28px`
- label text alignment: center
- label center X = represented bar center X
- chart frame remains `280 × 132`
- no chart/card size change

## Period geometry

### 4주
Visible labels map 1:1 to the four bars.

Centers:
- `8/17` -> `38`
- `8/24` -> `114`
- `8/31` -> `190`
- `9/7` -> `266`

### 3개월
13 weekly bars remain. The four visible labels remain at bucket positions `1 / 5 / 9 / 13`.

To keep first/last labels centered without clipping, the dense bar run is symmetrically inset inside the existing plot region.

Bar centers use:
- first = `38`
- step = `19`
- last = `266`

Visible label centers therefore resolve to:
- bucket 1 = `38`
- bucket 5 = `114`
- bucket 9 = `190`
- bucket 13 = `266`

### 1년
12 monthly bars remain. Visible labels remain at bucket positions `1 / 4 / 8 / 12`.

The bar run is symmetrically inset inside the existing plot region:
- first center = `38`
- last center = `266`
- intermediate centers are evenly distributed

Visible label centers:
- bucket 1 = `38`
- bucket 4 ≈ `100.18`
- bucket 8 ≈ `183.09`
- bucket 12 = `266`

## QA

Numeric center-difference audit:
- 4주 visible labels vs represented bars: `0px` for all 4 — PASS
- 3개월 visible labels vs represented bars: `0px` for all 4 — PASS
- 1년 visible labels vs represented bars: `0px` for all 4 — PASS
- first/last visible label frames remain within `0–280px` chart bounds — PASS
- current 07A `967:1216` inherits the corrected 4주 geometry — PASS
- chart/card dimensions unchanged — PASS

This is a focused geometry correction only. The previously approved adaptive bucket/scale contract remains unchanged.

**NO CURSOR IMPLEMENTATION HANDOFF.**