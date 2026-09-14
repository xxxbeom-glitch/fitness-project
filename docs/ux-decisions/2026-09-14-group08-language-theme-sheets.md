# Group 08 — Language / Theme selector sheets

**Date:** 2026-09-14  
**Status:** PRODUCT/UX APPROVED · FIGMA APPLIED · TARGETED QA PASS · NO CURSOR HANDOFF

## Scope

Settings home `언어` and `테마` rows remain visible and use the same right-value + chevron presentation already used by `단위 설정`.

Current Settings-home values:
- `알림` → `켬`
- `언어` → `한국어`
- `테마` → `다크모드`

Product Owner direction:
- `언어` is selectable through a bottom sheet.
- `테마` is selectable through a bottom sheet.
- the selector presentation should reuse the existing Fitness bottom-sheet / option pattern rather than introduce a parallel settings UI.

## Canonical Figma

File:
- `W3lZurXCXbThP67rF2xk2b`

Page:
- `08 설정 · 계정` — `233:2079`

Exploration section:
- `08_SETTINGS_V1_EXPLORATION` — `1158:645`

Settings home:
- `08A_설정홈_Exploration_V1` — `1158:649`
- `알림` right value = `켬`
- `언어` right value = `한국어`
- `테마` right value = `다크모드`

New selector states:
- `08D_언어설정_Sheet_Exploration_V1` — `1275:1029`
- `08E_테마설정_Sheet_Exploration_V1` — `1276:1041`

## Language selector

Presentation:
- bottom sheet
- title = `언어 설정`
- description = `앱에서 사용할 언어를 선택해 주세요.`
- current selected value = `한국어`
- current options shown in Figma = `한국어 / English`
- action = `저장`

The screen reuses the same `OptionItem` selected/unselected variants used by the approved unit-setting bottom sheet.

## Theme selector

Presentation:
- bottom sheet
- title = `테마 설정`
- description = `앱 화면의 테마를 선택해 주세요.`
- current selected value = `다크모드`
- current options shown in Figma = `라이트모드 / 다크모드`
- action = `저장`

The screen reuses the same `OptionItem` selected/unselected variants used by the approved unit-setting bottom sheet.

## Design-system constraint

The current local Figma `Colors` variable collection has only one mode: `Dark`.

Therefore:
- the selector UI and current `다크모드` state are valid now;
- the selector does **not** mean a complete Light color system has already been designed or QA-passed;
- actual Light-mode visual implementation requires a separate shared design-system expansion / impact review before implementation or release.

Do not create a second ad-hoc light palette per screen.

## Figma QA

Targeted read-back / screenshot QA:
- Settings-home right-value presentation remains consistent with the existing `단위 설정` pattern.
- language sheet = `360×780`, existing bottom-sheet structure reused.
- language selected option = `한국어` with existing selected `OptionItem` variant.
- theme sheet = `360×780`, existing bottom-sheet structure reused.
- theme selected option = `다크모드` with existing selected `OptionItem` variant.
- option typography/color/component bindings preserved after reordering theme options.
- no new foundation token or new selector component introduced.

Result: `PASS` for the current Product/UX + Figma scope.

## Remaining Group 08 closeout

Still open:
- decide `구독 관리` MVP visibility / behavior.
- determine whether the Light-mode design-system expansion is part of MVP implementation scope or a later follow-up; this does not require reopening the selector-sheet UX.
- complete only necessary Settings-home cleanup and Group 08 lock after remaining launch-level blocker review.

Release-only follow-ups from the prior checkpoint remain unchanged.

## Development boundary

Product Owner has not authorized development/Cursor handoff. Stay in Product/UX + Figma until explicitly switched.
