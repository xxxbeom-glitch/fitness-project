# Shared Tabs / Bottom-Sheet Option List — Design-System Maintenance

**Date:** 2026-09-17  
**Status:** FIGMA REFLECTED · FOCUSED QA PASS · PRODUCT FLOW UNCHANGED · NO CURSOR HANDOFF

## Scope

Post-rollout design-system maintenance requested by the Product Owner on the consolidated MVP Figma page.

Canonical Figma:
- file `W3lZurXCXbThP67rF2xk2b`
- page `MVP_전체_와이어프레임` — `34:1076`
- shared component page `Common_Component`

This maintenance does not reopen closed product flows. It normalizes shared navigation selection presentation, bottom-sheet option-list visuals, and the Light text-primary tone.

## Light text-primary tone

The Light value of semantic `text/primary` was softened from the earlier near-black baseline:
- previous: `#151918`
- current: `#242927`

Dark mode was not changed.

## Shared Tabs — active underline

Page-level tabs remain on the shared `Tabs` component set:
- `Tabs` — `638:3298`
- full-width rule: `360 × 54`, `x=0`
- equal-width items within the row

Active-selection presentation is now normalized across the live page-level tab families:
- Group 03 Routine tabs
- Group 04 Exercise Detail tabs
- Group 07 Analysis period tabs

Current active rule:
- selected tab label uses `brand/primary`
- selected tab receives a `2px` bottom underline bound to `brand/primary`
- inactive tabs use their existing secondary text role

For the 2-tab Routine case, missing Underline variants were added to the existing shared `Tabs` component family rather than creating a new component.

Focused read-back:
- Group 03 Routine tabs: `Indicator=Underline`
- Group 04 Exercise Detail tabs: `Indicator=Underline`
- Group 07 Analysis period tabs: `Indicator=Underline`
- live tab widths remain full-screen and evenly distributed

## Bottom-sheet option-list normalization

Selection-list bottom sheets that use the shared `OptionItem` pattern now follow one visual rule:
- list width `320`
- each `OptionItem` height `52`
- list background `bg/default`
- list corner radius `12`
- clip content enabled at the list container
- between-row divider `1px` using `border/subtle`
- no divider after the last option
- unselected item text uses `text/primary`
- selected item uses `brand/primary` label/check state through the existing `OptionItem` variant

Verified/normalized list containers include:
- `04H_Exercise_Attachment_Selection` — `AttachmentOptions`
- `08C_Unit_Settings_Sheet` — `OptionsList`
- `08B1_Profile_Photo_Sheet` — `OptionsList`
- `08B2_Account_Management_Sheet` — `OptionsList`
- `08G1_Inquiry_Category_Sheet` — `CategoryOptions`

Corrections in this pass:
- 04H attachment list: explicit shared dividers added between rows
- 08G1 inquiry category list: background/radius/divider treatment normalized to the same OptionList rule

Intentional exceptions:
- `ActionSheet` menus remain a separate action-menu pattern and are not converted into selection lists.
- `WheelPicker/SingleColumn` remains a wheel-picker pattern and is not converted into an OptionList.

## QA

PASS:
- live page-level Tabs with missing active underline: `0`
- checked bottom-sheet OptionList pattern issues: `0`
- representative screenshot QA PASS:
  - `03A_Routine_List_Recommended`
  - `04D_Exercise_Detail_Info`
  - `07A_Analysis_Home`
  - `04H_Exercise_Attachment_Selection`
  - `08C_Unit_Settings_Sheet`
  - `08G1_Inquiry_Category_Sheet`

## Boundary

Groups 03, 04, 07, and 08 remain CLOSED from a Product/UX behavior perspective. This is design-system maintenance only.

**NO CURSOR IMPLEMENTATION HANDOFF.**
