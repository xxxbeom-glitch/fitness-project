# Group 03 Routine Figma Checkpoint — 2026-09-08

**Status:** PO APPROVED / FIGMA CLOSED
**Figma file:** `W3lZurXCXbThP67rF2xk2b`
**Page:** `03 루틴` — node `233:2074`

## Scope

This checkpoint records the Product Owner-approved final Figma state for `03 루틴`.

The Group 03 visual/interaction-definition pass is closed. Do not continue visual iteration on this page unless a later implementation or runtime QA finding requires a specific correction.

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

### Recommended-routine detail alignment — PO APPROVED

`03C_추천루틴상세` now uses the same detail-screen structure as `03D_Routine_Detail`.

Approved UI rule:

- do not show a separate recommendation-description card above the routine contents
- use the same three-column routine summary component as `03D`: `총 운동 / 예상 시간 / 총 세트`
- show the actual routine name in the header instead of a generic `추천 루틴` title
- use the same exercise-card layout and spacing as the standard routine detail screen
- use the same primary CTA label `운동 시작`
- the intended visible control difference is that a recommended routine detail has **no header Edit action** (`RightAction=None`), while a normal saved routine detail uses `RightAction=Edit`

Current `03C` example summary:

- 총 운동: `6개`
- 예상 시간: `55분`
- 총 세트: `18세트`

This Figma alignment changes the previous `03C` CTA from `이 루틴 사용하기` to `운동 시작`. The existing repository decision `DEC-014` still describes the older acceptance-to-Home flow. Recommendation persistence/navigation semantics therefore need one explicit reconciliation before implementation handoff; this checkpoint records the approved screen state without silently rewriting that product-flow decision.

### Routine prescription / card look

The Product Owner explicitly chose the previously authored routine-card visual language as the visual source:

- `03C` and `03D` use the existing `210_Routine_Detail` / `ExerciseCard Mode=View` look
- `03E2` and `03F` use the existing `230_Routine_Edit` / `ExerciseCard Mode=Edit` look
- the existing exercise thumbnail, muscle tag, exercise title, set-table visual hierarchy, and edit-card controls are reused rather than replaced by a newly invented compact-card style

The create/edit screens do not restore the old weekday selector when reusing the `230` card look.

### Exercise-card header content / attachment display — PO APPROVED

Rules:

- do **not** repeat summary text such as `3세트 · 8–12회` under the exercise name when the same card already exposes the full `SET / KG / REPS` rows below
- ordinary exercises show only the muscle/body-area tag and exercise name in the card header
- when an exercise has a separately selected cable attachment, show the selected attachment as a small **separate status chip** beside the muscle/body-area tag
- example: `등` + `맥그립 미디엄` above `랫풀다운`
- the attachment chip is display-only in the card; selection still occurs in the exercise-add flow
- do not show an empty placeholder line for exercises without an attachment
- exercise identities whose attachment is already part of the canonical exercise name do not need the same attachment repeated as an extra chip

This display rule is consistent with `docs/ux-decisions/2026-09-03-cable-attachment-active-workout.md` and does not finalize the remaining attachment taxonomy / allowed-attachment mapping.

### Card overflow menu — PO APPROVED

The `⋮` overflow interaction for Group 03 is now defined and no longer open.

Shared local Figma components:

- `Overflow Menu Item` — node `415:876`
- `Overflow Menu` — node `416:884`
- local Effect Style: `shadow/menu`

Approved menu variants:

**Routine card (`03A`)**

1. `편집`
2. `복제`
3. `삭제`

**Exercise card (`03E2`, `03F`)**

1. `운동 교체`
2. `운동 삭제`

Visual/interaction rules:

- anchored popup opened from the card `⋮` action
- no dim layer
- outside tap closes the menu
- align to the `⋮` side and open downward by default; if it would overflow the viewport, reposition inward rather than clipping
- width: `152px`
- Routine height: `148px`
- Exercise height: `104px`
- each menu item height: `44px`
- menu surface: `bg/elevated`
- border: `border/subtle`
- radius: `radius/md`
- shadow: `shadow/menu`
- ordinary item text: `body/01 + text/primary`
- destructive item text: `body/01 + state/danger`
- all `⋮` touch targets in `03A / 03E2 / 03F` are verified at `44 x 44`

The temporary 03A trial overlay used for visual approval was removed after componentization; canonical screens remain in their normal closed-menu states.

### Active-workout routine access guard

The previous `03G_Routine_Readonly` state and inline notice `운동 진행 중 · 루틴 편집은 종료 후 가능` are no longer part of the canonical routine flow.

Approved direction:

- while a workout session is active, block entry into routine-management surfaces at the entry point rather than navigating into a read-only routine screen
- keep the user on the current screen when the blocked entry is attempted
- provide a lightweight toast-style message explaining that routine management is unavailable during the active workout
- exact toast component, placement, duration, and final copy are deferred to the later interaction-state pass

Figma action:

- removed `03G_Routine_Readonly` — old node `34:1499`
- no separate read-only routine screen is required for this state

## Screen-height rule

Use `780px` as the base Figma screen height when the content fits.

If the real composed content exceeds 780px, the Figma frame is allowed to grow rather than compressing or clipping the content.

Current canonical heights:

- 03A: `780`
- 03B: `780`
- 03C: `2672`
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
  - SET/KG/REPS labels → `caption/01 + text/tertiary`
  - set/value text → `body/01 + text/primary`
- duplicated exercise-summary line under the title is hidden in canonical Group 03 routine cards
- selected attachment, when applicable, is shown as a separate compact status chip in the card header
- CTA text uses `button/cta`; Primary CTA text uses `text/on-brand`
- all Group 03 headers use the balanced local `Nav Header` variants with fixed left/right action slots
- root list states use `LeftAction=None`; child/detail/create/edit states use `LeftAction=Back`
- `03C` and `03D` now share the same summary/content spacing model; `03C` alone omits the header Edit action
- new Overflow Menu components use local semantic color/radius/typography tokens and `shadow/menu`; audit found no unbound menu fills/strokes

## QA result

PASS:

- weekday-related text in canonical Group 03 states: `0`
- canonical screen backgrounds: local `bg/default`
- base-height screens normalized to `360 x 780`
- long-content screens remain unconstrained above 780
- `03C` uses the same `총 운동 / 예상 시간 / 총 세트` summary pattern as `03D`
- `03C` header title = routine name; RightAction = `None`
- `03C` CTA = `운동 시작`
- `03D` CTA = `운동 시작`; RightAction = `Edit`
- `03E` save CTA = Disabled until a valid routine is composed
- `03F` / `03E2` use the original edit-card visual pattern
- duplicate `3세트 · 8–12회` header summary removed from routine ExerciseCards
- attachment-capable example (`랫풀다운`) shows `맥그립 미디엄` as a separate header status chip
- `03A / 03E2 / 03F` overflow-menu actions are defined
- all overflow triggers use `44 x 44` touch targets
- reusable Overflow Menu components and local token/effect bindings verified
- obsolete `03G_Routine_Readonly` removed from canonical Group 03

## Non-blocking implementation content follow-up

The reused `210/230` ExerciseCard visual samples still contain legacy/sample set-table values such as `W / D / F`, `80 KG`, and `35 REPS`.

These remain **visual sample content, not final prescription policy** and are not a blocker for closing the Group 03 Figma design pass.

Before implementation handoff, routine-template data shown inside the set table must still be reconciled with the confirmed product rules:

- `DEC-010`: do not guess a first working weight from demographics; actual first-load calibration belongs in workout execution
- `DEC-012`: self-built routines require explicit set count + target rep prescription

Do not treat the current sample `80 / 35` values as approved default routine data.

A separate flow-policy reconciliation is also required because the approved 03C screen now uses `운동 시작`, while `DEC-014` still documents `이 루틴 사용하기 → save → Home`.

No Cursor implementation handoff yet.
