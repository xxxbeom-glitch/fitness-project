# 09 DESIGN SYSTEM

**Status:** BOOTSTRAP — TONAL RECONSTRUCTION BASELINE CONFIRMED, TOKENS NOT FROZEN

## Product-driven design goal

The interface must feel fast and quiet during training. Legibility, touch efficiency, state clarity, and low interaction cost remain mandatory.

## Design Source-of-Truth rule

Figma is the visual implementation/reference surface, not the product-policy Source of Truth.

- GitHub Decision / Product / Policy docs define **what the product means and how it behaves**.
- Figma defines **how the approved behavior is visually expressed**.
- If Figma and current GitHub product policy conflict, GitHub wins and Figma must be corrected.

## Primary reference split — CONFIRMED

The product uses a deliberate two-reference model:

- **Tonal = visual-system reconstruction baseline**
- **Hevy = weight-training functionality / repeated interaction reference**
- **Fitness GitHub policy = behavior and scope authority**

## Tonal reconstruction baseline — CONFIRMED

The first visual-system pass is explicitly a **Tonal reconstruction / replication baseline**, not merely loose inspiration.

The purpose of this phase is to reconstruct a coherent working design system from the Tonal screens that are accessible through Mobbin, then use that reconstructed system as the starting point for later Fitness-specific customization.

### Reconstruction principle

Before inventing Fitness-specific styling, inspect Tonal across as many accessible screen families as possible and infer a consistent provisional system from repeated visual evidence.

The reconstruction should intentionally approximate the visible Tonal system in:
- typography hierarchy and emphasis
- black / white / neutral palette behavior
- accent-color usage
- spacing rhythm and page margins
- section spacing and vertical density
- surface/background hierarchy
- card proportions and flatness
- button size, prominence, and treatment
- selected / unselected contrast
- tabs and segmented controls
- top navigation and bottom navigation treatment
- list rows and dividers
- form/input presentation
- toggles, radio/choice controls, and selection markers
- metric presentation and large-number hierarchy
- chart framing and statistic layouts
- hero-media overlays
- workout/program cards
- exercise/workout detail composition
- sheet/modal presentation where evidenced
- icon restraint and supporting metadata treatment

### Evidence rule

Mobbin screenshots are the evidence base for this reconstruction.

For every inferred rule or token:
- prefer patterns repeated across multiple Tonal screens over one-off visual details
- compare multiple screen families before deciding a global rule
- distinguish **observed** values from **estimated** values
- do not present screenshot-derived estimates as official Tonal source tokens
- if exact values cannot be known, choose the closest internally consistent approximation and mark it provisional

The goal is to reproduce the **visible system**, even when the underlying official Tonal token values are unknown.

### Coverage rule

Do not derive the system from only onboarding or a handful of attractive screens.

The audit should cover, where accessible:
1. authentication / first entry
2. onboarding / profile setup
3. Home / dashboard
4. Explore / discovery
5. program detail
6. workout detail / workout builder
7. exercise detail
8. history / charts / progress
9. profile
10. settings / legal / connected apps
11. forms / toggles / selection states
12. navigation / tabs / list rows
13. media-led screens
14. empty / disabled / error / recovery states when available

Because Mobbin search is not guaranteed to expose a literal exhaustive list of every Tonal screen in one operation, the working rule is **maximum practical coverage of all accessible Tonal screens, deduplicated by screen family and component evidence**.

### Phase-A target

The output of the Tonal reconstruction phase should be a provisional Fitness design-system baseline containing at minimum:
- typography scale
- color roles
- spacing scale
- radius/surface rules
- page/container margins
- button system
- card/surface system
- selection controls
- top/bottom navigation
- tabs
- list rows
- inputs/forms
- metric/stat patterns
- chart framing
- workout/program card patterns
- exercise-detail patterns
- icon usage rules
- state patterns

These values are allowed to be intentionally close to the visible Tonal system during this internal baseline phase.

## Fitness customization phase — REQUIRED BEFORE FINAL FREEZE

The reconstruction baseline is not the final brand system.

After the Tonal baseline is coherent, Fitness performs a second pass that changes only what has a clear reason to change:
- Fitness brand name / logo / identity
- final copy
- proprietary imagery / video
- exercise and workout functionality required by Fitness
- accessibility or platform corrections
- behavior required by confirmed GitHub policy
- Hevy-derived workout interaction improvements
- later brand differentiation approved by the Product Owner

The point is to **start from a strong, coherent reconstructed system and customize from there**, rather than inventing an inconsistent design language screen by screen.

Tonal trademarks, logos, proprietary imagery/video, and other protected brand assets are never reused as Fitness assets.

## Hevy — primary functional / interaction reference

Hevy remains the primary reference for practical weight-training interactions:
- fast set logging
- previous-performance visibility
- routine creation/editing
- exercise search/selection
- exercise/workout history
- active-workout controls
- set completion and correction
- practical strength-training data density

Hevy is not the visual-system target and does not override confirmed Fitness product policy.

## Default Design Pipeline

`Product Decision -> UX IA/Storyboard -> Tonal screen audit -> Tonal reconstruction baseline -> Fitness screen mapping -> Hevy functional check -> Figma refinement -> Design QA -> Development`

### Tonal screen audit

Before visually refining a Fitness screen:
- identify the closest Tonal screen family/pattern
- inspect repeated Tonal rules around that pattern
- use the reconstructed baseline first
- only create a new visual pattern when Tonal has no suitable equivalent or Fitness behavior requires a different solution

### Figma refinement

Figma should use reusable components/tokens from the reconstructed Tonal baseline rather than manually approximating each screen independently.

Old Fitness/Liftly assets may be reused only when they can be brought into the reconstructed system without inconsistency.

## CONFIRMED UX principles

- Previous performance should be visible where the user enters the next set.
- Avoid forcing navigation away from the active workout for routine edits or prior-record checks.
- Exercise order remains flexible.
- Important workout actions require clear feedback.
- Active workout prioritizes current set, previous performance, completion state, and rest timing.
- Recommendation/self-build users converge into the same routine/workout/history system.
- Weekday scheduling is optional.
- Home remains action-first rather than a dense analytics dashboard.

## Design QA

Every screen must pass:
1. **Tonal reconstruction check** — does it use the reconstructed system consistently?
2. **Hevy functional check** — is repeated strength-training interaction practical and fast?
3. **Fitness policy check** — does behavior preserve confirmed GitHub product rules?
4. **State check** — are relevant loading/empty/error/disabled/success/recovery states covered?
5. **Implementation consistency check** — are repeated components actually using shared tokens/components?

## Current visual observations from the Tonal audit

Repeated visible patterns already confirmed across multiple accessible Tonal screens include:
- light gray/off-white application backgrounds with white content surfaces
- near-black primary text and strong black primary actions
- large, bold, compact headings with visibly quieter supporting copy
- uppercase compact section labels in many statistic/workout contexts
- large numeric values with much smaller uppercase metadata labels
- large rectangular choice surfaces with selected states frequently using black inversion
- relatively small or restrained corner radii compared with heavily rounded consumer UI
- thin dividers and low-contrast gray separators
- frequent use of generous vertical whitespace rather than decorative containers
- bottom navigation using a strong black bar in major app surfaces
- bright green used selectively for positive/progress/active training information rather than as a general brand wash
- blue appears in some progress/benchmark or profile contexts but is not treated as the dominant global surface color
- media-heavy program/workout screens combine edge-to-edge imagery with dark overlays and white metadata
- settings/legal screens become much flatter and more utilitarian, using rows and dividers rather than card-heavy composition

These are **observed system behaviors**, not yet frozen token values.

## Required component states

Where relevant, components must define:
- default
- pressed
- active/selected
- disabled
- loading
- empty
- error
- success/completed
- retry/recovery
- editable/completed-set correction
- scheduled / unscheduled variants

## TBD — to derive from the Tonal reconstruction audit

- provisional typography tokens
- provisional color roles and values
- provisional spacing scale
- provisional radius/surface scale
- icon system
- exact bottom-navigation implementation
- tab/segmented-control tokens
- chart/metric tokens
- motion/transition behavior where screenshot evidence is insufficient
- dark-mode policy

## Design gate

Do not freeze the final Fitness brand system before the Tonal reconstruction baseline is sufficiently complete.

Do not infer product behavior from Tonal. Tonal is being reconstructed for **visual-system quality**; Fitness behavior remains governed by GitHub product policy.