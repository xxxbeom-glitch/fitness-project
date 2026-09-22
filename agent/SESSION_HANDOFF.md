# Session Handoff

## Current state

- Current mode: DESIGN / FIGMA
- Development: PAUSED BY PRODUCT OWNER
- DEV-001: PASS · merged to main
- DEV-002 Issue #6: PAUSED BEFORE EXECUTION
- Active development task: NONE
- Next Owner: ChatGPT + Product Owner

## Active redesign checkpoint

- `docs/ux-decisions/2026-09-22-routine-main-replaces-home-redesign-checkpoint.md`
- Figma ideation screen: `IDEA_Routine_Main_Jomo_01` — `2168:7614`
- PO decision: remove standalone Home as the intended default/main entry and make Routine the default/main entry
- current ideation values must be read from Figma; PO manual overrides supersede prior assistant-entered numbers
- redesign is not yet promoted to canonical `MVP_전체_와이어프레임`; canonical screen count remains 96 until promotion/remapping + focused QA

## Current visual state to preserve

- no `바로 시작` section header
- quick actions: `루틴 없이 시작` / `새 루틴 만들기`
- quick-action cards: 320×72, vertical padding 14, transparent fill, 1px dashed #BBC0C9, radius 20, gray 36×36 plus action
- expanded `PPL Routine` + collapsed `3분할 루틴`
- folder header: SUIT Bold 14px / line-height 26 / #979DA9 / left chevron
- routine cards: 320×108, radius 20, white surface, 0/2/8 ~7% shadow, compact outlined time chip, muscle chips, no exercise-count text, no exercise-name preview row
- internal card-holder clipping remains OFF so shadows are not cut

## Preserve

- DEV-001 Expo/RN/TS bootstrap
- Android package `com.lumian.tampin`
- current architecture decisions unless redesign creates a real conflict
- existing GitHub/Cursor collaboration loop

## Do not do now

- do not execute Issue #6
- do not start canonical-screen implementation
- do not assume historical Group 02 Home remains the final IA
- do not reset PO-adjusted Figma values to older assistant values
- do not update canonical screen count before redesign promotion/remapping QA

## Next

Resume from:
`PROJECT_INSTRUCTIONS.md → docs/CURRENT.md → docs/ux-decisions/2026-09-22-routine-main-replaces-home-redesign-checkpoint.md → Figma 2168:7614 → NEXT OPEN ITEM`

Next design step:
1. continue/refine Routine main
2. resolve still-open folder/icon policy only when needed
3. reconcile Home removal with navigation / BottomAppBar / screen inventory / behavior matrix
4. promote approved redesign to canonical Figma
5. run focused affected-scope QA
6. only then refresh implementation handoff and wait for explicit PO Development resume
