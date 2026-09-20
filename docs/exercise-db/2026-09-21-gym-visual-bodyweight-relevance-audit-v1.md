# Bodyweight catalog relevance audit v1

**Date:** 2026-09-21  
**Status:** NON-DESTRUCTIVE SEARCH-RELEVANCE AUDIT · NO CATALOG POLICY CHANGE

## Scope

- active MVP Bodyweight candidates audited: **1588**

## Tiers

- BODYWEIGHT_DEFAULT_SEARCH_CANDIDATE: **546**
- BODYWEIGHT_EXTENDED_VARIANT_REVIEW: **139**
- BODYWEIGHT_CONTEXT_VARIANT_REVIEW: **71**
- BODYWEIGHT_NOISE_REVIEW: **832**

Default-search candidates are limited to recognized gym/calisthenics strength families such as push-up, pull-up/chin-up, dip, inverted-row, squat/lunge, glute bridge/hip thrust, calf raise, leg/knee raise, crunch/sit-up, plank, back extension/hyperextension, and Nordic/hamstring curl variants.

Home/context props (chair/table/doorway/wall/towel etc.) are not deleted; they are separated for relevance review.

Complex combination variants are also retained but not assumed to belong in the default search surface.

## Important boundary

This audit does **not** change `catalog_status`, delete source assets, or impose a target exercise count. It only creates evidence for a later product decision about default-search exposure versus extended/hidden variants.

## Artifact

- `data/exercises/gym-visual/v1/semantic/gym_visual_bodyweight_relevance_audit_v1.csv`

## NEXT

Use this audit together with weighted-equipment semantic completion to decide the app-facing default search catalog without losing the broader source library.