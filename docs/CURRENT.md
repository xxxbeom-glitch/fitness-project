# CURRENT — Fitness Project

**Updated:** 2026-08-29

## Current mode

`BOOTSTRAP / DESIGN EXECUTION — FITNESS FIGMA SCREENS STARTED · ACTIVE WORKOUT PILOT PASS · PO VISUAL REVIEW NEXT`

The Tonal Phase-A reconstruction baseline passed F1–F5 independent QA and F5 width/alignment revalidation.

The project has now entered the real Fitness-specific screen phase in Figma. The first representative product screen, `20_운동기록`, has been built and passed the initial structure / token / reuse / responsive pilot QA.

The active execution target remains **Figma**. The earlier code-first/code-led discussion remains a future workflow hypothesis only. It does not authorize a switch to Cursor/code. The mistakenly created Issue #1 remains closed as **NOT PLANNED**.

## Product authority

Canonical product decisions remain in:
- `docs/08_DECISIONS.md` through `DEC-021`
- `docs/13_SCREEN_DESIGN_DECISIONS.md` for approved screen-level UX/UI decisions
- `docs/09_TECHNICAL_STACK.md` for React Native + Expo + TypeScript direction

Core product constraints remain unchanged:
- general-purpose weight-training tracker
- first-run equal choice: recommended routine / build my own routine
- recommendation onboarding = goal + weekly availability + duration
- gym-first initial recommendation
- authentication required
- offline-first workout persistence + change-driven sync
- one active editing device for an in-progress workout
- active session survives restart until explicit finish/discard
- fast logging, previous-performance visibility, flexible editing, and recovery are core
- exercise detail is text-first / media-optional
- custom exercises are MVP-critical
- monetization remains deferred

## Visual-system authority

- **Tonal = passing Phase-A visual-system baseline**
- **Hevy = practical weight-training functionality / repeated interaction reference**
- **Fitness GitHub Product/Policy/Decision docs = behavior and scope authority**

Canonical design references:
- `docs/15_TONAL_DESIGN_SYSTEM_SPEC.md`
- `docs/16_FIGMA_TONAL_BUILD_INSTRUCTIONS.md`
- `docs/17_FIGMA_AGENT_EXECUTION_QA.md`
- `docs/21_TONAL_PRODUCT_PATTERNS_AUDIT.md`
- `docs/22_TONAL_PREFIGMA_CONSOLIDATION_QA.md`

Latest QA:
- `docs/27_FIGMA_PHASE_F4_PRODUCT_PATTERNS_QA.md`
- `docs/28_FIGMA_F4_SPACING_QA.md`
- `docs/29_FIGMA_PHASE_F5_EXAMPLES_QA.md`
- `docs/31_FIGMA_F5_EXAMPLES_ALIGNMENT_QA.md`
- `docs/32_FIGMA_FITNESS_ACTIVE_WORKOUT_PILOT_QA.md` — first real Fitness screen / design-system stress test

Methodology / work-history checkpoints:
- `docs/26_MOBBIN_FIGMA_RECONSTRUCTION_RETROSPECTIVE_DRAFT.md`
- `docs/30_PHASE_A_RECONSTRUCTION_HISTORY_AND_WORKFLOW_CHECKPOINT.md`

## Current Figma file

- file: `tracker-app3`
- file key: `tBpQfpAR1apJngF8a7qyH9`

Current pages:
- `01_FOUNDATIONS`
- `02_COMPONENTS`
- `03_PATTERNS`
- `Examples`
- `10_FITNESS_SCREENS`

## Completed design phases

### F1 Foundations
**PASS**

### F2 Core Components
**PASS**

F5 integration QA later corrected selected ChoiceCard indicator contrast; focused F2 regression remains PASS.

### F3 Navigation / Rows / Overlays
**PASS**

Later integration QA corrected Overlay TopBar inverse ink and restored Row/Settings component-property references; focused F3 regression remains PASS.

### F4 Product Patterns
**PASS**

Key final signals:
- top-level overlap = 0
- unstyled text = 0
- canonical spacing drift = 0
- canonical spacing without Variable binding = 0
- semantic color binding = PASS
- representative responsive QA = PASS

### F5 Representative Examples
**PASS — PHASE-A COMPLETE · REVALIDATED**

Follow-up QA corrected:
- History set table double inset
- Settings list double inset

Required QA lesson remains:
- `no overflow` does not prove correct alignment
- check shared alignment lines, effective visible inset, and parent + child double inset separately

## Fitness screen phase — started

The Product Owner explicitly rejected bulk production of the entire MVP screen inventory before testing the design system against real product compositions.

Current strategy:

`real representative screen -> visual/structural QA -> system correction -> next representative screen`

Initial representative sequence:
1. Active workout logging
2. Home
3. First-run Path Choice
4. cross-screen system review
5. only then expand the remaining MVP screens in batches

### Representative 1 — `20_운동기록`

**Status: PASS FOR PILOT SCOPE — PO VISUAL REVIEW NEXT**

Figma node:
- `20_운동기록` = `123:273`

Base screen currently includes:
- Korean product copy
- active workout title / elapsed state
- finish action
- exercise prescription
- rest timer status
- Set / Previous / kg / Reps / completion columns
- exercise with previous history
- explicit no-history exercise
- add-set action
- add-exercise action below the initial fold

Deferred workout states:
- first-load coach mark
- post-first-set feeling feedback sheet
- edit/delete/reorder action states
- active-session recovery state
- other-device/conflict states

### Design-system corrections discovered by the first real screen

#### Dense active-workout inset
Ordinary `Space/PageX = 24` was too expensive for the repeated five-column workout set-entry surface at narrow widths.

The active workout now uses the already-existing:
- `Space/ComponentX = 16`

This is a controlled high-density screen rule, not a global replacement of PageX.

#### `Workout/SetRow`
Created in `02_COMPONENTS`:
- component ID `123:12`
- responsive Previous / Weight / Reps columns
- fixed Set + 44pt completion target
- component properties for Set / Previous / Weight / Reps / Status
- existing `Control/Check` reused for completion status

#### `Workout/AddSetAction`
Created after QA identified duplicate local `+ 세트 추가` frames:
- component ID `128:59`
- both exercise blocks now use linked instances

### Pilot QA

Final measurable signals:
- unstyled text = 0
- non-canonical local spacing = 0
- canonical spacing without Variable binding = 0
- accidental double horizontal inset = 0 in the audited screen structure
- `Workout/SetRow` instances = 6, all linked to the reusable source
- `Workout/AddSetAction` instances = 2, both linked to the reusable source

Responsive QA:
- 320: overflow 0 / clipped text 0 / SetRow 288
- 360: overflow 0 / clipped text 0 / SetRow 328
- 390: overflow 0 / clipped text 0
- 430: overflow 0 / clipped text 0 / SetRow 398

Non-blocking visual-system gap:
- Phase-A TopBar leading icon is still represented by the existing placeholder/icon-slot treatment; final Fitness iconography remains a later system task and did not expand this pilot scope.

## Current next action

**Product Owner visually reviews `20_운동기록` before the next representative screen is produced.**

If no major direction change is required:
1. build the real Fitness **Home** screen in Figma
2. QA Home for Korean copy, action-first hierarchy, scheduled/unscheduled implications, spacing/alignment, token reuse, and 320/360/390/430
3. then build First-run Path Choice
4. run a cross-screen design-system review before bulk MVP screen production

Do not create all ~21 MVP unique screens / ~50 state frames in one batch.

Do not hand off to Cursor merely because a Figma screen exists; implementation begins only when the Product Owner explicitly switches execution mode.

## Phase sequence

`F1 PASS -> F2 PASS -> F3 PASS -> F4 PASS -> F5 PASS (REVALIDATED) -> ACTIVE WORKOUT PILOT PASS -> PO VISUAL REVIEW -> HOME NEXT`

## Canonical source rule

GitHub remains the Source of Truth for product policy, design-system specification, execution rules, QA state, history checkpoints, and next action. Figma remains the active visual design artifact for the current phase.
