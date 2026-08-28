# 09 DESIGN SYSTEM

**Status:** BOOTSTRAP — TONAL-LED VISUAL SYSTEM CONFIRMED, TOKENS NOT FROZEN

## Product-driven design goal

The interface must feel fast and quiet during training. Visual polish is secondary to legibility, touch efficiency, state clarity, and low interaction cost.

The Product Owner should not need to manually draw every screen from scratch. The default design workflow is AI-assisted: structure first, reference research second, visual refinement third, human approval throughout.

## Design Source-of-Truth rule

Figma is the visual implementation/reference surface, not the product-policy Source of Truth.

- GitHub Decision / Product / Policy docs define **what the product means and how it should behave**.
- Figma defines **how the approved behavior is visually expressed**.
- If Figma and the current GitHub Decision conflict, GitHub wins and Figma must be corrected.

## Primary reference split — CONFIRMED

The product uses a deliberate two-reference model:

### Tonal — primary visual/UI reference
Tonal is the **dominant visual-system reference** for the product. The intended direction is not merely loosely inspired by Tonal; Fitness should stay deliberately close to Tonal's overall visual logic wherever that logic fits the product.

Reference characteristics to study and intentionally adopt:
- restrained black / white / neutral visual system
- strong typography hierarchy and prominent numeric information
- generous whitespace and clear section separation
- limited use of accent color
- relatively flat surfaces instead of excessive nested rounded cards
- high-contrast primary actions
- clear distinction between primary content, secondary metadata, and supporting states
- premium but quiet fitness-product tone
- simple, large onboarding choice surfaces
- disciplined visual density rather than decorative UI
- strong contrast between selected and unselected states
- restrained icon use and minimal visual ornament

### Tonal adoption level — CONFIRMED
Fitness should use Tonal as the default answer for **visual composition, hierarchy, spacing rhythm, surface treatment, contrast philosophy, and component tone** unless there is a clear product reason not to.

This means the design team should not continuously invent alternative visual styles when Tonal already provides a suitable pattern. A Fitness screen may intentionally feel visually close to Tonal at first glance, provided it is re-authored for Fitness content, behavior, branding, and implementation.

What may be closely adopted in principle:
- page composition
- whitespace proportions and section rhythm
- visual hierarchy
- black/white/neutral emphasis
- card and surface restraint
- button prominence
- selection-state contrast
- information-density philosophy
- typography emphasis patterns
- onboarding visual language

What must remain Fitness-original or independently defined:
- brand name, logo, trademarks, and identity assets
- final copy
- proprietary imagery/video
- exact screen reproduction
- exact unverified token values
- icons/assets that are proprietary to Tonal
- hardware-specific or coach/class-specific functionality
- interaction or information architecture that conflicts with Fitness product policy

Tonal is **not** a functional specification. Do not inherit assumptions that depend on Tonal hardware, proprietary exercise media, coaches, classes, or machine-specific data.

The design goal is therefore **close visual-system alignment without literal cloning**.

### Hevy — primary functional/interaction reference
Hevy is the primary reference for weight-training tracker functionality and repeated workout interaction patterns.

Reference characteristics to study and reinterpret:
- fast set logging
- previous-performance visibility during logging
- routine creation and editing
- exercise search/selection
- exercise history and workout history
- active-workout controls
- set completion and correction
- practical strength-training data density
- low-friction repeated use inside a real gym session

Hevy is **not** the visual style target and does not override confirmed Fitness product policy. Do not automatically inherit its monetization, information architecture, feature scope, terminology, or every interaction.

### Secondary references
Other products may be researched when Tonal or Hevy does not adequately solve a specific UX problem. They remain supporting references rather than a new global visual direction.

Every screen should pass three checks:
1. **Tonal visual check** — does the composition, hierarchy, restraint, and visual tone stay sufficiently close to the intended Tonal-led system?
2. **Hevy functional check** — is the workout-tracking interaction practical, fast, and clear for repeated gym use?
3. **Fitness policy check** — does the screen exactly preserve the confirmed GitHub product rules?

## Default Design Pipeline

`Product Decision -> UX IA/Storyboard -> Figma low-fi visualization -> Tonal/Hevy reference research -> UI pattern synthesis -> Figma refinement -> Design QA -> Development`

### Stage 1 — Product meaning
Before drawing screens, confirm:
- user goal
- product rule
- required input/output
- major exceptions
- what is confirmed vs TBD

### Stage 2 — UX IA / Storyboard
The UX Agent defines:
- screen purpose
- IA / navigation
- user flow
- primary action
- secondary action
- information hierarchy
- back/cancel behavior
- state transitions
- empty/error/recovery cases where relevant

### Stage 3 — Figma low-fi
The first Figma pass is for structure validation, not visual polish.

Use simple frames, real or near-real copy, and basic blocks to confirm:
- sequence
- hierarchy
- screen count
- state changes
- whether the user knows the next action

Do not spend time perfecting components before the flow is stable.

### Stage 4 — Reference research
Start with the confirmed primary-reference split rather than broad visual browsing.

Use **Tonal first for visual composition** and **Hevy first for workout-tracking functionality**. Search other references only when the specific problem is not sufficiently covered.

For Tonal research, first identify whether a relevant Tonal screen/pattern already exists before proposing a materially different visual solution.

Examples:
- program recommendation result
- weekly training schedule
- workout start card
- exercise substitution
- active workout set logging
- history/progress view

For each relevant reference identify:
- what problem the pattern solves
- what is useful for Fitness
- what should not be copied
- whether it changes product meaning

### Stage 5 — UI pattern synthesis
Tonal and Hevy are primary references, not templates to clone.

The default synthesis rule is:
- **visual expression / composition / hierarchy -> strongly Tonal-led**
- **workout functionality / repeated interaction -> Hevy-led**
- **product behavior / scope / policy -> Fitness GitHub-led**

If a reference conflicts with the product rules, the reference is adapted or rejected.

A screen should not diverge from Tonal visually merely for originality. Divergence should have a specific usability, platform, accessibility, brand, or product reason.

### Stage 6 — Figma refinement
Refine the approved low-fi structure into high-fidelity screens using:
- reusable components
- consistent tokens
- real interaction states
- current design system
- existing Fitness/Liftly assets where still valid

As the token system is defined, use Tonal screenshots/patterns as directional evidence for proportion and visual rhythm, while defining Fitness-owned implementation values rather than claiming or copying unknown exact Tonal values.

### Stage 7 — Design QA
Before development check:
- final Figma still matches the approved storyboard/product meaning
- the Tonal-led visual direction is applied consistently rather than only on isolated screens
- screens do not drift into generic dashboard/card-heavy SaaS styling
- Hevy-derived workout interactions remain practical and low-friction
- scheduled and unscheduled states are handled where relevant
- loading / empty / error / disabled / success states are not accidentally omitted
- repeated components are actually consistent
- touch targets and readability are acceptable
- the design is implementable without inventing hidden behavior
- reference borrowing has not turned into literal competitor copying

## Mobbin / reference rules

Mobbin is a **UX pattern library**, not a verified token source and not a screen-copy source.

Do not claim exact spacing, font size, radius, animation timing, or component internals from screenshots unless independently known.

A Tonal reference may strongly influence:
- information hierarchy
- card grouping
- navigation pattern
- screen sequence
- interaction model
- state presentation
- overall composition
- spacing rhythm
- surface density
- contrast treatment

It does not automatically provide verified values for our:
- spacing scale
- typography tokens
- colors
- radius
- component API

## Existing-asset reuse

Before creating new visual primitives, inspect the existing Fitness Figma and Liftly assets.

Reuse when:
- the component still matches the current product meaning
- interaction behavior remains valid
- visual quality is acceptable
- the component can be brought into the Tonal-led system without visual inconsistency
- reuse reduces work without creating inconsistency

Replace or modify when current product/UX decisions require it.

Do not preserve an old screen merely because it already exists.

## CONFIRMED UX principles

- Previous performance should be visible where the user enters the next set.
- Avoid forcing navigation away from the active workout for routine edits or prior-record checks.
- Exercise order must remain flexible.
- Important workout actions need clear feedback after taps.
- The active workout screen should prioritize current set, previous performance, completion state, and rest timing.
- Recommendation/self-build users should converge into the same core routine/workout/history system.
- Weekday scheduling is optional; design must not assume every user has a fixed weekday plan.
- Home direction is action-first and favors a small number of large, readable cards over a dense analytics dashboard.

## Visual direction — CONFIRMED

The overall UI direction is **strongly Tonal-led and re-authored for Fitness**.

- clean, restrained, high-contrast mobile UI
- strong typography hierarchy
- prominent and highly legible numbers where workout data matters
- generous spacing and clear section rhythm
- black / white / neutral foundation with restrained accent color
- limited decorative surfaces
- fewer unnecessary nested rounded cards
- avoid ornamental gradients and generic "AI-looking" styling
- use imagery only when it adds real product value; the core UI must remain complete without media
- default to familiar mobile controls where custom interaction does not add real value
- onboarding choices should favor large, simple, text-led surfaces
- selected states may use strong black/white inversion when appropriate
- visual restraint is preferred over decorative differentiation

The exact token values are still Fitness-owned and must be defined during implementation/design-system freeze. Tonal screenshots are directional references, not proof of exact underlying token values.

## Required states

Components and flows should consider, where relevant:
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

## TBD

- final typography tokens
- color system
- spacing scale
- radius scale
- icon system
- dark mode policy
- final bottom navigation / primary IA
- active-workout information hierarchy
- finalized onboarding screen set

## Design gate

Do not freeze detailed component styling before the corresponding IA and core flow are stable.

Do not require a high-fidelity Figma screen to discuss or validate early product logic. Use the cheapest artifact that can answer the current question.
