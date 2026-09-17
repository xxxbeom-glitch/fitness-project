# Light Color System — Session Handoff

**Date:** 2026-09-17  
**Status:** FIGMA EXPLORATION COMPLETE FOR CURRENT D BASELINE · PO APPROVED · PRODUCTION ROLLOUT DEFERRED

## Why this checkpoint exists

This checkpoint preserves the latest Figma exploration state so a new chat can resume without reconstructing the session from conversation history.

The authoritative approval decision remains:
- `docs/ux-decisions/2026-09-17-light-color-system-po-approval.md`

This document records the additional Figma details and local fixes that were completed during the exploration session but were not yet captured in GitHub.

## Resume from here

When resuming color-system work:

1. Read `PROJECT_INSTRUCTIONS.md`.
2. Read `docs/CURRENT.md`.
3. Read `docs/ux-decisions/2026-09-17-light-color-system-po-approval.md`.
4. Read this handoff.
5. Do **not** roll the approved palette into production pages unless the Product Owner explicitly requests that next step.

## Figma reference

Canonical file:
- `W3lZurXCXbThP67rF2xk2b`

Exploratory section:
- `LIGHT_COLOR_CASE_D — PETROL TEAL TONAL` — `1642:1328`

Representative exploratory screens:
- Workout — `1642:1364`
- Analysis — `1642:1759`
- Settings — `1642:1953`
  - current screen name: `D_08A_Settings_Home_PETROL_TEAL_TONAL`

D is an exploratory/reference section only. It is not the production canonical screen set.

## Approved D palette baseline

| Role | Value |
| --- | --- |
| Primary / Brand | `#218F8A` |
| Primary Action / CTA | `#1A7E79` |
| Primary Soft | `#DCEFED` |
| Canvas | `#F6F7F7` |
| Surface | `#FFFFFF` |
| Subtle Surface | `#EFF2F2` |
| Border / Subtle | `#EAEEED` |
| Border / Default Control | `#E3E8E7` |
| Text Primary | `#151918` |
| Text Secondary | `#626866` |
| Success | `#4F8A61` |
| Danger | `#C85A64` |

The Primary family intentionally uses a teal/petrol direction rather than generic blue, pure green, or navy. CTA uses the darker action tone instead of using Brand `#218F8A` for every solid action.

## Surface / border / shadow rules finalized in D

### Content cards and grouped list cards
Use:
- `Surface #FFFFFF`
- no outer border
- subtle drop shadow: `0 2px 8px 0`, `#151918` at `5%`

This applies to both conventional cards and list-container surfaces, including the current D examples for:
- active-workout exercise cards
- analysis chart card
- body-distribution card
- recent-progress list card
- recent-workout list card
- settings grouped list cards

### Controls
Controls that need an explicit affordance may retain border treatment:
- input cells
- weight/repetition cells
- segmented controls
- secondary buttons
- similar small interactive controls

Current default control border:
- `#E3E8E7`

Very subtle divider/border role where needed:
- `#EAEEED`

### Internal list dividers
Internal row dividers are separate from the outer card rule and may remain when they improve scanning. Do not interpret an internal divider as a card outer border.

## Settings shadow clipping fix

On `D_08A_Settings_Home_PETROL_TEAL_TONAL` the card shadows initially looked abruptly cut off.

Root cause:
- each settings section wrapper had `Clip content` enabled, so the child `SettingCard` shadow was clipped at the section boundary.

Fixed wrappers:
- `SettingSection_Profile` — `1642:1960`
- `SettingSection_Workout` — `1642:1967`
- `SettingSection_AppSettings` — `1642:1981`
- `SettingSection_Account` — `1642:1997`
- `SettingSection_Support` — `1642:2004`
- `SettingSection_Information` — `1642:2016`

Current rule:
- section wrappers above have clipping OFF so card shadows can render naturally.
- screen/content-level clipping remains in place where required for overall screen bounds/scroll behavior.
- all six `SettingCard` surfaces remain no-border + subtle shadow.

## Glass / blur decision in D

The Product Owner asked to remove glass treatment from D.

Current D rule:
- standard D surfaces do **not** use background blur / glass treatment.
- do not reintroduce glass globally while continuing from this checkpoint.

The Workout LiveBar remains a special local treatment, but not a blur-based glass surface.

## Workout LiveBar local state

Node:
- `1642:1377`

Current local state at end of session:
- no border/stroke on any side
- no background blur
- manually adjusted light local background retained
- latest readback fill: approximately `#FEFFFF` at `96%`
- local drop shadow retained

The Product Owner manually adjusted the LiveBar background during exploration. Do not overwrite that local fill when resuming unless explicitly requested.

## What was intentionally NOT done

Do not infer that approval means rollout. The following remain intentionally untouched:
- production Figma pages for Groups 03–08
- shared production color Variables/Styles
- production shared components solely for palette migration
- Cursor implementation
- development handoff

Existing Groups 03–08 remain closed; color approval alone does not reopen their Product/UX QA.

## Next step only when PO explicitly asks

Map the approved D palette onto the existing shared semantic color roles first, then propagate through reusable Variables/Styles/Components rather than manually recoloring screens one by one.

After rollout, perform targeted visual regression QA only on affected representative production screens and shared assets. Do not repeat unrelated already-PASS QA.