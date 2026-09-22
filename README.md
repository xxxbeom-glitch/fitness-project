# Tampin

AI-assisted product repository for Tampin, an Android-first weight-training tracker.

**Canonical Repository:** `xxxbeom-glitch/tampin`  
**Canonical URL:** `https://github.com/xxxbeom-glitch/tampin`

Legacy repository paths such as `xxxbeom-glitch/fitness-project` may redirect here, but the canonical repository address is `xxxbeom-glitch/tampin`.

## Current mode

`DEVELOPMENT READY · AWAITING PRODUCT OWNER AUTHORIZATION · IMPLEMENTATION NOT STARTED`

The Product/UX/Figma handoff, Android architecture re-audit, and Cursor execution harness are prepared. Production implementation begins only after explicit Product Owner Development-mode authorization and creation of the first scoped GitHub Issue.

The authoritative live status is always `docs/CURRENT.md`.

## Current product thesis

Build a weight-training tracker that does **not** assume one fixed training habit or weekday schedule. The core job is to let users start today's workout quickly, see prior performance immediately, record sets with minimal input, and keep control over exercise order and session changes.

`weekday schedule -> start today's routine` remains an optional convenience path, not the product definition.

## Canonical source

This GitHub repository is the canonical source for product decisions, execution tasks, implementation evidence, and current status.

- Product memory → `docs/`
- Work memory → GitHub Issue
- Implementation evidence → Commit / Test / Runtime evidence
- Current position → `docs/CURRENT.md`
- Approved visual artifact → canonical Figma identified by CURRENT

## Operating flow

```text
Product/UX/Design
Decision / Spec / Figma
→ Product Owner approval
→ GitHub canonical docs

Development
CURRENT
→ scoped GitHub Issue
→ Cursor implementation
→ Test / Build
→ Commit / Push
→ Issue evidence
→ ChatGPT independent QA
→ PASS / FIX / BLOCKED
→ CURRENT update
```

Normal human relay:
- User → Cursor: `GitHub 확인하고 현재 Issue 진행해.`
- User → ChatGPT: `커서 완료. GitHub 확인해.`

The user does not need to copy long implementation prompts or Cursor completion reports between the two agents.

## Start here

1. `PROJECT_INSTRUCTIONS.md`
2. `docs/CURRENT.md`
3. current Issue when Development mode is active
4. only the directly relevant Decision/Spec/Figma
5. `docs/implementation/README.md` for implementation handoff

`PROJECT_BOOTSTRAP.md` is historical bootstrap reference only and is not the current-mode authority.
