# CURRENT — Fitness Project

**Updated:** 2026-09-13

## Current mode

`PRODUCT/UX FIGMA · GROUP 07 ANALYSIS · 07A LOCKED · 07B LOCKED EXCEPT LONG-LIST POLICY · GROUP07 PAGE CLEANUP/RENUMBER DONE · 07C/07D REVIEW NEXT · PO REVIEW · NO CURSOR IMPLEMENTATION HANDOFF`

## Resume rule

`PROJECT_INSTRUCTIONS → CURRENT → latest active checkpoint → NEXT OPEN ITEM`

이미 PO 승인 또는 QA PASS된 범위는 새 변경·충돌·regression 가능성·명시 재검토 요청이 없으면 다시 처음부터 검토하지 않는다.

## Latest active checkpoint

- `docs/ux-decisions/2026-09-13-group07-page-cleanup-renumber.md`

Supporting checkpoints:
- `docs/ux-decisions/2026-09-05-analysis-body-area-drilldown.md`
- `docs/ux-decisions/2026-09-13-analysis-total-weight-compact-unit-format.md`
- `docs/ux-decisions/2026-09-13-shared-trend-chart-card-geometry.md`
- `docs/ux-decisions/2026-09-13-analysis-trend-chart-contract.md`
- `docs/ux-decisions/2026-09-13-04d-growth-relative-week-xaxis.md`
- `docs/ux-decisions/2026-09-13-chart-xaxis-autolayout-buckets-exploration.md`
- `docs/ux-decisions/2026-09-13-analysis-progress-row-two-line-layout.md`
- `docs/ux-decisions/2026-09-13-analysis-period-selector-simplification.md`
- `docs/ux-decisions/2026-09-13-group07a-refined-analysis-home-handoff.md`
- `docs/ux-decisions/2026-09-13-shared-recent-workout-list.md`
- `docs/ux-decisions/2026-09-13-shared-section-header-consolidation.md`
- `docs/ux-decisions/2026-09-12-group07b-e-local-component-spacing-qa.md`

Historical/baseline Analysis reference:
- `docs/ux-decisions/2026-09-05-analysis-tab-ia.md`

The latest cleanup checkpoint and this CURRENT supersede the old five-screen Group 07 numbering in that baseline document.

---

# ACTIVE TRACK — Group 07 분석 · 운동 기록

## Canonical Figma

- file `W3lZurXCXbThP67rF2xk2b`
- page `07 분석 · 운동 기록` — `233:2078`
- `07A_분석홈` — `887:936`
- `07B_부위상세` — `887:1028`
- `07B_부위상세_Empty` — `1057:593`
- pending `07C_운동기록_Exploration` — `836:1490`
- pending `07D_운동기록상세_Exploration` — `836:1593`

`07B_부위상세_Empty` is a state variant of 07B, not a separate IA screen.

Related approved Group 04 exercise-growth surface:
- page `04 운동 목록 · 상세` — `233:2075`
- screen `04D_운동상세_성장` — `1000:1519`
- chart `ExerciseGrowthTrendLineChart_중량_4주` — `1001:630`

### Group 07 page cleanup — QA PASS

Deleted obsolete/reference top-level frames:
- old 07A base — `836:1112`
- old 07B base — `836:1265`
- old separate 07C exercise-growth screen — `836:1383`
- old 07A option A — `876:938`
- old 07A option B — `876:992`
- obsolete flow label — `887:1117`

The former 07D/07E workout-history screens were renumbered after removal of the separate exercise-growth screen:
- former 07D -> current `07C_운동기록_Exploration` — `836:1490`
- former 07E -> current `07D_운동기록상세_Exploration` — `836:1593`

Figma top-level metadata read-back confirms the cleaned set. No approved 07A/07B content was intentionally changed by the cleanup.

---

## Locked product basics

Current Group 07 IA:
1. `07A 분석 홈`
2. `07B 부위별 분석`
3. `07C 운동 기록`
4. `07D 운동 기록 상세`

Exercise-specific history/growth is **not** a separate Group 07 screen anymore. It is handled by the canonical Group 04 exercise-detail tab family (`최근 기록 / 성장`).

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
- current 07A live instance — `1027:593`, `360 × 54`

Do not replace this page-level period selector with the compact chart metric segmented control.

### Body-map score basis

Remains:
- primary completed/persisted set = `1.0`
- secondary completed/persisted set = `0.5`
- incomplete/unpersisted = `0`
- no load/reps/duration/assistance multiplier

### Selected-exercise detailed history

Exercise detail/history/growth is consolidated under the Group 04 exercise-detail tab family. Do not create a duplicate Group 07 exercise-growth screen without explicit PO direction.

---

# 07A CURRENT APPROVED STATE

## 1. 운동 추이 — PO APPROVED / FIGMA APPLIED / QA PASS

Canonical decisions:
- `docs/ux-decisions/2026-09-13-analysis-trend-chart-contract.md`
- `docs/ux-decisions/2026-09-13-shared-trend-chart-card-geometry.md`
- `docs/ux-decisions/2026-09-13-analysis-total-weight-compact-unit-format.md`

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

Current total-weight Y-axis formatter:
- one `kg` unit label — `1039:1042`
- below `1,000` -> raw number
- `1K` to below `1M` -> `K`
- `1M` to below `1B` -> `M`
- `1B+` -> `B` fallback
- at most one decimal when needed; remove trailing `.0`
- current Figma sample `0 / 5K / 10K / 15K`
- exact value belongs in tooltip with thousands separators, e.g. `153,420kg`

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

The shared shell does not merge scale semantics:
- 07A remains zero-based aggregate trend
- 04D Growth remains local/adaptive for exercise progression

The K/M/B formatter is 07A total-weight-specific; current 04D direct weight labels remain unchanged.

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

Row tap routes into the selected Group 04 exercise-detail flow.

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

# 07B CURRENT APPROVED STATE

Canonical decision:
- `docs/ux-decisions/2026-09-05-analysis-body-area-drilldown.md`

### Navigation / hierarchy

PO approved:
- 07A body-area row -> separate 07B body-area detail screen
- canonical 07B screen `07B_부위상세` — `887:1028`
- the prior inline-expansion behavior is superseded
- 07B does not repeat the broad 7-area list; the selected area is already known from 07A
- 07B exercise row -> canonical Group 04 exercise-detail flow

### Visual composition

PO approved / Figma applied:
- `진행한 운동` SectionHeader sits outside, directly above the card
- body map + contributor exercise list remain together inside one unified card
- do not split body map and list into separate cards
- standard card horizontal padding `spacing/20`, vertical padding `spacing/16`
- body map and contributor list share the 280px inner content line

### Contributor metric

The trailing metric on each `진행한 운동` row is the selected-period aggregate of that exercise's meaningful native performance quantity.

- `weight_reps` -> total volume `Σ(중량 × 완료 반복수)`
- `added_weight_reps` -> total added-load volume `Σ(추가 중량 × 완료 반복수)`
- `reps` -> total completed reps `Σ 반복수`
- `duration` -> total completed duration `Σ 수행시간`
- `assisted_weight_reps` -> total completed reps; assistance kg is not converted into ordinary volume
- future types -> use a clear additive native quantity only; do not invent a cross-unit conversion

Example:
- plank `30초 × 12 completed sets = 360초 -> 6분`

The displayed aggregate does not determine list ranking.
Sorting remains body-area contribution score descending, then recency as tie-breaker.

### Empty / no-contributor state

PO approved:
- if the selected period has no contributor records for the selected body area, keep the 07B screen shell, period selector, body map, and `진행한 운동` header
- replace the contributor list area inside the same unified card with `이 기간에는 {부위} 운동 기록이 없어요`
- do not show fake rows or `0kg / 0회 / 0초`
- period switching remains available; when the new period has records, normal rows return
- this is an empty state, not an error

Figma:
- `07B_부위상세_Empty` — `1057:593`
- copy: `이 기간에는 등 운동 기록이 없어요`
- screenshot QA: PASS

### Body-area percentage relationship

The body-area percentage remains independent from the row aggregate:
- primary muscle completed set = `1.0`
- secondary muscle completed set = `0.5`
- distribution percentage = area weighted score / total mapped weighted score in the selected period

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

### Divider
- `Content` -> `border/default`
- `ActionSheet` -> `bg/elevated`

### Analysis exercise identity
- 44px thumbnail
- exercise name

Relevant contributor row master:
- `AnalysisExerciseVolumeRow` — `891:3581`

---

# NEXT OPEN ITEM — exact resume point

Continue Product Owner review from the current 07B detail.

07A is locked enough to stop reopening mechanically unless a new regression or explicit product-policy change appears.
07B separate-detail navigation, recording-type-safe aggregate metrics, unified-card composition, and empty state are locked.

Next, decide one item at a time:
1. whether long `진행한 운동` lists need an MVP row limit / `더 보기`
2. review/finalize `07C_운동기록_Exploration`
3. review/finalize `07D_운동기록상세_Exploration`
4. close Group 07 after final Figma QA

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
