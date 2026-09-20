# Gym Visual Cross-gender Near-match QA v1

**Date:** 2026-09-20  
**Status:** PASS · HIGH-CONFIDENCE CROSS-GENDER IDENTITY MERGES RESOLVED · AMBIGUOUS SEMANTIC PAIRS HELD FOR NEXT QA

## Input baseline

- source media pairs: **7,197**
- filename-derived candidates before version QA: **5,854**
- after duplicate/version QA: **5,729** identities
- duplicate/version QA is treated as already applied before this pass

## Result

- high-confidence cross-gender merge clusters: **73**
- candidate identity reduction in this pass: **75**
- working identities after this pass: **5654**
- source media represented by merged clusters: **155**
- ambiguous mutual-near-match pairs held for semantic QA: **45**

All source media/provenance remains preserved. This pass merges exercise identity only; it does not delete alternate media or choose final default media.

## Merge criteria

Merge only when the difference is identity-neutral and supported by the filename/metadata evidence:
- Band ↔ Resistance Band wording with matching equipment
- Sitting ↔ Seated
- One Arm/Leg ↔ Single Arm/Leg
- singular/plural wording
- common vendor typo normalization such as Revers ↔ Reverse
- Rear Lunge ↔ Reverse Lunge / Front Lunge ↔ Forward Lunge
- word-order-only differences with otherwise identical token set
- explicit gender/version residue and obvious filename truncation
- a small manually reviewed synonym set where movement/equipment semantics remain identical

Do not auto-merge when a difference can change execution/history semantics, including modifiers such as:
- incline / decline / kneeling / standing / prone
- pause / pin / deficit
- high / low / wide / narrow / grip changes
- single vs bilateral when not merely wording
- hammer / reverse / goblet / waiter / concentration
- different movement terms such as raise vs curl, press vs stretch, adduction vs abduction

## Manual synonym merges in this pass

- `Single Leg Squat With Support (pistol)` ↔ `Single Leg Squat With Support`
- `Barbell Lying Extension` ↔ `Barbell Lying Triceps Extension`
- `Cable Seated Rear Lateral Raise` ↔ `Cable Seated Rear Delt Raise`

## Hold rule

The hold CSV is not a confirmed `KEEP SEPARATE` list.

It contains high-similarity male/female pairs where filename evidence alone is not strong enough to merge safely. These move into Korean/local semantic normalization and may still merge later after movement/recording semantics are checked.

## Artifacts

- `data/exercises/gym-visual/v1/gym_visual_cross_gender_near_match_qa_v1.csv`
- `data/exercises/gym-visual/v1/gym_visual_cross_gender_near_match_hold_v1.csv`

## NEXT

**Korean/local semantic normalization + exercise metadata QA**

Next pass should:
- normalize user-facing Korean/English names and aliases
- resolve the held semantic pairs
- classify equipment/body part/primary-secondary muscle with evidence
- assign/verify Tampin recording type
- keep unsupported fields blank rather than inventing them

After semantic QA:
- default male/female media selection
- Cloudflare MP4 + in-app WebP manifest
