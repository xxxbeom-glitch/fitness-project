# Group 05 Active Workout — Sequential Handoff QA Decision Checkpoint

**Date:** 2026-09-20  
**Status:** QA IN PROGRESS · PO DECISION RECORDED

## Scope

This checkpoint records Product Owner decisions made during the sequential Figma ↔ implementation-handoff QA for Group 05 Active Workout.

Already-PASS Group 05 replacement/menu/manual-timer behavior remains closed unless a new conflict or regression is found.

## Decision 1 — Automatic Rest Timer overlap

When another set is completed while an automatic Rest Timer is already running:

- terminate/replace the currently running automatic Rest Timer
- immediately start a fresh automatic Rest Timer for the newly completed set
- use the same approved rest-duration resolution rule that normal set completion uses
- there is never more than one automatic Rest Timer running at once
- the RestLiveBar continues to represent the single current automatic Rest Timer
- no confirmation, toast, or additional screen is required for the restart

This resolves the previously open replace/restart/keep-current edge rule.

## Still open in Group 05

- exact Rest Timer zero-completion feedback: sound / vibration / background notification
- active-session recovery system-notification UX
- `duration` Active Workout timed-set interaction

## QA state

- Group 05 top-level Figma frames: 18
- Group 05 behavior-matrix entries: 18
- Figma ↔ matrix names: 18 / 18 exact match
- no Group 05 screen omission found in the current sequential pass

Group 05 is not closed until the remaining open Product/UX decisions above are resolved.
