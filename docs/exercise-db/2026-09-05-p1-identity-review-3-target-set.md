# P1 Identity Review — 3 Cases / Targeted Visual Set

**Date:** 2026-09-05  
**Status:** TARGET SET READY / WAITING FOR VISUAL QA ZIP

## Why

After remapping the old gap list against the Gym Animations `MP4/MALE/Library_database` source, old P0 is source-covered 16/16 and old P1 has 14 clear source candidates plus 3 identities that should not be auto-mapped from filename alone.

Reference:

- `docs/exercise-db/2026-09-05-production-gap-remap-after-gym-animations.md`

The purpose of this set is to resolve only those 3 remaining P1 identity questions with one small ZIP.

Raw source remains read-only provenance.

---

## Case A — standard bilateral Dumbbell Deadlift

Old gap identity:

- `Dumbbell Deadlift`
- intended meaning: standard bilateral conventional dumbbell deadlift

Manifest does **not** show a clearly named plain bilateral `Dumbbell-Deadlift` file.

Closest candidates selected for visual comparison:

1. `Dumbbell-Stiff-Leg-Deadlift_Hips.mp4`
2. `Dumbbell-Straight-Leg-Deadlift_Hips_.mp4`
3. `Dumbbell-Straight-Legs-Deadlift_Hips.mp4`

Review question:

- Does any candidate visually perform a conventional dumbbell deadlift with enough knee flexion / start-from-floor style to represent the old gap identity?
- Or are all three materially stiff/straight-leg hinge variants that should stay separate?

Do not map single-arm, single-leg, or sumo candidates to this identity.

---

## Case B — standard-stance Smith Machine Romanian Deadlift

Old gap identity:

- `Smith Machine Romanian Deadlift`
- intended meaning: standard stance, not sumo/wide-stance

Existing Production has `smith-machine-sumo-romanian-deadlift`, which is explicitly a wide/sumo stance and therefore does not settle this gap.

Candidates selected:

4. `Smith-Deadlift_Hips.mp4`
5. `Smith-Stiff-Legged-Deadlift_Hips_.mp4`

Review question:

- Is `Smith-Stiff-Legged-Deadlift` visually an RDL-like standard-stance hip hinge that can serve the standard Smith RDL identity?
- Is `Smith-Deadlift` a conventional deadlift pattern and therefore a separate exercise?

Do not silently collapse the sumo/wide-stance Production exercise into standard RDL.

---

## Case C — standard floor bodyweight Sit Up

Old gap identity:

- `Sit Up`
- intended meaning: standard floor bodyweight sit-up

No exact plain `Sit-Up` filename was verified in the `Library_database` manifest.

Closest source candidates selected:

6. `Wide-Leg-Sit-Up-(male)_Waist_.mp4`
7. `Vertical-Sit-Up-(male)_Waist_.mp4`
8. `Decline-Sit-Up-(VERSION-3)_Waist_.mp4`

Review question:

- Does `Wide-Leg Sit-Up` differ only by a minor stance context that G Fit could reasonably absorb under a standard Sit Up parent, or is it a material execution variant?
- `Vertical` / `Decline` should remain separate if the support/angle materially changes execution.

Do not use a loaded/weighted sit-up as the standard bodyweight identity.

---

## Review bundle

Expected files: **8**

Suggested ZIP name:

`P1_Identity_Review_3_8.zip`

After upload:

1. verify 8/8 files
2. compare duration / SHA256 where useful
3. inspect normalized timeline frames
4. resolve each of the 3 old P1 identities as:
   - `SOURCE_COVERS_EXISTING_IDENTITY`
   - `SEPARATE_VARIANT_ONLY`
   - `TRUE_GAP_REMAINS`
   - `UNRESOLVED`
5. update gap remap + CURRENT + normalization checkpoint

No Cursor implementation handoff.
