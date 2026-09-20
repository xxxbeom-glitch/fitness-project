# 2026-09-20 Bottom App Bar Root Placement

**Status:** PO APPROVED · FIGMA REFLECTED · FOCUSED QA PASS · APP-SHELL NAV FIX CLOSED · NO CURSOR IMPLEMENTATION

## Decision

BottomAppBar is the global navigation for the four top-level product areas only:

- 홈
- 루틴
- 분석
- 설정

It is **not** shown as a separate navigation element on every screen.

## Visibility rule

### Show BottomAppBar

Only on top-level root surfaces:

- `02A_Home_NoRoutine` — `1346:686` — `Active=홈`
- `02B_Home_RoutineSelected` — `1329:593` — `Active=홈`
- `02D_Home_Active` — `1346:710` — `Active=홈`
- `03A_Routine_List` — `34:1401` — `Active=루틴`
- `03B_Routine_Empty` — `34:1438` — `Active=루틴`
- `07A_Analysis_Home` — `887:936` — `Active=분석`
- `08A_Settings_Home` — `1158:649` — `Active=설정`

### Hide BottomAppBar

Do not add a separate BottomAppBar on:

- Splash / Login / First-run setup
- Routine detail / create / edit
- Exercise search / filter / detail / custom exercise
- Active Workout and all workout sub-states
- Workout Completion
- Analysis detail / Body Area detail / Workout History detail
- Settings child pages / sheets
- Dialog / Sheet / Menu overlay state frames

Simple implementation heuristic:
- root destination surface → BottomAppBar
- child/detail/edit/transaction/workout surface with Back-style navigation → no separate BottomAppBar

## Overlay rule

When a dialog, sheet, or menu is shown from a root surface:
- the root BottomAppBar may still exist underneath in implementation
- the overlay/dim layer owns interaction
- BottomAppBar is not independently interactive through the overlay
- overlay frames do not duplicate the BottomAppBar

## Navigation behavior

- tapping a different tab switches to that area’s root destination
- tapping the already-active tab performs no additional MVP action
- root switching does not implicitly discard or mutate current user data
- if an Active Workout exists, switching to Routine / Analysis / Settings does not end it
- returning to Home while an Active Workout exists resolves to `02D_Home_Active`
- preserve the one-active-workout invariant

## Placement contract

Canonical component:
- `Common_Component > BottomAppBar` — `2078:2401`

Reference:
- `REF_하단앱바_화면내배치예시` — `2075:8536`

Authored 360×780 viewport placement:
- x = `0`
- y = `641`
- component = `360 × 78`

The reference intentionally leaves bottom space beneath the floating app-bar container.

For authored long scroll-composition frames such as Analysis / Settings:
- the Figma instance remains at the first 780px viewport position `y=641`
- this represents **fixed viewport navigation**, not content-flow placement
- production scrolling must reserve sufficient bottom inset/padding so the final scrollable content can move fully above the BottomAppBar
- do not place the bar at the end of the long document as if it were page footer content

## Figma reflection

Placed local BottomAppBar instances:

- `02A_Home_NoRoutine` → `2081:8183`
- `02B_Home_RoutineSelected` → `2081:8215`
- `02D_Home_Active` → `2081:8247`
- `03A_Routine_List` → `2081:8279`
- `03B_Routine_Empty` → `2081:8311`
- `07A_Analysis_Home` → `2081:8343`
- `08A_Settings_Home` → `2081:8375`

## Focused QA

PASS:
- BottomAppBar instances on canonical MVP page = `7`
- unexpected non-root BottomAppBar instances = `0`
- all seven main components resolve through `Common_Component`
- all seven positions = `x=0 / y=641 / 360×78`
- active variant matches each root destination
- 02/03 static visible content does not overlap the BottomAppBar
- 07A / 08A use long authored scroll compositions; placement represents fixed first-viewport navigation and production requires bottom content inset
- representative screenshots generated for Home / Routine / Analysis / Settings
- whole-MVP instances after placement = `1,862`
- missing main-component links = `0`
- component sources outside `Common_Component` = `0`

## Result

**PASS — the primary BottomAppBar visual/component/visibility/placement contract is now closed for MVP design handoff.**

This closes the prior primary-bottom-navigation targeted FIX.

No other screen-design or Product Decision Needed item is resolved by this checkpoint.
