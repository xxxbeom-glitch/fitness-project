# CURRENT — Fitness Project

**Updated:** 2026-09-14

## Current mode

`PRODUCT/UX FIGMA · GROUP 06 COMPLETION SHARED SUMMARY APPROVED · GROUP 07 ANALYSIS LOCKED · 07A LOCKED · 07B LOCKED · 07C OVERVIEW REMOVED · 07D PRODUCT RULES LOCKED · FIGMA TARGETED QA PASS · NO CURSOR IMPLEMENTATION HANDOFF`

## Resume rule

`PROJECT_INSTRUCTIONS → CURRENT → latest active checkpoint → NEXT OPEN ITEM`

이미 PO 승인 또는 QA PASS된 범위는 새 변경·충돌·regression 가능성·명시 재검토 요청이 없으면 다시 처음부터 검토하지 않는다.

## Latest active checkpoint

- `docs/ux-decisions/2026-09-14-group06-completion-shared-summary-sync.md`

Supporting current checkpoints:
- `docs/ux-decisions/2026-09-14-group07b-empty-plain-text.md`
- `docs/ux-decisions/2026-09-14-group07-final-policy-lock.md`
- `docs/ux-decisions/2026-09-13-group07d-figma-cleanup-shared-components.md`
- `docs/ux-decisions/2026-09-13-group07-session-detail-current-checkpoint.md`
- `docs/ux-decisions/2026-09-05-analysis-body-area-drilldown.md`
- `docs/ux-decisions/2026-09-12-group06-completion-final-shell.md`

The latest Group 06 checkpoint supersedes the older completion-screen presentation that used four separate metric tiles and a flat representative-PR card.

---

# GROUP 06 — COMPLETION UI APPROVED

Canonical Figma page:
- `06 운동 완료` — `233:2077`

Canonical/state screens:
- `06A_Completion_Default` — `793:15748`
- `06B_Completion_NoPR` — `819:702`
- `06C_Completion_VolumeNA` — `823:720`

Current shared completion structure:
- completion status/header
- conditional shared `07D/PersonalRecordTrophyCard`
- shared `07D/SessionSummaryCard`
- bottom `기록 상세 보기 / 홈으로 돌아가기`

Rules:
- completion screen now shows all valid PR rows in the single shared trophy card
- no valid PR → hide PR card entirely
- no eligible completed `weight_reps` volume → keep `총 볼륨` and show `—`
- No-PR and Volume-N/A reference wrappers now contain only the actual `360×780` app screen; explanatory canvas labels were removed

Latest targeted screenshot QA for 06A/06B/06C = PASS.

---

# GROUP 07 — LOCKED

## Canonical Figma

- file `W3lZurXCXbThP67rF2xk2b`
- page `07 분석 · 운동 기록` — `233:2078`
- `07A_분석홈` — `887:936`
- `07B_부위상세` — `887:1028`
- `07B_부위상세_Empty` — `1057:593`
- `07D_운동기록상세_Exploration` — `836:1593`
- `07D_운동기록상세_DeleteConfirm` — `1136:4054`

Current Group 07 IA:
1. `07A 분석 홈`
2. `07B 부위 상세`
3. `07D 운동 기록 상세`

There is no separate 07C overview screen.

## 07A

`LOCKED`.

## 07B

`LOCKED`.

Populated state:
- selected body-area body map + contributor list remain in one unified card
- `진행한 운동` SectionHeader remains in the populated state
- contributor list shows all rows
- no first-N truncation or more affordance
- card grows with content and page scroll handles long content
- canonical list layer `SelectedAreaExerciseList_AllRows` — `887:1065`

Empty state:
- body map is not shown
- `진행한 운동` SectionHeader is not shown
- card/border/surface is not shown
- screen title and period selector remain
- only `이 기간에는 {부위} 운동 기록이 없어요` is shown
- message is horizontally/vertically centered in the remaining screen area below the period tabs
- no CTA or placeholder/zero-value rows
- centered content area `Content` — `1057:596`, x=`20`, y=`192`, `320 × 698`
- message node `EmptyMessage_기간내기록없음` — `1057:7468`

## 07D

`PRODUCT RULES LOCKED / FIGMA APPLIED / TARGETED QA PASS`.

- no eligible completed `weight_reps` volume → keep `총 볼륨` cell and show `—`
- session detail shows all valid PRs in the single trophy card
- header uses shared `Nav Header` with `RightAction=Trash`
- destructive session deletion requires confirmation
- performed exercises remain the accepted single-card C micro-table treatment

Shared masters:
- `07D/PersonalRecordTrophyCard` — `1113:733`
- `07D/SessionSummaryCard` — `1124:736`

Shared PR-card current spacing:
- each PR is an independent text layer inside vertical Auto Layout
- PR row gap = `4px`
- label-to-list gap = `12px`
- bottom padding = `16px`

## QA evidence

Latest targeted Figma QA = PASS.

Verified:
- Group 06 default / No-PR / Volume-N/A completion states use the shared Group 07D summary components correctly
- Group 06 conditional-state frames no longer include explanatory canvas text inside the app-frame wrapper
- 07B populated state unchanged
- 07B empty-state body map, card and section title removed
- zero-record message is centered in the available screen area below the period tabs without clipping
- previously approved 07D structure remains intact

No broader repeat QA is required unless a new change/regression is introduced.

---

# NEXT OPEN ITEM

Group 07 has no remaining known Product/UX decision from its previous open-item list.

Do not reopen Group 06 or Group 07 mechanically. Wait for the Product Owner to activate the next product group or explicitly request further refinement.

# Development boundary

Product Owner가 개발 전환을 명시하기 전까지 개발/Cursor handoff를 하지 않는다.
