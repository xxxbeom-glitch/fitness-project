# Local-first Sync Policy

**Date:** 2026-09-20
**Status:** PO DELEGATED · ARCHITECTURE LOCKED

## Core rule

Workout interaction never waits for the network.

Every user change writes to local SQLite first. Server synchronization only processes locally committed changes.

No sync request is sent merely because an input field changed on screen before the local write is committed.

## Change tracking

Use a durable local outbox / dirty-state model.

Each synchronizable record has:
- stable client-generated ID
- local modified timestamp
- sync state
- server version/revision when known

Each outbound mutation has an idempotency/mutation ID so retrying the same mutation does not duplicate data.

Deletes synchronize as tombstones/soft-delete mutations first; do not depend on immediate hard deletion.

## Trigger policy

Do not synchronize every keystroke or set tap.

When pending changes exist and network/auth are available:
- while an active workout is running in the foreground, coalesce changes and attempt at most about once every 5 minutes
- workout completion triggers an immediate sync attempt
- explicit low-frequency Save actions such as routine/custom-exercise/profile Save may trigger an immediate sync attempt
- app foreground/resume checks pending changes and attempts a sync
- connectivity restoration checks pending changes and attempts a sync after a short debounce
- background execution may perform a best-effort flush when the OS allows it, but correctness must never depend on background execution

If nothing is dirty/pending, no sync request is made.

Batch related dirty records instead of sending one request per field/set mutation.

## Retry policy

A failed sync never rolls back local data.

Retry only while the network is actually available.

Use exponential backoff with jitter, approximately:
- 10 seconds
- 30 seconds
- 2 minutes
- 5 minutes
- 15 minutes
- then cap around 1 hour

A successful sync resets retry state.

A meaningful foreground/user event such as workout completion or app resume may request an earlier retry, but must still deduplicate concurrent sync jobs.

Only one sync worker per account/device may actively flush the outbox at a time.

## Conflict policy

Never silently overwrite newer unsynced local workout data.

Use optimistic server revisions/versions:
- local record remembers the server version it was based on
- update succeeds only against the expected server version
- version mismatch is detected as a conflict, not silently overwritten

For MVP:
- the device that starts an active workout is the write-owner of that active session until it is completed/discarded; another device must not concurrently mutate the same active session
- clean local records accept newer server versions
- dirty local records are never replaced before their pending mutation is reconciled
- routine/profile/custom-exercise conflicts are resolved deterministically after fetching the current server row; the losing payload must not be destroyed before reconciliation is complete
- completed workout/history data must never be duplicated by retries because all writes are ID-based and idempotent

Concurrent multi-device editing of the exact same non-active entity is an edge case; no dedicated conflict-resolution UI is added to MVP unless real QA evidence shows it is needed.

## Efficiency rules

- no polling loop solely for synchronization
- no per-keystroke/per-set network request
- batch pending mutations
- send only changed records/fields required by the server contract
- avoid downloading full history when incremental version/cursor sync is sufficient
- media upload queue is separate from core workout-data sync so a large/failed image upload cannot block workout records

## Recovery invariant

At any point:
- SQLite contains the recoverable local state
- pending sync work survives app restart
- sync failure can delay cloud freshness but cannot invalidate locally saved workout data

## NEXT OPEN ITEM

Platform runtime architecture:
- Android active-workout foreground/ongoing notification execution
- iOS equivalent boundary / later Live Activity implementation
- background/foreground recovery mechanics

Production implementation remains unauthorized until the Product Owner explicitly switches to Development mode.
