# CURRENT — Fitness Project

**Updated:** 2026-09-12

## Current mode

`PRODUCT/UX FIGMA · GROUP 07 ANALYSIS / WORKOUT HISTORY EXPLORATION · 07A–07E LOCAL COMPONENT / SPACING PASS · PO REVIEW · NO CURSOR IMPLEMENTATION HANDOFF`

## Resume rule

이미 PO 승인 또는 QA PASS된 범위를 다시 처음부터 검토하지 않는다.

재개 순서:

`PROJECT_INSTRUCTIONS → CURRENT → latest active checkpoint → NEXT OPEN ITEM`

## Latest active checkpoint

- `docs/ux-decisions/2026-09-12-group07b-e-local-component-spacing-qa.md`

Supporting Group 07 checkpoints:
- `docs/ux-decisions/2026-09-12-group07a-local-component-binding-qa.md`
- `docs/ux-decisions/2026-09-12-group07-analysis-design-system-reference-qa.md`
- `docs/ux-decisions/2026-09-12-group07-analysis-exploration.md`

Direct locked Analysis references:
- `docs/ux-decisions/2026-09-05-analysis-tab-ia.md`
- `docs/ux-decisions/2026-09-05-analysis-body-area-drilldown.md`
- `docs/ux-decisions/2026-09-05-analysis-exercise-progress.md`

Supporting design references:
- `docs/09_DESIGN_SYSTEM.md`
- `docs/15_TONAL_DESIGN_SYSTEM_SPEC.md`
- `docs/17_FIGMA_AGENT_EXECUTION_QA.md`

---

# ACTIVE TRACK — Group 07 분석 · 운동 기록

Canonical Figma file:
- `W3lZurXCXbThP67rF2xk2b`

Page:
- `07 분석 · 운동 기록` — `233:2078`

Current review-draft frames:
- `07A_분석홈_Exploration` — `836:1112`
- `07B_부위별분석_Exploration` — `836:1265`
- `07C_운동별성장_Exploration` — `836:1383`
- `07D_운동기록_Exploration` — `836:1490`
- `07E_운동기록상세_Exploration` — `836:1593`

The previous Group 07 draft frames were removed from Figma by Product Owner request before rebuilding this exploration.

The temporary bottom app bars were also removed from the current 07A–07E review frames by Product Owner request; Group 07 review currently focuses on page content itself.

## Locked IA / product basics

Approved hierarchy remains:
1. 분석 홈
2. 부위별 분석
3. 운동별 성장
4. 운동 기록
5. 운동 기록 상세

Analysis-home period:
- default = 최근 4주
- options = 4주 / 3개월 / 6개월 / 1년

Analysis-home fixed headline metrics:
- 운동 횟수
- 완료 세트
- 운동 시간

Body-map data basis:
- final completed/persisted primary-muscle set = `1.0`
- final completed/persisted secondary-muscle set = `0.5`
- incomplete/unpersisted set = `0`
- no kg/reps/duration/assistance multiplier

07B locked drilldown direction:
- body-area tap expands inline
- show contributing exercises from the selected period
- aggregate by canonical exercise identity
- show session count + completed-set count
- do not expose internal weighted score as literal set count

07C locked first-pass hierarchy:
- exercise identity
- period selector
- recent record-change summary
- record-trend visualization
- recent records
- PR context where valid

Still OPEN:
- exact recording-type-specific progress metric
- exact graph metric / chart styling
- exact representative-set rule
- exact PR formula beyond already approved completion-screen representative PR policy
- final body-map visual treatment / thresholds
- empty / insufficient-data states

## 07A–07E current local component / spacing standard — PASS

Checkpoints:
- `docs/ux-decisions/2026-09-12-group07a-local-component-binding-qa.md`
- `docs/ux-decisions/2026-09-12-group07b-e-local-component-spacing-qa.md`

Current Group 07 dependency rule now matches the current-file structure used by finalized prior Figma work:

`screen → current Fitness local component → current Fitness local Variable / Style`

Existing local components reused across Group 07 include:
- `Nav Header`
- `fixed-tab-bar`
- `WorkoutRow`
- `chevron-right`
- `MetricCard`
- `AnalysisSectionHeader`
- `AnalysisProgressRow`

Group 07 local masters added during the current migration:
- `MetricCard` — `854:1167`
- `AnalysisSectionHeader` — `854:1190`
  - `Action=None` — `854:1185`
  - `Action=Trailing` — `854:1189`
- `AnalysisProgressRow` — `854:6951`
- `AnalysisHistoryRow` — `858:6949`
- `AnalysisWorkoutHistoryRow` — `858:7037`
- `WorkoutDetailExerciseCard` — `858:7169`
  - `Type=WeightReps`
  - `Type=Reps`

Current spacing rhythm aligned to prior 01–06 screens:
- major screen-section separation = `spacing/32`
- section heading to owned content = `spacing/12`
- overview/sub-group separation where needed = `spacing/24`
- repeated card/row internal padding generally follows the existing `12 / 16` family
- current SUIT local text styles remain the typography basis

07B changes:
- section header uses `AnalysisSectionHeader`
- period/body/helper grouped into real Auto Layout overview hierarchy
- distribution section grouped with `32 / 12` rhythm
- expanded contributor card padding normalized to `16`

07C changes:
- all section headers use `AnalysisSectionHeader`
- PR metric cards use `MetricCard`
- recent exercise-history rows use `AnalysisHistoryRow`
- overview/change/trend/history sections use real Auto Layout grouping
- component-conversion text wrapping regression fixed at master level

07D changes:
- month section headers use `AnalysisSectionHeader`
- all workout-history rows use `AnalysisWorkoutHistoryRow`
- `부분 기록` is a status override in the same component
- trailing status/chevron uses Hug sizing
- month sections use `32 / 12` rhythm

07E changes:
- 4 session-summary metrics use `MetricCard`
- section header uses `AnalysisSectionHeader`
- performed-exercise cards use `WorkoutDetailExerciseCard`
- exercise-card variants currently represented: `WeightReps`, `Reps`
- overview/exercise sections use `32 / 24 / 12 / 16` hierarchy as appropriate

Actual-tree audit after the migration:
- remote / external component instance = `0`
- unstyled screen text = `0`
- raw non-zero spacing/padding drift = `0`
- raw non-zero radius drift = `0`
- new Group 07 component masters also pass the same binding check
- screenshots for 07B / 07C / 07D / 07E read back without current layout clipping/wrapping regression

This is a **mechanical design-system consistency PASS**, not final Product Owner approval of Group 07 content or visual density.

## Design-system + Mobbin refinement — focused QA PASS

Reference checkpoint:
- `docs/ux-decisions/2026-09-12-group07-analysis-design-system-reference-qa.md`

Current exploration keeps the previously reviewed direction:
- summary-first analysis home rather than a dense dashboard
- flat period tabs
- metric conclusion before chart detail
- body-map period emphasis
- explicit chart metric labeling
- detailed workout history as drilldown

Known shared-system note:
- existing older generic `SectionHeader` family has legacy Inter treatment and existing 04 consumers.
- Group 07 uses the current SUIT-based `AnalysisSectionHeader` family instead of mutating the older shared family and risking regression to approved screens.

## Current exploration principle

The five current frames are **PO feedback artifacts, not approved final UI**.

They are organized around user questions:
- 요즘 운동을 꾸준히 하고 있나?
- 어디를 많이 / 적게 했나?
- 실제 기록이 좋아지고 있나?
- 지난 운동에서 무엇을 했나?

Do not treat sample values, sample chart choices, body-map opacity levels, or current visual density as locked policy until Product Owner reviews them.

## NEXT OPEN ITEM — exact resume point

**Continue Product Owner review of `07A_분석홈_Exploration` content and behavior.**

The same current component/binding/spacing standard is already applied mechanically to 07B → 07C → 07D → 07E, so future review can focus on keep/remove/change decisions rather than repeating migration QA.

Do not start Cursor/development handoff unless Product Owner explicitly switches to development.

---

# CLOSED TRACK — Group 06 운동 완료

Group 06 is CLOSED after Product Owner review and final Figma cleanup.

Canonical references:
- `docs/ux-decisions/2026-09-12-group06-completion-final-shell.md`
- `docs/ux-decisions/2026-09-12-group06-page-cleanup.md`

Locked outcomes include:
- common completion shell
- conditional PR display and representative selection
- `총 볼륨 —` non-applicable behavior
- partial-save handling delegated to Group 05 end-workout confirmation
- recommended-routine save / save-which-routine dialogs
- final Group 06 Figma cleanup

Do not reopen without a concrete conflict, regression, new evidence, or Product Owner request.

---

# CLOSED TRACK — Group 05 운동 중

Closure record:
- `docs/ux-decisions/2026-09-10-group05-closure-qa.md`

Existing approved Group 05 decisions remain locked.

---

# CLOSED TRACK — 01–04 local component / token migration

Canonical pages:
- `01 로그인 · 첫 진입` — `233:2072`
- `02 홈` — `233:2073`
- `03 루틴` — `233:2074`
- `04 운동 목록 · 상세` — `233:2075`
- shared UI — `105:3113`
- local component library — `635:788`

Checkpoint:
- `docs/ux-decisions/2026-09-10-figma-local-component-migration.md`

Group 04 closure:
- `docs/ux-decisions/2026-09-10-group04-closure-qa.md`

---

# PRESERVED DEFERRED DATA TRACK — Exercise DB / media

- existing canonical exercises = **195**
- P0 additions = **16**
- target derived Production artifact = **211**
- P0 canonical/data row QA = PASS / LOCKED
- P0 default media source lock = PASS
- derived 211-row workbook/runtime DB = not yet regenerated
- exact Production attachment allowlists / canonical IDs / media mapping = deferred

References:
- `docs/exercise-db/2026-09-05-p0-211-production-promotion-qa-result.md`
- `docs/exercise-db/2026-09-05-p0-16-default-media-source-lock.md`
- `docs/ux-decisions/2026-09-05-exercise-recording-types.md`

---

# Development boundary

**NO CURSOR IMPLEMENTATION HANDOFF.**

Product Owner가 개발 전환을 명시하기 전까지 Product/UX/Figma 단계에서 계속 진행한다.
