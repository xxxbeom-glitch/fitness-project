# 03 TECH STACK

**Status:** PARTIALLY FROZEN — PLATFORM / APP STACK / LOCAL-FIRST / SQLITE LOCKED · BACKEND OPEN

## CONFIRMED PRODUCT CONSTRAINTS

The technical design must support:
- mobile-first workout logging
- fast local interaction during active workouts
- active-session recovery after interruption/restart
- durable workout history
- independent history for custom exercises
- future Watch integration without making Watch an MVP dependency
- future export/API/AI integration without prematurely building those systems

## LOCKED — platform / application layer

Platform:
- Android + iOS are developed from one shared codebase from the beginning
- Android is the first runtime/device QA target
- Android is the first production release target
- iOS-compatible code/configuration is maintained during development
- iOS release requires its own real-device QA and is not inferred from Android PASS

Application stack:
- React Native
- Expo
- TypeScript
- primary development environment: Windows + Cursor
- use Expo Development Builds for production development; Expo Go is not the runtime contract
- platform-specific native functionality may use Expo/React Native native modules when required

Decision record:
- `docs/ux-decisions/2026-09-20-platform-app-stack-architecture-gate.md`

## LOCKED — persistence direction

- workout interaction is local-first
- active-session and workout edits persist locally before any server sync
- network availability must not block workout recording
- server sync is asynchronous and follows a separate policy
- unsynced local changes must survive interruption/restart
- sync failure must never roll back locally saved workout data

## LOCKED — local database

- SQLite via `expo-sqlite`
- durable local source for workout/session/routine/custom-exercise data
- active-session recovery reads from SQLite
- explicit schema migrations are required
- large media binaries are not stored directly in SQLite

## TBD

The following remain intentionally open:
- backend/database provider
- auth implementation boundary
- sync trigger / retry / conflict policy
- media/profile-image storage
- analytics/crash reporting
- exact background/runtime implementation
- deployment/release pipeline details

## Decision criteria

Technology should be chosen in this order:
1. active-workout reliability
2. development speed for a solo AI-assisted workflow
3. mobile UX quality
4. operating cost
5. maintainability
6. future iOS/Watch expansion

Do not select infrastructure merely because it is fashionable or familiar.

## NEXT ARCHITECTURE WORK

Proceed one decision at a time:
1. backend/database provider
2. auth/storage boundary
3. sync trigger / retry / conflict contract
4. platform runtime implementation details

Future Watch implications remain non-MVP and must not drive MVP overengineering.
