# 2026-09-19 AppLogo primary color update

**Status:** PO APPROVED · FIGMA REFLECTED · FOCUSED QA PASS · NO CURSOR HANDOFF

## Decision

The default Tampin `AppLogo` used on light/general product surfaces uses the existing brand primary color.

- default AppLogo color: `brand/primary`
- current Light value: `#218F8A`
- splash exception: white Tampin wordmark remains white on the brand-primary splash background

No new color token or logo component was created.

## Figma

Canonical file:
- `W3lZurXCXbThP67rF2xk2b`

Shared master:
- `Common_Component > AppLogo` — `633:3251`
- size remains `139 × 28`

Implementation in Figma:
- existing wordmark image is reused as a mask
- fill layer is bound to existing `brand/primary`
- component identity is unchanged

Current live AppLogo instances:
- `01A_Login`
- `02A_Home_NoRoutine`
- `02B_Home_RoutineSelected`
- `02D_Home_Active`

Splash:
- `00_Splash` — `1961:8909`
- uses separate `TampinLogo_White` image
- white logo remains unchanged

## Focused QA

- AppLogo master = `139 × 28`
- live AppLogo instances = `4`
- all 4 resolve to shared master `633:3251`
- rendered logo pixels verified as brand-primary `#218F8A`
- Splash white logo unaffected
- whole-MVP instances = `1,855 / 1,855`
- missing main-component links = `0`
- non-`Common_Component` sources = `0`

Focused QA: **PASS**

## Development boundary

No Cursor / implementation handoff is authorized.
