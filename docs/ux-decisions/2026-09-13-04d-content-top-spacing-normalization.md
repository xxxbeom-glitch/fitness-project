# 04D Exercise Detail content top spacing normalization

Status: FIGMA APPLIED / VISUAL QA PASS / NO CURSOR HANDOFF

## Scope
Canonical 04D exercise-detail tab states only:
- `04D_Exercise_Detail_Info`
- `04D_Exercise_Detail_History`
- `04D_Exercise_Detail_Growth`

## Decision
Normalize the vertical inset between the shared `fixed-tab-bar` and the first content in all three 04D tab states to **20px**.

Use the existing `spacing/20` variable (`VariableID:278:897`) for the content frame `paddingTop` rather than an unbound literal value.

## Figma application
- `ExerciseDetailContent` (`40:2350`): already 20px / `spacing/20`; unchanged.
- `ExerciseHistoryContent` (`34:1718`): already 20px / `spacing/20`; unchanged.
- `GrowthContent` (`1000:7595`): changed 24px literal -> 20px bound to `spacing/20`.

No content, typography, chart, tab, horizontal spacing, or internal section spacing was changed.

## QA
- Read-back confirms all three canonical content frames use 20px top padding with the same spacing variable.
- Screenshot QA on `04D_Exercise_Detail_Growth` PASS.
