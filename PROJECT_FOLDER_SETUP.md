# PROJECT FOLDER SETUP GUIDE

This repository is the canonical source for the Fitness Project.

## 1. One product, one project
Do not mix unrelated products into this project workspace.

## 2. GitHub is canonical
- GitHub = final product rules and execution history
- ChatGPT/Claude project files = snapshots
- Cursor and other development tools = operate against this repository

If a snapshot conflicts with GitHub, GitHub wins unless the user has just made a newer explicit decision that still needs to be written back.

## 3. Bootstrap first
The project is currently in `BOOTSTRAP MODE`.

Read in this order:
1. `PROJECT_INSTRUCTIONS.md`
2. `PROJECT_BOOTSTRAP.md`
3. `docs/CURRENT.md`
4. Only the relevant docs for the current decision

Do not treat TBD or research items as confirmed.

## 4. Execution mode later
After Project OS v0.1 is approved:

`Decision / Spec -> Task / GitHub Issue -> Implementation -> Commit / Test Evidence -> QA -> CURRENT update`

Code-changing work should normally have a GitHub Issue.

## 5. Role usage
Roles are responsibilities, not specific tools.

- Product / PM
- Research
- Design
- Development
- QA

ChatGPT, Claude, Cursor, or another tool may perform a role as long as it follows the same canonical documents.

## 6. Working memory separation
- Conversation = working space
- `docs/` = product memory
- Issue / Task = work memory
- Commit / Test = implementation evidence
- `docs/CURRENT.md` = current position

## 7. Keep the system lightweight
This is a solo product project. Do not add process for its own sake.

- Do not create Issues for every discussion.
- Do not require PRs for every small change.
- Do not duplicate the same status in GitHub, Notion, and chat.
- Add boards, sprints, or heavier process only if they solve a real coordination problem.

## 8. Current transition rule
Notion IDEA LAB contains earlier discovery and research. It may be used as research/provenance, but once a product decision is confirmed for execution, the GitHub documents become the maintained source of truth.
