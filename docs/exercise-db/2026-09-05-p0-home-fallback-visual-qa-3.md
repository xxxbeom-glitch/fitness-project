# P0 Home Fallback Visual QA — 3 Files

**Date:** 2026-09-05  
**Status:** COMPLETE / 3 OF 3 SOURCE-COVERED / UNRESOLVED 0

## Purpose

The 2,109-row `MP4/MALE/Library_database` bulk pass showed that three approved P0 identities were not present in the Library source itself:

1. Plank
2. Crunch
3. Lying Leg Raise

The purchased `MP4/MALE/Home_Workout_` source contained exact-name fallback candidates. This review verifies actual movement identity before using them for the gym-first P0 catalog.

Using a Home source file here is a source fallback only; it does **not** broaden G Fit into a home-workout product.

Raw purchased filename/path/media remains read-only provenance.

---

## Review bundle

Uploaded ZIP:

- `P0_Home_Final_QA_3.zip`
- files present: **3 / 3**

Files:

- `Front-Elbow-Plank-(male)_Waist-FIX_.mp4`
- `Crunch-Floor-(male)_waist.mp4`
- `Lying-Leg-Raise_Waist-FIX_.mp4`

Review method:

1. ZIP inventory verification
2. SHA256
3. video metadata / duration / frame count
4. normalized timeline-frame visual inspection
5. identity decision based on actual movement, not filename alone

---

# Results

## 1. Plank

Source:

`Front-Elbow-Plank-(male)_Waist-FIX_.mp4`

SHA256:

`55455f188b0d6768e2b2841bff1308c140c11d991bdbb0574ab58cee4c870f20`

Video:

- H.264
- 1920×1080
- 30 fps
- 6.266667 s
- 188 frames

Visual observation:

- forearms/elbows supported on the floor
- toes on the floor
- body held in a straight prone plank line
- no side-plank, high-plank or dynamic repetition pattern

Decision:

**SOURCE_COVERS_P0_IDENTITY — standard forearm Plank.**

Recommended normalized identity:

- canonical: `plank`
- name_ko: `플랭크`
- name_en: `Plank`
- equipment: `Bodyweight`
- big body part: `코어`
- posture: `forearm_plank`

Recording-type note:

- Existing Production DB v1 is primarily `reps` / `weight_reps` plus the separately approved `assisted_weight_reps` model.
- A standard plank is naturally duration-based, so the exact production `recording_type` should be decided explicitly rather than forcing it into `reps`.
- This recording-type decision does not block source identity approval.

---

## 2. Crunch

Source:

`Crunch-Floor-(male)_waist.mp4`

SHA256:

`e592406fdd3d8db71d17cf2229ef6053ad6831e7faf89e49a8a8193b5b127182`

Video:

- H.264
- 1920×1080
- 30 fps
- 6.600000 s
- 198 frames

Visual observation:

- supine floor position
- knees bent / feet grounded
- hands behind the head
- trunk flexion lifts shoulders/upper torso without a full sit-up range
- no machine, external load or incline/decline support

Decision:

**SOURCE_COVERS_P0_IDENTITY — standard floor bodyweight Crunch.**

Recommended normalized identity:

- canonical: `crunch`
- name_ko: `크런치`
- name_en: `Crunch`
- equipment: `Bodyweight`
- big body part: `코어`
- movement: `Core`
- posture: `supine_floor_crunch`
- recording_type: `reps`

---

## 3. Lying Leg Raise

Source:

`Lying-Leg-Raise_Waist-FIX_.mp4`

SHA256:

`0fe5bca26e9617e16b118f7665cbc03fc41edb0673b86ef385862448de0b3ba4`

Video:

- H.264
- 1920×1080
- 30 fps
- 5.833333 s
- 175 frames

Visual observation:

- supine floor position
- both legs remain together and mostly extended
- bilateral hip-flexion leg raise from near-floor toward vertical
- no hanging apparatus, knee-tuck emphasis or external load

Decision:

**SOURCE_COVERS_P0_IDENTITY — standard floor Lying Leg Raise.**

Recommended normalized identity:

- canonical: `lying-leg-raise`
- name_ko: `라잉 레그 레이즈`
- name_en: `Lying Leg Raise`
- equipment: `Bodyweight`
- big body part: `코어`
- movement: `Core`
- posture: `supine_bilateral_leg_raise`
- recording_type: `reps`

---

# P0 source coverage lock

Approved P0 total: **16**

After the Library bulk pass:

- `Library_database`: **13 / 16**
- Home fallback pending: **3 / 16**

After this direct visual QA:

- `Library_database` source-covered: **13**
- `Home_Workout_` fallback source-covered: **3**
- package-level P0 source coverage: **16 / 16**
- P0 source identities requiring a newly created visual asset due to source absence: **0 / 16**
- unresolved P0 source identity: **0**

The earlier P0 priority decision remains unchanged. What changed after purchasing Gym Animations is the need to create new media: the package already contains suitable media for all 16 P0 identities.

---

# Next

1. finalize normalized P0 16 row specification
2. explicit PO decision for Plank recording type (`duration` recommended; do not force to `reps`)
3. Production promotion QA for `195 + 16 = 211` curated MVP app-facing exercises
4. select production-serving media from approved source candidates
5. decide transform/compression/storage/app-serving structure only after row promotion is stable

No Cursor implementation handoff yet.
