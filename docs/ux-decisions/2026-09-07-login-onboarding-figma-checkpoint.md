# Login / Onboarding Figma Checkpoint — 2026-09-07

**Status:** PO APPROVED / FIGMA PASS CLOSED FOR NOW

## Scope closed for this pass

The current `01 로그인 · 첫 진입` Figma pass is closed for now.

### 01A Login

- Unified social-login entry
- Android: Google / Kakao
- Legal notice remains directly on the login screen
- Terms of Use and Privacy Policy remain accessible as text links
- Login-help CS entry is shown on the login screen as `로그인에 문제가 있나요? 문의하기`
- Login errors do not use a standalone full-screen state
- Login error cases reuse the existing product `DialogCard` / `DialogButtons` design

### 01C Basic information

Keep the current basic-information screen for this pass.

Current required fields:

- sex selection
- date of birth

Current DOB presentation / validation:

- placeholder: `19880101`
- input: `YYYYMMDD` 8 digits
- invalid / incomplete required value keeps `시작하기` Disabled
- invalid DOB uses an inline field error

Purpose boundary:

- sex / birth information is not used to guess first working weight
- the Product Owner intends the data to support later user-distribution / target-audience analysis by sex and age group
- whether exact date of birth should later be reduced to birth year is not part of this closed pass and remains a possible later minimization refinement

### Removed standalone states

- separate Terms screen remains removed
- standalone `01D 로그인 오류` screen remains removed

## First-run continuation

Closing this Figma group does not mean the entire first-run journey ends here.

After authentication / basic setup, the already-approved product flow continues into the equal primary paths:

1. recommended routine
2. build my own routine

The recommendation branch remains governed by the existing three-input decision:

- goal
- weekly training availability
- preferred workout duration

## Resume rule

Do not reopen the Login / Basic-info Figma pass unless one of these changes materially:

- authentication provider requirements
- privacy/legal requirements
- CS route implementation
- demographic-data collection policy
- first-run IA

Otherwise continue from the active Product/UX track in `CURRENT.md`.
