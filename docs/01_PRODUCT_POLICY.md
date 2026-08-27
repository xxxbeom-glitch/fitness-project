# 01 PRODUCT POLICY

**Status:** BOOTSTRAP — PARTIALLY DEFINED

## CONFIRMED

### Training-data principle
Workout records are user-owned product data and must not be silently altered by recommendation or AI features.

### Active-session reliability
The app must preserve or recover the current workout after app interruption/restart whenever technically feasible. Silent loss of logged sets is unacceptable.

### User control
The app must allow users to modify the active session without forcing a predefined exercise order.

### Gym/location privacy
If gym registration is introduced later:
- gym selection must be optional
- it must be separate from real-time location sharing
- default visibility should favor privacy

## TBD

- account required vs guest-first
- login methods
- cloud sync policy
- data retention
- account deletion
- export/delete request handling
- telemetry/analytics policy
- crash reporting policy
- age restriction, if any

## RESEARCH NEEDED

Before first production release, verify relevant Google Play / App Store privacy-disclosure requirements and any health-data rules triggered by future Health Connect / Apple Health integrations.
