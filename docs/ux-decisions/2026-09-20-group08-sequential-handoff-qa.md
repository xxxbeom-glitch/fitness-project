# Group 08 Settings / Account / Support — Sequential Handoff QA

**Date:** 2026-09-20  
**Status:** QA IN PROGRESS · ONE PO ALIGNMENT DECISION

## Current canonical inventory

Figma Group 08 top-level frames = `17`.
Behavior-matrix Group 08 rows = `17`.
Exact name match = `17 / 17`.

Current screens:
- `08A_Settings_Home`
- `08A1_Settings_Home_SubscriptionToast`
- `08B_Profile`
- `08B1_Profile_Photo_Sheet`
- `08B2_Account_Management_Sheet`
- `08B3_Account_Deletion`
- `08B4_Account_Deletion_Confirm`
- `08C_Unit_Settings_Sheet`
- `08D_Workout_Settings`
- `08D1_Default_Rest_Time_Sheet`
- `08D2_Timer_End_Sound`
- `08E_Notification_Settings`
- `08G_Support_Inquiry`
- `08G1_Inquiry_Category_Sheet`
- `08G2_Inquiry_Submitted`
- `08G3_Inquiry_Send_Failed`
- `08H_Language_Settings`

FAQ / Theme remain removed from the current MVP.

## Current Figma read-back

Across all 17 Group 08 frames:
- missing main-component links = `0`
- component sources outside `Common_Component` = `0`

Current visible copy/state aligns for:
- Settings grouping
- subscription future-stub toast
- profile/photo/logout/account-deletion flow
- kg/lb global unit selection
- default rest-time picker
- notification rows
- support inquiry/category/success/failure
- Korean/English immediate language selection

## Rest Timer sound — aligned

Latest PO policy:
- use app-owned custom timer-end sound assets only
- do not use device default notification/ringtone sounds
- no OS sound picker

Figma labels remain:
- `기본`
- `차임`
- `벨`

Implementation meaning:
- all three are app-bundled sound choices
- `기본` means the app's default bundled timer sound, not the device default sound
- final Production files / final labels are an asset follow-up

No Figma change is required until final sound assets/labels are supplied.

## Rest Timer notification — aligned

`08E_Notification_Settings > 휴식 타이머 알림` controls delivery of the already-approved Rest Timer zero system alert:
- `휴식 시간이 끝났어요`
- `다음 세트를 시작하세요.`
- selected app-owned timer sound
- no auto-open
- no automatic set completion

## Current blocker — timer-end vibration

Current Figma `08D_Workout_Settings` visibly contains:
- `타이머 종료 진동` toggle

Latest Group 05 PO-approved notification rule currently states:
- no custom MVP vibration pattern
- vibration follows platform/user notification settings

These two contracts are ambiguous together.

PO must choose one:
1. remove the app-level `타이머 종료 진동` setting and rely entirely on OS notification vibration settings, or
2. keep an app-level vibration On/Off preference, while using only the platform default haptic/vibration behavior when enabled (no custom vibration pattern), subject to OS settings/permissions.

Cursor must not invent which interpretation wins.

## Conditional / release follow-ups

Not Group 08 Figma blockers:
- final timer sound files/labels
- public Terms / Privacy URLs
- support inquiry record/attachment retention disclosure
- external account-deletion request URL
- Apple sign-in/account-deletion copy alignment if iOS is included in launch scope

## Current result

- Group 08 inventory: PASS
- component linkage: PASS
- current visual/state coverage: PASS
- current Product/UX blocker: `1` — timer-end vibration preference semantics

**STOP for PO decision before marking Group 08 sequential QA PASS.**
