# Cable Visual Review — 14 Ambiguous Source Videos

**Date:** 2026-09-04  
**Status:** VISUAL QA COMPLETE / NORMALIZATION RULE PENDING PO CONFIRMATION  
**Source scope:** `MP4/MALE/Library_database` Cable ambiguous-review subset

## Review boundary

The 14 review videos were copied into a separate review ZIP and visually inspected. The purchased raw source remains read-only and was not renamed, moved, converted, deleted, or otherwise modified.

This review classifies what the videos actually show. It does **not** overwrite vendor filenames or raw metadata.

Classification vocabulary used below:

- `ATTACHMENT_VARIANT` — same practical movement; attachment is the meaningful difference
- `GRIP_POSTURE_EXECUTION_VARIANT` — same broader movement family but stance, body position, grip, unilateral/bilateral execution, or behind-neck path materially differs
- `CANONICAL_MOVEMENT_CANDIDATE` — visual movement is distinct enough that it should not be silently merged into a generic parent before normalization review
- `DUPLICATE` — visual execution is effectively the same source movement for app-facing purposes
- `SOURCE_MEDIA_EXCEPTION` — source-media issue that should be tracked separately from exercise identity

## Visual QA result

| # | Raw filename | What the video visibly shows | Review classification | Recommended normalization direction | Confidence |
|---|---|---|---|---|---|
| 1 | `Cable Lying Curl.mp4` | Supine/lying cable curl; elbow-flexion movement performed lying down | `GRIP_POSTURE_EXECUTION_VARIANT` | Keep under cable-curl family, but lying posture is history-relevant and should not be treated as a mere attachment swap | High |
| 2 | `Cable-Curl-with-Multipurpose-V-bar_Forearms_.mp4` | Standing cable curl using a multipurpose V-bar | `ATTACHMENT_VARIANT` | `cable curl + multipurpose V-bar`; attachment-specific media can map to the same parent movement | High |
| 3 | `Cable-Half-Kneeling-Lift-(male)_Chest_.mp4` | Low-to-high diagonal cable lift from half-kneeling stance | `GRIP_POSTURE_EXECUTION_VARIANT` | Cable diagonal-lift family; half-kneeling posture/unilateral setup should remain distinct from standing bilateral lift | High |
| 4 | `Cable-Incline-Pushdown_Back_.mp4` | Incline-bench straight-arm cable pull from overhead toward the torso; back/lats highlighted | `GRIP_POSTURE_EXECUTION_VARIANT` | Do **not** normalize as ordinary triceps pushdown. Treat as incline straight-arm pulldown/pullover-family candidate; normalized display naming needs correction | High |
| 5 | `Cable-One-Arm-Lateral-Bent-over.mp4` | Bent-over single-arm cable raise/rear-delt style movement | `CANONICAL_MOVEMENT_CANDIDATE` | Do not merge into ordinary standing lateral raise based on filename alone; normalize as bent-over unilateral rear-delt/lateral family after naming pass | High |
| 6 | `Cable-Rear-Drive_Upper-Arms_.mp4` | Standing cable arm-extension/rear-drive pattern with upper-arm/triceps emphasis | `CANONICAL_MOVEMENT_CANDIDATE` | Retain as a distinct movement candidate for now; not visually equivalent to a standard pushdown attachment swap | Medium-High |
| 7 | `Cable-Rear-Pulldown_Back.mp4` | Seated pulldown performed behind the neck | `GRIP_POSTURE_EXECUTION_VARIANT` | Map to `lat-pulldown` family with `behind_neck` posture/path variant; do not create a new parent only from vendor wording | High |
| 8 | `Cable-Seated-Chest-Press-(female)_Chest_.mp4` | Seated bilateral cable chest press using independent handles; visibly female model | `GRIP_POSTURE_EXECUTION_VARIANT` + `SOURCE_MEDIA_EXCEPTION` | Exercise family = cable chest press, seated posture. Also flag female-model media inside the Male analysis catalog for app-serving selection QA | High |
| 9 | `Cable-Standing-Backhand-(male)_Waist_.mp4` | Single-arm low-to-high cross-body diagonal raise/lift | `GRIP_POSTURE_EXECUTION_VARIANT` | Cable diagonal-lift family; unilateral/backhand execution is distinct from the bilateral standing lift | High |
| 10 | `Cable-Standing-Close-Press_Upper-Arms_.mp4` | Standing bilateral cable chest press with close/neutral hand path | `GRIP_POSTURE_EXECUTION_VARIANT` | Cable chest-press family; standing + close/neutral execution variant, not a separate attachment identity | High |
| 11 | `Cable-Standing-Lift_waist.mp4` | Bilateral low-to-high diagonal cable lift with both hands | `GRIP_POSTURE_EXECUTION_VARIANT` | Cable diagonal-lift family; standing bilateral variant | High |
| 12 | `Cable-Standing-Pulldown-(with-rope)_Forearms_.mp4` | Standing rope cable arm pull with dominant elbow-flexion/forearm-biceps pattern; visually not a lat-pulldown pattern | `ATTACHMENT_VARIANT` + naming review | Preserve `rope` as attachment context; do not merge into lat pulldown. Exact normalized parent/name should be resolved in the cable naming pass | Medium-High |
| 13 | `Cable-Twisting-Pull_Back_.mp4` | Low-cable single-arm pull/row with deliberate torso rotation and split stance | `CANONICAL_MOVEMENT_CANDIDATE` | Rotation is movement-defining; do not silently merge into ordinary cable row history. Retain as twisting/rotational pull candidate | High |
| 14 | `Cable-Wide-Grip-Rear-Pulldown-Behind-Neck_Back.mp4` | Wide-grip seated pulldown behind the neck | `GRIP_POSTURE_EXECUTION_VARIANT` | Same `lat-pulldown` parent family as #7, with `behind_neck + wide_grip` context. Not an exact visual duplicate of #7 | High |

## Key findings

### 1. No exact duplicate among these 14

The direct visual review found **0 / 14 exact app-facing duplicates**.

Some files belong to the same movement family, but meaningful posture/grip/unilateral differences remain visible.

### 2. Attachment-only handling is valid, but should not absorb posture changes

Clear example:

`Cable-Curl-with-Multipurpose-V-bar` → same cable-curl movement + V-bar attachment context.

By contrast:

`Cable Lying Curl` changes body position enough that it should not be collapsed into the same history solely because elbow flexion is shared.

### 3. Lat pulldown rear/behind-neck files should share a parent family

`Cable-Rear-Pulldown_Back` and `Cable-Wide-Grip-Rear-Pulldown-Behind-Neck_Back` are visually the same broad vertical-pull family.

Recommended model:

`lat-pulldown` parent + posture/grip context

rather than two unrelated canonical parents.

### 4. Cable diagonal-lift family is represented by multiple execution variants

The review confirms at least:

- half-kneeling diagonal lift
- standing single-arm/backhand diagonal lift
- standing bilateral diagonal lift

These are related, but not visually identical and should not share one undifferentiated performance history by default.

### 5. Vendor filename is not always reliable enough for normalized display naming

Two especially important examples:

- `Cable-Incline-Pushdown_Back_` visually behaves like an incline straight-arm back/lats pull rather than a normal triceps pushdown
- `Cable-Standing-Pulldown-(with-rope)_Forearms_` visually behaves like an arm/elbow-flexion rope movement rather than a lat pulldown

Raw filenames remain preserved. G Fit normalized display naming must be derived separately.

### 6. One source-media exception found

`Cable-Seated-Chest-Press-(female)_Chest_.mp4` visibly uses a female model despite being present in the Male raw analysis catalog.

This does not invalidate the exercise identity, but the asset should be flagged during production media selection so a wrong-model asset is not accidentally served in a male visual set.

## Proposed rule to decide next

The visual review supports the following normalization principle, but this section is **not yet PO-final**:

1. same movement + only attachment difference → one parent exercise + attachment context/media
2. grip-only difference on Cable/Pulley → parent + grip variant where history can remain meaningfully grouped
3. body position / unilateral-bilateral / behind-neck path / large execution-path change → keep as explicit execution variant and do not automatically merge performance history
4. visually movement-defining rotation or a materially different joint pattern → retain as separate canonical candidate until naming/taxonomy review
5. true duplicate requires visually equivalent execution, not just similar filename
6. raw source filename/path remains immutable provenance regardless of normalized decision

## Next

1. PO confirm/refine the Cable normalization rule above
2. apply the rule to all 297 Cable raw videos
3. resolve normalized names for the naming-review cases
4. produce Cable canonical parent / attachment / grip-posture variant / duplicate map
5. then expand the same framework to Machine / Barbell / Dumbbell / Kettlebell / Smith / Landmine

No Cursor implementation handoff is implied by this review.
