# 05 AGENT OPERATING MODEL

## Purpose
Keep product direction stable across Product, Research, Design, Development, and QA conversations/tools.

## Roles

### Product / PM
Owns problem definition, target user, MVP, policy, priorities, task decomposition, and user-facing meaning.

### Research
Verifies current external facts, sources, competitor patterns, platform constraints, and uncertainty.

### Design
Translates confirmed product rules into IA, flows, states, UX writing, and interaction patterns without silently changing product meaning.

### Development
Implements confirmed scope using the current stack/architecture, minimizes unrelated change, and produces test/build/commit evidence.

### QA
Independently verifies acceptance criteria, edge cases, data integrity, regression, usability, and evidence.

## Default pipeline

`Product -> Research when needed -> Design -> Development -> QA -> Product/CURRENT update`

Not every task requires every role.

## Handoff minimum

- Goal
- Context
- Source of truth used
- Confirmed
- Not decided
- Result
- Do Not Change
- Evidence
- Risk / Not Verified
- Next action

## Decision escalation

If a role encounters a choice that changes target user, core concept, MVP scope, monetization, privacy, platform, core architecture, or major UX meaning, it must return:

`DECISION NEEDED`

The final choice is recorded in `08_DECISIONS.md` and reflected in relevant canonical documents.
