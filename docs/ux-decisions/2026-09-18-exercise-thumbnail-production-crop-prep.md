# 2026-09-18 Exercise Thumbnail Production Crop Prep

**Date:** 2026-09-18  
**Status:** IN PROGRESS · LOCAL PHOTOSHOP AUTO-CROP PATH VALIDATED · 50-IMAGE EXECUTION CONFIRMED · OVERNIGHT BULK CANDIDATE PREPARED · FINAL LARGE-RUN QA OPEN · NO CURSOR HANDOFF

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

## Local Photoshop auto-crop route — validated

Because Adobe MCP crop generation succeeded but saving generated outputs back into the target Creative Cloud folder repeatedly failed with HTTP `500`, a local Photoshop UXP script route was prototyped and verified.

### Root cause found during script bring-up

Early `.psjs` tests appeared to stop after folder selection.

The decisive fix was keeping the Photoshop script execution context alive with top-level Global Await:

- failing pattern: `main();`
- working pattern: `await main();`

After this correction:
- local folder selection: PASS
- image enumeration: PASS
- opening source images in Photoshop: PASS
- pixel analysis through Photoshop Imaging API: PASS
- automatic crop / resize / PNG save: PASS

### Crop algorithm currently used

The local script does not apply one fixed crop coordinate to every source.

For each image it:
1. reads a reduced-resolution pixel sample
2. treats near-white pixels as background
3. finds the non-white athlete + equipment bounding region
4. calculates a square crop around that region
5. normalizes the long side of the detected content toward about `400px` inside the final canvas
6. crops and resizes to `512 × 512`
7. saves as PNG while leaving the original source untouched

Current working parameters:
- output: `512 × 512`
- target content span: about `400px`
- white threshold: `245 / 255`
- analysis size: `256px`
- supported source extensions: JPG / JPEG / PNG

### Validation progression

- 5-image real crop test: execution PASS; Product Owner feedback = output looked reasonably good
- 50-image test with logging: execution PASS; Product Owner confirmed the batch route works
- this validates the local Photoshop automation route technically, but does **not** yet mean all 3,000 outputs have passed visual QA

### Overnight bulk candidate

Canonical candidate script:
- `tools/photoshop/tampin_auto_crop_v05_overnight.psjs`

Current overnight safeguards:
- process the full selected source folder
- batch size: `100` images
- pause after each batch: `60s`
- write checkpoint log after every 100 images
- skip outputs that already exist
- safe restart: rerunning the script resumes by processing only missing outputs
- continue past per-file failures instead of stopping the entire run
- preserve originals
- output folder: `tampin_crop_output`
- log file: `tampin_crop_log.txt`

This v0.5 script is prepared for the large run, but the full 3,000-image run and post-run visual exception QA are still pending.

### Route decision

The unresolved Adobe MCP target-folder save error is no longer a blocker for Production crop generation.

Current preferred production route:
- Adobe MCP / visual work: small-sample exploration only when useful
- Photoshop UXP local script: repeatable high-volume crop production
- manual correction: only for exceptions found after batch QA

Do not mark the Production crop standard fully locked until the overnight batch has completed and representative / exception QA has passed.

---

## Next validation steps

1. Run the prepared Photoshop v0.5 overnight candidate against the full purchased source folder.
2. Confirm the run log, total success/failure count, and restart/skip behavior if the run is interrupted.
3. Visually QA a representative spread of outputs, with extra attention to horizontal/lying poses, long bars, benches, and large equipment.
4. Review every logged failure and any obvious crop outlier.
5. Tune the shared crop parameters only if the exception rate or visual inconsistency is materially high.
6. Product Owner locks the Production crop convention only after the large-run QA is acceptable.
7. Then proceed to the next media-preparation/mapping step without reopening already approved Figma thumbnail styling.

The local Photoshop UXP script is now the expected scalable route for the ~3,000-image source set. Adobe MCP remains useful for small-sample inspection/editing, but is not the bulk production path.

---

## Scope boundary

This checkpoint does not:
- change the current Figma thumbnail component sizes or border treatment
- approve the three first-pass crops as final
- approve a bulk-processing rule
- complete Production Exercise DB/media mapping
- authorize Cursor implementation
