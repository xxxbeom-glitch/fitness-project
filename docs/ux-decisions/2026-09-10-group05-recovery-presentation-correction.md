# Group 05 Recovery Presentation Correction

**Date:** 2026-09-10  
**Status:** ACTIVE CHECKPOINT / PRODUCT-UX + FIGMA

## PO correction

The underlying active-session recovery requirement remains valid, but the previous `05P_Workout_Recovery` in-app presentation was not the intended UX.

Confirmed direction:

- an in-progress workout remains an active session across app interruption/restart
- do not present normal restoration as a special in-app `복구했어요` state
- surface the ongoing session through the system notification area
- when the user returns to the app, continue the same active workout session rather than showing an in-app recovery banner

Canonical decision:

- `docs/ux-decisions/2026-09-10-active-session-system-notification.md`

## Figma correction

Canonical file/page:

- file `W3lZurXCXbThP67rF2xk2b`
- page `05 운동 중` — `233:2076`

Applied:

- removed `05P_Workout_Recovery` — `148:3892`
- removed the `InlineBanner / Info` usage that existed only for that screen
- no replacement in-app recovery screen/banner was created

Focused read-back:

- no top-level `05P`/Recovery frame remains on the Group 05 page
- remaining visible Group 05 screens retain external component dependency 0 / missing main 0 / external Variable 0
- prior page-wide binding QA remains valid for the remaining visible screens

## NEXT OPEN ITEM

Continue Group 05 Product/UX + Figma from the existing Active Workout states. Do not redesign the system-notification surface yet unless the PO explicitly opens that item.

`05N_Workout_OtherRoutine` remains a product-flow review item. Hidden `05F_Workout_RestTimer_TBD` remains deferred.

No Cursor implementation handoff.
