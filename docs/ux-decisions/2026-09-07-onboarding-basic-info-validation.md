# Onboarding Basic Information Validation — 2026-09-07

**Status:** PO APPROVED / FIGMA APPLIED

## Scope

This decision defines the validation behavior for `01C_기본정보` in the first-run flow.

## Required-state rule

The `시작하기` CTA remains **Disabled** until all required values on `01C` are present and valid.

Current required fields represented on the screen:

- sex selection
- date of birth

Default/incomplete state:

- no sex option is preselected
- date-of-birth field is empty and displays a placeholder
- `시작하기` is Disabled

When every required value is valid, `시작하기` becomes enabled.

## Date-of-birth input

User-facing placeholder:

- `19880101`

Input format:

- 8 digits in `YYYYMMDD` form

Validation must reject values that are not a valid calendar date or do not match the required 8-digit format.

When the user has entered an invalid value, keep the CTA Disabled and show an inline field error rather than allowing submission.

Suggested error copy:

- `올바른 생년월일 8자리를 입력해주세요.`

## Age boundary

No MVP minimum/maximum age cutoff is defined by this decision.

The repository still lists exact age restriction as TBD. Therefore this validation decision covers required presence, 8-digit format, and valid-calendar-date validation only. Do not silently add an `18+` or other age rule until a separate policy decision is made.

## Recommendation boundary

Collecting sex/date-of-birth here does not change the existing recommendation/start-load decisions:

- sex is not used to guess a user's starting workout weight
- the initial recommended-routine matcher remains based on the separately approved recommendation inputs

## Figma

File: `W3lZurXCXbThP67rF2xk2b`

Page: `01 로그인 · 첫 진입`

Screen:

- `01C_기본정보` — node `40:2138`

Applied default state:

- sex: none selected
- birth placeholder: `19880101`
- CTA: `시작하기` / Disabled
