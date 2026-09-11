# CURRENT — Fitness Project

**Updated:** 2026-09-11

## Current mode

`PRODUCT/UX FIGMA · GROUP 06 WORKOUT COMPLETION ACTIVE · COMPLETION LAYOUT EXPLORATION SAVED · NEXT: SIMPLIFIED 06 COMPLETION SHELL REVIEW · NO CURSOR IMPLEMENTATION HANDOFF`

## Resume rule

다음 대화에서는 이미 PO 승인 또는 QA PASS된 범위를 다시 처음부터 검토하지 않는다.

재개 순서:

`PROJECT_INSTRUCTIONS → CURRENT → latest active checkpoint → NEXT OPEN ITEM`

## Latest active checkpoint

- `docs/ux-decisions/2026-09-11-group06-completion-layout-exploration.md`

Supporting checkpoints:

- `docs/ux-decisions/2026-09-10-group06-figma-foundation.md`
- `docs/ux-decisions/2026-09-10-group05-closure-qa.md`
- `docs/ux-decisions/2026-09-10-figma-local-component-migration.md`
- `docs/09_DESIGN_SYSTEM.md`
- `docs/15_TONAL_DESIGN_SYSTEM_SPEC.md`
- `docs/17_FIGMA_AGENT_EXECUTION_QA.md`

---

# ACTIVE TRACK — Group 06 운동 완료

Canonical Figma:

- file: `W3lZurXCXbThP67rF2xk2b`
- page: `06 운동 완료` — `233:2077`
- current canonical main: `06A_Completion_Carousel` — `163:2031`
- carousel content reference: `REORG_06_CAROUSEL_CONTENT` — `163:2073`
- conditional-state reference: `REORG_06_CONDITIONAL_STATES` — `163:2142`
- shared UI: `MVP_공용_UI` — `105:3113`
- local component library: `LOCAL_COMPONENT_LIBRARY` — `635:788`
- completion status component: `CompletionStatusIcon` — `742:901`

Older hidden 06A–06J frames remain reference/archive material and are not canonical.

## Group 06 local design-system foundation — QA PASS

Current 06 foundation has been migrated to the local Fitness design system before Product/UX refinement.

- completion success icon → local `CompletionStatusIcon` (`742:901`), reusing local `icon/check`.
- share CTA → local `CTA Button`.
- bottom dual actions → local `DualCTA` / local CTA buttons.
- conditional dialogs → local `DialogCard / DialogButtons`.
- current 06 Variables/Styles are local; missing/remote dependency = 0 on the canonical main, carousel reference, and conditional-state reference.
- summary-card spacing/radius and related list/body gaps were rebound to existing local Fitness Variables.
- no parallel token/component system was created.
- main 360×780 screen, carousel reference, and conditional-dialog visual read-back = PASS.

Canonical foundation record:

- `docs/ux-decisions/2026-09-10-group06-figma-foundation.md`

## Current layout exploration — NOT PRODUCT-LOCKED

The original carousel remains canonical only as the existing starting artifact. New completion concepts are comparison drafts and must not replace it until Product Owner approval.

### Fuller dashboard draft
- `06A_Completion_Dashboard_Full_Draft` — `775:593`
- includes today summary, achievement/next hint, performed exercise list, and bottom actions
- visual/layout cleanup completed with the existing Fitness design system
- preserved as the fuller comparison case

### Chart-oriented drafts
- exercise recent-5 trend — `06A_Chart_A_ExerciseTrend_Draft` `783:653`
- same-routine total-volume trend — `06A_Chart_B_RoutineVolume_Draft` `783:729`
- previous-best vs today comparison — `06A_Chart_C_PRCompare_Draft` `783:801`

All three chart drafts passed focused screenshot/binding QA with missing/remote component, Variable and Style = 0. No chart direction is approved; richer charts may fit `기록 상세` or deferred `분석` better than immediate completion.

### Simplified completion drafts — current comparison set
- A Balanced — `06A_Simple_A_Balanced_Draft` `788:671`
- B Minimal — `06A_Simple_B_Minimal_Draft` `788:726`
- C Result Board — `06A_Simple_C_ResultBoard_Draft` `788:781`

All three are 360×780 and reuse local `CompletionStatusIcon` and `DualCTA`. Focused screenshot/binding QA PASS; missing/remote component, Variable and Style = 0.

## Current Product/UX question

Product Owner raised that a separate `기록 상세 보기` path already exists. Current working direction is therefore to test whether the completion page should stay concise rather than duplicate detailed records.

Working direction, **not yet locked**:
- completion/save confirmation
- concise today summary
- at most one meaningful highlight such as best record
- `기록 상세 보기 / 홈으로 돌아가기`

Candidates to move out of the completion page unless later justified:
- full performed-exercise list
- multiple charts
- multiple analysis cards
- dense comparison/next-step copy

Reference research and exact Figma draft inventory are recorded in:

- `docs/ux-decisions/2026-09-11-group06-completion-layout-exploration.md`

## NEXT OPEN ITEM — exact resume point

**Start from the three simplified completion drafts, not from the old carousel review from scratch.**

Compare first:
- A Balanced — `788:671`
- B Minimal — `788:726`
- C Result Board — `788:781`

Decide:
1. whether completion remains summary-only because `기록 상세 보기` exists
2. which A/B/C direction, or a small hybrid, becomes the common completion shell
3. whether the shell needs one stronger visual signature beyond normal stacked cards — e.g. dominant result number, distinct completion hero, or one compact highlight

Do not promote any draft to canonical until Product Owner approves the direction.

After the common completion shell is approved, review Group 06 conditional states only as needed.

Do not reopen Group 05 without a concrete conflict or Product Owner request.
Do not start Cursor/development handoff unless Product Owner explicitly switches to development.

---

# CLOSED TRACK — Group 05 운동 중

Group 05 is CLOSED by Product Owner decision.

Closure record:

- `docs/ux-decisions/2026-09-10-group05-closure-qa.md`

Existing approved/QA-passed Group 05 decisions remain locked. This includes active logging, rest timer, action menu, reorder, replacement, other-routine switching, session recovery, add/replace initialization, Korean workout-table labels, and MVP sequential regular-set numbering.

Do not reopen solely because Group 06 work begins.

---

# CLOSED TRACK — 01–04 local component / token migration

Canonical Figma pages:

- `01 로그인 · 첫 진입` — `233:2072`
- `02 홈` — `233:2073`
- `03 루틴` — `233:2074`
- `04 운동 목록 · 상세` — `233:2075`
- shared UI — `MVP_공용_UI` — `105:3113`
- local component library — `635:788`

Rules/results:

- approved existing local components retained.
- external families localized only where no local equivalent existed.
- no detach-based screen duplication.
- nested external dependencies replaced.
- Variable/Style bindings rebound to local foundations.
- post-migration representative visual/artifact QA PASS.

Checkpoint:

- `docs/ux-decisions/2026-09-10-figma-local-component-migration.md`

---

# CLOSED TRACK — Group 04 운동 목록 · 상세

Group 04 screen-level Product/UX remains CLOSED.

Closure record:

- `docs/ux-decisions/2026-09-10-group04-closure-qa.md`

Do not reopen solely because component ownership changed.

---

# PRESERVED DEFERRED TRACK — Analysis

Approved hierarchy remains locked:

1. 분석 홈
2. 부위별 분석
3. 운동별 성장
4. 운동 기록
5. 운동 기록 상세

Locked basics:

- default period = 최근 4주
- choices = 4주 / 3개월 / 6개월 / 1년
- headline metrics = 운동 횟수 / 완료 세트 / 운동 시간
- body-map contribution: primary completed set `1.0`, secondary `0.5`, incomplete `0`
- no kg/reps/duration/assistance multiplier for body-map contribution.

Resume references:

- `docs/ux-decisions/2026-09-05-analysis-tab-ia.md`
- `docs/ux-decisions/2026-09-05-analysis-body-area-drilldown.md`
- `docs/ux-decisions/2026-09-05-analysis-exercise-progress.md`

Preserved next Analysis item:

`canonical muscle/body-part taxonomy → practical front/back body-map regions mapping`

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
