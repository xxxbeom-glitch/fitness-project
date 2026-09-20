# 04 ARCHITECTURE

**Status:** PARTIALLY FROZEN — LOCAL-FIRST + SQLITE + SUPABASE + SUPABASE AUTH LOCKED

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

## TBD

- server schema
- sync trigger / retry / conflict strategy
- event/state architecture
- background sync
- migration strategy

## Anti-overengineering rule

Do not introduce microservices, event buses, generic plugin systems, or future AI infrastructure during MVP unless a confirmed requirement makes them necessary.
