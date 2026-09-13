# 04G Growth — Period Control Placement Comparison

Status: FIGMA EXPLORATION APPLIED / VISUAL QA PASS / PO REVIEW OPEN / NO CURSOR HANDOFF

Figma file: `W3lZurXCXbThP67rF2xk2b`

## Comparison variants

- Outside-card period control: `04G_Exercise_Growth_Exploration_PeriodOutside` (`1000:1519`)
  - `4주 / 3개월 / 1년` segmented control remains in the `기록 추이` section header row.
  - Chart card no longer shows `최고 중량 (kg)` or the primary-colored delta value.
  - Chart card tightened vertically after removing the metric header row.

- Inside-card period control: `04G_Exercise_Growth_Exploration_PeriodInside` (`1011:612`)
  - Same segmented control component is moved into the top-right area of the chart card.
  - Section header becomes title-only.
  - Chart card no longer shows `최고 중량 (kg)` or the primary-colored delta value.

## Shared UI

- Both variants use the existing shared `PeriodSegmentedControl` component set.
- Chart data, adaptive Y-axis, X-axis labels, line/point styling, and Personal Best table remain unchanged.

## Open decision

PO review is required to choose whether period selection lives outside the chart card or inside the chart card. No IA or implementation handoff decision is made by this checkpoint.
