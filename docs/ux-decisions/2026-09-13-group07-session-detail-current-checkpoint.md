# Group 07 — Session-detail current checkpoint

**Date:** 2026-09-13  
**Status:** CURRENT FIGMA STATE VERIFIED / 07C OVERVIEW REMOVED / 07D REVIEW IN PROGRESS / NO CURSOR HANDOFF

## Purpose

This checkpoint consolidates the current Group 07 state after the PO review in this session. It does not reopen already-approved 07A/07B decisions.

## Current Group 07 IA

Canonical Analysis/session-detail surfaces:

1. `07A_분석홈` — `887:936`
2. `07B_부위상세` — `887:1028`
   - empty state: `07B_부위상세_Empty` — `1057:593`
3. `07D_운동기록상세_Exploration` — `836:1593`

The former `07C_운동기록_Exploration` overview screen is removed and must not be recreated unless the PO explicitly changes direction.

Important naming rule:
- `07D_운동기록상세_Exploration` remains named `07D` for now.
- Do not auto-renumber it to `07C` without explicit PO direction.

This supersedes the earlier part of `2026-09-13-group07-page-cleanup-renumber.md` that still listed a separate 07C workout-record overview.

## Navigation

- 07A body-area row → 07B selected-body detail
- 07A/07B exercise row → Group 04 exercise detail (`최근 기록`, with `성장` adjacent)
- Group 06 completion `기록 상세 보기` → 07D workout-session detail
- 07D may later be reused when another valid entry point opens one saved historical workout session

07D is one persisted workout-session result. It is not a duplicate of Group 04 exercise history/growth.

## 07D current hierarchy

Current Figma order:

1. navigation header
2. session title + date
3. conditional `오늘의 신기록`
4. session summary metrics
5. `운동 부위 분포`
6. `수행 운동`

`OverviewSection` — `858:7170`
- vertical auto layout
- `24px` internal gap
- order: `SessionIntro → PersonalRecordTrophyCard → SessionSummary`

## 07D current local components

### Personal record

Master:
- `07D/PersonalRecordTrophyCard` — `1113:733`, `320 × 126`

Live instance:
- `PersonalRecordTrophyCard` — `1113:739`, `320 × 126`

Current treatment:
- trophy `64 × 64`
- trophy renders in FRONT of the card as an internal absolute overlay
- card boundary passes behind the lower cup/neck area
- `CardSurface` uses the same Fitness card border treatment as the summary card:
  - `border/default` (`VariableID:278:922`)
  - `1px`
  - `INSIDE`
- root auto-layout gap `-32px`
- `CardSurface` top padding `40px`, horizontal `20px`, bottom `12px`
- label/value text gap `6px`

The shared Group 06 `CompletionPersonalRecordCard` remains unchanged.

### Session summary

Master:
- `07D/SessionSummaryCard` — `1124:736`, `320 × 159`

Live instance:
- `SessionSummaryCard` — `1124:754`, `320 × 159`

Metrics:
- 총 볼륨
- 운동 시간
- 운동 수
- 완료 세트

Current treatment:
- one enclosing card, not four separate cards
- 2 × 2 grid
- outer padding `16px`
- equal metric cells
- row height `56px`
- vertical divider `1 × 40px`
- horizontal divider `288 × 1px`
- existing shared `CompletionMetricCard` typography/content is reused internally

### Session body distribution

- `SessionBodyDistributionSection` — `1075:794`
- approved 07A body-map/card composition reused
- only muscle areas represented by the saved session appear in the percentage list
- current `36 / 28 / 16 / 12 / 8` values are review-only sample data, not production fixtures

### Performed exercises

Current selected direction remains `C · MICRO TABLE` inside one card:
- `WorkoutSummaryCard` — `858:7171`
- `WorkoutSummaryTable` — `1097:7116`
- columns `운동 / 수행 / 세트`
- inner width `288px`
- card inner padding `16px`
- same performance combination is grouped by set count
- different combinations remain separate rows
- no per-exercise cards
- no invented cross-recording-type unit conversion

The micro-table pattern is visually selected, but final shared-component cleanup is still deferred until the PO finishes 07D visual review.

## Current geometry / QA

Canonical Figma:
- file `W3lZurXCXbThP67rF2xk2b`
- page `07 분석 · 운동 기록` — `233:2078`
- current 07D frame `360 × 1348`
- page content inset `20px`
- section separation `32px`

Latest full-screen screenshot/read-back verified:
- PR card appears before summary
- trophy is in front of its card surface
- PR and summary cards use consistent border treatment
- body distribution and performed-exercise sections remain intact

Result: **PASS for the current visual changes in this session.**

## Superseded states from this session

Do not restore:
- separate `07C_운동기록_Exploration` overview screen
- PR card built from shared `CompletionPersonalRecordCard`
- manual 36px trophy wrapper
- trophy-behind-card layer order
- borderless PR CardSurface
- four separate session-summary metric cards
- exercise-by-exercise card list for `수행 운동`
- `FlatKeyValueRow Lines=2` as the 07D performed-exercise presentation

## NEXT OPEN ITEM

Continue 07D one product decision at a time after PO visual review.

Remaining product rules:
1. presentation when a saved session has no eligible `weight_reps` total volume (`—` is already supported by completion policy)
2. multiple-PR detail scope
3. additional session metadata/actions only if genuinely required for MVP

07B long contributor-list policy remains deferred until the current 07D review is paused or completed.

**NO CURSOR IMPLEMENTATION HANDOFF.**
