# CURRENT — Fitness Project

**Updated:** 2026-09-12

## Current mode

`PRODUCT/UX FIGMA · GROUP 06 COMPLETION / PR / TOTAL VOLUME / PARTIAL-SAVE HANDLING LOCKED · NEXT: RECOMMENDED-ROUTINE CONDITIONALS REVIEW · NO CURSOR IMPLEMENTATION HANDOFF`

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
- total-volume N/A reference: `06A_Volume_NA` — `823:720`
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
- 신기록이 1개든 여러 개든 완료 화면에는 대표 신기록 1개만 표시
- 신기록 개수와 `외 N개` 표기는 사용하지 않음
- 전체 PR은 `기록 상세 보기`에서 확인
- 대표 운동 = 현재 세션 운동 표시 순서상 유효 PR이 발생한 첫 운동
- 서로 다른 recording type의 향상 폭을 임의 점수화하지 않음
- 같은 운동 내 대표 PR은 recording type별 기준을 사용:
  - `weight_reps`: 최고 중량 PR 우선 → 없으면 동일 중량 반복수 PR
  - `reps`: 최대 반복수, 표기는 `푸시업 15회`처럼 중량 없이 표시
  - `duration`: 최대 수행 시간
  - `assisted_weight_reps`: 최소 보조중량 PR 우선 → 없으면 동일 보조중량 반복수 PR
- e1RM/추정 1RM은 MVP 대표 PR 선택에 사용하지 않음
- 완료 처리된 세트만 PR 판정

Figma cases:
- no PR `06A_PR_0_None` — `819:702`
- single PR `06A_PR_1_Single` — `819:733`
- multi PR, representative only `06A_PR_Multi_RepresentativeOnly` — `819:762`

All three preserve the locked 360×780 common shell and local component/token bindings. 3-case screenshot read-back = PASS.

## Total-volume behavior — PO APPROVED / FIGMA PASS

- `weight_reps` 완료 세트만 `중량 × 반복수`로 총 볼륨에 합산
- `reps` 제외
- `duration` 제외
- `assisted_weight_reps` 제외
- 여러 recording type이 섞이면 계산 가능한 `weight_reps`만 합산
- 계산 가능한 완료 세트가 하나도 없으면 `총 볼륨` 카드는 유지하고 값은 `—`
- `0kg`로 표시하지 않음
- reps/duration/assistance를 kg로 환산하지 않음
- 다른 임시 지표로 카드 자체를 교체하지 않음; 2×2 핵심 지표 구조 유지

Figma case:
- `06A_Volume_NA` — `823:720`
- screenshot/read-back = PASS

## Partial-save handling — PO APPROVED / FIGMA PASS

- 미완료 운동/세트가 있는 상태에서 종료할 때 `완료한 세트까지만 기록`된다는 확인은 Group 05의 운동 종료 다이얼로그에서 처리
- 사용자가 `종료하고 저장`을 확정하면 Group 06은 실제 저장된 결과만 일반 완료 화면에 표시
- Group 06의 별도 `부분 기록 저장 완료` 카드/summary는 중복이므로 사용하지 않음
- 부분 저장 세션의 핵심 지표는 실제 persist된 완료 기록 기준으로 계산
- Group 05 종료 정책은 재오픈하지 않음

Figma cleanup:
- `REORG_06_CONDITIONAL_STATES` — `163:2142`
- 이전 `부분 기록 저장 완료` label/card 제거
- section width 정리 및 description을 추천 루틴 저장 판단 기준으로 수정
- 남은 상태는 `추천 루틴 저장 여부`, `저장할 구성 선택` 두 개
- focused screenshot read-back = PASS

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

**Review the remaining recommended-routine completion conditionals against the locked common shell.**

Start from:

- `REORG_06_CONDITIONAL_STATES` — `163:2142`

Remaining states:
- 추천 루틴 저장 여부
- 저장할 구성 선택

Do not re-add a Group 06 partial-save completion card; partial-save confirmation belongs to Group 05.
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
