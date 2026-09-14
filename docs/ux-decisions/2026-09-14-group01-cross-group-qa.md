# Group 01 — Login / First Entry Cross-group QA — 2026-09-14

**Status:** PRODUCT/UX FIGMA QA PASS · NO CURSOR HANDOFF

## Purpose

This checkpoint records the Product Owner-requested cross-group verification pass for `01 로그인 · 첫 진입`.

The verification followed `docs/17_FIGMA_AGENT_EXECUTION_QA.md` section `15. Cross-group planning-to-Figma verification rule`:

1. planning / policy source audit
2. actual Figma screen / flow audit
3. design-system / component / variable / style binding audit
4. minimal correction only for confirmed mismatches
5. read-back + screenshot QA

This was a verification pass, not a redesign pass.

## Canonical sources checked

- `docs/01_PRODUCT_POLICY.md`
- `docs/ux-decisions/2026-09-07-login-onboarding-figma-checkpoint.md`
- `docs/ux-decisions/2026-09-07-login-error-dialog-states.md`
- `docs/ux-decisions/2026-09-07-onboarding-basic-info-validation.md`
- `docs/ux-decisions/2026-09-07-onboarding-legal-consent.md`
- `docs/ux-decisions/2026-09-10-figma-local-component-migration.md`
- `docs/09_DESIGN_SYSTEM.md`
- `docs/15_TONAL_DESIGN_SYSTEM_SPEC.md`
- `docs/17_FIGMA_AGENT_EXECUTION_QA.md`

## Planning / policy result

### 01A Login

Verified current requirements:
- unified social-login entry; no split Sign up / Log in path
- Android providers = Google / Kakao
- legal notice remains on login
- Terms / Privacy remain accessible as text links
- CS entry = `로그인에 문제가 있나요? 문의하기`
- no standalone login-error screen
- login failures use DialogCard / DialogButtons

### 01C Basic information

Verified current requirements:
- required fields = sex + date of birth
- default sex = none selected
- DOB placeholder = `19880101`
- DOB input = `YYYYMMDD`, 8 digits, valid calendar date
- invalid / incomplete required state keeps `시작하기` Disabled
- invalid DOB shows inline field error
- sex / DOB are not used to infer starting workout weight
- current purpose is later user-distribution / target-audience analysis by sex and age group
- exact age restriction remains TBD; no silent 18+ rule

### Removed / forbidden standalone states

Confirmed absent from the current canonical page:
- separate `01B` Terms screen
- standalone `01D` Login Error screen

The login-error dialog cases remain reference states over the login screen rather than a separate route.

## Figma audit

Canonical file:
- `W3lZurXCXbThP67rF2xk2b`

Page:
- `01 로그인 · 첫 진입` — `233:2072`

Current top-level product/state frames after QA:
- `01A_Login` — `40:2075`
- `01C_Basic_Info` — `40:2138`
- `01A1_Login_Error_Dialog_Cases` — `322:908`
- `01C1_Basic_Info_Error` — `1292:1183`

The page title/subtitle/divider remain page-level annotation elements and are not product routes.

## Confirmed mismatches found and corrected

### 1. 01C purpose copy mismatch — FIXED

Before QA, the helper copy said:
- `운동 기록과 분석에 필요한 최소 정보만 받아요.`

That implied sex / DOB were needed for workout-record analysis, which did not match the approved purpose boundary.

Current copy:
- `이용자 분포를 확인하기 위한 기본 정보만 받아요.`

This now matches the recorded demographic-analysis purpose.

### 2. DOB invalid state missing from Figma — FIXED

The approved inline-error behavior existed in GitHub but was not visually represented in the current 01 page.

Added:
- `01C1_Basic_Info_Error` — `1292:1183`
- selected sex example
- invalid DOB example `19881340`
- inline error = `올바른 생년월일 8자리를 입력해주세요.`
- CTA remains Disabled

The error text uses the existing local `state/danger` semantic variable.

### 3. Sex options were ad-hoc repeated frames with no selected component state — FIXED

No existing local Fitness component matched the current 154×52 two-option tile role.

A new component was added only after confirming that gap:
- `ModeTile` — `1292:1142`
- variants:
  - `Selected=False` — `1292:1138`
  - `Selected=True` — `1292:1140`

Current default 01C sex options were replaced with actual `ModeTile` instances:
- `GenderOption_Male`
- `GenderOption_Female`

The selected state follows the existing current-Fitness selection language by reusing local `bg/elevated` + `brand/primary` rather than inventing a new token.

### 4. InputBox had no Error state — FIXED

Added to the existing local `InputBox` component set:
- `State=Error, LeadingIcon=None` — `1292:1143`

It reuses the existing field construction and binds the error stroke to the local `state/danger` variable.

No separate duplicate input component was created.

### 5. Confirmed raw-spacing binding drift — FIXED

Rebound existing numeric values to existing local spacing variables without intended visual change:
- `CSLink_Login` gap `4` → `spacing/4`
- `LegalNotice_Login` gap `4` → `spacing/4`
- `LegalLinks_Login` gap `6` → `spacing/6`
- `DialogCard` default text-group horizontal padding `24` → `spacing/24`
- local `icon/arrow-left` padding `16` on all sides → `spacing/16`

The screen-root `62px` status-area offset remains an intentional shell/status-area dimension and was not reinterpreted as ordinary semantic spacing.

### 6. Semantic naming cleanup — FIXED

Renamed current top-level screen/state frames:
- `01A_로그인` → `01A_Login`
- `01C_기본정보` → `01C_Basic_Info`
- `LOGIN_ERROR_DIALOG_CASES` → `01A1_Login_Error_Dialog_Cases`

Also renamed generic local layout layers such as action/spacer/dialog-text containers where encountered during this QA.

## Component / dependency QA

Actual post-fix page audit:
- external component instance = `0`
- external variable = `0`
- external style = `0`

Current Group 01 instances resolve to local Fitness components, including:
- `AppLogo`
- `CTA Button`
- `Nav Header`
- `InputBox`
- `DialogCard`
- `DialogButtons`
- `icon/arrow-left`
- `ModeTile`

The older September 7 login-dialog checkpoint records pre-migration component keys. The September 10 local-component migration superseded component ownership; current local component linkage is therefore the expected state rather than a mismatch.

No avoidable detached/duplicate replacements of the current canonical CTA / InputBox / Dialog / Nav families were found in the Group 01 screen trees.

## Visual read-back

Screenshot/read-back verified after the corrections:
- `01A_Login` — no visual regression
- `01C_Basic_Info` — default sex none selected, DOB `19880101`, CTA Disabled, corrected purpose copy
- `01C1_Basic_Info_Error` — selected sex state, invalid DOB, inline danger error, CTA Disabled
- `01A1_Login_Error_Dialog_Cases` — all three DialogCard cases remain visually intact

Result: `PASS`.

## Boundary / deferred items

This QA does not introduce or decide:
- a new age cutoff
- email/password auth
- a separate Terms screen
- a standalone login-error route
- use of sex/DOB for starting-weight recommendation
- new first-run recommendation inputs

The first-run journey still continues after this group into the already-governed recommendation / self-build paths.

## Development boundary

**NO CURSOR IMPLEMENTATION HANDOFF.**

The Product Owner has not switched this project to development mode.
