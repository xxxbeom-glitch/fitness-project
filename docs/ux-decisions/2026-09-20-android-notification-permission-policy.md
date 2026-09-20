# Android Notification Permission Timing

**Date:** 2026-09-20  
**Status:** PO APPROVED · ANDROID RUNTIME LOCKED

## Scope

Applies to Android 13+ `POST_NOTIFICATIONS` permission for:
- `05A_Workout_Weight` — ongoing Active Workout notification
- `05F_Workout_RestTimer` — Rest Timer completion alert
- `08E_Notification_Settings` — notification preferences

## Decision

Do not request notification permission at:
- first app launch
- Login
- Basic Info onboarding
- ordinary Home entry

Request it contextually when the user starts their **first Active Workout**, because that is the first moment the ongoing workout notification becomes directly useful.

Flow:
1. user starts a blank workout or starts from a saved routine
2. create/persist the Active Workout locally first
3. enter `05A_Workout_Weight`
4. if Android 13+ notification permission has not yet been decided/granted, show one lightweight in-app rationale using the existing dialog pattern
5. `허용하기` launches the Android `POST_NOTIFICATIONS` system permission prompt
6. `나중에`, system dismissal, or denial never cancels/rolls back the Active Workout

Approved rationale copy:
- title: `운동 알림을 허용할까요?`
- body: `운동 진행 상태와 휴식 종료 알림을 받을 수 있어요.`
- secondary: `나중에`
- primary: `허용하기`

This is a runtime-derived overlay using the existing Dialog pattern, not a new top-level canonical screen.

## Denial / dismissal behavior

If permission is not granted:
- workout logging remains fully usable
- SQLite session persistence remains unchanged
- elapsed workout time continues normally
- the ongoing system workout notification cannot be relied on
- Rest Timer continues in-app; system notification delivery cannot be guaranteed
- exact-alarm permission alone does not override notification permission
- do not repeatedly interrupt every workout with the same automatic permission prompt

If the user later enables a notification feature in `08E_Notification_Settings` while system notification permission is unavailable:
- explain that Android notification permission is required
- request it again if the platform still allows a runtime request, otherwise route to the app's Android notification settings
- the app-level toggle never pretends notifications are deliverable when Android has blocked them

## Recovery

- permission can be revoked at any time; re-check before posting/scheduling user-visible notifications
- revocation never mutates workout/rest data
- reboot recovery still restores the Active Workout in SQLite even when notification permission is unavailable
- notification recovery is conditional on current Android notification permission

## Android version boundary

- Android 13+ uses runtime `POST_NOTIFICATIONS`
- older supported Android versions follow the platform's existing notification-channel/settings model without this runtime permission prompt

## NEXT

Continue remaining Android runtime closure. Production implementation remains unauthorized until explicit PO approval.
