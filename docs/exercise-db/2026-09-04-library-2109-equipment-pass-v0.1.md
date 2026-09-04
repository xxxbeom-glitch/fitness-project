# Library_database 2,109 — Equipment Family Pass v0.1

**Date:** 2026-09-04  
**Status:** MANIFEST PASS COMPLETE / NON-CABLE VISUAL QA STARTED  
**Source:** `MP4/MALE/Library_database` full filename/path/size manifest

## Scope and boundary

Uploaded full manifest integrity:

- rows: **2,109**
- unique filenames: **2,109**
- blank filenames: **0**

This pass uses **raw filename/path/size evidence only** for non-Cable equipment-family classification. Purchased raw files remain read-only and are not renamed, moved, converted, or overwritten.

Cable is already covered by the prior visual-QA / normalization work. Non-Cable rows are candidate classifications until targeted visual QA resolves ambiguous / duplicate cases.

## Equipment-family first pass

Target-family counts:

- Cable source scope: **298**
  - includes 297 `Cable*` prefix rows + 1 cable-associated extra previously discovered
- Machine high-confidence: **202**
  - `Lever-*`: **183**
  - `Sled-*` leg-press / hack-squat machine family: **17**
  - explicit `Lying Leg Curl Machine`: **1**
  - explicit machine lat pulldown: **1**
- Barbell: **212**
- Dumbbell: **493**
- Kettlebell: **188**
- Smith: **61**
- Landmine: **33**
- EZ Bar: **35**
- Machine-or-nonmachine ambiguous review rows: **8**
- Other / not-yet-normalized pool: **579**

`EZ Bar` is kept separate from straight Barbell because the existing G Fit taxonomy already treats it as a distinct equipment category.

## Machine boundary

Vendor `Lever-*` is treated as a machine prefix. This does **not** include bodyweight calisthenics names such as `Front-Lever` / `Back-lever`, because those filenames do not begin with `Lever-`.

`Sled-*` rows in this catalog are machine leg-press / hack-squat variants and are grouped under Machine. `Power-Sled-*` remains outside this machine family.

Explicit cardio machines are not included in resistance-machine normalization.

## Duplicate candidate scan — non-Cable

Filename cleanup strips version / FIX / body-part / model / camera tags only to identify **review candidates**. It does not prove duplication.

Candidate counts:

- Machine: **12 groups / 25 files**
- Barbell: **8 groups / 18 files**
- Dumbbell: **9 groups / 20 files**
- Kettlebell: **6 groups / 12 files**
- Smith: **1 group / 2 files**
- Landmine: **4 groups / 8 files**
- EZ Bar: **0 groups / 0 files**

No candidate is merged until visual or stronger evidence confirms app-facing equivalence.

## Machine targeted visual-review set

Machine is the first non-Cable family per CURRENT priority.

Targeted review set: **33 files**

Composition:

- duplicate-candidate Machine rows: **25**
- ambiguous `Assisted-*` / `Hack-Calf-Raise` rows: **8**

Ambiguous rows:

- `Assisted-Bulgarian-Split-Squat_Thighs_.mp4`
- `Assisted-Chin-Up-on-a-bench-(male)_Back_.mp4`
- `Assisted-Parallel-Close-Grip-Pull-up_Back-FIX_.mp4`
- `Assisted-Pull-up_Back.mp4`
- `Assisted-Single-Arm-Pull-up-(male)_Back_.mp4`
- `Assisted-Single-Leg-Press_Thighs-FIX_.mp4`
- `Assisted-Triceps-Dip-(kneeling)_Upper-Arms.mp4`
- `Hack-Calf-Raise_Calves_.mp4`

These are not guessed as machine or non-machine from filename alone.

## Derived review artifacts

Generated separately from raw source:

- `library_2109_equipment_pass_v0_1.csv`
- `machine_review_candidates_v0_1.csv`
- `Machine_Review_Candidates.ps1`

These are derived review artifacts, not raw-source edits and not final Production Exercise DB.

## Next

1. direct visual QA of the **33 Machine review files**
2. resolve Machine duplicate / execution / source-media / equipment-identity cases
3. finalize Machine normalization candidate map
4. repeat targeted review for Barbell → Dumbbell → Kettlebell → Smith → Landmine
5. compare normalized source candidates with Production Exercise DB v1
6. recalculate final G Fit canonical candidates / true gaps
7. decide production app-serving media selection / transform only after canonical mapping stabilizes

No Cursor implementation handoff.
