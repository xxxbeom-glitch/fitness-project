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
- for background/screen-off delivery on Android versions that require it, use a short-lived native Android `mediaPlayback` Foreground Service started by the exact-alarm event
- stop that temporary service immediately after the short timer sound completes
- this temporary completion-sound service is distinct from the earlier decision not to keep a continuous Foreground Service alive for the whole Active Workout
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

## Rationale

Android notification channel auditory behavior becomes user-controlled after channel creation and cannot be freely changed by the app later. Keeping the channel soundless while Tampin plays its selected bundled timer sound separately preserves the Product-level `기본 / 차임 / 벨` setting without multiplying or recreating channels.

Modern Android also restricts background audio playback. A short native mediaPlayback Foreground Service at the exact-alarm event provides a deliberate, bounded background playback path without turning the entire Active Workout into a long-running Foreground Service.

## NEXT

Android notification/runtime decisions are substantially closed. Continue with the next architecture gate unless a runtime conflict is found.

Production implementation remains unauthorized until explicit Product Owner approval.
