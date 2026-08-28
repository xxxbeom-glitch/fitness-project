# 22 TONAL PRE-FIGMA CONSOLIDATION QA

**Status:** PASS — FIGMA BUILD MAY START WITH PROVISIONAL TOKENS
**Updated:** 2026-08-28

## Purpose

This gate consolidates the Tonal reconstruction work before any broad Figma design-system generation begins.

Reviewed sources:
- `docs/09_DESIGN_SYSTEM.md`
- `docs/18_TONAL_FOUNDATIONS_AUDIT.md`
- `docs/19_TONAL_CORE_COMPONENTS_AUDIT.md`
- `docs/20_TONAL_INTERMEDIATE_QA_BATCH01_02.md`
- `docs/21_TONAL_PRODUCT_PATTERNS_AUDIT.md`
- `docs/16_FIGMA_TONAL_BUILD_INSTRUCTIONS.md`
- `docs/17_FIGMA_AGENT_EXECUTION_QA.md`

The goal is not to prove Tonal's private source tokens. The goal is to make one coherent, executable, internally consistent reconstruction specification for Figma.

---

## 1. Overall gate result

**PASS.**

The reconstructed system is coherent enough to start Figma Phase-A construction.

The build must still treat numeric and color values as **PROVISIONAL** until actual Figma reconstruction screens pass screenshot comparison.

The canonical implementation-facing source after this gate is:

`docs/15_TONAL_DESIGN_SYSTEM_SPEC.md`

The Batch 01–03 documents remain evidence/provenance. If a numeric value, component name, or semantic role in an audit document conflicts with the consolidated spec, the consolidated spec wins until a later QA-approved correction updates it.

---

## 2. Conflict audit and canonical resolutions

### 2.1 Primary-button family

Earlier documents use both `Button/Primary/Onboarding` and generic `Button/Primary/Black` naming.

**Canonical resolution:**
- `Button/Primary/Compact`
- `Button/Primary/Content`
- `Button/Primary/Inverse`
- `Button/Secondary/Outline`
- `Button/Text/Neutral`
- `Button/Text/Destructive`

The compact family covers the repeated Tonal geometry used by onboarding and other centered compact actions. Do not create duplicate onboarding-only geometry unless visual QA proves it materially different.

**Result: RESOLVED**

### 2.2 Surface/background roles

A single `Canvas` token is insufficient because Tonal repeatedly uses:
- pure-white detail/stat pages
- subtle cool-gray dashboard/editor canvases
- near-black immersive/media surfaces
- white modules on subtle canvas

**Canonical resolution:**
- `Color/Surface/Canvas/Base`
- `Color/Surface/Canvas/Subtle`
- `Color/Surface/Canvas/Dark`
- `Color/Surface/Card`

**Result: RESOLVED**

### 2.3 Accent roles

One global green accent does not explain the screenshots.

**Canonical resolution:**
- `Color/Accent/Positive`
- `Color/Accent/Info`
- `Color/Accent/Achievement`
- `Color/Accent/Negative`
- `Color/Action/Destructive`

Accent is semantic/data-led rather than decorative.

**Result: RESOLVED FOR ROLE MODEL; HEX VALUES REMAIN PROVISIONAL**

### 2.4 Typography scale

The older implementation spec over-sized several roles compared with the focused Batch 01 and Batch 03 evidence.

**Canonical correction:**
- onboarding question: `24 / 30`
- screen heading: `24 / 30`
- section heading: `20 / 24`
- nav title: `16 / 22`
- metric XL: `40 / 44`
- metric L: `30 / 34`
- metric M: `22 / 26`
- primary action label: `12 / 16`

These remain screenshot-derived working values and must be tuned centrally if Figma QA finds systematic mismatch.

**Result: RESOLVED PROVISIONALLY**

### 2.5 Radius system

A generic medium card radius and one generic sheet radius would over-round the reconstruction.

**Canonical resolution:**
- `Radius/None = 0`
- `Radius/Rect = 4`
- `Radius/Dialog = 4`
- `Radius/SheetTop = 20` provisional
- `Radius/Pill = 999`
- `Radius/Circle = 999`

Standard cards/buttons remain square or subtly rounded. Pill/circle geometry is reserved for controls and genuinely circular patterns.

**Result: RESOLVED**

### 2.6 Top navigation height

An older `56` target conflicts with focused screenshot evidence around a compact content bar.

**Canonical resolution:**
- top-navigation content height: `48` provisional
- system safe area handled separately
- leading/trailing interaction wrappers: minimum `44 x 44`

**Result: RESOLVED PROVISIONALLY**

### 2.7 Choice-card geometry

Earlier broad ranges were unnecessarily tall.

**Canonical resolution:**
- label-only card: min-height `56`
- label + helper card: min-height `90`
- width `FILL`
- height `HUG + min-height`
- horizontal padding `20`
- vertical padding `16`

**Result: RESOLVED PROVISIONALLY**

### 2.8 Component vs pattern separation

A universal `Card` or universal `Hero` would create inconsistent behavior.

**Canonical resolution:**
Keep separate families for:
- choice cards
- dashboard metric modules
- media cards
- settings rows
- movement rows
- workout block headers
- centered dialogs
- bottom action sheets
- program/workout/exercise hero variants

**Result: RESOLVED**

### 2.9 Tonal active session vs Fitness active logging

Tonal's active workout is strongly video/hardware-centric and conflicts with confirmed Fitness logging-first behavior.

**Canonical resolution:**
- Tonal active-session screenshots are visual evidence only for dark/media states
- Fitness active logging remains Hevy-led functionally
- Tonal foundations/components may style that functional structure

**Result: RESOLVED**

---

## 3. Fixed / Hug / Fill consistency QA

**PASS.**

No cross-batch contradiction remains in the sizing model.

Canonical rules:
- page-width rows/cards/sections: horizontal `FILL`
- content-driven vertical stacks: vertical `HUG`
- variable-copy cards/rows: vertical `HUG + min-height`
- icon/avatar/toggle/stepper slots: `FIXED`
- row left content: `FILL`
- row trailing values/actions: `HUG` or `FIXED`
- compact primary CTA: `FIXED` reconstruction width
- content primary CTA: `FILL` inside an intentionally constrained wrapper
- hero media: horizontal `FILL`, vertical `FIXED` or aspect-controlled by explicit variant
- chart region: horizontal `FILL`, vertical `FIXED` by chart pattern
- carousel viewport: `FILL`, inner horizontal item stack `HUG`, cards fixed/constrained

Absolute positioning remains limited to genuine overlays, optically centered independent top-bar title cases, and intentionally floating controls.

---

## 4. Alignment QA

**PASS.**

Canonical alignment rules:
- onboarding question/helper: center
- button labels: center
- normal body/detail/settings/form content: left
- choice-card body: left even when the screen question is centered
- top-bar title: optically centered
- trailing row values: right when comparison/scanning benefits
- metric tables: stable numeric columns, non-wrapping values
- metric value + unit: baseline-aligned horizontal composition

Do not center explanatory content merely for visual polish.

---

## 5. Layout-grid QA

**PASS WITH SCOPE LIMIT.**

Safe global rules:
- reference reconstruction width `390`
- primary page inset `24`
- compact/internal inset `16`
- 4 pt spacing family

The only multi-column pattern currently strong enough to formalize is:
- `Dashboard/MetricGrid2` — two equal `FILL` children with `8–12` gap

Do not invent a global 4/6/12-column mobile grid from screenshots that do not support it.

---

## 6. Product-pattern QA

**PASS.**

The Phase-A pattern inventory is coherent and can be implemented without inventing new Fitness behavior:
- dashboard subtle-canvas modules
- feature metric
- 2-column metric grid
- value + unit composition
- stats value list
- landscape/portrait media cards
- horizontal media carousel
- program/workout hero
- program detail composition
- workout block list
- exercise info detail with and without media
- metric/chart history page
- exercise set-history table

The active workout itself is not reconstructed from Tonal as a functional pattern.

---

## 7. Variable-binding readiness QA

**PASS FOR BUILD START.**

The consolidated spec now distinguishes variables that should be centrally bound:
- semantic surface colors
- semantic ink colors
- divider colors
- semantic accent/status colors
- spacing scale
- radius roles
- icon sizes
- repeated control dimensions where Figma supports useful numeric binding
- typography styles/variables

A value being listed in the spec is **not** evidence of successful binding. Actual Figma nodes must be inspected later under QA-2.

Repeated raw values in reusable components are a failure unless binding is unsupported or the value is explicitly documented as a one-off/provisional experiment.

---

## 8. Remaining uncertainty — does not block Figma Phase A

The following remain intentionally provisional:
- exact Tonal font family
- exact Pretendard weight mapping needed to visually match
- exact color hex values
- exact hero height/aspect ratios by variant
- exact chart heights and annotation offsets
- exact bottom-sheet top radius
- exact motion/easing/timing
- exact dark-mode policy outside evidenced dark/media patterns
- exact icon artwork

These are not reasons to delay the build. They are reasons to keep the system centrally tokenized and correct them through screenshot comparison instead of local patches.

---

## 9. Figma build-start gate

Figma Phase-A construction may begin only with these rules:

1. `docs/15_TONAL_DESIGN_SYSTEM_SPEC.md` is the canonical implementation spec.
2. Audit docs are evidence/provenance, not competing implementation specs.
3. Build order is `01_FOUNDATIONS -> 02_COMPONENTS -> 03_PATTERNS -> Examples`.
4. Reusable nodes must encode correct Auto Layout, Fixed/Hug/Fill, wrapping, and alignment.
5. Variables/styles must be actually bound, not merely created.
6. Icon/media placeholders are used until Fitness assets are finalized.
7. No large downstream batch proceeds while an upstream structure/binding QA fails.
8. Representative reconstruction examples must be compared with Tonal evidence before Phase-A freeze.

---

## 10. QA sequence after this gate

### Foundation preflight
Before components:
- verify variable collections/names
- verify text styles
- verify base spacing/radius/dimension values
- verify no duplicate semantic variables

### Component batch QA
For each component batch:
- QA-1 Structure / Auto Layout
- QA-2 Design-system / Binding
- only then compose patterns

### Pattern batch QA
For each pattern batch:
- QA-1 Structure / responsive behavior
- QA-2 component/variable reuse
- then create representative examples

### Representative reconstruction QA
For representative onboarding, dashboard, workout/program, exercise/detail, and settings/profile compositions:
- QA-1 Structure
- QA-2 Binding
- QA-3 Visual / Tonal reference / Fitness policy

Phase A is not `DONE` until all three stages pass on the representative baseline.

---

## 11. Final decision

**PRE-FIGMA CONSOLIDATION QA: PASS.**

The current reconstruction has enough evidence and internal consistency to move from documentation into Figma system construction.

The next task is to build `01_FOUNDATIONS` from the canonical consolidated spec, then immediately run Foundation preflight before creating the first component batch.