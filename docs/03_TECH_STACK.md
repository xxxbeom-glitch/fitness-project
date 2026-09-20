# 03 TECH STACK

**Status:** PARTIALLY FROZEN — PLATFORM / APP STACK / LOCAL-FIRST / SQLITE / SUPABASE / AUTH / STORAGE / SYNC LOCKED · RUNTIME OPEN

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

## LOCKED — backend database

- Supabase
- server database = Supabase Postgres
- local SQLite remains authoritative for immediate workout interaction
- Supabase is the canonical server persistence target after synchronization

## LOCKED — authentication

- Supabase Auth
- Google + Kakao for current MVP login
- Apple Sign in added for iOS release alignment
- auth/session secrets must use secure platform storage, not plain SQLite

## LOCKED — media storage

- Supabase Storage
- profile photos and support inquiry attachments use Supabase Storage
- SQLite stores local/remote references and upload state, not large binary media
- user-owned media is private/scoped by default

## LOCKED — synchronization

Canonical policy:
- `docs/ux-decisions/2026-09-20-local-first-sync-policy.md`

- durable local outbox / dirty-state model
- active-workout remote sync coalesced and capped around one attempt per 5 minutes while dirty/foreground
- immediate attempt on workout completion and explicit low-frequency Save actions
- resume/connectivity-restored triggers pending sync
- exponential retry with jitter; no local rollback
- stable IDs + idempotent mutation IDs
- optimistic server version conflict detection
- one active-session write-owner device
- media uploads do not block core workout-data sync

## TBD

The following remain intentionally open:
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
1. platform runtime implementation details
2. analytics/crash reporting
3. deployment/release pipeline details

Future Watch implications remain non-MVP and must not drive MVP overengineering.
