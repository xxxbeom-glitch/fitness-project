# Profile photo crop screen amendment

**Date:** 2026-09-22
**Status:** PO APPROVED · FIGMA REFLECTED · FOCUSED QA PASS

## Decision
- Profile photo is optional.
- `08B1_Profile_Photo_Sheet` photo selection opens `08B1A_Profile_Photo_Crop`.
- Crop ratio is fixed to 1:1.
- User can reposition the image and pinch to zoom.
- Back cancels the crop. Save applies it and returns to the profile flow.
- Rotation and filters are outside MVP.
- Saved profile image output is square. Circular display is a UI mask only.

## Figma
- file `W3lZurXCXbThP67rF2xk2b`
- page `34:1076`
- screen `08B1A_Profile_Photo_Crop` = `2144:8195`
- size 360×780
- crop window 320×320
- existing Back+Save Nav Header main component `360:2327`
- existing Light tokens reused; no new global token or shared component.

## Focused QA
- Light mode PASS
- placeholder removed PASS
- Nav Header component link PASS
- 1:1 crop geometry PASS
- structural read-back and screenshot generation PASS

## Inventory
- canonical screens 95 → 96
- Group 08 screens 17 → 18

This amendment changes only the Group 08 profile-photo flow. Prior Group 08 PASS decisions remain valid elsewhere.

## Supersession note

For the profile-photo flow and screen inventory, this decision is newer than the 2026-09-20 aggregate handoff documents. The canonical count for this approved amendment is **96 total / Group 08 = 18**.

## Final approval / canonical read-back

Product Owner approved the completed screen on 2026-09-22.

Current canonical Figma read-back after approval:
- total canonical screens = `96`
- Light roots = `96 / 96`
- Group 08 screens = `18`
- whole-MVP instance links = `1,844`
- Group 08 instance links = `244`
- missing main-component links = `0`
- instance sources outside `Common_Component` = `0`

Implementation-facing planning documents are synchronized to this amendment. Production implementation remains unauthorized until explicit Product Owner Development-mode approval.

