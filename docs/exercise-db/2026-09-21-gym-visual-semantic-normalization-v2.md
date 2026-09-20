# Gym Visual semantic normalization v2 checkpoint

**Date:** 2026-09-21  
**Status:** SEMANTIC V2 GENERATED · APPARATUS RECORDING POLICY APPLIED · MANUAL QA OPEN

## Baseline

- source media pairs: **7,197**
- filename-derived candidates: **5,854**
- after duplicate/version QA: **5,729**
- after cross-gender near-match QA: **5,654**
- after held-pair resolution: **5,648 working identities**

## Catalog status

- MVP_CANDIDATE: **3722**
- EXCLUDE_NON_MVP: **1476**
- EXCLUDE_ADDED_WEIGHT_MVP: **8**
- EXCLUDE_RESERVED_RECORDING_MVP: **17**
- REVIEW: **274**
- REVIEW_HOME_CONTEXT: **151**

## Recording status

- reps: **2225**
- weight_reps: **1641**
- duration: **158**
- assisted_weight_reps: **5**
- weight_duration (reserved): **14**
- distance_weight (reserved): **4**
- unresolved / blank: **1601**

## QA status

- AUTO_DRAFT_COMPLETE: **598**
- MANUAL_QA_REQUIRED: **3549**
- SCOPE_RESOLVED_EXCLUDED: **1501**

## v2 change

The current apparatus recording policy is now applied:
- Resistance Band dynamic → reps
- Rings dynamic → reps
- Suspension Trainer dynamic → reps
- pure static apparatus holds → duration
- machine counterweight assistance remains assisted_weight_reps
- four externally weighted rings/suspension variants moved out of active MVP added-weight semantics

Decision:
- `docs/ux-decisions/2026-09-21-band-rings-suspension-recording-types.md`

Artifacts:
- `data/exercises/gym-visual/v1/semantic/gym_visual_semantic_mvp_v2_part1.csv`
- `data/exercises/gym-visual/v1/semantic/gym_visual_semantic_mvp_v2_part2.csv`
- `data/exercises/gym-visual/v1/semantic/gym_visual_semantic_mvp_v2_part3.csv`
- `data/exercises/gym-visual/v1/semantic/gym_visual_semantic_excluded_v2.csv`
- `data/exercises/gym-visual/v1/semantic/gym_visual_semantic_review_v2.csv`

## NEXT

Focused manual semantic QA:
1. Korean/local naming expansion for gym-first weighted equipment
2. body-part / muscle conflict resolution
3. general and home-context catalog review
4. bodyweight catalog relevance pass to prevent search-noise bloat
5. only after semantic row lock, default male/female media selection
