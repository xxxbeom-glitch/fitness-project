# Group 05 Active Workout — Figma Foundation Checkpoint

**Date:** 2026-09-10  
**Status:** ACTIVE / PRODUCT-UX + FIGMA  
**Scope:** current Group 05 canonical working pair only (`05A_Workout_Weight`, `05J_Reorder`)

## Product/visual basis

PO clarified that the Active Workout main screen should not be redrawn from the older Group 05 card treatment. The closest approved predecessor is `03E2_Routine_Create_WithExercises`, because users can already edit set KG / REPS there and its exercise-card visual language is the current Routine design-system reference.

Therefore Group 05 will proceed by reusing the Group 03E2 exercise-list/card structure and converting it into actual workout-execution state, rather than creating a parallel card system.

### Canonical Figma references

- file: `W3lZurXCXbThP67rF2xk2b`
- `03E2_Routine_Create_WithExercises` — `352:896`
- Group 05 page — `233:2076`
- `05A_Workout_Weight` — `148:1979`
- `05J_Reorder` — `36:3609`
- shared UI page — `105:3113`
- local component library frame — `635:788`

## 05A foundation sync

`05A_Workout_Weight` was rebuilt around the approved 03E2 exercise-list pattern while retaining workout-specific header/progress context.

Applied:

- copied the current 03E2 `ExerciseList` pattern into 05A
- reused the local `ExerciseCard` family from `MVP_공용_UI`
- switched cloned cards to local `Mode=Workout`
- preserved the 03E2 exercise-card visual hierarchy and editable KG / REPS structure
- preserved the exact 03 attachment status-chip visual/token treatment on the Lat Pulldown sample
- kept Group 05 workout actions (`운동 추가`, `운동 종료`)
- rebound both CTAs to the current local `CTA Button` component family
- updated sample routine/title/count only to stay coherent with the four-card 03E2 sample used as the current foundation

No new parallel exercise-card system was created.

## 05J component localization

The existing Reorder screen used external `ReorderRow`, external drag-handle icon, and external CTA assets.

Migration result:

- Nav Header: existing local Fitness component retained
- CTA Button: swapped to existing local Fitness CTA component
- `ReorderRow`: localized into `MVP_공용_UI` because no valid local equivalent existed
- `icon/drag-handle`: rebuilt as a true local vector component and bound to existing local `text/primary` color token
- five current reorder rows rebound to the local master
- exercise labels preserved

The first wrapper-based localization attempt was rejected during dependency QA because it still contained a hidden external nested instance. It was replaced with a clean local master before this checkpoint was closed.

## Dependency QA

Final screen-tree audit for the two current working screens:

| Screen | External component | External variable | External style |
| --- | ---: | ---: | ---: |
| `05A_Workout_Weight` | 0 | 0 | 0 |
| `05J_Reorder` | 0 | 0 | 0 |

`05A` visual read-back: PASS.  
`05J` visual read-back: PASS.

This audit is intentionally limited to the two Group 05 screens currently being used as the working foundation. Other old/helper frames that may exist elsewhere on the Group 05 page are not made canonical by this checkpoint.

## Design-system rule for the rest of Group 05

Continue in this order:

`existing local Variables/Styles → existing local Components → approved Group 03 patterns → add a new local asset only when no adequate equivalent exists`

Especially:

- active-workout exercise cards must continue from the Group 03E2/local `ExerciseCard` family
- attachment status chip must stay visually aligned with the approved Group 03 treatment
- do not reintroduce external component-library dependencies
- do not detach screen instances as a shortcut

## Active review decisions

### First-load weight guidance — DEFERRED

PO removed the current first-load weight-guidance concept from the Group 05 MVP flow for now.

Figma cleanup:

- removed `05G_Workout_FirstLoad` — `148:3043`
- removed dependent `05H_Workout_FirstFeel` — `148:3216`
- removed the current `첫 중량 가이드` / first-set-feel flow from the active Group 05 page

A replacement onboarding/guidance method may be designed later. Do not recreate this flow unless the PO explicitly reopens it.

## NEXT OPEN ITEM

Continue Product/UX and Figma together from the current `05A_Workout_Weight` foundation.

Review one workout interaction/state at a time, decide it, and immediately reflect it in Figma before moving on. Start with the common 05A workout structure and identify only the missing states/screens actually required for MVP.

No Cursor implementation handoff is implied.
