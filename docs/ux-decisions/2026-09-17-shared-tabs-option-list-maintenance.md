# Shared Tabs / Selection Lists — Design-System Maintenance

**Date:** 2026-09-17  
**Status:** PO APPROVED · FIGMA REFLECTED · FOCUSED QA PASS · PRODUCT FLOW UNCHANGED · NO CURSOR HANDOFF

## Scope

Post-rollout design-system maintenance requested and approved by the Product Owner on the consolidated MVP Figma page.

Canonical Figma:
- file `W3lZurXCXbThP67rF2xk2b`
- page `MVP_전체_와이어프레임` — `34:1076`
- shared component page `Common_Component`

This maintenance does not reopen closed product flows. It normalizes shared navigation selection presentation, selection-list visuals, and the Light text-primary tone.

## Light text-primary tone

The Light value of semantic `text/primary` was softened from the earlier near-black baseline:
- previous: `#151918`
- current / PO approved: `#242927`

Dark mode was not changed.

## Shared Tabs — active underline

Page-level tabs remain on the shared `Tabs` component set:
- `Tabs` — `638:3298`
- full-width rule: `360 × 54`, `x=0`
- equal-width items within the row

Active-selection presentation is normalized across the live page-level tab families:
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

## Selection indicator rule

The Product Owner approved one clear rule for list selection feedback:

- immediate/applied selection lists → shared `OptionItem` + right-side check
- selection that is only committed after an explicit confirmation CTA → `RadioButton`

Therefore the following immediate-selection/settings lists use check indicators:
- `04I_Custom_Equipment_Select`
- `04J_Custom_PrimaryMuscle_Select`
- `04K_Custom_SecondaryMuscle_Select`
- `04L_Custom_RecordingType_Select`
- `04A_Filter_Equipment_Page`
- `04A_Filter_BodyPart_Page`
- `08C_Unit_Settings_Sheet`
- `08D2_Timer_End_Sound`
- `08H_Language_Settings`

`08D2_Timer_End_Sound` and `08H_Language_Settings` were migrated from RadioButton presentation to shared `OptionItem` + check presentation.

Intentional radio-button exception:
- `05G_Exercise_Replace_Suggest`
- `05G2_Exercise_Replace_SecondBatch`
- `05H_Exercise_Replace_Selected`

Those screens require choosing an item first and then pressing `선택 완료`, so RadioButton continues to communicate a pending choice before explicit confirmation.

## Bottom-sheet option-list normalization

Selection-list bottom sheets that use the shared `OptionItem` pattern follow one visual rule:
- list width `320`
- each `OptionItem` height `52`
- list background `bg/default`
- list corner radius `12`
- clip content enabled at the list container
- between-row divider `1px` using `border/subtle`
- no divider after the last option
- unselected item text uses `text/primary`
- selected item uses `brand/primary` label/check state through the existing `OptionItem` variant

Verified/normalized bottom-sheet list containers include:
- `04H_Exercise_Attachment_Selection` — `AttachmentOptions`
- `08C_Unit_Settings_Sheet` — `OptionsList`
- `08B1_Profile_Photo_Sheet` — `OptionsList`
- `08B2_Account_Management_Sheet` — `OptionsList`
- `08G1_Inquiry_Category_Sheet` — `CategoryOptions`

Corrections in this pass:
- 04H attachment list: explicit shared dividers added between rows
- 08G1 inquiry category list: background/radius/divider treatment normalized to the same OptionList rule

## Full-page selection-list normalization

Full-page selection lists now use the same row language as the sheet lists while keeping a page-context container treatment:
- shared `OptionItem` rows
- width `320`
- row height `52`
- `bg/surface` list container
- corner radius `12`
- clip content enabled
- `1px border/subtle` dividers between rows
- no divider after the last row
- selected item uses `brand/primary` label + right-side check

Normalized full-page lists:
- `04I_Custom_Equipment_Select` — 9 items / 8 dividers
- `04J_Custom_PrimaryMuscle_Select` — 12 items / 11 dividers
- `04K_Custom_SecondaryMuscle_Select` — 13 items / 12 dividers
- `04L_Custom_RecordingType_Select` — 4 items / 3 dividers
- `04A_Filter_Equipment_Page` — 10 items / 9 dividers
- `04A_Filter_BodyPart_Page` — 9 items / 8 dividers

## Intentional exceptions

- `ActionSheet` menus remain a separate action-menu pattern and are not converted into selection lists.
- `WheelPicker/SingleColumn` remains a wheel-picker pattern and is not converted into an OptionList.
- replacement-exercise RadioButton flows remain separate because selection is not committed until the user presses `선택 완료`.

## QA

PASS:
- live page-level Tabs with missing active underline: `0`
- checked bottom-sheet OptionList pattern issues: `0`
- migrated immediate-selection screens still using RadioButton among the approved targets: `0`
- normalized full-page selection containers use Radius `12`, `bg/surface`, clipping, shared `OptionItem`, and `border/subtle` dividers
- representative screenshot QA PASS:
  - `03A_Routine_List_Recommended`
  - `04D_Exercise_Detail_Info`
  - `07A_Analysis_Home`
  - `04H_Exercise_Attachment_Selection`
  - `04I_Custom_Equipment_Select`
  - `04J_Custom_PrimaryMuscle_Select`
  - `04K_Custom_SecondaryMuscle_Select`
  - `04L_Custom_RecordingType_Select`
  - `04A_Filter_Equipment_Page`
  - `08C_Unit_Settings_Sheet`
  - `08D2_Timer_End_Sound`
  - `08G1_Inquiry_Category_Sheet`
  - `08H_Language_Settings`

## Boundary

Groups 03, 04, 05, 07, and 08 remain CLOSED from a Product/UX behavior perspective. This is design-system maintenance only.

The separate size-aware radius system remains preview-only and is **not approved for MVP-wide propagation**.

**NO CURSOR IMPLEMENTATION HANDOFF.**
