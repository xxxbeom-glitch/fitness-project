# Group 06 — Completion shared summary sync

**Date:** 2026-09-14  
**Status:** PO APPROVED / FIGMA APPLIED / TARGETED QA PASS / NO CURSOR HANDOFF

## Decision

Group 06 completion screens now reuse the same approved shared summary UI used by Group 07D.

The canonical completion order is:

1. completion status/header
2. conditional `오늘의 신기록` trophy card
3. unified 2×2 session summary card
4. bottom actions

Shared masters:
- `07D/PersonalRecordTrophyCard` — `1113:733`
- `07D/SessionSummaryCard` — `1124:736`

This supersedes the previous Group 06 presentation that used four separate metric tiles plus the old flat personal-record card.

## 06A Default — PO APPROVED

Canonical screen:
- `06A_Completion_Default` — `793:15748`

Applied:
- removed old four-card `MetricGrid` — former `805:15887`
- removed old `Card_PersonalRecord` — former `936:931`
- inserted shared PR trophy-card instance — `1151:662`
- inserted shared 2×2 session-summary instance — `1151:671`
- order is `CompletionHeader → PR trophy card → SessionSummaryCard`

The PO reviewed the resulting Figma screen and approved it.

### PR presentation correction

The completion screen now follows the same visible PR treatment as the approved shared trophy card: all valid PR rows for the saved session are shown inside the single trophy card.

This supersedes the older Group 06 rule that showed only one representative PR on the completion screen.

No `외 N개` summary is used.

## 06B No-PR state

Canonical state:
- `06B_Completion_NoPR` — `819:702`

Applied:
- no PR card or empty PR placeholder
- shared 2×2 `SessionSummaryCard` only — instance `1151:697`
- bottom actions unchanged

State/reference wrapper cleanup:
- wrapper `FINAL_06_PR_NONE_CASE` — `819:696` reduced to the actual `360×780` app screen only
- removed explanatory canvas text layers `819:697`, `819:698`, `819:699`
- child screen moved to wrapper origin `(0,0)`

Targeted screenshot QA = PASS.

## 06C Total-volume N/A state

Canonical state:
- `06C_Completion_VolumeNA` — `823:720`

Applied:
- shared PR trophy-card instance — `1151:715`
- shared 2×2 session-summary instance — `1151:724`
- `총 볼륨` value override remains `—`
- remaining metrics remain unchanged
- bottom actions unchanged

State/reference wrapper cleanup:
- wrapper `FINAL_06_VOLUME_NA_CASE` — `823:716` reduced to the actual `360×780` app screen only
- removed explanatory canvas text layers `823:717`, `823:718`, `823:719`
- child screen moved to wrapper origin `(0,0)`

Targeted screenshot QA = PASS.

## Shared PR-card spacing refinement inherited by Group 06

The shared trophy card uses independent PR text layers in vertical Auto Layout.

Current spacing:
- PR row gap = `4px`
- label-to-record-list gap = `12px`
- card bottom padding = `16px`

The card height expands with the number of valid PR rows.

## Product rules retained

- no valid PR → hide the PR card entirely
- no eligible completed `weight_reps` volume → keep the `총 볼륨` cell and show `—`, never `0kg`
- completion CTA remains `기록 상세 보기 / 홈으로 돌아가기`
- no full performed-exercise list or analysis chart is added to Group 06

## Development boundary

No Cursor/development handoff is authorized by this checkpoint.
