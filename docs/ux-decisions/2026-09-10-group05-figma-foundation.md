# Group 05 Active Workout — Figma Foundation Checkpoint

**Date:** 2026-09-10  
**Status:** ACTIVE / PRODUCT-UX + FIGMA  
**Scope:** Group 05 Active Workout canonical page and current shared local component bindings

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
- preserved the 03 attachment status-chip visual/token treatment on the Lat Pulldown sample
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

## Initial dependency QA

Foundation audit:

| Screen | External component | External variable | External style |
| --- | ---: | ---: | ---: |
| `05A_Workout_Weight` | 0 | 0 | 0 |
| `05J_Reorder` | 0 | 0 | 0 |

`05A` visual read-back: PASS.  
`05J` visual read-back: PASS.

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

### 05I bottom sheet design-system correction

A second audit found one remaining design-system defect: the visible `05I_Workout_Menu` sheet shell was still a raw `FRAME`, so its visuals/tokens were aligned but the sheet itself was not actually bound to the local component library.

No adequate local BottomSheet component existed in `LOCAL_COMPONENT_LIBRARY`, so the approved Fitness sheet treatment was localized once and rebound without detaching screen instances.

Applied:

- created local `BottomSheet / Menu` component — `686:753`
- rebound `05I_Workout_Menu` sheet to local instance — `686:754`
- sheet top corners → local `radius/3xl`
- sheet bottom corners → local `radius/none`
- handle radius → local `radius/xxs`
- sheet spacing/fill remain bound to current local Fitness Variables
- title keeps current Fitness heading typography/style binding
- option rows use current local `OptionItem / Selected=False` component
- explicit dividers are bound to local `bg/elevated`
- overlay remains bound to local overlay color token
- 360×780 overlay/sheet presentation is retained

Focused QA on `05I_Workout_Menu` after rebinding:

- sheet shell main component: local `BottomSheet / Menu` (`686:753`)
- nested OptionItem components: local
- external component dependency: 0
- external variable dependency: 0
- visual read-back at 360×780: PASS

## Group 05 page-wide component binding QA — 2026-09-10

PO requested a full binding audit of the current `05 운동 중` page. The audit found no external dependency, but found several local design-system integrity defects: a standalone timer header component, stale visual/layout overrides on workout-card and dialog instances, raw attachment-chip frames, and a raw recovery banner.

Corrections applied:

- moved `LeftAction=Back, RightAction=Timer` (`668:4460`) into the existing local `Nav Header` component set (`360:2361`), preserving the same main-component ID used by current instances
- moved `icon/timer-refresh` (`668:4459`) into `LOCAL_COMPONENT_LIBRARY`
- rebuilt all visible Group 05 `ExerciseCard` instances from their existing local variant masters while preserving content/state overrides only
- removed stale card-level visual/layout overrides, including old `320×502` instance sizing against the canonical `320×492` workout master
- rebuilt visible `DialogCard` instances from their local masters while preserving copy/button state, removing stale visual overrides
- no adequate local attachment-status component existed, so the approved current treatment was localized once as `AttachmentTag` (`693:6035`) and the four visible raw attachment frames were rebound to instances
- no adequate local recovery-banner component existed, so the current approved treatment was localized once as `InlineBanner / Info` (`693:6039`) and `05P_Workout_Recovery` was rebound to it
- hidden `05F_Workout_RestTimer_TBD` remains deferred and was not promoted by this QA

Final visible-screen audit:

- visible Group 05 screens checked: `05A`, `05B`, `05C`, `05E`, `05I`, `05J`, `05K`, `05L`, `05M`, `05N`, `05O`, `05P`
- external component dependency: **0 on every visible screen**
- missing main component: **0 on every visible screen**
- external Variable dependency: **0 on every visible screen**
- missing Variable: **0 on every visible screen**
- stale visual/layout overrides on `ExerciseCard` / `DialogCard`: **0**
- visible raw `AttachmentTag` frame: **0**
- raw recovery `InlineBanner` frame in `05P`: **0**
- timer header is now a true `Nav Header` variant: `LeftAction=Back / RightAction=Timer`

Representative visual read-back after cleanup:

- `05A_Workout_Weight`: PASS
- `05I_Workout_Menu`: PASS
- `05K_End_Incomplete`: PASS
- `05P_Workout_Recovery`: PASS

This QA verifies design-system binding/structure only. It does not promote undecided Product/UX states such as `05N` to approved product policy.

## NEXT OPEN ITEM

Continue Product/UX and Figma together from the current `05A_Workout_Weight` foundation.

Review one workout interaction/state at a time, decide it, and immediately reflect it in Figma before moving on. Start with the common 05A workout structure and identify only the missing states/screens actually required for MVP.

No Cursor implementation handoff is implied.

## Latest Active Workout presentation cleanup — 2026-09-10 / PO APPROVED / FIGMA REFLECTED

PO requested a final simplification/localization pass on the common Active Workout card presentation.

Applied in canonical Figma:

- remove the redundant `운동 구성` section title from 05A-like Active Workout list states
- affected representative states: `05A_Workout_Weight`, `05K_End_Incomplete`, `05L_End_Complete`, `05M_Discard`
- local Active Workout `ExerciseCard` variants use Korean column labels rather than mixed English/Korean
- standard reps/weight cards: `세트 / 중량 / 횟수 / 완료`
- duration card keeps its specialized measurement: `세트 / 중량 / 시간 / 완료`
- assisted card keeps its specialized measurement: `세트 / 보조중량 / 횟수 / 완료`
- Group 03 `Mode=View` / `Mode=Edit` variants were not reopened by this Group 05-only change

Focused read-back QA:

- `운동 구성` remaining count on 05A/05K/05L/05M = 0
- Active Workout component variants contain no remaining `SET` or `KG` labels
- 05A visible instances read back as `세트 / 중량 / 횟수 / 완료`
- 05A screenshot read-back after the change = PASS
- no new token/component/style/variable created
