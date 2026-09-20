# Gym Visual Auto Normalization v1

**Date:** 2026-09-20  
**Status:** DATA PREP PASS 1 COMPLETE · SEMANTIC QA OPEN

## Input
- FEMALE: 3,011 video+thumbnail pairs
- MALE: 4,186 video+thumbnail pairs
- total: 7,197 pairs
- video/thumbnail stem mismatch: 0

## Pass 1
- conservative exercise candidates: **5,854**
- exact male/female 1:1 groups: **1,108**
- multi-variant exact groups: **76**
- male-only groups: **2,911**
- female-only groups: **1,759**
- duplicate/version review groups: **117**

## Artifacts
- `data/exercises/gym-visual/v1/gym_visual_exercise_candidates_v1.csv`
- `data/exercises/gym-visual/v1/gym_visual_duplicate_review_groups_v1.csv`
- `data/exercises/gym-visual/v1/summary.json`
- `data/exercises/gym-visual/v1/README.md`

## Boundary
This is filename-derived working data, not final Production DB.
Unsupported fields are intentionally not invented. Old 211 plan remains superseded.
Because the repository is public, raw purchased filenames/path provenance is not copied wholesale in this pass.

## NEXT
Duplicate/version QA → cross-gender near-match QA → Korean/local semantic normalization → default media selection → Cloudflare MP4 + in-app WebP manifest.
