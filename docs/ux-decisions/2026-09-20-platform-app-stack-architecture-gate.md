# Platform / App Stack Architecture Gate

**Date:** 2026-09-20
**Status:** PO APPROVED · APP STACK / LOCAL-FIRST / SQLITE / SUPABASE / AUTH / STORAGE LOCKED · SYNC NEXT

## Platform strategy

PO approved:
- one shared Android + iOS codebase from the beginning
- Android-first runtime/device QA
- Android-first production release
- iOS compatibility maintained during implementation
- iOS release only after iOS-specific real-device QA

## Application stack

Locked:
- React Native
- Expo
- TypeScript
- Windows + Cursor as primary development environment
- Expo Development Builds for production development; Expo Go is not the runtime contract
- native Kotlin / Swift integration remains available behind platform boundaries when required

## Rationale

The stack fits the current priorities:
1. active-workout reliability
2. solo AI-assisted development speed
3. shared Android/iOS codebase
4. native platform integration when required
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
- Apple Sign in is added for iOS release alignment
- authentication identity is the stable account boundary used to associate server-side user data

Rules:
- Supabase Auth is the canonical authentication service
- Google / Kakao / Apple provider identities map into the same application account model
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

## Still open

- exact sync trigger / retry / conflict mechanics
- analytics/crash reporting
- exact Android/iOS background/runtime implementation
- release pipeline details

## NEXT OPEN ITEM

Define the synchronization trigger / retry / conflict contract.

Do not begin production implementation yet.
