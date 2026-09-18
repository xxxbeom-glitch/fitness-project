# Group 04 — Custom Exercise Save Destination

**Date:** 2026-09-15  
**Status:** PO APPROVED / PRODUCT POLICY LOCKED / 2026-09-18 SAVE-ACTION AMENDMENT / FIGMA REFLECTED / FOCUSED QA PASS / NO CURSOR HANDOFF

## Decision

### Create (`04E_Custom_Create`)
- successful Save returns to the exercise list/add-exercise flow
- the newly created custom exercise is immediately selected
- the destination therefore uses the existing selected-list state/pattern (`04B_Search_Selected`) rather than adding a separate completion screen
- the user can continue selecting exercises or complete the existing `N개 운동 추가` action

### Edit (`04F_Custom_Edit`)
- successful Save returns to that exercise's detail screen
- the detail reflects the updated metadata
- do not send the user back to the general exercise list after a normal edit

## Rationale

- create is part of the exercise-picking task, so returning to the picker preserves the user's original task and avoids an extra step
- auto-selecting the newly created exercise matches the intent of creating it from the add-exercise flow
- edit originates from an existing exercise detail context, so returning to detail preserves context
- external references reviewed for this decision include Hevy, Bevel, and Lifesum create-exercise flows; the final Fitness behavior follows the current Fitness IA and existing Group 04 states rather than copying a competitor UI

## Scope

This locks navigation behavior only. No new component, token, visual pattern, or completion screen is required.

## Next

Continue Group 04 completion work with:
1. final delete-confirmation state in Figma using the existing Dialog pattern
2. no-media Exercise Detail representative state
3. scoped final Group 04 closure QA


## Save action pattern — 2026-09-18 amendment

PO-approved save affordance for custom exercise create/edit:

### Common rule
- screen data commit uses a bottom Primary CTA labeled `저장`
- header-right is reserved for secondary/context actions, not the primary save commit
- do not expose both header Save and bottom Save/Confirm for the same state

### Create
- `04E_Custom_Create`
  - header right: none
  - bottom `저장`: Disabled until required fields are valid
- `04E_Custom_Create_Valid`
  - header right: none
  - bottom `저장`: Default/enabled
- current required fields remain `운동명 / 주 타겟 근육 / 기록 방식`
- optional `장비 / 보조 타겟 근육` do not block Save

### Edit
- `04F_Custom_Edit`
  - header right: Trash
  - bottom `저장`: Disabled when there is no unsaved change; enabled after a valid change
- `04F_Custom_Edit_HistoryLocked`
  - same action hierarchy
  - recording-type lock policy remains unchanged
- the old bottom `운동 삭제 / 확인` DualCTA is removed
- delete entry is the header Trash action and still routes to the existing delete-confirm dialog

### Unsaved exit
- `04EF_Custom_Unsaved_Confirm` keeps the bottom Save affordance in the obscured background state
- header Save is not used

## Figma reflection — 2026-09-18

Canonical file: `W3lZurXCXbThP67rF2xk2b`

Shared component:
- `CustomExerciseSaveFooter`
- variants: `State=Default / State=Disabled`
- nested shared `CTA Button` remains linked

Applied states:
- `04E_Custom_Create` — bottom Save Disabled / header right None
- `04E_Custom_Create_Valid` — bottom Save Default / header right None
- `04EF_Custom_Unsaved_Confirm` — bottom Save Default / header right None
- `04F_Custom_Edit` — bottom Save Disabled / header right Trash
- `04F_Custom_Edit_HistoryLocked` — bottom Save Disabled / header right Trash

Focused read-back QA: PASS.
