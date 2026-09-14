# Group 08B — Profile + account LOCK

**Date:** 2026-09-14  
**Status:** PRODUCT/UX LOCKED / FIGMA APPLIED / TARGETED QA PASS / GROUP 08 STILL ACTIVE / NO CURSOR HANDOFF

## Scope

This checkpoint locks the current Group 08B profile/account flow and supersedes earlier profile/account exploration alternatives.

Canonical Figma:
- file `W3lZurXCXbThP67rF2xk2b`
- page `08 설정 · 계정` — `233:2079`
- section `08_SETTINGS_V1_EXPLORATION` — `1158:645`

Locked states:
- base profile — `1204:770`
- profile-photo sheet — `1181:724`
- account-delete entry sheet — `1207:799`
- account-delete final confirmation — `1207:859`

## Locked profile behavior

- profile image is editable
- `프로필 사진 변경` opens `사진 선택 / 기본 이미지로 변경 / 취소`
- nickname is editable
- no large `프로필 정보` section title
- gender and birthdate are not editable in profile settings for current MVP
- login provider appears inside the nickname InputBox as a leading social icon: `[provider icon] 닉네임`
- current Figma example uses Google; Kakao uses the same pattern with its provider icon
- multiple-provider linking is excluded from current MVP

## Locked account behavior

- visible body account action = `로그아웃`
- logout has no extra confirmation dialog
- account deletion is entered from the profile header `⋮`
- `⋮` → account-management bottom sheet → `계정 탈퇴` → final destructive confirmation dialog
- final confirmation communicates account-data deletion and no recovery

## Shared InputBox

Canonical shared component:
- `InputBox` — `635:807`

Variant axes:
- `State=Default / Filled / Focused`
- `LeadingIcon=None / Social`

The profile nickname uses `Filled + Social`; unrelated standard fields remain `LeadingIcon=None`.

## Screen sizing / CTA

- current width = `360px`
- minimum screen/frame height = `780px`
- content may grow beyond 780px but screens must not shrink below 780px
- save CTA belongs after page content and is not a sticky/fixed overlay

## Figma cleanup

The rejected comparison examples were removed from the Group 08 exploration canvas:
- `08B_OptionA_분리형`
- `08B_OptionB_통합형`
- their Option A / Option B labels

Only the locked current 08B direction should be treated as active.

## QA

Targeted screenshot QA for the current base profile and related destructive/account states = PASS.

## NEXT OPEN ITEM

Continue Group 08 with:
1. `자주 묻는 질문`
2. `문의하기`
3. terms / privacy / legal presentation

Do not reopen Group 08B unless a new issue, conflict, regression risk, or explicit PO request appears.

## Development boundary

No Cursor/development handoff is authorized by this checkpoint.
