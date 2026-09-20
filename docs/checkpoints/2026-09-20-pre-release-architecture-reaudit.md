# Pre-release Architecture Re-audit

**Date:** 2026-09-20  
**Status:** COMPLETE · BLOCKS 01–14 PO PASS · DEVELOPMENT NOT AUTHORIZED

## Purpose

Before defining the Android deployment / Google Play release pipeline, re-check the already locked architecture from the beginning, one block at a time.

This is an explicit Product Owner re-review request, so previously approved architecture may be reopened only where the re-audit finds a concrete conflict, regression risk, missing implementation boundary, or a lesson from the prior OnTalk project.

Comparison source:
- current Tampin canonical decisions/specs
- OnTalk repository `xxxbeom-glitch/ontalk`, especially:
  - `docs/CURRENT.md`
  - `docs/QA_RELEASE.md`
  - `docs/GOOGLE_PLAY_CONSOLE_PREP.md`
  - `docs/GOOGLE_PLAY_CONSOLE_ONTALK_PROFILE.yaml`
- current official platform documentation where the fact is time-sensitive

Do not begin Android/Google Play release-pipeline design until this re-audit is complete.

## Re-audit order

1. Platform scope — Android only
2. Application stack — React Native + Expo + TypeScript / native Android boundary
3. Local-first persistence
4. SQLite local database
5. Supabase backend / server authority
6. Authentication — Google + Kakao / secure session storage
7. Supabase Storage / user media
8. Sync / conflict / multi-device behavior
9. Active Workout Android runtime / reboot / notification / Rest Timer
10. Notification permission / channels / exact alarm / sound
11. Sentry crash/error reporting
12. PostHog product analytics
13. Play submission source-data / policy profile readiness
14. Android build / signing / Internal → Closed → Production release pipeline

Proceed sequentially and stop after each block for Product Owner continuation.

---

## Block 01 — Platform scope: Android only

### Current Tampin contract
- MVP target = Android only
- runtime/device QA = Android
- first production release = Android
- no iOS compatibility requirement
- no Apple Sign in / iPhone QA / App Store / Live Activity in current scope
- future iOS requires a separate Product/Architecture decision

Canonical:
- `docs/ux-decisions/2026-09-20-android-only-platform-scope.md`

### Evidence / OnTalk comparison
- OnTalk's actual release/testing history is Android/Google Play centered and reached verified Internal + Closed Test operation without an iOS dependency.
- OnTalk's costly release problems were Play Console policy/data-safety/test-track/artifact-lineage issues, not lack of iOS parity.
- Therefore there is no OnTalk-derived evidence that Tampin should preserve iOS compatibility in the current MVP.

### QA verdict
**PASS**

Reason:
- Android-only reduces current release/runtime surface area.
- It matches the Product Owner's current production intent.
- It avoids iOS-specific work that does not improve the Android MVP.
- No current approved feature requires iOS parity.

### Regression / follow-up
- Do not let shared React Native abstractions silently reintroduce iOS requirements.
- Future iOS remains a separate decision and must not change current Android acceptance criteria.

## Block 02 — Application stack: React Native + Expo + TypeScript / native Android boundary

### Current Tampin contract
- React Native + Expo + TypeScript
- Expo Development Builds, not Expo Go, for production development
- Android-native Kotlin integration is allowed where required
- no framework migration merely because the product is Android-only

### Evidence / OnTalk comparison
- OnTalk's verified Android runtime was a fully native Kotlin/Jetpack Compose/Gradle project.
- That stack reached Internal and Closed Test successfully, so native Android itself was not a failure.
- However, the later release history required strict tracking of which app branch/commit/versionCode represented the actual tested artifact.
- Tampin therefore benefits from keeping the native surface smaller while still allowing native Android adapters where system APIs require them.

### Locked re-audit boundary
- keep React Native + Expo + TypeScript
- use Expo Development Builds
- keep product/domain logic in the shared TypeScript/application layer
- use Kotlin/Expo native modules only for Android system integration such as reboot recovery, exact alarm, notification/runtime, and short timer-sound playback
- prefer reproducible Expo Config Plugin / native-module configuration over scattered manual edits to generated Android files
- do not switch to full native Kotlin, Flutter, or Bare React Native without a concrete blocker

### QA verdict
**PASS**

Reason:
- current requirements are satisfiable without a framework migration
- Android-specific requirements can be isolated behind a small native boundary
- this minimizes release/build surface area while preserving access to Android APIs
- no current evidence shows that Expo Development Builds are a blocker for the approved MVP

### Follow-up
- actual package layout / config-plugin implementation is a Development-mode detail
- generated native files must not become an undocumented second source of truth

## Block 03 — Local-first persistence scope and semantics

### Re-audit result
Local-first remains correct for workout/product state that must survive poor connectivity:
- Active Workout / workout records
- saved routines
- custom exercises
- local app settings

Server-confirmed actions are explicitly outside local-first completion:
- authentication
- account deletion
- support inquiry submission
- profile/media upload completion

Network restoration may retry synchronization of state the user already accepted locally, but must not silently create a new user-visible action that previously failed.

### OnTalk comparison
OnTalk exposed two concrete network-behavior failure modes relevant here:
- offline support could appear successfully submitted
- a failed chat message could automatically send after reconnect without a fresh user action

Tampin therefore separates:
- replication of already-saved local product state → automatic retry allowed
- new server-confirmed user action → server success / explicit retry required

Canonical policy amended:
- `docs/ux-decisions/2026-09-20-local-first-sync-policy.md`

### QA verdict
**PASS**

## Block 04 — SQLite local database suitability and operating rules

### Re-audit result
Keep `expo-sqlite` as the durable local database for the MVP.

Locked operating rules:
- SQLite is real local application storage, not a disposable cache
- core workout/session/routine/custom-exercise state uses structured tables and stable IDs
- schema changes use explicit migrations so existing user records survive app updates
- multi-row state changes that must succeed/fail together use transactions
- media binaries and auth/session secrets remain outside SQLite
- user-owned local records must be account-scoped so unsynced Account A data cannot appear under or sync into Account B
- no additional database encryption/ORM layer is required for MVP unless implementation evidence shows a concrete need

### OnTalk comparison
- OnTalk used SharedPreferences + JSON for some chat cache/pending state.
- It later required explicit account-scoped cache envelopes and cache-publication guards to avoid showing another account's stale data.
- Tampin's relational workout/session/set model is materially more structured, so SQLite is the safer default than expanding JSON preference storage.

### QA verdict
**PASS**

## Block 05 — Supabase backend / server authority

### Re-audit result
Keep Supabase Postgres as the server persistence target.

Locked operating rules:
- SQLite remains authoritative for immediate local workout interaction; Supabase is the durable server/cloud target after sync
- user-owned tables exposed to the Data API require least-privilege grants plus Row Level Security
- authenticated access alone is not sufficient; ownership checks must restrict each user to their own rows
- the Android client may use a publishable key but never contains service-role/secret credentials
- multi-step operations that must be atomic use a server-side transaction/RPC or equivalent server-owned path
- database schema/security changes are migration-tracked in source control rather than dashboard-only undocumented changes
- server rules must defend correctness even when the client is stale or buggy

### OnTalk comparison
- OnTalk successfully used Supabase through Internal and Closed Test.
- Important production bugs occurred when terminal/chat rules were enforced only in client state or when related server mutations were not atomic.
- The fixes moved critical invariants to the server/RLS layer, such as refusing messages after a room had ended and combining report success with room termination.
- Tampin therefore keeps Supabase, but treats the server as an independent correctness/security boundary rather than trusting UI state.

### QA verdict
**PASS**

## Block 06 — Authentication: Google + Kakao / Supabase Auth / secure session storage

### Re-audit result
Keep Supabase Auth with Google + Kakao for the Android MVP.

Locked operating rules:
- Supabase Auth user ID is the canonical account identity; provider email/nickname is not the primary account key
- first-time authenticated users remain onboarding-incomplete until Basic Info is completed
- interrupted onboarding resumes for the same internal account instead of creating a duplicate
- app startup distinguishes auth/session restore from confirmed signed-out state; do not route based on a transient restore gap
- auth/session secrets are stored in secure platform storage, not SQLite or ordinary preferences
- local SQLite data remains account-scoped; logging into Account B must never expose or sync Account A's unsynced records
- logout clears the active auth/session context but does not silently destroy unsynced account-owned local workout data
- no separate manual Google↔Kakao account-linking UI is added to MVP; Supabase-supported identity linking may be used where its verified identity conditions apply

### OnTalk comparison
- OnTalk had a real cold-start Auth restore race where persisted local credentials allowed navigation before Supabase session restoration completed.
- A server chat room could then become incorrectly fixed to a local path until re-entry.
- Tampin therefore treats auth restoration as an explicit startup state and never interprets a temporary missing session as a confirmed logout or different account.

### QA verdict
**PASS**

## Block 07 — Supabase Storage / user media

### Re-audit result
Keep Supabase Storage for the limited MVP user-media surface.

Locked operating rules:
- separate private buckets for profile images and support attachments
- Storage objects are user/account scoped by policy
- SQLite/Postgres store object path/URI/state metadata, not image binaries
- profile image change is not complete until object upload + profile reference update succeed
- support submission is not complete until its required attachment/server submission path succeeds
- object presence alone never determines which image is the active profile image; the profile row stores the canonical active object path
- failed/orphaned uploads are cleanup candidates and must not be interpreted as active product state
- no public bucket is needed for current Tampin profile/support scope

### OnTalk comparison
- OnTalk profile-photo flows became complex when Storage listing, local cache, and representative-photo state could disagree after logout/relogin and multi-photo edits.
- OnTalk production hardening also moved profile-photo Storage from public to private.
- Tampin avoids those failure modes by using one explicit canonical profile-image reference instead of inferring active state by listing a folder.

### QA verdict
**PASS**

## Block 08 — Sync / conflict / multi-device behavior

### Re-audit result
Keep the existing durable outbox + batched synchronization + idempotent mutation + optimistic-version model.

Locked operating rules:
- an Active Workout is write-owned by the device that started it until completion/discard
- cross-device continuation/editing of the same in-progress workout is outside MVP
- two independently created workouts on two devices remain two distinct workouts; do not guess-merge them
- retries use stable record/mutation IDs so uncertain network responses cannot create duplicate workout/history records
- conflict detection uses server revision/version rather than trusting device wall-clock order
- newer unsynced local work is never silently overwritten
- automatic retry is allowed only for replication of product state the user already accepted locally
- server-confirmed actions such as support submission/account deletion/profile upload are not silently replayed as new user actions
- Android permission/system settings are device-local and are not synchronized across devices

### OnTalk comparison
- OnTalk had durable pending/offline-message correctness work and later a regression where reconnect silently retried a failed message without fresh user intent.
- OnTalk also had stale/account-unscoped cache leakage risk across relogin/account switch.
- Billing history used exact-once/idempotent processing to prevent duplicate credit grants after retry.
- Tampin carries those lessons into workout sync: durable pending state, account scope, no silent new action, and duplicate-safe retry.

### QA verdict
**PASS**

## Block 09 — Active Workout Android runtime / process death / reboot / notification restoration

### Re-audit result
Keep the current Active Workout runtime architecture.

Locked operating rules:
- SQLite remains the authoritative Active Workout state
- elapsed time is reconstructed from a persisted absolute start timestamp; no continuously running JavaScript timer is required
- ordinary backgrounding / process death does not end or corrupt the workout
- reopening Tampin restores the same persisted Active Workout rather than creating a replacement session
- normal reboot reconstructs the ongoing notification from persisted state when Android allows the boot/runtime delivery path
- boot-time notification reconstruction may be delayed by Android background restrictions; such delay never changes workout data
- user Force stop is an Android delivery/runtime exception until the user launches Tampin again; the persisted workout itself is not deleted
- notification visibility is presentation-only and never owns workout state
- notification/deep-link entry restores auth/account context and validates the persisted session before navigating to the Active Workout
- no continuous Foreground Service is introduced solely for the workout elapsed timer/ongoing notification

### OnTalk comparison
- OnTalk had real cold-start/lifecycle regressions where navigation or remote/local mode decisions were made before Auth restoration was complete.
- Tampin therefore does not let a notification tap or cold start bypass account/session restoration before binding an Active Workout.
- OnTalk's lifecycle/device history also reinforces that persisted state and runtime presentation must be treated as separate layers.

### QA verdict
**PASS**

## Block 10 — Notification permission / channels / exact alarm / Rest Timer sound

### Re-audit result
Keep the current notification/Rest Timer product behavior with one implementation-boundary amendment.

Locked:
- Android 13+ `POST_NOTIFICATIONS` is requested contextually after the first Active Workout is already persisted; denial never blocks or rolls back the workout
- MVP channels remain exactly `운동 진행` + `휴식 타이머`
- no updates/notices/marketing channel or speculative remote-push stack
- `05F_Workout_RestTimer` uses `SCHEDULE_EXACT_ALARM` where access is available; denial/revocation falls back without mutating workout data
- selectable app-owned sounds remain `기본 / 차임 / 벨`, separate from immutable notification-channel sound
- no custom vibration pattern
- app-level Rest Timer alert OFF means no rest-end notification and no app-owned completion sound
- blocked Android notification delivery is not bypassed by secretly playing the separate app-owned sound
- do not pre-lock `mediaPlayback` Foreground Service as mandatory; prove the smallest compliant native delivery mechanism in Development Build/device QA and add a short-lived FGS only if necessary

### OnTalk comparison
- OnTalk had a real mismatch between app notification preference and effective Android OS permission state, requiring explicit recovery/effective-state handling.
- Tampin therefore treats app preference, `POST_NOTIFICATIONS`, and exact-alarm access as separate gates.
- OnTalk also showed that permission recovery prompts can become intrusive if triggered at generic app-entry points; Tampin keeps the request contextual to the workout/timer value moment.

### QA verdict
**PASS**

## Block 11 — Sentry crash/error reporting

### Re-audit result
Keep Sentry as the single MVP crash/error diagnostics service.

Locked:
- Sentry is diagnostics only; Supabase remains product/backend state and PostHog remains product analytics
- capture unhandled JavaScript errors, native Android crashes surfaced through the Expo/React Native integration, release/build identity, symbolicated stacks, and sparse non-content breadcrumbs
- Session Replay stays OFF
- performance tracing/profiling stays OFF for MVP unless a later concrete performance problem justifies it
- do not send profile/demographic data, workout-entered values, routine/exercise names, support content, tokens/secrets, or raw database rows
- source-map upload credentials remain build/CI secrets and are never app runtime secrets
- Internal/Preview must prove one intentional test error resolves to a readable source-mapped stack before release
- Sentry failure never blocks launch, workout logging, persistence, or sync

### OnTalk comparison
- OnTalk used Crashlytics and still required real device/logcat/stack-trace evidence for a production-style Chat Room entry crash.
- The lesson is not to duplicate crash providers, but to keep one reliable crash service and still require reproduction/test evidence before declaring a fix PASS.
- Tampin therefore uses Sentry only; no duplicate Crashlytics integration is added for MVP.

### QA verdict
**PASS**

## Block 12 — PostHog product analytics / event taxonomy

### Re-audit result
Keep PostHog as the MVP product-usage analytics service, with a simplified explicit event taxonomy.

Amendment:
- remove duplicate `workout_started_from_routine`
- use one `workout_started` event with `source = blank | routine`
- `first_set_completed` fires at most once per workout session
- final initial explicit event taxonomy = **24 events**

Locked boundaries remain:
- explicit named events only
- no Session Replay / broad autocapture / form-input capture / advertising attribution
- no profile demographics, email/nickname, routine/exercise names, exact workout-entered values, support content, secrets, or raw database rows
- PostHog identity uses opaque internal account ID only and resets on logout/account change
- analytics is best-effort and never blocks product behavior

### OnTalk comparison
- OnTalk introduced a deliberately small release-time analytics set focused on a defined funnel rather than broad event collection.
- Tampin keeps a somewhat wider but still bounded taxonomy and removes redundant event names before implementation.

### QA verdict
**PASS**

## Block 13 — Google Play submission source-data / policy profile readiness

### Re-audit result
Adopt an app-specific, machine-readable Google Play submission profile before implementation/release work proceeds.

Created:
- `docs/GOOGLE_PLAY_CONSOLE_TAMPIN_PROFILE.yaml`

Locked operating rules:
- Play Console answers are derived from actual Tampin behavior, SDKs, permissions, Supabase schema/storage, Sentry/PostHog behavior, and live policy wording
- do not copy OnTalk Data Safety answers
- profile tracks known / implementation-audit-needed / console-readback-needed / PO-decision-needed fields separately
- OAuth App Access review credentials are prepared outside GitHub; secrets never enter the repo
- public Terms / Privacy / account-deletion URLs remain required release follow-ups
- account creation means both in-app deletion flow and an external deletion-request route must be ready before Production
- current product stores workout/routine history and therefore requires current Play Health/Activity & Fitness declaration review
- final Data Safety selection is not frozen before implementation audit
- target audience remains a Product Owner decision; OnTalk's 18+ choice is not inherited
- package name remains intentionally undecided until Block 14 because it becomes a long-lived release identity

### OnTalk comparison
- OnTalk lost time reconstructing Data Safety, App Access, policy URLs, target audience, store assets, and testing-track facts late in the release cycle.
- Its later Play profile made the missing/verified distinction explicit.
- Tampin starts with that source-data model before its first Android release artifact.

### QA verdict
**PASS**

## Block 14 — Android package / build / signing / Internal → Closed → Production release pipeline

### Re-audit result
Lock the Android release identity and release artifact lineage.

PO-approved package name:
- `com.lumian.tampin`

Locked release architecture:
- Expo / EAS Build is the canonical release-build path
- Google Play release artifact = AAB
- Google Play App Signing is used; release secrets/private keys are not stored in GitHub
- actual Play-distributed signing certificate fingerprints must be registered with Google/Kakao where required
- each release candidate records git SHA ↔ EAS Build ID ↔ versionName ↔ versionCode ↔ exact AAB ↔ Play track
- after Internal verification, promote the same verified artifact to Closed and then Production rather than rebuilding merely for track movement
- first-release Production publish remains an explicit Product Owner gate; no unattended auto-publish
- package registration/availability is read back when the Play app is created; rejection of the chosen package name reopens only that identity decision
- current target API / tester-count / tester-duration / policy details are re-read from the actual Play Console at execution time instead of copying OnTalk values

Canonical:
- `docs/ux-decisions/2026-09-20-android-release-pipeline.md`
- `docs/GOOGLE_PLAY_CONSOLE_TAMPIN_PROFILE.yaml`

### OnTalk comparison
- OnTalk reached Internal/Closed Test, but later had costly ambiguity between operational branch state, runtime branch state, versionCode, and the actual tested Play artifact.
- Tampin therefore treats artifact lineage as a release invariant from the first RC and promotes verified artifacts without unnecessary rebuilds.

### QA verdict
**PASS**

## Re-audit closure

**PASS — Blocks 01–14 complete.**

The pre-release architecture re-audit is closed.

NEXT GATE:
- Product Owner explicit Development-mode authorization before creating the first scoped production implementation Issue.

Do not begin production implementation from this checkpoint alone.
