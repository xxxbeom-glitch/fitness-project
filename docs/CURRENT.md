# CURRENT — Fitness Project

**Updated:** 2026-09-12

## Current mode

`PRODUCT/UX FIGMA · GROUP 06 COMPLETION + PR CONDITIONAL STATES LOCKED · NEXT: TOTAL VOLUME NON-APPLICABLE POLICY · NO CURSOR IMPLEMENTATION HANDOFF`

## Resume rule

다음 대화에서는 이미 PO 승인 또는 QA PASS된 범위를 다시 처음부터 검토하지 않는다.

재개 순서:

`PROJECT_INSTRUCTIONS → CURRENT → latest active checkpoint → NEXT OPEN ITEM`

## Latest active checkpoint

- `docs/ux-decisions/2026-09-12-group06-completion-final-shell.md`

Supporting checkpoints:

- `docs/ux-decisions/2026-09-11-group06-completion-layout-exploration.md`
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
- canonical completion main: `최종화면` — `793:15748`
- PR conditional reference: `REORG_06_PR_CASES` — `819:696`
- conditional-state reference: `REORG_06_CONDITIONAL_STATES` — `163:2142`
- shared UI: `MVP_공용_UI` — `105:3113`
- local component library: `LOCAL_COMPONENT_LIBRARY` — `635:788`
- completion status component: `CompletionStatusIcon` — `742:901`
- bottom actions: local `DualCTA` — `638:3344`

Previous `06A_Completion_Carousel` (`163:2031`), fuller dashboard, chart variants and A/B/C simplified drafts are reference/archive only and are no longer canonical shell candidates.

## Common completion shell — PO APPROVED / QA PASS

Product Owner approved the directly drawn `최종화면` as the common completion shell.

Locked content hierarchy:

1. completion status + `운동 완료`
2. yearly workout count subtitle
3. four concise today metrics
   - 총 볼륨
   - 총 운동 시간
   - 총 운동 수
   - 총 진행 세트
4. conditional `오늘의 신기록` highlight
5. `기록 상세 보기 / 홈으로 돌아가기`

Do not add the following back to the common completion shell without a new Product Owner decision:

- full performed-exercise list
- carousel
- multiple charts
- multiple analysis cards
- dense comparison/next-step copy

Detailed records and richer analysis belong behind `기록 상세 보기` or the separate Analysis track.

## PR conditional behavior — PO APPROVED / FIGMA PASS

- 비교 가능한 신기록이 없으면 `오늘의 신기록` 카드를 전체 숨김
- `신기록 없음` 또는 실패성/빈 상태 문구를 표시하지 않음
- 해당 운동의 첫 수행은 비교 기준이 없으므로 PR로 계산하지 않음
- 신기록 1개 → `오늘의 신기록` + 기록 1개
- 신기록 2개 이상 → 카드 1개 유지, `오늘의 신기록 N개` + 대표 기록 1개 + `· 외 N-1개`
- 전체 PR은 `기록 상세 보기`에서 확인
- MVP 대표 기록 = 운동 수행 순서에서 가장 먼저 발생한 PR
- 서로 다른 recording type의 향상 폭을 임의 점수화하지 않음

Figma cases:
- no PR `06A_PR_0_None` — `819:702`
- single PR `06A_PR_1_Single` — `819:733`
- multi PR `06A_PR_Multi` — `819:762`

All three preserve the locked 360×780 common shell and local component/token bindings. 3-case screenshot read-back = PASS.

## Final-shell design-system refinement — QA PASS

`최종화면` was refined in place with the existing local Fitness system.

- root converted to vertical Auto Layout; frame remains 360×780
- safe/status area 62 + content 620 + footer 98
- content inset/top/gaps rebound to existing `spacing/20`, `spacing/24`, `spacing/32`, `spacing/12`, `spacing/6`, `spacing/16`
- metric cards continue existing local surface/radius/color bindings
- metric values → local `display/01` 20/28
- metric labels → local `label/02` + `text/secondary`
- personal-record value → local `heading/02` 14/20
- local `CompletionStatusIcon` and `DualCTA` preserved as instances; remote = false
- no new component/token/style family created
- obsolete hidden scratch card/redundant wrapper removed from the final frame
- notation normalized to `13세트`, `벤치프레스 10kg × 12회`
- focused structure/binding read-back + screenshot = PASS

Canonical record:

- `docs/ux-decisions/2026-09-12-group06-completion-final-shell.md`

## NEXT OPEN ITEM — exact resume point

**Decide `총 볼륨` behavior for sessions with no volume-applicable completed work.**

Need to decide whether the metric card:
- stays with a non-value state such as `—`, or
- is conditionally omitted/replaced without inventing a cross-recording-type aggregate.

This must respect the approved recording-type semantics; reps/duration/assistance must not be falsely converted into kg volume.

After that, review broader Group 06 conditional completion states only as needed against the locked common shell:
- `REORG_06_CONDITIONAL_STATES` — `163:2142`

Do not reopen the old carousel or completion-layout exploration without a concrete conflict or Product Owner request.
Do not reopen Group 05 without a concrete conflict or Product Owner request.
Do not start Cursor/development handoff unless Product Owner explicitly switches to development.

---

# CLOSED TRACK — Group 05 운동 중

Group 05 is CLOSED by Product Owner decision.

Closure record:

- `docs/ux-decisions/2026-09-10-group05-closure-qa.md`

Existing approved/QA-passed Group 05 decisions remain locked. This includes active logging, rest timer, action menu, reorder, replacement, other-routine switching, session recovery, add/replace initialization, Korean workout-table labels, and MVP sequential regular-set numbering.

Do not reopen solely because Group 06 work continues.

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

- approved existing local components retained
- external families localized only where no local equivalent existed
- no detach-based screen duplication
- nested external dependencies replaced
- Variable/Style bindings rebound to local foundations
- post-migration representative visual/artifact QA PASS

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
- no kg/reps/duration/assistance multiplier for body-map contribution

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
