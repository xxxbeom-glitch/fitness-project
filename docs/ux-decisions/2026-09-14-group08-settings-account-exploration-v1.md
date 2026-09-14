# Group 08 — Settings / Account exploration V1 checkpoint

**Date:** 2026-09-14  
**Status:** PRODUCT/UX FIGMA EXPLORATION ACTIVE / PARTIAL PO DECISIONS RECORDED / NOT LOCKED / NO CURSOR HANDOFF

## Scope

Group 08 is now the active Product/UX + Figma track after Group 07 was closed.

This checkpoint records the current first-pass Settings / Account exploration only. It does not lock the full Group 08 IA or every menu item.

Canonical Figma file:
- `W3lZurXCXbThP67rF2xk2b`

Canonical page:
- `08 설정 · 계정` — `233:2079`

Current exploration section:
- `08_SETTINGS_V1_EXPLORATION` — `1158:645`

## PO input used for the first-pass settings structure

Current candidates:
- account-related settings
- notifications
- subscription management — `TBD`
- unit settings
- language settings — `TBD`
- workout settings
- theme — `TBD`
- FAQ
- contact / support

The PO explicitly asked to keep `구독 관리`, `언어`, and `테마` as TBD for now.

## Current Figma exploration screens

- `08A_설정홈_Exploration_V1` — `1158:649`
- `08G_운동설정_Exploration_V1` — `1158:7365`
- `08H_알림설정_Exploration_V1` — `1158:7457`
- `08G1_기본휴식시간_Sheet_Exploration_V1` — `1163:676`
- `08G2_타이머종료음_Exploration_V1` — `1163:7296`

Existing older Group 08 reference screens remain preserved and were not destructively replaced:
- `08A_설정홈` — `41:3370`
- `08B_프로필설정` — `41:3489`
- `08C_UnitSheet` — `35:3039`
- `08D_계정관리` — `41:3595`
- `08E_계정관리_탈퇴확인` — `41:3707`
- `08F_법률문서` — `41:3827`

## 08A first-pass menu structure

Current exploration layout:

### 내 정보
- 프로필

### 운동
- 운동 설정
- 단위 설정

### 앱 설정
- 알림
- 언어 — TBD
- 테마 — TBD

### 계정
- 계정 관리
- 구독 관리 — TBD

### 지원
- 자주 묻는 질문
- 문의하기

### 정보
- 이용약관
- 개인정보처리방침
- 버전

This structure is still a review candidate, not a Group 08 lock.

## Workout settings exploration

Current `08G_운동설정_Exploration_V1` contains:
- 기본 휴식 시간
- 타이머 종료음
- 타이머 종료 진동
- 운동 중 화면 꺼짐 방지

`타이머 종료 진동` is still part of the exploration UI and is not separately locked by this checkpoint.

### Default rest time — PO direction recorded

The PO explicitly chose a bottom-sheet drum-roll selector.

Current product rule:
- range: `없음` through `5분`
- step: `5초`
- selection uses a wheel / drum-roll interaction

Current Figma example is centered on `2분` and shows adjacent 5-second values.

### Timer end sound — PO direction recorded

The PO explicitly chose:
- three sound choices for the current exploration
- tapping a row selects that sound
- the same tap immediately previews the sound

Current temporary labels in Figma:
- 기본
- 차임
- 벨

These names are placeholders until actual sound assets are selected.

## Notification exploration

The PO explicitly removed `운동 리마인더` from the notification exploration.

Current `08H_알림설정_Exploration_V1` therefore shows only:
- 휴식 타이머 알림
- 업데이트 및 공지

These remaining notification types and their default values are still exploration, not locked policy.

## Wheel picker shared component

The PO supplied `631_Reminder_Time_Sheet` as the visual interaction reference and explicitly approved adapting it into the Fitness shared UI.

Reference frame preserved on the Group 08 page:
- `631_Reminder_Time_Sheet` — `1165:7945`

New shared Fitness component:
- `WheelPicker/SingleColumn` — `1169:1105`

Current component behavior / presentation:
- one column
- 5 visible rows
- each row height = `40px`
- selected value is centered in the middle row
- selected value uses the stronger 18px Bold treatment
- surrounding values use 14px Medium with reduced opacity
- selected zone is marked by top and bottom divider lines
- five visible labels are exposed as text properties for instance override
- reuses existing Fitness `text/primary`, `body/01`, and `border/subtle` design tokens
- no new color/type token was added

Applied instance in the rest-time bottom sheet:
- `WheelPicker_RestTime` — `1170:697`

The previous hand-built `RestTimeWheelPicker` frame was removed from the exploration screen and replaced by this shared component instance.

## Figma QA evidence

Targeted QA after component insertion = PASS.

Verified:
- wheel component visually matches the supplied 631 reference pattern
- rest-time bottom-sheet child order is `Header → WheelPicker → 완료 CTA`
- bottom sheet uses the intended 428px layout and no content overlap remains
- shared instance is connected to `WheelPicker/SingleColumn`
- no unrelated Group 06 / Group 07 screen was reopened or modified

## Open / not yet locked

Still requires PO review before Group 08 can be locked:
- final 08A menu grouping and visibility
- whether TBD menus are shown at launch or hidden until implemented
- final notification scope
- final workout-settings defaults
- exact timer sound assets / names
- unit-setting behavior and conversion semantics
- profile screen details
- account / login-provider / logout behavior
- FAQ and contact destination / flow
- legal-document final content and presentation

## NEXT OPEN ITEM

Continue Group 08 from the current Figma exploration and review the Settings / Account screens with the PO one area at a time. Do not treat the full Group 08 menu as approved yet.

## Development boundary

No Cursor/development handoff is authorized by this checkpoint.
