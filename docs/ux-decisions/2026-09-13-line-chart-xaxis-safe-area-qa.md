# Line chart X-axis safe-area QA

Status: FIGMA APPLIED / VISUAL QA PASS / NO CURSOR HANDOFF

## Scope
- 07A analysis line chart
- 04D exercise growth line chart

## Problem
The four X-axis labels were centered on data points at x=56/136/216/296 in a 320px chart card. Because each label is 48px wide, the first and last labels visually extended to the card edges and broke the intended horizontal padding rhythm.

## Applied rule
- Keep four X-axis labels inside the chart card safe area.
- New label/data-point centers: 55 / 125 / 195 / 265.
- Each X-axis label remains 48px wide and center-aligned to its corresponding point.
- First/last label bounds are now x=31..79 and x=241..289, preserving visual breathing room from the 320px card edges.
- Trend path width reduced from 240px to 210px and moved to x=55 so line vertices stay aligned with the new point centers.
- Y-axis, grid, values, typography, colors, and period logic unchanged.

## QA
- 07A screenshot QA: PASS.
- 04D growth screenshot QA: PASS.
- No clipping or label overflow at left/right chart edges.
- X-axis labels and data points remain center-aligned.

## Notes
This is a chart layout normalization only. It does not change data aggregation, Y-axis policy, period policy, or product behavior.
