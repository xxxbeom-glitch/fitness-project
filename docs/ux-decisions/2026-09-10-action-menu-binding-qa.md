# Action Menu Design-System Binding QA — 2026-09-10

**Status:** PASS AFTER FIX

## Scope

Focused QA only for the newly reflected action-menu work. Previously approved Group 03/04/05 ranges were not reopened.

Checked Figma:

- file: `W3lZurXCXbThP67rF2xk2b`
- local `ActionRows` component set — `707:1114`
- local `ActionSheet` component set — `707:1197`
- `05I_Workout_Menu` — `148:3392`
- `03A_Routine_List_Menu` — `706:5023`
- `03F_Routine_Exercise_Menu` — `706:5087`
- new local icons: `icon/replace` `706:954`, `icon/trash` `706:959`, `icon/copy` `706:965`

## Initial QA finding

Component ownership was already local and instance main links were intact, but the newly localized action-menu family still contained raw visual values in several places:

- `ActionRows` variant surface / border colors were raw values
- action labels had raw text color and no local text-style binding
- action dividers had raw fill color
- new `replace / trash / copy` icon vectors had raw foreground colors
- `ActionSheet` surface color was raw
- `ActionSheet` title / subtitle text had raw color and no local typography-style binding

This was a design-system binding defect, not a Product/UX change.

## Fix applied

Rebound to existing local Fitness design-system assets only; no new token was created.

### ActionRows

- surface → `bg/default`
- border color → `border/default`
- existing border thickness binding retained
- action label typography → `label/02`
- action label color → `text/primary`
- dividers → `bg/elevated`
- existing local spacing / radius bindings retained

### Action icons

- `icon/replace`
- `icon/trash`
- `icon/copy`

All visible vector foreground paints now bind to local `text/primary`, matching the existing local icon treatment. Existing `icon/edit` and `icon/drag-handle` were already local/bound and were not rebuilt.

### ActionSheet

- sheet surface → `glass/surface-20`
- title typography → `heading/01`
- title color → `text/primary`
- subtitle typography → `body/02`
- subtitle color → `text/secondary`
- existing local spacing / radius / handle / CTA bindings retained

## Post-fix binding read-back

### `ActionRows` `707:1114`

- 4 variants surface bound: PASS
- 4 variants border bound: PASS
- 11 action labels with local text style: PASS
- 11 action labels with local color variable: PASS
- 7 dividers with local color variable: PASS
- missing instance main: 0
- remote instance main: 0
- missing Variable: 0
- remote Variable: 0
- missing Style: 0
- remote Style: 0

### `ActionSheet` `707:1197`

- all 3 sheet variants local surface-bound: PASS
- direct title/subtitle typography and color bindings: PASS
- missing instance main: 0
- remote instance main: 0
- missing Variable: 0
- remote Variable: 0
- missing Style: 0
- remote Style: 0

### New icon masters

- `icon/replace`: 4 vector paints, unbound = 0
- `icon/trash`: 3 vector paints, unbound = 0
- `icon/copy`: 2 vector paints, unbound = 0

### Affected representative screens

`05I_Workout_Menu`:

- missing main 0 / remote main 0
- missing Variable 0 / remote Variable 0
- missing Style 0 / remote Style 0

`03A_Routine_List_Menu`:

- missing main 0 / remote main 0
- missing Variable 0 / remote Variable 0
- missing Style 0 / remote Style 0

`03F_Routine_Exercise_Menu`:

- missing main 0 / remote main 0
- missing Variable 0 / remote Variable 0
- missing Style 0 / remote Style 0

## Duplicate-master check

On `MVP_공용_UI` there is exactly one local master set for each newly introduced family:

- `ActionRows` — `707:1114`
- `ActionSheet` — `707:1197`

No duplicate same-role master was introduced.

## Visual regression read-back

Focused post-binding screenshots checked:

- `05I_Workout_Menu` — PASS
- `03A_Routine_List_Menu` — PASS
- `03F_Routine_Exercise_Menu` — PASS

The binding repair did not change the approved layout, action order, copy, panel-vs-bottom-sheet behavior, or visible hierarchy.

## Final result

**PASS — newly reflected action-menu range is design-system bound.**

Do not reopen this binding QA without a new conflicting change.

## Next open item

Return to Product/UX review of:

- `05N_Workout_OtherRoutine` — `148:3561`

No Cursor implementation handoff.
