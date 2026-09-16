# CURRENT — Fitness Project

**Updated:** 2026-09-16

## Current mode

`PRODUCT/UX FIGMA QA · GROUP 03 ROUTINE CLOSED · GROUP 04 EXERCISE LIBRARY/DETAIL CLOSED · GROUP 05 ACTIVE WORKOUT CLOSED · GROUP 06 COMPLETION CLOSED · GROUP 07 ANALYSIS/WORKOUT HISTORY CLOSED (BODY-MAP PRODUCTION ASSET MAPPING DEFERRED) · GROUP 08 SETTINGS/ACCOUNT CLOSEOUT NEXT · GROUP 02 HOME DEFERRED BY PO · NO CURSOR IMPLEMENTATION HANDOFF`

## Resume rule

`PROJECT_INSTRUCTIONS → CURRENT → latest active checkpoint → directly relevant Decision/Spec → NEXT OPEN ITEM`

이미 PO 승인 또는 QA PASS된 범위는 새 변경·충돌·regression 가능성·명시 재검토 요청이 없으면 다시 처음부터 검토하지 않는다.

---

## Latest active checkpoints

### Group 07 final closure
- `docs/ux-decisions/2026-09-16-group07-final-closure-qa.md`
- `docs/ux-decisions/2026-09-14-group07-final-policy-lock.md`
- `docs/ux-decisions/2026-09-13-group07-session-detail-current-checkpoint.md`
- `docs/ux-decisions/2026-09-15-analysis-bodymap-asset-mapping-deferred.md`

### Group 06 final closure
- `docs/ux-decisions/2026-09-16-group06-final-closure-qa.md`
- `docs/ux-decisions/2026-09-14-group06-completion-shared-summary-sync.md`
- `docs/ux-decisions/2026-09-14-recommended-routine-acceptance-current.md`

### Directly relevant next Group 08 checkpoints
- `docs/ux-decisions/2026-09-14-group08-legal-links-session-handoff.md`
- `docs/ux-decisions/2026-09-14-group08-profile-account-current.md`
- `docs/ux-decisions/2026-09-14-group08-profile-settings-pass.md`
- `docs/ux-decisions/2026-09-14-group08b-profile-account-lock.md`

---

# GROUP 03 — ROUTINE CLOSED

Group 03 remains closed.

Cross-group empty-routine exception already reflected and QA-passed:
- `03D_Routine_Detail_Empty` — `1423:1972`
- routine identity retained at 0 exercises
- `운동 추가` shown
- `운동 시작` hidden

Do not reopen without a new conflict/regression or explicit PO request.

---

# GROUP 04 — EXERCISE LIBRARY / DETAIL CLOSED

Final closure:
- `docs/ux-decisions/2026-09-15-group04-final-closure-qa.md`

Post-closure maintenance:
- `docs/ux-decisions/2026-09-16-group04-common-component-organization.md`

Canonical Figma:
- file `W3lZurXCXbThP67rF2xk2b`
- page `04 운동 목록 · 상세` — `233:2075`

Final state:
- canonical search/detail/custom-exercise states QA PASS
- delete/save/attachment/recording-type/height policies locked
- Group 04 page component instances resolve through confirmed `Common_Component` groups
- no legacy `MVP_공용_UI` source remains on the Group 04 production page

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

Canonical Figma:
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

Canonical Figma:
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
- Group 06 page: `36 / 36` instances resolve through `Common_Component`
- missing main-component links: `0`
- legacy `MVP_공용_UI` source instances: `0`
- local component masters on the Group 06 production page: `0`

**GROUP 06 CLOSED.**

Do not reopen completion shell, PR/no-PR presentation, volume-N/A presentation, recommended-routine completion dialogs, or component organization without a concrete new conflict/regression or explicit PO request.

---

# GROUP 07 — ANALYSIS / WORKOUT HISTORY CLOSED

Final closure:
- `docs/ux-decisions/2026-09-16-group07-final-closure-qa.md`

Product rules:
- `docs/ux-decisions/2026-09-14-group07-final-policy-lock.md`

Canonical Figma:
- file `W3lZurXCXbThP67rF2xk2b`
- page `07 분석 · 운동 기록` — `233:2078`
- `07A_분석홈` — `887:936`
- `07B_부위상세` — `887:1028`
- `07B_부위상세_Empty` — `1057:593`
- `07D_운동기록상세_Exploration` — `836:1593`
- `07D_운동기록상세_DeleteConfirm` — `1136:4054`

Final closure corrections / verification:
- 07A total-weight Y-axis normalized to approved Korean compact labels `1.5만 / 1만 / 5천 / 0`
- 07B Empty restored to approved `진행한 운동` section header + compact empty-state card + single centered period-specific message
- 07B contributor list remains all rows / page scroll / no arbitrary truncation
- 07D shared PR trophy card and shared 2×2 summary remain linked through `Common_Component`
- 07D saved-session Trash + destructive confirmation PASS
- separate 07C workout-record overview remains removed

Common_Component organization:
- `07_GROUP_CONFIRMED_COMPONENTS` — `1578:987`
- existing original masters moved without duplication/detach:
  - `AnalysisPeriodTabs` — `961:1368`
  - `MetricSegmentedControl` — `1025:1092`
  - `AnalysisProgressRow` — `854:6951`

Final structural QA:
- Group 07 page instance nodes: `77`
- missing main-component links: `0`
- source `Common_Component`: `73`
- source `MVP_공용_UI`: `4`
- remaining 4 legacy-source instances are only `ListCard` / `RecentWorkoutRow`, intentionally shared with deferred Group 02 and therefore not moved during Group 07 closure
- local Group 07 production-page component masters: `0`

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

Do not reopen analysis structure, contributor/empty presentation, 07D PR/summary/delete behavior, chart formatting, or component organization without a concrete conflict/regression or explicit PO request.

---

# GROUP 02 — HOME REFINEMENT DEFERRED

Product Owner explicitly deferred Group 02 Home refinement.

Do not resume it unless PO requests it.

---

# GROUP 08 — SETTINGS / ACCOUNT ACTIVE

Canonical Figma:
- file `W3lZurXCXbThP67rF2xk2b`
- page `08 설정 · 계정` — `233:2079`
- exploration section `08_SETTINGS_V1_EXPLORATION` — `1158:645`

Current checkpoint:
- `docs/ux-decisions/2026-09-14-group08-legal-links-session-handoff.md`

Already approved / do not reopen without a new issue:
- profile/account base and account-exit flow/privacy policy
- unit settings
- workout settings presentation / flow
- notification settings current scope
- FAQ accordion and shared `AccordionItem`
- support inquiry flow and shared `TextArea` / `AttachmentSlot`
- Terms / Privacy entry rows link to external public documents; do not rebuild full legal-document screens in Figma

Release follow-ups that are not current Figma blockers:
- actual public Terms / Privacy URLs
- exact support-inquiry record/image-attachment retention period
- external account-deletion request URL
- final timer sound assets / labels

Current unresolved Group 08 launch-level items:
- `구독 관리`
- `언어`
- `테마`

---

# NEXT OPEN ITEM

**Group 08 — Settings / Account closeout**

Continue from `docs/ux-decisions/2026-09-14-group08-legal-links-session-handoff.md`:
1. decide whether `구독 관리 / 언어 / 테마` are visible at MVP launch or hidden/deferred
2. check whether any remaining Group 08 launch-level policy is truly blocking
3. perform only the necessary final Settings-home cleanup / Group 08 lock

Do not rebuild legal full-text screens in Figma. Terms and Privacy use external public pages.
Do not reopen Group 07, Group 06, Group 05, Group 04, Group 03, or deferred Group 02 without a concrete conflict/regression or explicit PO request.
Do not begin Cursor implementation handoff.

# Development boundary

Product Owner가 개발 전환을 명시하기 전까지 개발/Cursor handoff를 하지 않는다.
