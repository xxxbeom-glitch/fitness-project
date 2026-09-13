# Group 07A — Line chart + segmented controls exploration

Status: FIGMA EXPLORATION APPLIED / VISUAL QA PASS / PO REVIEW OPEN / NO CURSOR HANDOFF

## Scope
Applied an exploration to `07A_분석홈_부위Row딥링크_Exploration` in Figma.

## Applied UI
- Replaced the previous full-width `AnalysisPeriodTabs` row with the existing shared compact `PeriodSegmentedControl` visual at page level.
- Added explicit page-level label `분석 기간` to preserve the meaning that `4주 / 3개월 / 1년` affects the overall analysis period, not only the chart.
- Replaced the previous metric dropdown with a new matching `MetricSegmentedControl` component set:
  - `횟수`
  - `세트`
  - `시간`
  - default: `횟수`
- Replaced the 07A bar chart with the 04D growth-chart line-chart visual language.
- 4-week sample X-axis labels: `3주 전 / 2주 전 / 지난주 / 이번주`.
- Exercise-count Y-axis remains zero-based: `0 / 2 / 4 / 6`; 04D's adaptive local Y-axis rule is not carried over.
- 4-week sample points visually represent `2 / 3 / 4 / 3` exercise counts.
- Existing 07A sections below the trend area were not functionally changed.

## Shared assets
- Existing `PeriodSegmentedControl` component set remains the period selector source.
- New `MetricSegmentedControl` component set was created in `MVP_공용_UI` by reusing the same approved segmented-control visual system rather than reusing period semantics.

## QA
- Full-screen Figma screenshot reviewed after change.
- Global period selector remains outside the trend chart/card.
- Metric selector is visually and semantically separate from the global period selector.
- X labels align with line points.
- No clipping/collision observed in the 360px screen.

## Open
- This is an exploration, not a locked replacement of the previously approved 07A bar-chart contract.
- PO review is still required before superseding the locked bar-chart decision in CURRENT/specs.
