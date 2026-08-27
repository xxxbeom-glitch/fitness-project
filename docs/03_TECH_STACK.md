# 03 TECH STACK

**Status:** BOOTSTRAP — NOT YET FROZEN

## CONFIRMED PRODUCT CONSTRAINTS

The technical design must support:
- mobile-first workout logging
- fast local interaction during active workouts
- active-session recovery after interruption/restart
- durable workout history
- independent history for custom exercises
- future Watch integration without making Watch an MVP dependency
- future export/API/AI integration without prematurely building those systems

## TBD

The following are intentionally not confirmed yet:
- Android-only first vs Android+iOS initial scope
- native vs cross-platform framework
- backend/database provider
- auth strategy
- offline-first vs online-first sync model
- analytics/crash reporting
- deployment/release pipeline

## Decision criteria

Technology should be chosen in this order:
1. active-workout reliability
2. development speed for a solo AI-assisted workflow
3. mobile UX quality
4. operating cost
5. maintainability
6. future iOS/Watch expansion

Do not select infrastructure merely because it is fashionable or familiar.

## RESEARCH NEEDED

Before freezing this file:
- compare realistic Android-first and cross-platform options for the current development environment
- verify Watch implications for the likely stack
- define session persistence and sync failure behavior
- verify current platform/store constraints where relevant
