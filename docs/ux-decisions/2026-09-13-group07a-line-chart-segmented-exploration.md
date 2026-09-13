# Group 07A — Line chart + segmented controls exploration

Status: SUPERSEDED BY APPROVED CANONICAL CONTRACT / HISTORY ONLY / NO CURSOR HANDOFF

Canonical current decision:
- `docs/ux-decisions/2026-09-13-analysis-trend-chart-contract.md`

This file preserves the exploration history only. It must not be used as the current implementation contract where it conflicts with the canonical decision above.

## Final accepted state after exploration

- Page-level Analysis period selector stays the original full-width `AnalysisPeriodTabs`:
  - `4주 / 3개월 / 1년`
  - default `4주`
- The temporary compact page-level period segmented-control experiment was reverted.
- 07A `운동 추이` uses a compact metric segmented control only for the chart metric:
  - `총 중량`
  - `세트`
  - `시간`
  - default `총 중량`
- 07A uses the line-chart visual direction instead of the earlier bar chart.
- 4-week X labels use `3주 전 / 2주 전 / 지난주 / 이번주`.
- The 4-week point/X-label geometry currently uses synchronized equal Auto Layout buckets; see `2026-09-13-chart-xaxis-autolayout-buckets-exploration.md` for implementation history.
- Y-axis remains zero-based for the 07A aggregate metrics.
- `총 중량` uses compact kg tick notation with one `kg` axis unit and exact kg values in tooltip.

## Current Figma

Canonical file `W3lZurXCXbThP67rF2xk2b`:
- current 07A `887:936`
- metric segmented component set `1025:1092`
- live metric instance `1025:1582`
- live 4-week total-weight line chart `1025:1589`

No development/Cursor handoff is authorized by this exploration history.
