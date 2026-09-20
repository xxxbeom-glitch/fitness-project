# Platform / App Stack Architecture Gate

**Date:** 2026-09-20
**Status:** PO APPROVED · APP STACK / LOCAL-FIRST / SQLITE LOCKED · BACKEND NEXT

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

## Still open

- backend/database provider
- backend/database provider
- auth implementation boundary
- exact sync trigger / retry / conflict mechanics
- media/profile-image storage
- analytics/crash reporting
- exact Android/iOS background/runtime implementation
- release pipeline details

## NEXT OPEN ITEM

Choose the backend/database provider.

Do not begin production implementation yet.
