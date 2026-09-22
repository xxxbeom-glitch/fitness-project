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
- Figma ideation screens:
  - `IDEA_Routine_Main_Jomo_01` — `2168:7614`
  - `IDEA_Routine_Detail_Jomo_01` — `2229:7652`
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

## Routine detail ideation state to preserve

- routine-card tap direction now has an ideation companion screen: `IDEA_Routine_Detail_Jomo_01` — `2229:7652`
- composition follows the PO's `image 7` clarification: image-led hero upper area + concise lower information + strong bottom `운동 시작` CTA
- shared `Nav Header / LeftAction=Back, RightAction=Edit` — `360:2215` is reused; do not reintroduce custom back/edit controls
- root uses existing `Colors / Light` mode
- lower content reuses `Routine Summary` (`637:3524`), muscle `Tag` components, Compact Secondary Button (`636:828`), and Primary CTA (`635:794`)
- lower typography uses existing `heading/02` and `body/01`
- lower spacing bindings: section `24`, heading/content `8`, preview/button `16`, tag gap `6`; horizontal inset `20`
- current hero bitmap is only a temporary zoomed crop of the image-7 reference for layout validation; it is not a final/approved Tampin hero asset
- this detail screen remains ideation-only and has not replaced canonical `03D_Routine_Detail`

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
1. review/refine the current Routine main + detail ideation pair
2. replace the temporary detail hero crop only after final image source/policy is decided
3. resolve still-open folder/icon policy only when needed
4. reconcile Home removal with navigation / BottomAppBar / screen inventory / behavior matrix
5. promote approved redesign to canonical Figma
6. run focused affected-scope QA
7. only then refresh implementation handoff and wait for explicit PO Development resume
