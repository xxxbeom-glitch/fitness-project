# CURRENT — Fitness Project

**Updated:** 2026-09-13

## Current mode

`PRODUCT/UX FIGMA · GROUP 07 ANALYSIS · 07A REFINED REVIEW · CHART SCALE/BUCKET RULES OPEN · PO REVIEW · NO CURSOR IMPLEMENTATION HANDOFF`

## Resume rule

`PROJECT_INSTRUCTIONS → CURRENT → latest active checkpoint → NEXT OPEN ITEM`

이미 PO 승인 또는 QA PASS된 범위는 새 변경·충돌·regression 가능성·명시 재검토 요청이 없으면 다시 처음부터 검토하지 않는다.

## Latest active checkpoint

- `docs/ux-decisions/2026-09-13-group07a-refined-analysis-home-handoff.md`

Supporting checkpoints:
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
- `MetricChart_4Weeks` — `922:1523`
- metric dropdown instance — `925:600`

Current 07A recent-workout row master:
- `AnalysisRecentWorkoutRow` — `937:7292`

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

Analysis period:
- default `4주`
- options `4주 / 3개월 / 6개월 / 1년`

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

### Period selector
- current Figma tab rail/underline is 360px full width.
- inner content cards keep normal margins.

### Headline trend card
The three approved metrics are presented through one shared chart card in the current review draft.

Structure:
- left: selected aggregate value only, e.g. `12회`
- right: compact dropdown using existing `FilterSelectButton`, e.g. `운동 횟수 ▾`
- below: fixed-size chart

Dropdown options:
- 운동 횟수
- 완료 세트
- 운동 시간

Current geometry:
- card `320 × 208`
- horizontal card padding `spacing/20`
- chart `280 × 132`

Current sample:
- aggregate `12회`
- buckets `2 / 3 / 4 / 3`
- Y-axis `0 / 2 / 4 / 6`

Current review direction:
- Y-axis uses 4 fixed visual levels.
- chart frame, Y-label count/positions, grid positions and X-axis area must remain stable across metric/period changes.
- metric/period changes may change values, units, bucket data and bar heights, not the physical chart region.

Still OPEN:
- Y-axis max and rounding rules
- headroom rule
- bucket rules for 4주/3개월/6개월/1년
- X-axis label density
- bar width/gap adaptation
- tooltip/tap behavior
- zero/insufficient-data behavior

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
- samples: `상체 A` / `9월 12일`, `하체 B` / `9월 10일`

Current presentation now matches the `최근 기록 변화` list-card pattern:
- one shared `RecentWorkoutCard` — `887:1000`
- two transparent `AnalysisRecentWorkoutRow` instances — `937:7298`, `937:7304`
- one shared `Divider / Role=Content` between rows
- divider aligns to the 20px internal content line
- row horizontal padding = `spacing/20`
- outer card owns the surface and radius; rows do not render separate rounded-card surfaces

The local row is derived from the existing shared `WorkoutRow`; 02 Home usages remain unchanged.
Focused screenshot/read-back = PASS.

### Removed block
- `요즘 운동 흐름` / workout-frequency block remains removed from current 07A by PO request.

## Shared design-system changes from this review

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

Applied to current 07A:
- `ActivityTrendCard`
- `BodyDistributionCard`
- `AnalysisProgressRow`
- recent-progress divider inset
- `AnalysisRecentWorkoutRow`

Focused screenshot/read-back after the change: PASS; no clipping/collision observed.

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

Applied to relevant existing 02/03 Action Sheet and 04/07 content-list cases. Focused visual QA showed no intended regression.

## 07B policy conflict — DECISION NEEDED BEFORE LOCK

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

Continue Product Owner review from `07A_분석홈_부위Row딥링크_Exploration` `887:936`.

First define the adaptive chart contract while keeping the current fixed visual frame:
1. Y-axis max / rounding per metric
2. period bucket rules for `4주 / 3개월 / 6개월 / 1년`
3. X-axis label density
4. bar width / gap behavior
5. tap / tooltip behavior
6. zero / insufficient-data behavior

Then apply/QA only those chart changes in the current 07A frame.

After the chart rule is stable, explicitly decide whether current 07B selected-body-detail exploration `887:1028` supersedes the locked inline-expansion policy before updating the canonical 07B Decision.

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
