# Analysis Trend Chart Contract

**Date:** 2026-09-13  
**Status:** PO APPROVED / FIGMA APPLIED / QA PASS / NO CURSOR HANDOFF

## Scope

This decision is the canonical contract for the `07A` Analysis home trend section.

It supersedes the earlier `운동 횟수 / 완료 세트 / 운동 시간` + dropdown + bar-chart presentation in the previous version of this document, and absorbs the accepted direction from `2026-09-13-group07a-line-chart-segmented-exploration.md`.

The page-level Analysis period selector itself does **not** change:
- `4주 / 3개월 / 1년`
- default `4주`
- existing full-width `AnalysisPeriodTabs` remains canonical.

---

## 1. Approved trend metrics

The 07A `운동 추이` metric choices are:

- `총 중량`
- `세트`
- `시간`

Default metric:
- `총 중량`

The previous `운동 횟수` metric is removed from this chart.

### 총 중량

Meaning:
- sum the training volume of completed/persisted sets that have a valid load value
- per eligible set, volume contribution = `기록 중량 × 완료 반복수`
- sum those eligible set contributions inside each chart bucket

Do not invent/convert load for recording types that do not have a meaningful weight value.
- duration-only / reps-only and other weightless records are excluded from `총 중량`
- exact recording-type handling remains based on the canonical recording-type contract

Display:
- internal/exact value remains kg-based
- Y-axis uses compact Korean numeric notation when values become long
- show the unit `kg` once for the axis, not on every tick
- review example: `0 / 5천 / 1만 / 1.5만` + one `kg` unit label
- tooltip uses the exact value, e.g. `12,460kg`

### 세트

Meaning:
- total count of completed/persisted sets inside each bucket

Display:
- Y-axis ticks are integers
- tooltip uses localized count, e.g. `48세트`

### 시간

Meaning:
- total completed workout-session duration inside each bucket

Display:
- aggregate internally in minutes/time duration
- Y-axis uses compact hour-oriented labels when appropriate, e.g. `0 / 2시간 / 4시간 / 6시간`
- tooltip uses localized full duration, e.g. `4시간 35분`

---

## 2. Metric control

The old metric dropdown is removed from the current 07A presentation.

Use the shared compact segmented-control visual:
- `총 중량 | 세트 | 시간`
- default `총 중량`
- the metric control affects only the `운동 추이` chart
- it is semantically separate from the page-level Analysis period selector

Current Figma shared metric control:
- component set `MetricSegmentedControl` — `1025:1092`
- `Active=총 중량` — `1025:1093`
- `Active=세트` — `1025:1100`
- `Active=시간` — `1025:1107`
- live 07A instance — `1025:1582`

---

## 3. Chart presentation

Current approved presentation:
- line chart
- horizontal grid only
- no area fill
- line connects actual bucket values directly; no decorative curve interpolation required
- Y-axis starts at `0` for all three 07A aggregate metrics
- current/latest point may be visually emphasized

The old shared bar-chart component `AnalysisTrendChart` (`967:1215`) and old live instance (`967:1216`) are historical/reference artifacts and are no longer the current 07A visual path.

Current live 4-week chart:
- `AnalysisTrendLineChart_총중량_4주` — `1025:1589`

Figma sample values are review-only placeholders, not product fixtures.

---

## 4. Period bucket contract

### `4주`
- rolling `28` days ending today in the user's local date
- `4` consecutive `7-day` buckets
- latest bucket includes today
- `4` plotted points
- X labels use relative-week copy:
  - `3주 전`
  - `2주 전`
  - `지난주`
  - `이번주`
- tooltip provides the exact bucket date range

### `3개월`
- rolling `91` days ending today
- `13` consecutive `7-day` buckets
- all 13 values remain represented
- X-axis labels remain sparse, maximum `4`
- use the established anchor positions `1 / 5 / 9 / 13`
- tooltip provides the exact bucket date range

### `1년`
- `12` calendar-month buckets ending in the current calendar month
- all 12 values remain represented
- X-axis labels remain sparse, maximum `4`
- use approximately quarter-spaced month anchors
- current month may be partial
- do not project a full-month estimate
- tooltip identifies the current partial month as `진행 중`

---

## 5. Y-axis scale contract

Physical grid positions remain fixed while tick values adapt to the selected metric and period.

General:
- scale starts at `0`
- no negative values apply
- keep a small fixed number of readable grid levels
- choose compact rounded steps that keep the plotted data legible without excessive empty headroom

Metric formatting:
- `총 중량`: compact kg notation on ticks; `kg` shown once; exact kg in tooltip
- `세트`: integer ticks
- `시간`: compact hours on ticks; full localized duration in tooltip

The chart must not grow horizontally because a total-weight value becomes long.

---

## 6. X-axis layout contract

For the current 4-week Figma implementation, point and label horizontal geometry uses synchronized equal Auto Layout buckets instead of per-label manual X tuning.

Current implementation:
- `PlotBuckets_Auto` — `1036:7401`
- `XAxisBuckets_Auto` — `1036:7406`
- plot width `244px`
- four equal `61px` buckets
- each point is centered in its plot bucket
- each X label is centered in the corresponding X-axis bucket
- trend vector is an overlay connecting the bucket-centered points

Purpose:
- prevent first/last labels from overflowing
- keep point/label centers synchronized
- avoid repeated manual X-coordinate tuning

This geometry is a Figma implementation detail; the product contract is equal bucket alignment without label overflow.

---

## 7. Tap / tooltip behavior

MVP interaction remains:
- tap a plotted bucket/point -> show one anchored tooltip
- tap another -> move/update tooltip
- tap outside -> dismiss
- no drag scrub required for MVP
- tooltip stays inside chart/card bounds
- tooltip does not change card height

Tooltip includes:
- exact date range or month
- selected metric exact value

Examples:
- `9/7–9/13 · 12,460kg`
- `9/7–9/13 · 48세트`
- `9/7–9/13 · 4시간 35분`

---

## 8. Zero / unavailable states

`0` and `데이터 없음` remain different states.

Eligible bucket with no applicable value:
- real zero participates in the selected period

Unavailable/pre-history bucket:
- do not silently convert to zero
- exclude unavailable data from scale decisions where appropriate
- may display a disabled/no-data state

Entire selected period with no eligible workout records:
- keep the chart region in place
- show `이 기간에는 운동 기록이 없어요`
- do not collapse/remove the section

For `총 중량`, a workout may exist while contributing `0` to total weight because all completed records in that bucket are weightless recording types. This must not be presented as missing workout history.

---

## 9. Figma implementation / QA

Canonical file:
- `W3lZurXCXbThP67rF2xk2b`

Page:
- `07 분석 · 운동 기록` — `233:2078`

Current 07A:
- `07A_분석홈_부위Row딥링크_Exploration` — `887:936`

Page-level period selector retained:
- `AnalysisPeriodTabs` — `961:1368`
- live 07A instance — `887:941`

Current trend implementation:
- `MetricSegmentedControl` — `1025:1092`
- live metric instance — `1025:1582`
- live total-weight 4-week line chart — `1025:1589`
- plot Auto Layout buckets — `1036:7401`
- X-axis Auto Layout buckets — `1036:7406`
- single Y-axis unit label `kg` — `1039:1042`

Focused read-back after metric update:
- segmented variants `총 중량 / 세트 / 시간`: PASS
- default active variant `총 중량`: PASS
- total-weight compact Y labels `1.5만 / 1만 / 5천 / 0` + single `kg`: PASS
- original full-width Analysis period tabs preserved: PASS
- X-axis bucket alignment preserved: PASS
- 360px full-screen screenshot: PASS; no clipping/collision observed

---

## 10. Development boundary

No Cursor/development handoff is authorized by this decision.

Next Product/UX item remains the open 07B body-area drilldown policy decision.
