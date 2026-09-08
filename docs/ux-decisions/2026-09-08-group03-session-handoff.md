# Group 03 Routine Session Handoff — 2026-09-08

**Status:** SESSION CLOSED / PO APPROVED FIGMA STATE RECORDED
**Figma file:** `W3lZurXCXbThP67rF2xk2b`
**Page:** `03 루틴` — node `233:2074`

## Purpose

This file is the end-of-chat handoff for the 2026-09-08 Group 03 Routine Figma pass. It exists so a new conversation can recover the completed work without relying on chat history.

Primary detailed checkpoint:

- `docs/ux-decisions/2026-09-08-routine-figma-03-checkpoint.md`

Related product/UI references:

- `docs/ux-decisions/2026-09-03-cable-attachment-active-workout.md`
- `docs/ux-decisions/2026-09-08-figma-nav-header-balance.md`
- `docs/ux-decisions/2026-09-06-figma-local-design-system.md`

## Final Group 03 screen state

Canonical states:

1. `03A_Routine_List` — `34:1401`
2. `03B_Routine_Empty` — `34:1438`
3. `03C_추천루틴상세` — `40:2272`
4. `03D_Routine_Detail` — `34:1447`
5. `03E_Routine_Create` — `34:1457`
6. `03E2_Routine_Create_WithExercises` — `352:896`
7. `03F_Routine_Edit` — `34:1477`

`03G_Routine_Readonly` was removed. While a workout is active, routine-management entry is blocked at the entry point and later receives a toast rather than navigating to a read-only routine screen.

## Routine-card visual rule

PO approved restoration of the previously authored card language:

- `03C / 03D` use the original `210_Routine_Detail` / `ExerciseCard Mode=View` look
- `03E2 / 03F` use the original `230_Routine_Edit` / `ExerciseCard Mode=Edit` look
- long Figma frames may grow beyond 780px instead of compressing cards
- weekday-assignment UI remains removed

### Exercise-card header

Approved final rule:

- remove duplicated `3세트 · 8–12회`-style summary under the exercise name when the set table already exposes the prescription rows
- ordinary exercise header = body-area tag + exercise name
- attachment-capable exercise = body-area tag + selected attachment status chip + exercise name
- example: `등` + `맥그립 미디엄` above `랫풀다운`
- attachment selection still occurs during exercise-add flow; card chip is display-only
- do not create an empty second line or chip when no attachment exists

## Card overflow menu

PO approved anchored popup menus instead of bottom sheets for the small `⋮` action sets.

Shared local Figma assets in `MVP_공용_UI`:

- `Overflow Menu Item` — node `415:876`
- `Overflow Menu` — node `416:884`
- `OVERFLOW_MENU_MANAGEMENT` management frame — node `414:872`
- local Effect Style: `shadow/menu`

Routine card (`03A`) menu:

1. `편집`
2. `복제`
3. `삭제`

Exercise card (`03E2 / 03F`) menu:

1. `운동 교체`
2. `운동 삭제`

Visual behavior:

- width 152px
- menu item height 44px
- no dim layer
- outside tap closes
- default open direction is anchored below the `⋮`; reposition inward if viewport clipping would occur
- `bg/elevated`, `border/subtle`, `radius/md`, `shadow/menu`
- destructive text uses `state/danger`
- `⋮` touch targets verified at 44x44

The temporary 03A visual-trial overlay was removed after approval; canonical screens remain in closed-menu state.

## 03C recommended-routine detail alignment

PO changed `03C_추천루틴상세` to visually match `03D_Routine_Detail`.

Final visible rule:

- no separate recommendation-description card
- same `총 운동 / 예상 시간 / 총 세트` summary component
- same exercise-card spacing/layout
- header shows actual routine name
- CTA = `운동 시작`
- only visible header-control difference from 03D: `03C RightAction=None`, `03D RightAction=Edit`

Current 03C sample summary:

- 총 운동: 6개
- 예상 시간: 55분
- 총 세트: 18세트

## Important unresolved policy conflict — NOT MISSING

This is intentionally open and explicitly recorded, not lost:

- approved Figma 03C CTA is now `운동 시작`
- existing `DEC-014` still documents the older `이 루틴 사용하기 → save → Home` acceptance flow

Before implementation handoff, decide exactly when the recommended routine is persisted and what navigation semantics `운동 시작` implies. Do not silently rewrite DEC-014 until PO confirms the flow behavior.

Also still non-blocking implementation-content follow-up:

- legacy visual sample rows `W / D / F`, `80 KG`, `35 REPS` are not approved default prescription data
- reconcile those samples with DEC-010 / DEC-012 before implementation

## GitHub work recorded during this pass

Relevant commits include:

- `830c510` — balanced local Nav Header rule
- `eefd3e1` — preserve original back icon
- `1c72176` — restore right-action icon centering
- `a351b2c` — Group 03 routine Figma checkpoint
- `0169934` — active-workout routine access guard
- `31c6c1f` — exercise-card header + attachment chip approval
- `f955e08` — cable attachment card-display clarification
- `2e0ab1f` — close Group 03 routine Figma pass / overflow menu definition
- `17021cb` — align recommended-routine detail with standard routine detail

## Resume direction

Group 03 is closed for visual iteration unless implementation/runtime QA exposes a specific defect.

The repository `docs/CURRENT.md` still correctly identifies **Group 04 Exercise Library/Search QA** as the active next product/UX track. On a new conversation:

1. read `docs/CURRENT.md`
2. treat this Group 03 handoff + `2026-09-08-routine-figma-03-checkpoint.md` as completed context
3. continue from the Group 04 NEXT OPEN ITEM

No Cursor implementation handoff has been made for Group 03.