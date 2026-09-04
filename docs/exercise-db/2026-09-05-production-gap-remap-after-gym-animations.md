# Production Gap Remap After Gym Animations Source

**Date:** 2026-09-05  
**Status:** GAP REMAP CHECKPOINT / OLD ASSET NEED SUPERSEDED BY NEW SOURCE AVAILABILITY

## Why this remap exists

The previous gap analysis (`exercise-db-gap-analysis-v1.md`) was made against the old Production Exercise DB v1 baseline of **195 app-facing canonical exercises / 206 purchased source rows**. At that time, Product Owner approved a P0 list of 16 missing exercises as a **new asset pack**.

Afterward, Gym Animations `Gym Workout Man Package` was purchased and the Male analysis base was expanded to:

`MP4/MALE/Library_database` — **2,109 MP4 rows**

This document re-checks the old P0/P1 gap list against that larger source.

Important boundary:

- this is a **source-availability remap**, not a final 2,109-row canonicalization result
- raw source filename/path/media remains read-only provenance
- finding a source candidate does not automatically promote it into Production
- execution/grip/attachment/load differences still follow the approved normalization rules
- final canonical count is intentionally **not** calculated yet because **579 Other / not-yet-normalized rows** still require mapping/classification

---

# Conclusion

## Old P0 16

**Source availability: 16 / 16 found**

Therefore, at the source-availability level:

- old P0 `new asset needed`: **16 → 0**
- old P0 priority/importance: **preserved**
- next action is **map/select/normalize existing purchased media**, not create replacement assets

The old P0 approval is not deleted or treated as wrong. What changed is the available source inventory after the later Gym Animations purchase.

## Old P1 17

Current remap:

- clear source candidate found: **14 / 17**
- needs identity review before claiming coverage: **3 / 17**
- proven new-asset gap at this checkpoint: **0**

Identity review remaining:

1. standard bilateral **Dumbbell Deadlift**
2. standard-stance **Smith Machine Romanian Deadlift**
3. standard bodyweight **Sit Up**

The source contains close variants for all three, but filename evidence alone is not enough to silently equate those variants with the exact old gap identity.

---

# P0 remap — 16 / 16 source available

| # | Old P0 identity | Representative Library_database source candidate | Source availability | New asset needed now |
|---|---|---|---|---|
| 1 | Barbell Romanian Deadlift | `Barbell-Romanian-Deadlift_Hips-FIX_.mp4` | FOUND | NO |
| 2 | Dumbbell Romanian Deadlift | `Dumbbell-Romanian-Deadlift_Hips-FIX_.mp4` | FOUND | NO |
| 3 | Barbell Hip Thrust | `Barbell-Hip-Thrust_Hips-FIX_.mp4` | FOUND | NO |
| 4 | Lying Leg Curl Machine | `Lying Leg Curl Machine.mp4` / `Lever-Lying-Leg-Curl_Thighs-FIX_.mp4` | FOUND | NO |
| 5 | Seated Leg Curl Machine | `Lever-Seated-Leg-Curl_Thighs-FIX_.mp4` / plate-loaded variant | FOUND | NO |
| 6 | Seated Calf Raise Machine | `Lever-Seated-Calf-Raise-(plate-loaded).mp4` and variant | FOUND | NO |
| 7 | Hip Abduction Machine | `Lever-Seated-Hip-Abduction_Hips-FIX_.mp4` | FOUND | NO |
| 8 | Hip Adduction Machine | `Lever-Seated-Hip-Adduction_Thighs.mp4` | FOUND | NO |
| 9 | Smith Machine Bench Press | `Smith-Bench-Press_Chest-FIX_.mp4` | FOUND | NO |
| 10 | Smith Machine Squat | `Smith-Squat_Hips_.mp4` | FOUND | NO |
| 11 | Assisted Pull-Up | counterweight assisted pull-up media confirmed in Machine visual QA | FOUND / VISUAL-QA CONFIRMED | NO |
| 12 | Assisted Dip | `Assisted-Triceps-Dip-(kneeling)_Upper-Arms.mp4` confirmed as assisted dip machine in Machine visual QA | FOUND / VISUAL-QA CONFIRMED | NO |
| 13 | Hack Squat Machine | `Lever-Linear-Hack-Squat-(male)_Thighs_.mp4` + Sled hack-squat variants | FOUND | NO |
| 14 | Plank | `Front-Elbow-Plank-(male)_Waist-FIX_.mp4` | FOUND | NO |
| 15 | Crunch | `Crunch-Floor-(male)_Waist_.mp4` | FOUND | NO |
| 16 | Lying Leg Raise | `Lying-Leg-Raise_Waist-FIX_.mp4` | FOUND | NO |

### P0 consequence

The earlier instruction to create a new P0 asset pack of 16 is **superseded only for asset production**.

These 16 exercise identities remain the previously approved priority coverage, but the new purchased source means the default action is now:

`existing source selection → canonical mapping → naming/equipment/body-part QA → Production promotion`

not:

`generate 16 new visual assets`

---

# P1 remap

## Clear source candidates — 14

| Old P1 identity | Representative source evidence | Result |
|---|---|---|
| Cable Lateral Raise | `Cable One Arm Lateral Raise.mp4` and multiple lateral-raise variants | SOURCE_FOUND |
| Lateral Raise Machine | `Lever-Lateral-Raise-(plate-loaded)_Shoulders.mp4` and variants | SOURCE_FOUND |
| Reverse Pec Deck Fly | `Lever-Seated-Reverse-Fly_Shoulders.mp4` and variants | SOURCE_FOUND |
| Cable Straight-Arm Pulldown | cable normalization family `straight_arm_pulldown`, including `Cable-Straight-Arm-Pulldown-(VERSION-2)_Back_.mp4` | SOURCE_FOUND |
| Cable Crunch | cable normalization family `crunch`, including kneeling/seated/standing cable crunch media | SOURCE_FOUND |
| Barbell Front Squat | `Barbell-Clean-grip-Front-Squat_Thighs-FIX_.mp4` plus front-squat variants | SOURCE_FOUND |
| Dumbbell Arnold Press | `Dumbbell-Arnold-Press_Shoulders.mp4` / Arnold Press II | SOURCE_FOUND |
| Barbell Pendlay Row | `Barbell-Pendlay-Row_Back_.mp4` | SOURCE_FOUND |
| Smith Bent-Over Row | `Smith-Bent-Over-Pronated-Grip-Row_Back-FIX_.mp4` / `Smith-Bent-Over-Row-(VERSION-2)_Back_.mp4` | SOURCE_FOUND |
| Hip Thrust Machine | `Lever-Hip-Thrust-(plate-loaded)-(male)_Hips_.mp4` | SOURCE_FOUND |
| Standing Calf Raise Machine | `Lever-Standing-Calf-Raise_Calf-FIX_.mp4` | SOURCE_FOUND |
| Leg Press Calf Raise | `Sled-Calf-Press-On-Leg-Press_Calves-FIX_.mp4` / `Sled-45-Calf-Press_Calves-FIX_.mp4` | SOURCE_FOUND |
| Barbell Sumo Deadlift | `Barbell-Sumo-Deadlift_Hips-FIX_.mp4` | SOURCE_FOUND |
| Trap Bar Deadlift | `Trap-Bar-Deadlift_Thighs-FIX_.mp4` | SOURCE_FOUND + TAXONOMY WORK |

### Trap Bar note

This is no longer an asset-availability gap. If promoted, G Fit still needs an explicit `Trap Bar` equipment taxonomy decision because the old Production taxonomy did not include it.

## Identity review — 3

### 1. Dumbbell Deadlift

Old gap identity:

- standard bilateral dumbbell deadlift

Current source clearly contains related variants such as:

- `Dumbbell-Single-Arm-Deadlift_Hips_.mp4`
- `Dumbbell-Stiff-Leg-Deadlift_Hips.mp4`
- straight-leg / sumo / single-leg deadlift variants

A clearly named plain bilateral conventional `Dumbbell-Deadlift` source was not verified in the current manifest search.

Decision:

**IDENTITY_REVIEW — do not auto-map a stiff-leg/sumo/single-arm variant to conventional Dumbbell Deadlift.**

### 2. Smith Machine Romanian Deadlift

Old gap identity:

- standard-stance Smith Machine Romanian Deadlift

Current source includes:

- `Smith-Stiff-Legged-Deadlift_Hips_.mp4`
- `Smith-Deadlift_Hips.mp4`
- Smith sumo deadlift variants

Existing Production also already has `smith-machine-sumo-romanian-deadlift`, but that is explicitly a wide/sumo stance variant.

Decision:

**IDENTITY_REVIEW — visual execution must confirm whether a purchased candidate can legitimately represent standard Smith RDL.**

### 3. Sit Up

Old gap identity:

- standard floor bodyweight Sit Up

Current source searches found related variants including:

- `Wide-Leg-Sit-Up-(male)_Waist_.mp4`
- incline twisting sit-ups
- decline sit-ups
- vertical sit-up
- weighted/dumbbell sit-up variants

No exact standard floor bodyweight sit-up was verified in the current manifest search.

Decision:

**IDENTITY_REVIEW / POSSIBLE TRUE GAP — do not substitute a wide-leg, decline, twisting, vertical, or loaded sit-up automatically.**

---

# What this does not prove

The following would be incorrect at this stage:

- `2,109 raw files = 2,109 app exercises`
- calculating a final G Fit canonical count by subtracting only the duplicate groups already reviewed
- treating every filename variation as a separate exercise
- treating every related movement family as a duplicate

Reason:

- main-family targeted duplicate QA is complete, but full canonical mapping is not
- **579 rows remain in Other / not-yet-normalized**
- attachment/grip/execution contexts need app-facing absorption rules
- some source filenames conflict with actual visual movement

Therefore final canonical count remains **NOT VERIFIED**.

---

# Immediate next

1. Resolve the **3 P1 identity-review cases** in one small targeted visual-QA bundle if filename evidence cannot settle them.
2. Continue Production mapping of the 2,109 source, using existing 195 canonical rows as anchors rather than rebuilding identity rules from scratch.
3. Classify remaining source rows as one of:
   - existing Production canonical
   - new canonical candidate
   - attachment context
   - grip context
   - execution/load context
   - media duplicate/variant
   - excluded/non-gym-first
   - unresolved
4. Only then calculate:
   - final source-derived canonical candidate count
   - actual MVP gap count
   - any exercise that truly still requires a new G Fit-created asset
5. Production media selection/transform/app-serving storage remains downstream of stable canonical mapping.

No Cursor implementation handoff yet.
