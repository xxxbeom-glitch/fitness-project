# Group 03 Routine — Cross-Group Planning-to-Figma QA

**Date:** 2026-09-14  
**Status:** QA PASS AFTER TARGETED FIXES · FIGMA LOCKED FOR REVIEWED SCOPE  
**Mode:** Product / UX / Figma  
**Development handoff:** NOT APPROVED

## Scope

Product Owner explicitly deferred the current Group 02 Home refinement and moved the active QA focus to `03 루틴`.

This pass follows the cross-group planning-to-Figma verification rule in `docs/17_FIGMA_AGENT_EXECUTION_QA.md`:

`planning/policy → actual Figma inventory/flow → design-system/binding → minimal correction → read-back/screenshot → cleanup`

This is verification and targeted correction, not a redesign pass.

## Canonical Figma

- file: `W3lZurXCXbThP67rF2xk2b`
- page/section: `03 루틴` — `233:2074`

Current valid screen/state inventory after later approved interaction additions:

1. `03A_Routine_List` — `34:1401` — `360×780`
2. `03B_Routine_Empty` — `34:1438` — `360×780`
3. `03C_추천루틴상세` — `40:2272` — `360×2672`
4. `03D_Routine_Detail` — `34:1447` — `360×1908`
5. `03E_Routine_Create` — `34:1457` — `360×780`
6. `03E2_Routine_Create_WithExercises` — `352:896` — `360×2518`
7. `03F_Routine_Edit` — `34:1477` — `360×2518`
8. `03A_Routine_List_Menu` — `706:5023` — full-viewport representative bottom-sheet state
9. `03F_Routine_Exercise_Menu` — `706:5087` — full-viewport representative bottom-sheet state

The last two states were added/changed by the later 2026-09-10 PO-approved action-menu decisions and therefore legitimately extend the 2026-09-08 seven-screen checkpoint.

No current `03G_Routine_Readonly` or other stale readonly screen exists.

## Planning / product verification

PASS.

Verified current behavior:
- Routine is an independent saved-routine management area; weekday assignment UI is not part of the current canonical Group 03 pass.
- `03A` lists saved routines and exposes create plus routine-management actions.
- `03B` is the valid empty state with `루틴 만들기`.
- `03C` and `03D` share the same routine-detail structure and summary hierarchy.
- `03C` has no Edit action and uses Primary `운동 시작`.
- `03D` has Edit and uses Primary `운동 시작`.
- `03E` save remains unavailable before a valid routine is composed.
- `03E2` / `03F` use the approved editable ExerciseCard pattern and allow exercise add / set editing.
- selected cable attachment is displayed as a separate status chip rather than repeated in the exercise name.
- `03A` routine `...` menu uses the later-approved icon ActionSheet: `루틴 관리 / 복제 / 수정 / 삭제 / 닫기`.
- routine exercise-card `...` uses the shared icon ActionSheet: `운동 관리 / 순서 변경 / 대체 운동 / 삭제 / 닫기`.
- while a workout is active, saved-routine management remains protected by the existing active-workout guard; no separate `03G_Routine_Readonly` screen is restored.

### Recommended-routine flow reconciliation

The old `DEC-014` text (`이 루틴 사용하기 → save → Home`) conflicts with later PO-approved decisions.

Current canonical flow is now explicitly recorded in:
- `docs/ux-decisions/2026-09-14-recommended-routine-acceptance-current.md`

Current contract:
`추천 결과/상세 → 운동 시작 → Active Workout → 운동 완료 → 내 루틴 저장 여부 선택`

Therefore the current `03C` Figma CTA `운동 시작` is product-correct.

## QA-1 — Structure / Auto Layout

**PASS after targeted cleanup.**

Verified:
- approved viewport sizes/heights remain intact
- major repeated card/detail structures keep the current Auto Layout behavior
- 03A routine-card 44×44 overflow touch targets remain intact
- no obsolete 03G/readonly frame remains
- later action-menu representative states remain 360×780 full-viewport states

Correction applied to menu QA reference states:
- removed duplicated underlying product-screen copies from `03A_Routine_List_Menu` and `03F_Routine_Exercise_Menu`
- each state now keeps only the dark viewport, full overlay, and canonical ActionSheet instance as required by the current cross-group modal/sheet QA rule
- action-sheet content/placement was not redesigned

## QA-2 — Design system / component / binding

**PASS after targeted fixes.**

Verified existing local component reuse for key Group 03 roles:
- `Nav Header`
- `Routine Summary`
- `ExerciseCard`
- `InputBox`
- `CTA Button`
- `Tag`
- `ActionSheet`

Representative instances resolve to local component mains, not missing/remote substitutes.

Semantic variable/style read-back on representative states confirms the current Fitness system is used for:
- `bg/default`, `bg/surface`, `bg/elevated`
- `border/default`, `border/subtle`
- `text/primary`, `text/secondary`, `text/tertiary`, `text/on-brand`
- `brand/primary`
- spacing/radius/border tokens
- `heading/01`, `body/01`, `label/02`, `caption/01`, `button/cta`, `tag/01`
- menu `bg/overlay` and `glass/surface-20`

### Targeted component fixes

1. **Routine list card reuse**
   - finding: the three visually repeated `03A` routine cards were raw frames and no existing local `RoutineListCard` component existed
   - fix: promoted the approved existing card structure into a local shared component
   - new main: `RoutineListCard` — `1362:905`
   - current 03A instances: `1362:906`, `1362:921`, `1362:938`
   - visual size remains `320×126`
   - existing semantic variables, Tag instances and 44×44 overflow target are preserved

2. **AttachmentTag reuse**
   - finding: Group 03 had raw local attachment-status frames although canonical local `AttachmentTag` already existed
   - canonical main reused: `AttachmentTag` — `693:6035`
   - corrected instances:
     - `1362:1014`
     - `1362:1075`
     - `1362:1138`
     - `1362:1201`
   - displayed `맥그립 미디엄` size remains `73×26`; no visual meaning changed

Post-fix read-back:
- raw `RoutineCard` frames in current Group 03 = `0`
- 03A `RoutineCard` shared instances = `3`
- raw `AttachmentTag` frames in current Group 03 = `0`
- canonical `AttachmentTag` instances = `4`

## QA-3 — Visual / product

**PASS.**

Full-screen screenshot/read-back verified after the fixes:
- 03A routine list retains the approved hierarchy and visual appearance
- 03C recommended routine detail retains its six-exercise detail, summary, attachment status chip, and `운동 시작` CTA
- 03E2 create-with-exercises retains the approved editable card layout and enabled save state
- 03A / 03F menu states now show the approved bottom sheet cleanly on the canonical empty dark viewport with full overlay
- no clipping/collision or new visual regression was introduced by componentization

Previously approved untouched 03B/03D/03E/03F product layouts were not unnecessarily redesigned.

## Deferred / non-blocking

The sample set-table values visible in the current routine detail/edit Figma (`W / 1 / 2 / D / F`, sample `80 KG`, `35 REPS`) remain visual sample content, not final prescription/default routine data.

This remains a non-blocking implementation/data follow-up governed by the existing first-load and structured-prescription decisions. Do not reinterpret these samples as approved default loads/reps.

## Final verdict

**PASS — Group 03 reviewed Figma scope is locked.**

Stop condition is met:
- current valid planning and current Figma agree
- later 2026-09-10 menu decisions are incorporated
- no verified stale/duplicate screen remains in the reviewed scope
- critical repeated component/binding gaps found by this pass were corrected and read back
- correction-triggered visual regressions were checked
- remaining sample prescription content is explicitly deferred rather than a hidden QA failure

Do not reopen Group 03 without a new product change, conflict, regression, implementation/runtime finding, or explicit Product Owner request.

**NO CURSOR IMPLEMENTATION HANDOFF.**
