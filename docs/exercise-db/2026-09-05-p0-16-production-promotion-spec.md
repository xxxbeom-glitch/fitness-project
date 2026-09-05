# P0 16 — Production Promotion Spec

**Date:** 2026-09-05  
**Status:** P0 RECORDING SCHEMA LOCKED / READY FOR PRODUCTION PROMOTION QA

## Purpose

Prepare the PO-approved P0 16 identities for promotion on top of the current G Fit Production Exercise DB v1 baseline.

Current Production baseline:

- app-facing canonical exercises: **195**

P0 target after promotion:

- **195 + 16 = 211 app-facing canonical exercises**

Source boundary:

- `MP4/MALE/Library_database`: 13 P0 identities
- `MP4/MALE/Home_Workout_`: 3 fallback P0 identities, directly visually verified
- purchased raw filename/path/media remains read-only provenance

This spec does not mutate raw assets and does not yet select final transformed/app-serving media files.

---

## P0 normalized row draft

| # | canonical_id | name_ko | name_en | equipment | body part | movement | posture / context | recording_type | representative purchased source | source scope | QA |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | `barbell-romanian-deadlift` | 바벨 루마니안 데드리프트 | Romanian Deadlift (Barbell) | Barbell | 하체 | Hinge | standing_rdl | `weight_reps` | `Barbell-Romanian-Deadlift_Hips-FIX_.mp4` | Library | ready |
| 2 | `dumbbell-romanian-deadlift` | 덤벨 루마니안 데드리프트 | Romanian Deadlift (Dumbbell) | Dumbbell | 하체 | Hinge | standing_bilateral_rdl | `weight_reps` | `Dumbbell-Romanian-Deadlift_Hips-FIX_.mp4` | Library | ready |
| 3 | `barbell-hip-thrust` | 바벨 힙 쓰러스트 | Hip Thrust (Barbell) | Barbell | 하체 | Hinge | bench_supported_hip_thrust | `weight_reps` | `Barbell-Hip-Thrust_Hips-FIX_.mp4` | Library | ready |
| 4 | `machine-lying-leg-curl` | 라잉 레그 컬 머신 | Lying Leg Curl (Machine) | Machine | 하체 | Isolation | prone | `weight_reps` | `Lever-Lying-Leg-Curl_Thighs-FIX_.mp4` | Library | ready |
| 5 | `machine-seated-leg-curl` | 시티드 레그 컬 머신 | Seated Leg Curl (Machine) | Machine | 하체 | Isolation | seated | `weight_reps` | `Lever-Seated-Leg-Curl_Thighs-FIX_.mp4` | Library | ready |
| 6 | `machine-seated-calf-raise` | 시티드 카프 레이즈 머신 | Seated Calf Raise (Machine) | Machine | 하체 | Isolation | seated_knee_flexed | `weight_reps` | `Lever-Seated-Calf-Raise-(plate-loaded).mp4` | Library | ready; same-canonical machine-design QA complete |
| 7 | `machine-hip-abduction` | 힙 어브덕션 머신 | Hip Abduction (Machine) | Machine | 하체 | Hip Abduction | seated | `weight_reps` | `Lever-Seated-Hip-Abduction_Hips-FIX_.mp4` | Library | ready |
| 8 | `machine-hip-adduction` | 힙 어덕션 머신 | Hip Adduction (Machine) | Machine | 하체 | Hip Adduction | seated | `weight_reps` | `Lever-Seated-Hip-Adduction_Thighs.mp4` | Library | ready |
| 9 | `smith-machine-bench-press` | 스미스 머신 벤치프레스 | Bench Press (Smith Machine) | Smith Machine | 가슴 | Push | flat_bench | `weight_reps` | `Smith-Bench-Press_Chest-FIX_.mp4` | Library | ready |
| 10 | `smith-machine-squat` | 스미스 머신 스쿼트 | Squat (Smith Machine) | Smith Machine | 하체 | Squat | standard_stance | `weight_reps` | `Smith-Squat_Hips_.mp4` | Library | ready |
| 11 | `machine-assisted-pull-up` | 어시스트 풀업 | Pull Up (Assisted) | Machine | 등 | Pull | counterweight_kneeling_pad | `assisted_weight_reps` | `Assisted-Pull-up_Back.mp4` | Library | direct Machine visual QA confirmed |
| 12 | `machine-assisted-dip` | 어시스트 딥스 | Dip (Assisted) | Machine | 가슴 | Push | counterweight_kneeling_pad | `assisted_weight_reps` | `Assisted-Triceps-Dip-(kneeling)_Upper-Arms.mp4` | Library | direct Machine visual QA confirmed |
| 13 | `machine-hack-squat` | 핵 스쿼트 머신 | Hack Squat (Machine) | Machine | 하체 | Squat | hack_sled | `weight_reps` | `Lever-Linear-Hack-Squat-(male)_Thighs_.mp4` | Library | ready |
| 14 | `plank` | 플랭크 | Plank | Bodyweight | 코어 | Isometric | forearm_plank | `duration` | `Front-Elbow-Plank-(male)_Waist-FIX_.mp4` | Home fallback | direct visual QA passed; PO-approved duration recording |
| 15 | `crunch` | 크런치 | Crunch | Bodyweight | 코어 | Core | supine_floor_crunch | `reps` | `Crunch-Floor-(male)_waist.mp4` | Home fallback | direct visual QA passed |
| 16 | `lying-leg-raise` | 라잉 레그 레이즈 | Lying Leg Raise | Bodyweight | 코어 | Core | supine_bilateral_leg_raise | `reps` | `Lying-Leg-Raise_Waist-FIX_.mp4` | Home fallback | direct visual QA passed |

---

## Primary-muscle normalization draft

Use existing Production taxonomy style rather than vendor body-part suffix as normalized truth.

| canonical_id | primary_muscles_ko | secondary_muscles_ko |
|---|---|---|
| `barbell-romanian-deadlift` | 둔근 / 햄스트링 | 코어 |
| `dumbbell-romanian-deadlift` | 둔근 / 햄스트링 | 코어 |
| `barbell-hip-thrust` | 둔근 | 햄스트링 |
| `machine-lying-leg-curl` | 햄스트링 |  |
| `machine-seated-leg-curl` | 햄스트링 |  |
| `machine-seated-calf-raise` | 종아리 |  |
| `machine-hip-abduction` | 중둔근 |  |
| `machine-hip-adduction` | 내전근 |  |
| `smith-machine-bench-press` | 대흉근 | 삼두근 / 전면 삼각근 |
| `smith-machine-squat` | 대퇴사두근 | 둔근 |
| `machine-assisted-pull-up` | 광배근 | 이두근 / 등 상부 |
| `machine-assisted-dip` | 대흉근 / 삼두근 | 전면 삼각근 |
| `machine-hack-squat` | 대퇴사두근 | 둔근 |
| `plank` | 코어 | 둔근 |
| `crunch` | 복직근 |  |
| `lying-leg-raise` | 복직근 | 고관절 굴곡근 |

These are G Fit normalized values. They do not overwrite raw vendor metadata.

---

## Plank recording type — PO APPROVED

Decision:

- `plank.recording_type = duration`
- user performance is stored as hold duration, not repetitions
- seconds are not converted into fake reps

This follows the broader approved rule that exercises whose meaningful performance value is time should use `duration`.

Reference:

- `docs/ux-decisions/2026-09-05-duration-exercise-recording.md`

### UI boundary

The data decision is locked, but the timed-set UI is intentionally deferred.

- duration exercise performance timing and Rest Timer remain separate concepts
- existing Rest Timer decision remains unchanged
- Active Workout TIME row / timer start-stop / countdown-vs-stopwatch / end signal are future Figma/UX details
- UI detail does **not** block P0 data promotion

---

## Promotion QA gate

Before declaring the catalog Production 211:

1. confirm all 16 canonical IDs are unique against current Production 195
2. confirm no P0 row is accidentally absorbed into an existing identity whose equipment/history must remain separate
3. confirm `duration` on Plank and `assisted_weight_reps` on Assisted Pull-Up / Dip
4. verify Korean / English display names and search aliases
5. attach source provenance path without modifying raw media
6. choose one default production-serving media per canonical only after canonical rows are locked
7. rerun final row count: expected **211**

No Cursor implementation handoff yet.
