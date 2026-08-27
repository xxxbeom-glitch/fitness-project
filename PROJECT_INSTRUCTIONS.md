# PROJECT INSTRUCTIONS

This document defines the persistent operating rules for the Fitness Project across ChatGPT, Claude, Cursor, and other AI-assisted workflows.

## 1. Core rules

- Follow `docs/00_PROJECT_BRIEF.md` for product purpose and MVP scope.
- Follow `docs/01_PRODUCT_POLICY.md` for product policy.
- Follow `docs/03_TECH_STACK.md` and `docs/04_ARCHITECTURE.md` for technical decisions once confirmed.
- Follow `docs/CURRENT.md` for the latest project state.
- Prefer the latest canonical documents over past conversation memory.
- Do not silently reinterpret or expand confirmed product decisions.
- Important product memory belongs in repository documents, not in AI memory alone.

## 2. Canonical source

The GitHub repository is the canonical source.

- GitHub = latest product rules and execution history
- ChatGPT / Claude project uploads = snapshots
- Cursor / development tools = implementation against this repository

If a snapshot conflicts with GitHub, GitHub wins unless the user explicitly makes a newer decision.

## 3. Source-of-truth priority

1. User's latest explicit decision
2. `PROJECT_INSTRUCTIONS.md`
3. Latest valid decision in `docs/08_DECISIONS.md`
4. `docs/00_PROJECT_BRIEF.md`
5. `docs/01_PRODUCT_POLICY.md`
6. Tech / Architecture / Design System
7. Current Task / GitHub Issue
8. `docs/CURRENT.md`
9. Past conversations, drafts, snapshots

## 4. Modes

### BOOTSTRAP MODE
Product direction and operating rules are still being finalized.

Use `CONFIRMED`, `ASSUMPTION`, `TBD`, and `RESEARCH NEEDED` instead of pretending all gaps are settled.

### EXECUTION MODE
Begins only after Project OS v0.1 is approved.

Code-changing tasks should normally use GitHub Issues and must remain traceable to implementation and QA evidence.

## 5. Role boundaries

### Product / PM
Owns product meaning, target user, MVP, policy, priorities, and task decomposition.

### Research
Provides current evidence, source verification, uncertainty, and trade-offs.

### Design
Owns user flow, IA, interaction states, UX writing, usability, accessibility, and design consistency without changing product meaning unilaterally.

### Development
Implements confirmed scope, follows architecture and stack, minimizes unrelated change, and records test/commit evidence.

### QA
Independently checks acceptance criteria, edge cases, regression, data/security, usability, and evidence quality.

Roles are responsibilities, not permanently tied to a specific AI tool.

## 6. Decision Gate

AI must not silently finalize changes to:

- target users
- core product concept
- major MVP scope
- pricing / monetization
- privacy / account / deletion / moderation policy
- platform priority
- core stack or architecture
- major user-facing UX meaning

Escalate these as `DECISION NEEDED` and record the final decision in `docs/08_DECISIONS.md`.

## 7. Minimal-change principle

Prefer the smallest change that solves the current problem.

- Reuse existing patterns first.
- Do not add future-proof abstraction without a current need.
- Do not mix unrelated refactoring into the task.
- Do not add dependencies unless existing tools are insufficient.
- Keep the product simpler when two options achieve the same result.

## 8. Git traceability

Execution Mode uses this chain:

`Decision / Spec -> Task / Issue -> Commit / PR / Test -> QA -> CURRENT`

One meaningful work cycle should normally produce one traceable commit.

## 9. Fitness-specific product constraints

These are currently confirmed:

- The app is a general-purpose weight-training tracker, not a weekday-schedule-only routine app.
- Weekday scheduling is an optional convenience path, not the core definition.
- The initial product should prioritize fast logging over AI coaching.
- Users must retain control over exercise order, set changes, and workout changes.
- Previous performance must be visible during logging without unnecessary navigation.
- Custom exercises are MVP-critical because gym equipment varies.
- Record loss or session recovery failure is a trust-breaking defect.
- Watch, AI/MCP, InBody/Health, gym equipment data, community, and advanced analytics are follow-up areas unless explicitly promoted into MVP by a new decision.

## 10. Verification rules

- Do not present unverified claims as facts.
- For changing external facts, use current primary sources when possible.
- Separate Fact / Inference / Recommendation.
- Mark unknowns as `NOT VERIFIED`, `TBD`, or `RESEARCH NEEDED`.

## 11. Security

Never commit secrets, API keys, tokens, private keys, or service account credentials.

## 12. Completion definition

Generated output is not automatically DONE.

DONE requires:
- acceptance criteria met
- no conflict with canonical product rules
- significant omissions addressed
- unverified items disclosed
- required QA completed
- important decisions reflected in canonical docs

For code tasks, also require relevant test/build evidence and traceable commit/PR evidence.
