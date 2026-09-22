# Platform / App Stack Architecture Gate

**Date:** 2026-09-20
**Status:** PO APPROVED · ANDROID MVP ARCHITECTURE + RELEASE PIPELINE LOCKED · IMPLEMENTATION NOT STARTED

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
- if an Active Workout remains unfinished when the device reboots, Tampin reconstructs the ongoing workout notification after boot when Android permits the boot/runtime delivery path
- reboot does not end or discard the workout session
- the restored ongoing notification represents the same persisted Active Workout
- tapping it resumes that same session
- elapsed workout time is recalculated from the persisted absolute start timestamp, so reboot/powered-off time remains included
- if an automatic Rest Timer is still active at restore time, its remaining state is reconstructed from the persisted absolute rest-end timestamp
- this is a reconstruction after boot, not an assumption that a notification itself survives the reboot
- Android background restrictions may delay the reconstructed notification; workout recovery from SQLite remains intact

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

## Android ongoing workout notification runtime — PO APPROVED

Applies to:
- `05A_Workout_Weight` — Active Workout shell and its ongoing system notification

Locked:
- do not keep a continuously running React Native/JavaScript timer solely to maintain workout elapsed time
- do not introduce an Android Foreground Service solely to keep the Active Workout notification/timer alive for the current MVP
- post a normal Android ongoing notification for the active workout
- drive its elapsed display from the persisted absolute workout start time using the Android notification chronometer/system time display
- SQLite remains the authoritative workout/session state; notification state is presentation only
- Rest Timer completion remains a separate exact-alarm responsibility
- ordinary backgrounding or process death must not corrupt the Active Workout; recovery reconstructs UI/notification from SQLite and timestamps
- reboot recovery reconstructs the ongoing notification after boot as already approved
- if future requirements add continuous sensor/location/health tracking, re-evaluate Foreground Service use rather than prebuilding it now

Rationale:
- the current MVP does not continuously sample location, heart rate, motion, microphone, or other sensor data
- Android provides system-managed notification chronometer display for elapsed time
- avoiding an unnecessary Foreground Service reduces runtime/policy complexity while preserving the approved Product behavior

## Android notification permission timing — PO APPROVED

Canonical:
- `docs/ux-decisions/2026-09-20-android-notification-permission-policy.md`

Locked:
- Android 13+ notification runtime permission = `POST_NOTIFICATIONS`
- do not request it at install/login/onboarding/Home
- request contextually on the user's first Active Workout after the session has already been persisted locally
- use the existing Dialog pattern for a one-time rationale; do not add a new top-level screen
- denial/dismissal never blocks or rolls back the Active Workout
- if permission is absent, ongoing workout notification and Rest Timer system-alert delivery are unavailable/best-effort as allowed by Android, while workout/rest persistence continues normally
- do not nag on every workout after denial/dismissal
- `08E_Notification_Settings` must respect Android system permission and route to runtime request/settings when needed
- re-check permission before user-visible notification delivery because it may be revoked later

## Android notification channel scope — PO APPROVED

Canonical:
- `docs/ux-decisions/2026-09-20-android-notification-channel-scope.md`

Locked:
- current MVP has two Android notification categories only: `운동 진행` and `휴식 타이머`
- `운동 진행` uses a LOW-importance silent/non-vibrating channel for the ongoing Active Workout surface
- `휴식 타이머` is a separate time-sensitive channel used for the approved rest-end alert
- updates/notices/marketing/promotional notification channels are not part of the current MVP
- do not add remote-push infrastructure merely for hypothetical updates/notices
- `08E_Notification_Settings` current Product scope is `휴식 타이머 알림` only
- the previous `업데이트/공지` setting is removed from current MVP scope
- selectable app-owned Rest Timer sounds are handled separately from the channel per `2026-09-20-android-rest-timer-sound-runtime.md`

## Android Rest Timer sound runtime — PO APPROVED

Canonical:
- `docs/ux-decisions/2026-09-20-android-rest-timer-sound-runtime.md`

Locked:
- the `휴식 타이머` notification channel does not carry the selectable app-owned sound
- when Rest Timer reaches zero, post the approved system notification and separately play the selected bundled `기본 / 차임 / 벨` sound
- exact alarm remains the completion trigger
- do not pre-lock a `mediaPlayback` Foreground Service as mandatory for the short completion sound
- use the smallest Android-native mechanism that passes background/screen-off runtime QA; add a short-lived Foreground Service only if supported-device testing proves it is required
- this does not change the earlier rule that the Active Workout itself does not run a continuous Foreground Service
- changing timer sound does not recreate notification channels
- asset-load failure falls back to Tampin's bundled `기본` sound, not the device default sound

## Crash / error reporting — PO APPROVED

Canonical:
- `docs/ux-decisions/2026-09-20-sentry-crash-error-reporting.md`

Locked:
- Sentry is the Android MVP crash/error reporting provider
- Sentry is diagnostics only; product-usage analytics is a separate decision
- Session Replay is off for MVP
- local development reporting is off by default
- internal/preview and production environments are separated
- source maps/release identifiers must correspond to the actual build
- do not send DOB, email, nickname, profile image, workout values, routine names, support content, auth secrets, or raw database rows
- allow only opaque internal user ID plus build/OS/screen/high-level runtime state needed for debugging
- event filtering/scrubbing occurs before transmission
- Sentry failure never blocks launch, workout logging, SQLite persistence, or Supabase sync

## Product analytics — PO APPROVED

Canonical:
- `docs/ux-decisions/2026-09-20-posthog-product-analytics.md`

Locked:
- PostHog is the MVP product-usage analytics provider
- explicit semantic events only
- Session Replay / broad autocapture / form-input capture / advertising attribution are off
- initial event taxonomy is fixed in the canonical decision
- core funnel = onboarding completed → workout started → first set completed → workout completed → later workout return/start
- do not send DOB, sex/gender profile field, email, nickname, routine/exercise names, exact workout values, support content, secrets, or raw database rows
- identity = opaque internal app user ID only; reset on logout/account change
- local development analytics is off by default
- preview vs production data is distinguishable
- analytics is best-effort and never blocks navigation/workout/persistence/sync

## Android release pipeline — PO APPROVED

Canonical:
- `docs/ux-decisions/2026-09-20-android-release-pipeline.md`

Locked:
- Android package name = `com.lumian.tampin`
- Expo / EAS Build is the canonical release-build path
- Google Play artifact = AAB
- Google Play App Signing
- exact release lineage records git SHA / EAS Build ID / versionName / versionCode / AAB / Play track
- promote a verified Internal artifact to Closed/Production instead of rebuilding solely for track movement
- initial Production publishing requires explicit Product Owner approval
- Play Console package registration, current target API, testing requirements, and policy declarations are read back at execution time

## Still open

- exact Android background/runtime implementation only if a concrete implementation conflict appears
- no architecture decision remains open in this gate; implementation details are validated during Development/Release QA

## NEXT OPEN ITEM

Explicit Product Owner Development-mode authorization.

Do not begin production implementation yet.


---

## Post-gate execution amendment — 2026-09-22

The architecture decisions above remain unchanged.

Execution state update:
- Product Owner explicitly authorized Development mode on 2026-09-22.
- The former NEXT OPEN ITEM, "Explicit Product Owner Development-mode authorization", is complete.
- First scoped implementation task: GitHub Issue #5 — `[DEV-001] Expo app bootstrap + Android development foundation`.
- DEV-001 is bootstrap-only. It does not implement SQLite, Supabase/Auth/Sync, production exercise media, analytics, notification runtime, or canonical Figma screens.
- Runtime implementation evidence begins with DEV-001 and must follow the existing evidence hierarchy.
