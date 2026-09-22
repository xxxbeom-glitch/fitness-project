# TAMPIN PROJECT FOLDER SETUP GUIDE

This repository is the canonical source for Tampin.

- Canonical repository: `xxxbeom-glitch/tampin`
- Canonical URL: `https://github.com/xxxbeom-glitch/tampin`
- Legacy aliases/redirects such as `xxxbeom-glitch/fitness-project` are not canonical and must not be used in new setup instructions.

## 1. One product, one project
Do not mix unrelated products into this project workspace.

## 2. GitHub is canonical
- GitHub = final product rules and execution history
- ChatGPT/Claude project files = snapshots
- Figma = approved product behavior expressed visually
- Cursor and other development tools = operate against this repository

If a snapshot or Figma screen conflicts with GitHub, GitHub wins unless the user has just made a newer explicit decision that still needs to be written back.

## 3. Resume from the current state

The project is no longer in Bootstrap mode. The authoritative current state is `docs/CURRENT.md`.

Read in this order:
1. `PROJECT_INSTRUCTIONS.md`
2. `docs/CURRENT.md`
3. current GitHub Issue when Development mode is active
4. latest active checkpoint
5. only the Decision/Spec/Figma directly relevant to the current task

`PROJECT_BOOTSTRAP.md` is historical reference only.

## 4. Development execution

Production implementation starts only after explicit Product Owner Development-mode authorization.

Normal development loop:

`CURRENT -> scoped GitHub Issue -> relevant Decision/Spec/Figma -> Impact Gate -> Cursor implementation -> Test/Build -> Commit/Push -> Issue evidence -> ChatGPT QA -> CURRENT update`

Code-changing work should have a GitHub Issue. The Issue is the normal Cursor work instruction; do not duplicate it into a long copy-paste prompt unless GitHub is unavailable.

## 5. Role usage
Roles are responsibilities, not specific tools and not mandatory sequential approvals.

Available specialist roles:
- PM / Product
- Research / Evidence
- UX
- UI / Design
- Development
- QA
- Growth
- Ops

ChatGPT, Claude, Cursor, or another tool may perform a role as long as it follows the same canonical documents.

**Use only the roles needed for the current problem.** Growth/Ops stay mostly dormant until real user/release signals make them useful.

## 6. Cross-role Gates
Three shared gates protect important decisions and implementation:

- **Evidence Gate** — verify claims with the right kind of source, especially exercise/health/policy/platform facts
- **Decision Challenge Gate** — test the current idea against the strongest objection and a meaningfully different alternative
- **Regression & Impact Gate** — identify cross-feature impact/invariants/regression packs before risky code changes

Details live in `PROJECT_INSTRUCTIONS.md` and `docs/05` through `docs/12`.

## 7. Design workflow
Default design pipeline:

`Product Decision -> UX IA/Storyboard -> Figma low-fi -> Mobbin/reference research -> UI synthesis -> Figma refinement -> Design QA -> Development`

The Product Owner should spend time judging and directing the design rather than manually drawing every frame from scratch.

Mobbin is a pattern reference, not a screen-copy or exact-token source.

## 8. Working memory separation
- Conversation = working/discovery space
- `docs/` = product and operating memory
- Figma = visual design artifact
- Issue / Task = execution memory
- Commit / Test = implementation evidence
- `docs/CURRENT.md` = current position

## 9. Keep the system lightweight
This is a solo product project. Do not add process for its own sake.

- Do not create Issues for every discussion.
- Do not require PRs for every small change.
- Do not invoke all Agents for every task.
- Do not duplicate the same status in GitHub, Notion, Figma, and chat.
- Add heavier process only when it controls a real risk.
- If the Project OS slows actual product work, simplify it.

## 10. Historical-source rule
Notion IDEA LAB, older Figma work, and Liftly contain earlier discovery/design/code/data assets. They may be used as research/provenance/reuse sources, but once a product decision is confirmed for execution, GitHub documents become the maintained source of truth.
