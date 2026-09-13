# 04G Growth Line Chart Exploration

Status: FIGMA EXPLORATION APPLIED / VISUAL + BINDING QA PASS / PO REVIEW OPEN / NO CURSOR HANDOFF

## Scope

Figma screen: `04G_Exercise_Growth_Exploration` (`1000:1519`)
Chart frame: `GrowthTrendChart` (`1001:630`)

This checkpoint refines the line-chart presentation/rules inside the new 04G `성장` tab. It does not remove or merge 07C.

## Current UI

- `기록 추이` section keeps one period control only: `최근 4주 ▾`.
- The chart card itself is read-only and shows the auto-selected representative metric for this exercise.
- Bench-press exploration metric: `최고 중량 (kg)`.
- Period delta is shown on the top-right of the chart card: `+2.5kg`.
- Chart card size: 320 × 204.
- Straight line only; no curve smoothing and no area fill.
- Trend stroke: 2px using existing primary accent variable.
- Normal points: 6px.
- Latest point: 8px.
- Horizontal grid only; no vertical grid.
- Four Y-axis visual levels are shown with subtle labels.
- X-axis labels are centered to their corresponding plotted buckets.

## Period / bucket contract

Use the same period boundaries as the analysis-home chart contract:

- 최근 4주: rolling 28 days, 4 consecutive 7-day buckets.
- 최근 3개월: rolling 91 days, 13 consecutive 7-day buckets.
- 최근 1년: 12 calendar-month buckets ending in the current month; current month may be partial.

For `최고 중량`, each bucket value is the maximum eligible completed-set weight for the selected exercise inside that bucket.

X-axis label density:

- 최근 4주: all 4 bucket labels.
- 최근 3개월: maximum 4 labels while preserving all 13 data buckets.
- 최근 1년: maximum 4 labels while preserving all 12 month buckets.

## Y-axis contract

The growth line chart does **not** force the Y-axis to zero.

Reason: this chart answers change/progression for one exercise. A zero-based scale would visually flatten meaningful strength changes.

Use a local adaptive scale:

1. Read the eligible minimum and maximum values for the selected period.
2. Show four horizontal visual levels.
3. Choose a rounded, recording-type-safe step large enough to contain the period range.
4. Apply a minimum step so small fluctuations are not exaggerated.
5. Expand min/max outward to the selected step rather than clipping values.

Bench-press exploration example:

- Y levels: 82.5 / 80 / 77.5 / 75kg.
- Demo data begins at 77.5kg and ends at 80kg.
- Period delta: +2.5kg.

The exact minimum step for every recording type remains a follow-up product/data rule; do not hard-code kg assumptions into non-weight recording types.

## Missing / sparse data

- A bucket with no eligible record has no point.
- Do not invent or carry-forward a value for an empty bucket.
- Do not visually interpolate across missing data; break the line across the gap.
- One eligible bucket: show the single point without a connecting line.
- No eligible records in the selected period: keep the chart container and show `이 기간에는 기록이 없어요`.

## Interaction contract

- Default state shows no tooltip.
- Tapping a valid point shows an anchored tooltip with the bucket period and exact representative value.
- Tapping another point moves the tooltip.
- Tapping outside dismisses it.
- Drag interaction is not required for MVP.

## Figma reuse / bindings

No new duplicate token set was created.

Current chart keeps existing Fitness variables:

- Surface fill: `VariableID:278:920`
- Subtle border / grid: `VariableID:278:922`
- Primary accent line / points / positive delta: `VariableID:278:923`
- Primary text: `VariableID:278:942`
- Secondary axis text: `VariableID:278:943`
- Radius/md: `VariableID:278:910`

07C was intentionally not modified in this exploration.

## QA

PASS.

- Full-screen screenshot inspected after write.
- No clipping or collision.
- Y-axis labels remain inside the card and align to grid levels.
- X-axis labels are centered to plotted points.
- Latest point receives stronger visual emphasis without adding a new control.
- Existing Variable bindings were read back on card, grid, line, points, and labels.
- Existing personal-best table below the chart was not changed.

## Open review

PO review remains open for the final growth-tab contract, including whether 07C is eventually retained separately or absorbed into 04G. `docs/CURRENT.md` is intentionally not updated by this exploration checkpoint.