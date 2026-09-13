# Group 07A/07B — Body-map Scale Adjustment

**Date:** 2026-09-13  
**Status:** FIGMA APPLIED / VISUAL QA PASS / NO CURSOR HANDOFF

## Scope

Current Analysis explorations:
- `07A_분석홈_부위Row딥링크_Exploration` — `887:936`
- `07B_등상세_운동별총중량_Exploration` — `887:1028`

## Change

The front/back anatomy images were visually too small inside the 280px body-map area, so both screens now use the same larger body-map geometry.

Before:
- each anatomy group: `72 × 167.724`
- preview: `280 × 184`

After:
- each anatomy group: `84 × 195.678` (1.1667×)
- preview: `280 × 212`
- front/back center lines remain unchanged at x=`76` and x=`204`
- top/bottom visual margin remains approximately `8px`

Affected nodes:
- 07A `BodyMapPreview` — `887:949`
  - front `887:950`
  - back `887:962`
- 07B `BodyMapPreview` — `887:1035`
  - front `887:1036`
  - back `887:1048`

Auto Layout updated parent heights automatically:
- 07A `BodyDistributionCard`: `448 → 476`
- 07B `SelectedBodyDetailCard`: `450 → 478`

## QA

- front/back scale identical across 07A and 07B: PASS
- front/back horizontal center alignment preserved: PASS
- image clipping/collision: none observed
- parent card Auto Layout/Hug behavior: PASS
- full-screen screenshot read-back for both 07A and 07B: PASS

This is a visual scale refinement only. Body-map scoring/highlight policy is unchanged.

**NO CURSOR IMPLEMENTATION HANDOFF.**
