# Gym Animations Source Analysis Checkpoint

**Date:** 2026-09-04
**Status:** ACTIVE SOURCE ANALYSIS / R2 RAW UPLOAD IN PROGRESS
**Scope:** Purchased Gym Animations package structure, deduplication, cable classification, raw media storage setup

## 1. Purchased source

Purchased package:

- vendor: Gym Animations
- product: `Gym Workout Man Package`
- delivered source total: **17,085 files / 98.69 GB**
- source root observed locally: `D:\project\111111111\Animations`

Source is treated as read-only. Original filenames, relative paths, media and folder structure are preserved.

Do not rename, move, convert or delete purchased source files as part of source analysis.

## 2. Delivered folder structure

Top level:

- `GIFS` — 7,605 files / 24.24 GB
- `MP4` — 9,480 files / 74.45 GB

Important MP4 branches:

- `MP4/MALE/Gym_Workout_`
- `MP4/MALE/Home_Workout_`
- `MP4/MALE/Library_database`
- `MP4/FEMALE/Gym_Workout_`
- `MP4/FEMALE/Home_Workout_`
- `MP4/BODY PARTS (PNG)`
- `MP4/GYM EQUIPMENTS (PNG)`

The delivered folder contains Male/Female and Gym/Home assets. Product DB work remains focused on G Fit gym-based resistance/weight training scope.

## 3. Male gym source deduplication

Comparison result:

| Folder | MP4 files | Notes |
|---|---:|---|
| `Gym_Workout_` | 2,081 | all 2,081 also exist in `Library_database` |
| `Library_database` | 2,109 | 2,081 exact matches + 28 additional files |
| `Home_Workout_` | 2,120 | almost entirely separate catalog |

`Gym_Workout_` ↔ `Library_database`:

- exact filename overlap: **2,081**
- filename + size candidates: **2,081**
- SHA256 identical: **2,081 / 2,081**
- files unique to `Library_database`: **28**

`Gym_Workout_` ↔ `Home_Workout_`:

- exact overlap: **6**
- Gym only: **2,075**
- Home only: **2,114**

Conclusion:

`MP4/MALE/Library_database` is the preferred raw gym catalog for ongoing source analysis. Do not count `Gym_Workout_` and `Library_database` as separate catalogs.

## 4. Raw catalog checkpoint

A raw catalog was generated from `MP4/MALE/Library_database`.

Principle:

- source filename/path = immutable provenance fields
- G Fit canonical identity/name/attachment/variant = derived fields
- source and normalized values must not be mixed

The 2,109 raw files contain a large amount of resistance-training coverage, including Cable, Dumbbell, Barbell, Kettlebell, Lever/machine, Smith, Landmine and other equipment families.

This substantially changes the problem from "find enough exercises" to "normalize a large catalog into a usable canonical exercise DB without exposing excessive variants."

## 5. Cable first-pass classification

Cable source files were selected first to validate the canonical exercise + attachment model.

Checkpoint:

- Cable raw videos: **297**
- first-pass broad exercise groups: **58**
- files needing direct visual review: **14**
- filename duplicate candidate groups: **18 groups / 38 files**
- files with explicit attachment/accessory wording detected in first pass: **56**

Important finding:

The source includes attachment-specific media for multiple cable exercises, including examples such as:

- lat pulldown with rope attachment
- lat pulldown with MAG grip
- lat pulldown with V-bar
- pro lat bar pulldown
- twin-handle / parallel-grip lat pulldown
- multiple triceps pushdown attachments
- multiple seated-row attachments

This supports the PO-approved UX model:

`canonical exercise + attachment context + attachment-specific media`

Example:

- canonical exercise: `lat_pulldown`
- default/initial attachment may be wide lat bar
- selecting V-bar/MAG/rope etc. changes attachment context and may select a matching media asset
- source media remains separate; app-facing search does not need to expose every source variant as an independent canonical exercise

This does **not** mean every attachment variation is automatically merged. Cases commonly treated as separate exercises may remain separate canonical identities after normalization review.

Canonical UX decision remains:

`docs/ux-decisions/2026-09-03-cable-attachment-active-workout.md`

## 6. Media storage setup

Cloudflare R2 has been activated for raw source backup/storage.

Raw bucket:

`gfit-source-original`

Storage policy:

- raw purchased source is uploaded with the existing folder tree and filenames unchanged
- raw bucket is separate from future app-serving derivatives
- future app media should use a separate derived-media bucket/path after selection, conversion, compression, background treatment and other production transforms

Windows `rclone` is configured against Cloudflare R2 using the S3-compatible endpoint.

Connection test to the empty bucket succeeded.

Current operation in progress:

```text
rclone copy D:\project\111111111\Animations -> r2:gfit-source-original/Animations
```

The raw upload is **in progress** at this checkpoint; completion has not yet been independently verified.

Post-upload verification target:

- expected file count: **17,085**
- expected total size: **about 98.69 GB**

Do not mark raw upload DONE until remote `rclone size` / object count is checked against the source scan.

## 7. Next source-analysis steps

After raw upload verification:

1. finish visual QA of the 14 ambiguous Cable files
2. finalize Cable grouping rules: canonical exercise vs attachment vs grip/posture/variant vs duplicate
3. expand the same normalization framework to machines / barbell / dumbbell / kettlebell / Smith / Landmine
4. compare normalized candidates to existing Production Exercise DB v1
5. derive G Fit canonical candidate count and true gap list
6. only then decide production media transform/upload structure

No implementation Cursor handoff is implied by this checkpoint. This is source/DB analysis and media-ops preparation.
