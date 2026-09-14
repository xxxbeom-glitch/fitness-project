# Group 08 — Language / Theme QA reference

**Date:** 2026-09-14  
**Status:** PRODUCT POLICY DEFERRED · FIGMA SELECTOR FRAMES REMOVED DURING CLEANUP · NOT LOCKED · NO CURSOR HANDOFF

## Context

The current project phase is a cross-group QA pass that compares the produced Figma artifacts against the existing product planning / decision history.

`언어`, `테마`, `구독 관리` final MVP policy / visibility decisions are deferred until later.

The temporary language/theme selector frames created during this QA session were useful for checking the interaction pattern, but they are **not confirmed product screens**. Per Product Owner cleanup direction, non-confirmed Group 08 artboards were removed from the Figma section.

## Settings-home QA artifact

The current Settings-home frame remains because it is the canonical Group 08 hub being checked against planning.

Current displayed right-side values:
- `알림` → `켬`
- `언어` → `한국어`
- `테마` → `다크모드`

These displayed values must not be interpreted as final MVP-scope or launch-default approval.

Canonical Figma:
- file `W3lZurXCXbThP67rF2xk2b`
- page `08 설정 · 계정` — `233:2079`
- section `08_SETTINGS_V1_EXPLORATION` — `1158:645`
- settings home `08A_설정홈_Exploration_V1` — `1158:649`

Removed QA-only frames:
- former `08D_언어설정_Sheet_Exploration_V1` — `1275:1029`
- former `08E_테마설정_Sheet_Exploration_V1` — `1276:1041`

## What the removed frames had verified

Before removal, targeted QA confirmed only that:
- a language/theme selector can reuse the approved unit-setting bottom-sheet pattern;
- existing `OptionItem` selected/unselected variants work for this use;
- no new foundation token or parallel selector component is required for the selector structure itself.

This was artifact construction QA only, not Product/UX lock.

## Design-system observation

The current local Figma `Colors` variable collection has only one mode: `Dark`.

No Light-mode expansion decision is made in this checkpoint. Do not create a second ad-hoc light palette per screen.

## Group 08 cleanup rule applied

The `08 설정 · 계정` section was cleaned so that current/approved flow screens remain, while non-confirmed selector artboards and exploration/draft note layers were removed.

This cleanup does not convert deferred settings decisions into approved scope.

## Current QA direction

Continue comparing each Group's actual Figma artifact against the existing planning / decision source of truth.

During this QA pass:
- flag real planning-vs-artifact mismatches;
- separate blockers from later product decisions;
- keep `언어 / 테마 / 구독 관리` final policy deferred;
- do not reopen already approved/PASS areas without a real conflict or regression.

## Development boundary

Product Owner has not authorized development/Cursor handoff. Stay in Product/UX + Figma QA until explicitly switched.
