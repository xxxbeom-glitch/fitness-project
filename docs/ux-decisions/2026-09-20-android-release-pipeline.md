# Android Release Pipeline

**Date:** 2026-09-20  
**Status:** PO APPROVED · ANDROID RELEASE ARCHITECTURE LOCKED · IMPLEMENTATION NOT STARTED

## Android application identity

Locked package name:
- `com.lumian.tampin`

Rules:
- this is the canonical Android application ID/package identity for Tampin
- do not create temporary production package names
- first Google Play app creation must read back successful package registration before the first release artifact is treated as canonical
- if Google Play rejects this package identity because it is unavailable or otherwise invalid, reopen only this package-name decision

## Build system

Production/release candidate builds use:
- Expo / EAS Build
- Android App Bundle (AAB) for Google Play
- Expo Development Build for development/runtime integration QA

Local Gradle build remains a troubleshooting/diagnostic path, not a second canonical release pipeline.

## Android target

For the first release implementation:
- meet the current Google Play target API requirement at build time
- current re-audit baseline = target API 36 or newer as required by Play
- final target/compile values must be read back from the actual release configuration before upload

## Signing

Use Google Play App Signing.

Boundary:
- Play app-signing key = Google Play managed
- upload key = release upload identity used by EAS/authorized release process
- keystore/private key/password/service-account JSON never stored in GitHub
- Google/Kakao Android OAuth/signing configuration must include the certificate fingerprint(s) required for the actual Play-distributed signing identity, not only local/dev/upload signing

## Artifact lineage

Every release candidate must map these fields together:
- git commit SHA
- EAS Build ID
- versionName
- versionCode
- exact AAB artifact
- Google Play track

A verified artifact is promoted; it is not rebuilt merely to move tracks.

Preferred flow:
1. create one release candidate AAB
2. upload to Internal
3. verify automated + required device/runtime checks
4. promote the same verified artifact to Closed Test
5. verify required test-track conditions
6. promote the same verified artifact to Production after Product Owner approval

Do not rebuild a new AAB solely for Closed or Production promotion unless a code/config/signing change actually requires a new release candidate.

## Release gates

### Development / Preview
- feature development and integration
- no Production publishing

### Internal
Use for:
- Play signing/install/update behavior
- Google/Kakao auth under Play-distributed signing
- notification/exact-alarm runtime
- Active Workout recovery
- Sentry source-map smoke
- PostHog preview telemetry
- Supabase integration
- upgrade/migration regression

### Closed Test
- external tester track after Internal candidate passes
- tester count/duration/account-specific Play requirements must be read back from the actual Tampin Play Console state
- do not blindly copy OnTalk's account-specific conditions

### Production
- Product Owner approval required before publish
- no automatic Production publishing in the initial release phase
- publish only the verified artifact lineage

## Automation boundary

EAS Build/Submit may automate build/upload plumbing, but initial Production promotion remains explicitly gated.

Do not configure unattended auto-publish to Production for the first release.

## Secrets

Never commit:
- keystore/private key/password
- Google Play service account JSON/token
- OAuth client secrets
- Sentry auth token
- Supabase service-role/secret key
- reviewer/tester passwords

Use the authorized build/CI secret store for build-time secrets.

## Google Play submission profile

Canonical submission source data:
- `docs/GOOGLE_PLAY_CONSOLE_TAMPIN_PROFILE.yaml`

Before the first release candidate is accepted:
- package registration read-back
- permissions/dependency audit
- Data Safety audit
- App Access/review account
- Privacy / Terms / account-deletion URLs
- Health/Activity & Fitness declaration
- store listing/assets
- current testing requirements
must be verified against the actual implementation and current Play Console.

## OnTalk lesson carried forward

Do not let the tested runtime artifact become ambiguous across branches/builds/tracks.

Tampin release QA always answers:
> Which exact commit produced the exact AAB currently installed/tested/promoted?

The answer must be recoverable from GitHub release evidence.

## Development boundary

This decision closes release architecture only.

Production implementation remains unauthorized until the Product Owner explicitly switches the project to Development mode.
