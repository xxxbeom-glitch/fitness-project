# Gym Visual semantic normalization prepass v1

**Date:** 2026-09-21  
**Status:** DATA PREPASS COMPLETE · MANUAL SEMANTIC QA REMAINS · NOT PRODUCTION

## Identity baseline

- source media pairs: **7,197**
- filename candidates: **5,854**
- after duplicate/version QA: **5,729**
- after cross-gender near-match QA: **5,654**
- after held-pair resolution: **5,648 working identities**

## Scope split

- MVP resistance/strength candidates: **3726**
- excluded non-MVP: **1476**
- excluded added-weight bodyweight: **4**
- excluded reserved recording UI: **17**
- general review: **274**
- home/context review: **151**

Excluded rows are not deleted. Source provenance and media remain preserved.

## Recording-type prepass

- (review): **2014**
- reps: **1815**
- weight_reps: **1641**
- duration: **155**
- weight_duration: **14**
- assisted_weight_reps: **5**
- distance_weight: **4**

Rules reuse the PO-approved recording policy. External standardized load uses `weight_reps`; dynamic bodyweight uses `reps`; whole-exercise isometric holds use `duration`; machine/counterweight assisted pull-up/chin-up/dip use `assisted_weight_reps`. Added-weight bodyweight is excluded rather than remapped. Reserved carry/weighted-hold types remain outside active MVP UI. Resistance Band / Rings / Suspension recording semantics are not guessed and remain review.

## Korean naming

- Korean values here are controlled-glossary drafts only, not Production labels.
- a row is filled only when the full English name can be converted without leftover English text.
- otherwise `name_ko_draft` stays blank for manual/local naming QA.

## Muscle metadata

- detailed muscles are populated only for high-confidence movement-name families.
- unsupported anatomy remains blank.
- broad vendor body tags are not expanded into invented anatomy.
- body-part vs inferred muscle-family conflicts are explicitly flagged for manual QA.

## QA status

- AUTO_DRAFT_COMPLETE: **495**
- MANUAL_QA_REQUIRED: **3656**
- SCOPE_RESOLVED_EXCLUDED: **1497**

`AUTO_DRAFT_COMPLETE` is not Production approval. It only means the current prepass has a complete Korean draft + equipment + body part + active recording type with no detected semantic-family conflict.

## Artifacts

- `data/exercises/gym-visual/v1/semantic/gym_visual_semantic_mvp_v1_part1.csv`
- `data/exercises/gym-visual/v1/semantic/gym_visual_semantic_mvp_v1_part2.csv`
- `data/exercises/gym-visual/v1/semantic/gym_visual_semantic_mvp_v1_part3.csv`
- `data/exercises/gym-visual/v1/semantic/gym_visual_semantic_excluded_v1.csv`
- `data/exercises/gym-visual/v1/semantic/gym_visual_semantic_review_v1.csv`

## NEXT

1. lock Resistance Band / Rings / Suspension recording semantics
2. expand and QA Korean naming glossary
3. resolve missing/conflicting body-part and muscle metadata
4. review the `REVIEW` / `REVIEW_HOME_CONTEXT` catalog rows
5. after semantic row lock, select default male/female media
