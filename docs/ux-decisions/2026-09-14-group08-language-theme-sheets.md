# Group 08 — Language / Theme selector sheets

**Date:** 2026-09-14  
**Status:** FIGMA QA REFERENCE · PRODUCT POLICY DEFERRED · NOT LOCKED · NO CURSOR HANDOFF

## Context correction

The current project phase is not a final settings-policy decision pass.

The Product Owner is currently performing a cross-group QA pass that compares the produced Figma artifacts against the existing product planning / decision history.

Therefore:
- `언어`, `테마`, `구독 관리` final MVP policy / visibility decisions are deferred until later.
- the language/theme selector screens created in this session are QA/reference artifacts only.
- their existence must not be interpreted as MVP scope lock, launch-default lock, or implementation authorization.
- Group 08 remains unlocked.

## Current Figma artifact

Settings home currently displays right-side values using the existing `단위 설정` value + chevron pattern:
- `알림` → `켬`
- `언어` → `한국어`
- `테마` → `다크모드`

Canonical Figma:
- file `W3lZurXCXbThP67rF2xk2b`
- page `08 설정 · 계정` — `233:2079`
- exploration section `08_SETTINGS_V1_EXPLORATION` — `1158:645`
- settings home `08A_설정홈_Exploration_V1` — `1158:649`
- language sheet `08D_언어설정_Sheet_Exploration_V1` — `1275:1029`
- theme sheet `08E_테마설정_Sheet_Exploration_V1` — `1276:1041`

These frames are retained so the planned interaction shape can be inspected during QA.

## Language selector — current QA artifact

Current presentation:
- bottom sheet
- title = `언어 설정`
- description = `앱에서 사용할 언어를 선택해 주세요.`
- displayed selected value = `한국어`
- displayed options = `한국어 / English`
- action = `저장`

The screen reuses the same `OptionItem` selected/unselected variants used by the approved unit-setting bottom sheet.

This is not a final statement that both languages ship in MVP.

## Theme selector — current QA artifact

Current presentation:
- bottom sheet
- title = `테마 설정`
- description = `앱 화면의 테마를 선택해 주세요.`
- displayed selected value = `다크모드`
- displayed options = `라이트모드 / 다크모드`
- action = `저장`

The screen reuses the same `OptionItem` selected/unselected variants used by the approved unit-setting bottom sheet.

This is not a final statement that Light mode ships in MVP.

## Design-system observation

The current local Figma `Colors` variable collection has only one mode: `Dark`.

This is an observed implementation/design-system constraint only. Since theme scope is deferred, no Light-mode expansion decision is made in this checkpoint.

Do not create a second ad-hoc light palette per screen.

## Targeted artifact QA

Read-back / screenshot QA verified only that the created Figma artifacts are structurally consistent with the existing Fitness system:
- Settings-home right-value presentation matches the existing `단위 설정` pattern.
- language sheet = `360×780`, existing bottom-sheet structure reused.
- language selected option = `한국어` with existing selected `OptionItem` variant.
- theme sheet = `360×780`, existing bottom-sheet structure reused.
- theme selected option = `다크모드` with existing selected `OptionItem` variant.
- no new foundation token or parallel selector component introduced.

Result: `PASS` for artifact construction only.

It is **not** a Product/UX lock or MVP-scope approval.

## Current QA direction

Continue comparing each Group's actual Figma artifact against the existing planning / decision source of truth.

During this QA pass:
- flag mismatches that materially diverge from approved planning;
- separate true blockers from later product decisions;
- do not force unresolved `언어 / 테마 / 구독 관리` policy decisions just to close Group 08;
- do not reopen already approved/PASS areas unless the cross-check finds a real conflict or regression.

## Development boundary

Product Owner has not authorized development/Cursor handoff. Stay in Product/UX + Figma QA until explicitly switched.
