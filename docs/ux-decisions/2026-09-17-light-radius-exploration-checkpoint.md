# Light Radius Exploration — D Preview Checkpoint

**Status:** EXPLORATORY · NOT FINAL · NON-PRODUCTION
**Date:** 2026-09-17
**Figma file:** `W3lZurXCXbThP67rF2xk2b`
**Exploratory section:** `LIGHT_COLOR_CASE_D — PETROL TEAL TONAL` — `1642:1328`

## Purpose

Product Owner requested a visual check of a size-aware corner-radius rule before deciding whether to adopt it into the Fitness design system.

This checkpoint records only the current D exploratory preview. It does not approve or freeze a production radius system.

## Preview rule under review

Working direction:
- smaller UI elements use smaller radius
- standard content cards keep the existing moderate radius
- nested controls should not automatically inherit the same radius as their larger parent
- pill/circle shapes remain fully rounded only where the shape itself requires it

## D exploratory changes applied

Representative changes currently visible in the D section:
- Workout exercise card: `12` retained
- Workout exercise thumbnail: `12 -> 8`
- Workout weight/reps cells: `8 -> 6`
- Workout set add/delete buttons: `12 -> 8`
- Analysis metric segmented-control outer container: `12 -> 8`
- Analysis metric segment items: `8 -> 6`
- Small CTA/secondary button samples in the D state preview: `10 -> 8`
- large grouped Settings cards: `12` retained

Full/circular completion controls, progress tracks, chips, badges, and other genuinely pill/circle roles remain fully rounded where appropriate.

## Scope boundary

- D remains an exploratory/reference section only.
- no production Group 01-08 screen was recolored or radius-migrated by this checkpoint.
- no shared production Radius Variable/Style was changed.
- no Common_Component production master was changed.
- no production-wide light-color rollout is authorized by this checkpoint.
- no radius scale or component mapping is final until Product Owner reviews the visual result and explicitly approves it.
- no Cursor/development handoff.

## Next decision

Product Owner reviews the D preview and decides whether to:
1. keep this size-aware radius direction,
2. make it more angular,
3. make it slightly rounder, or
4. reject it and retain the current production radius behavior.
