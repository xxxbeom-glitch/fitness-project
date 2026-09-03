# Exercise DB / Asset Source Purchase Hold

**Date:** 2026-09-03
**Status:** CONFIRMED HOLD
**Authority:** Product Owner decision

## Decision

Exercise DB expansion and new exercise-asset production are paused until the Product Owner decides whether to purchase the Gym Animations exercise package being reviewed.

This is a pause, not a rollback of completed DB work.

## Preserve as-is during hold

- Production Exercise DB v1: 195 app-facing canonical / 206 purchased source baseline
- Existing purchased source and metadata: read-only
- P0 new exercise scope: 16 approved
- P0 canonical row spec v1: approved spec, not yet production assets
- Assisted pull-up / assisted dip recording: `assisted_weight_reps`
- Existing exercise normalization rules and history identity rules

## Specifically paused

- `machine-front-military-press` shoulder-press rename / alias finalization
- pin-stack vs plate-loaded vs ISO-lateral shoulder-press expansion decisions
- additional exercise-gap finalization based only on the current 206-source library
- new AI-created exercise posters
- production promotion of P0 new exercise assets

## Why

If the new package is purchased, it will provide a larger source catalog and video/visual assets. Finalizing detailed machine variants and missing-exercise coverage before reviewing that source could create avoidable remapping and duplicate work.

The larger package, if purchased, is treated as a source catalog rather than automatically becoming the G Fit canonical exercise list.

## Resume path — if package is purchased

1. Preserve the purchased package in a raw/read-only source layer.
2. Inspect actual package contents, IDs/names, visual/video assets and available metadata.
3. Filter to G Fit scope: gym-based resistance/weight training; home-workout catalog coverage is not a product goal.
4. Map package exercises against the existing Production DB v1 baseline.
5. Re-evaluate duplicates, machine variants and genuine gaps.
6. Finalize G Fit canonical DB independently of replaceable image/video assets.
7. QA assets and promote only approved canonical rows/assets to production.

## Resume path — if package is not purchased

Resume from the current checkpoint:

1. shoulder-press machine identity/display split review
2. remaining P0 asset strategy
3. new poster production and QA

## Parallel work while DB is on hold

Product/UX work that does not depend on the final exercise source catalog may continue. Current next area is Active Workout UX, beginning with the optional grip-selection interaction for cable/pulley exercises.
