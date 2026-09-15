# Group 04 — Custom Exercise Save Destination

**Date:** 2026-09-15  
**Status:** PO APPROVED / PRODUCT POLICY LOCKED / NO CURSOR HANDOFF

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
