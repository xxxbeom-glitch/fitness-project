# 04 ARCHITECTURE

**Status:** PARTIALLY FROZEN — LOCAL-FIRST + SQLITE + SUPABASE + AUTH + STORAGE + SYNC LOCKED

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
- Apple Sign in is required before iOS production release
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

## TBD

- server schema
- event/state architecture
- exact platform background/runtime implementation
- migration strategy

## Anti-overengineering rule

Do not introduce microservices, event buses, generic plugin systems, or future AI infrastructure during MVP unless a confirmed requirement makes them necessary.
