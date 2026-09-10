# Active Session Recovery Presentation — System Notification

**Date:** 2026-09-10  
**Status:** CONFIRMED  
**Scope:** Group 05 Active Workout / session recovery presentation

## Decision

An in-progress workout remains active across app interruption/restart according to the existing session-reliability policy.

However, recovery must **not** be represented by a dedicated in-app recovery screen or an in-app banner such as `진행 중이던 운동을 복구했어요`.

For the MVP direction, when a workout session is still active after interruption/restart, its ongoing state is surfaced through the **system notification area** rather than a special recovery banner inside the workout screen.

The user re-enters the same active workout session; the app does not present that state as a newly recovered workout.

## Product impact

- keep durable active-session persistence/recovery behavior
- remove `05P_Workout_Recovery` from the canonical Group 05 Figma flow
- do not add an in-app `복구했어요` banner for normal session restoration
- active-session system-notification content/controls are a separate UX detail to define when the notification surface is designed
- this decision changes presentation, not the underlying session persistence/reliability requirement

## Figma reflection

- removed `05P_Workout_Recovery` (`148:3892`) from `05 운동 중`
- removed its `InlineBanner / Info` usage from the active page
- no replacement in-app recovery screen was created

## Development boundary

No implementation handoff is implied. System-notification behavior will be specified before development when Product/UX reaches that surface.
