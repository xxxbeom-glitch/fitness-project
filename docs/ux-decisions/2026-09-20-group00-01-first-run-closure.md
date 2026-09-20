# 2026-09-20 Group 00–01 First-run Closure

**Status:** PO APPROVED · FIGMA REFLECTED · FOCUSED QA PASS · NEXT QA = GROUP 02 HOME

## Scope

Sequential handoff QA for:
- `00_Splash`
- `01A_Login`
- `01C_Basic_Info`
- Basic Info error/focus/filled/disabled reference states
- Login error overlay reference board

No Group 02+ behavior is resolved by this checkpoint.

## Approved first-run flow

`Splash -> Login -> Basic Info -> Home`

Existing provider branching remains:
- existing linked account -> normal sign-in
- first-time provider identity -> internal account in onboarding-incomplete state -> Basic Info

## Login legal presentation

`01A_Login`:
- keep `서비스 이용약관` link
- keep `개인정보처리방침` link
- remove the prior implicit-consent sentence:
  - removed: `계속하면 서비스 이용약관에 동의합니다.`

Reason:
- provider continuation itself is not treated as the explicit first-run Terms agreement
- existing users must not be asked to re-agree on every normal login

## Explicit Terms agreement

First-time setup requires an explicit Terms agreement on `기본정보`.

Shared component:
- `Common_Component > TermsAgreementRow` — `2087:8664`
- variants:
  - `Agreed=False` — `2087:8654`
  - `Agreed=True` — `2087:8659`
- copy: `서비스 이용약관 동의 (필수)`
- existing `col-done` checked/unchecked control is reused
- no new color/spacing token was created

Placed unchecked reference instances:
- `01C_Basic_Info` — `2087:8849`
- `01C1_Basic_Info_Error` — `2087:8854`
- `01C2_Basic_Info_Focused` — `2087:8859`
- `01C3_Basic_Info_Filled` — `2087:8864`
- `01C4_Basic_Info_Disabled` — `2087:8869`

## Start-button validity

`시작하기` is enabled only when all required first-run conditions are satisfied:

1. sex selected
2. date of birth is a valid full date in the approved input format
3. Terms agreement = agreed

A filled DOB by itself does not make the form valid.

No additional top-level Figma frame is required solely to show the fully-valid combination. Runtime state composes the existing component states.

## Basic Info Back behavior

Tapping Back on Basic Info:
- returns to Login
- does not create a second account for the same provider identity
- does not mark onboarding as completed
- preserves the provider/internal account relation as an onboarding-incomplete account state

When the same provider identity authenticates again:
- resolve the same internal account
- if required first-run setup is still incomplete, return to `Basic Info`
- do not route to normal Home until required first-run setup is completed

This checkpoint does not define cross-provider account-linking behavior.

## Other 00–01 rules retained

- Splash remains brand-primary background + white Tampin wordmark
- no Splash loading copy/indicator
- Google/Kakao remain the current Android login presentation
- Apple presentation remains conditional on iOS launch scope
- no email/password MVP auth path
- sex = 남성 / 여성
- DOB remains required
- current invalid-DOB inline error remains
- Login error DialogCard cases/copy remain unchanged
- `01C4_Basic_Info_Disabled` remains a component-state reference, not a new route

## Focused QA

Figma read-back:
- Login implicit Terms-consent sentence = absent
- Login Terms link = present
- Login Privacy link = present
- TermsAgreementRow present on all 5 Basic Info reference screens
- all 5 reference instances = `Agreed=False`
- visible text overflow = `0`
- visible text font family = SUIT
- missing main-component links in 00–01 = `0`
- BottomAppBar in 00–01 = `0`
- whole-MVP instances after this change = `1,872`
- whole-MVP missing main-component links = `0`
- whole-MVP sources outside `Common_Component` = `0`

Focused QA: **PASS**

## Result

**Group 00–01 handoff QA is closed.**

Next sequential QA block:
- Group 02 Home
- begin with the existing weekday-scheduling / today-next conflict
- stop for PO decision before moving to Group 03
