# CURRENT — Fitness Project

**Updated:** 2026-09-17

## Current mode

`DESIGN SYSTEM / FIGMA QA · LIGHT COLOR SYSTEM D MVP ROLLOUT APPLIED / COLOR-SURFACE PO ACCEPTED · RADIUS RULE PREVIEW ONLY / NOT ROLLED OUT · GROUP 03 ROUTINE CLOSED · GROUP 04 EXERCISE LIBRARY/DETAIL CLOSED · GROUP 05 ACTIVE WORKOUT CLOSED · GROUP 06 COMPLETION CLOSED · GROUP 07 ANALYSIS/WORKOUT HISTORY CLOSED (BODY-MAP PRODUCTION ASSET MAPPING DEFERRED) · GROUP 08 SETTINGS/ACCOUNT CLOSED · GROUP 02 HOME DEFERRED BY PO · NO ACTIVE PRODUCT/UX GROUP · NO CURSOR IMPLEMENTATION HANDOFF`

## Resume rule

`PROJECT_INSTRUCTIONS → CURRENT → latest active checkpoint → directly relevant Decision/Spec → NEXT OPEN ITEM`

이미 PO 승인 또는 QA PASS된 범위는 새 변경·충돌·regression 가능성·명시 재검토 요청이 없으면 다시 처음부터 검토하지 않는다.

Current Figma editing surface:
- file `W3lZurXCXbThP67rF2xk2b`
- page `MVP_전체_와이어프레임` — `34:1076`
- current Groups 01–08 screen set: `98` independent frames, visually classified A–H by screen character
- no group wrapper frames
- previous per-group page/node references below are retained as historical closure references; current visual editing/QA uses the consolidated MVP page unless PO explicitly changes the organization again

---

## Latest active checkpoints

### Light color system / MVP rollout / shared design-system binding
- `docs/ux-decisions/2026-09-17-light-color-system-po-approval.md`
- `docs/ux-decisions/2026-09-17-light-color-system-session-handoff.md`
- `docs/ux-decisions/2026-09-17-mvp-light-theme-rollout-preview.md`
- `docs/ux-decisions/2026-09-17-mvp-light-theme-color-acceptance.md`
- `docs/ux-decisions/2026-09-17-light-radius-exploration-checkpoint.md`
- `docs/ux-decisions/2026-09-17-shared-tabs-consolidation-checkpoint.md`

Current status:
- D / Petrol Teal Tonal is the approved light-theme baseline.
- PO explicitly authorized application to the consolidated MVP set.
- 98/98 MVP screen roots use `Colors / Light`.
- theme-sensitive variable-bound fills/strokes were force-synchronized to resolved Light values after a stale-render mismatch was found; post-sync mismatch count is `0`.
- color/surface implementation is driven through local semantic Variables, registered Paint/Effect Styles, and Common_Component masters instead of one-off screen recoloring.
- shared page-level tabs are consolidated into one `Tabs` component family and use a full-width 360px rule with no outer horizontal inset.
- Product Owner visually confirmed the refreshed canonical Figma state and accepted the current color/surface result.
- radius experiment remains preview-only and has not been propagated across the 98 screens.
- no Cursor/development handoff.

### Group 08 final closure
- `docs/ux-decisions/2026-09-16-group08-final-closure-qa.md`
- `docs/ux-decisions/2026-09-14-group08-legal-links-session-handoff.md`
- `docs/ux-decisions/2026-09-14-group08-profile-account-current.md`
- `docs/ux-decisions/2026-09-14-group08b-profile-account-lock.md`

### Group 07 final closure
- `docs/ux-decisions/2026-09-16-group07-common-component-naming-cleanup.md`
- `docs/ux-decisions/2026-09-16-group07-screen-name-normalization.md`
- `docs/ux-decisions/2026-09-16-group07-final-closure-qa.md`
- `docs/ux-decisions/2026-09-14-group07-final-policy-lock.md`
- `docs/ux-decisions/2026-09-13-group07-session-detail-current-checkpoint.md`
- `docs/ux-decisions/2026-09-15-analysis-bodymap-asset-mapping-deferred.md`

### Group 06 final closure
- `docs/ux-decisions/2026-09-16-group06-final-closure-qa.md`
- `docs/ux-decisions/2026-09-14-group06-completion-shared-summary-sync.md`
- `docs/ux-decisions/2026-09-14-recommended-routine-acceptance-current.md`

---

# LIGHT COLOR SYSTEM — D MVP ROLLOUT APPLIED / COLOR-SURFACE PO ACCEPTED

Approval / reference:
- `docs/ux-decisions/2026-09-17-light-color-system-po-approval.md`
- `docs/ux-decisions/2026-09-17-light-color-system-session-handoff.md`

Applied rollout / QA checkpoints:
- `docs/ux-decisions/2026-09-17-mvp-light-theme-rollout-preview.md`
- `docs/ux-decisions/2026-09-17-mvp-light-theme-color-acceptance.md`
- `docs/ux-decisions/2026-09-17-shared-tabs-consolidation-checkpoint.md`

Figma reference:
- file `W3lZurXCXbThP67rF2xk2b`
- consolidated page `MVP_전체_와이어프레임` — `34:1076`
- original exploratory section `LIGHT_COLOR_CASE_D — PETROL TEAL TONAL` — `1642:1328`
- exploratory Workout — `1642:1364`
- exploratory Analysis — `1642:1759`
- exploratory Settings — `1642:1953`

Locked light baseline:
- Primary / Brand `#218F8A`
- Primary Action / CTA `#1A7E79`
- Primary Soft `#DCEFED`
- Canvas `#F6F7F7`
- Surface `#FFFFFF`
- Subtle Surface `#EFF2F2`
- Border / Subtle `#EAEEED`
- Border / Default Control `#E3E8E7`
- Text Primary `#151918`
- Text Secondary `#626866`
- Text Tertiary `#929A98`
- Success `#4F8A61`
- Danger `#C85A64`
- content cards and grouped list cards: no outer border + subtle `0 2px 8px` shadow at 5%
- controls may retain explicit default border
- standard D surfaces use no background-blur glass effect
- Workout LiveBar uses the accepted light treatment and no border

Shared design-system implementation:
- `Colors` collection retains Dark/Light modes
- added/retained reusable semantics include `action/primary`, `brand/soft`, `state/success`, `state-bg/success`, `state-bg/danger`, `surface/track`, `effect/card-shadow`, `state-bg/pressed`
- registered Paint Styles: `Surface/Canvas`, `Surface/Content`, `Surface/Subtle`, `Surface/Track`, `Brand/Primary`, `Brand/Soft`, `Action/Primary`, `State/Success`, `State/Danger`, `Text/Primary`, `Text/Secondary`, `Text/Tertiary`, `Text/OnAction`, `Border/Default`, `Border/Subtle`
- registered Effect Style: `Elevation/Card`
- CTA / Compact Button / OptionItem / WheelPicker / DialogCard / DialogButtons / ActionSheet / ManualTimerPopup / StatusToast / segmented controls / shared cards and dividers are bound through local semantic variables/components
- page-level Routine / Exercise Detail / Analysis period tabs resolve through shared `Tabs` — `638:3298` under `SHARED_NAVIGATION_COMPONENTS` — `1773:1016`
- shared Tabs use `Count`, numeric `Active`, `Indicator`, and `State` axes; current page-level instances fill the full `360 × 54` width
- obsolete Group 07-only `AnalysisPeriodTabs` — `961:1368` was removed after zero-instance verification
- theme-sensitive external/shared-library component dependencies were localized or swapped to existing local Common_Component equivalents
- AppLogo uses the same approved artwork with adaptive blend treatment so it remains visible on light and dark neutral canvases

Final read-back after synchronization / screenshot QA:
- MVP screen frames: `98`
- Light roots: `98 / 98`
- synchronized variable-bound theme-sensitive paints: `5,398`
- Light-variable actual-value mismatch count after synchronization: `0`
- large unintended dark-surface residue checked after synchronization: `0`
- remote component instances across current MVP + Common_Component: `0`
- external variable bindings: `0`
- standard visible GLASS / BACKGROUND_BLUR effects: `0`
- remaining unbound theme-sensitive palette paints: `0`
- A–H screenshot QA completed across all 98 screens
- remaining first-pass gaps found by screenshot QA (logo visibility, WheelPicker old dark text, sheet Cancel actions, OptionItem selected/unselected coloring) were corrected and affected categories re-screenshotted PASS
- representative post-sync screenshots verified: `03A_Routine_List_Recommended`, `04A_Search`, `04B_Search_Selected`, `05A_Workout_Weight`, `05A_Workout_Weight_Scrolled_3rdExercise`
- shared Tabs screenshot QA verified full-width Group 03 RoutineTabs and Group 07 PeriodTabs after consolidation
- Product Owner refreshed the canonical Figma file and accepted the current color result
- temporary screenshot QA frames removed

Scope boundary:
- this color/surface rollout is accepted for the current consolidated MVP screen set.
- Groups 03–08 remain product/UX closed; this migration does not reopen their flow/policy decisions.
- Group 02 product refinement remains deferred.
- radius scale/application is a separate decision and remains preview-only until PO explicitly approves propagation.
- do not hand off to Cursor.

---

# GROUP 03 — ROUTINE CLOSED

Group 03 remains closed.

Cross-group empty-routine exception already reflected and QA-passed:
- `03D_Routine_Detail_Empty` — `1423:1972`
- routine identity retained at 0 exercises
- `운동 추가` shown
- `운동 시작` hidden

Design-system maintenance:
- RoutineTabs now reuse shared `Tabs` — `638:3298`
- page-level routine tab rows use `x=0 / width=360` with no outer horizontal inset

Do not reopen without a new conflict/regression or explicit PO request.

---

# GROUP 04 — EXERCISE LIBRARY / DETAIL CLOSED

Final closure:
- `docs/ux-decisions/2026-09-15-group04-final-closure-qa.md`

Post-closure maintenance:
- `docs/ux-decisions/2026-09-16-group04-common-component-organization.md`

Historical closure Figma reference:
- page `04 운동 목록 · 상세` — `233:2075`

Final state:
- canonical search/detail/custom-exercise states QA PASS
- delete/save/attachment/recording-type/height policies locked
- Group 04 component instances resolve through confirmed `Common_Component` groups
- exercise-detail tabs reuse the shared full-width `Tabs` component family
- no legacy `MVP_공용_UI` source remains in the closed Group 04 component structure

Deferred data/runtime work remains:
- final Production Exercise DB regeneration from purchased Gym Animations raw 2,109-source-row catalog after normalization/deduplication
- exact Production attachment allowlists / canonical attachment IDs and names / attachment-media mapping
- Cursor implementation

The old 195/211 Production target is not the current raw-source basis. Final canonical app exercise count remains a data-normalization result, not a fixed 2,109 UI count.

Do not reopen Group 04 QA-passed behavior without a new conflict/regression or explicit PO request.

---

# GROUP 05 — ACTIVE WORKOUT CLOSED

Final relevant checkpoints:
- `docs/ux-decisions/2026-09-16-group05-manual-timer-final-closure-qa.md`
- `docs/ux-decisions/2026-09-16-group05-common-component-organization-qa.md`
- `docs/ux-decisions/2026-09-16-group05-page-cleanup.md`
- `docs/ux-decisions/2026-09-15-group05-active-workout-live-bar-amendment.md`
- `docs/ux-decisions/2026-09-15-group05-active-workout-scroll-behavior.md`
- `docs/ux-decisions/2026-09-15-group05-rest-live-bar-amendment.md`

Historical closure Figma reference:
- page `05 운동 중` — `233:2076`
- `05A_Workout_Weight` — `148:1979`
- `05A_Workout_Weight_Scrolled_3rdExercise` — `1495:2408`
- `05F_Workout_RestTimer` — `1498:2769`
- `05Q_ManualTimer_Idle` — `1519:2581`
- `05Q_ManualTimer_Running` — `1525:4014`
- `05Q_ManualTimer_Paused` — `1547:3691`

Locked:
- WorkoutLiveBar / pinned content scroll
- automatic RestLiveBar
- separate Manual Timer popup
- end/discard/update flow
- Common_Component organization
- obsolete legacy recording-type full-screen shells and timer-entry debris removed

**GROUP 05 CLOSED.**

Do not reopen without a concrete conflict/regression or explicit PO request.

---

# GROUP 06 — WORKOUT COMPLETION CLOSED

Final closure:
- `docs/ux-decisions/2026-09-16-group06-final-closure-qa.md`

Historical closure Figma reference:
- file `W3lZurXCXbThP67rF2xk2b`
- page `06 운동 완료` — `233:2077`
- `06A_Completion_Default` — `793:15748`
- `06B_Completion_NoPR` — `819:702`
- `06C_Completion_VolumeNA` — `823:720`
- `FINAL_06_RECOMMENDED_ROUTINE_DIALOGS` — `163:2142`

Locked completion presentation:
- completion header/status
- conditional shared PR trophy card
- shared 2×2 session summary card
- bottom `기록 상세 보기 / 홈으로 돌아가기`
- no valid PR → PR card hidden entirely
- valid PRs in current completion policy → all valid PR rows shown in the single trophy card
- no eligible completed `weight_reps` volume → `총 볼륨 —`, never `0kg`

Recommended-routine completion flow remains:
`추천 결과/상세 → 운동 시작 → Active Workout → 운동 완료 → 내 루틴 저장 여부 선택`

Second save dialog appears only when the user chooses to save and the recommended routine's exercise/set structure was changed.

Final component organization:
- `06_GROUP_CONFIRMED_COMPONENTS` — `1570:978`
- `CompletionStatusIcon` — `742:901`
- `07D/PersonalRecordTrophyCard` — `1113:733`
- `07D/SessionSummaryCard` — `1124:736`
- `CompletionMetricCard` — `936:914`
- final Group 06 closure check: `36 / 36` instances resolved through `Common_Component`
- missing main-component links: `0`
- legacy `MVP_공용_UI` source instances: `0`
- local component masters on the former Group 06 production page: `0`

**GROUP 06 CLOSED.**

Do not reopen completion shell, PR/no-PR presentation, volume-N/A presentation, recommended-routine completion dialogs, or component organization without a concrete new conflict/regression or explicit PO request.

---

# GROUP 07 — ANALYSIS / WORKOUT HISTORY CLOSED

Final closure:
- `docs/ux-decisions/2026-09-16-group07-final-closure-qa.md`

Post-closure maintenance:
- `docs/ux-decisions/2026-09-16-group07-common-component-naming-cleanup.md`
- `docs/ux-decisions/2026-09-16-group07-screen-name-normalization.md`
- `docs/ux-decisions/2026-09-17-shared-tabs-consolidation-checkpoint.md`

Product rules:
- `docs/ux-decisions/2026-09-14-group07-final-policy-lock.md`

Historical closure Figma reference:
- file `W3lZurXCXbThP67rF2xk2b`
- page `07 Analysis · Workout History` — `233:2078`
- `07A_Analysis_Home` — `887:936`
- `07B_BodyArea_Detail` — `887:1028`
- `07B_BodyArea_Detail_Empty` — `1057:593`
- `07D_Workout_History_Detail` — `836:1593`
- `07D_Workout_History_Detail_DeleteConfirm` — `1136:4054`

Final closure corrections / verification:
- 07A total-weight Y-axis normalized to approved Korean compact labels `1.5만 / 1만 / 5천 / 0`
- 07B Empty restored to approved `진행한 운동` section header + compact empty-state card + single centered period-specific message
- 07B contributor list remains all rows / page scroll / no arbitrary truncation
- 07D shared PR trophy card and shared 2×2 summary remain linked through `Common_Component`
- 07D saved-session Trash + destructive confirmation PASS
- separate 07C workout-record overview remains removed
- Group 07 canonical Figma page/screen/layer names normalized to English-only; user-facing Korean copy remains unchanged

Common_Component organization:
- `07_GROUP_CONFIRMED_COMPONENTS` — `1578:987`
- Group 07-specific masters remain original nodes without duplication/detach:
  - `MetricSegmentedControl` — `1025:1092`
    - `Active=TotalWeight / Active=Sets / Active=Time`
  - `AnalysisProgressRow` — `854:6951`
- Analysis period navigation now reuses shared `Tabs` — `638:3298` under `SHARED_NAVIGATION_COMPONENTS` — `1773:1016`
  - representative configuration: `Count=3 / Indicator=Underline`
  - page-level width: `360px`, each tab `120px`
  - obsolete `AnalysisPeriodTabs` — `961:1368` removed after zero-instance verification
- `SHARED_LIST_COMPONENTS` — `1593:1386`
  - `RecentWorkoutRow` — `937:7292`
  - `ListCard` — `952:611`
- the two shared list masters were moved from legacy `MVP_공용_UI` into `Common_Component` by explicit PO request; existing Group 02/07 instances retain their main-component linkage
- shared Nav Header / DialogCard / DialogButtons internal layer naming used by Group 07 was normalized to English without changing visible copy or behavior

Final structural QA:
- Group 07 page instance nodes at closure: `77`
- missing main-component links: `0`
- source `Common_Component`: `77 / 77`
- source legacy `MVP_공용_UI`: `0`
- Korean/mixed Figma layer names across the five canonical Group 07 frames: `0`
- Korean/mixed Figma layer names inside `07_GROUP_CONFIRMED_COMPONENTS`: `0`
- local Group 07 production-page component masters: `0`
- screenshot regression QA: `07A_Analysis_Home`, `07B_BodyArea_Detail_Empty`, `07D_Workout_History_Detail_DeleteConfirm` PASS
- shared Tabs consolidation screenshot QA: Group 07 PeriodTabs full-width PASS

## Body-map production asset mapping deferred

Decision:
- `docs/ux-decisions/2026-09-15-analysis-bodymap-asset-mapping-deferred.md`

Until PO prepares the production-ready body-map image set:
- use existing source muscle-highlight PNGs; do not redraw/recolor them
- preserve the validated blend-mode approach
- do not create replacement body-map artwork in Figma
- final canonical-muscle → PNG-layer mapping remains deferred

This prepared-asset dependency is not a blocker to the closed Group 07 Product/UX/Figma QA state.

**GROUP 07 CLOSED.**

Do not reopen analysis structure, contributor/empty presentation, 07D PR/summary/delete behavior, chart formatting, naming, or component organization without a concrete new conflict/regression or explicit PO request.

---

# GROUP 02 — HOME REFINEMENT DEFERRED

Product Owner explicitly deferred Group 02 Home refinement.

Do not resume it unless PO requests it.

---

# GROUP 08 — SETTINGS / ACCOUNT CLOSED

Final closure:
- `docs/ux-decisions/2026-09-16-group08-final-closure-qa.md`

Historical closure Figma reference:
- file `W3lZurXCXbThP67rF2xk2b`
- page `08 Settings · Account` — `233:2079`
- `08A_Settings_Home` — `1158:649`
- `08A1_Settings_Home_SubscriptionToast` — `1601:1015`
- `08B_Profile` — `1204:770`
- `08B1_Profile_Photo_Sheet` — `1181:724`
- `08B2_Account_Management_Sheet` — `1207:799`
- `08B3_Account_Deletion` — `1222:846`
- `08B4_Account_Deletion_Confirm` — `1222:7487`
- `08C_Unit_Settings_Sheet` — `1175:709`
- `08D_Workout_Settings` — `1158:7365`
- `08D1_Default_Rest_Time_Sheet` — `1163:676`
- `08D2_Timer_End_Sound` — `1163:7296`
- `08E_Notification_Settings` — `1158:7457`
- `08F_FAQ` — `1232:812`
- `08F1_FAQ_Expanded` — `1232:924`
- `08G_Support_Inquiry` — `1257:927`
- `08G1_Inquiry_Category_Sheet` — `1260:946`
- `08G2_Inquiry_Submitted` — `1261:977`
- `08G3_Inquiry_Send_Failed` — `1261:1044`
- `08H_Language_Settings` — `1601:987`

Final launch-level settings decisions:
- `언어` stays visible and supports `한국어 / English`
- language selection applies immediately; no separate Save action
- no duplicate full English Figma screen set; runtime localization swaps strings in the same UI
- `테마` hidden for MVP
- `구독 관리` menu row retained as a future-facing stub, with no destination screen
- tapping `구독 관리` shows `준비 중인 기능이에요.` feedback

Already locked behavior retained:
- profile/account base and account-exit flow/privacy policy
- unit settings
- workout settings presentation / flow
- notification settings current scope
- FAQ accordion
- support inquiry flow
- Terms / Privacy entry rows use external public documents; do not rebuild full legal-document screens in Figma

Common_Component organization:
- `08_GROUP_CONFIRMED_COMPONENTS` — `1602:989`
- moved original masters without duplication/detach:
  - `Toggle` — `638:3288`
  - `WheelPicker/SingleColumn` — `1169:1105`
  - `AccordionItem` — `1238:1139`
  - `TextArea` — `1255:1137`
  - `AttachmentSlot` — `1255:1161`

Historical final structural QA at Group 08 closure:
- active Group 08 frames: `19`
- all frame widths: `360px`
- minimum frame height violations: `0`
- instance nodes checked: `180`
- missing main-component links: `0`
- source `Common_Component`: `110`
- source external/shared library: `70`
- source legacy `MVP_공용_UI`: `0`
- local component masters on Group 08 production page: `0`
- Korean/mixed local layer names across active Group 08 frames: `0`
- Korean/mixed layer names inside `08_GROUP_CONFIRMED_COMPONENTS`: `0`
- main structural content / settings cards / fields / bottom sheets normalized to Auto Layout and existing spacing bindings
- overlay roots remain absolute only where dimming/sheet/dialog stacking requires it
- representative English-copy stress QA: Settings Home + Workout Settings PASS; temporary QA frames removed

Current consolidated design-system migration supersedes the former external/shared-library dependency for the live MVP set:
- current MVP + Common_Component remote component instances: `0`
- current external variable bindings: `0`

Release follow-ups that are not Figma blockers:
- actual public Terms / Privacy URLs
- exact support-inquiry record/image-attachment retention period
- external account-deletion request URL
- final timer sound assets / labels

**GROUP 08 CLOSED.**

Do not reopen Group 08 without a concrete new conflict/regression, a release requirement that changes the product flow, or explicit PO request.

---

# NEXT OPEN ITEM

**Color/surface rollout is PO accepted. No automatic next Product/UX group. Await Product Owner direction.**

Remaining intentionally deferred / later items:
1. size-aware radius system — D preview exists; propagate to shared Radius/component rules only after explicit PO approval
2. Group 02 Home refinement — deferred by PO; resume only on explicit request
3. Group 07 final body-map production asset mapping — deferred until PO provides/prepares the production-ready body-map image set
4. pre-release Settings follow-ups — public Terms/Privacy URLs, inquiry retention disclosure, external account-deletion request URL, final timer sound assets/labels
5. implementation/Cursor handoff — only after explicit Product Owner authorization

Do not reopen Groups 03–08 without a concrete conflict/regression or explicit PO request.
Do not propagate the radius experiment across the MVP set automatically.
Do not begin Cursor implementation handoff automatically.

# Development boundary

Product Owner가 개발 전환을 명시하기 전까지 개발/Cursor handoff를 하지 않는다.