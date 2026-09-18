# 2026-09-18 Exercise Thumbnail Production Crop Prep

**Date:** 2026-09-18  
**Status:** IN PROGRESS · SAMPLE VALIDATION OPEN · NOT PRODUCTION LOCKED · NO CURSOR HANDOFF

## Purpose

Prepare a repeatable production-crop convention for the purchased exercise-thumbnail source set before any large-scale asset processing.

This work is separate from the already approved Figma thumbnail visual preview:
- current Figma preview remains valid
- exact Production exercise-to-media mapping remains deferred
- this checkpoint covers source-image crop/framing preparation only

---

## Adobe working surface

Creative Cloud project:
- project URN: `urn:aaid:sc:AP:6a7a861c-0bdb-43ad-bd62-66f0e7329178`

Confirmed project contents:
- `thumbs_original/`
  - `female/`
  - `male/`
- `thumbguide.psdc`
- `example_guide.jpg`
- `example_noguide.jpg`

Confirmed `male/` sample originals:
1. `Dumbbell-Chest-Supported-Lateral-Raises_Shoulders-.jpg`
2. `Dumbbell-Hang-Power-Clean_Weightlifting_.jpg`
3. `Dumbbell-Kneeling-Hold-to-Stand-Clean-grip_Thighs_.jpg`

Adobe connector access/search to this project and these assets was verified successfully.

---

## Working crop convention — provisional

The crop standard is **not locked yet**. Current sample-validation baseline:

- output canvas: `512 × 512`
- keep the current white-background thumbnail treatment
- do **not** force identical crop coordinates or identical scale percentage across exercises
- normalize **perceived visual mass** of the person + exercise-relevant equipment
- preserve the full movement cue and required equipment where possible
- use optical centering rather than mathematical center when the pose/equipment is asymmetric
- validate the final result at actual UI thumbnail sizes, especially `44 / 52 / 64px`

Current guide baseline under validation:
- default visual/content zone: about `400 × 400`
- outer safe zone: about `464 × 464`
- these guide dimensions remain provisional until the three male samples are accepted together

The intended consistency target is:

> When several exercise thumbnails are viewed side-by-side at product size, the athlete/equipment group should feel consistently sized and readable even when pose geometry differs.

---

## Adobe MCP sample-crop test

Three `male/` originals were processed through Adobe image crop/resize as a first-pass test.

Common first-pass parameters:
- source size: `960 × 960`
- output: `512 × 512 PNG`
- fit: subject/object-aware `extract`
- focus: full exercise illustration including the athlete and exercise-relevant equipment
- margin: `0.12`
- alignment: centered
- clipping fallback: `extract`

First-pass crop metadata:

| Sample | Crop x | Crop y | Crop size |
|---|---:|---:|---:|
| Chest-Supported Lateral Raise | 120 | 222 | 572 × 572 |
| Hang Power Clean | 264 | 399 | 376 × 376 |
| Kneeling Hold to Stand | 171 | 317 | 429 × 429 |

Result status:
- crop generation: **PASS**
- visual consistency standard: **NOT APPROVED / still under review**
- the first pass shows that exercise geometry produces materially different crop sizes, so fixed coordinates or one universal scale value should not be used

---

## Cloud-save attempt

The generated crop outputs exist as Adobe image-processing results, but **must not yet be treated as saved Production assets**.

Attempted:
- copy the three generated results into the existing `male/` Creative Cloud folder

Observed:
- Adobe asset-copy operation returned HTTP `500` for all three outputs
- the copy attempt was retried once and returned the same error
- an upload-based fallback path was then started, but completion was not verified before this checkpoint

Current truth:
- original sample files are present in Adobe Cloud
- generated first-pass crop results exist
- persistence of those generated results into the target Adobe Cloud folder is **NOT VERIFIED**

Do not report the crop results as saved in the target folder until a successful asset read-back confirms them.

---

## Next validation steps

1. Persist the three first-pass/adjusted crop results into the Adobe Cloud working area through a verified upload path.
2. Read back the saved outputs from Adobe Cloud.
3. Compare all three at `512px` and at actual product thumbnail size (`44 / 52 / 64px`).
4. Adjust each image independently until perceived athlete/equipment scale is consistent.
5. Product Owner approves the sample convention.
6. Only after approval, convert the convention into the large-set production workflow.

For hundreds of source images, do not assume the ChatGPT Adobe connector should perform the entire batch. Once the visual rule is locked, Photoshop Actions / Bridge batch processing remains the expected scalable production route unless a better verified batch route is established.

---

## Scope boundary

This checkpoint does not:
- change the current Figma thumbnail component sizes or border treatment
- approve the three first-pass crops as final
- approve a bulk-processing rule
- complete Production Exercise DB/media mapping
- authorize Cursor implementation
