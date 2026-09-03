# Purchased Exercise Asset Classification v0.6

**Date:** 2026-09-03  
**Status:** CANDIDATE / NEAR-FINAL / NOT PRODUCTION-FINAL

## Summary

Purchased source assets and `metadata.json` remain **read-only**. v0.6 is a separate G Fit normalized candidate derived from the 206 purchased source rows.

Current QA confidence:

- source rows preserved: **206**
- high-confidence: **205**
- medium-confidence: **1**
- low-confidence: **0**
- exact source-metadata rows newly enriched/resolved in v0.6: **36**
- required core candidate blank rows: **0**
- high-confidence rows missing structured source fields: **0**
- English-only `name_ko`: **0**
- unexpected shared canonical groups: **0**
- formula cells / formula errors: **0 / 0**

v0.6 completes the remaining Kettlebell / Machine / Smith Machine / EZ Bar / Plate enrichment except for one source-header retrieval gap described below.

## Poster QA — 4 rows

Actual purchased posters were visually rechecked.

1. `dumbbell-row-unilateral` — **MATCH CONFIRMED**
   - source: one knee + one hand supported on flat bench
   - poster: same posture
   - handling: separate exercise retained; previous metadata/poster conflict resolved

2. `dumbbell-single-arm-row` — **MISMATCH CONFIRMED**
   - source: bench-supported one-arm row
   - poster: two feet on floor / staggered stance + one-hand bench support
   - handling: separate asset-based identity retained; raw source metadata preserved

3. `kettlebell-row-single` — **MISMATCH CONFIRMED**
   - source: staggered one-arm row; non-working hand on thigh
   - poster: bent-over two-hand row with one kettlebell
   - handling: separate identity retained; display clarified to `싱글 케틀벨 로우` / `Single Kettlebell Row`; raw source metadata preserved

4. `kettlebell-single-arm-row` — **MISMATCH CONFIRMED**
   - source: bench-supported one-arm row
   - poster: staggered one-arm row with non-working hand on thigh
   - handling: separate identity retained; raw source metadata preserved

Poster QA result: **1 match / 3 confirmed metadata-posture mismatches**. None of the three mismatch rows is auto-merged.

## Major normalization corrections

### `machine-face-pulls`

Source metadata identifies this as:

- source name: `Cable Rope Face Pulls`
- primary: `Shoulders`
- equipment: `Cable Machine`
- pattern: `Pull`
- difficulty: `beginner`

G Fit candidate is therefore normalized to:

- canonical: `cable-rope-face-pull`
- `name_ko`: `케이블 로프 페이스풀`
- `name_en`: `Cable Rope Face Pull`
- normalized equipment: `Cable Machine`

This is **rename / reclassification**, not a duplicate merge.

### Kettlebell row naming collision

`kettlebell-row` source instructions use two kettlebells, one in each hand. Its display is clarified to:

- `더블 케틀벨 로우`
- `Double Kettlebell Row`

`kettlebell-row-single` uses a single kettlebell in the poster and is clarified to:

- `싱글 케틀벨 로우`
- `Single Kettlebell Row`

The second row still carries the confirmed source/poster posture mismatch flag.

### Source equipment anomalies remain traceable

Raw purchased metadata is never overwritten when G Fit needs a more useful normalized equipment category.

Examples:

- `plate-forward-lunge`: source equipment=`Barbell`; source name/instructions explicitly use a weight plate → normalized equipment=`Plate`
- `ez-bar-preacher-curl`: source equipment=`Barbell` → normalized equipment=`EZ Bar`
- Smith Machine rows: source equipment=`Machine` → normalized equipment=`Smith Machine`

## Canonical integrity

Only three repeated canonical groups remain, all intentional:

- `incline-push-up` — confirmed purchased-source duplicate merge
- `cable-single-arm-row` — approved cable/pulley grip subrecords
- `lat-pulldown` — parent + approved narrow/neutral grip subrecord

No unexpected canonical collisions were found.

## Remaining structured-metadata blocker

`machine-45-degree-back-extension` source prose and `posterFile` verify that the asset is a 45-degree hyperextension / back-extension movement involving the lower back, glutes, and hamstrings.

However, the exact structured header fields from the purchased `metadata.json` — `primaryMuscles`, `secondaryMuscles`, `movementPattern`, `difficulty` — could not be recovered through the available File Library retrieval path.

Policy applied:

- do **not** infer or fabricate the missing raw structured fields
- keep the row medium-confidence
- flag `STRUCTURED_METADATA_HEADER_NOT_RETRIEVED`
- retain the exercise candidate while the source-header gap is resolved

This is the only medium-confidence row in v0.6.

## Production boundary

v0.6 is a **near-final Exercise DB v1 candidate**, not production-final.

Promotion to production Exercise DB v1 requires:

1. recover or otherwise source-verify the structured metadata header for `machine-45-degree-back-extension` without guessing
2. choose explicit production handling for the 3 confirmed asset/metadata posture mismatches — repair/regenerate/replace the asset, or retain the exercise with an asset exception
3. rerun final canonical / bilingual display / source-trace / row-count integrity QA

After production DB v1 is promoted, the next step is Planfit / Hevy / domestic core-exercise gap analysis to calculate the actual number of additional exercise assets that need to be produced.

## Derived artifact set

Generated separately from the purchased originals:

- `gfit_exercise_db_v1_candidate_v0_6.xlsx`
- `gfit_exercise_db_v1_candidate_v0_6.csv`
- `gfit_exercise_db_v1_candidate_v0_6.json`
- `QA_SUMMARY.md`
- `diagnostics.json`
- `manifest.json`
- QA render previews for `QA_Summary` and `Asset_QA`

Original purchased metadata/assets were not modified.