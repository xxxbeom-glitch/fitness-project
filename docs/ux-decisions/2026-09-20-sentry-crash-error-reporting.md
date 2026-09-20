# Sentry Crash / Error Reporting

**Date:** 2026-09-20  
**Status:** PO APPROVED · MVP OBSERVABILITY LOCKED

## Decision

Use **Sentry** as the current MVP crash/error reporting service for the Android React Native + Expo app.

Boundary:
- Sentry = crash/error diagnostics
- Supabase = product/backend data
- product usage analytics remains a separate decision and is not implied by adopting Sentry

## MVP scope

Enable Sentry for:
- unhandled JavaScript errors
- native Android crashes surfaced through the React Native/Expo integration
- release/build identification
- stack traces with source-map symbolication
- limited diagnostic breadcrumbs needed to reproduce failures

Do not enable for current MVP:
- Session Replay
- product analytics
- performance tracing/profiling unless a later concrete performance problem justifies it
- advertising/marketing attribution
- arbitrary user-event tracking
- recording form/input values for debugging

## Privacy / data minimization

Do not send the following to Sentry:
- date of birth
- email address
- nickname
- profile image
- workout weight/reps/duration values
- routine names entered by the user
- support inquiry contents/attachments
- auth tokens, cookies, API keys, secrets
- raw Supabase rows or SQLite records

Allowed diagnostic context:
- opaque internal user/account ID only
- app version / build number
- Android version / device model when supplied by the SDK
- current canonical screen/route name
- whether an Active Workout exists: yes/no
- high-level runtime state such as foreground/background, online/offline, permission availability
- stable error codes / feature area labels that do not contain user-entered data

Rules:
- default PII transmission remains disabled
- add a Sentry filtering/scrubbing layer before events leave the app
- never use Sentry as a substitute for application database logging

Breadcrumbs / manual diagnostic logs:
- only stable screen/feature/result/error-code context
- never include workout-entered values, routine/exercise names, profile fields, support content, tokens, or raw database payloads
- keep breadcrumbs intentionally sparse rather than mirroring application logs

## Environments

- local development: Sentry disabled by default
- internal/preview test builds: enabled in a non-production environment
- production builds: enabled in production environment
- test and production issues must remain distinguishable

## Release / source maps

- build/release pipeline must upload the matching source maps for Sentry symbolication
- source-map upload credentials such as `SENTRY_AUTH_TOKEN` stay in the build/CI secret environment and are never shipped as app runtime secrets
- release identifier must map to the actual app version/build
- validate symbolication with one intentional test error in an Internal/Preview build; do not intentionally crash public Production users for this check
- a release must not be considered observability-ready until that test error is confirmed in Sentry with readable stack information

## Failure behavior

- Sentry initialization/upload failure must never block app launch or workout logging
- offline Sentry delivery must not interfere with the local-first workout persistence/sync model
- crash reporting is diagnostics only and is never authoritative application state

## NEXT

Decide whether the current MVP needs separate product-usage analytics at all.

Production implementation remains unauthorized until explicit Product Owner approval.
