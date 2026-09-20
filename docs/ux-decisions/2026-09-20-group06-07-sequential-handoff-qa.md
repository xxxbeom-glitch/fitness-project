# Group 06–07 Completion / History / Analysis — Sequential Handoff QA

**Date:** 2026-09-20  
**Status:** QA IN PROGRESS · PO DECISION NEEDED

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

## Current sequential QA blockers

### DECISION-06-07-01 — 07A `전체 기록` has no destination

Current canonical `07A_Analysis_Home` visibly contains:
- section `최근 운동`
- action `전체 기록`

But the former separate workout-history overview/list screen was removed from the canonical Group 07 IA, and the current 94-screen inventory contains no replacement workout-history-list destination.

Therefore:
- current `전체 기록` action has no approved route
- Cursor must not invent a screen or route
- PO decision is required: restore/provide a workout-history list destination, or remove/change the action

### DECISION-06-07-02 — 07A `최근 기록 변화` data-selection/comparison semantics

Current Figma defines the presentation but not the complete runtime selection/calculation rule.

Current visual examples show:
- exercise identity
- current representative record
- delta
- up to three review rows

Existing approved docs define recording-type-native History/Growth semantics, but do not fully define:
- which exercises qualify for the 07A recent-change list
- which records are compared
- how the representative current record is chosen for this section
- ordering when several exercises changed
- exact delta semantics when more than one field changes

Older analysis policy explicitly left these comparison/representative rules open, and no later current Decision closes them.

Cursor must not invent this algorithm.

## Current result

Group 06:
- visual/state mapping = PASS
- current completion rules = adequately recoverable after handoff clarification
- new Product/UX blocker = `0`

Group 07:
- visual/state mapping = PASS
- 07B / 07D = aligned with current approved policy
- Product/UX decisions still needed = `2`

**STOP for Product Owner decision before closing Group 06–07 or advancing to Group 08.**
