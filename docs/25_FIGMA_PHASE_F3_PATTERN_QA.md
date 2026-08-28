# 25 FIGMA PHASE F3 PATTERN QA

**Status:** FAIL — SECOND REMEDIATION REQUIRED BEFORE NEXT PHASE  
**Updated:** 2026-08-28

## Scope

Independent QA of Phase F3 in Figma file `tracker-app3` (`tBpQfpAR1apJngF8a7qyH9`) after the Figma Agent completed the first F3 remediation pass.

Canonical references:
- `docs/15_TONAL_DESIGN_SYSTEM_SPEC.md`
- `docs/16_FIGMA_TONAL_BUILD_INSTRUCTIONS.md`
- `docs/17_FIGMA_AGENT_EXECUTION_QA.md`
- `docs/24_FIGMA_PHASE_F2_COMPONENT_QA.md`

F3 remains gated until QA-1 Structure and QA-2 Design-system / Binding both pass.

---

## Verified current Figma inventory

Pages:
- `01_FOUNDATIONS`
- `02_COMPONENTS`
- `03_PATTERNS`

Later-phase pages are still absent:
- no `Examples`
- no `10_FITNESS_SCREENS`

STOP discipline remains respected.

All expected F3 families exist:
- `Navigation/TopBar`
- `Navigation/BottomBar`
- `Tab/Underline`
- `Row/Settings`
- `Row/Movement`
- `Workout/BlockHeader`
- `Dialog/Center`
- `Sheet/Action`
- `Feedback/Toast`

Missing canonical F3 families: **0**.

---

## First-remediation items now verified PASS

### 1. Top-level organization
- top-level overlap count = **0**
- previous `Tab/Underline` ↔ `Row/Settings` overlap is fixed

### 2. `Navigation/BottomBar`
- now a component set with `Active = 1 | 2 | 3 | 4 | 5`
- 5 equal items remain intact
- selected item uses inverse/high-contrast semantic color
- inactive items use muted semantic color

### 3. `Tab/Underline`
- Active / Inactive variants now share the same outer height
- all four variants are height **50**
- layout jump is removed

### 4. `Row/Settings`
- `Tone = Default | Destructive | Disabled` now exists
- nested `Control/Toggle` instances are restored to **52 x 32** in all tone variants

### 5. `Row/Movement`
- controlled `Trailing = Chevron | Drag | None` now exists
- controlled `Meta = SingleLine | MultiLine` now exists

### 6. `Workout/BlockHeader`
- representative base geometry is now **342 x 54**
- black surface, text hierarchy, meta, and overflow structure remain intact

### 7. `Dialog/Center`
- now a component set with:
  - `Body = None | Text | CustomSlot`
  - `Secondary = None | TextAction`
  - `Tone = Default | DestructiveConfirmation`
- each overlay variant uses the 390 x 844 reference viewport
- dialog surface is 342 wide and centered
- nested F2 actions are restored to **54pt** height
- no collapsed 16/18pt action instances remain

### 8. `Sheet/Action`
- now uses a 390 x 844 overlay reference
- sheet surface is bottom aligned
- primary, destructive, and neutral nested F2 actions are all **54pt** high

### 9. Spacing / typography sanity
- avoidable raw canonical spacing = **0**
- unstyled F3 text = **0**
- suspicious near-zero-width / character-by-character text collapse = **0**

---

## Remaining blocking issue 1 — TopBar trailing text hit target is only 30 x 44

The user-visible `Save` action looked too close to the right edge. Independent inspection shows the reason precisely:

For `Surface=Dark, Leading=Back, Trailing=Text, TitleMode=Center`:
- component width = 390
- outer left/right padding = **4**, correctly bound to `Space/4`
- `TrailingSlot` = **30 x 44**, horizontal `HUG`
- `Save` text width = 30
- trailing slot starts at x=356 and ends at x=386
- therefore the visible label ends only **4pt** from the right edge

This means the parent padding is **not being ignored**. The current implementation is actually applying a 4pt outer edge inset.

However, the canonical navigation contract requires leading/trailing interactive wrappers to remain at least **44 x 44**. The text trailing slot is only 30pt wide, so it fails the touch-target requirement and is visually too edge-close.

Required remediation:
- `Trailing=Text` must use a minimum/fixed **44 x 44** interaction wrapper
- keep `TrailingLabel` content-driven inside the wrapper
- do not make the text itself 44pt wide
- preserve optical title behavior
- do not automatically change the outer 4pt inset to 24pt; top-bar actions are not ordinary page content
- treat the exact visual edge inset as still provisional and tune it later against representative Tonal reference screens if necessary

Current verdict:
- outer padding behavior: **working as implemented**
- text-action touch wrapper: **FAIL**
- exact 4pt edge inset: **not frozen as a final Tonal policy**

---

## Remaining blocking issue 2 — TopBar variant explosion

`Navigation/TopBar` now contains **72 variants**:

`3 Surface x 3 Leading x 4 Trailing x 2 TitleMode = 72`

The API is complete, but this violates the Figma execution rule to avoid theoretical Cartesian-product variant explosion when a smaller nested-property architecture can represent the same system.

The result is a component set over 4,300pt tall and unnecessarily expensive for agents/designers to inspect and maintain.

Required remediation:
- keep the same public semantic API
- reduce the parent TopBar variant count substantially
- recommended architecture:
  - parent variants: `Surface` and `TitleMode` only, or similarly small stable axes
  - nested reusable leading control: `Back | Close | None`
  - nested reusable trailing control: `Text | IconSlot | Multiple | None`
  - expose nested control/property choices through the parent where practical
- preserve the existing 48pt bar, 44pt touch target, placeholders, and title behavior

Do not reduce capability; reduce duplicated combinations.

---

## Remaining blocking issue 3 — internal variants overlap inside Row component sets

Top-level F3 families no longer overlap, but many variants **inside** two component sets are stacked on the same coordinates.

Independent counts:
- `Row/Settings`: 15 variants, **15 internal overlaps**
- `Row/Movement`: 18 variants, **45 internal overlaps**

Examples:
- Settings Default / Destructive / Disabled variants for the same trailing mode occupy the same x/y position
- Movement Trailing / Meta combinations for the same leading mode occupy the same x/y position

The components can still function, but the library page is not inspectable and the component-set organization is not clean enough for the intended agent-readable design system.

Required remediation:
- rearrange variants inside each component set into a non-overlapping grid or vertical sequence
- do not change the variant API, visual geometry, bindings, or component internals
- internal variant overlap count must become **0**

---

## Remaining QA-2 issue 4 — Dialog/Sheet scrim is encoded as root fill, not a named Scrim layer

The remediation did add dimming visually:
- Dialog overlay root uses 50% black fill
- Sheet overlay root uses 50% black fill

So the visual scrim exists.

However, the requested machine-readable anatomy was:

`Overlay -> Scrim + DialogSurface`

and

`Overlay -> Scrim + SheetSurface`

Current variants expose only `DialogSurface` / `SheetSurface` as child layers; the root component fill itself acts as the scrim.

This is visually acceptable but weaker for agent readability and future overlay effects.

Required remediation:
- prefer an explicit semantic child named `Scrim`
- `Scrim` fills the viewport and carries the dim fill
- `DialogSurface` / `SheetSurface` remain separate siblings
- do not alter current surface size, radius, or nested action geometry

This is a structural/machine-readability requirement, not a request for visual redesign.

---

## Passed items that must not regress

- F1 PASS assets unchanged
- F2 PASS assets unchanged
- missing F3 families = 0
- top-level overlap = 0
- BottomBar Active 1–5 API
- Tab equal state heights = 50
- Settings `Tone` API
- Settings nested Toggle = 52 x 32
- Movement controlled trailing/meta modes
- BlockHeader = 342 x 54
- Dialog 12 canonical variants
- Dialog nested actions = 54pt
- Sheet bottom alignment
- Sheet nested actions = 54pt
- raw canonical spacing = 0
- unstyled text = 0
- text collapse = 0
- no later-phase pages

---

## Current F3 verdict

### QA-1 — Structure / Auto Layout
**FAIL**

Remaining blockers:
- TopBar `Trailing=Text` wrapper is 30 x 44 instead of minimum 44 x 44
- `Row/Settings` internal variant overlap = 15
- `Row/Movement` internal variant overlap = 45

### QA-2 — Design-system / Binding
**FAIL**

Remaining blockers:
- TopBar 72-variant Cartesian explosion conflicts with the no-variant-explosion rule
- Dialog/Sheet scrim is visually present but not represented as an explicit semantic `Scrim` child layer

### Visual sanity
**PASS WITH ONE PROVISIONAL EDGE-INSET NOTE**

The coarse Tonal reconstruction language is now coherent. The top-bar text action appears too close to the edge mainly because its wrapper hugs the 30pt label; fix the hit wrapper before judging the final visual inset.

### F3 status
**NOT READY FOR NEXT PHASE**

---

## Required next action

Remain in F3 for one focused cleanup pass:
1. give TopBar text trailing actions a minimum 44 x 44 wrapper
2. refactor the 72-variant TopBar architecture to avoid Cartesian variant explosion while preserving the same semantic API
3. arrange `Row/Settings` and `Row/Movement` variants without internal overlap
4. add explicit semantic `Scrim` child layers to Dialog and Sheet overlays
5. rerun QA-1 / QA-2
6. verify no regressions in all previously passed F3 remediation items
7. STOP before `Examples` or Fitness screens
