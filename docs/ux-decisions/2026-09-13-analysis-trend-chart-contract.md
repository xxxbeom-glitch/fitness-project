# Analysis Trend Chart Adaptive Scale / Bucket Contract

**Date:** 2026-09-13  
**Status:** PO APPROVED / FIGMA APPLIED / QA PASS / NO CURSOR HANDOFF

## Scope

This decision locks the adaptive behavior of the 07A Analysis headline trend chart for the approved primary periods:

- `4주`
- `3개월`
- `1년`

It supersedes the previously-open chart scale/bucket questions in `2026-09-13-group07a-refined-analysis-home-handoff.md` and `2026-09-13-analysis-period-selector-simplification.md`.

The chart remains a summary visualization for the three already-approved headline metrics:

- `운동 횟수`
- `완료 세트`
- `운동 시간`

---

## 1. Fixed visual frame

The physical chart geometry does not change when metric or period changes.

Current Figma contract:
- trend card: `320 × 208`
- card horizontal padding: `spacing/20`
- chart: `280 × 132`
- Y-axis/grid: 4 fixed visual levels including `0`
- grid positions remain fixed
- X-axis region remains fixed

Metric/period changes may change:
- Y-axis numbers
- bar values/heights
- number of bars
- bar width/gap
- X-axis labels
- tooltip copy

They must not resize the chart card or move surrounding 07A sections.

---

## 2. Period buckets

### `4주`
- rolling `28` days ending on today in the user's local date
- split into `4` consecutive `7-day` buckets
- latest bucket includes today
- bar count: `4`
- all 4 X-axis labels are shown
- X-axis label uses bucket start date in short `M/D` form

Example only:
- `8/17`
- `8/24`
- `8/31`
- `9/7`

### `3개월`
- rolling `91` days ending on today in the user's local date
- split into `13` consecutive `7-day` buckets
- latest bucket includes today
- bar count: `13`
- X-axis labels are sparse, maximum `4`
- anchor labels are shown at bucket positions `1 / 5 / 9 / 13`
- X-axis label uses bucket start date in short `M/D` form

This keeps weekly trend resolution rather than collapsing the medium-term range into only three monthly bars.

### `1년`
- `12` calendar-month buckets ending in the current calendar month
- bar count: `12`
- current month is allowed to be partial
- X-axis labels are sparse, maximum `4`
- use approximately quarter-spaced month anchors; current Figma example uses positions `1 / 4 / 8 / 12`
- X-axis label uses localized month text such as `10월 / 1월 / 5월 / 9월`
- when the current month is selected/tapped, tooltip copy identifies it as an in-progress partial month

The 1-year chart intentionally uses month buckets rather than 52 weekly bars because the fixed 280px chart would otherwise become visually dense without adding useful summary-level readability.

---

## 3. Y-axis adaptive scale

### Fixed structure
- exactly `4` Y-axis labels/levels including `0`
- physical label/grid positions do not move
- scale starts at `0`
- negative values do not apply to these three metrics

### Scale selection
For the active metric and period:

1. calculate the maximum plotted bucket value (`peak`)
2. calculate the raw tick step as `peak / 3`
3. choose the smallest practical rounded step that is greater than or equal to the raw step
4. Y-axis maximum = `step × 3`
5. labels = `0 / step / step×2 / step×3`

The rounded step should stay visually tight to the data. Do not force a large extra headroom multiplier if it would create a mostly empty chart. The chart already has internal top spacing; the selected rounded step naturally provides headroom in most cases.

### Count-based metrics
For `운동 횟수` and `완료 세트`:
- Y-axis tick labels must remain integers
- practical step family: integer values derived from `1 / 2 / 2.5 / 3 / 5 × 10^n`, skipping candidates that would create fractional count ticks

Typical results:
- peak `3` -> `0 / 1 / 2 / 3`
- peak `4` -> `0 / 2 / 4 / 6`
- peak `17` -> `0 / 10 / 20 / 30`
- peak `61` -> `0 / 25 / 50 / 75`

### Workout-time metric
Internally aggregate duration in minutes, but the chart Y-axis is expressed in hours for compactness.

Preferred tick-step family:
- `0.5h`
- `1h`
- `2h`
- `3h`
- `5h`
- `10h`
- continue with similarly readable larger steps if required

Y-axis text can omit the unit because the selected metric and aggregate value establish context. Use at most one decimal place (`0.5`, `1`, `1.5`, etc.).

Tooltip/aggregate copy uses localized full duration formatting instead, e.g. `2시간 15분`.

---

## 4. Bar geometry

The plot width stays fixed.

Review baseline:
- `4주`: bar width about `28px`
- `3개월`: bar width about `12px`
- `1년`: bar width about `14px`

Bars are distributed evenly across the available plot width.

Rules:
- do not horizontally scroll this MVP chart
- do not shrink all period states to one universal bar width
- positive non-zero values may use a minimum visible bar height of approximately `2px`; tooltip always shows the exact value
- zero-value eligible buckets render no positive bar

---

## 5. X-axis labels

X-axis label count is independent from bar count.

- `4주`: 4 bars / 4 labels
- `3개월`: 13 bars / max 4 labels
- `1년`: 12 bars / max 4 labels

Dense periods keep unlabeled bars selectable through their bucket hit area.

Labels must not overlap or force the chart wider.

---

## 6. Tap / tooltip behavior

MVP interaction:
- tap one bucket -> show one anchored tooltip
- tap another bucket -> move/update the tooltip
- tap outside the chart/tooltip -> dismiss
- no drag-scrub interaction is required for MVP
- tooltip must stay inside the chart/card bounds by clamping its horizontal position
- showing a tooltip must not change card height

Tooltip content:

### `4주` / `3개월`
- bucket date range
- selected metric value

Example:
- `8/24–8/30`
- `운동 횟수 3회`

### `1년`
- month
- selected metric value
- current partial month may append `진행 중`

Metric formatting:
- workout count: `3회`
- completed sets: `18세트`
- workout time: `2시간 15분`

The tappable bucket region may be wider than the visible bar so dense 3-month bars remain usable.

---

## 7. Zero / unavailable / insufficient data

`0` and `데이터 없음` are different states.

### Eligible bucket with no workout
- bucket value = `0`
- it is a real zero and participates in the selected period
- no positive bar is rendered

### Bucket before usable account/history start
- do not convert it to `0`
- exclude it from Y-axis peak calculation
- represent it as unavailable rather than implying the user trained zero times
- a subtle disabled baseline marker/dash may be used to distinguish it from a real zero
- if tapped, tooltip may say `데이터 없음`

### Entire selected period has no eligible workout records
- aggregate value displays the metric's zero form (`0회`, `0세트`, `0분`)
- keep the `280 × 132` chart region in place
- replace bars with the centered message `이 기간에는 운동 기록이 없어요`
- do not collapse/remove the card

### Partial current month in `1년`
- include saved work through today
- do not project a full-month estimate
- tooltip identifies the current month as `진행 중`

---

## 8. Figma implementation

Canonical file:
- `W3lZurXCXbThP67rF2xk2b`

Page:
- `07 분석 · 운동 기록` — `233:2078`

Current 07A:
- `07A_분석홈_부위Row딥링크_Exploration` — `887:936`

Shared period selector remains:
- `AnalysisPeriodTabs` — `961:1368`
- current 07A instance `887:941`
- visible options verified: `4주 / 3개월 / 1년`

New shared chart component set:
- `AnalysisTrendChart` — `967:1215`

Variants:
- `Period=4주` — `967:1123`
- `Period=3개월` — `967:1140`
- `Period=1년` — `967:1157`

Current 07A live chart:
- instance `967:1216`
- `Period=4주`
- replaces the previous raw `MetricChart_4Weeks` frame

The three variants visually encode the approved bucket density and X-axis label density while preserving the same `280 × 132` chart frame.

Figma sample values are review-only placeholders and are not product fixtures.

---

## 9. QA

Focused visual QA after componentization:
- current 07A period tabs still show `4주 / 3개월 / 1년`: PASS
- active 4-week chart visual hierarchy preserved: PASS
- card size/layout and lower sections unchanged: PASS
- 3-month 13-bar variant fits without clipping: PASS
- 1-year 12-bar variant fits without clipping: PASS
- sparse 4-label X-axis treatment remains readable: PASS

No development/Cursor handoff is authorized by this decision.

---

## Next product item

07A content composition and adaptive chart contract are now stable enough to stop reopening this chart mechanically unless a new regression or policy change appears.

Next open Product/UX decision:
- resolve whether the current 07B selected-body-detail exploration supersedes the previously locked 07B inline-expansion policy
- if the selected-body-detail direction is approved, define a recording-type-safe trailing metric for its contributing-exercise rows

**NO CURSOR IMPLEMENTATION HANDOFF.**