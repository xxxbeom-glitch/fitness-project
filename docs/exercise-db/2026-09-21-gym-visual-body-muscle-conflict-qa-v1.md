# Body / muscle conflict QA — active MVP v1

**Date:** 2026-09-21  
**Status:** ACTIVE MVP CONFLICT PASS COMPLETE · 148 / 148 RESOLVED

## Scope

- active MVP rows carrying `BODY_MUSCLE_FAMILY_CONFLICT`: **148**
- excluded/review catalog rows are not blockers for this active-MVP pass

## Resolution rule

Major body part is not overwritten merely to make a heuristic muscle rule agree.

Specific well-understood movement families are corrected directly:
- close-grip / JM bench press → triceps-led
- upright row → shoulder/trapezius-led
- rear-delt / reverse-fly → rear deltoid-led
- obvious core leg-raise / knee-raise / crunch families → core
- chest dip → chest/triceps
- clear leg-curl / hip-thrust cases → lower body

For compound or ambiguous mixed movements, the existing supported major body part is preserved and detailed primary/secondary muscle fields are intentionally left blank. The product requirement allows muscle detail only where supported; blank is preferable to false precision.

## Result

- resolved active-MVP conflict rows: **148**
- detailed muscle fields intentionally blanked as unsupported/compound: **76**
- AUTO_DRAFT_COMPLETE after this pass: **920**
- MANUAL_QA_REQUIRED after this pass: **3227**

## Artifact

- `data/exercises/gym-visual/v1/semantic/gym_visual_body_muscle_conflict_resolution_v1.csv`

## NEXT

Unresolved core-equipment naming + catalog relevance review, especially the large bodyweight source pool.