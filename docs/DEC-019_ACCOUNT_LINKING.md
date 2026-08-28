# DEC-019 — Multiple sign-in providers may link to one account

**Date:** 2026-08-28
**Status:** CONFIRMED

## Decision
A single Fitness account may link multiple supported sign-in providers to the same internal user identity.

Profile/Settings will include an account/authentication management section showing provider connection status and allowing the user to connect an additional provider after authenticating with that provider.

Initial providers remain Google, Kakao, and Apple on iOS.

Do not automatically merge accounts only because provider email addresses match.

If a provider is already attached to another Fitness account, MVP does not attempt to merge workout histories or accounts automatically. The connection is blocked with a clear explanation. A dedicated duplicate-account merge/recovery flow is deferred until there is real user demand.

## Product impact
- Profile/Settings includes account/authentication management.
- Each provider shows a state such as `연결됨` or `연결하기`.
- Connecting a provider attaches a login method to the existing internal account rather than creating a second workout-history owner.
- A provider cannot be detached if doing so would leave the account with no usable sign-in method.
- If the provider being connected already belongs to another Fitness account, do not silently merge, overwrite, or combine histories.
- Duplicate-account history merge is **not an MVP feature**.
- Account linking remains a simple authentication-management feature; complex recovery/merge behavior is intentionally deferred.