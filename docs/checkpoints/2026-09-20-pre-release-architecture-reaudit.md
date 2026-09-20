# Pre-release Architecture Re-audit

**Date:** 2026-09-20  
**Status:** ACTIVE · PO REQUESTED RE-AUDIT BEFORE ANDROID / GOOGLE PLAY RELEASE PIPELINE

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

## NEXT OPEN ITEM

**Block 05 — Supabase backend / server authority.**
