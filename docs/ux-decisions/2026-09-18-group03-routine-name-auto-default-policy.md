# Group 03 Routine Name — Optional Input / Auto Default Policy

**Date:** 2026-09-18  
**Status:** PO APPROVED · PRODUCT POLICY LOCKED · FIGMA SYNC NOT YET VERIFIED · NO CURSOR HANDOFF

## Decision

Routine name is **optional** when creating a user routine.

A blank routine name must not block save by itself.

If the routine otherwise satisfies the existing save-validity rules and the name field is blank at save time, the app automatically assigns a routine name.

## Auto-name format

Korean default format:

`나의 루틴 YYMMDD`

Example:
- first auto-named routine saved on 2026-09-18 → `나의 루틴 260918`
- second auto-named routine saved on the same local calendar date → `나의 루틴 260918 (2)`
- third → `나의 루틴 260918 (3)`

Rules:
- `YYMMDD` uses the user's local calendar date at the time the routine is first saved.
- numbering is used for additional automatically named routines created on the same date so they remain distinguishable.
- if the user entered a routine name, preserve the entered name; do not replace it with the auto format.
- the generated name becomes the routine's saved name and can be edited later.
- later edits to exercises do not automatically regenerate or rename the routine.

## Save validation boundary

This decision changes only the routine-name requirement.

- routine name empty → **not an error**
- name empty + routine otherwise valid → **save allowed**
- other existing routine-validity requirements remain unchanged

Therefore, older wording such as “save is unavailable before a valid routine is composed” must not be interpreted as requiring a non-empty routine name.

## Rationale

The name field should not create unnecessary friction when the user has already composed a routine.

A deterministic date-based fallback:
- avoids inferring workout meaning from the first exercise
- avoids requiring AI/category inference
- produces predictable implementation behavior
- still gives the saved routine an immediately editable identifier

## Scope / supersession

This is a focused post-closure amendment to Group 03.

It supersedes any prior interpretation that a user-entered routine name is required for save eligibility.

It does **not** reopen unrelated Group 03 behavior, layout, card structure, routine management, recommended-routine behavior, or workout flow.

## Figma / implementation follow-up

Figma must be checked only for the affected create/save states:
- `03E_Routine_Create`
- `03E2_Routine_Create_WithExercises`
- any helper/error/disabled-save representation that implies routine name is mandatory

No Cursor/development handoff is authorized by this decision.

## Result

**LOCKED — user-entered routine name is optional; blank names receive the automatic format `나의 루틴 YYMMDD`, with same-date sequence suffixes when needed.**
