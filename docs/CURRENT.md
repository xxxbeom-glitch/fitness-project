# CURRENT — Fitness Project

**Updated:** 2026-09-14

## Current mode

`PRODUCT/UX FIGMA · GROUP 07 ANALYSIS LOCKED · 07A LOCKED · 07B LOCKED · 07C OVERVIEW REMOVED · 07D PRODUCT RULES LOCKED · FIGMA TARGETED QA PASS · NO CURSOR IMPLEMENTATION HANDOFF`

## Resume rule

`PROJECT_INSTRUCTIONS → CURRENT → latest active checkpoint → NEXT OPEN ITEM`

이미 PO 승인 또는 QA PASS된 범위는 새 변경·충돌·regression 가능성·명시 재검토 요청이 없으면 다시 처음부터 검토하지 않는다.

## Latest active checkpoint

- `docs/ux-decisions/2026-09-14-group07-final-policy-lock.md`

Supporting current checkpoints:
- `docs/ux-decisions/2026-09-13-group07d-figma-cleanup-shared-components.md`
- `docs/ux-decisions/2026-09-13-group07-session-detail-current-checkpoint.md`
- `docs/ux-decisions/2026-09-05-analysis-body-area-drilldown.md`
- `docs/ux-decisions/2026-09-12-group06-completion-final-shell.md`
- `docs/ux-decisions/2026-09-04-workout-completion-metrics.md`

The 2026-09-14 final policy-lock checkpoint supersedes older Group 07 documents only where they still describe the four previously-open items as unresolved.

---

# GROUP 07 — LOCKED

## Canonical Figma

- file `W3lZurXCXbThP67rF2xk2b`
- page `07 분석 · 운동 기록` — `233:2078`
- `07A_분석홈` — `887:936`
- `07B_부위상세` — `887:1028`
- `07B_부위상세_Empty` — `1057:593`
- `07D_운동기록상세_Exploration` — `836:1593`
- shared UI master page `MVP_공용_UI` — `105:3113`

Current Group 07 IA:
1. `07A 분석 홈`
2. `07B 부위 상세`
3. `07D 운동 기록 상세`

There is no separate 07C overview screen. Do not recreate it or auto-renumber 07D without explicit PO direction.

Exercise-specific history/growth remains in Group 04 `최근 기록 / 성장`.

## 07A

`LOCKED` — do not reopen without a new policy change or regression.

## 07B

`LOCKED`.

Final long-list policy:
- `진행한 운동` contributor list shows all rows
- no first-N truncation
- no `더보기` / `전체 보기`
- unified card grows with content; page scroll handles long content

Canonical list layer:
- `SelectedAreaExerciseList_AllRows` — `887:1065`

## 07D

`PRODUCT RULES LOCKED / FIGMA APPLIED / TARGETED QA PASS`.

Final rules:
- if no eligible completed `weight_reps` volume exists, keep the `총 볼륨` cell and show `—`
- 07D shows all valid PRs from the saved session in the single trophy card; Group 06 completion still shows one representative PR only
- header uses existing shared `Nav Header` with `RightAction=Trash`
- saved-session deletion requires confirmation before removing persisted data
- confirmed deletion removes the whole session and its contribution to derived Analysis/history/PR data
- performed exercises remain the accepted single-card C micro-table treatment

Current shared masters:
- `07D/PersonalRecordTrophyCard` — `1113:733`
- `07D/SessionSummaryCard` — `1124:736`

Current live instances:
- PR card — `1113:739`
- summary card — `1124:754`
- delete nav — `836:1595`, `RightAction=Trash`

Temporary A/B/C comparison artifacts are removed.

## QA evidence

Latest focused 07D screenshot/read-back after the final policy changes = PASS.

Verified:
- Trash action is visible in the shared nav header
- 3-row PR sample expands without clipping
- Overview auto-layout reflows correctly
- session summary, body distribution and C micro-table remain intact
- 07B list remains vertical hug Auto Layout with no more affordance

No broader repeat QA is required unless a new change/regression is introduced.

---

# CLOSED / PRESERVED TRACKS

Group 06 운동 완료 — CLOSED:
- `docs/ux-decisions/2026-09-12-group06-completion-final-shell.md`

Group 05 운동 중 — CLOSED:
- `docs/ux-decisions/2026-09-10-group05-closure-qa.md`

01–04 local component/token migration — CLOSED:
- `docs/ux-decisions/2026-09-10-figma-local-component-migration.md`
- `docs/ux-decisions/2026-09-10-group04-closure-qa.md`

Exercise DB/media — PRESERVED DEFERRED:
- canonical 195 + P0 16 = target 211
- P0 data row/default-media QA locked
- final derived 211 runtime/workbook regeneration and final attachment mapping deferred

# NEXT OPEN ITEM

Group 07 has no remaining known Product/UX decision from its previous open-item list.

Do not reopen Group 07 mechanically. Keep the current Product/UX/Figma stage and wait for the Product Owner to activate the next product group or explicitly request further Group 07 refinement.

A future generalized shared component for the 07D micro-table is optional/non-blocking design-system cleanup, not a Group 07 product blocker.

# Development boundary

Product Owner가 개발 전환을 명시하기 전까지 개발/Cursor handoff를 하지 않는다.
