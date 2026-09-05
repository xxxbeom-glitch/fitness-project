# P0 16 / Production 211 — Promotion QA Result

**Date:** 2026-09-05  
**Status:** QA PASS / P0 16 DATA ROW LOCKED / 211 TARGET VALID / WORKBOOK MERGE & SERVING MEDIA NOT YET EXECUTED

## Scope

This QA closes the data-row promotion gate for the PO-approved P0 16 identities on top of the current Production Exercise DB v1 baseline.

Baseline:

- current Production canonical exercises: **195**
- P0 canonical identities under review: **16**
- validated target after merge: **211**

Important boundary:

- previously completed purchased-source / video / visual QA is **not rerun**
- raw purchased filename/path/media remains immutable provenance
- this pass checks canonical identity, display/search normalization, taxonomy, recording semantics, provenance linkage, and final row-count integrity
- default transformed/app-serving media selection remains the next separate step

References:

- `docs/CURRENT.md`
- `docs/exercise-db/exercise-db-v1-production.md`
- `docs/exercise-db/exercise-db-gap-analysis-v1.md`
- `docs/exercise-db/p0-canonical-row-spec-v1.md`
- `docs/exercise-db/2026-09-05-p0-16-production-promotion-spec.md`
- `docs/ux-decisions/2026-09-05-exercise-recording-types.md`

---

## QA conclusion

### PASS — canonical promotion

All 16 P0 canonical IDs are absent from the current Production 195 canonical set and may be added as new app-facing identities.

No P0 identity should be absorbed into a current exercise merely because the broad movement is similar. The equipment / posture / assistance semantics are history-relevant in the cases below.

Validated count:

**195 existing + 16 unique P0 = 211 canonical exercises**

### Required schema cleanup found during final 211 check

The 2026-09-05 approved recording model is `5 active + 3 reserved`. The existing 195-row Production workbook still contains four legacy recording values from the earlier normalization pass.

These are data-schema migrations only; they do not require source/video QA.

| canonical_id | legacy value | locked 5+3 value | reason |
|---|---|---|---|
| `elbow-side-plank` | `time` | `duration` | isometric hold; duration semantics |
| `hand-plank` | `time` | `duration` | isometric hold; duration semantics |
| `wall-sit` | `time` | `duration` | duration policy explicitly covers Wall Sit |
| `kettlebell-farmers-carry` | `weight_distance_or_time` | `distance_weight` | approved reserved type explicitly uses Farmers Walk / loaded carry as the example |

After these four legacy values are migrated, the 195 baseline and P0 16 can share one current recording-type vocabulary.

`distance_weight` remains schema-level RESERVED for MVP UI. Mapping the existing Farmers Carry to that type does not imply that a dedicated distance+weight Active Workout UI has already been implemented.

---

## P0 16 — QA-locked normalized rows

The values below are the Production-promotion row lock. They supersede draft-only normalization differences in `2026-09-05-p0-16-production-promotion-spec.md` where this table conflicts.

Display names preserve the PO-approved P0 canonical spec; common parenthetical naming remains in aliases instead of replacing the primary English display name.

| # | canonical_id | name_ko | name_en | aliases | body | primary | secondary | equipment | movement | posture / context | recording_type |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | `barbell-romanian-deadlift` | 바벨 루마니안 데드리프트 | Barbell Romanian Deadlift | Romanian Deadlift (Barbell); 바벨 RDL | 하체 | 둔근 / 햄스트링 | 코어 | Barbell | Hinge | hip_hinge | `weight_reps` |
| 2 | `dumbbell-romanian-deadlift` | 덤벨 루마니안 데드리프트 | Dumbbell Romanian Deadlift | Romanian Deadlift (Dumbbell); 덤벨 RDL | 하체 | 둔근 / 햄스트링 | 코어 | Dumbbell | Hinge | hip_hinge | `weight_reps` |
| 3 | `barbell-hip-thrust` | 바벨 힙 쓰러스트 | Barbell Hip Thrust | Hip Thrust (Barbell) | 하체 | 둔근 |  | Barbell | Hinge | bench_supported | `weight_reps` |
| 4 | `machine-lying-leg-curl` | 라잉 레그 컬 머신 | Lying Leg Curl Machine | Lying Leg Curl (Machine); 레그 컬 머신 | 하체 | 햄스트링 |  | Machine | Isolation | prone | `weight_reps` |
| 5 | `machine-seated-leg-curl` | 시티드 레그 컬 머신 | Seated Leg Curl Machine | Seated Leg Curl (Machine) | 하체 | 햄스트링 |  | Machine | Isolation | seated | `weight_reps` |
| 6 | `machine-seated-calf-raise` | 시티드 카프 레이즈 머신 | Seated Calf Raise Machine | Seated Calf Raise | 하체 | 종아리 |  | Machine | Isolation | seated_knee_flexed | `weight_reps` |
| 7 | `machine-hip-abduction` | 힙 어브덕션 머신 | Hip Abduction Machine | Hip Abduction (Machine) | 하체 | 중둔근 |  | Machine | Hip Abduction | seated | `weight_reps` |
| 8 | `machine-hip-adduction` | 힙 어덕션 머신 | Hip Adduction Machine | Hip Adduction (Machine) | 하체 | 내전근 |  | Machine | Hip Adduction | seated | `weight_reps` |
| 9 | `smith-machine-bench-press` | 스미스 머신 벤치프레스 | Smith Machine Bench Press | Bench Press (Smith Machine) | 가슴 | 대흉근 | 전면 삼각근 / 삼두근 | Smith Machine | Push | flat_bench | `weight_reps` |
| 10 | `smith-machine-squat` | 스미스 머신 스쿼트 | Smith Machine Squat | Squat (Smith Machine) | 하체 | 대퇴사두근 | 둔근 | Smith Machine | Squat | back_squat_guided | `weight_reps` |
| 11 | `machine-assisted-pull-up` | 어시스트 풀업 | Assisted Pull Up | Pull Up (Assisted); Assisted Pull-Up | 등 | 등 상부 / 광배근 | 이두근 / 승모근 | Machine | Pull | assisted_vertical_pull | `assisted_weight_reps` |
| 12 | `machine-assisted-dip` | 어시스트 딥스 | Assisted Dip | Dip (Assisted) | 가슴 | 대흉근 | 삼두근 | Machine | Push | assisted_dip | `assisted_weight_reps` |
| 13 | `machine-hack-squat` | 핵 스쿼트 머신 | Hack Squat Machine | Hack Squat (Machine) | 하체 | 대퇴사두근 | 둔근 | Machine | Squat | hack_squat_machine | `weight_reps` |
| 14 | `plank` | 플랭크 | Plank |  | 코어 | 코어 |  | Bodyweight | Core | forearm_plank | `duration` |
| 15 | `crunch` | 크런치 | Crunch |  | 코어 | 복직근 |  | Bodyweight | Core | supine_crunch | `reps` |
| 16 | `lying-leg-raise` | 라잉 레그 레이즈 | Lying Leg Raise | 레그 레이즈 | 코어 | 복직근 |  | Bodyweight | Core | supine_leg_raise | `reps` |

### Why several draft taxonomy values were normalized back to Production style

This pass keeps the existing Production taxonomy internally consistent instead of creating a P0-only vocabulary.

- `barbell-hip-thrust` matches the existing Kettlebell Hip Thrust normalized muscle structure: glute primary, no forced secondary value.
- `smith-machine-bench-press` follows the existing Smith incline press convention: chest primary, front deltoid / triceps secondary.
- `machine-assisted-pull-up` follows the current bodyweight Pull-Up muscle taxonomy while changing recording semantics to assistance + reps.
- `machine-assisted-dip` follows the existing Dip family taxonomy while changing recording semantics to assistance + reps.
- `plank` uses `Core` as the movement taxonomy and `duration` as the recording semantics; `Isometric` is not introduced as a P0-only movement category.
- Crunch / Lying Leg Raise retain the existing Core taxonomy style without adding unneeded inferred secondary fields.

These are G Fit normalized values and do not overwrite vendor metadata.

---

## Canonical collision / accidental-merge check

All 16 exact canonical IDs are unique against Production 195.

Important near-neighbor checks:

| P0 identity | existing near neighbor | result |
|---|---|---|
| Barbell Romanian Deadlift | Barbell Deadlift / Barbell Stiff Leg Deadlift | **SEPARATE** — ROM/posture/history meaning differs |
| Dumbbell Romanian Deadlift | Dumbbell Cross Body Romanian Deadlift | **SEPARATE** — bilateral standard RDL vs cross-body execution |
| Barbell Hip Thrust | Kettlebell Hip Thrust / loaded glute-bridge variants | **SEPARATE** — equipment/load history differs |
| Machine Lying / Seated Leg Curl | Dumbbell Leg Curl | **SEPARATE** — machine identity and posture differ |
| Smith Machine Bench Press | Smith Machine Incline Bench Press / Close-Grip Bench Press | **SEPARATE** — flat standard press is not angle/grip variant history |
| Smith Machine Squat | Barbell Squat / Smith Sumo Romanian Deadlift | **SEPARATE** — equipment/movement identity differs |
| Assisted Pull Up | Pull-Ups | **SEPARATE** — assistance value has opposite load semantics |
| Assisted Dip | Parallel Bar Dips / Machine Dips | **SEPARATE** — counterweight assistance is not bodyweight or loaded dip-machine history |
| Hack Squat Machine | Machine Leg Press | **SEPARATE** — distinct machine movement/history |
| Plank | Hand Plank / Elbow Side Plank | **SEPARATE** — standard forearm plank identity |
| Crunch | Machine Crunch | **SEPARATE** — bodyweight reps vs machine weight+reps |
| Lying Leg Raise | Hanging Knee Raises | **SEPARATE** — posture and movement execution differ |

No unexpected P0 canonical merge is approved.

---

## Recording semantics check

P0 16 distribution under the approved 5+3 model:

- `weight_reps`: **11**
- `reps`: **2**
- `duration`: **1**
- `assisted_weight_reps`: **2**
- `added_weight_reps`: **0**
- reserved types used by P0: **0**

Critical locks:

- `plank` = `duration`
- `machine-assisted-pull-up` = `assisted_weight_reps`
- `machine-assisted-dip` = `assisted_weight_reps`
- `crunch` / `lying-leg-raise` = `reps`

No fake rep conversion is used for duration exercises.

---

## Source provenance integrity

P0 source coverage was already completed and is reused as evidence; this QA does not replay visual inspection.

Source split:

- `MP4/MALE/Library_database`: **13** identities
- `MP4/MALE/Home_Workout_`: **3** identities

Locked representative provenance paths:

| canonical_id | provenance path |
|---|---|
| `barbell-romanian-deadlift` | `MP4/MALE/Library_database/Barbell-Romanian-Deadlift_Hips-FIX_.mp4` |
| `dumbbell-romanian-deadlift` | `MP4/MALE/Library_database/Dumbbell-Romanian-Deadlift_Hips-FIX_.mp4` |
| `barbell-hip-thrust` | `MP4/MALE/Library_database/Barbell-Hip-Thrust_Hips-FIX_.mp4` |
| `machine-lying-leg-curl` | `MP4/MALE/Library_database/Lever-Lying-Leg-Curl_Thighs-FIX_.mp4` |
| `machine-seated-leg-curl` | `MP4/MALE/Library_database/Lever-Seated-Leg-Curl_Thighs-FIX_.mp4` |
| `machine-seated-calf-raise` | `MP4/MALE/Library_database/Lever-Seated-Calf-Raise-(plate-loaded).mp4` |
| `machine-hip-abduction` | `MP4/MALE/Library_database/Lever-Seated-Hip-Abduction_Hips-FIX_.mp4` |
| `machine-hip-adduction` | `MP4/MALE/Library_database/Lever-Seated-Hip-Adduction_Thighs.mp4` |
| `smith-machine-bench-press` | `MP4/MALE/Library_database/Smith-Bench-Press_Chest-FIX_.mp4` |
| `smith-machine-squat` | `MP4/MALE/Library_database/Smith-Squat_Hips_.mp4` |
| `machine-assisted-pull-up` | `MP4/MALE/Library_database/Assisted-Pull-up_Back.mp4` |
| `machine-assisted-dip` | `MP4/MALE/Library_database/Assisted-Triceps-Dip-(kneeling)_Upper-Arms.mp4` |
| `machine-hack-squat` | `MP4/MALE/Library_database/Lever-Linear-Hack-Squat-(male)_Thighs_.mp4` |
| `plank` | `MP4/MALE/Home_Workout_/Front-Elbow-Plank-(male)_Waist-FIX_.mp4` |
| `crunch` | `MP4/MALE/Home_Workout_/Crunch-Floor-(male)_waist.mp4` |
| `lying-leg-raise` | `MP4/MALE/Home_Workout_/Lying-Leg-Raise_Waist-FIX_.mp4` |

Rules:

- provenance path identifies the immutable purchased source
- it is not automatically the final app-serving asset path
- raw media is not renamed or mutated in place
- serving/transformed media selection happens after canonical row lock

---

## Final gate result

| QA gate | Result |
|---|---|
| 16 canonical IDs unique vs Production 195 | **PASS** |
| accidental identity absorption / history merge | **PASS** |
| Korean / English display + aliases | **PASS — LOCKED ABOVE** |
| equipment / body-part / movement taxonomy | **PASS — NORMALIZED TO CURRENT PRODUCTION STYLE** |
| P0 recording semantics | **PASS** |
| current 195 legacy recording vocabulary | **PASS WITH 4 LOCKED MIGRATIONS** |
| source provenance | **PASS** |
| raw source immutability | **PASS** |
| final arithmetic row count | **PASS — 211** |
| default app-serving media selected | **NOT YET — NEXT STEP** |
| merged 211 workbook / runtime DB artifact created | **NOT YET** |

## Production meaning at this checkpoint

The **canonical/data promotion gate is passed** and the final 211-row target is valid.

Do not yet describe a new workbook/runtime database as already containing 211 rows until the actual derived artifact is merged/generated and its count is rerun.

This checkpoint therefore means:

**P0 16 row specification is Production-locked → 211 merge is safe → default production-serving media selection is next.**

No Cursor implementation handoff is required at this point.
