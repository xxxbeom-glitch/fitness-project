# Exercise DB Normalization — Resume Checkpoint

**Date:** 2026-09-05  
**Status:** PRODUCTION GAP REMAP COMPLETE / RESUME FROM P1 IDENTITY REVIEW 3

## Source of Truth

Primary: `docs/CURRENT.md`

This file is the compact resume checkpoint for the current Exercise DB normalization / Production mapping work.

---

## Raw source / storage

Purchased source:

- Gym Animations — `Gym Workout Man Package`
- Male analysis base: `MP4/MALE/Library_database`
- analysis-base MP4 count: **2,109**

Cloudflare R2 raw upload:

- bucket: `gfit-source-original`
- objects: **17,085**
- exact size: **105,972,019,458 Byte**
- status: **VERIFIED / DONE**

Raw filename/path/media remains read-only provenance.

---

## Completed targeted normalization / visual QA

- Cable — COMPLETE
- Machine — COMPLETE
- Barbell — COMPLETE
- Dumbbell — COMPLETE
- Kettlebell — COMPLETE
- Smith — COMPLETE
- Landmine — COMPLETE

Smith + Landmine result:

- `docs/exercise-db/2026-09-05-smith-landmine-visual-qa-10.md`
- 5 groups / 10 files resolved
- exact duplicate: 1 group
- same canonical + media/render/POV: 3 groups
- execution/load-position variant: 1 group — Landmine Rear Lunge
- unresolved: 0

The planned ZIP-based duplicate/ambiguity pass for the main equipment families is complete. New visual QA is added only if Production mapping exposes a specific identity conflict.

---

## Full 2,109 equipment-pass baseline

- Machine high-confidence: 202
- Barbell: 212
- Dumbbell: 493
- Kettlebell: 188
- Smith: 61
- Landmine: 33
- EZ Bar: 35
- Machine-or-nonmachine ambiguous: 8
- Other / not-yet-normalized: **579**

These are source-family/raw-row counts, not final canonical exercise counts.

Final G Fit canonical count remains **NOT VERIFIED** until full mapping stabilizes.

---

## Production DB / old gap remap — COMPLETE AT SOURCE-AVAILABILITY LEVEL

Reference:

- `docs/exercise-db/exercise-db-v1-production.md`
- `docs/exercise-db/exercise-db-gap-analysis-v1.md`
- `docs/exercise-db/2026-09-05-production-gap-remap-after-gym-animations.md`

Existing Production baseline:

- source rows: **206**
- app-facing canonical exercises: **195**

### Old P0 16

Result after Gym Animations purchase:

- source candidates found: **16 / 16**
- source-availability level new-asset need: **16 → 0**
- P0 priority/importance remains valid
- only the need to create new visual assets is superseded

Default action is now:

`existing purchased source → canonical mapping → QA → Production promotion`

### Old P1 17

Current source remap:

- clear source candidates: **14 / 17**
- identity review: **3 / 17**
- proven new-asset gaps: **0** at this checkpoint

Remaining identity-review cases:

1. standard bilateral `Dumbbell Deadlift`
2. standard-stance `Smith Machine Romanian Deadlift`
3. standard floor bodyweight `Sit Up`

Trap Bar Deadlift source exists. If promoted, `Trap Bar` equipment taxonomy still needs an explicit Production decision.

---

## Immediate next — DO THIS FIRST

**One targeted visual ZIP for the remaining P1 identity-review 3 cases.**

Target-set doc:

- `docs/exercise-db/2026-09-05-p1-identity-review-3-target-set.md`

Expected ZIP:

- `P1_Identity_Review_3_8.zip`
- **8 files**

### Dumbbell Deadlift candidates

- `Dumbbell-Stiff-Leg-Deadlift_Hips.mp4`
- `Dumbbell-Straight-Leg-Deadlift_Hips_.mp4`
- `Dumbbell-Straight-Legs-Deadlift_Hips.mp4`

### Smith Machine Romanian Deadlift candidates

- `Smith-Deadlift_Hips.mp4`
- `Smith-Stiff-Legged-Deadlift_Hips_.mp4`

### Sit Up candidates

- `Wide-Leg-Sit-Up-(male)_Waist_.mp4`
- `Vertical-Sit-Up-(male)_Waist_.mp4`
- `Decline-Sit-Up-(VERSION-3)_Waist_.mp4`

When ZIP arrives:

1. verify 8 / 8
2. inspect video / normalized timeline frames
3. resolve each old P1 identity as:
   - `SOURCE_COVERS_EXISTING_IDENTITY`
   - `SEPARATE_VARIANT_ONLY`
   - `TRUE_GAP_REMAINS`
   - `UNRESOLVED`
4. update target result, gap remap, CURRENT, this checkpoint

---

## After the 3-case review

1. continue mapping 2,109 source against existing 195 Production canonical anchors
2. classify each source as:
   - existing Production canonical
   - new canonical candidate
   - attachment context
   - grip context
   - execution/load context
   - media duplicate/variant
   - excluded/non-gym-first
   - unresolved
3. calculate actual source-derived canonical candidate count
4. recalculate true gym-first MVP gaps
5. identify only exercises that genuinely need a G Fit-created new asset
6. after canonical mapping stabilizes, decide production media selection / transform / app-serving storage

No Cursor implementation handoff yet.

---

## Product/UX parallel context preserved

Still OPEN separately from DB normalization:

- recommended-routine actual program contents — depends on Exercise DB/substitution data
- Analysis first screen / drilldown scope
- Settings main scope
- rest timer end signal detail

Recent Analysis exploration (`period selection / exercise summary / frequency / front-back body-map distribution`) is not yet a PO-approved decision.

---

## Resume instruction

On the next continuation:

1. check `docs/CURRENT.md`
2. check this checkpoint
3. do not redo completed family visual QA
4. if `P1_Identity_Review_3_8.zip` is present, immediately perform the 3-case visual QA
5. otherwise request/generate only that one 8-file ZIP
6. after resolving it, continue Production mapping / true-gap recalculation

No Cursor implementation handoff.
