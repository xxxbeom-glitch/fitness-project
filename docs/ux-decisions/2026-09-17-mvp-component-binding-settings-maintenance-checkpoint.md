# MVP Component / Binding / Settings Maintenance Checkpoint

**Date:** 2026-09-17  
**Status:** PO APPROVED · FIGMA REFLECTED · FOCUSED QA PASS · NO CURSOR HANDOFF

## Scope

This checkpoint records the consolidated Figma maintenance completed after the Light color rollout and shared Tabs / selection-list maintenance.

Canonical Figma:
- file `W3lZurXCXbThP67rF2xk2b`
- page `MVP_전체_와이어프레임` — `34:1076`
- shared component page `Common_Component`

This checkpoint covers:
- Groups 01–08 component-asset / binding re-QA
- repeated-UI componentization where actual gaps remained
- full-width divider normalization for grouped cards/lists
- Group 06 completion / recommended-routine dialog maintenance
- Group 07 workout-history detail/dialog maintenance
- Group 08 Settings MVP-scope and grouping revision
- Light `border/default` tone adjustment

It does not authorize Cursor/development handoff and does not approve the separate radius-system rollout.

---

## Current consolidated MVP read-back

Current canonical page read-back after all edits:
- top-level independent screen frames: `97`
- group wrapper frames: `0`
- instance nodes: `1,973`
- instances with missing main component: `0`
- live MVP instances whose source page is not `Common_Component`: `0`

The previous `98` screen count is superseded by the current `97` count after the Group 08 FAQ removal and Group 06 recommended-routine dialog restructuring.

---

## Component / binding re-QA — Groups 01–08

The Product Owner explicitly requested a second component QA pass after the first pass had only validated existing instance linkage and missed repeated UI that was still left as raw frames.

The corrected QA standard is:

`repeated UI exists → Common_Component master exists → production screen uses Instance → nested shared UI remains linked → variable/type/style bindings remain intact`

### Groups 01–02

No new reusable-pattern gap remained after the corrected audit.

Existing repeated UI already resolved through shared components; layout-only wrappers remain frames by design.

### Group 03

Added/reused shared patterns and replaced repeated raw-frame usage:
- `RoutineNameInputSection`
- `ExerciseAttachmentOverlayPattern`
- `BottomRoutineCTA`

### Group 04

Added/reused shared patterns and replaced repeated raw-frame usage:
- `CustomExerciseNameField`
- `CustomExerciseSettingsSection`
- `ExerciseSearchToolbar`
- `AttachmentSheetHeader`
- `ExerciseAttachmentSheet`
- `ExerciseHistoryContent`
- `ExerciseGrowthContent`
- `PageSelectionList`
- `CustomExerciseEditFooter`

### Group 05

Shared/component maintenance:
- reused `ExerciseAttachmentOverlayPattern` with workout context
- `ExerciseReplaceFooter`
- `TimerQuickAdjustButton`

The replacement-exercise RadioButton flow remains intentional because selection is committed only after `선택 완료`.

### Group 06

Shared completion structure:
- `CompletionHeader`
- `CompletionSummary`
- `CompletionFooter`
- `CompletionPRStatusIcon`
- `07D/PersonalRecordCard`
- `07D/SessionSummaryCard`
- `CompletionMetricCard`

Current completion-summary cases remain linked to the shared component structure.

### Group 07

Added/reused shared patterns:
- `WorkoutSessionIntro`
- `WorkoutSummaryRow`
- `WorkoutSummaryCard`
- `BodyDistributionCard`
- `BodyAreaDetailCard`

`MetricSegmentedControl` binding cleanup was also completed during this maintenance sequence.

### Group 08

Settings-specific shared system includes:
- `SettingRow`
- `SettingCard`
- `BottomSheetHandle`
- `BottomSheetHeader`
- `SheetOptionList`
- `PageOptionList`
- `SettingsHomeContent`
- `WorkoutSettingsContent`
- `ProfileContent`
- `AccountDeletionContent`
- `SupportInquiryContent`

FAQ-specific production screens were later removed from the MVP by explicit PO decision; historical FAQ component assets are not a live MVP flow requirement.

---

## Divider rule — full grouped-card/list width

Current approved visual rule for grouped cards / list containers:
- row content may keep its normal horizontal inset
- the divider between rows spans the **full container/card width**
- standard 320px page cards/lists therefore use a 320px divider
- no divider appears after the final row
- divider color continues to use the applicable semantic border variable

Applied/verified examples include:
- Group 07 workout-history performed-exercise table
- Group 07 Analysis recent-change / recent-workout grouped cards
- Group 07 body-area contributor list
- Group 08 `SettingCard`
- Group 08 `PageOptionList`

### `SettingCard`

Current `SettingCard` variants retain 20px row-content inset while dividers span the entire 320px card width.

This rule is documented on the Figma `SettingCard` component and applies through the shared master rather than local screen patches.

### `PageOptionList`

`PageOptionList` current variants:
- `Items=2`: divider at `y=52`, width `320`
- `Items=3`: dividers at `y=52 / 104`, width `320`
- no trailing divider after the last row

The earlier implementation bug where End Sound / Language dividers were placed after the list height and clipped is fixed at the shared component level.

---

## Group 06 — completion visual / dialog maintenance

### Completion trophy / PR card

Current Figma read-back:
- `06A_Completion_Default` uses shared `CompletionPRStatusIcon`
- `FINAL_06_PR_NONE_CASE` uses shared `CompletionPRStatusIcon`
- `FINAL_06_VOLUME_NA_CASE` uses shared `CompletionPRStatusIcon`
- PR-bearing cards use shared `07D/PersonalRecordCard`
- the PR card itself is now a plain card treatment; the standalone trophy visual is in the completion status area

The trophy asset remains transparent; the earlier green-square artifact was a stale instance fill override and was removed.

### Recommended-routine completion dialogs

The old horizontal dialog board was replaced by normal app-screen dialog states.

Current canonical frames:
- `FINAL_06_RECOMMENDED_ROUTINE_DIALOGS` — `1896:8585` — `360 × 780`
- `FINAL_06_RECOMMENDED_ROUTINE_MODIFIED_SAVE_DIALOG` — `1896:8610` — `360 × 780`

Both use:
- the actual completion screen as the background state
- full-screen `360 × 780` dim overlay
- shared `DialogCard / DialogButtons`
- centered dialog placement

Dialog meanings remain unchanged:
1. `이 루틴을 내 루틴으로 저장할까요?`
2. modified recommended routine only: `어떤 루틴으로 저장할까요?`

---

## Group 07 — workout-history maintenance

Applied after component re-QA:
- performed-exercise table divider spans the full card width
- body-area contributor-list divider spans the full card width
- Analysis recent-change / recent-workout cards use the same full-width divider language
- `07D_Workout_History_Detail_DeleteConfirm` is normalized to a standard `360 × 780` screen overlay state, consistent with other dialogs

Existing workout-history product behavior remains unchanged.

---

## Group 08 — MVP scope / Settings IA amendment

This section supersedes the affected parts of the historical 2026-09-16 Group 08 closure document.

### FAQ removed from MVP

By explicit Product Owner decision:
- `08F_FAQ` removed from the consolidated MVP page
- `08F1_FAQ_Expanded` removed from the consolidated MVP page
- `자주 묻는 질문` removed from Settings Home

Current Group 08 live screen count: `17`.

FAQ is not part of the current MVP scope.

### Settings Home grouping

Current approved grouping:

**내 정보**
- 프로필
- 구독 관리

**설정**
- 운동 설정
- 단위 설정
- 알림
- 언어

**정보**
- 이용약관
- 개인정보처리방침
- 버전
- 문의하기

Current `08A_Settings_Home` remains `360px` wide and is `885px` high for the current content.

### Profile logout presentation

`08B_Profile` no longer uses a grouped account card for Logout.

Current rule:
- `로그아웃` is a plain centered text action
- it sits directly above the Save CTA
- logout-to-save gap: `16px`
- Save CTA remains the existing shared CTA
- the change is implemented in shared `ProfileContent`

### Selection lists

`08D2_Timer_End_Sound` and `08H_Language_Settings` remain immediate-selection lists using shared `OptionItem` + right-side check.

Their `PageOptionList` divider structure now follows the full-width row-divider rule described above.

---

## Light border/default adjustment

Light semantic `border/default` was softened by PO request.

- previous Light value: `#E3E8E7`
- current Light value: `#E7EBEA`
- Dark mode: unchanged

This affects controls/components bound to the semantic token rather than creating local raw-color overrides.

Other approved Light baseline colors remain unchanged, including:
- `text/primary = #242927`
- `border/subtle = #EAEEED`

---

## Scope locks / deferred items

Still unchanged:
- radius-system experiment remains preview-only and is **not rolled out** across the MVP
- Group 02 Home refinement remains deferred by PO
- Group 07 body-map final production asset mapping remains deferred
- Settings release follow-ups remain implementation/release work: actual public Terms/Privacy URLs, inquiry-retention disclosure, external deletion-request URL, final timer-sound assets/labels
- no Cursor/development handoff until explicitly authorized by the Product Owner

Closed Groups 03–08 remain closed from a broader Product/UX perspective except for the explicit amendments recorded in this checkpoint.

## Result

**PASS — current canonical Figma maintenance through this checkpoint is recorded and accepted.**

**NO CURSOR IMPLEMENTATION HANDOFF.**
