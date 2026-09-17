# Light Color System — PO Approval Checkpoint

**Date:** 2026-09-17  
**Status:** PO APPROVED · PRODUCTION-WIDE APPLICATION DEFERRED

## Decision

Product Owner approved the current **D / Petrol Teal Tonal** light-theme color direction as the baseline for the Fitness app.

This approval records the color direction only. It does **not** authorize a production-wide Figma rollout or Cursor implementation yet.

## Approved exploratory reference

Canonical Figma file:
- `W3lZurXCXbThP67rF2xk2b`

Exploratory section:
- `LIGHT_COLOR_CASE_D — PETROL TEAL TONAL` — `1642:1328`

Representative screens:
- Workout — `1642:1364`
- Analysis — `1642:1759`
- Settings — `1642:1953`

## Approved palette baseline

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

## Companion surface rule in the approved D exploration

- Content cards and list-container cards use **white surface + no outer border + subtle shadow**.
- Current subtle card shadow: `0 2px 8px 0`, `#151918` at `5%`.
- Input cells, segmented controls, and secondary controls may retain the default control border.
- Internal list dividers remain separate from card outer borders.
- D exploration does not use background-blur glass treatment for standard surfaces.
- Workout LiveBar keeps its manually adjusted local background and no border.

## Scope lock

Until the Product Owner explicitly requests rollout:

- do not apply this palette across production Figma pages,
- do not replace shared production Variables/Styles globally,
- do not reopen already closed Groups 03–08 solely for color migration,
- do not hand off implementation to Cursor,
- do not treat the D exploratory section itself as the production canonical screen set.

The next production step, when explicitly requested, is to map this approved palette to the existing shared semantic color roles and then roll it out through reusable Variables/Styles/Components with targeted visual regression QA.
