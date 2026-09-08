# Group 03 Routine Figma Checkpoint — 2026-09-08

**Status:** FIGMA APPLIED / PRODUCT OWNER VISUAL REVIEW PENDING
**Figma file:** `W3lZurXCXbThP67rF2xk2b`
**Page:** `03 루틴` — node `233:2074`

## Scope

This checkpoint records the current `03 루틴` Figma state after aligning the page to already-confirmed product rules and the local Figma design-system rules.

This document does **not** declare final PO approval of the whole Group 03 pass yet.

## Canonical states

Current canonical states on the `03 루틴` page:

1. `03A_Routine_List` — `34:1401`
2. `03B_Routine_Empty` — `34:1438`
3. `03C_추천루틴상세` — `40:2272`
4. `03D_Routine_Detail` — `34:1447`
5. `03E_Routine_Create` — `34:1457`
6. `03E2_Routine_Create_WithExercises` — `352:896`
7. `03F_Routine_Edit` — `34:1477`

Canvas order follows the same logical sequence.

## Product alignment applied

### Weekday assignment

No weekday-assignment UI remains in the canonical Group 03 states.

The current MVP pass does not require a routine to be assigned to a specific weekday.

### Recommended-routine review

`03C_추천루틴상세` keeps the approved recommendation-review role:

- one recommended routine is reviewed
- primary CTA is `이 루틴 사용하기`
- accepting it saves the routine and continues according to the existing recommendation-flow policy

Reference: `DEC-014` in `docs/08_DECISIONS.md`.

### Routine prescription / card look

The Product Owner explicitly chose the previously authored routine-card visual language as the visual source:

- `03C` and `03D` use the existing `210_Routine_Detail` / `ExerciseCard Mode=View` look
- `03E2` and `03F` use the existing `230_Routine_Edit` / `ExerciseCard Mode=Edit` look
- the existing exercise thumbnail, muscle tag, exercise title, set-table visual hierarchy, and edit-card controls are reused rather than replaced by a newly invented compact-card style

The create/edit screens do not restore the old weekday selector when reusing the `230` card look.

### Active-workout routine access guard

The previous `03G_Routine_Readonly` state and inline notice `운동 진행 중 · 루틴 편집은 종료 후 가능` are no longer part of the canonical routine flow.

Approved direction:

- while a workout session is active, block entry into routine-management surfaces at the entry point rather than navigating into a read-only routine screen
- keep the user on the current screen when the blocked entry is attempted
- provide a lightweight toast-style message explaining that routine management is unavailable during the active workout
- exact toast component, placement, duration, and final copy are deferred to the later interaction-state pass

Figma action in this checkpoint:

- removed `03G_Routine_Readonly` — old node `34:1499`
- no separate read-only routine screen is required for this state

## Screen-height rule

Use `780px` as the base Figma screen height when the content fits.

If the real composed content exceeds 780px, the Figma frame is allowed to grow rather than compressing or clipping the content.

Current canonical heights:

- 03A: `780`
- 03B: `780`
- 03C: `2746`
- 03D: `1908`
- 03E: `780`
- 03E2: `2518`
- 03F: `2518`

## Design-system normalization applied

The Group 03 pass follows:

- `docs/ux-decisions/2026-09-06-figma-local-design-system.md`
- `docs/ux-decisions/2026-09-08-figma-nav-header-balance.md`

Applied/verified:

- all canonical screen backgrounds bind to local `bg/default`
- routine-list cards use local `bg/surface`, `border/subtle`, and `radius/md`
- routine-list metadata uses `label/02 + text/secondary`
- section/card titles use the appropriate local heading styles
- copied ExerciseCard core text roles are locally normalized while preserving the original visual look:
  - exercise title → `heading/01 + text/primary`
  - exercise prescription/meta → `label/02 + text/secondary`
  - SET/KG/REPS labels → `caption/01 + text/tertiary`
  - set/value text → `body/01 + text/primary`
- CTA text uses `button/cta`; Primary CTA text uses `text/on-brand`
- all Group 03 headers use the balanced local `Nav Header` variants with fixed left/right action slots
- root list states use `LeftAction=None`; child/detail/create/edit states use `LeftAction=Back`

## QA result

PASS:

- weekday-related text in canonical Group 03 states: `0`
- canonical screen backgrounds: local `bg/default`
- base-height screens normalized to `360 x 780`
- long-content screens remain unconstrained above 780
- `03C` CTA = `이 루틴 사용하기`
- `03D` CTA = `운동 시작`
- `03E` save CTA = Disabled until a valid routine is composed
- `03F` / `03E2` use the original edit-card visual pattern
- obsolete `03G_Routine_Readonly` removed from canonical Group 03

## Remaining product-content QA

The reused `210/230` ExerciseCard visual samples still contain legacy/sample set-table values such as `W / D / F`, `80 KG`, and `35 REPS`.

These values are currently treated as **visual sample content, not final prescription policy**.

Before implementation handoff, the routine-template data shown inside the set table must be reconciled with the confirmed product rules:

- `DEC-010`: do not guess a first working weight from demographics; actual first-load calibration belongs in workout execution
- `DEC-012`: self-built routines require explicit set count + target rep prescription

Do not treat the current sample `80 / 35` values as approved default routine data.

No Cursor implementation handoff yet.
