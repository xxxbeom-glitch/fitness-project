# Platform / App Stack Architecture Gate

**Date:** 2026-09-20
**Status:** PO APPROVED · APP STACK LOCKED · DATA ARCHITECTURE NEXT

## Platform strategy

PO approved:
- one shared Android + iOS codebase from the beginning
- Android-first runtime/device QA
- Android-first production release
- iOS compatibility maintained during implementation
- iOS release only after iOS-specific real-device QA

## Application stack

Locked:
- React Native
- Expo
- TypeScript
- Windows + Cursor as primary development environment
- Expo Development Builds for production development; Expo Go is not the runtime contract
- native Kotlin / Swift integration remains available behind platform boundaries when required

## Rationale

The stack fits the current priorities:
1. active-workout reliability
2. solo AI-assisted development speed
3. shared Android/iOS codebase
4. native platform integration when required
5. maintainability / operating cost

A switch to Flutter is not justified by a current requirement and would add a separate Dart toolchain without resolving a known blocker.

## Still open

- local database technology
- backend/database provider
- auth implementation boundary
- offline-first sync/conflict mechanics
- media/profile-image storage
- analytics/crash reporting
- exact Android/iOS background/runtime implementation
- release pipeline details

## NEXT OPEN ITEM

Decide active-workout/workout-edit persistence:
**local-first vs server-first**.

Do not begin production implementation yet.
