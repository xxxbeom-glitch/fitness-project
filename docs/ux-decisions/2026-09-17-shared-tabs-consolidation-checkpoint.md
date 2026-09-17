# Shared Tabs Consolidation — Figma Design-System Checkpoint

**Date:** 2026-09-17  
**Status:** FIGMA REFLECTED · FOCUSED QA PASS · PRODUCT FLOW UNCHANGED · NO CURSOR HANDOFF

## Scope

This checkpoint records a shared design-system cleanup requested by the Product Owner after the consolidated Light-theme/component migration.

The change does not reopen Group 03, Group 04, or Group 07 product behavior. It only removes duplicated tab component structures and normalizes the visual width rule.

Canonical Figma:
- file `W3lZurXCXbThP67rF2xk2b`
- page `MVP_전체_와이어프레임` — `34:1076`
- shared component page: `Common_Component`

## Decision

`RoutineTabs` and `PeriodTabs` use one shared `Tabs` component family.

The duplicated Group 07-only `AnalysisPeriodTabs` component set is no longer needed.

### Canonical shared Tabs

- component set: `Tabs` — `638:3298`
- parent: `SHARED_NAVIGATION_COMPONENTS` — `1773:1016`
- current variant axes:
  - `Count = 2 / 3 / 4`
  - `Active = 1 / 2 / 3` for currently authored variants
  - `Indicator = None / Underline`
  - `State = Default / Pressed`

Visible labels remain instance/component text content rather than being encoded as semantic product meaning in the shared component name.

## Full-width rule

Tabs used as page-level navigation fill the full 360px screen width with no outer horizontal margin.

Approved representative sizing:
- 2 tabs: `360 × 54`, each tab `180px`
- 3 tabs: `360 × 54`, each tab `120px`
- 4 tabs: `360 × 54`, each tab `90px`
- page-level tab instance position: `x = 0`

This supersedes the older RoutineTabs presentation where the component itself carried left/right inset and visually looked cut off relative to the screen edges.

## Current usage

### Group 03 Routine

Representative `RoutineTabs` now resolve to shared `Tabs`:
- `03A_Routine_List_My` — `1616:2034`
- `03B_Routine_Empty` — `1619:2043`
- `03A_Routine_List_Recommended` — `1616:2045`

Representative configuration:
- `Count=2`
- `Indicator=None`
- full-width `360px`

### Group 04 Exercise Detail

Existing detail tabs also remain on the same shared `Tabs` component set.

Current instances use the shared component with 3-tab configurations and no separate Group 04 tab component was introduced.

### Group 07 Analysis

`PeriodTabs` now resolve to the same shared `Tabs` set:
- `07A_Analysis_Home` — `1027:593`
- `07B_BodyArea_Detail` — `887:1033`
- `07B_BodyArea_Detail_Empty` body stack — `1057:636`

Representative configuration:
- `Count=3`
- `Indicator=Underline`
- full-width `360px`

## Removed duplicate

Obsolete component set:
- `AnalysisPeriodTabs` — `961:1368`

Before removal:
- all three old variants had instance count `0`
- live Group 07 PeriodTabs had already been switched to shared `Tabs`

The obsolete set was removed from `07_GROUP_CONFIRMED_COMPONENTS` after zero-instance verification.

## Focused QA

PASS:
- RoutineTabs and PeriodTabs both resolve to `Tabs` — `638:3298`
- RoutineTabs render at `x=0 / width=360`
- PeriodTabs render at `x=0 / width=360`
- 2-tab representative width is `180px` per tab
- 3-tab representative width is `120px` per tab
- Group 03 screenshot confirms the routine tab row no longer appears horizontally clipped/inset
- Group 07 screenshot confirms the period tab presentation remains visually intact
- old `AnalysisPeriodTabs` variants had zero instances before deletion
- no product-flow behavior was changed

## Result

**PASS — page-level Tabs are consolidated into one shared component family and use a full-width screen rule.**

Groups 03, 04, and 07 remain CLOSED from a Product/UX perspective.

**NO CURSOR IMPLEMENTATION HANDOFF.**
