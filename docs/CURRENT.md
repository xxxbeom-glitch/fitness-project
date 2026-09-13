# CURRENT — Fitness Project

**Updated:** 2026-09-13

## Current mode

`PRODUCT/UX FIGMA · GROUP 07 ANALYSIS · 07A CONTENT + ADAPTIVE CHART CONTRACT LOCKED · 07B POLICY DECISION NEXT · PO REVIEW · NO CURSOR IMPLEMENTATION HANDOFF`

## Resume rule

`PROJECT_INSTRUCTIONS → CURRENT → latest active checkpoint → NEXT OPEN ITEM`

이미 PO 승인 또는 QA PASS된 범위는 새 변경·충돌·regression 가능성·명시 재검토 요청이 없으면 다시 처음부터 검토하지 않는다.

## Latest active checkpoint

- `docs/ux-decisions/2026-09-13-analysis-trend-chart-contract.md`

Supporting checkpoints:
- `docs/ux-decisions/2026-09-13-analysis-period-selector-simplification.md`
- `docs/ux-decisions/2026-09-13-group07a-refined-analysis-home-handoff.md`
- `docs/ux-decisions/2026-09-13-shared-recent-workout-list.md`
- `docs/ux-decisions/2026-09-13-shared-section-header-consolidation.md`
- `docs/ux-decisions/2026-09-12-group07b-e-local-component-spacing-qa.md`
- `docs/ux-decisions/2026-09-12-group07a-local-component-binding-qa.md`
- `docs/ux-decisions/2026-09-12-group07-analysis-design-system-reference-qa.md`
- `docs/ux-decisions/2026-09-12-group07-analysis-exploration.md`

Locked Analysis references:
- `docs/ux-decisions/2026-09-05-analysis-tab-ia.md`
- `docs/ux-decisions/2026-09-05-analysis-body-area-drilldown.md`
- `docs/ux-decisions/2026-09-05-analysis-exercise-progress.md`

---

# ACTIVE TRACK — Group 07 분석 · 운동 기록

Canonical Figma:
- file `W3lZurXCXbThP67rF2xk2b`
- page `07 분석 · 운동 기록` — `233:2078`

Current active refined 07A:
- `07A_분석홈_부위Row딥링크_Exploration` — `887:936`

Current 07B selected-body exploration candidate:
- `07B_등상세_운동별총중량_Exploration` — `887:1028`

Current 07A trend nodes:
- `ActivityTrendCard` — `922:1519`
- live `AnalysisTrendChart` instance — `967:1216`
- metric dropdown instance — `925:600`

Shared adaptive chart:
- `AnalysisTrendChart` — `967:1215`
- `Period=4주` — `967:1123`
- `Period=3개월` — `967:1140`
- `Period=1년` — `967:1157`

Shared Analysis period selector:
- `AnalysisPeriodTabs` — `961:1368`
- `Active=4주` — `961:1347`
- `Active=3개월` — `961:1354`
- `Active=1년` — `961:1361`
- current refined 07A instance — `887:941`, `360 × 54`, default `4주`

Shared recent-workout row master:
- `RecentWorkoutRow` — `937:7292`
- reused by 02A Home and current 07A Analysis

Base/reference Group 07 frames remain:
- 07A `836:1112`
- 07B `836:1265`
- 07C `836:1383`
- 07D `836:1490`
- 07E `836:1593`

Temporary Group 07 bottom app bars remain removed during content review.

## Locked product basics

Approved IA remains:
1. 분석 홈
2. 부위별 분석
3. 운동별 성장
4. 운동 기록
5. 운동 기록 상세

Analysis period — PO revised 2026-09-13:
- default `4주`
- options `4주 / 3개월 / 1년`
- previous `6개월` primary tab is removed because its MVP role overlaps the medium/long-term roles already covered by `3개월` and `1년`
- it may return later through an expanded/custom period control if usage proves a distinct need

Headline metrics remain:
- 운동 횟수
- 완료 세트
- 운동 시간

Body-map score basis remains:
- primary completed/persisted set = `1.0`
- secondary completed/persisted set = `0.5`
- incomplete/unpersisted = `0`
- no load/reps/duration/assistance multiplier

Selected-exercise detailed history:
- `04G_Exercise_History` remains canonical for date-by-date, set-level history.
- 07C should route to/reuse 04G rather than duplicate full detailed history.

## 07A current refined review state

Full detail:
- `docs/ux-decisions/2026-09-13-group07a-refined-analysis-home-handoff.md`
- period revision: `docs/ux-decisions/2026-09-13-analysis-period-selector-simplification.md`
- adaptive chart contract: `docs/ux-decisions/2026-09-13-analysis-trend-chart-contract.md`

### Period selector
- approved options: `4주 / 3개월 / 1년`; default `4주`.
- current Figma tab rail/underline is 360px full width.
- inner content cards keep normal margins.
- shared `AnalysisPeriodTabs` component set `961:1368` owns the 3 active variants.
- all 7 Analysis-page instances that used the old 4-tab range control were migrated to the new shared selector while preserving their existing widths.
- current refined 07A screenshot/read-back after migration = PASS; no clipping/collision observed.

### Headline trend card — PO APPROVED / ADAPTIVE CONTRACT LOCKED

The three approved metrics are presented through one shared chart card.

Structure:
- left: selected aggregate value only, e.g. `12회`
- right: compact dropdown using existing `FilterSelectButton`, e.g. `운동 횟수 ▾`
- below: fixed-size adaptive bar chart

Dropdown options:
- 운동 횟수
- 완료 세트
- 운동 시간

Current geometry:
- card `320 × 208`
- horizontal card padding `spacing/20`
- chart `280 × 132`
- Y-axis = 4 fixed visual levels including zero

Adaptive bucket contract:
- `4주` = rolling 28 days / 4 consecutive 7-day buckets / 4 X labels
- `3개월` = rolling 91 days / 13 consecutive 7-day buckets / max 4 X labels
- `1년` = 12 calendar-month buckets ending in current month / max 4 X labels / current month may be partial

Adaptive scale contract:
- physical chart/grid positions remain fixed
- Y scale starts at zero
- choose a tight rounded step from the peak bucket value; Y max = `step × 3`
- workout-count/set ticks remain integers
- workout-time axis uses compact hour values; tooltip/aggregate uses localized full duration

Interaction/state contract:
- tap bucket -> anchored tooltip; tap another -> move/update; tap outside -> dismiss
- no drag scrub required for MVP
- real zero and unavailable/pre-account data are different states
- all-zero eligible period keeps the card and shows `이 기간에는 운동 기록이 없어요`
- partial current month is included without projection and is identified as `진행 중` in tooltip

Shared chart component set:
- `AnalysisTrendChart` — `967:1215`
- 4-week variant `967:1123`
- 3-month variant `967:1140`
- 1-year variant `967:1157`
- current 07A live chart instance `967:1216`, `Period=4주`

Figma sample chart values are review-only placeholders, not locked product fixtures.
Focused 07A + 3-period component-set visual QA = PASS.

### 운동 부위 분포
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
- `BodyDistributionCard` horizontal padding = `spacing/20`
- body-map preview and ranked-list content align to the same 20px internal card line

Current sample percentages are review-only placeholders:
- 하체 31%
- 등 28%
- 가슴 21%
- 어깨 12%
- 이두 3%
- 삼두 3%
- 코어 2%

All seven are visible, so the current section has no `전체 보기` action.

### 최근 기록 변화
Current row presentation supersedes the earlier name+delta-only draft note.

Each row shows:
- 44px exercise thumbnail
- exercise name
- current representative record
- delta in parentheses
- chevron

Samples:
- 벤치프레스 `80kg (+2.5kg)`
- 랫풀다운 `62.5kg (+2.5kg)`
- 플랭크 `75초 (+15초)`

Rows are inside one shared outer card with content dividers, not separate cards.

Current spacing:
- `AnalysisProgressRow` horizontal padding = `spacing/20`
- content dividers align to the same 20px internal line

Row tap -> selected exercise in 07C.

### 최근 운동
Current row presentation:
- left = routine/workout name only
- trailing immediately before chevron = performed date only
- workout duration is not displayed in this summary row
- 07A samples: `상체 A` / `9월 12일`, `하체 B` / `9월 10일`

Current presentation matches the `최근 기록 변화` list-card pattern:
- one shared outer `RecentWorkoutCard`
- transparent `RecentWorkoutRow` instances — shared master `937:7292`
- shared `Divider / Role=Content` between rows
- divider aligns to the 20px internal content line
- row horizontal padding = `spacing/20`
- outer card owns the surface and radius; rows do not render separate rounded-card surfaces

The same `RecentWorkoutRow` and list-card visual pattern is reused in `02A_Home_NoRoutine`:
- 02A has 3 rows and 2 dividers
- 07A has 2 rows and 1 divider
- 02A and 07A both use `SectionHeader / Trailing=Action` with `최근 운동 / 전체 기록`

Focused screenshot/read-back on 02A and 07A = PASS.

### Removed block
- `요즘 운동 흐름` / workout-frequency block remains removed from current 07A by PO request.

## Shared design-system changes from this review

### AnalysisTrendChart — PO APPROVED / QA PASS 2026-09-13

Canonical checkpoint:
- `docs/ux-decisions/2026-09-13-analysis-trend-chart-contract.md`

Shared component set:
- `AnalysisTrendChart` — `967:1215`

Variants:
- `Period=4주` — `967:1123`
- `Period=3개월` — `967:1140`
- `Period=1년` — `967:1157`

The previous raw 4-week chart in current 07A was replaced with shared instance `967:1216`.
Focused screenshot QA on current 07A and all three variants = PASS.

### AnalysisPeriodTabs — PO APPROVED / QA PASS 2026-09-13

Canonical checkpoint:
- `docs/ux-decisions/2026-09-13-analysis-period-selector-simplification.md`

Shared component set:
- `AnalysisPeriodTabs` — `961:1368`

Variants:
- `Active=4주` — `961:1347`
- `Active=3개월` — `961:1354`
- `Active=1년` — `961:1361`

Usage:
- primary Analysis range selector only
- equal-width Fill tabs
- default `4주`
- current refined 07A remains 360px full-bleed

Migration:
- old 4-tab Analysis period instances migrated: `7`
- current 07A and older Analysis exploration/reference screens now show one consistent 3-range contract
- screenshot/read-back on current 07A: PASS

### Shared recent-workout list pattern — QA PASS 2026-09-13

Canonical checkpoint:
- `docs/ux-decisions/2026-09-13-shared-recent-workout-list.md`

Shared master:
- `RecentWorkoutRow` — `937:7292`

Current live instances: `5`
- 02A Home: 3
- current 07A Analysis: 2

Shared composition:
- `SectionHeader / Trailing=Action`
- one outer surface/radius card
- transparent 60px rows
- `Divider / Role=Content` between rows
- row horizontal padding = `spacing/20`
- title left, performed date trailing before chevron
- no workout duration in the summary row

Focused screenshot/read-back: PASS.

### Shared SectionHeader consolidation — QA PASS 2026-09-13

Canonical checkpoint:
- `docs/ux-decisions/2026-09-13-shared-section-header-consolidation.md`

The repeated 24px section-header pattern is one shared Figma component set:
- `SectionHeader` — `942:7323`
- `Trailing=None` — `942:7315`
- `Trailing=Meta` — `942:7317`
- `Trailing=Action` — `942:7320`

Usage rule:
- `None` = title only
- `Meta` = informational trailing value/counter
- `Action` = tappable/navigation trailing text

Previous 40px Group 04 component remains separate as `ListSectionLabel` — `638:3359`.

### Fitness horizontal spacing calibration — PO APPROVED 2026-09-13

Canonical design-system spec:
- `docs/15_TONAL_DESIGN_SYSTEM_SPEC.md`

Current rule:
- 360px Fitness page content inset = `spacing/20`
- standard 320px page-level card horizontal padding = `spacing/20`
- equivalent adjacent standard cards should not alternate between 16 and 20 without a component-role reason
- `spacing/16` remains valid for intentionally compact internals, small metric tiles, dense selector rows, chart internals, and similar compact roles
- vertical padding remains component-role specific
- deliberate full-bleed patterns such as the Analysis period tab rail may break the 20px line

### Analysis exercise identity
Lightweight analysis identity pattern:
- 44px thumbnail
- exercise name

Reused in current 07A recent-record rows and 07B contributor rows.

Relevant local row master:
- `AnalysisExerciseVolumeRow` — `891:3581`

### Divider
Shared divider roles:
- `Content` -> `border/default`
- `ActionSheet` -> `bg/elevated`
- Horizontal / Vertical orientations

## 07B policy conflict — NEXT DECISION

Locked source remains:
- `docs/ux-decisions/2026-09-05-analysis-body-area-drilldown.md`

Locked behavior says 07B keeps the broad body-area list and expands contributing exercises inline.

Current Figma candidate `887:1028` instead explores a selected-body detail page such as `등 분석`, without repeating the broad area list, with `진행한 운동` rows.

This Figma candidate is NOT locked and must not silently supersede the approved 07B policy.

Also open:
- current trailing total `kg` sample is not universal for reps/duration/assisted recording types.
- a recording-type-safe contributor-row metric is required if this 07B direction is approved.

## Mechanical design-system QA

Prior Group 07 component/binding/spacing migration remains PASS.

Do not repeat without a concrete new regression risk.

References:
- `docs/ux-decisions/2026-09-12-group07a-local-component-binding-qa.md`
- `docs/ux-decisions/2026-09-12-group07b-e-local-component-spacing-qa.md`

Current Group 07 frames remain PO review artifacts; sample values, chart samples and percentages are not locked product fixtures.

---

# NEXT OPEN ITEM — exact resume point

Continue Product Owner review from current Group 07 artifacts.

07A content composition and adaptive chart contract are now locked enough to stop reopening mechanically unless a new regression or product-policy change appears.

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