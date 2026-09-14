# Group 08 — Profile + account current checkpoint

**Date:** 2026-09-14  
**Status:** PRODUCT/UX APPROVED / FIGMA APPLIED / TARGETED QA PASS / GROUP 08 STILL ACTIVE / NO CURSOR HANDOFF

## Scope

This checkpoint supersedes the earlier Group 08 profile-only checkpoint for the current profile/account flow.

Canonical Figma file:
- `W3lZurXCXbThP67rF2xk2b`

Canonical page:
- `08 설정 · 계정` — `233:2079`

Exploration section:
- `08_SETTINGS_V1_EXPLORATION` — `1158:645`

Current profile/account states:
- base profile: `08B_추천안_닉네임+로그인수단_Exploration_V2` — `1204:770`
- profile-photo sheet: `08B1_ProfilePhoto_Sheet_Exploration_V1` — `1181:724`
- account-delete entry sheet: `08B1_더보기_계정탈퇴_Sheet_Exploration_V1` — `1207:799`
- account-delete final confirm: `08B2_계정탈퇴확인_Exploration_V2` — `1207:859`

## Profile layout

- profile image remains editable
- `프로필 사진 변경` opens the existing photo-action bottom sheet
- photo sheet actions remain `사진 선택 / 기본 이미지로 변경 / 취소`
- nickname is editable
- the previous large `프로필 정보` section title is removed
- gender and birthdate are not shown as editable profile-setting fields
- gender / birthdate remain onboarding-collected data; no post-signup edit behavior is defined for MVP

## Logged-in provider presentation

- no separate `로그인 수단` section is used on the profile page
- the current login provider is shown inside the nickname text field as a leading social icon
- visual pattern: `[provider icon] 닉네임`
- current Figma example uses Google
- Kakao uses the same field pattern with the Kakao provider icon
- multiple-provider linking / account-link management is excluded from the current MVP flow

## Shared InputBox update

Canonical shared component:
- `InputBox` — `635:807`

Variant axes now include:
- `State=Default / Filled / Focused`
- `LeadingIcon=None / Social`

Result:
- 6 total variants
- standard inputs remain `LeadingIcon=None`
- profile nickname uses `State=Filled, LeadingIcon=Social`
- social layout uses a 16px provider icon followed by the editable text
- existing unrelated InputBox instances remain on `LeadingIcon=None`

## Account actions

### Logout

- `로그아웃` remains the only visible account row in the profile body
- logout does not require an additional confirmation dialog in the current MVP direction

### Account deletion

- account deletion is not shown as a normal profile-body row
- header right action uses shared `Nav Header` with `RightAction=More` (`⋮`)
- tapping `⋮` opens an account-management bottom sheet
- bottom sheet exposes destructive `계정 탈퇴` and `취소`
- choosing `계정 탈퇴` opens a final confirmation dialog
- final dialog states that workout records, routines, profile/body information and other account data are deleted and cannot be restored

## Screen sizing / CTA rule

- Fitness screen width remains 360px for this current Figma track
- minimum screen/frame height = `780px`
- do not shrink screens below 780px even when content is short
- if content needs more vertical space, the screen may grow beyond 780px
- `저장` CTA belongs after the page content; it is not a sticky/fixed overlay CTA
- on short content, the CTA can visually sit near the bottom of the 780px frame

## Figma cleanup

- stale profile-photo sheet background was replaced with the current profile layout
- removed obsolete gender/birthdate profile-edit presentation from the active flow
- removed the redundant `프로필 정보` heading from base / deletion-sheet / deletion-confirm states

## Targeted QA

PASS.

Verified screenshots:
- base profile = 360×780
- profile-photo bottom sheet = 360×780 and uses the current profile background
- account-delete bottom sheet = 360×780
- final account-delete confirmation = 360×780
- nickname field displays provider icon inside the InputBox
- logout remains visible in the body
- account deletion is reached from header `⋮`, not from the body
- no active profile state shows editable gender/birthdate controls

## NEXT OPEN ITEM

Continue Group 08 with support/legal presentation:
1. `자주 묻는 질문`
2. `문의하기`
3. terms / privacy / legal presentation

`구독 관리`, `언어`, `테마` remain TBD.

Do not reopen approved unit/workout settings or locked Group 06/07 without a new reason.

## Development boundary

Product Owner has not authorized development/Cursor handoff.