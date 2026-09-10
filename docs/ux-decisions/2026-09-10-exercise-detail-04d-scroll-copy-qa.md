# Exercise Detail 04D — Scroll / Copy-Stress QA — 2026-09-10

**Status:** PASS
**Scope:** Group 04 canonical `04D_운동상세` responsive/long-content QA only

## Canonical target

- Figma file: `W3lZurXCXbThP67rF2xk2b`
- page: `04 운동 목록 · 상세` — `233:2075`
- screen: `04D_운동상세` — `40:2325`

## Changes applied

The previously approved flat information treatment is unchanged.

- `ExerciseDetailContent` (`40:2350`) now uses vertical overflow scrolling while retaining the fixed viewport region under Status Area / Nav Header / tab bar.
- `InstructionList_Flat` (`40:2364`) changed from fixed horizontal sizing to **FILL**.
- all numbered instruction text rows use horizontal **FILL** + `textAutoResize=HEIGHT`, so longer copy wraps and grows vertically.
- `CheckpointList_Flat` (`543:1072`) remains horizontal **FILL**.
- all checkpoint text rows use horizontal **FILL** + `textAutoResize=HEIGHT`.
- no card/surface styling was reintroduced; the approved flat information hierarchy remains intact.

## QA

### QA-1 — Structure / Auto Layout: PASS

- canonical root remains `360 × 954`.
- `ExerciseDetailContent` remains width/height FILL in the screen shell and is now vertically scrollable.
- canonical 20px side insets and section spacing remain unchanged.
- instruction/checkpoint list containers follow available width instead of freezing to the 360px reference width.
- text rows grow vertically when wrapped rather than clipping horizontally.

### QA-2 — Design system / Binding: PASS

- existing typography/color/spacing/radius bindings were preserved.
- no component detaches or new parallel component family were introduced.
- this change only adjusts responsive sizing/overflow behavior.

### QA-3 — Visual / Copy stress: PASS

- canonical `360 × 954` screenshot remains visually unchanged apart from gaining safe scroll behavior.
- a temporary `320 × 954` clone was used for stress QA and removed afterward.
- at 320px width the content inset resolves to 280px; media, metadata and text sections remain aligned.
- long Korean instruction copy and long checkpoint copy wrap to multiple lines without horizontal clipping.
- the longer content extends beyond the fixed detail viewport while the content frame remains `overflowDirection=VERTICAL`, preserving access to below-fold content.

## Result

`04D_운동상세` is **PASS** for the current Group 04 responsive / long-copy scope.

Exact coaching copy remains editable product content and does not change the approved Exercise Detail IA.

No Cursor implementation handoff yet.
