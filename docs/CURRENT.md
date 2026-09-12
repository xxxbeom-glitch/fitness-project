# CURRENT — Fitness Project

**Updated:** 2026-09-12

## Current mode

`PRODUCT/UX FIGMA · GROUP 06 FINAL PAGE CLEANUP PASS · NEXT: RECOMMENDED-ROUTINE CONDITIONAL FLOW REVIEW · NO CURSOR IMPLEMENTATION HANDOFF`

## Resume rule

이미 PO 승인 또는 QA PASS된 범위를 다시 처음부터 검토하지 않는다.

재개 순서:

`PROJECT_INSTRUCTIONS → CURRENT → latest active checkpoint → NEXT OPEN ITEM`

## Latest active checkpoint

- `docs/ux-decisions/2026-09-12-group06-page-cleanup.md`

Direct policy checkpoint:
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
- default completion: `06A_Completion_Default` — `793:15748`
- no-PR case: `06B_Completion_NoPR` — `819:702`
- no-PR wrapper: `FINAL_06_PR_NONE_CASE` — `819:696`
- volume-N/A case: `06C_Completion_VolumeNA` — `823:720`
- volume-N/A wrapper: `FINAL_06_VOLUME_NA_CASE` — `823:716`
- recommended-routine conditional dialogs: `FINAL_06_RECOMMENDED_ROUTINE_DIALOGS` — `163:2142`
- shared UI: `MVP_공용_UI` — `105:3113`
- local component library: `LOCAL_COMPONENT_LIBRARY` — `635:788`
- completion status component: `CompletionStatusIcon` — `742:901`
- bottom actions: local `DualCTA` — `638:3344`

## Group 06 Figma page cleanup — PO APPROVED / PASS

`06 운동 완료` 페이지는 최종 구현에 필요한 artifact만 남긴다.

현재 top-level 유지 범위:
1. page title / description / divider
2. `06A_Completion_Default`
3. `FINAL_06_PR_NONE_CASE`
4. `FINAL_06_VOLUME_NA_CASE`
5. `FINAL_06_RECOMMENDED_ROUTINE_DIALOGS`

총 56개의 오래된 artifact를 삭제했다.

삭제 범위:
- 이전 carousel main / carousel content reference
- 06A–06J 구형 variants
- partial-save 별도 완료 화면
- body-map / bento / tonal exploration
- dashboard / chart / simple A-B-C drafts
- 임시 조각 및 Hevy/image reference screenshots

대표 삭제 노드 `06A_Completion_Carousel` (`163:2031`)과 `REORG_06_CAROUSEL_CONTENT` (`163:2073`)은 더 이상 Figma page에 존재하지 않는다. 과거 결정 이력은 GitHub checkpoint로만 보존한다.

Cleanup checkpoint:
- `docs/ux-decisions/2026-09-12-group06-page-cleanup.md`

## Common completion shell — PO APPROVED / QA PASS

Locked content hierarchy:

1. completion status + `운동 완료`
2. yearly workout count subtitle
3. four concise today metrics
   - 총 볼륨
   - 총 운동 시간
   - 총 운동 수
   - 총 진행 세트
4. conditional `오늘의 신기록`
5. `기록 상세 보기 / 홈으로 돌아가기`

Do not re-add full performed-exercise list, carousel, multiple charts, multiple analysis cards, or dense comparison/next-step copy without a new PO decision.

## PR behavior — PO APPROVED / FIGMA PASS

- 비교 가능한 PR이 없으면 신기록 카드 전체 숨김
- 첫 수행은 PR 아님
- 신기록이 1개든 여러 개든 완료 화면에는 대표 PR 1개만 표시
- 신기록 총 개수 / `외 N개` 표기 없음
- 여러 PR 중 대표 운동 = 현재 세션 표시 순서상 유효 PR이 발생한 첫 운동
- recording type별 대표 기준:
  - `weight_reps`: 최고 중량 PR 우선 → 없으면 동일 중량 반복수 PR
  - `reps`: 최대 반복수, `푸시업 15회`처럼 중량 없이 표기
  - `duration`: 최대 수행 시간
  - `assisted_weight_reps`: 최소 보조중량 PR 우선 → 없으면 동일 보조중량 반복수 PR
- e1RM/추정 1RM은 MVP 대표 선택에 사용하지 않음
- 완료 처리된 세트만 PR 판정

Figma 정리 후 별도 PR 화면은 no-PR case만 유지한다. PR-present는 canonical default가 대표하고, multi-PR도 visual이 동일하므로 중복 frame을 삭제했다.

## Total-volume behavior — PO APPROVED / FIGMA PASS

- `weight_reps` 완료 세트만 `중량 × 반복수`로 총 볼륨 합산
- `reps`, `duration`, `assisted_weight_reps` 제외
- 계산 가능한 완료 세트가 없으면 `총 볼륨 —`
- `0kg`로 표시하지 않음
- 다른 단위를 kg로 환산하지 않음
- 2×2 핵심 지표 구조 유지

Figma:
- `06C_Completion_VolumeNA` — `823:720`

## Partial-save handling — PO APPROVED / FIGMA PASS

- 미완료 세션 종료 확인은 Group 05에서 처리
- `종료하고 저장` 후 Group 06은 실제 저장된 결과만 일반 완료 화면에 표시
- Group 06의 별도 `부분 기록 저장 완료` 카드/화면은 사용하지 않음
- partial-save 완료 artifact는 Figma cleanup에서 삭제됨

## Recommended-routine dialogs — terminology updated / FIGMA PASS

사용자-facing copy에서는 `구성` 대신 `루틴`을 사용한다. 내부 정책에서만 필요할 때 `구조 변경` 등의 용어를 사용한다.

첫 번째 다이얼로그 — 추천 루틴 저장 여부:
- `이 루틴을 내 루틴으로 저장할까요?`
- `앞으로 다시 사용할 때만 저장하세요.`
- `저장하지 않기` / `내 루틴으로 저장`

두 번째 다이얼로그 — 저장할 루틴 선택:
- 표시 조건: 추천 루틴 저장을 선택했고 오늘 운동에서 운동/세트 구조를 수정한 경우
- `어떤 루틴으로 저장할까요?`
- `오늘 운동에서 추천 루틴의 운동이나 세트를 수정했어요.`
- `추천 루틴 그대로` / `오늘 수정한 루틴`
- 중량·횟수 변경, 실제 수행 순서 차이, 일부 운동 미수행은 두 번째 다이얼로그 조건이 아님

Figma:
- `FINAL_06_RECOMMENDED_ROUTINE_DIALOGS` — `163:2142`
- local `DialogCard` instances 유지, text override만 변경
- screenshot/read-back = PASS

## Final-shell design system — QA PASS

- 360×780
- local Fitness spacing / surface / radius / text styles 유지
- metric values → `display/01` 20/28
- metric labels → `label/02` + `text/secondary`
- PR value → `heading/02` 14/20
- local `CompletionStatusIcon` / `DualCTA` 유지
- notation: `13세트`, `벤치프레스 10kg × 12회`

---

## NEXT OPEN ITEM — exact resume point

**Review the two remaining recommended-routine completion conditionals as a flow against the locked final shell.**

Figma:
- `FINAL_06_RECOMMENDED_ROUTINE_DIALOGS` — `163:2142`

Remaining states:
- 추천 루틴 저장 여부
- 저장할 루틴 선택

Do not re-add removed carousel/chart/body-map/partial-save completion artifacts without a concrete new PO decision.
Do not reopen Group 05 without a concrete conflict or Product Owner request.
Do not start Cursor/development handoff unless Product Owner explicitly switches to development.

---

# CLOSED TRACK — Group 05 운동 중

Group 05 is CLOSED by PO decision.

Closure record:
- `docs/ux-decisions/2026-09-10-group05-closure-qa.md`

Existing approved Group 05 decisions remain locked: active logging, rest timer, action menu, reorder, replacement, other-routine switching, session recovery, add/replace initialization, Korean workout-table labels, MVP sequential regular-set numbering, and end-workout confirmation.

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
