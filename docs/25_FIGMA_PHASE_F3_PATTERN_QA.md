# 25 FIGMA PHASE F3 PATTERN QA

**Status:** FAIL — ONE TOPBAR STRUCTURAL BLOCKER REMAINS  
**Updated:** 2026-08-28

## Scope

Independent QA of Phase F3 in Figma file `tracker-app3` (`tBpQfpAR1apJngF8a7qyH9`) after the latest Figma Agent structural cleanup.

Canonical references:
- `docs/15_TONAL_DESIGN_SYSTEM_SPEC.md`
- `docs/16_FIGMA_TONAL_BUILD_INSTRUCTIONS.md`
- `docs/17_FIGMA_AGENT_EXECUTION_QA.md`
- `docs/24_FIGMA_PHASE_F2_COMPONENT_QA.md`

F3 remains gated until QA-1 Structure and QA-2 Design-system / Binding both pass.

---

## Current inventory

Pages:
- `01_FOUNDATIONS`
- `02_COMPONENTS`
- `03_PATTERNS`

No later-phase pages exist:
- no `Examples`
- no `10_FITNESS_SCREENS`

STOP discipline remains respected.

---

## Latest remediation items now verified PASS

### TopBar architecture / API
- parent `Navigation/TopBar` variant count = **6**, not 72
- parent variants = `Surface x TitleMode`
- parent exposes `Leading` as **INSTANCE_SWAP**
- parent exposes `Trailing` as **INSTANCE_SWAP**
- parent still exposes `Title` text property
- `Surface = Light | Dark | Overlay`
- `TitleMode = Center | Contextual`

### TopBar nested controls
- `Navigation/TopBar/Leading` variants = 3
- internal overlap = **0**
- Back = 44 x 44
- Close = 44 x 44
- visual icon inside = 24 x 24

- `Navigation/TopBar/Trailing` variants = 4
- internal overlap = **0**
- Text = 44 x 44
- IconSlot = 44 x 44
- Multiple = **88 x 44**
- None = empty mode

### Parent TopBar hit geometry
For the current parent master variants:
- Leading instance = **44 x 44**
- Trailing single-action instance = **44 x 44**
- visual icon remains 24 x 24

The previous 24pt interaction-width regression is fixed.

### Row component-set organization
`Row/Settings`:
- variants = 15
- internal overlap = **0**
- set bounds = **1066 x 455**
- all variants contained = **true**

`Row/Movement`:
- variants = 18
- internal overlap = **0**
- set bounds = **1066 x 687**
- all variants contained = **true**

### Dialog / Sheet overlays
Dialog:
- variants = 12
- explicit semantic `Scrim` exists in all 12 variants
- every Scrim = **390 x 844**
- every Scrim = x 0 / y 0 / absolute

Sheet:
- Scrim remains **390 x 844**

### Regression checks still PASS
- top-level overlap = **0**
- BottomBar Active variants = 1–5
- Tab Active/Inactive outer height = 50
- Settings nested Toggle = 52 x 32
- Dialog nested actions remain 54pt high
- Sheet actions remain 54pt high
- raw canonical spacing = **0**
- unstyled text = **0**
- suspicious text collapse = **0**
- F1/F2 assets remain present
- no later-phase page was created

---

## Remaining blocker — Center TopBar side-action anchoring is structurally wrong

The centered title itself is now robust:
- `TitleMode=Center` uses an absolute `TitleRegion`
- Title center X = **195** in the 390pt bar
- delta from parent center = **0**

However, removing the centered title region from normal Auto Layout flow exposed a new structural defect.

In all current `TitleMode=Center` parent variants:
- Leading instance = x **4**, width 44
- Trailing instance = x **48**, width 44

This means the trailing action is packed directly after the leading action on the **left side** instead of being anchored to the right edge.

By contrast, current `TitleMode=Contextual` variants correctly place:
- Leading = x 4
- Trailing = x 342

So the latest cleanup solved optical title centering but broke side-action placement specifically in Center mode.

### Why this matters
A center navigation bar must satisfy both conditions simultaneously:
1. the title remains optically centered independently of asymmetric actions
2. Leading remains anchored left and Trailing remains anchored right

The current Center implementation only satisfies condition 1.

### Required remediation
Keep:
- parent variant count = 6
- existing INSTANCE_SWAP Leading / Trailing API
- 44 x 44 interaction wrappers
- 24 x 24 visual icons
- absolute optically centered TitleRegion

Fix only Center-mode side-action anchoring.

Acceptable architectures include:
- independent absolute Leading / Trailing action zones with left/right anchors
- a dedicated full-width side-action overlay containing left and right fixed zones
- another stable structure that preserves true center while pinning actions to opposite edges

Required geometry on 390 baseline for a single 44pt action with current 4pt edge inset:
- Leading x ≈ **4**
- Trailing x ≈ **342**

For `Trailing=Multiple`:
- trailing wrapper = 88 x 44
- right edge remains anchored to the bar edge inset
- expected x ≈ **298** with current 4pt inset

Do not solve by moving the centered title away from x=195.

### Required stress combinations
Verify Center mode with:
- Leading=Back + Trailing=Text
- Leading=Back + Trailing=Multiple
- Leading=None + Trailing=Text
- Leading=None + Trailing=Multiple

For each:
- title center X = 195
- leading action anchored left when present
- trailing action anchored right when present
- no title/action overlap
- 44pt minimum interaction geometry preserved

---

## Current verdict

### QA-1 — Structure / Auto Layout
**FAIL**

Only remaining blocker:
- `TitleMode=Center` places Trailing next to Leading on the left instead of anchoring it to the right.

### QA-2 — Design-system / Binding / API
**PASS**

Verified:
- reduced 6-variant parent architecture
- Leading / Trailing parent-controllable INSTANCE_SWAP properties
- nested component reuse
- canonical spacing binding
- Text Styles
- semantic component APIs

### Visual sanity
**PARTIAL PASS**

The system is materially improved and most F3 structures are now clean, but Center TopBar side actions are not yet valid for real composition.

### F3 status
**NOT READY FOR NEXT PHASE**

---

## Required next action

Remain in F3 for one very narrow TopBar-only remediation:
1. keep centered title at true parent center
2. anchor Center-mode Leading to the left action zone
3. anchor Center-mode Trailing to the right action zone
4. verify Text / IconSlot / Multiple / None swaps do not break anchoring
5. rerun TopBar QA plus regression checks
6. STOP before `Examples` or Fitness screens
