# Platform / App Stack Architecture Gate

**Date:** 2026-09-20
**Status:** PO APPROVED · ANDROID-ONLY / APP STACK / LOCAL-FIRST / SQLITE / SUPABASE / AUTH / STORAGE / SYNC LOCKED · ANDROID RUNTIME NEXT

## Platform strategy

Superseded by:
- `docs/ux-decisions/2026-09-20-android-only-platform-scope.md`

Current PO-approved scope:
- Android only
- Android runtime/device QA
- Android production release
- no current requirement to preserve iOS compatibility
- future iOS work requires a separate Product/Architecture decision

## Application stack

Locked:
- React Native
- Expo
- TypeScript
- Windows + Cursor as primary development environment
- Expo Development Builds for production development; Expo Go is not the runtime contract
- native Kotlin / Android integration remains available when required

## Rationale

The stack fits the current priorities:
1. active-workout reliability
2. solo AI-assisted development speed
3. Android runtime reliability
4. native Android integration when required
5. maintainability / operating cost

A switch to Flutter is not justified by a current requirement and would add a separate Dart toolchain without resolving a known blocker.

## Local-first persistence — PO APPROVED

The phone's local database is the immediate source of truth for workout interaction.

Rules:
- set edits, set completion, exercise changes, active-session state, and workout completion write locally first
- a weak or unavailable network must not block workout recording
- local save success is sufficient for the user to continue the workout
- server synchronization happens afterward according to a separate sync policy
- unsynced local records remain durable across app backgrounding/restart
- the server must not silently overwrite newer unsynced local workout changes
- sync failure must not delete or roll back locally saved workout data

This is an offline-capable local-first model, not a server-first request queue.

## Local database — PO APPROVED

Locked:
- SQLite
- Expo integration: `expo-sqlite`

Local SQLite is used for:
- active workout/session state
- workout sessions and set records
- saved routines
- custom exercises
- local settings that belong to application data
- synchronization metadata / pending-sync state where appropriate

Rules:
- SQLite is the durable local application database, not a temporary cache
- active-workout recovery reads from local SQLite
- schema changes require explicit migrations
- server synchronization must map to stable local record identities rather than mutable display labels
- do not store large image/media binaries inside SQLite; store references/metadata instead

## Backend/database provider — PO APPROVED

Locked:
- Supabase
- server relational database = Supabase Postgres

Boundary:
- Supabase is the canonical server-side persistence provider
- local SQLite remains the immediate source of truth for workout interaction
- server rows must use stable IDs that map safely to local records
- server-side authorization must be enforced independently of client UI
- exact Supabase Auth / Storage usage is a separate decision and is not implied by choosing Supabase Postgres

## Authentication — PO APPROVED

Locked:
- Supabase Auth
- current MVP social providers: Google + Kakao
- authentication identity is the stable account boundary used to associate server-side user data

Rules:
- Supabase Auth is the canonical authentication service
- Google / Kakao provider identities map into the same application account model
- authentication success alone does not make server data authoritative over newer unsynced local workout data
- account deletion must remove or anonymize user-owned server data according to the approved deletion policy
- token/session handling must use secure platform storage rather than SQLite plain-text secrets

## Media / file storage — PO APPROVED

Locked:
- Supabase Storage

Use Supabase Storage for server-side user media such as:
- profile images
- support inquiry attachments
- other explicitly approved user-uploaded media

Rules:
- SQLite stores file metadata / local URI / remote object path / upload state, not the large binary itself
- local file availability can precede upload; network failure must not block the rest of the local-first workout flow
- user-owned private media must not be made public by default
- object access must be scoped to the authenticated user or the specific support workflow
- deletion/account-deletion flows must remove or invalidate the associated user-owned objects according to product policy
- Production exercise-library media is a separate product asset distribution concern and is not automatically treated as user-uploaded Storage content

## Synchronization — ARCHITECTURE LOCKED

Canonical policy:
- `docs/ux-decisions/2026-09-20-local-first-sync-policy.md`

Summary:
- local SQLite commit always precedes server sync
- durable outbox / dirty-state queue
- no per-keystroke or per-set network request
- active-workout changes are coalesced; while dirty, foreground periodic sync is capped at roughly one attempt per 5 minutes
- immediate attempt on workout completion and other low-frequency explicit Save actions
- pending sync checked on app resume and connectivity restoration
- exponential retry with jitter; local data is never rolled back
- idempotent mutation IDs + stable record IDs prevent duplicate retries
- optimistic server versions detect conflicts instead of silently overwriting
- active workout has one write-owner device until completion/discard
- media upload queue is independent from core workout-data sync

## Active-workout elapsed-time semantics — PO APPROVED

Locked:
- workout elapsed time continues across app termination and device reboot
- persist an absolute workout start timestamp in SQLite
- on restore, elapsed time is recalculated from current time minus the persisted start timestamp
- powered-off/reboot time is included in workout elapsed time
- the timer does not depend on a continuously running JavaScript interval
- restoring an unfinished workout after reboot must preserve the same active session and elapsed duration

## Android reboot notification recovery — PO APPROVED

Locked:
- if an Active Workout remains unfinished when the device reboots, Android restores the ongoing workout notification after boot completes
- reboot does not end or discard the workout session
- the restored ongoing notification represents the same persisted Active Workout
- tapping it resumes that same session
- elapsed workout time is recalculated from the persisted absolute start timestamp, so reboot/powered-off time remains included
- if an automatic Rest Timer is still active at restore time, its remaining state is reconstructed from the persisted absolute rest-end timestamp
- this is a reconstruction after boot, not an assumption that a notification itself survives the reboot

Implementation boundary:
- Android boot-completed handling checks SQLite for an unfinished active session and re-establishes the system notification/runtime surface
- Android stopped/force-stopped app behavior remains subject to platform restrictions and is not treated as equivalent to a normal device reboot

## Android notification dismissal semantics — PO APPROVED

Locked:
- dismissing/removing the Android ongoing workout notification does not end, pause, discard, or mutate the Active Workout
- the Active Workout remains persisted in SQLite as the authoritative session state
- elapsed workout time, completed sets, current exercise/set context, and any applicable rest state continue independently from notification visibility
- notification state is presentation/runtime state only, not the source of workout truth
- opening the app or a later relevant runtime event may reconstruct the ongoing workout notification when an Active Workout still exists
- workout end/discard remains an explicit in-app action

## Android Rest Timer delivery guarantee — PO APPROVED

Applies to:
- `05F_Workout_RestTimer` — automatic Rest Timer

Locked behavior:
- the rest-end alert should still be delivered when the screen is off
- the rest-end alert should still be delivered while another app is in use
- ordinary app backgrounding must not cancel the rest-end alert
- removing Tampin from the recent-apps list must not be treated as ending the workout or canceling the scheduled rest-end alert
- after a normal device reboot, if the persisted rest end time is still in the future, restore the remaining rest state and its future alert
- if the persisted rest end time already passed while the device was unavailable/rebooting, do not replay a stale late sound/alert solely because the device came back later
- Android user-initiated Force stop is the explicit platform exception: notification/background guarantees do not resume until the user launches the app again
- notification delivery failure/OS restriction never mutates or deletes the SQLite workout/rest state
- the existing `휴식 타이머 알림` setting still controls delivery of the rest-end alert

The exact Android API/service mechanism remains an implementation detail and must satisfy this behavior without making the workout session dependent on a continuously running JS process.

## Android exact Rest Timer alarm — PO APPROVED

Applies to:
- `05F_Workout_RestTimer` — automatic Rest Timer

Locked:
- Rest Timer completion uses Android exact alarm scheduling where platform support/permission allows
- use `SCHEDULE_EXACT_ALARM`, not `USE_EXACT_ALARM`
- reason: Tampin is not a dedicated alarm/timer/calendar app, so the restricted auto-granted `USE_EXACT_ALARM` permission is not the appropriate Play-policy fit
- before scheduling an exact Rest Timer alert, check whether exact alarms are allowed
- if special access is not granted, route the user to Android's exact-alarm access screen from an in-app explanation
- denial does not block workout logging; fall back to best-effort notification timing and keep all workout/rest state intact
- the app must not request exact-alarm access at first launch with no context; request it when the user first enables/uses the precise Rest Timer alert feature
- revocation later must be detected and handled without data loss

## Still open

- analytics/crash reporting
- exact Android background/runtime implementation
- release pipeline details

## NEXT OPEN ITEM

Finish Android runtime / background execution architecture.

Do not begin production implementation yet.
