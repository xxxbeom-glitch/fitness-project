# Android-only Platform Scope

**Date:** 2026-09-20  
**Status:** PO APPROVED · SUPERSEDES SHARED ANDROID+iOS PLATFORM PLAN

## Decision

Current Tampin MVP and production scope is Android only.

This supersedes the earlier decision to maintain one shared Android+iOS product implementation from the beginning.

Locked:
- target platform = Android
- runtime/device QA = Android
- first production release = Android
- current production architecture does not need to preserve iOS compatibility
- iOS-specific runtime, notification, Live Activity, Apple sign-in, iPhone QA, and App Store release work are outside the current MVP scope
- a future iOS product may be reconsidered through a separate Product/Architecture decision; current Android development must not be overengineered to preserve hypothetical iOS compatibility

## Application stack

Keep:
- React Native
- Expo
- TypeScript
- Windows + Cursor
- Expo Development Builds

The stack remains acceptable for the Android-only product and does not need to change merely because iOS has been removed from current scope.

Android-specific native modules / Kotlin integration are allowed where required for:
- ongoing workout notification/runtime behavior
- reboot recovery
- Rest Timer alert delivery
- other Android system integrations that cannot be reliably expressed in the cross-platform layer

## Authentication impact

Current MVP providers:
- Google
- Kakao

Apple Sign in is removed from current MVP/release requirements.

## Runtime impact

The existing approved Android behaviors remain authoritative:
- unfinished Active Workout survives process interruption and reboot through SQLite recovery
- elapsed workout time continues across reboot
- ongoing workout notification is reconstructed after normal reboot
- dismissing the notification does not affect the workout session
- Rest Timer end alert is expected through screen-off/background/recent-apps removal, with Android Force stop as the explicit exception

No iOS equivalent needs to be designed or implemented in the current MVP.

## NEXT OPEN ITEM

Finish Android runtime architecture details, then move to analytics/crash reporting and Android release pipeline.

Production implementation remains unauthorized until explicit Product Owner development approval.
