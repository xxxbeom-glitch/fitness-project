# PostHog Product Analytics

**Date:** 2026-09-20  
**Status:** PO APPROVED · MVP PRODUCT ANALYTICS LOCKED

## Decision

Use **PostHog** for a small, explicit MVP product-usage analytics layer.

Boundary:
- PostHog = product-usage analytics
- Sentry = crash/error diagnostics
- Supabase = product/backend data and user-owned records

Do not use PostHog as an application database, workout-history store, or error-reporting replacement.

## Collection model

MVP uses **explicit named events only**.

Disable / do not enable:
- Session Replay
- automatic screen capture
- broad autocapture
- form/input capture
- arbitrary interaction capture
- advertising/marketing attribution

Reason:
- the MVP only needs enough telemetry to understand whether users reach the core value loop
- explicit events keep data volume, ambiguity, and privacy risk low

## Core value-loop funnel

Primary funnel:
1. onboarding completed
2. workout started
3. first set completed
4. workout completed
5. user returns and starts another workout

This funnel is the first analysis priority after launch.

## MVP event taxonomy

### Onboarding / permissions
- `onboarding_completed`
- `notification_permission_result`
- `exact_alarm_permission_result`

### Routine
- `routine_created`
- `routine_edited`
- `routine_deleted`
- `routine_duplicated`

### Workout
- `workout_started`
- `first_set_completed`
- `workout_completed`
- `workout_discarded`
- `workout_resumed`
- `exercise_added_during_workout`
- `exercise_replaced_during_workout`

### Timer
- `manual_timer_used`
- `rest_timer_used`

Workout/timer event rules:
- `workout_started` is the single workout-start event; distinguish source with `source = blank | routine` instead of a second routine-start event
- `first_set_completed` fires at most once per workout session, at the first completed set
- do not send an event for every countdown tick or every completed set
- `manual_timer_used` and `rest_timer_used` are captured at most once per workout session for adoption analysis

### Analysis / history
- `analysis_viewed`
- `body_area_detail_viewed`
- `workout_history_viewed`
- `workout_history_detail_viewed`

### Custom exercise / support / account
- `custom_exercise_created`
- `support_inquiry_submitted`
- `support_inquiry_failed`
- `account_deletion_started`

Total initial explicit event set: **24 events**.

## Allowed event properties

Only small, non-content properties that materially help product analysis.

Examples:
- `workout_started.source = blank | routine`
- `workout_completed.completion = complete | partial`
- `workout_resumed.source = home | notification | app_restore`
- `notification_permission_result.result = granted | denied | dismissed`
- `exact_alarm_permission_result.result = granted | denied | unavailable`
- routine/workout structural counts when useful, such as exercise-count or completed-set-count, without names or entered values
- app version / build number
- Android version
- app environment

## Data minimization

Do not send to PostHog:
- date of birth
- sex/gender profile field
- email
- nickname
- profile image
- routine names
- exercise names
- exact weight / reps / duration values
- custom-exercise names or free text
- support inquiry text or attachments
- auth tokens, secrets, cookies
- raw SQLite/Supabase rows
- precise timestamps beyond normal event time when not required
- advertising identifiers

The current demographic profile fields are not copied into PostHog in the MVP. Any future demographic segmentation requires a separate privacy/product decision.

## Identity

- use only the app's opaque internal account/user ID after authenticated identity is available
- do not use email/provider profile fields as analytics identity
- reset analytics identity on logout/account change
- do not create a second analytics identity model that can conflict with the canonical app account identity

## Environments

- local development: analytics disabled by default
- internal/preview builds: enabled with `app_environment = preview`
- production: `app_environment = production`
- preview data must remain filterable from production data

## Reliability boundary

- analytics delivery is best-effort
- failed PostHog delivery never blocks navigation, workout logging, SQLite persistence, Supabase sync, or completion
- do not delay user actions while waiting for analytics
- analytics events are not used to reconstruct product state

## QA before release

Verify in a preview build:
- each approved event fires once at the intended semantic point
- no duplicated events from rerender/retry
- no prohibited user-entered values appear in event properties
- logout resets analytics identity
- one representative core funnel can be reconstructed from test data

## NEXT

Proceed to Android deployment / Google Play release-pipeline architecture.

Production implementation remains unauthorized until explicit Product Owner approval.
