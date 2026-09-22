# Group 08 Settings / Account / Support — Sequential Handoff QA

**Date:** 2026-09-20  
**Status:** SEQUENTIAL HANDOFF QA PASS · GROUP 08 CLOSED

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

## PO decision — timer-end vibration

PO APPROVED 2026-09-20:
- remove the app-level `타이머 종료 진동` setting from MVP
- Rest Timer completion vibration is not separately controlled inside the app
- vibration follows the user's/platform notification and device settings
- no custom vibration pattern is defined for MVP

Figma reflection:
- shared `WorkoutSettingsContent` rest-timer card changed from 3 rows to 2 rows
- retained rows = `기본 휴식 시간` / `타이머 종료음`
- removed row = `타이머 종료 진동`
- `08D_Workout_Settings` focused read-back: vibration row absent; default-rest-time and timer-sound rows present
- `08D1_Default_Rest_Time_Sheet` background inherits the same corrected shared content
- focused missing main-component links = `0`

## Conditional / release follow-ups

Not Group 08 Figma blockers:
- final timer sound files/labels
- public Terms / Privacy URLs
- support inquiry record/attachment retention disclosure
- external account-deletion request URL
- Apple sign-in/account-deletion copy alignment if iOS is included in launch scope

## Current result

- Group 08 inventory = `17 / 17` exact match
- Group 08 current instance links = `242`
- Group 08 missing main-component links = `0`
- Group 08 sources outside `Common_Component` = `0`
- current visual/state coverage = PASS
- current Product/UX blocker = `0`

**PASS — Group 08 Settings / Account / Support sequential handoff QA is closed.**

## 2026-09-22 approved profile-photo amendment

The `17 / 17` figures above are the historical Group 08 closure baseline from 2026-09-20.

Product Owner later approved one additional Group 08 state:
- `08B1A_Profile_Photo_Crop` — `2144:8195`
- fixed `1:1` crop
- image reposition + pinch zoom
- Back cancels the crop
- Save applies the square crop and returns to the profile-photo/profile flow
- rotation / filters / general retouching remain outside MVP

Focused Figma read-back after the amendment:
- Group 08 canonical frames = `18`
- Group 08 behavior-matrix rows after planning sync = `18`
- exact name coverage = `18 / 18`
- Group 08 instance links = `244`
- missing main-component links = `0`
- sources outside `Common_Component` = `0`

Canonical amendment:
- `docs/ux-decisions/2026-09-22-profile-photo-crop-screen.md`

**PASS — Group 08 remains closed with the approved profile-photo crop amendment incorporated.**

