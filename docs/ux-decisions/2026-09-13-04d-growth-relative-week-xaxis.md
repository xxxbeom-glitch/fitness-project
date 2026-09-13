# 04D Exercise Detail Growth — 4주 X축 상대 주차 표기

**Status:** PO APPROVED / FIGMA APPLIED / VISUAL QA PASS / NO CURSOR HANDOFF

## Decision

`04D_Exercise_Detail_Growth`의 4주 차트 X축은 날짜 범위 대신 상대 주차 라벨을 사용한다.

라벨:
- `3주 전`
- `2주 전`
- `지난주`
- `이번주`

정확한 날짜 범위는 포인트 인터랙션/툴팁에서 확인하는 방향을 유지한다.
3개월/1년 표기 규칙은 기존 정책을 유지한다.

## Shared chart-card geometry

04D Growth는 07A Analysis와 동일한 차트 카드 geometry contract를 사용한다.

Canonical shared contract:
- `docs/ux-decisions/2026-09-13-shared-trend-chart-card-geometry.md`

Current Figma chart:
- screen `04D_Exercise_Detail_Growth` — `1000:1519`
- chart `ExerciseGrowthTrendLineChart_중량_4주` — `1001:630`
- card `320 × 176`
- plot frame `x=52`, `y=40`, `252 × 88`
- X-axis row `x=52`, `y=132`, `252 × 28`
- Y-axis label column `x=16`, width `28`
- weight-unit label `kg` — `1048:1378`, `x=16`, `y=16`, `28 × 12`

4-week bucket alignment:
- `PlotBuckets_Auto` — `1036:7411`
- `XAxisBuckets_Auto` — `1036:7416`
- `252px / 4 = 63px` equal buckets
- point and label centers relative to chart: `83.5 / 146.5 / 209.5 / 272.5`

The chart keeps 04D-specific semantics:
- local/adaptive Y-axis
- current bench-press sample levels `82.5 / 80 / 77.5 / 75`
- do not force this scale to zero merely to match 07A visually

## QA

Focused read-back and screenshot after shared-geometry approval:
- 07A / 04D card dimensions match: PASS
- plot/X-axis geometry matches: PASS
- 4-week point and label bucket alignment: PASS
- `kg` uses the same Y-axis unit placement/treatment as 07A: PASS
- full-screen 04D screenshot: PASS
- no clipping/collision: PASS

No Cursor implementation handoff.
