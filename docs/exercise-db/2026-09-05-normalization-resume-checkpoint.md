# Exercise DB Normalization — Resume Checkpoint

**Date:** 2026-09-05  
**Status:** SMITH + LANDMINE QA COMPLETE / RESUME FROM PRODUCTION DB MAPPING

## Source of Truth

Primary: `docs/CURRENT.md`

This file is the compact resume checkpoint for the current Exercise DB normalization work.

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

## Completed targeted normalization / visual QA

- Cable — COMPLETE
- Machine — COMPLETE
- Barbell — COMPLETE
- Dumbbell — COMPLETE
- Kettlebell — COMPLETE
- Smith — COMPLETE
- Landmine — COMPLETE

### Smith + Landmine final QA

Result doc:

- `docs/exercise-db/2026-09-05-smith-landmine-visual-qa-10.md`

Input:

- Smith: **1 group / 2 files**
- Landmine: **4 groups / 8 files**
- total: **5 groups / 10 files**

Results:

- Smith Close Grip Bench Press — **exact binary duplicate**
- Landmine Kneeling One Arm Shoulder Press — **same canonical + media/render variant**
- Landmine One Arm Bent Over Row — **same canonical + POV/render/posture media variant**
- Landmine Rear Lunge — **execution/load-position variant**
  - high/front two-hand hold vs low-side one-hand hold
  - history auto-merge prohibited until explicit production policy says otherwise
- Landmine Romanian Deadlift — **same canonical + POV/render media variant**
- unresolved: **0**

This completes the planned ZIP-based duplicate/ambiguity visual-QA sequence for the main equipment families. Small targeted QA may still be added later only if Production DB mapping reveals a new filename/visual conflict.

## Full 2,109 equipment-pass baseline

- Machine high-confidence: 202
- Barbell: 212
- Dumbbell: 493
- Kettlebell: 188
- Smith: 61
- Landmine: 33
- EZ Bar: 35
- Machine-or-nonmachine ambiguous: 8
- Other / not-yet-normalized: 579

These are source-family/raw-row counts, not final canonical exercise counts.

## Immediate next — DO THIS FIRST

**Map the normalized purchased source against the existing Production Exercise DB v1.**

Reference:

- `docs/exercise-db/exercise-db-v1-production.md`
- existing normalization result docs under `docs/exercise-db/`

Next sequence:

1. consolidate normalized source decisions
2. map source rows/families to Production canonical exercises
3. absorb duplicates/media variants into canonical rows
4. preserve attachment / grip / execution contexts where material
5. recalculate final G Fit canonical candidate count
6. recalculate actual missing/gap exercises for gym-first MVP
7. prioritize only the real gaps that G Fit needs
8. after canonical mapping stabilizes, decide production media selection / transform / app-serving storage

No Cursor implementation handoff yet.

## Product/UX parallel context preserved

Still OPEN separately from DB normalization:

- recommended-routine actual program contents — depends on Exercise DB/substitution data
- Analysis first screen / drilldown scope
- Settings main scope
- rest timer end signal detail

Recent Analysis exploration (`period selection / exercise summary / frequency / front-back body-map distribution`) is not yet a PO-approved decision.

## Resume instruction

On the next continuation:

1. check `docs/CURRENT.md`
2. check this checkpoint
3. do **not** redo Cable / Machine / Barbell / Dumbbell / Kettlebell / Smith / Landmine visual QA
4. resume directly from **Production Exercise DB v1 mapping / true-gap recalculation**

No Cursor implementation handoff.