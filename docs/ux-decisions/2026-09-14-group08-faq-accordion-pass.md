# Group 08 FAQ Accordion — Current PASS

**Date:** 2026-09-14  
**Status:** CURRENT · FIGMA QA PASS  
**Scope:** Group 08 settings/account support flow — `자주 묻는 질문`

## Canonical Figma

- file: `W3lZurXCXbThP67rF2xk2b`
- page: `08 설정 · 계정` — `233:2079`
- FAQ default: `08I_FAQ_Exploration_V1` — `1232:812`
- FAQ expanded example: `08I1_FAQ_Expanded_Exploration_V1` — `1232:924`
- shared component: `AccordionItem` — `1238:1139`
- canonical chevron: `chevron-right` — `636:893`

## FAQ presentation

- FAQ uses a reusable shared accordion instead of local one-off rows.
- `AccordionItem` variants:
  - `State=Collapsed`
  - `State=Expanded`
- exposed content properties:
  - `Question`
  - `Answer`
  - `ShowDivider`
- last grouped item uses `ShowDivider=false`.
- existing Fitness variables/styles are reused; no new foundation token is introduced.

## Current spacing / interaction

- question row height: `56px`
- accordion chevron visual size: `16×16`
- answer top spacing in expanded state: `4px`
- existing 20px page/card alignment and current Fitness typography/color tokens remain in use.
- expanded content grows naturally; screen/frame must never shrink below the global `360×780` minimum.

## Chevron consistency QA

A mismatch was found during targeted QA:
- accordion open/close chevrons used canonical `636:893` at `16×16`
- `문의하기` row used a different legacy chevron source at `20×20`

Resolution:
- both FAQ states now use the same canonical `636:893` chevron source for the `문의하기` row
- `문의하기` chevron visual size is normalized to `16×16`
- row alignment remains right-aligned through the existing horizontal `SPACE_BETWEEN` layout

## QA result

Targeted Figma QA PASS:
- default FAQ screenshot PASS
- expanded FAQ screenshot PASS
- accordion component instance linkage PASS
- canonical chevron reuse PASS
- icon-size consistency PASS
- `360×780` minimum frame rule PASS
- no clipping in the current FAQ/support presentation

## Next open item

Continue Group 08 support flow with `문의하기`.
