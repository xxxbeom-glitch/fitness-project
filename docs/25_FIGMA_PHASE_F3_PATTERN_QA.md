# 25 FIGMA PHASE F3 PATTERN QA

**Status:** FAIL — THIRD CLEANUP REQUIRED BEFORE NEXT PHASE  
**Updated:** 2026-08-28

## Scope

Independent QA of Phase F3 in Figma file `tracker-app3` (`tBpQfpAR1apJngF8a7qyH9`) after the Figma Agent completed the second F3 cleanup pass.

Canonical references:
- `docs/15_TONAL_DESIGN_SYSTEM_SPEC.md`
- `docs/16_FIGMA_TONAL_BUILD_INSTRUCTIONS.md`
- `docs/17_FIGMA_AGENT_EXECUTION_QA.md`
- `docs/24_FIGMA_PHASE_F2_COMPONENT_QA.md`

F3 remains gated until QA-1 Structure and QA-2 Design-system / Binding both pass.

---

## Current inventory

Pages remain:
- `01_FOUNDATIONS`
- `02_COMPONENTS`
- `03_PATTERNS`

No later-phase pages exist:
- no `Examples`
- no `10_FITNESS_SCREENS`

All expected F3 families still exist.

---

## Previously failing items now verified PASS

- top-level overlap = 0
- BottomBar Active 1–5 API exists
- Tab Active/Inactive outer height = 50 for all variants
- Settings Tone API exists
- Settings nested Toggle instances = 52 x 32
- Movement Trailing and Meta mode APIs exist
- BlockHeader = 342 x 54
- Dialog Body / Secondary / Tone APIs exist
- Dialog nested actions = 54pt height
- Sheet overlay reference = 390 x 844 and bottom aligned
- Sheet nested actions = 54pt height
- raw canonical spacing = 0
- unstyled F3 text = 0
- suspicious text-collapse = 0
- parent TopBar variant explosion reduced from 72 to 6
- Row/Settings and Row/Movement child-to-child overlaps are now 0

---

## Remaining blocker 1 — TopBar nested controls are not actually 44pt in the parent

The new architecture correctly introduces:
- `Navigation/TopBar/Leading`
- `Navigation/TopBar/Trailing`
- parent `Navigation/TopBar` with only 6 variants (`Surface x TitleMode`)

However, independent inspection of the parent variants shows the nested instances are being HUG-compressed to the visual icon width:

Typical parent variant:
- `Leading` instance = **24 x 44**
- `Trailing` instance = **24 x 44**

The nested source components themselves define 44pt wrappers, but the instances inside the parent no longer preserve that width.

This means the component visually shows a 24pt square and also exposes only a 24pt horizontal hit region in the parent, which violates `Size/Touch/Minimum = 44`.

Required remediation:
- single leading actions must occupy a **44 x 44** wrapper in the parent
- single trailing text/icon actions must occupy a **minimum 44 x 44** wrapper in the parent
- the visual icon remains 24 x 24 inside the wrapper
- `Trailing=Multiple` may occupy 88 x 44
- do not solve this by enlarging the visual icon

---

## Remaining blocker 2 — TopBar Leading / Trailing are not exposed as parent-controllable properties

Parent `Navigation/TopBar` currently exposes only:
- `Title` text
- `Surface = Light | Dark | Overlay`
- `TitleMode = Center | Contextual`

It does **not** expose a parent-level controllable `Leading` or `Trailing` property / instance-swap control.

The nested instances exist, but a user/agent must drill into the component internals to swap them. This fails the machine-readable reusable API goal.

Required remediation:
- expose parent-controllable leading and trailing choices, using instance-swap or exposed nested component properties where stable
- preserve the reduced 6-variant parent architecture
- do not return to the previous 72-variant Cartesian product

Required semantic capability:
- Leading = Back | Close | None
- Trailing = Text | IconSlot | Multiple | None

---

## Remaining blocker 3 — centered-title behavior is not robust to asymmetric actions

The current parent TopBar uses a normal horizontal Auto Layout:
- Leading instance
- FILL TitleRegion
- Trailing instance

Because the action zones can differ in width (e.g. 44 vs 88, or None vs Text), `TitleMode=Center` can shift when the leading and trailing controls are asymmetric.

Canonical requirement:
- centered title remains optically centered independently of side-action width

Required remediation:
- for `TitleMode=Center`, reserve symmetric action zones or use an independent optical-center strategy
- contextual title may remain flow-based
- verify with at least:
  - Leading=Back + Trailing=Text
  - Leading=Back + Trailing=Multiple
  - Leading=None + Trailing=Text

---

## Remaining blocker 4 — new nested Leading/Trailing component sets still overlap internally

Independent counts:
- `Navigation/TopBar/Leading`: 3 variants, internal overlaps = **3**
- `Navigation/TopBar/Trailing`: 4 variants, internal overlaps = **6**

The variants are stacked on the same coordinates inside their component sets.

Additionally:
- `Trailing Mode=Multiple` currently reports **88 x 100**, not the expected compact **88 x 44** two-action geometry.

Required remediation:
- arrange nested variants without overlap
- keep each source variant's intended geometry
- `Text` = 44 x 44 minimum
- `IconSlot` = 44 x 44
- `Multiple` = 88 x 44
- `None` may be visually empty, but must not break parent optical-center behavior

---

## Remaining blocker 5 — Row component-set bounds were not resized after variant rearrangement

The child variants no longer overlap, but the component-set frames do not contain the rearranged variants.

### Row/Settings
- component-set frame = **342 x 455**
- actual child extent = approximately **1066 x 455**
- `contained = false`

### Row/Movement
- component-set frame = **342 x 317**
- actual child extent = approximately **1066 x 687**
- `contained = false`

This causes only the first column/portion to be represented by the component-set bounds and makes the library artifact harder to inspect and screenshot.

Required remediation:
- resize each component set to contain all variants after grid rearrangement
- preserve child positions, APIs, bindings, and visual geometry
- child overlap must remain 0

---

## Remaining blocker 6 — Dialog Scrim layers do not fill the full 390 x 844 viewport

Explicit semantic `Scrim` children now exist, which is an improvement.

However, independent inspection found the 12 Dialog scrims have varying heights such as:
- 702
- 640
- 652
- 590
- 634
- 572

instead of the full 844pt viewport height.

All Dialog variants themselves remain 390 x 844.

Required remediation:
- every Dialog `Scrim` child = **390 x 844**
- absolute at x=0, y=0
- 50% black dimming
- DialogSurface remains centered above it
- do not change dialog surface/action geometry

Sheet `Scrim` is already correctly 390 x 844 and must not regress.

---

## Current visual note

The new TopBar is visually much cleaner than the 72-variant version and the user-visible layout is close to the intended direction.

However, the visible 24pt action squares should be understood as visual icon placeholders only. The parent interaction wrapper is currently also compressed to 24pt, so the structure is still incorrect even though the screenshot looks plausible.

---

## Current verdict

### QA-1 Structure / Auto Layout
**FAIL**

Blocking reasons:
- TopBar nested action instances shrink to 24 x 44 in the parent
- centered-title behavior is not robust to asymmetric actions
- Leading/Trailing nested sets overlap internally
- `Trailing=Multiple` is 88 x 100 instead of 88 x 44
- Row component-set bounds do not contain their variants
- Dialog Scrim children do not fill 390 x 844

### QA-2 Design-system / Binding
**FAIL**

Blocking reason:
- Leading / Trailing semantic choices are not exposed as parent-controllable TopBar properties

Passed QA-2 checks:
- raw canonical spacing = 0
- unstyled text = 0
- no text collapse
- existing F1/F2 nested instances remain intact

### Visual sanity
**PASS / STRUCTURE STILL BLOCKING**

The visual direction is coherent, but structural correctness is not yet sufficient for a reusable agent-readable system.

### F3 status
**NOT READY FOR NEXT PHASE**

---

## Required next action

Remain in F3 for one narrow cleanup pass only:
1. preserve 44pt parent hit wrappers for nested TopBar controls
2. expose Leading / Trailing as parent-controllable properties without restoring 72 variants
3. make centered-title behavior robust to asymmetric actions
4. arrange nested Leading / Trailing component variants without overlap and fix Multiple to 88 x 44
5. resize Settings / Movement component-set bounds to contain all variants
6. make all Dialog Scrim children 390 x 844
7. rerun QA-1 / QA-2
8. STOP before `Examples` or Fitness screens
