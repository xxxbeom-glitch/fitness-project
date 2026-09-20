# 09 TECHNICAL STACK

**Status:** CONFIRMED — PLATFORM / APP STACK
**Updated:** 2026-09-20

## Platform strategy

The product is developed as one shared cross-platform mobile application rather than building Android first and later porting the product to iOS.

Current release strategy:
- Android = first continuous real-device QA target
- Android = first production release target
- iOS compatibility is maintained in the shared codebase from the beginning
- iOS release follows only after iOS-specific real-device QA

Confirmed application stack:
- **React Native**
- **Expo**
- **TypeScript**
- development environment: **Windows PC + Cursor**
- production development runtime: **Expo Development Build**

Android and iOS remain product targets from the beginning and should share the same primary application codebase wherever practical.

## Build and test policy

- Android runtime/device QA is performed continuously during implementation.
- Android is the first production release target.
- iOS-compatible code and configuration are maintained during development rather than postponed as a later port.
- iOS builds may use Expo/EAS cloud build infrastructure when required from the Windows development environment.
- **iOS runtime/device QA is not complete until release-critical flows are verified on a real iPhone.**

Android runtime success must never be used as evidence that iOS runtime QA has passed.

## Release implication

iOS-specific device behavior remains a separate QA gate and is not a blocker for Android-first shared-code implementation or Android-first release.

Before an iOS production release, real-device QA must cover authentication, onboarding, workout logging, local persistence/session recovery, cloud synchronization, account management/deletion, navigation, keyboard/input behavior, background/foreground transitions, and other release-critical flows.

## Native integration boundary

Cross-platform does not mean avoiding native APIs.

Where required:
- Android ongoing workout / foreground notification behavior may use Kotlin/native Android integration behind a React Native/Expo module boundary.
- iOS Live Activity / notification behavior may use Swift/native iOS integration behind the equivalent boundary.
- product/domain state must remain platform-neutral so these integrations do not create two separate application architectures.

## Decision rationale

This approach preserves one shared implementation path while matching the Android-first QA/release strategy. It also keeps platform-native escape hatches for notification/background features without forcing a later rewrite.

Decision record:
- `docs/ux-decisions/2026-09-20-platform-app-stack-architecture-gate.md`
