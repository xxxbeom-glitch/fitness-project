# MVP Light Theme Rollout — D / Petrol Teal Tonal

**Status:** APPLIED · DESIGN SYSTEM BINDING QA PASS · PO FINAL VISUAL LOCK PENDING
**Date:** 2026-09-17

## Scope

Product Owner explicitly requested applying the previously approved D light-theme rules to the consolidated MVP wireframe set, then requested that the result be rebuilt as a reusable design-system structure rather than a screen-by-screen recolor.

Canonical Figma file:
- `W3lZurXCXbThP67rF2xk2b`

Current consolidated screen page:
- `MVP_전체_와이어프레임` — `34:1076`
- 98 independent screen frames from Groups 01–08
- screens remain independent frames; no group wrapper frame was introduced
- page is visually classified by screen character into A–H labels (base/list/dashboard, detail/history/analysis, input/create/edit/settings, select/filter/replace, empty/error/exception, bottom sheets, popup/menu/toast/timer, dialogs/confirm)

## Light mode implementation

The existing `Colors` variable collection uses `Dark / Light` modes. The 98 MVP screen roots explicitly use `Colors / Light`.

Light baseline:
- Canvas `#F6F7F7`
- Surface `#FFFFFF`
- Subtle Surface `#EFF2F2`
- Border / Subtle `#EAEEED`
- Border / Default Control `#E3E8E7`
- Brand `#218F8A`
- Primary Action / CTA `#1A7E79`
- Primary Soft `#DCEFED`
- Text Primary `#151918`
- Text Secondary `#626866`
- Text Tertiary `#929A98`
- Success `#4F8A61`
- Danger `#C85A64`

Semantic roles added/retained for reusable binding:
- `action/primary`
- `brand/soft`
- `state/success`
- `state-bg/success`
- `state-bg/danger`
- `surface/track`
- `effect/card-shadow`
- `state-bg/pressed`

Dark values remain defined for the shared semantic roles; Light values map to the approved D palette.

## Registered shared styles

Variable-backed Paint Styles:
- `Surface/Canvas`
- `Surface/Content`
- `Surface/Subtle`
- `Surface/Track`
- `Brand/Primary`
- `Brand/Soft`
- `Action/Primary`
- `State/Success`
- `State/Danger`
- `Text/Primary`
- `Text/Secondary`
- `Text/Tertiary`
- `Text/OnAction`
- `Border/Default`
- `Border/Subtle`

Variable-backed Effect Style:
- `Elevation/Card`
  - `0 2px 8px 0`
  - Light shadow color resolves to `#151918` at 5%
  - shadow color is bound through `effect/card-shadow`

## Common component migration

Theme-sensitive component behavior is now defined at shared masters / semantic bindings rather than relying on one-off screen colors.

Updated shared component roles include:
- CTA Button — Primary uses `action/primary`; primary text uses `text/on-brand`; secondary uses semantic border/text roles
- Compact Button — same action/secondary semantics
- OptionItem — unselected `text/primary`; selected label/check `brand/primary`
- WheelPicker/SingleColumn — selected `text/primary`, adjacent values `text/secondary`, selection lines `border/subtle`
- DialogCard / DialogButtons — solid Surface, semantic text/action/border, no standard GLASS
- ActionSheet — solid Surface, no standard GLASS
- ManualTimerPopup — solid Surface, semantic track/brand/text, no standard GLASS
- StatusToast — solid Surface + shared elevation, no standard GLASS
- segmented controls — selected soft state uses `brand/soft`, active label uses `brand/primary`
- shared content cards — Surface + no outer border + shared `Elevation/Card`
- shared dividers / icon containers / row indicators — rebound to semantic surface/border/text roles
- AppLogo — same white logo artwork uses `DIFFERENCE` blend mode so it remains visible on both light and dark neutral canvases

## Remote/shared-library cleanup

The previous Group 08/shared dependency left some theme-sensitive instances bound to external variables. These were localized or swapped to existing local Common_Component equivalents.

Localized/shared assets include the needed pause, chevron-down, close-circle, Google mark, and image icon where no suitable local master existed. Existing local equivalents were reused for CTA, OptionItem, check, plus, chevron-right, DialogCard, and DialogButtons.

Final read-back across `MVP_전체_와이어프레임` + `Common_Component`:
- remote component instances: `0`
- external variable bindings: `0`

## Surface behavior applied

- all 98 MVP screen roots explicitly use `Colors / Light`
- content cards / grouped list cards use white Surface, no outer border, subtle shared elevation
- control cells retain explicit default control borders where applicable
- CTA/action color is separated from general brand/accent color
- success indicators are separated from interactive brand color
- selected metric segment uses Primary Soft
- progress tracks use dedicated `surface/track`
- Workout LiveBar keeps the approved local light treatment
- standard dialogs, sheets, action sheets, timer popups, and toast surfaces use solid Surface; standard GLASS is removed
- legacy dark raw paints and earlier manual light-color overrides were rebound to local semantic variables/styles

## Screenshot QA

A–H contact-sheet screenshot QA was run over all 98 MVP screens at readable scale.

Visual groups checked:
- A base / list / dashboard
- B detail / history / analysis
- C input / create / edit / settings
- D select / filter / replace
- E empty / error / exception
- F bottom sheets
- G popup / menu / toast / timer
- H dialogs / confirm

Screenshot QA found remaining migration gaps after the first pass and they were corrected:
- light canvas AppLogo was invisible -> theme-adaptive logo treatment applied
- Rest Time WheelPicker retained old light-on-dark text -> rebound to local semantic text/border roles
- Profile / Account sheet Cancel actions retained external dark-theme text -> swapped to local CTA system
- external OptionItem variants retained brand color on unselected rows -> all OptionItem instances normalized by selected/unselected state
- inquiry/category and unit-selection sheets inherited the same OptionItem issue -> corrected through the same shared rule

D and F groups were re-screenshotted after the correction and PASS.

Final structural read-back:
- MVP screen frames: `98`
- screen roots in Light mode: `98 / 98`
- remote component instances: `0`
- external variable bindings: `0`
- standard visible GLASS / BACKGROUND_BLUR effects: `0`
- remaining unbound theme-sensitive palette paints: `0`
- temporary QA contact-sheet frames removed after inspection

Representative visual QA PASS includes:
- `01A_Login`
- `03A_Routine_List_My`
- `04A_Filter_Equipment_Page`
- `04I_Custom_Equipment_Select`
- `05A_Workout_Weight`
- `05Q_ManualTimer_Running`
- `06A_Completion_Default`
- `07A_Analysis_Home`
- `07D_Workout_History_Detail`
- `08A_Settings_Home`
- `08C_Unit_Settings_Sheet`
- `08D1_Default_Rest_Time_Sheet`
- `08G1_Inquiry_Category_Sheet`
- `03EF_Routine_Unsaved_Confirm`

## Radius boundary

This rollout applies the approved light-theme color/surface system and shared semantic binding structure.

The separate size-aware radius experiment recorded in `2026-09-17-light-radius-exploration-checkpoint.md` is still under Product Owner review and was **not** propagated across the 98 MVP screens in this rollout.

## Product / development boundary

- Groups 03–08 remain product/UX closed; this is a visual design-system migration, not a flow/policy reopen.
- Group 02 product refinement remains deferred unless separately requested.
- no Cursor/development handoff.
- final visual lock waits for Product Owner review of the applied MVP light-theme set.
