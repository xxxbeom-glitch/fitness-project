# Group 08 — Settings / Account final closure QA

**Date:** 2026-09-16  
**Status:** FINAL CLOSURE QA PASS · GROUP 08 CLOSED · NO CURSOR HANDOFF

## Scope

Final Product/UX + Figma closeout for Group 08 Settings / Account.

Canonical Figma:
- file `W3lZurXCXbThP67rF2xk2b`
- page `08 Settings · Account` — `233:2079`

This pass does not reopen previously approved profile/account, unit, workout settings, notification, FAQ, support inquiry, or legal-link behavior. It only resolves the remaining launch-level Settings-home items, adds the required language-selection state, finishes structural/component organization, normalizes local naming, and runs final regression QA.

## Final Product Owner decisions

### Language

MVP supports:
- `한국어`
- `English`

Figma canonical language screen:
- `08H_Language_Settings` — `1601:987`

Behavior:
- Settings keeps the `언어` row.
- opening the row shows the two language options.
- selecting a language applies immediately.
- no separate Save CTA is required for language selection.
- production localization uses the same screens/components with localized strings; the Figma file does **not** maintain a duplicate English copy of every product screen.

Representative English-copy stress QA was performed with temporary copies of Settings Home and Workout Settings. Long English labels remained within the cleaned Auto Layout structure. The temporary QA copies were removed after verification.

### Theme

- `테마` is hidden for MVP launch.
- no Theme row remains on Settings Home.
- no Theme destination screen is created.

### Subscription management

- `구독 관리` remains visible as a future-facing Settings menu row.
- there is no subscription-management destination screen in the current MVP Figma.
- tapping the row uses lightweight feedback: `준비 중인 기능이에요.`
- demonstration state: `08A1_Settings_Home_SubscriptionToast` — `1601:1015`

This does not add paid subscription to the current MVP feature set; it only preserves the requested menu entry without inventing a management flow.

## Canonical Group 08 screen set

Final active screen/state frames:
- `08A_Settings_Home` — `1158:649`
- `08A1_Settings_Home_SubscriptionToast` — `1601:1015`
- `08B_Profile` — `1204:770`
- `08B1_Profile_Photo_Sheet` — `1181:724`
- `08B2_Account_Management_Sheet` — `1207:799`
- `08B3_Account_Deletion` — `1222:846`
- `08B4_Account_Deletion_Confirm` — `1222:7487`
- `08C_Unit_Settings_Sheet` — `1175:709`
- `08D_Workout_Settings` — `1158:7365`
- `08D1_Default_Rest_Time_Sheet` — `1163:676`
- `08D2_Timer_End_Sound` — `1163:7296`
- `08E_Notification_Settings` — `1158:7457`
- `08F_FAQ` — `1232:812`
- `08F1_FAQ_Expanded` — `1232:924`
- `08G_Support_Inquiry` — `1257:927`
- `08G1_Inquiry_Category_Sheet` — `1260:946`
- `08G2_Inquiry_Submitted` — `1261:977`
- `08G3_Inquiry_Send_Failed` — `1261:1044`
- `08H_Language_Settings` — `1601:987`

Screen sizing QA:
- all active Group 08 screen/state frames: width `360px`
- minimum frame height: `780px`
- Settings Home grows to `1131px` for scroll content
- invalid undersized screens: `0`

## Auto Layout / spacing cleanup

Structural cleanup was applied to the active Group 08 screens without changing approved UX meaning.

Examples:
- Settings Home `Content` → vertical Auto Layout, `spacing/32`, `spacing/20` outer padding
- Workout / Notification / Language content → vertical Auto Layout with existing spacing variables
- Profile/account content → vertical Auto Layout using `spacing/24`, `spacing/20`, `spacing/12`, `spacing/8`, `spacing/6` as applicable
- FAQ content → vertical Auto Layout with `spacing/24`
- Support inquiry fields → vertical Auto Layout with `spacing/20` content gap and `spacing/8` field/attachment gaps
- Settings cards/rows → structural vertical/horizontal Auto Layout with Fill/Hug behavior where appropriate
- Bottom sheets → structural Auto Layout using the existing `spacing/20 / 24 / 40` patterns

Overlay state roots intentionally remain `layoutMode=NONE` when stacking/dimming requires absolute overlay composition. Their underlying content and sheet internals are Auto Layout where structurally appropriate.

Final read-back confirmed the main content containers have the intended spacing bindings rather than visually equivalent raw repeated values.

## Common_Component organization

New confirmed group:
- `08_GROUP_CONFIRMED_COMPONENTS` — `1602:989`

Original masters moved from legacy `MVP_공용_UI` into `Common_Component`; they were not duplicated or detached:
- `Toggle` — `638:3288`
- `WheelPicker/SingleColumn` — `1169:1105`
- `AccordionItem` — `1238:1139`
- `TextArea` — `1255:1137`
- `AttachmentSlot` — `1255:1161`

Final Group 08 component-source QA:
- instance nodes checked: `180`
- missing main-component links: `0`
- source `Common_Component`: `110`
- external/shared library source: `70`
- remaining source `MVP_공용_UI`: `0`
- local component/component-set masters on Group 08 production page: `0`

The external/shared-library instances include existing design-system assets such as CTA, icon, and OptionItem sources; they are not legacy local `MVP_공용_UI` dependencies and were not copied into Common_Component.

## Naming cleanup

- page name normalized to `08 Settings · Account`
- active Group 08 screen names remain English-only
- local semantic layer names were normalized to English without changing visible Korean product copy
- remaining Korean/mixed local layer-name count across active Group 08 frames: `0`
- `08_GROUP_CONFIRMED_COMPONENTS` Korean/mixed layer-name count: `0`

Inherited internal layer names inside external/shared-library component instances are not treated as Group 08 local naming defects.

## Visual regression QA

Post-cleanup screenshots verified:
- `08A_Settings_Home` — PASS
- `08A1_Settings_Home_SubscriptionToast` — PASS
- `08H_Language_Settings` — PASS
- `08B_Profile` — PASS
- `08B4_Account_Deletion_Confirm` — PASS
- `08C_Unit_Settings_Sheet` — PASS
- `08D_Workout_Settings` — PASS
- `08D1_Default_Rest_Time_Sheet` — PASS
- `08F_FAQ` — PASS
- `08G_Support_Inquiry` — PASS
- `08B2_Account_Management_Sheet` — PASS

Representative English-copy stress screenshots:
- Settings Home content — PASS
- Workout Settings content — PASS

Temporary English QA frames were deleted after the check.

## Existing locked behavior retained

No change to:
- profile photo / nickname / provider presentation
- logout and destructive account-deletion flow
- unit settings
- rest timer / timer sound / vibration / screen-on settings
- current notification scope
- FAQ accordion
- support inquiry category/email/content/image attachment flow
- Terms / Privacy entry rows linking to external public documents

## Release follow-ups — not Figma blockers

Still required before production release:
- actual public Terms URL
- actual public Privacy Policy URL
- exact support-inquiry record / image-attachment retention period and disclosure
- external account-deletion request URL
- final timer sound assets / final labels

These are release/implementation follow-ups and do not keep Group 08 Figma QA open.

## Result

**PASS — Group 08 Settings / Account Product/UX, structural Auto Layout, spacing bindings, language/theme/subscription decisions, Common_Component organization, naming, and visual regression QA are complete.**

**GROUP 08 CLOSED.**

Do not reopen Group 08 without a concrete new conflict/regression, a new release requirement that changes the Figma product flow, or explicit Product Owner request.

**NO CURSOR IMPLEMENTATION HANDOFF.**
