# 04 ARCHITECTURE

**Status:** PARTIALLY FROZEN — LOCAL-FIRST + SQLITE + SUPABASE + AUTH + STORAGE + SYNC LOCKED

## Platform scope — CONFIRMED

- current MVP and production target = Android only
- no current iOS runtime, Apple sign-in, Live Activity, iPhone QA, or App Store requirement
- Android-native integration may be used where needed without preserving hypothetical iOS parity
- future iOS support requires a separate architecture decision

## Architecture goals

The eventual architecture must make these behaviors reliable:
- active workout persistence
- deterministic workout history
- custom exercise identity/history
- safe editing of completed sets
- future sync without corrupting local workout state

## Minimum domain boundaries — ASSUMPTION

Likely core domains:
- Exercise
- Routine
- Workout Session
- Set Record
- History / Progress
- Settings

Future domains such as Gym, Body Composition, Watch, AI, and Community should remain outside the MVP core until explicitly promoted.

## Data integrity rules — CONFIRMED

- Historical records must not depend on a mutable exercise label alone.
- Editing a routine must not silently rewrite past workout history.
- A custom exercise should keep its own stable identity and history.
- Active-session persistence must be designed before implementation.
- Workout interaction is local-first: local persistence succeeds before server synchronization is required.
- Weak/offline network state must not block set entry, set completion, active-session editing, or workout completion.
- Unsynced local workout state must survive app interruption/restart.
- Sync failure must not delete, roll back, or silently overwrite newer unsynced local workout data.
- Server-confirmed actions are outside local-first completion: authentication, account deletion, support inquiry submission, and profile/media upload must not be presented as complete until server success.
- Network restoration may retry replication of already-accepted local-first state, but must not silently create a new user-visible action that previously failed.

## Local persistence technology — CONFIRMED

- SQLite via `expo-sqlite`
- SQLite is durable local application storage, not a cache
- active session, sessions, set records, routines, custom exercises, and sync metadata use stable local identities
- schema evolution uses explicit migrations
- media files remain outside SQLite; database rows keep references/metadata

## Server persistence technology — CONFIRMED

- Supabase is the backend provider
- canonical server database = Supabase Postgres
- local SQLite remains authoritative for immediate workout interaction
- synchronization maps local stable identities to server stable identities
- server-side data access must be constrained independently of client presentation

## Authentication boundary — CONFIRMED

- canonical auth provider = Supabase Auth
- Google + Kakao are current MVP login providers
- server-side user-owned rows map to the authenticated account identity
- auth/session secrets are stored using secure platform storage, not ordinary SQLite application rows
- local-first workout persistence remains independent from transient network/auth availability during an already-authorized local session

## Media storage boundary — CONFIRMED

- Supabase Storage is the canonical server object storage
- profile images and support inquiry attachments use Supabase Storage
- SQLite stores local URI, remote object path, upload/sync state, and related metadata
- large binaries are not embedded in SQLite
- user-owned media is private/scoped by default
- exercise-library Production assets remain a separate distribution concern unless explicitly moved into the same storage architecture

## Synchronization architecture — CONFIRMED

Canonical:
- `docs/ux-decisions/2026-09-20-local-first-sync-policy.md`

Core invariants:
- SQLite commit precedes all remote synchronization
- durable outbox/dirty state survives restart
- sync is batched/coalesced rather than per-input
- active workout remote attempts are rate-limited to roughly once per 5 minutes while dirty and foreground
- important commit points trigger immediate best-effort sync
- retry uses exponential backoff with jitter
- idempotent mutation IDs prevent duplicate effects
- optimistic server revisions detect conflicts
- active session has a single write-owner device until completion/discard
- media upload failures cannot block workout-data synchronization

## Active-workout time semantics — CONFIRMED

- workout elapsed time uses a persisted absolute start timestamp
- elapsed time continues through backgrounding, process death, app restart, and device reboot
- time while the device is powered off is included
- restore computes elapsed time from the persisted timestamp rather than relying on a continuously running timer loop

## Android reboot recovery — CONFIRMED

- an unfinished Active Workout survives a normal device reboot through persisted SQLite state
- after Android boot completion, the app checks for the unfinished active session and reconstructs the ongoing workout notification
- tapping the reconstructed notification resumes the same session
- elapsed workout duration continues from the persisted absolute start timestamp
- an active rest state is reconstructed from its persisted absolute end timestamp when still applicable
- runtime notification state is recreated; it is not assumed to survive reboot itself

## Android notification dismissal semantics — CONFIRMED

- Android notification visibility is not authoritative workout state
- dismissing the ongoing workout notification never changes the persisted Active Workout
- session data, elapsed time, and rest state continue independently in SQLite/time-based recovery logic
- a later app/runtime event may reconstruct the notification while the Active Workout remains unfinished
- only explicit in-app end/discard actions terminate the session

## Android Rest Timer delivery — CONFIRMED

- automatic Rest Timer alert delivery is independent from the React Native screen remaining alive
- screen-off, ordinary backgrounding, another foreground app, and recent-apps removal must not cancel the intended rest-end alert
- normal reboot restores a future rest deadline from SQLite; a deadline already passed during downtime is not replayed as a stale late sound
- user Force stop is the explicit Android exception until the user reopens the app
- notification delivery state never owns or mutates workout/rest persistence
- exact native Android scheduling primitive remains an implementation decision

## Android exact Rest Timer alarm — CONFIRMED

- automatic Rest Timer completion uses Android exact-alarm scheduling where permission is available
- use `SCHEDULE_EXACT_ALARM`; do not use restricted `USE_EXACT_ALARM`
- exact-alarm access is requested contextually when the user first needs precise Rest Timer delivery
- denial/revocation does not alter workout/rest persistence; delivery falls back to best-effort timing
- permission state must be rechecked before exact scheduling because the user/system can revoke access

## Android ongoing workout notification runtime — CONFIRMED

- current MVP does not use a Foreground Service solely to preserve the Active Workout timer/notification
- Active Workout posts an Android ongoing notification
- its elapsed display is derived from the persisted workout start timestamp through the Android system chronometer/time display
- workout correctness never depends on a continuously running JS interval or notification process
- SQLite/timestamps reconstruct the session after process death or reboot
- Rest Timer completion remains a separate exact-alarm concern
- future continuous sensor/location/health tracking would trigger a new Foreground Service architecture decision

## Android notification permission — CONFIRMED

- Android 13+ `POST_NOTIFICATIONS` is requested contextually at first Active Workout, after SQLite session persistence
- permission UI is not part of authentication/onboarding
- permission denial/dismissal changes notification availability only; it never changes Active Workout/rest state
- exact alarm access and notification permission are independent gates
- notification permission is rechecked before posting ongoing/rest-end notifications
- later Settings interaction may request permission again or route to Android app notification settings when needed

## Android notification channel model — CONFIRMED

- current MVP exposes two notification categories only
- `운동 진행`: LOW-importance silent/non-vibrating channel for ongoing Active Workout status
- `휴식 타이머`: separate time-sensitive channel for Rest Timer completion
- updates/notices are not implemented and have no current production channel
- no remote push stack is introduced for hypothetical update/notice messaging
- Rest Timer sound-variant/channel mechanics remain a focused implementation decision because Android channel auditory behavior is immutable/user-controlled after creation

## Android Rest Timer sound playback — CONFIRMED

- keep `휴식 타이머` channel free of the selectable app-owned sound
- exact-alarm completion event posts the system notification and triggers separate app-owned sound playback
- selected sound = `기본 / 차임 / 벨`
- use alarm-appropriate audio usage
- use a short-lived native Android `mediaPlayback` Foreground Service when background-audio restrictions require it
- stop the service immediately after the sound finishes
- Active Workout itself still does not run a continuous Foreground Service
- notification-channel identity remains stable across sound-setting changes

## Crash / error observability — CONFIRMED

Canonical:
- `docs/ux-decisions/2026-09-20-sentry-crash-error-reporting.md`

- Sentry is the MVP crash/error diagnostics provider
- Sentry is not a product database or product-analytics source
- local development reporting is disabled by default
- internal/preview and production environments are separated
- source maps/release IDs must map to the actual Android build
- Session Replay is disabled
- sensitive/profile/workout-entered values are excluded from event payloads
- only minimal opaque identity + build/OS/screen/high-level runtime context is allowed
- Sentry failure never blocks launch, workout logging, SQLite persistence, or Supabase sync

## Product analytics — CONFIRMED

Canonical:
- `docs/ux-decisions/2026-09-20-posthog-product-analytics.md`

- PostHog is the MVP product-usage analytics provider
- explicit semantic events only; no Session Replay or broad autocapture
- analytics is not authoritative application state and never gates user flows
- identity uses opaque internal user ID only and resets on logout/account change
- profile/demographic/free-text/workout-entered values are excluded from event payloads
- preview vs production remains distinguishable
- failed analytics delivery never affects SQLite/Supabase correctness

## TBD

- server schema
- event/state architecture
- exact Android background/runtime implementation
- migration strategy

## Anti-overengineering rule

Do not introduce microservices, event buses, generic plugin systems, or future AI infrastructure during MVP unless a confirmed requirement makes them necessary.
