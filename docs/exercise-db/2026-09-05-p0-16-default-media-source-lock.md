# P0 16 — Default Media Source Lock

**Date:** 2026-09-05  
**Status:** LOCKED / DEFAULT SOURCE INPUT 16/16

## Purpose

Lock one purchased source video per Production-locked P0 canonical exercise as the **default input source for later app-media generation**.

This step does **not** rerun completed source/video/visual QA.

Important distinction:

- raw purchased media = immutable provenance/source master
- selected default source = the raw file chosen as the transform/edit input for that canonical exercise
- app-serving media = later derived output after background removal / transparency / resize / compression / codec decision
- the app must not treat the raw R2 object as the final serving asset merely because it is selected here

The Product Owner explicitly chose to defer transparency/background-removal/export tuning until the media-edit/export stage.

---

## Locked P0 default source inputs

| # | canonical_id | default source input |
|---|---|---|
| 1 | `barbell-romanian-deadlift` | `MP4/MALE/Library_database/Barbell-Romanian-Deadlift_Hips-FIX_.mp4` |
| 2 | `dumbbell-romanian-deadlift` | `MP4/MALE/Library_database/Dumbbell-Romanian-Deadlift_Hips-FIX_.mp4` |
| 3 | `barbell-hip-thrust` | `MP4/MALE/Library_database/Barbell-Hip-Thrust_Hips-FIX_.mp4` |
| 4 | `machine-lying-leg-curl` | `MP4/MALE/Library_database/Lever-Lying-Leg-Curl_Thighs-FIX_.mp4` |
| 5 | `machine-seated-leg-curl` | `MP4/MALE/Library_database/Lever-Seated-Leg-Curl_Thighs-FIX_.mp4` |
| 6 | `machine-seated-calf-raise` | `MP4/MALE/Library_database/Lever-Seated-Calf-Raise-(plate-loaded).mp4` |
| 7 | `machine-hip-abduction` | `MP4/MALE/Library_database/Lever-Seated-Hip-Abduction_Hips-FIX_.mp4` |
| 8 | `machine-hip-adduction` | `MP4/MALE/Library_database/Lever-Seated-Hip-Adduction_Thighs.mp4` |
| 9 | `smith-machine-bench-press` | `MP4/MALE/Library_database/Smith-Bench-Press_Chest-FIX_.mp4` |
| 10 | `smith-machine-squat` | `MP4/MALE/Library_database/Smith-Squat_Hips_.mp4` |
| 11 | `machine-assisted-pull-up` | `MP4/MALE/Library_database/Assisted-Pull-up_Back.mp4` |
| 12 | `machine-assisted-dip` | `MP4/MALE/Library_database/Assisted-Triceps-Dip-(kneeling)_Upper-Arms.mp4` |
| 13 | `machine-hack-squat` | `MP4/MALE/Library_database/Lever-Linear-Hack-Squat-(male)_Thighs_.mp4` |
| 14 | `plank` | `MP4/MALE/Home_Workout_/Front-Elbow-Plank-(male)_Waist-FIX_.mp4` |
| 15 | `crunch` | `MP4/MALE/Home_Workout_/Crunch-Floor-(male)_waist.mp4` |
| 16 | `lying-leg-raise` | `MP4/MALE/Home_Workout_/Lying-Leg-Raise_Waist-FIX_.mp4` |

Coverage:

- Library_database: **13 / 16**
- Home_Workout_ fallback: **3 / 16**
- source-input missing: **0**

---

## Lock rules

1. The 16 paths above are the default source inputs for derived app media.
2. Completed identity/source/video QA is not reopened unless a concrete later transform/export defect reveals a mismatch.
3. Raw files remain read-only and keep original purchased filenames/paths.
4. Background removal and transparent export are post-source-lock transformations and do not change canonical identity.
5. GIF is not selected as the production format by this decision.
6. Final serving codec/container, resolution, FPS, bitrate/quality target, transparency format, and R2 serving path are intentionally **not locked yet**.
7. When transparent output is tested, use a small representative sample before bulk-processing 211 assets.

## Next

Define and test the derived media pipeline with a small sample:

`selected raw source -> edit/background removal -> export master or direct derived output -> app-serving encode -> R2 derived-media path -> device playback QA`

Only after the sample pipeline is validated should bulk media conversion be applied to the Production catalog.
