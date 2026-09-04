# Exercise DB / Asset Source Purchase Hold

**Date:** 2026-09-03
**Status:** RESOLVED 2026-09-04 — PACKAGE PURCHASED / SOURCE ANALYSIS ACTIVE
**Authority:** Product Owner decision

## Decision

Exercise DB expansion and new exercise-asset production were paused until the Product Owner decided whether to purchase the Gym Animations exercise package being reviewed.

This hold is now **resolved**. The Product Owner purchased the **Gym Animations — Gym Workout Man Package** and source analysis began on 2026-09-04.

The completed DB work from before the hold remains preserved; the new package is treated as a larger raw source catalog, not as an automatic replacement for the G Fit canonical exercise DB.

## Preserve as-is

- Production Exercise DB v1: 195 app-facing canonical / 206 purchased source baseline
- Existing purchased source and metadata: read-only
- P0 new exercise scope: 16 approved
- P0 canonical row spec v1: approved spec, not yet production assets
- Assisted pull-up / assisted dip recording: `assisted_weight_reps`
- Existing exercise normalization rules and history identity rules

## Items that were paused

- `machine-front-military-press` shoulder-press rename / alias finalization
- pin-stack vs plate-loaded vs ISO-lateral shoulder-press expansion decisions
- additional exercise-gap finalization based only on the current 206-source library
- new AI-created exercise posters
- production promotion of P0 new exercise assets

These items are **not automatically resumed as-is**. They are re-evaluated against the newly purchased source catalog so that we do not create duplicate mapping/asset work.

## Why the hold existed

The purchased package provides a much larger source catalog and video/visual asset set. Finalizing detailed machine variants and missing-exercise coverage before reviewing that source would have created avoidable remapping and duplicate work.

The larger package is treated as a **source catalog**, not as the G Fit canonical exercise list.

## Resumed path — package purchased

1. Preserve the purchased package in a raw/read-only source layer.
2. Inspect actual package contents, IDs/names, visual/video assets and available metadata.
3. Filter to G Fit scope: gym-based resistance/weight training; home-workout catalog coverage is not a product goal.
4. Map package exercises against the existing Production DB v1 baseline.
5. Re-evaluate duplicates, machine variants and genuine gaps.
6. Finalize G Fit canonical DB independently of replaceable image/video assets.
7. QA assets and promote only approved canonical rows/assets to production.

## 2026-09-04 source checkpoint

Confirmed from the delivered package structure scan:

- total source package: **17,085 files / 98.69 GB**
- top-level media: `GIFS` and `MP4`
- `MP4/MALE/Gym_Workout_`: 2,081 MP4 files
- `MP4/MALE/Library_database`: 2,109 MP4 files
- all 2,081 `Gym_Workout_` files are byte-identical matches inside `Library_database`; `Library_database` has 28 additional files
- `MP4/MALE/Home_Workout_`: 2,120 MP4 files and is almost entirely distinct from the gym set (6 exact overlaps)
- therefore `Library_database` is the preferred raw gym catalog for ongoing analysis; `Gym_Workout_` is not counted as an additional 2,081 unique exercises

Raw source filenames and paths remain unchanged. App-facing canonical IDs/names/attachment mapping are created only in derived data.

Detailed checkpoint:

`docs/exercise-db/2026-09-04-gym-animations-source-analysis-checkpoint.md`

## Parallel product work

Product/UX work may continue independently. Cable attachment UX is already PO-approved and source analysis has now provided evidence that attachment-specific media variants are available for multiple cable exercises.
