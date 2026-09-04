# Smith + Landmine Targeted Visual QA — 10 Files

**Date:** 2026-09-05  
**Status:** COMPLETE / 5 GROUPS RESOLVED / UNRESOLVED 0

## Scope

Final duplicate-candidate visual QA from the `MP4/MALE/Library_database` equipment pass.

Review package:

- Smith: **1 group / 2 files**
- Landmine: **4 groups / 8 files**
- Total: **5 groups / 10 files**

Uploaded review ZIP integrity:

- files present: **10 / 10**
- all files: H.264 / 1920×1080 / 30 fps

Review method:

1. ZIP file-count verification
2. SHA256 comparison
3. video duration / frame-count check
4. normalized timeline-frame direct visual comparison
5. classification using the existing normalization boundary: true duplicate vs same canonical/media variant vs execution/load/grip variant

Raw source remains read-only provenance. No source filename/media was renamed, deleted, or overwritten.

---

## Result summary

### Smith

- exact binary duplicate: **1 group**
- unresolved: **0**

### Landmine

- same canonical + media/render/POV variant: **3 groups**
- execution / load-position variant: **1 group**
- unresolved: **0**

### Combined

- exact duplicate: **1 group**
- same canonical + media/render/POV variant: **3 groups**
- execution/load-position variant: **1 group**
- unresolved: **0**

No additional Smith/Landmine naming/media exception was discovered in this targeted set.

---

## Group decisions

### 1. Smith Close Grip Bench Press

Files:

- `Smith-Close-Grip-Bench-Press_Upper-Arms_ copy.mp4`
- `Smith-Close-Grip-Bench-Press_Upper-Arms_.mp4`

SHA256:

- both: `e1ef8035730ce56af943a6a6e12602173cf46e93ff2d7dc489bbca223e37235c`

Video metadata is also identical:

- size: 3,878,027 bytes each
- duration: 5.233333 s
- frames: 157 each

Decision:

**TRUE BINARY DUPLICATE → same canonical, one media copy is redundant.**

App-facing exercise identity must not split.

---

### 2. Landmine Kneeling One Arm Shoulder Press

Files:

- `Landmine-Kneeling-One-Arm-Shoulder-Press_Shoulders copy.mp4`
- `Landmine-Kneeling-One-Arm-Shoulder-Press_Shoulders.mp4`

Observed movement in both:

- half-kneeling position
- unilateral landmine press
- same general start/end position and press arc
- same exercise intent and recording meaning

The files are not binary-identical, but the visible differences are render/media-level rather than an app-facing movement-identity change.

Decision:

**SAME CANONICAL + MEDIA/RENDER VARIANT.**

No history split.

---

### 3. Landmine One Arm Bent Over Row

Files:

- `Landmine-One-Arm-Bent-Over-Row-(VERSION-2)_Back_.mp4`
- `Landmine-One-Arm-Bent-Over-Row_Back_.mp4`

Observed movement in both:

- standing hip-hinged bent-over position
- one working arm holds the landmine end
- opposite hand braces on the leg
- same unilateral row path toward the torso

POV/body-render and small posture-angle differences exist, but there is no meaningful change in equipment count, load position, laterality model, or exercise-recording identity.

Decision:

**SAME CANONICAL + POV/RENDER/POSTURE MEDIA VARIANT.**

No history split.

---

### 4. Landmine Rear Lunge

Files:

- `Landmine-Rear-Lunge-(VERSION-2)_Thighs_.mp4`
- `Landmine-Rear-Lunge_Thighs_.mp4`

Observed difference is material:

`VERSION-2`:

- landmine end held high/front near the chest
- bilateral/two-hand support on the implement

base file:

- landmine end held low at the side
- unilateral/one-hand support

Both perform a rear-lunge pattern, but the load position and bilateral-vs-unilateral support materially change loading symmetry and execution context.

Decision:

**SAME PARENT MOVEMENT FAMILY, BUT EXECUTION / LOAD-POSITION VARIANT.**

Recommended normalized contexts:

- `front_high_two_hand`
- `low_side_one_hand`

Do **not** automatically merge history between these variants until the production canonical/history policy explicitly decides otherwise.

---

### 5. Landmine Romanian Deadlift

Files:

- `Landmine-Romanian-Deadlift-(VERSION-2)_Hips_.mp4`
- `Landmine-Romanian-Deadlift-(male)_Hips_.mp4`

Observed movement in both:

- bilateral stance
- two-hand hold on the landmine end
- hip-hinge / Romanian-deadlift movement
- same load relationship and recording meaning

Anchor side / camera angle / model rendering differ, but the movement identity does not.

Decision:

**SAME CANONICAL + POV/RENDER MEDIA VARIANT.**

No history split.

---

## Normalization boundary confirmed

This final set reinforces the existing rule:

1. byte-identical copied source → exact duplicate
2. camera/render/timing/posture micro-difference without material execution change → same canonical + media variant
3. load position or one-hand/two-hand support that changes loading symmetry/execution meaning → explicit execution/load context; history auto-merge prohibited
4. raw vendor filename remains provenance; normalized identity is stored separately

---

## Completion impact

The planned targeted duplicate visual-QA sequence is now complete for:

- Cable
- Machine
- Barbell
- Dumbbell
- Kettlebell
- Smith
- Landmine

This does **not** mean the full 2,109-row catalog is already a final Production canonical DB. It means the planned duplicate/ambiguity candidate visual-QA pass for these equipment families has been resolved.

Small targeted visual QA may still be needed later if Production DB mapping reveals a new filename/visual conflict.

## Next

1. consolidate normalized source decisions
2. map the normalized source against `docs/exercise-db/exercise-db-v1-production.md`
3. absorb source rows into app-facing canonical exercise / attachment / grip / execution contexts
4. recalculate true canonical candidate count after duplicate resolution
5. recalculate actual missing/gap exercises for the G Fit gym-first MVP
6. only after canonical mapping stabilizes, decide production media selection/transform/app-serving storage

No Cursor implementation handoff yet.
