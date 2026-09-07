# Onboarding Legal Consent — 2026-09-07

**Status:** PO APPROVED / FIGMA APPLIED

## Decision

The MVP does **not** use a separate mandatory Terms screen and does **not** require a Terms checkbox solely for first-run acceptance.

The legal notice and document links are placed directly under the social-login provider CTAs on `01A_로그인` rather than on the later basic-information screen.

Approved presentation:

- supporting copy: `계속하면 서비스 이용약관에 동의합니다.`
- `서비스 이용약관` — plain text link
- `개인정보처리방침` — plain text link
- no card container
- no `전체 동의`
- no mandatory `개인정보처리방침 동의` checkbox
- no Terms checkbox in this MVP presentation

The social-login `계속하기` action is also the explicit Terms acceptance action for a first-time provider identity. The Privacy Policy remains separately viewable but is not presented as a second mandatory agreement merely because service-required personal data is processed.

## Account/state rule

- `01A_로그인` shows the legal notice for the unified social-login entry UI
- only a **first-time provider identity / first-run account setup** creates the initial Terms-acceptance record
- an existing Fitness account using the same login UI does **not** create a new/repeated acceptance record for the same Terms version
- later material Terms updates or a legally distinct new consent use a separate versioned flow

## Data requirement

The implementation must persist evidence of the accepted Terms version and acceptance time for first-run acceptance (for example, `terms_version` and `accepted_at`, or equivalent fields). Exact schema naming is an implementation detail.

## Figma

File: `W3lZurXCXbThP67rF2xk2b`

Page: `01 로그인 · 첫 진입`

Applied screens:

- `01A_로그인` — node `40:2075`
  - legal notice moved below Google/Kakao provider CTAs
  - Terms / Privacy are plain text links
  - no checkbox/card treatment
- `01C_기본정보` — node `40:2138`
  - legal area removed
  - CTA restored to `시작하기`
- separate `01B_약관` screen remains removed

## Scope note

This decision only fixes the legal-consent presentation and login/first-run behavior. The current `01C` basic-information fields (such as sex/birth date) are still under separate onboarding-policy review and are not approved by this decision.
