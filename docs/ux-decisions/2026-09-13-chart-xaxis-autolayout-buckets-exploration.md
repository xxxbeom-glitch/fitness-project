# Chart X-axis Auto Layout Buckets Exploration

Status: FIGMA EXPLORATION APPLIED / VISUAL QA PASS / PO REVIEW OPEN / NO CURSOR HANDOFF

## Scope
- 07A analysis trend line chart
- 04D exercise detail growth line chart

## Change
- Replaced manual X-positioning for 4-week points and X-axis labels with two synchronized horizontal Auto Layout rows.
- Plot points use `PlotBuckets_Auto`: 244px plot width split into four equal 61px buckets.
- X-axis labels use `XAxisBuckets_Auto`: the same four equal 61px buckets.
- Each point is horizontally CENTER-constrained inside its plot bucket.
- Each label is centered by Auto Layout inside its X-axis bucket.
- Resulting shared bucket centers: 82.5 / 143.5 / 204.5 / 265.5.
- Trend vector remains an overlay and was redrawn to the new bucket centers.

## Rationale
- Prevent first/last X-axis labels from overflowing the chart card.
- Remove repeated manual per-label X-coordinate tuning.
- Keep point and label centers synchronized by one shared equal-bucket geometry.

## QA
- 07A full-screen screenshot: PASS.
- 04D Growth full-screen screenshot: PASS.
- No clipping or label overflow observed.
- Existing Y-axis rules, period controls, metric controls, and other screen content unchanged.

## Note
This is still an exploration pending PO visual review. It does not trigger implementation handoff.