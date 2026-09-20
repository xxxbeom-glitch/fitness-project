# Group 06–07 Completion / History / Analysis — Sequential Handoff QA

**Date:** 2026-09-20  
**Status:** PO DECISIONS RECORDED · FIGMA FOLLOW-UP REQUIRED

## Scope

Sequential Figma ↔ Cursor implementation-handoff QA for:
- Group 06 Workout Completion
- Group 07 Analysis / Workout History

Already-approved visual/product behavior remains closed unless the current artifact reveals a conflict, stale rule, or missing runtime contract.

## Figma ↔ behavior-matrix inventory

Group 06:
- canonical Figma top-level states = `3`
- behavior-matrix entries = `3`
- exact name match = `3 / 3`
- `06A_Completion_Default`
- `FINAL_06_PR_NONE_CASE`
- `FINAL_06_VOLUME_NA_CASE`

Group 07:
- canonical Figma top-level states = `5`
- behavior-matrix entries = `5`
- exact name match = `5 / 5`
- `07A_Analysis_Home`
- `07B_BodyArea_Detail`
- `07B_BodyArea_Detail_Empty`
- `07D_Workout_History_Detail`
- `07D_Workout_History_Detail_DeleteConfirm`

No current Group 06–07 top-level screen omission exists relative to the current behavior matrix.

## Recovered approved rules — no new PO decision

### Group 06 PR presentation

Current authority is `2026-09-14-group06-completion-shared-summary-sync.md`.

The old representative-PR-only rule is superseded.

Current rule:
- no valid PR → hide the PR card
- one or more valid PRs → show all valid session PR rows in the one shared PR card
- order by session exercise display order
- native recording-type formatting
- no representative-only collapse
- no `외 N개`

Current Figma `06A` and Volume-N/A state both show the three review PR rows and match this rule.

### Completion annual workout count

The visible subtitle `올해 N번째 운동이에요` reuses the already-approved workout-count semantics over the user's local calendar year:
- saved session with persisted performed work counts
- saved partial with >=1 completed/persisted set counts
- discard / no-performed-work session does not count
- current just-saved session is included
- deleted saved sessions no longer contribute

### Group 07 routes

Current approved route recovery:
- 07A body-area row → 07B
- 07A recent-progress exercise row → Group 04 exercise detail
- 07B contributor exercise row → Group 04 exercise detail
- 07A recent-workout row → corresponding 07D session detail
- Group 06 `기록 상세 보기` → just-saved 07D session detail

### 07D performed-exercise table

Approved current presentation:
- one compact table/card
- columns = `운동 / 수행 / 세트`
- same performance combination is grouped by set count
- different performance combinations remain separate rows
- use recording-type-native values; no false cross-type conversion

Current Figma read-back matches this rule.

## Product Owner decisions — 2026-09-20

### Decision 1 — restore a full workout-history list

`07A_Analysis_Home > 최근 운동 > 전체 기록` requires a real destination.

Approved direction:
- add a canonical full workout-history list screen
- screen name: `07C_Workout_History`
- `07A_Analysis_Home > 전체 기록` → `07C_Workout_History`
- list saved workout sessions in reverse chronological order
- include completed sessions and saved-partial sessions that contain persisted performed work
- do not include discarded / no-performed-work sessions
- tapping a history row → matching `07D_Workout_History_Detail`
- the restored screen is a simple history browser; do not add unrelated analysis/dashboard content

This intentionally increases the canonical MVP top-level screen count by one once Figma is reflected and verified.

### Decision 2 — `최근 기록 변화` = recent exercises whose performance improved

Keep the logic simple and based on actual recent completed records.

For each exercise:
1. take the most recent completed/persisted performance
2. compare it with the immediately previous comparable completed/persisted performance for the same exercise identity and recording type
3. include the exercise only when performance improved
4. sort qualifying exercises by the date/time of the latest improved performance, newest first
5. show up to the current UI capacity of 3 rows on `07A_Analysis_Home`

Do not rank exercises by a cross-exercise improvement score.

Use the already-approved recording-type-native improvement semantics:
- `weight_reps`: higher completed load is improvement; at the same load, higher reps can qualify
- `reps`: higher completed reps
- `duration`: longer completed duration
- `assisted_weight_reps`: lower assistance is improvement; at the same assistance, higher reps can qualify

Common rules:
- first-ever performance has no previous comparison → do not show as a change
- equal performance → do not show
- worse performance → do not show
- display the current native record and the changed value/delta
- no conversion into one common score/unit

## Current result

Group 06:
- visual/state mapping = PASS
- Product/UX blocker = `0`

Group 07:
- Product/UX calculation/navigation decisions above are resolved
- Figma follow-up required: create `07C_Workout_History` and then re-run focused inventory/navigation QA

**Do not close Group 06–07 until the new 07C Figma screen is created and verified. Do not advance to Group 08 automatically.**
