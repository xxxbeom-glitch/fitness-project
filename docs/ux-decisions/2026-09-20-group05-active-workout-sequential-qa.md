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

## Decision 2 — Rest Timer end sound source

Rest Timer completion sound uses app-owned custom sound assets only.

- do not use the device default notification/ringtone sound as the product sound
- do not open or depend on the OS system-sound picker
- selectable timer-end sounds are packaged/provided by the app
- Product Owner will provide the final Production sound files later
- final asset filenames/labels may be finalized when those files are supplied
- this decision locks the sound source only; vibration and background/system-notification behavior remain open

## Decision 3 — Duration Active Workout interaction

MVP keeps duration logging manual and simple.

- use existing shared `ExerciseCard / Mode=WorkoutDuration`
- each set exposes a TIME value and manual completion check
- no inline duration stopwatch/countdown/start-stop control
- the user may use the existing Nav Header Manual Timer as a reference
- Manual Timer and duration set value are not automatically linked
- timer completion does not auto-complete the set
- user confirms/edits the TIME value and manually completes the set
- completed duration stores the current TIME value in seconds
- completing a duration set triggers the normal automatic Rest Timer rule

Figma already supports this with `ExerciseCard / Mode=WorkoutDuration` (`651:3614`), so no new top-level screen is required.

## Still open in Group 05

- Rest Timer zero-completion vibration / background notification behavior
- active-session recovery system-notification UX

## QA state

- Group 05 top-level Figma frames: 18
- Group 05 behavior-matrix entries: 18
- Figma ↔ matrix names: 18 / 18 exact match
- no Group 05 screen omission found in the current sequential pass

Group 05 is not closed until the remaining open Product/UX decisions above are resolved.
