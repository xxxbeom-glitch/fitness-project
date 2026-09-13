# CURRENT — Fitness Project

**Updated:** 2026-09-13

## Current mode

`PRODUCT/UX FIGMA · GROUP 07 ANALYSIS · 07A CONTENT + SHARED 04D/07A TREND-CHART GEOMETRY LOCKED · 07B POLICY DECISION NEXT · PO REVIEW · NO CURSOR IMPLEMENTATION HANDOFF`

## Resume rule

`PROJECT_INSTRUCTIONS → CURRENT → latest active checkpoint → NEXT OPEN ITEM`

이미 PO 승인 또는 QA PASS된 범위는 새 변경·충돌·regression 가능성·명시 재검토 요청이 없으면 다시 처음부터 검토하지 않는다.

## Latest active checkpoint

- `docs/ux-decisions/2026-09-13-shared-trend-chart-card-geometry.md`

Supporting checkpoints:
- `docs/ux-decisions/2026-09-13-analysis-trend-chart-contract.md`
- `docs/ux-decisions/2026-09-13-04d-growth-relative-week-xaxis.md`
- `docs/ux-decisions/2026-09-13-chart-xaxis-autolayout-buckets-exploration.md`
- `docs/ux-decisions/2026-09-13-analysis-progress-row-two-line-layout.md`
- `docs/ux-decisions/2026-09-13-analysis-period-selector-simplification.md`
- `docs/ux-decisions/2026-09-13-group07a-refined-analysis-home-handoff.md`
- `docs/ux-decisions/2026-09-13-shared-recent-workout-list.md`
- `docs/ux-decisions/2026-09-13-shared-section-header-consolidation.md`
- `docs/ux-decisions/2026-09-12-group07b-e-local-component-spacing-qa.md`

Locked Analysis references:
- `docs/ux-decisions/2026-09-05-analysis-tab-ia.md`
- `docs/ux-decisions/2026-09-05-analysis-body-area-drilldown.md`
- `docs/ux-decisions/2026-09-05-analysis-exercise-progress.md`

---

# ACTIVE TRACK — Group 07 분석 · 운동 기록

## Canonical Figma

- file `W3lZurXCXbThP67rF2xk2b`
- page `07 분석 · 운동 기록` — `233:2078`
- current 07A `07A_분석홈_부위Row딥링크_Exploration` — `887:936`
- current 07B selected-body exploration candidate `07B_등상세_운동별총중량_Exploration` — `887:1028`

Related approved 04D growth surface sharing the current chart geometry:
- page `04 운동 목록 · 상세` — `233:2075`
- screen `04D_Exercise_Detail_Growth` — `1000:1519`
- chart `ExerciseGrowthTrendLineChart_중량_4주` — `1001:630`

Base/reference Group 07 frames remain:
- 07A `836:1112`
- 07B `836:1265`
- 07C `836:1383`
- 07D `836:1490`
- 07E `836:1593`

Temporary Group 07 bottom app bars remain removed during content review.

---

## Locked product basics

Approved Analysis IA remains:
1. 분석 홈
2. 부위별 분석
3. 운동별 성장
4. 운동 기록
5. 운동 기록 상세

### Analysis period

PO approved:
- default `4주`
- options `4주 / 3개월 / 1년`
- previous primary `6개월` option removed

Canonical page-level selector remains the full-width Analysis tab pattern:
- `AnalysisPeriodTabs` — `961:1368`
- `Active=4주` — `961:1347`
- `Active=3개월` — `961:1354`
- `Active=1년` — `961:1361`
- current 07A live instance — `887:941`, `360 × 54`

Do not replace this page-level period selector with the compact chart metric segmented control.

### Body-map score basis

Remains:
- primary completed/persisted set = `1.0`
- secondary completed/persisted set = `0.5`
- incomplete/unpersisted = `0`
- no load/reps/duration/assistance multiplier

### Selected-exercise detailed history

The old separate 07C/full-history duplication direction is no longer preferred.
Exercise detail/history/growth are being consolidated under the Group 04 exercise-detail tab family; do not create a new duplicate detailed-history surface without explicit PO direction.

---

# 07A CURRENT APPROVED STATE

## 1. 운동 추이 — PO APPROVED / FIGMA APPLIED / QA PASS

Canonical decisions:
- `docs/ux-decisions/2026-09-13-analysis-trend-chart-contract.md`
- `docs/ux-decisions/2026-09-13-shared-trend-chart-card-geometry.md`

### Metric control

Approved metrics:
- `총 중량`
- `세트`
- `시간`

Default:
- `총 중량`

Previous `운동 횟수` is removed from this chart.
Previous metric dropdown is removed from the current 07A presentation.

Current shared compact metric control:
- `MetricSegmentedControl` — `1025:1092`
- `Active=총 중량` — `1025:1093`
- `Active=세트` — `1025:1100`
- `Active=시간` — `1025:1107`
- current 07A live instance — `1025:1582`

This control changes only the `운동 추이` metric. It does not change the page-level Analysis period.

### Metric meaning

`총 중량`:
- sum eligible completed/persisted set volume
- per eligible set contribution = `기록 중량 × 완료 반복수`
- weightless recording types do not receive invented/converted load and are excluded from total-weight aggregation

`세트`:
- total completed/persisted set count

`시간`:
- total completed workout-session duration

### Current chart presentation

Approved current direction:
- line chart
- zero-based Y-axis for all three aggregate metrics
- horizontal grid only
- no area fill
- fixed chart region; surrounding 07A content must not move when metric/period changes

Current live 4-week total-weight chart:
- `AnalysisTrendLineChart_총중량_4주` — `1025:1589`

Current total-weight sample Y-axis:
- one `kg` unit label — `1039:1042`
- compact labels example `0 / 5천 / 1만 / 1.5만`
- exact value belongs in tooltip, e.g. `12,460kg`

Sets:
- integer Y-axis ticks

Time:
- compact hour-oriented Y-axis labels
- tooltip/full value uses localized duration such as `4시간 35분`

### Period bucket behavior

`4주`:
- rolling 28 days
- 4 consecutive 7-day buckets / 4 points
- X labels: `3주 전 / 2주 전 / 지난주 / 이번주`
- exact date range shown in tooltip

`3개월`:
- rolling 91 days
- 13 weekly buckets / 13 points
- X labels sparse, max 4

`1년`:
- 12 calendar-month buckets
- X labels sparse, max 4
- current month may be partial; no projection

### Current shared chart geometry

07A uses the same approved chart-card shell geometry as 04D Exercise Growth:
- card `320 × 176`
- chart-specific outer safe area `16px`
- Y-axis label column `28px`
- Y-axis -> plot gap `8px`
- plot `x=52`, `y=40`, `252 × 88`
- X-axis row `x=52`, `y=132`, `252 × 28`
- bottom safe area `16px`
- `kg` unit `x=16`, `y=16`, `28 × 12`, SUIT Medium `10 / 12`, `text/tertiary`

Current 4-week implementation uses synchronized equal Auto Layout buckets:
- `PlotBuckets_Auto` — `1036:7401`
- `XAxisBuckets_Auto` — `1036:7406`
- 252px plot width / 4 equal 63px buckets
- point and label centered in the corresponding bucket
- centers relative to chart: `83.5 / 146.5 / 209.5 / 272.5`
- trend vector remains an overlay connecting those point centers

This removes manual per-label X-coordinate tuning and keeps first/last labels inside the card.

The shared shell does not merge scale semantics:
- 07A remains zero-based aggregate trend
- 04D Growth remains local/adaptive for exercise progression

Focused current 07A screenshot/read-back after shared geometry approval = PASS.

Historical bar-chart assets may still remain in the Figma file as reference, but are no longer the current 07A visual path:
- old `AnalysisTrendChart` set — `967:1215`
- old live instance — `967:1216`

## 2. 운동 부위 분포

Current 07A integrated card shows body map + all 7 groups:
- 가슴
- 등
- 어깨
- 하체
- 이두
- 삼두
- 코어

`팔` is not used as a merged replacement for 이두/삼두.

Current spacing:
- standard card horizontal padding = `spacing/20`
- body-map preview and ranked-list content share the same internal line

Current percentages are review-only placeholders, not product fixtures.

## 3. 최근 기록 변화

Current row pattern:
- 44px exercise thumbnail
- first line exercise name
- second line current representative record + compact delta label
- trailing chevron
- long name = fixed one line + ending ellipsis
- rows live in one shared outer card with content dividers

Current examples are review-only.

Row tap routes into the selected exercise-detail flow rather than requiring a duplicate full-detail Analysis screen.

## 4. 최근 운동

Current shared pattern:
- title left
- performed date before chevron
- no duration in summary row
- one shared outer card + transparent `RecentWorkoutRow` rows + content divider

Shared master:
- `RecentWorkoutRow` — `937:7292`

Same visual pattern remains shared with Home.

## 5. Removed block

- `요즘 운동 흐름` / workout-frequency block remains removed by PO request.

---

# SHARED DESIGN-SYSTEM RULES RELEVANT TO CURRENT SCOPE

### SectionHeader
- component set `942:7323`
- `Trailing=None` — `942:7315`
- `Trailing=Meta` — `942:7317`
- `Trailing=Action` — `942:7320`

### Horizontal spacing
- 360px Fitness page content inset = `spacing/20`
- standard 320px page-level card horizontal padding = `spacing/20`
- `spacing/16` remains valid for compact internals / dense selectors / chart internals
- deliberate full-bleed Analysis period tabs may break the 20px page line

### Trend chart card geometry — PO APPROVED

Canonical contract:
- `docs/ux-decisions/2026-09-13-shared-trend-chart-card-geometry.md`

Shared by current 07A and 04D Growth chart shells:
- card `320 × 176`
- chart-specific outer safe area `16px`; this is intentionally separate from the normal 20px content-card rule
- Y-axis column `28px`
- Y-axis -> plot gap `8px`
- plot `x=52`, `y=40`, `252 × 88`
- X-axis row `x=52`, `y=132`, `252 × 28`
- bottom safe area `16px`
- 4-week equal buckets = `63px × 4`
- optional unit label sits in the Y-axis column at `x=16`, `y=16`, `28 × 12`
- weight-unit typography = SUIT Medium `10 / 12`, `text/tertiary`, right aligned

Current consumers:
- 07A `AnalysisTrendLineChart_총중량_4주` — `1025:1589`
- 04D `ExerciseGrowthTrendLineChart_중량_4주` — `1001:630`

Reuse is geometry-only where semantics differ:
- 07A aggregate Y-axis stays zero-based
- 04D exercise-growth Y-axis stays local/adaptive
- do not force one scale/data contract only to make the visuals reusable

Focused read-back + full-screen screenshot QA on both consumers = PASS.

### Divider
- `Content` -> `border/default`
- `ActionSheet` -> `bg/elevated`

### Analysis exercise identity
- 44px thumbnail
- exercise name

Relevant contributor row master:
- `AnalysisExerciseVolumeRow` — `891:3581`

---

# 07B POLICY CONFLICT — NEXT DECISION

Locked source remains:
- `docs/ux-decisions/2026-09-05-analysis-body-area-drilldown.md`

Locked behavior says 07B keeps the broad body-area list and expands contributing exercises inline.

Current Figma candidate `887:1028` instead explores a selected-body detail page such as `등 분석`, without repeating the broad area list, with `진행한 운동` rows.

This candidate is still not policy-locked and must not silently supersede the prior decision.

Also open:
- current trailing total `kg` sample is not universal for reps/duration/assisted/other recording types
- define a recording-type-safe contributor-row metric if selected-body-detail is approved

Prior mechanical design-system QA remains PASS; do not repeat without a concrete regression risk.

---

# NEXT OPEN ITEM — exact resume point

Continue Product Owner review from current Group 07 artifacts.

07A trend metrics and the shared 04D/07A chart-card geometry are locked enough to stop reopening mechanically unless a new regression or explicit product-policy change appears.

Next:
1. explicitly decide whether current 07B selected-body-detail exploration `887:1028` supersedes the locked inline-expansion policy in `2026-09-05-analysis-body-area-drilldown.md`
2. if selected-body-detail is approved, define a recording-type-safe trailing metric for contributing-exercise rows instead of universal `kg`
3. apply only the resulting 07B changes in Figma and QA that changed scope

**NO CURSOR IMPLEMENTATION HANDOFF.**

---

# CLOSED / PRESERVED TRACKS

Group 06 운동 완료 — CLOSED:
- `docs/ux-decisions/2026-09-12-group06-completion-final-shell.md`
- `docs/ux-decisions/2026-09-12-group06-page-cleanup.md`

Group 05 운동 중 — CLOSED:
- `docs/ux-decisions/2026-09-10-group05-closure-qa.md`

01–04 local component/token migration — CLOSED:
- `docs/ux-decisions/2026-09-10-figma-local-component-migration.md`
- `docs/ux-decisions/2026-09-10-group04-closure-qa.md`

Exercise DB/media — PRESERVED DEFERRED:
- canonical 195 + P0 16 = target 211
- P0 data row/default-media QA locked
- derived 211 runtime/workbook regeneration and final attachment mapping deferred
- `docs/exercise-db/2026-09-05-p0-211-production-promotion-qa-result.md`
- `docs/exercise-db/2026-09-05-p0-16-default-media-source-lock.md`

# Development boundary

Product Owner가 개발 전환을 명시하기 전까지 Product/UX/Figma 단계에서 계속 진행한다.
