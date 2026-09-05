# Exercise DB Normalization — Resume Checkpoint

**Date:** 2026-09-05  
**Status:** P1 IDENTITY REVIEW COMPLETE / RESUME FROM FULL PRODUCTION MAPPING

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
- P1 identity review 3 — COMPLETE

Main-family result docs remain under `docs/exercise-db/`.

Latest P1 result:

- `docs/exercise-db/2026-09-05-p1-identity-review-3-result.md`

The planned duplicate/ambiguity visual-QA sequence is complete. New targeted visual QA should be added only when Production mapping exposes a specific unresolved identity conflict.

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

## Production DB / old gap remap

Reference:

- `docs/exercise-db/exercise-db-v1-production.md`
- `docs/exercise-db/exercise-db-gap-analysis-v1.md`
- `docs/exercise-db/2026-09-05-production-gap-remap-after-gym-animations.md`
- `docs/exercise-db/2026-09-05-p1-identity-review-3-result.md`

Existing Production baseline:

- source rows: **206**
- app-facing canonical exercises: **195**

### Old P0 16

After Gym Animations purchase:

- source candidates found: **16 / 16**
- source-availability new-asset need: **0 / 16**
- P0 priority remains valid
- default action: existing purchased source → canonical mapping → QA → Production promotion

### Old P1 17 — VISUAL REVIEW COMPLETE

After final targeted visual QA:

- source-covered: **15 / 17**
- true source gaps: **2 / 17**
- unresolved: **0**

Resolved cases:

1. standard bilateral `Dumbbell Deadlift` → **TRUE_GAP_REMAINS**
   - reviewed family contains RDL / stiff-leg / straight-leg / sumo / unilateral variants, not the intended conventional bilateral identity
2. standard-stance `Smith Machine Romanian Deadlift` → **SOURCE_COVERS_EXISTING_IDENTITY**
   - `Smith-Deadlift_Hips.mp4` visually performs an RDL-like standard-stance hip hinge and can represent the normalized Smith RDL identity
   - raw filename remains unchanged
3. standard floor bodyweight `Sit Up` → **TRUE_GAP_REMAINS**
   - reviewed source contains decline / vertical / twisting / loaded / band variants, not a plain floor bodyweight sit-up

Therefore P1 future asset need is currently **2**, but these remain P1 and are not MVP blockers.

Trap Bar Deadlift source exists. If promoted, `Trap Bar` equipment taxonomy still needs an explicit Production decision.

---

## Immediate next — DO THIS FIRST

**Continue full 2,109 → Production canonical mapping.**

Use existing Production 195 canonical exercises as anchors; do not rebuild taxonomy from scratch.

For each source row classify as one of:

- existing Production canonical
- new canonical candidate
- attachment context
- grip context
- execution/load context
- media duplicate/variant
- excluded/non-gym-first
- unresolved

### Input needed for the next bulk pass

A full filename/path/size manifest for `MP4/MALE/Library_database` is required in the active working context. If it is not already directly available, regenerate/export the 2,109-row manifest from the local source folder and upload it once; do not ask the user to hand-select more videos.

Then:

1. bulk filename/rule mapping against existing Production 195 anchors
2. isolate only unresolved identity conflicts
3. use small targeted visual QA only for those conflicts
4. calculate actual source-derived canonical candidate count
5. calculate true gym-first MVP gap count
6. confirm only genuinely missing G Fit-created assets
7. after canonical mapping stabilizes, decide production media selection / transform / app-serving storage

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
3. do not redo completed family or P1 visual QA
4. resume directly from full Production mapping
5. if the 2,109-row manifest is not available in active context, request/export only that manifest once
6. targeted ZIP review is now exception-only, not the default workflow

No Cursor implementation handoff.
