# Gym Visual source catalog supersession

**Date:** 2026-09-20  
**Status:** PO APPROVED · CURRENT EXERCISE SOURCE DIRECTION

## Decision

The purchased Gym Visual / Gym Animations asset library is the current source catalog for Tampin exercise-data construction.

The old purchased-206 → canonical-195 → P0-16 → 211 exercise plan is **superseded** for current product work.

Do not:
- use 195 or 211 as the target exercise count
- map the current media library back onto the old 211 list
- treat the old 195/211 workbook plan as the current catalog boundary

Those documents remain historical provenance only.

## Current media inventory baseline

Latest Product Owner-curated inventory:
- FEMALE video files: 3,011
- FEMALE thumbnails: 3,011
- MALE video files: 4,186
- MALE thumbnails: 4,186
- total videos: 7,197
- total thumbnails: 7,197
- video/thumbnail stem mismatches: 0

Media pairing rule:
- video = `{stem}.mp4`
- thumbnail = `{stem}.jpg`
- same stem = one media pair

This inventory is a **source media pool**, not automatically 7,197 unique app exercises.

## Exercise-data construction direction

Build the current exercise catalog from the purchased Gym Visual source pool.

For each source item:
1. parse source filename / source identity
2. normalize male/female naming differences
3. identify whether male/female assets represent the same exercise
4. normalize user-facing Korean and English names
5. classify equipment
6. classify major body part / primary muscle / secondary muscle where supported
7. classify movement / posture where useful for identity
8. assign the approved Tampin recording type
9. merge true duplicate naming variants only when movement/equipment/posture/history semantics are equivalent
10. keep genuinely different equipment / angle / posture / unilateral-bilateral / assistance variants as separate exercise identities
11. mark non-MVP or unwanted source items excluded rather than deleting source provenance
12. bind selected male/female video + thumbnail paths to the resulting canonical exercise identity

The final canonical exercise count is an output of this normalization process, not a preselected target number.

## Product category boundary

Gym Visual source folder/package organization is not automatically exposed as Tampin product taxonomy.

Do not create product filters/categories merely because the vendor has Gym/Home/package folders.

Tampin app metadata remains based on actual exercise identity and approved product fields such as:
- name / aliases
- equipment
- body part / muscle
- movement / posture where relevant
- recording type
- media references

## Cloudflare boundary

Before final production serving:
- preserve source filename/provenance
- produce normalized exercise-to-media mapping
- define stable Cloudflare object paths/keys
- generate a production media manifest
- upload/serve media without making Cloudflare object naming the exercise identity itself

## Superseded historical baseline

The following remain reference/history only and must not drive current catalog count:
- `docs/exercise-db/exercise-db-v1-production.md`
- `docs/exercise-db/2026-09-05-p0-211-production-promotion-qa-result.md`
- `docs/exercise-db/p0-canonical-row-spec-v1.md`

## NEXT

Use the latest male/female video + thumbnail inventory as the source list for catalog normalization and production media mapping.

Do not return to the 211-exercise plan unless the Product Owner explicitly reopens it.
