# P1 Identity Review — 3 Cases / Visual QA Result

**Date:** 2026-09-05  
**Status:** COMPLETE / 3 CASES RESOLVED / UNRESOLVED 0

## Purpose

Resolve the three old P1 identities that could not be safely mapped from filename evidence alone after the Gym Animations source expansion.

Reference:

- `docs/exercise-db/2026-09-05-production-gap-remap-after-gym-animations.md`
- `docs/exercise-db/2026-09-05-p1-identity-review-3-target-set.md`

Raw source remains read-only provenance.

---

## Review bundle actually received

Uploaded ZIP:

- `P1_Identity_Review_3.zip`
- files present: **34**

The original target plan expected 8 hand-picked files, but one planned Sit-Up filename did not exist locally. The collection method was therefore changed to an automatic source-folder search so the review would use real filenames only.

The received bundle includes:

- Dumbbell deadlift family candidates
- Smith deadlift family candidates
- Sit-Up family candidates

Review method:

1. verify ZIP file inventory
2. SHA256 all 34 files
3. inspect video metadata
4. extract normalized timeline frames
5. compare actual movement execution, not vendor filename alone

All reviewed files are source media; none was renamed, deleted, or overwritten.

---

# Final decisions

## Case A — standard bilateral Dumbbell Deadlift

Old P1 identity:

- `Dumbbell Deadlift`
- intended meaning: standard bilateral conventional dumbbell deadlift

Relevant reviewed files include:

- `Dumbbell-Romanian-Deadlift_Hips-FIX_.mp4`
- `Dumbbell-Stiff-Leg-Deadlift_Hips.mp4`
- `Dumbbell-Stiff-Leg-Deadlift_Waist.mp4`
- `Dumbbell-Straight-Leg-Deadlift_Hips_.mp4`
- `Dumbbell-Straight-Legs-Deadlift_Hips.mp4`
- `Dumbbell-Sumo-Deadlift-(male)_Hips_.mp4`
- `Dumbbell-Single-Arm-Deadlift_Hips_.mp4`
- single-leg deadlift variants

Visual result:

- Romanian / stiff-leg / straight-leg files are hip-hinge dominant and remain materially different from a standard conventional bilateral dumbbell deadlift identity.
- Sumo changes stance materially.
- Single-arm and single-leg files change laterality and loading symmetry materially.
- No reviewed file shows the intended plain bilateral conventional dumbbell deadlift identity closely enough to silently absorb it.

Decision:

**TRUE_GAP_REMAINS**

Production implication:

- do not rename or repurpose the Dumbbell RDL / stiff-leg / straight-leg / sumo / unilateral source as `Dumbbell Deadlift`
- if this P1 exercise is promoted later, G Fit needs a distinct suitable source/created asset
- this is **P1, not an MVP blocker**

---

## Case B — standard-stance Smith Machine Romanian Deadlift

Old P1 identity:

- `Smith Machine Romanian Deadlift`
- intended meaning: standard stance, not sumo/wide stance

Reviewed files:

- `Smith-Deadlift_Hips.mp4`
- `Smith-Stiff-Legged-Deadlift_Hips_.mp4`
- `Smith-Sumo-Deadlift_Hips_.mp4`
- `Smith-Single-Leg-Deadlift_Hips_.mp4`

Visual result:

### `Smith-Deadlift_Hips.mp4`

The actual movement is a standard-stance hip hinge with:

- only modest knee flexion
- hips moving backward
- bar descending to roughly lower-shin rather than a clear floor-reset conventional deadlift pattern
- continuous RDL-like eccentric/concentric hinge execution

Despite the generic vendor filename `Smith-Deadlift`, its visual execution is sufficiently aligned with the intended standard Smith Romanian Deadlift identity.

### Other Smith files

- `Smith-Stiff-Legged-Deadlift_Hips_.mp4` is a clearer stiff-leg variant and should remain an execution variant rather than the default identity.
- `Smith-Sumo-Deadlift_Hips_.mp4` is a materially different wide/sumo stance.
- `Smith-Single-Leg-Deadlift_Hips_.mp4` is a unilateral variant.

Decision:

**SOURCE_COVERS_EXISTING_IDENTITY**

Recommended Production mapping:

- normalized identity: `Smith Machine Romanian Deadlift`
- representative source candidate: `Smith-Deadlift_Hips.mp4`
- raw source filename remains unchanged as provenance
- `Smith-Stiff-Legged-Deadlift` remains a separate execution context/variant

This resolves the old Smith RDL source gap without creating a new visual asset.

---

## Case C — standard floor bodyweight Sit Up

Old P1 identity:

- `Sit Up`
- intended meaning: standard floor bodyweight sit-up

Relevant reviewed files include:

- `Decline Sit Up.mp4`
- `Decline-Sit-Up-(VERSION-3)_Waist_.mp4`
- `Decline-Sit-up_Hips_.mp4`
- `Vertical-Sit-Up-(male)_Waist_.mp4`
- `Incline-Twisting-Sit-up_Waist_.mp4`
- `Band-Jackknife-Sit-Up_Waist_.mp4`
- multiple weighted / dumbbell / band / decline / twisting Sit-Up variants

Visual result:

- Decline files use an angled/support bench and materially change execution.
- Vertical Sit-Up is an inverted/vertical apparatus movement, not a floor sit-up.
- Incline twisting files add both angle and rotation.
- Jackknife / band / loaded variants are distinct exercises or execution contexts.
- No reviewed candidate represents a plain standard floor bodyweight sit-up.

Decision:

**TRUE_GAP_REMAINS**

Production implication:

- do not substitute decline, vertical, twisting, band-assisted, or loaded sit-up media
- if standard Sit Up is promoted later, a distinct suitable source/created asset is required
- this remains **P1, not an MVP blocker**

---

# P1 remap after visual QA

Old P1 total: **17**

Before this visual QA:

- clear source candidates: 14
- identity review: 3
- proven true gaps: 0

After this visual QA:

- source-covered: **15 / 17**
- true source gaps: **2 / 17**
  - standard bilateral Dumbbell Deadlift
  - standard floor bodyweight Sit Up
- unresolved: **0 / 17**

Therefore:

- old P0 new-asset need remains **0 / 16**
- P1 future asset need, if all P1 identities are later promoted, is currently **2**
- those 2 are not MVP blockers under the existing P1 priority decision

---

# Normalization rules reinforced

1. vendor filename does not override actual visual execution
2. RDL / stiff-leg / straight-leg / conventional deadlift are not silently interchangeable when execution materially differs
3. stance / laterality / support-angle changes that affect recording meaning remain separate variants or identities
4. a close family member does not count as source coverage for a missing canonical identity
5. raw purchased media remains immutable provenance; normalized identity is stored separately

---

# Next

P1 identity-review is now complete.

Next main task:

1. continue mapping the 2,109 source rows against the existing 195 Production canonical anchors
2. classify every source row as one of:
   - existing Production canonical
   - new canonical candidate
   - attachment context
   - grip context
   - execution/load context
   - media duplicate/variant
   - excluded/non-gym-first
   - unresolved
3. calculate the actual source-derived canonical candidate count
4. recalculate the true gym-first MVP gap count
5. confirm only genuinely missing G Fit-created assets
6. only after canonical mapping stabilizes, decide production media selection / transform / app-serving storage

No Cursor implementation handoff yet.
