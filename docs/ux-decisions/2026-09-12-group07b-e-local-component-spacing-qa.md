# Group 07B–07E — Local Component / Spacing Alignment QA

**Date:** 2026-09-12  
**Status:** FIGMA MECHANICAL QA PASS / PO CONTENT REVIEW STILL OPEN  
**Scope:** `07B_부위별분석_Exploration` ~ `07E_운동기록상세_Exploration`

## Purpose

07A에 적용한 것과 동일하게, 기존 01–06 화면에서 사용하던 현재 Fitness Figma 규칙을 07B–07E에도 적용했다.

기준:
- screen → current-file local component → current Fitness local Variable / Style
- 큰 섹션 간격은 `spacing/32`
- 섹션 제목 ↔ 해당 콘텐츠는 `spacing/12`
- 상단 요약/관련 묶음은 필요한 경우 `spacing/24`
- 카드/row 내부 padding은 기존 01–06 패턴과 동일한 `12/16` 계열을 우선 사용
- 현재 SUIT local text styles 유지
- 기존 승인 화면은 수정하지 않음

## Figma changes

Canonical page:
- `07 분석 · 운동 기록` — `233:2078`

### 07B 부위별 분석
- 수동 `SectionHeader` → local `AnalysisSectionHeader / Action=None`
- `OverviewSection` / `BodyMapGroup` / `DistributionSection`으로 실제 Auto Layout 계층 재구성
- screen section rhythm: `32`
- section-internal rhythm: `12`
- body-map overview internal grouping: `24`
- expanded contributing-exercise card padding: `16`

### 07C 운동별 성장
- 3개 수동 section header → local `AnalysisSectionHeader`
- PR 요약 수동 metric 2개 → local `MetricCard`
- 최근 운동 기록 반복 row → 새 local `AnalysisHistoryRow`
- `Overview / RecentChange / Trend / History` section wrapper로 재구성
- screen section rhythm: `32`
- section-internal rhythm: `12`
- exercise identity ↔ period selector: `24`
- component conversion 중 history text width regression을 master에서 수정

New local master:
- `AnalysisHistoryRow` — `858:6949`

### 07D 운동 기록
- 월별 수동 section header → local `AnalysisSectionHeader`
- 반복 workout-history row → 새 local `AnalysisWorkoutHistoryRow`
- partial save는 동일 component의 `status` override로 처리
- row padding `12 / 16`
- trailing status + chevron은 Hug 구조로 수정
- `RecentHistorySection / PreviousMonthSection`으로 재구성
- screen section rhythm: `32`
- section-internal rhythm: `12`

New local master:
- `AnalysisWorkoutHistoryRow` — `858:7037`

### 07E 운동 기록 상세
- 세션 요약 수동 metric 4개 → local `MetricCard`
- 수동 section header → local `AnalysisSectionHeader`
- 수행 운동 카드 반복 구조 → 새 local `WorkoutDetailExerciseCard` component set
  - `Type=WeightReps`
  - `Type=Reps`
- `OverviewSection / ExerciseSection / ExerciseList`로 재구성
- screen section rhythm: `32`
- overview internal rhythm: `24`
- section header ↔ exercise list: `12`
- exercise-card list gap: `16`
- PR highlight internal gap을 completion 계열과 맞춰 `6`

New local component set:
- `WorkoutDetailExerciseCard` — `858:7169`

## Mechanical QA

Actual-tree audit on 07B–07E:
- remote / external component instance = `0`
- unstyled screen text = `0`
- raw non-zero spacing/padding drift = `0`
- raw non-zero radius drift = `0`

New component masters checked:
- `AnalysisHistoryRow`
- `AnalysisWorkoutHistoryRow`
- `WorkoutDetailExerciseCard`

Result:
- local component linkage = PASS
- local Variable binding = PASS
- local text-style linkage = PASS
- Auto Layout grouping = PASS
- screenshot read-back = PASS

Visual regressions fixed during QA:
- 07C history date / summary wrapping after component conversion
- 07D partial-status trailing area width / clipping risk

## 2026-09-13 Product Owner review update — recent record change / exercise history

The following product-review decisions supersede the earlier draft presentation where applicable:

### 07A 최근 기록 변화
- section-level `전체 보기` action is removed.
- each row is intentionally summary-only: **exercise name + change delta + chevron**.
- the previous inline `previous value → current value` detail is removed from the Analysis Home row.
- the full row is the navigation target; chevron is only the affordance.
- row navigation target = `07C 운동별 성장`, opened for the selected exercise.

Figma implementation:
- shared local `AnalysisProgressRow` — `854:6951` simplified to a one-line 48px row.
- existing local SUIT text styles, semantic colors, spacing/radius bindings and `chevron-right` remain reused.
- `RecentProgressSection` headers in the current 07A review variants now use `AnalysisSectionHeader / Action=None`.
- latest 07A exploration screenshot read-back after the change = PASS.

### 07C / 04G exercise history responsibility
- `04G_Exercise_History` remains the canonical detailed history UI for a selected exercise: date-by-date, set-level recorded values.
- 07C should focus on analysis (record change, trend, valid summary/PR context) rather than duplicating the full exercise-history UI.
- if full history is needed from 07C, route to/reuse `04G_Exercise_History` instead of maintaining a second detailed history pattern.

## Boundary

This is a **mechanical design-system consistency PASS**, not Product Owner approval of the final Group 07 information design.

Still open:
- 07A–07E content keep/remove/change decisions
- exact body-map thresholds
- recording-type-specific progress metrics / graph rules
- representative set / PR calculation rules
- empty / insufficient-data states

**NO CURSOR IMPLEMENTATION HANDOFF.**
