# Exercise DB Normalization — Resume Checkpoint

**Date:** 2026-09-05  
**Status:** P0 SOURCE COVERAGE LOCKED 16/16 / PLANK DURATION APPROVED / RESUME FROM PRODUCTION PROMOTION QA

## Source of Truth

Primary: `docs/CURRENT.md`

This is the compact resume checkpoint for Exercise DB normalization / Production promotion work.

---

## Raw source / storage

Purchased source:

- Gym Animations — `Gym Workout Man Package`
- full raw: **17,085 files / 98.69 GB**
- R2 bucket: `gfit-source-original`
- R2 verified exact size: **105,972,019,458 Byte**
- raw upload: **DONE**

Raw filename/path/media remains read-only provenance.

Male source pools:

- `MP4/MALE/Gym_Workout_`: 2,081 MP4
- `MP4/MALE/Library_database`: 2,109 MP4 — primary gym analysis base
- `MP4/MALE/Home_Workout_`: 2,120 MP4 — separate fallback source pool

Library contains all Gym MP4s plus 28 extra, but it is not a package-wide superset of Home.

---

## Completed work

Targeted visual QA complete:

- Cable
- Machine
- Barbell
- Dumbbell
- Kettlebell
- Smith
- Landmine
- P1 identity review 3
- P0 Home fallback 3

2,109 Library bulk mapping:

- **COMPLETE**
- source identity/history buckets: 1,954 total / 1,912 active / 42 excluded / 1 unresolved
- these bucket counts are analysis structure, **not app-facing catalog size**

Reference:

- `docs/exercise-db/2026-09-05-library-2109-bulk-mapping-v0.2.md`

---

## P0 16 — SOURCE COVERAGE LOCKED

Existing Production baseline:

- **195 app-facing canonical exercises**

PO-approved P0:

- **16 identities**

Library source coverage:

- **13 / 16**

The three Library-missing identities were reviewed from purchased Home source:

1. Plank — `Front-Elbow-Plank-(male)_Waist-FIX_.mp4`
2. Crunch — `Crunch-Floor-(male)_waist.mp4`
3. Lying Leg Raise — `Lying-Leg-Raise_Waist-FIX_.mp4`

Direct visual QA:

- Plank → standard forearm plank — PASS
- Crunch → standard floor bodyweight crunch — PASS
- Lying Leg Raise → standard supine bilateral leg raise — PASS
- unresolved: 0

Package-level P0 source coverage:

**16 / 16**

Source-absence-driven P0 new-media creation need:

**0 / 16**

References:

- `docs/exercise-db/2026-09-05-p0-home-fallback-visual-qa-3.md`
- `docs/exercise-db/2026-09-05-p0-16-production-promotion-spec.md`

Expected curated MVP catalog after P0 promotion:

**195 + 16 = 211**

---

## Timed exercise recording — PO APPROVED

Policy:

- Plank and other exercises whose meaningful performance value is hold time use `recording_type = duration`
- do not convert duration seconds into fake reps
- `plank` is now locked as `duration`
- `crunch` and `lying-leg-raise` remain `reps`

Timed-set performance measurement and the existing Rest Timer are separate concepts.

UI detail is deferred:

- TIME row presentation
- start/stop interaction
- countdown vs stopwatch
- timed-set end signal
- handoff from timed-set completion to Rest Timer

These do not block P0 data promotion.

Reference:

- `docs/ux-decisions/2026-09-05-duration-exercise-recording.md`

---

## P1 — non-blocking

Current result:

- source-covered: 15 / 17
- true gaps: 2 / 17
- unresolved: 0

True gaps under current evidence:

- standard bilateral Dumbbell Deadlift
- standard floor bodyweight Sit Up

P1 is post-MVP and does not block the 211 target.

---

## Immediate next — DO THIS FIRST

**Run P0 16 Production promotion QA.**

1. canonical ID uniqueness against current Production 195
2. Korean/English naming + aliases
3. equipment / body part normalization
4. recording types
   - Plank = `duration`
   - Assisted Pull-Up / Dip = `assisted_weight_reps`
5. source provenance integrity
6. verify final expected app-facing count = **211**

After the rows are locked:

1. select production-serving media for the 16 promoted rows
2. decide transform/compression/storage/app-serving structure
3. only then create implementation Issue/AC if code changes are the next dependency

No Cursor implementation handoff yet.

---

## Resume instruction

On continuation:

1. read `docs/CURRENT.md`
2. read this checkpoint
3. do not redo completed ZIP/video QA
4. do not reopen P0 source coverage — it is 16/16 locked
5. do not reopen Plank recording type — `duration` is PO approved
6. resume directly from **P0 Production promotion QA**

No Cursor implementation handoff.
