# 01 PRODUCT POLICY

**Status:** BOOTSTRAP — PARTIALLY DEFINED

## CONFIRMED

### Training-data principle
Workout records are user-owned product data and must not be silently altered by recommendation or AI features.

### Active-session reliability
The app must preserve or recover the current workout after app interruption/restart whenever technically feasible. Silent loss of logged sets is unacceptable.

### User control
The app must allow users to modify the active session without forcing a predefined exercise order.

Recommendations, substitutions, and later smart features must not silently rewrite completed workout history or materially change a user's plan without an explicit user action.

### Optional body-data policy
Height and body weight may be requested during onboarding, but they are not required to use the product.

Requirements:
- clearly explain why the data is being requested
- allow the user to skip the step
- allow later entry/editing in Settings
- do not claim that height or body weight alone determines the correct resistance-training program
- use the data only for product functions that have a clear purpose, such as body-weight trends or later analysis

### Medical boundary
The product is a fitness tracker and training-planning tool, not a medical service.

The app must not:
- diagnose injuries, diseases, or pain conditions
- decide that a specific exercise is medically safe or unsafe for a diagnosed condition
- present exercise substitutions as medical treatment or rehabilitation advice

If a user has pain, injury, disease, or a medically relevant exercise restriction, the product should direct the user to follow guidance from an appropriate healthcare or qualified professional.

Exercise replacement inside the product should be framed as a practical training/equipment option, not as medical clearance.

### Exercise-preference boundary
The product may let users replace or remove an exercise without asking why.

A user may avoid an exercise because of preference, equipment availability, comfort, professional advice, or another reason. The app does not need to infer or diagnose the reason.

### Gym/location privacy
If gym registration is introduced later:
- gym selection must be optional
- it must be separate from real-time location sharing
- default visibility should favor privacy

### Account deletion entry point
The product must provide an in-app account-deletion entry point under **Settings → Account management → Delete account**.

### Account deletion data scope
Deleting a Fitness account deletes all user data associated with that account from the product, including workout history, routines, custom exercises, profile/body data, and synchronized account data.

The product must not keep normal user workout/profile data attached to a deleted account for future restoration.

### Account deletion recovery policy
There is **no user-visible recovery or grace period** after the user completes the final account-deletion confirmation.

Once deletion is finally confirmed, the action is irreversible from the user's perspective and the product does not offer account/data restoration.

The exact backend deletion completion timing, re-authentication requirement, legally required retention exceptions, and external provider unlinking mechanics remain separate implementation/policy decisions.

## TBD

- account required vs guest-first
- login methods
- cloud sync policy
- data retention timing / legally required exceptions
- account deletion re-authentication and backend cleanup mechanics
- export/delete request handling
- telemetry/analytics policy
- crash reporting policy
- age restriction, if any
- exact body-data retention/sync behavior once account/cloud architecture is decided

## RESEARCH NEEDED

Before first production release, verify relevant Google Play / App Store privacy-disclosure requirements and any health-data rules triggered by future Health Connect / Apple Health integrations.

If future features begin making condition-specific exercise recommendations, injury rehabilitation claims, or other health/medical claims, perform a separate policy/legal review before implementation.
