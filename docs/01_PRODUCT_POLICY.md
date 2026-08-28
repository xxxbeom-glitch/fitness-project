# 01 PRODUCT POLICY

**Status:** BOOTSTRAP — PARTIALLY DEFINED

## CONFIRMED

### Training-data principle
Workout records are user-owned product data and must not be silently altered by recommendation or AI features.

### Active-session reliability
The app must preserve or recover the current workout after app interruption/restart whenever technically feasible. Silent loss of logged sets is unacceptable.

### Offline-first sync and canonical data policy
Workout/session changes are written to durable local storage immediately. A network request must not be required to complete a set, edit kg/reps, or preserve active-session progress.

Server synchronization is **change-driven**, not timer/polling-driven:
- if there are no unsynchronized changes, no upload request is sent
- ordinary edits are coalesced with a **3-second debounce** after the latest change
- important boundary events such as **set completion, workout completion, app backgrounding, and network reconnection** trigger an immediate sync attempt rather than waiting for the debounce window
- if the device is offline or a sync attempt fails, pending changes remain durably queued and retry automatically when connectivity returns
- synchronization failure must not block the active workout

Canonical ownership is split by state:
- while a workout is in progress, the **current active device's durable local state is authoritative for the latest unsynchronized workout changes**
- the cloud must not silently overwrite newer pending local workout changes with an older synchronized snapshot
- after records are successfully synchronized, the **cloud account record is the long-term canonical record** for completed workouts, routines, custom exercises, profile data, and optional body data
- local storage remains a durable offline working copy / replica for normal app use and recovery

Exact technical conflict handling for simultaneous offline edits to the same non-active record may be specified during implementation, but it must not silently discard a locally accepted user change without a defined conflict policy.

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

### Authentication entry policy
The first-entry authentication experience does **not** split `Sign up` and `Log in` into separate product paths.

The user chooses a supported provider and continues with that provider:
- Android: **Google / Kakao**
- iOS: **Google / Kakao / Apple**

Provider buttons use unified `계속하기` semantics. After successful provider authentication:
- if the provider identity is already linked to an existing Fitness account, sign the user into that account
- if it is a first-time provider identity, create the internal Fitness account and continue into first-run onboarding

The product does not require a separate email/password account-creation screen for the MVP authentication path.

### First-run legal / privacy consent policy
The first-entry screen keeps **Terms of Use** and **Privacy Policy** links accessible without forcing the user into a long legal screen before choosing a sign-in provider.

For a first-time provider identity:
- require an explicit agreement to the **Terms of Use** before completing normal first-run account setup
- keep the **Privacy Policy** separately viewable
- do not create a generic mandatory `개인정보처리방침 동의` checkbox merely for personal data that is necessary to establish or perform the service relationship
- do not bundle optional or future consent-based processing into the required service-terms agreement

For an existing Fitness account:
- do not ask the user to repeat the same first-run agreement on every login
- if a later material terms update or a legally distinct new consent is required, handle that as a separate versioned flow rather than reusing the normal login screen

If future features introduce processing that genuinely requires consent, such as optional marketing or other non-essential consent-based processing, the consent must be presented separately with the required information and a real choice.

Before production release, verify the exact lawful basis, consent-required categories, and legal copy against current Korean privacy law, provider requirements, and app-store disclosure obligations.

### Account deletion entry point
The product must provide an in-app account-deletion entry point under **Settings → Account management → Delete account**.

### Account deletion data scope
Deleting a Fitness account deletes all user data associated with that account from the product, including workout history, routines, custom exercises, profile/body data, and synchronized account data.

The product must not keep normal user workout/profile data attached to a deleted account for future restoration.

### Account deletion recovery policy
There is **no user-visible recovery or grace period** after the user completes the final account-deletion confirmation.

Once deletion is finally confirmed, the action is irreversible from the user's perspective and the product does not offer account/data restoration.

### Account deletion confirmation policy
Account deletion does **not** require re-authentication with Google, Kakao, Apple, or another sign-in provider immediately before deletion.

The product still requires a clear destructive final confirmation that explicitly warns that the account and associated workout/profile data will be permanently deleted and cannot be restored.

### Authentication-provider unlinking on account deletion
When a Fitness account is deleted, all supported external authentication providers linked to that Fitness account are also unlinked/revoked as part of the deletion flow.

This applies to linked Google, Kakao, and Apple authentication identities where applicable. The product must not leave an external provider connection intentionally attached to a Fitness account that no longer exists.

### Legally required retention exception
Account deletion removes normal product data. The only retention exception is data that the service is legally required to keep for a defined period.

Requirements:
- retain only the minimum data required by the applicable legal obligation
- keep legally retained data separated from ordinary active-account product data
- do not use retained data to restore the deleted Fitness account or normal workout/profile history
- restrict use of retained data to the legally required purpose
- delete the retained data when the legally required retention period ends, unless another valid legal obligation still applies

Exact backend deletion completion timing and cleanup mechanics remain implementation details to define before release.

## TBD

- account deletion backend cleanup mechanics
- export/delete request handling
- telemetry/analytics policy
- crash reporting policy
- age restriction, if any
- exact non-active multi-device conflict-resolution mechanics for simultaneous offline edits

## RESEARCH NEEDED

Before first production release, verify relevant Google Play / App Store privacy-disclosure requirements and any health-data rules triggered by future Health Connect / Apple Health integrations.

If future features begin making condition-specific exercise recommendations, injury rehabilitation claims, or other health/medical claims, perform a separate policy/legal review before implementation.
