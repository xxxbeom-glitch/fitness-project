# Exercise DB Normalization — Resume Checkpoint

**Date:** 2026-09-05  
**Status:** P0 SOURCE COVERAGE LOCKED 16/16 / RESUME FROM P0 PRODUCTION PROMOTION REVIEW

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

**PO decision: Plank recording type.**

Recommendation:

`recording_type = duration`

Reason:

- standard forearm plank is a static/isometric hold
- hold time is the meaningful performance value
- forcing it into `reps` would create invalid history semantics

Status:

**RECOMMENDED / NOT YET PO-APPROVED**

After PO approval:

1. lock the P0 16 normalized row spec
2. Production promotion QA
   - unique canonical IDs
   - Korean/English naming + aliases
   - equipment/body part
   - recording types
   - assisted-machine semantics
   - source provenance
3. expected app-facing count = 211
4. select production-serving media for the 16 promoted rows
5. decide transform/compression/storage/app-serving structure

No Cursor implementation handoff yet.

---

## Resume instruction

On continuation:

1. read `docs/CURRENT.md`
2. read this checkpoint
3. do not redo completed ZIP/video QA
4. do not reopen P0 source coverage — it is 16/16 locked
5. resume from **Plank recording-type PO decision → P0 Production promotion QA**

No Cursor implementation handoff.
