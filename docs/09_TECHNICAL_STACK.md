# 09 TECHNICAL STACK

**Status:** CONFIRMED — ANDROID PLATFORM / APP STACK
**Updated:** 2026-09-20

## Platform strategy

Current product scope is Android only.

Confirmed:
- target platform: Android
- runtime/device QA: Android
- production release: Android
- iOS compatibility is not a current implementation requirement
- future iOS support requires a separate Product/Architecture decision

Superseding decision:
- `docs/ux-decisions/2026-09-20-android-only-platform-scope.md`

## Application stack

Confirmed:
- React Native
- Expo
- TypeScript
- development environment: Windows PC + Cursor
- production development runtime: Expo Development Build

The stack is retained because it remains suitable for the Android-only MVP. Removing iOS from scope does not by itself justify a framework migration.

## Build and test policy

- Android real-device/runtime QA is performed continuously during implementation.
- Android is the only current production release target.
- Do not add iOS build, iPhone QA, App Store, Apple Sign in, or Live Activity work to the current MVP.
- Future iOS work must not be assumed from Android PASS.

## Native Android integration boundary

Cross-platform application code does not prohibit Android-native APIs.

Where required:
- ongoing workout notification/runtime behavior may use Kotlin/native Android integration behind a React Native/Expo module boundary
- reboot recovery may use Android boot-completed handling
- Rest Timer alert delivery may use Android-native notification/scheduling primitives
- product/domain state remains in the shared application/domain layer where practical; Android system integration must not become the source of workout truth

SQLite remains authoritative for the recoverable Active Workout state.

## Local persistence

Confirmed:
- SQLite via `expo-sqlite`
- local-first workout/session persistence
- active-session recovery from SQLite
- explicit schema migrations
- large media binaries are not stored inside SQLite

## Backend

Confirmed:
- Supabase Postgres
- local SQLite is authoritative for immediate workout interaction
- Supabase is the server persistence target after synchronization

## Authentication

Confirmed:
- Supabase Auth
- Google + Kakao for the Android MVP
- auth/session secrets use secure device storage, not plain SQLite

Apple Sign in is not part of the current Android-only MVP.

## Media storage

Confirmed:
- Supabase Storage
- profile photos and support inquiry attachments are server-stored there
- SQLite keeps references/metadata/upload state rather than media binaries
- user-owned media is private/scoped by default

## Synchronization

Canonical:
- `docs/ux-decisions/2026-09-20-local-first-sync-policy.md`

Confirmed:
- durable local outbox / dirty-state model
- no per-keystroke or per-set remote request
- active-workout remote sync is batched/coalesced
- workout completion and explicit low-frequency Save actions trigger immediate best-effort sync
- app resume / connectivity restoration trigger pending sync
- exponential retry with jitter
- stable IDs + idempotent mutation IDs
- optimistic server version conflict detection
- media upload queue does not block core workout-data sync

## Android active-workout runtime

Confirmed product/runtime behavior:
- workout elapsed time uses an absolute persisted start timestamp and continues across app termination and device reboot
- a normal reboot does not end the Active Workout
- after boot, an unfinished Active Workout reconstructs its Android ongoing notification
- dismissing the notification does not mutate or end the workout
- Rest Timer end alert remains expected through screen-off, ordinary backgrounding, another foreground app, and recent-apps removal
- Android user Force stop is the explicit notification/background delivery exception until relaunch
- notification/runtime state is presentation only; SQLite remains authoritative

## Still open

- exact Android native implementation primitives where multiple options satisfy the locked behavior
- analytics / crash reporting
- deployment / Play release pipeline details

Production implementation is not authorized until the Product Owner explicitly switches to Development mode.
