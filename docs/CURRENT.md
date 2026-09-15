# CURRENT — Fitness Project

**Updated:** 2026-09-15

## Current mode

`PRODUCT/UX FIGMA QA · GROUP 04 EXERCISE LIBRARY/DETAIL CLOSED · GROUP 05 ACTIVE WORKOUT CLOSED (2026-09-15 LIVE-BAR + SCROLL AMENDMENTS LOCKED) · GROUP 06 COMPLETION FINAL CLOSURE QA NEXT · ANALYSIS BODY-MAP ASSET MAPPING DEFERRED · GROUP 03 ROUTINE CLOSED · GROUP 02 HOME DEFERRED BY PO · NO CURSOR IMPLEMENTATION HANDOFF`

## Resume rule

`PROJECT_INSTRUCTIONS → CURRENT → latest active checkpoint → directly relevant Decision/Spec → NEXT OPEN ITEM`

이미 PO 승인 또는 QA PASS된 범위는 새 변경·충돌·regression 가능성·명시 재검토 요청이 없으면 다시 처음부터 검토하지 않는다.

## Latest active checkpoint

- `docs/ux-decisions/2026-09-15-group05-active-workout-scroll-behavior.md`
- `docs/ux-decisions/2026-09-15-group05-active-workout-live-bar-amendment.md`
- `docs/ux-decisions/2026-09-15-group04-final-closure-qa.md`

Directly relevant next Group 06 checkpoints:
- `docs/ux-decisions/2026-09-14-group06-completion-shared-summary-sync.md`
- `docs/ux-decisions/2026-09-12-group06-page-cleanup.md`
- `docs/ux-decisions/2026-09-12-group06-completion-final-shell.md`
- `docs/ux-decisions/2026-09-14-recommended-routine-acceptance-current.md`

---

# GROUP 04 — EXERCISE LIBRARY / DETAIL CLOSED

**Final closure:** `docs/ux-decisions/2026-09-15-group04-final-closure-qa.md`

Canonical Figma:
- file `W3lZurXCXbThP67rF2xk2b`
- page `04 운동 목록 · 상세` — `233:2075`

Base canonical states:
- `04A_Search` — `207:1238`
- `04B_Search_Selected` — `515:1140`
- `04C_Search_Empty` — `539:1050`
- `04D_Exercise_Detail_Info` — `40:2325`
- `04D_Exercise_Detail_History` — `34:1714`
- `04D_Exercise_Detail_Growth` — `1000:1519`
- `04E_Custom_Create` — `34:1672`
- `04F_Custom_Edit` — `34:1692`
- `04H_Exercise_Attachment_Selection` — `170:2174`
- `04H_Custom_Attachment_Input` — `552:3356`
- `04A_Filter_Equipment_Page` — `515:3327`
- `04A_Filter_BodyPart_Page` — `515:3514`

Custom-exercise selection / completion states:
- `04I_Custom_Equipment_Select` — `1396:2298`
- `04J_Custom_PrimaryMuscle_Select` — `1396:8091`
- `04K_Custom_SecondaryMuscle_Select` — `1396:8179`
- `04L_Custom_RecordingType_Select` — `1396:8271`
- `04F_Custom_Edit_HistoryLocked` — `1396:8393`
- `04E_Custom_Create_Valid` — `1401:1890`
- `04EF_Custom_Unsaved_Confirm` — `1401:7683`
- `04F_Custom_Delete_Confirm` — `1429:1751`

## Locked Group 04 rules

### Screen height

- base/reference size: `360 × 780`
- `780` is not a hard maximum
- finite content that genuinely needs more room may grow beyond 780
- variable/unbounded search/history content may keep a 780 root with relevant internal scroll
- no forced compression to hit 780

Verified finite-height exceptions:
- `04D_Exercise_Detail_Info` — `360 × 894`
- `04K_Custom_SecondaryMuscle_Select` — `360 × 834`

### Custom exercise

Required:
- exercise name
- equipment
- primary muscle
- recording type

Optional:
- secondary muscle
- user-added media

Selection:
- full-page single-selection using existing `Nav Header` + `OptionItem`
- secondary muscle includes `선택 안 함`
- recording type uses the 4 MVP Group 05 types

Edit history lock:
- once at least one completed history record exists, recording type is read-only
- helper: `기록이 있는 운동은 기록 방식을 변경할 수 없어요.`
- equipment / primary / secondary remain editable

Save destination:
- Create Save → exercise add/list flow
- newly created custom exercise is immediately selected
- Edit Save → that exercise detail with updated metadata
- no separate creation-complete screen

Delete policy:
- remove custom exercise from search/list/new-add targets and all saved routines containing it
- preserve completed historical records and derived History/Growth
- confirmation dialog required
- deleting the only exercise in a saved routine retains the routine as an empty routine
- Group 03 empty-routine state: `03D_Routine_Detail_Empty` — `1423:1972`

Attachment media fallback:
- reviewed attachment-specific Gym Animations media exists → use it
- otherwise → canonical exercise base media
- direct/custom attachment text does not auto-map to media → base media
- no separate no-media Exercise Detail state
- obsolete `04D_Exercise_Detail_Info_NoMedia` frame removed

## Final QA result

- final scoped read-back + screenshot QA PASS
- delete dialog copy/actions and DialogCard reuse PASS
- Create/Edit Save representative states intact
- attachment picker/direct-input representative states intact
- canonical Exercise Detail remains media-present and structurally intact
- obsolete no-media representative frame absent
- no blocking regression found

**GROUP 04 CLOSED.**

Do not reopen already passed recording-type, selector, list/filter, save-destination, delete-policy/dialog, attachment-picker/media-fallback, or height QA without a new conflict/regression.

## Preserved deferred data/runtime work

- final canonical Production Exercise DB regeneration from purchased Gym Animations `MP4/MALE/Library_database` raw **2,109-source-row** catalog after normalization/deduplication
- exact Production exercise attachment allowlists / canonical attachment IDs and names / attachment-media mapping
- Cursor implementation

The old 195/211 Production target is not the current raw-source basis after the Gym Animations package analysis. Final canonical app exercise count remains a data-normalization result, not a fixed 2,109 UI count.

---

# GROUP 05 — ACTIVE WORKOUT CLOSED

Original final closure:
- `docs/ux-decisions/2026-09-10-group05-closure-qa.md`

Latest PO-approved post-closure amendments:
- `docs/ux-decisions/2026-09-15-group05-active-workout-live-bar-amendment.md`
- `docs/ux-decisions/2026-09-15-group05-active-workout-scroll-behavior.md`

Canonical Figma:
- file `W3lZurXCXbThP67rF2xk2b`
- page `05 운동 중` — `233:2076`
- `05A_Workout_Weight` — `148:1979`
- canonical live-bar instance — `1492:2407`
- `05A_Workout_Weight_Scrolled_3rdExercise` — `1495:2408`
- `05F_Workout_RestTimer` — `1498:2769`

Latest locked presentation:
- old 3-metric `운동시간 / 볼륨 / 완료 세트` summary is removed from canonical 05A
- 64px `WorkoutLiveBar` sits directly below the Nav Header
- left = workout elapsed-time control + elapsed time
- right = compact `종료 / 취소`
- bottom = large Primary `운동 추가` only
- `종료` keeps the existing complete/incomplete save flow
- `취소` is the entry for the existing full-session discard confirmation; destructive semantics are unchanged

Workout elapsed-time variants:
- `Timer=Running` → pause icon + time at 100%
- `Timer=Paused` → resume/play icon + time at 60%
- this does not alter the separate automatic Rest Timer policy

Pinned scrolling behavior:
- representative viewport is `360 × 780`
- fixed top region = StatusArea 62 + Nav Header 56 + WorkoutLiveBar 64 = `182 px`
- only `WorkoutContent` scrolls (`y=182`, `360 × 598`, clipped vertical scroll)
- Nav Header and WorkoutLiveBar do not collapse/hide while moving to later exercises
- bottom `운동 추가` stays inside the scrolling content; it is not fixed
- RestTimerPill remains separate and floats below the live bar without replacing the fixed top hierarchy

Design system:
- `WorkoutLiveBar` component set — `1488:7122`
  - Running — `1485:935`
  - Paused — `1488:7106`
- `Workout Inline Action` — `1485:934`
- local `icon/play` — `1488:7086`
- existing local `icon/pause` reused
- `neutral/925` = `#0D0D10`
- `bg/workout-live` → `neutral/925`
- existing `heading/01`, `label/02`, `text/primary`, `border/default`, `state/danger`, `radius/xs`, `spacing/20`, `spacing/10`, `spacing/6` reused

Focused post-closure QA:
- approved C treatment promoted into canonical 05A
- old summary and old bottom end/cancel row absent
- bottom `운동 추가` retained
- Running/Paused visual read-back PASS
- Paused time opacity read-back = `0.60`
- canonical 05A now reads back as a 360 × 780 viewport with internal vertical scrolling
- third-exercise scrolled representative screenshot PASS
- Rest Timer representative screen synchronized to fixed Nav Header + WorkoutLiveBar structure; screenshot PASS

**GROUP 05 CLOSED AGAIN AFTER THE SCOPED 2026-09-15 AMENDMENTS.**

Do not repeat prior Group 05 QA or reopen unrelated behavior unless a later shared change creates a concrete regression risk or the PO explicitly requests a new change.

---

# GROUP 03 — ROUTINE CLOSED

Group 03 remains closed.

Cross-group empty-routine exception already reflected and QA-passed:
- `03D_Routine_Detail_Empty` — `1423:1972`
- routine identity retained at 0 exercises
- `운동 추가` shown
- `운동 시작` hidden

Do not reopen without a new conflict/regression.

---

# GROUP 02 — HOME REFINEMENT DEFERRED

Product Owner explicitly deferred Group 02 Home refinement. Do not resume it unless PO requests it.

---

# ANALYSIS — BODY-MAP ASSET MAPPING DEFERRED

Decision:
- `docs/ux-decisions/2026-09-15-analysis-bodymap-asset-mapping-deferred.md`

PO will first prepare the production-ready body-map image set.

Until then:
- use existing source muscle-highlight PNGs; do not redraw/recolor them
- preserve the already-validated blend-mode approach
- do not create replacement body-map artwork in Figma
- final canonical-muscle → PNG-layer mapping remains deferred

Analysis policy expansion is paused while the agreed group-by-group QA sequence is completed.

---

# NEXT OPEN ITEM

Continue the agreed group-by-group Figma/Product QA sequence.

**Group 06 — 운동 완료 final closure QA**

Focused scope only:
1. verify canonical completion states after the 2026-09-14 shared-summary sync
2. verify the two recommended-routine completion dialogs against the current accepted recommendation flow
3. verify shared component/instance integrity and current 360×780 representative states
4. if no blocker remains, create a Group 06 final closure checkpoint and mark Group 06 CLOSED

Do not reopen Group 05, Group 04, Group 03, or deferred Group 02 without a concrete conflict/regression or explicit PO request.
Do not resume Analysis product-policy decisions until the group-by-group QA sequence reaches that group.
Do not begin Cursor implementation handoff.

# Development boundary

Product Owner가 개발 전환을 명시하기 전까지 개발/Cursor handoff를 하지 않는다.
