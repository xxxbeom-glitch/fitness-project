# Cable Normalization Map v0.1 — Manifest Pass

**Date:** 2026-09-04  
**Status:** DERIVED CANDIDATE / MANIFEST PASS COMPLETE / DUPLICATE VISUAL QA PENDING  
**Basis:** PO-approved Cable normalization rule v1 + uploaded filename/size manifest + 14 direct visual-QA overrides

## Source scope reconciliation

- uploaded manifest rows: **298**
- filenames starting with `Cable`: **297**
- additional cable-associated source: **1** — `Inverse-Leg-Curl-(on-pull-up-cable-machine)_Thighs.mp4`
- therefore the earlier **297 Cable raw videos** metric remains the `Cable*` prefix catalog count; this manifest additionally surfaced one cable-machine exercise whose filename does not start with `Cable`.
- normalization v0.1 keeps the 297 prefix catalog and the 1 cable-associated extra distinct via `source_scope`; raw provenance is unchanged.

## Mapping result

- mapped rows: **298 / 298**
- unresolved movement-family rows: **0**
- direct visual-QA override rows: **14**
- duplicate candidate groups reproduced from manifest cleanup: **18 groups / 38 rows**
- derived attachment-context rows: **57**
- derived movement-family labels: **71** — this is a working taxonomy count, **not** final G Fit canonical exercise count.

The previous first-pass metric `explicit attachment/accessory wording detected: 56` is preserved as the earlier detector result. v0.1 currently marks 57 attachment-context rows because the expanded rule also treats `Cable-Bar-Lateral-Pulldown` as `bar_unspecified`.

## Known naming corrections carried forward

- `Cable-Incline-Pushdown_Back_` → candidate normalized name **Incline Cable Straight-Arm Pulldown**; visual QA shows a back/lat straight-arm pull rather than a triceps pushdown.
- `Cable-Standing-Pulldown-(with-rope)_Forearms_` → candidate normalized name **Standing High Cable Rope Curl**; visual QA shows a high-pulley elbow-flexion rope curl rather than a lat pulldown. Confidence remains Medium-High because vendor naming is contradictory.

## Duplicate boundary

The 18 duplicate groups are **candidates only**. Filename cleanup removes version / FIX / body-part / model tags, but this is insufficient to merge exercise/media identity. Per approved rule, true duplicate requires visual or hash confirmation.

Duplicate candidate groups:

- `cable decline fly` (2)
  - `Cable Decline Fly.mp4`
  - `Cable-Decline-Fly_Chest-FIX_.mp4`
- `cable forearm pronation` (2)
  - `Cable-Forearm-Pronation-(male)_Forearms_.mp4`
  - `Cable-Forearm-Pronation-(male)_Forearms-FIX_.mp4`
- `cable kneeling crunch` (2)
  - `Cable-Kneeling-Crunch-(VERSION-2)_Waist_.mp4`
  - `Cable-Kneeling-Crunch_Waist-FIX2_.mp4`
- `cable kneeling triceps extension` (2)
  - `Cable-Kneeling-Triceps-Extension-(VERSION-2)_Upper-Arms.mp4`
  - `Cable-Kneeling-Triceps-Extension_Upper-Arms.mp4`
- `cable low chest press` (2)
  - `Cable-Low-Chest-Press-(male)_Chest_.mp4`
  - `Cable-Low-Chest-Press-(VERSION-2)-(male)_Chest_.mp4`
- `cable low seated row` (2)
  - `Cable Low Seated Row.mp4`
  - `Cable-Low-Seated-Row_Back.mp4`
- `cable middle fly` (2)
  - `Cable Middle Fly.mp4`
  - `Cable-Middle-Fly_Chest-FIX_.mp4`
- `cable neutral grip wide pulldown` (3)
  - `Cable-Neutral-Grip-Wide-Pulldown-(VERSION-2)_Back_.mp4`
  - `Cable-Neutral-Grip-Wide-Pulldown-(VERSION-3)_Back_.mp4`
  - `Cable-Neutral-Grip-Wide-Pulldown.mp4`
- `cable one arm curl` (2)
  - `Cable One Arm Curl.mp4`
  - `Cable-One-Arm-Curl_Upper-Arms.mp4`
- `cable one arm front raise` (3)
  - `Cable One Arm Front Raise .mp4`
  - `Cable One Arm Front Raise.mp4`
  - `Cable-One-Arm-Front-Raise-(male)_Shoulders_.mp4`
- `cable one arm lat pulldown` (2)
  - `Cable One Arm Lat Pulldown.mp4`
  - `Cable-one-arm-lat-pulldown_back.mp4`
- `cable one arm lateral raise` (2)
  - `Cable One Arm Lateral Raise.mp4`
  - `Cable-One-Arm-Lateral-Raise_Shoulders.mp4`
- `cable seated chest press` (2)
  - `Cable-Seated-Chest-Press-(female)_Chest_.mp4`
  - `Cable-Seated-Chest-Press-(male)_Chest_.mp4`
- `cable side bend` (2)
  - `Cable-Side-Bend-(VERSION-2)_Waist_.mp4`
  - `Cable-Side-Bend_Waist.mp4`
- `cable standing jab` (2)
  - `Cable-Standing-Jab-(male)_Plyometrics_.mp4`
  - `Cable-Standing-Jab-(VERSION-2)-(male)_Plyometrics_.mp4`
- `cable standing single delt row` (2)
  - `Cable-Standing-Single-Delt-Row-(male)_Shoulders_.mp4`
  - `Cable-Standing-Single-Delt-Row-(VERSION-2)-(male)_.mp4`
- `cable straight arm pulldown` (2)
  - `Cable-Straight-Arm-Pulldown-(VERSION-2)_Back_.mp4`
  - `Cable-Straight-Arm-Pulldown_Back-FIX_.mp4`
- `cable upright row` (2)
  - `Cable-Upright-Row_shoulder.mp4`
  - `Cable-Upright-Row_Shoulders-FIX2_.mp4`

## Next

1. direct visual QA of **38 files / 18 duplicate candidate groups**
2. mark each group as true duplicate vs meaningful visual/execution version
3. finalize Cable parent / attachment / grip / execution / duplicate map
4. then expand the rule to Machine / Barbell / Dumbbell / Kettlebell / Smith / Landmine

No Cursor implementation handoff.
