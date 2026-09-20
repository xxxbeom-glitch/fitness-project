# 2026-09-20 Bottom App Bar Light Component Foundation

**Status:** PO REQUESTED · FIGMA REFLECTED · COMPONENT/BINDING QA PASS · ROOT-SCREEN PLACEMENT NOT YET APPLIED

## Scope

This is a targeted fix for the deep-QA finding that the primary app shell had no current canonical Bottom Navigation component.

The Product Owner pointed to the existing Common_Component reference:

- `REF_하단앱바_화면내배치예시` — `2075:8536`

That reference contained a read-only library `Bottom App Bar` instance, so the source master could not be edited in-place.

## Canonical local component

A new local component set was promoted into the current file using the existing reference as the visual source:

- `BottomAppBar` — `2078:2401`

Variants:
- `Active=홈` — `2078:2112`
- `Active=루틴` — `2078:2208`
- `Active=분석` — `2078:2304`
- `Active=설정` — `2078:2400`

Current property:
- `Active = 홈 / 루틴 / 분석 / 설정`

The previous library option `마이` is replaced with the current IA label `설정`.

## Light-theme treatment

Reused existing variables/styles only.

Container:
- fill → `bg/surface` — `VariableID:278:920`
- effect → existing `Elevation/Card`
- existing spacing/radius bindings retained
- previous dark translucent glass fill / GLASS effect removed

Selected tab:
- icon + label → `brand/primary` — `VariableID:278:923`

Unselected tabs:
- icon + label → `text/secondary` — `VariableID:278:943`

Reference screen:
- `REF_하단앱바_화면내배치예시` background → `bg/default` — `VariableID:278:917`
- reference instance now points to the new local `BottomAppBar / Active=홈`

No new color/spacing/radius variables were created.

## Component-preservation note

The existing icon artwork inside the historical reference is vector artwork, not a reusable current shared icon component.

No duplicate icon-component family was created for this task.

The vector artwork was preserved and its stroke/fill color bindings were rebound to the current semantic variables.

## Focused QA

PASS:
- local component set exists on `Common_Component`
- four current IA variants exist
- `설정` replaces `마이`
- container fill is bound to `bg/surface`
- selected label/icon bindings = `brand/primary`
- unselected label/icon bindings = `text/secondary`
- container uses existing `Elevation/Card`
- reference frame uses `bg/default`
- reference instance main component resolves to local `Common_Component` variant
- text overflow = `0`
- component set repositioned to open canvas space without overlapping confirmed component groups
- final reference/component screenshots generated for visual review evidence

## Remaining app-shell work

This checkpoint resolves the **shared component / visual contract** portion of the bottom-navigation gap.

It does **not yet** add BottomAppBar instances to the canonical root screens.

Targeted next step, only after PO confirmation:
- apply the shared BottomAppBar to the applicable root screens
- use the matching Active variant per root
- verify placement/safe-bottom behavior and scroll/content clearance

Do not reopen unrelated screen design.
