# Exercise Growth X-axis Period Labels

Status: FIGMA APPLIED / VISUAL QA PASS / NO CURSOR HANDOFF

## Scope
04D_Exercise_Detail_Growth — 중량 변화(line chart) X-axis labeling.

## Locked display rule
- 4주: rolling 28-day contract is preserved as 4 consecutive 7-day buckets. X-axis labels must represent the bucket range rather than a single date.
  - current Figma sample: `8/17–23`, `8/24–30`, `8/31–9/6`, `9/7–13`
- 3개월: keep the 13 weekly data buckets, but expose only a small number of month labels on the X-axis (max 4) for readability.
- 1년: keep 12 monthly buckets and expose max 4 month labels on the X-axis.
- X-axis labels are centered to their corresponding plotted bucket/data point.

## Rationale
A single date such as `8/22` can be misread as a one-day measurement even though the point represents a weekly bucket. Range/month labels communicate the aggregation unit more accurately and avoid duplicating date precision that the data does not have.

## Figma QA
- 04D_Exercise_Detail_Growth screenshot checked after the 4-week label update.
- Four weekly range labels fit within the chart card without clipping.
- Label centers remain aligned with the four plotted points.
