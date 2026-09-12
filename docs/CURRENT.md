# CURRENT — Fitness Project

**Updated:** 2026-09-12

## Current mode

`PRODUCT/UX FIGMA · GROUP 07 ANALYSIS / WORKOUT HISTORY REFINED EXPLORATION · PO REVIEW · NO CURSOR IMPLEMENTATION HANDOFF`

## Resume rule

이미 PO 승인 또는 QA PASS된 범위를 다시 처음부터 검토하지 않는다.

재개 순서:

`PROJECT_INSTRUCTIONS → CURRENT → latest active checkpoint → NEXT OPEN ITEM`

## Latest active checkpoint

- `docs/ux-decisions/2026-09-12-group07-analysis-design-system-reference-qa.md`

Exploration origin:
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

## Design-system + Mobbin refinement — focused QA PASS

Latest refinement checkpoint:
- `docs/ux-decisions/2026-09-12-group07-analysis-design-system-reference-qa.md`

Applied to current Figma exploration:
- 07A / 07B / 07C period selector -> existing local `fixed-tab-bar` four-tab pattern
- 07A workout consistency -> `주 평균 3회` metric-first treatment
- 07A recent progress -> concrete change values instead of generic `상승`
- 07A / 07B body-map sample -> existing layered assets with varied opacity to demonstrate period emphasis
- 07C chart -> explicit example metric label + corrected editable trend path
- 07D partial status -> `부분 기록`
- all review frames -> BottomAppBar/content overlap removed
- screen-owned matching spacing / padding / radius values rebound to current local Fitness Variables
- all screen-owned text remains on current local SUIT text styles

Focused QA:
- QA-1 Structure / Auto Layout = PASS
- QA-2 Group 07 screen-owned Design-system / Binding = PASS
- QA-3 Visual / reference / product = PASS as exploration, not final UI approval

Known shared-system debt, not introduced by Group 07:
- BottomAppBar still uses the existing shared imported component source already used by `MVP_공용_UI`; localizing that family is a separate shared-component migration task.
- existing local `SectionHeader` has legacy Inter treatment; Group 07 did not swap to it because doing so would regress current SUIT-based typography and would require impact QA on existing users.

## Current exploration principle

The five current frames are **PO feedback artifacts, not approved final UI**.

They are organized around user questions:
- 요즘 운동을 꾸준히 하고 있나?
- 어디를 많이 / 적게 했나?
- 실제 기록이 좋아지고 있나?
- 지난 운동에서 무엇을 했나?

Do not treat sample values, sample chart choices, body-map opacity levels, or current visual density as locked policy until Product Owner reviews them.

## NEXT OPEN ITEM — exact resume point

**Review the refined `07A_분석홈_Exploration` first and decide what to keep / remove / change.**

Then continue sequentially through 07B → 07C → 07D → 07E.

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
