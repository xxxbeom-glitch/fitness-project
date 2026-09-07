# Login Error Dialog States — 2026-09-07

**Status:** PO APPROVED / FIGMA APPLIED

## Decision

The MVP does not use a standalone full-screen login error route/state.

Login failures are presented as a modal/dialog state over `01A_로그인`.

The previous `01D_로그인_오류` full screen is removed from Figma.

## Dialog cases represented in Figma

1. **일반 로그인 실패**
   - title: `로그인에 실패했어요`
   - body: `잠시 후 다시 시도해주세요.`

2. **네트워크 오류**
   - title: `인터넷 연결을 확인해주세요`
   - body: `네트워크 연결 후 다시 시도해주세요.`

3. **인증 서비스 오류**
   - title: `로그인 서비스를 사용할 수 없어요`
   - body: `잠시 후 다시 시도해주세요.`

Common actions:

- Secondary: `닫기`
- Primary: `다시 시도`

## Interaction rule

- `다시 시도` repeats the relevant login attempt from the current login screen.
- `닫기` dismisses the dialog and returns to the unchanged login screen.
- The dialog must not navigate the user to a separate error screen.
- Exact provider/API error-code mapping remains an implementation detail.

## Figma

File: `W3lZurXCXbThP67rF2xk2b`

Page: `01 로그인 · 첫 진입`

Reference block:

- `LOGIN_ERROR_DIALOG_CASES`
- node: `322:908`

The reference uses the current local typography, color, spacing, radius and button typography rules.