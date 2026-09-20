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

## NEXT OPEN ITEM

**Block 02 — Application stack: React Native + Expo + TypeScript / native Android boundary.**
