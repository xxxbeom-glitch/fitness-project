# Group 08 — Profile settings PASS

**Date:** 2026-09-14  
**Status:** PRODUCT/UX APPROVED / FIGMA APPLIED / TARGETED QA PASS / GROUP 08 STILL ACTIVE / NO CURSOR HANDOFF

## Scope

This checkpoint records the PO-approved profile-settings behavior inside Group 08 Settings / Account.

Canonical Figma file:
- `W3lZurXCXbThP67rF2xk2b`

Canonical page:
- `08 설정 · 계정` — `233:2079`

Exploration section:
- `08_SETTINGS_V1_EXPLORATION` — `1158:645`

Approved profile screens:
- `08B_프로필설정_Exploration_V1` — `1180:713`
- `08B1_ProfilePhoto_Sheet_Exploration_V1` — `1181:724`

## Approved profile fields

### 프로필 이미지
- profile image remains editable from profile settings
- tapping `프로필 사진 변경` opens a bottom sheet
- current actions:
  - `사진 선택`
  - `기본 이미지로 변경`
  - `취소`
- direct camera capture is not part of the current MVP profile flow

### 닉네임
- editable text field
- automatically generated/default nickname can be replaced here

### 성별
- must reuse the same interaction pattern as `01C_기본정보`
- no separate gender bottom sheet
- two side-by-side buttons:
  - `남성`
  - `여성`
- the previous profile exploration gender-chevron + sheet treatment was removed

### 생년월일
- must reuse the same input pattern as `01C_기본정보`
- direct `YYYYMMDD` entry in one input field
- example value: `19880101`
- no date-picker / drum-roll sheet in profile settings
- the previous birthdate wheel-picker exploration state was removed

## Save behavior

- `저장` remains disabled when nothing has changed
- any valid profile-field change can enable save
- invalid / incomplete values should not enable save, consistent with the existing 01C validation direction

## Consistency rule

For gender and birthdate, profile settings must not invent a second interaction model. The canonical interaction pattern is the already-approved `01C_기본정보` pattern.

Reference:
- `01C_기본정보` — `40:2138`
- gender buttons — `40:2170`, `40:2172`
- birthdate input — `40:2176`

## Figma QA

Targeted screenshot QA = PASS.

Verified:
- profile screen uses side-by-side gender buttons rather than a selector row
- birthdate is shown as `YYYYMMDD` input
- gender and birthdate chevrons are removed
- profile-photo sheet background is synchronized to the updated profile form
- disabled save state remains visible
- removed gender / birthdate sheet exploration frames are no longer part of the active profile flow

## NEXT OPEN ITEM

Continue Group 08 with `계정 관리`.

Review:
- logged-in provider presentation
- whether multiple providers can be linked
- logout placement / confirmation behavior
- destructive account deletion entry and confirmation consistency with the already-recorded deletion policy

Do not reopen approved profile, unit, or workout-setting patterns without a new issue.

## Development boundary

No Cursor/development handoff is authorized by this checkpoint.
