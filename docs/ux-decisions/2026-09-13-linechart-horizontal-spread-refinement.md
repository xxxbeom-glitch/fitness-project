# 2026-09-13 Line Chart Horizontal Spread Refinement

Status: FIGMA EXPLORATION REFINEMENT / VISUAL QA PASS / NO CURSOR HANDOFF

## Scope
Refined the 4-week line-chart horizontal spacing on both:
- 07A analysis home trend chart
- 04D exercise detail growth chart

## Change
Previous safe-area correction compressed the plot too much toward the center.

Updated 4-point X centers to:
- 58
- 134
- 210
- 286

within the 320px chart frame.

X-axis labels remain 48px wide and are centered to the same point centers, so the rightmost label ends at x=310 and no longer touches or exceeds the 320px card edge.

The line span is now 228px, restoring a wider visual spread while keeping label overflow protection.

## Preserved rules
- 4-week labels: `3주 전 / 2주 전 / 지난주 / 이번주`
- each X label center matches its data-point center
- 07A Y-axis remains zero-based
- 04D growth chart retains its existing adaptive Y-axis rule
- no changes to analysis period tabs or metric segmented controls

## QA
- 07A full-screen screenshot: PASS
- 04D growth full-screen screenshot: PASS
- no clipping or label overflow observed

This is a visual refinement only and does not trigger Cursor implementation handoff.
