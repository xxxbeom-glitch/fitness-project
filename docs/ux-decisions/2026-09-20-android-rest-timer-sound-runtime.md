# Android Rest Timer Sound Runtime

**Date:** 2026-09-20  
**Status:** PO APPROVED · ANDROID RUNTIME LOCKED

## Scope

Applies to:
- `05F_Workout_RestTimer` — automatic Rest Timer completion
- `08D2_Timer_End_Sound` — app-owned `기본 / 차임 / 벨` selection

## Product decision

Keep the Android `휴식 타이머` notification channel itself free of an app-owned notification sound.

When the Rest Timer reaches zero:
1. the approved system notification is posted
2. Tampin separately plays the currently selected app-owned sound
3. the sound choice comes from `08D2_Timer_End_Sound`
4. notification presentation and sound playback remain separate responsibilities

This avoids binding `기본 / 차임 / 벨` to immutable Android notification-channel sound configuration.

## Android runtime implementation

- exact Rest Timer deadline remains driven by the approved exact-alarm path
- when the exact alarm fires, native Android code handles the completion event
- post the `휴식 시간이 끝났어요 / 다음 세트를 시작하세요.` notification on the `휴식 타이머` channel
- the Rest Timer channel has no app-owned channel sound
- play the selected bundled Tampin sound separately with alarm-appropriate audio usage
- background/screen-off delivery must be implemented through the smallest Android-native mechanism that reliably satisfies the approved Product behavior
- do not pre-lock `mediaPlayback` Foreground Service as mandatory architecture
- if Development Build / device QA proves a short-lived Foreground Service is required on supported Android versions, add it only for the completion sound path and stop it immediately after the short sound finishes
- do not keep a persistent media service running between Rest Timer events

## Sound selection

Current Product labels:
- `기본`
- `차임`
- `벨`

Rules:
- all three are bundled app-owned audio assets
- changing the selection affects the next Rest Timer completion sound without recreating Android notification channels
- final production audio files/filenames remain an asset follow-up
- if the selected asset cannot be loaded, fall back to the bundled `기본` timer sound rather than device ringtone/default notification sound

## Vibration

- no custom vibration pattern
- vibration remains governed by Android/user notification/device settings
- separate sound playback does not introduce its own vibration behavior

## Permissions / failure behavior

- `POST_NOTIFICATIONS` still governs whether the system notification can be shown
- exact-alarm access still governs exact completion timing
- if exact-alarm access is unavailable, use the already-approved best-effort timing fallback
- lack of notification permission does not delete or change workout/rest state
- Android user Force stop remains the explicit background-delivery exception until relaunch
- sound/notification failure never rolls back SQLite data
- if the app-level `휴식 타이머 알림` setting is OFF, do not post the rest-end system alert or play the app-owned completion sound
- if Android notification delivery is blocked at the system level, do not use separate audio playback as a hidden bypass around that user/system choice

## Rationale

Android notification channel auditory behavior becomes user-controlled after channel creation and cannot be freely changed by the app later. Keeping the channel soundless while Tampin plays its selected bundled timer sound separately preserves the Product-level `기본 / 차임 / 벨` setting without multiplying or recreating channels.

Modern Android restricts background execution/audio playback, but the exact minimum mechanism can vary by Android/runtime constraints. The Product requirement is reliable short completion sound delivery where permitted; the implementation should prove the least complex compliant native path in Development Build/device QA before adding a Foreground Service declaration.

## NEXT

Android notification/runtime decisions are substantially closed. Continue with the next architecture gate unless a runtime conflict is found.

Production implementation remains unauthorized until explicit Product Owner approval.
