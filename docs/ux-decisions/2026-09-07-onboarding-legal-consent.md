# Onboarding Legal Consent — 2026-09-07

**Status:** PO APPROVED / FIGMA APPLIED

## Decision

For a first-time authenticated user, the MVP does **not** use a separate mandatory Terms screen and does **not** require a checkbox solely to accept the service Terms.

The legal area is integrated into the bottom of the first-run onboarding/basic-information screen.

Approved presentation:

- `서비스 이용약관` — plain text link
- `개인정보처리방침` — plain text link
- no card container
- no `전체 동의`
- no mandatory `개인정보처리방침 동의` checkbox
- no Terms checkbox in this MVP presentation
- supporting copy: `동의하고 시작하기를 누르면 서비스 이용약관에 동의합니다.`
- primary CTA: `동의하고 시작하기`

Tapping `동의하고 시작하기` is the explicit user action that accepts the current Terms of Use and continues first-run setup.

The Privacy Policy remains separately viewable but is not presented as a second mandatory agreement merely because service-required personal data is processed.

## Account/state rule

- apply this flow only to a first-time provider identity / first-run account setup
- an existing Fitness account does not repeat the same agreement on ordinary login
- later material Terms updates or a legally distinct new consent use a separate versioned flow

## Data requirement

The implementation must persist evidence of the accepted Terms version and acceptance time (for example, `terms_version` and `accepted_at`, or equivalent fields). Exact schema naming is an implementation detail.

## Figma

File: `W3lZurXCXbThP67rF2xk2b`

Page: `01 로그인 · 첫 진입`

Applied screen:

- `01C_기본정보_약관통합` — node `40:2138`
- separate `01B_약관` screen removed
- legal card treatment removed
- Terms / Privacy are text links
- CTA remains at the bottom as `동의하고 시작하기`

## Scope note

This decision only fixes the legal-consent presentation and first-run flow behavior. The current `01C` basic-information fields (such as sex/birth date) are still under separate onboarding-policy review and are not approved by this decision.
