# Group 08 — Status Toast Standardization

**Date:** 2026-09-17  
**Status:** PO-DIRECTED POST-CLOSURE MAINTENANCE · FIGMA APPLIED · QA PASS · GROUP 08 REMAINS CLOSED · NO CURSOR HANDOFF

## Trigger

The existing `08A1_Settings_Home_SubscriptionToast` used a full-width 320×52 feedback bar that did not match the approved toast references supplied by the PO:

- `634_Backup_Complete_Toast` — positive/success feedback
- `703_Server_Error` — negative/error feedback

The PO requested that these two references become the basis of the Fitness toast component and that `08A1` be updated to use it.

## Reference anatomy

Both reference toasts use the same compact structure:

- 48px height
- horizontal Auto Layout
- 16px horizontal padding
- 14px vertical padding
- 10px icon/message gap
- full pill radius
- 20px state icon
- SUIT Medium 13px / 18px message
- dark surface background
- positive = green check state
- negative = red X state

The reference examples are visual/anatomy references only. Fitness production components use Fitness local semantic variables rather than the imported Tracker APP variables used by the pasted references.

## Fitness componentization

Canonical file:
- `W3lZurXCXbThP67rF2xk2b`

Common component group:
- `08_GROUP_CONFIRMED_COMPONENTS` — `1602:989`

Created component sets:
- `StatusToastIcon` — `1624:998`
  - `Status=Positive` — `1624:999`
  - `Status=Negative` — `1624:1002`
- `StatusToast` — `1624:1009`
  - `Status=Positive` — `1624:1010`
  - `Status=Negative` — `1624:1013`

The message layer is consistently named `Message` and remains instance-overridable.

## Token binding

Existing Fitness variables reused:
- `bg/surface`
- `brand/primary`
- `state-bg/danger`
- `state/danger`
- `text/primary`
- `spacing/10`
- `spacing/14`
- `spacing/16`
- `radius/full`

One missing paired semantic state token was added after visual QA showed that paint opacity was not preserved reliably when binding the positive icon background directly to `brand/primary`:
- `state-bg/success` — `VariableID:1625:1002`
- value = Fitness emerald/brand success color at 15% alpha
- scopes = Frame Fill / Shape Fill

No other new foundation token or component family was introduced.

## 08A1 application

Updated screen:
- `08A1_Settings_Home_SubscriptionToast` — `1601:1015`

Removed:
- old `SubscriptionUnavailableToast` full-width 320×52 frame

Applied:
- `StatusToast_SubscriptionUnavailable` — `1624:6905`
- main component = `StatusToast / Status=Negative` — `1624:1013`
- message = `준비 중인 기능이에요.`
- size after text override = 174×48
- horizontally centered
- y = 72, matching the approved top drop-down toast position used by `634_Backup_Complete_Toast` and `703_Server_Error`
- toast is a transient overlay that appears from the top rather than a bottom feedback bar

The subscription-management product behavior is unchanged: the row remains a future-facing stub and tapping it shows unavailable/preparation feedback rather than navigating to a management screen.

## Reference cleanup

The two reference frames now also resolve through the new Fitness common component:
- `703_Server_Error` Toast instance `1620:6890` → `StatusToast / Negative`
- `634_Backup_Complete_Toast` Toast instance `1620:6908` → `StatusToast / Positive`

Temporary pasted reference masters no longer remain as local masters on the Group 08 production page.

## QA

Visual QA PASS:
- Positive reference preserves dark pill + tinted green circular state + visible check mark + white message
- Negative reference preserves dark pill + tinted red circular state + visible X mark + white message
- `08A1` now matches the compact negative-toast visual language
- `08A1` toast position matches the top drop-down reference position at y=72
- no clipping at 360×780

Structural QA PASS:
- `08A1` toast main-component link → `Common_Component`
- `703_Server_Error` toast main-component link → `Common_Component`
- `634_Backup_Complete_Toast` toast main-component link → `Common_Component`
- external Tracker APP variable IDs inside `StatusToastIcon / StatusToast` = `0`
- local component/component-set masters on Group 08 production page = `0`

## Closure status

This is a targeted post-closure component/visual correction requested by the PO. It does not reopen the previously locked Group 08 product flows or other Group 08 screens.

**GROUP 08 REMAINS CLOSED.**  
**NO CURSOR IMPLEMENTATION HANDOFF.**
