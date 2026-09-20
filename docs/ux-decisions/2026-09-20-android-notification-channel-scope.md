# Android Notification Channel Scope

**Date:** 2026-09-20  
**Status:** PO APPROVED · ANDROID RUNTIME LOCKED

## Scope

Current MVP Android notification categories are limited to:
1. Active Workout progress
2. Rest Timer completion

Updates/notices are not planned for the current MVP and must not have a production notification channel.

## Channel model

### 1. Workout progress

User-facing name:
- `운동 진행`

Purpose:
- `05A_Workout_Weight` Active Workout ongoing notification

Default behavior:
- Android channel importance = LOW
- no channel sound
- no vibration
- ongoing/persistent presentation while an Active Workout is surfaced
- tapping resumes the same Active Workout
- elapsed time uses the approved Android system chronometer/time display
- notification visibility never owns workout state

Reason:
- this is a continuously visible status surface, not an event that should interrupt the user every time it updates.

### 2. Rest Timer

User-facing name:
- `휴식 타이머`

Purpose:
- `05F_Workout_RestTimer` completion alert

Default behavior:
- separate channel from Workout progress
- time-sensitive/interruptive alert behavior
- exact delivery path uses the approved `SCHEDULE_EXACT_ALARM` architecture when permission is available
- approved rest-end copy remains:
  - title: `휴식 시간이 끝났어요`
  - body: `다음 세트를 시작하세요.`
- channel itself has no app-owned notification sound
- Tampin plays the selected bundled `기본 / 차임 / 벨` sound separately at Rest Timer completion
- vibration follows Android/user notification settings; no custom vibration pattern

Canonical sound runtime:
- `docs/ux-decisions/2026-09-20-android-rest-timer-sound-runtime.md`

## Explicitly out of current MVP

Do not create an Android notification channel for:
- updates
- notices
- marketing
- promotions
- engagement reminders

Do not implement remote push infrastructure merely for future updates/notices.

## Settings impact

`08E_Notification_Settings` current Product scope becomes:
- `휴식 타이머 알림` only

The previous `업데이트/공지` toggle is removed from current MVP Product scope.

This is an explicit post-closure Group 08 amendment. It does not reopen unrelated Group 08 behavior.

Canonical Figma will need the corresponding small visual maintenance: remove only the `업데이트/공지` row from `08E_Notification_Settings`. Do not redesign the screen.

## NEXT

Continue remaining Android runtime closure.

Production implementation remains unauthorized until explicit Product Owner approval.
