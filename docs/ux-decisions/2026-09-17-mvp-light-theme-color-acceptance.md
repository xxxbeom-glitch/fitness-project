# MVP Light Theme Color Acceptance — D / Petrol Teal Tonal

**Status:** PO ACCEPTED · COLOR/SURFACE LOCKED · RADIUS NOT INCLUDED
**Date:** 2026-09-17

## Scope

Product Owner visually reviewed the current `MVP_전체_와이어프레임` light-theme state after the Light-mode synchronization issue was corrected and accepted the color direction/state at this checkpoint.

Canonical Figma:
- file `W3lZurXCXbThP67rF2xk2b`
- page `MVP_전체_와이어프레임` — `34:1076`
- Groups 01–08 consolidated screen set: `98` independent frames

## Final Light-mode synchronization

The earlier issue was not the Light palette definition itself. Some variable-bound fills/strokes were still visually rendering stale dark values even though the screen roots were set to `Colors / Light`.

Final correction:
- all `98 / 98` MVP screen roots explicitly use `Colors / Light`
- variable-bound theme-sensitive fills/strokes inside the 98 screens were synchronized to their resolved Light-mode values
- synchronized variable-bound paints: `5,398`
- post-sync Light-variable actual-value mismatch count: `0`
- large unintended dark-surface residue checked after sync: `0`

Representative screenshot verification after synchronization:
- `03A_Routine_List_Recommended`
- `04A_Search`
- `04B_Search_Selected`
- `05A_Workout_Weight`
- `05A_Workout_Weight_Scrolled_3rdExercise`

The Product Owner then refreshed/reopened the canonical Figma file, confirmed the same current state, and explicitly accepted the color result: `컬러는 일단 오케이`.

## Accepted color/surface baseline

- Brand `#218F8A`
- Primary Action / CTA `#1A7E79`
- Primary Soft `#DCEFED`
- Canvas `#F6F7F7`
- Surface `#FFFFFF`
- Subtle Surface `#EFF2F2`
- Border / Subtle `#EAEEED`
- Border / Default Control `#E3E8E7`
- Text Primary `#151918`
- Text Secondary `#626866`
- Text Tertiary `#929A98`
- Success `#4F8A61`
- Danger `#C85A64`
- content/grouped cards: white surface, no outer border, subtle shared elevation
- standard dialogs/sheets/popups: solid light surface, no standard background blur/glass

## Design-system structure retained

- `Colors` collection retains `Dark / Light` modes
- semantic variables remain the canonical source for theme-sensitive colors
- registered Paint/Effect styles remain reusable system assets
- Common_Component theme-sensitive masters remain bound to semantic roles
- no Cursor/development handoff

## Boundary

This acceptance locks the **current color/surface direction and Light-mode visual result only**.

It does **not** approve the separate size-aware radius experiment. Radius remains preview-only until the Product Owner explicitly approves propagation into shared Radius/component rules.

Groups 03–08 remain product/UX closed; this visual-system acceptance does not reopen their product behavior or flows.
