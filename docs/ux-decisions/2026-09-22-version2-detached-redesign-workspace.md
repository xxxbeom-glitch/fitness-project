# Version2 detached redesign workspace checkpoint

**Date:** 2026-09-22  
**Status:** ACTIVE DESIGN WORKSPACE · PO DIRECT-EDIT SURFACE · NOT CANONICAL  
**Mode:** DESIGN / FIGMA  
**Development:** PAUSED · DEV-002 MUST NOT EXECUTE

## 1. PO request

Product Owner requested a full editable copy of the currently completed MVP Figma page for direct visual redesign.

Source page:
- `MVP_전체_와이어프레임` — `34:1076`

New working page:
- `version2` — `2237:7614`

Purpose:
- preserve the current canonical MVP as a reference/baseline
- provide a fully detached visual workspace where the PO can directly modify layers without affecting shared components, variables, styles, or prototype behavior
- use `version2` for the current broad visual redesign work
- do **not** treat `version2` as canonical until the PO explicitly approves promotion/reconciliation

## 2. Clone scope

The entire `MVP_전체_와이어프레임` page was cloned, not only selected screens.

Source read-back before cloning:
- top-level nodes = `104`
- top-level MVP screen frames = `96`
- source component instances = `1,845`

The clone preserves:
- the 96 current MVP screen layouts
- screen names and positions
- group labels and other top-level helper layers
- visual appearance as closely as possible

The source page was not edited as part of this operation.

## 3. Version2 unlink operation

On `version2` only, the cloned content was converted into independent editable layers.

Removed / detached:
- component Instance links
- component / component-set dependency in the cloned page
- text style links
- fill style links
- stroke style links
- effect style links
- grid style links
- node-level variable bindings
- paint / stroke / effect / grid variable bindings
- text-range variable bindings
- explicit variable modes
- prototype reactions
- page prototype flow starting points

This operation intentionally preserves resolved visual values while removing the shared-system linkage.

## 4. Final Figma verification

Final full-page audit for `version2`:

- top-level nodes = `104`
- MVP screen count = `96`
- total top-level FRAME nodes = `97`
  - the extra frame is the previously top-level `chevron-right` instance converted to a normal frame
  - this does **not** add an MVP screen
- remaining Instances = `0`
- remaining Components / Component Sets = `0`
- remaining Style links = `0`
- remaining Variable bindings = `0`
- remaining Explicit Variable Modes = `0`
- remaining Prototype Reactions = `0`
- remaining Prototype Flow Starting Points = `0`

Representative cloned screens retained their original position/size during read-back, including:
- `01A_Login`
- `03A_Routine_List`
- `05A_Workout_Weight`

## 5. Canonical source verification

After the version2 unlink operation, the original canonical page was re-read.

`MVP_전체_와이어프레임` remains:
- top-level nodes = `104`
- MVP screen frames = `96`
- component instances = `1,845`
- component nodes on the MVP page = `0`

The canonical page remains the current approved baseline until a later explicit promotion decision.

## 6. Authority / editing rule

For the current redesign phase:

- `version2` is the PO's direct-edit workspace
- visual changes made by the PO on `version2` are the active redesign material to inspect next
- do not automatically re-bind PO edits to the existing design system while the PO is exploring
- do not mutate the canonical `MVP_전체_와이어프레임` as a side effect of version2 work
- do not update canonical screen inventory / behavior matrix solely because version2 changes visually
- canonical promotion requires explicit PO approval plus affected-scope reconciliation/QA

The previous routine-first redesign checkpoint remains relevant for the already-recorded Home → Routine IA decision and routine ideation provenance:
- `docs/ux-decisions/2026-09-22-routine-main-replaces-home-redesign-checkpoint.md`

## 7. NEXT OPEN ITEM

Continue in DESIGN / FIGMA mode from the PO-edited `version2` page.

Next:
1. PO directly modifies the visual design on `version2`
2. when requested, inspect only the changed/selected version2 screens and help refine them
3. preserve the canonical source page until the PO explicitly approves promotion
4. after the redesign direction is sufficiently closed, reconcile affected IA/navigation/screen inventory/behavior contracts
5. promote only approved affected screens/patterns into canonical Figma
6. run affected-scope Design/Figma QA
7. update implementation handoff only after the redesigned canonical contract is closed

Development remains paused until the Product Owner explicitly resumes it.
