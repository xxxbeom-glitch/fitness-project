# Gym Visual Duplicate / Version QA v1

**Date:** 2026-09-20  
**Status:** PASS · 117 / 117 GROUPS RESOLVED AT EXERCISE-IDENTITY LEVEL

## Scope

This QA resolves the 117 filename-derived duplicate/version review groups created by Gym Visual auto-normalization v1.

This is an **exercise identity QA**, not a final visual-media selection pass.

## Evidence

- review groups: **117**
- groups resolved: **117 / 117**
- source media rows represented by those groups: **329**
- candidate identity reduction: **125**
- conservative candidates before this QA: **5,854**
- identity candidates after version-deduplication: **5729**
- candidate-count distribution:
  - 2-candidate groups: **110**
  - 3-candidate groups: **6**
  - 4-candidate groups: **1**

For all 117 groups, every candidate name collapses to the same `duplicate_review_key` after removing only the `VERSION` marker and the already-normalized `One Arm → Single Arm` wording equivalence.

No group contains a candidate-level equipment, angle, posture, unilateral/bilateral, or assistance qualifier that would require separate exercise identity at this stage.

## Decision

All 117 groups are merged to **one canonical exercise identity per `duplicate_review_key`**.

The removed candidate identities are not treated as deleted source media.

Media rule:
- preserve all purchased source media/provenance
- keep version/gender media as alternate source assets under the merged exercise identity
- do not choose the final default male/female media in this QA
- final default-media selection remains a later dedicated pass

## Boundary

This PASS means:
- duplicate/version **exercise identity** is resolved
- `VERSION-*` is not an independent Tampin exercise identity when the semantic exercise name is otherwise identical

This PASS does **not** mean:
- every version animation is visually identical
- a final default thumbnail/video has been selected
- muscle metadata/localized naming has been finalized

Those remain separate downstream QA.

## Artifact

Reviewed result:
- `data/exercises/gym-visual/v1/gym_visual_duplicate_version_qa_v1.csv`

Original auto-generated review input remains unchanged:
- `data/exercises/gym-visual/v1/gym_visual_duplicate_review_groups_v1.csv`

## NEXT

**Cross-gender near-match QA**

Goal:
- find male/female source candidates that represent the same exercise but did not exact-match in pass 1 because of wording differences
- merge only when equipment / movement / posture / unilateral-bilateral / assistance semantics are equivalent
- keep genuinely different variants separate

After that:
- Korean/local semantic normalization
- muscle/equipment/recording-type QA
- default media selection
- Cloudflare MP4 + in-app WebP manifest
