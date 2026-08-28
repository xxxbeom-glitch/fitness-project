# 09 TECHNICAL STACK

**Status:** CONFIRMED — BOOTSTRAP
**Updated:** 2026-08-28

## Platform strategy

The product is developed as one shared cross-platform mobile application rather than building Android first and later porting the product to iOS.

Confirmed application stack:

- **React Native**
- **Expo**
- **TypeScript**
- development environment: **Windows PC + Cursor**

Android and iOS remain product targets from the beginning and should share the same primary application codebase wherever practical.

## Build and test constraint

The Product Owner currently has an Android device but does not currently have an iPhone.

Therefore the current runtime/device QA policy is:

- Android runtime/device QA is performed continuously during implementation.
- iOS-compatible code and configuration are maintained during development rather than postponed as a later port.
- iOS builds may use Expo/EAS cloud build infrastructure when required from the Windows development environment.
- **iOS runtime/device QA is explicitly NOT considered complete while no iPhone test device is available.**
- Once an iPhone is acquired, iOS runtime/device QA begins immediately and all release-critical flows must be verified on the real device before iOS release.

Android runtime success must never be used as evidence that iOS runtime QA has passed.

## Release implication

Until an iPhone is available, iOS-specific device behavior remains an open QA item rather than a blocker for shared-code implementation.

Before an iOS production release, at minimum the real-device QA pass must cover authentication, onboarding, workout logging, local persistence/session recovery, cloud synchronization, account management/deletion, navigation, keyboard/input behavior, background/foreground transitions, and other release-critical flows.

## Decision rationale

This approach preserves one shared implementation path while matching the current hardware reality. It avoids wasting time on a later Android-to-iOS rewrite, but it also avoids pretending that cross-platform source compatibility is equivalent to real iOS runtime verification.
