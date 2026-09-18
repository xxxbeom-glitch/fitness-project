# CURRENT — Fitness Project

**Updated:** 2026-09-18

## Current mode

`DESIGN SYSTEM / FIGMA QA · LIGHT COLOR SYSTEM D MVP ROLLOUT APPLIED / COLOR-SURFACE PO ACCEPTED · COMPONENT/BINDING MAINTENANCE PO APPROVED · SPLASH / APP LOGO / EXERCISE THUMBNAIL VISUAL MAINTENANCE PO APPROVED · EXERCISE THUMBNAIL LOCAL AUTO-CROP VALIDATED / OVERNIGHT BULK RUN PENDING · SHARED TABS / SELECTION LIST MAINTENANCE PO APPROVED · RADIUS RULE PREVIEW ONLY / NOT ROLLED OUT · GROUP 02 02A BLANK-WORKOUT ENTRY PO APPROVED / 02B COMPACT HOME GRID DIRECTION PO APPROVED / CANONICAL REFLECTED / FOCUSED QA PASS · GROUP 03 ROUTINE CLOSED · GROUP 04 EXERCISE LIBRARY/DETAIL CLOSED · GROUP 05 ACTIVE WORKOUT CLOSED EXCEPT TARGETED BLANK-WORKOUT EMPTY STATE FOLLOW-UP · GROUP 06 COMPLETION CLOSED WITH 2026-09-17 VISUAL AMENDMENTS · GROUP 07 ANALYSIS/WORKOUT HISTORY CLOSED (BODY-MAP PRODUCTION VISUAL ASSETS APPLIED) · GROUP 08 SETTINGS/ACCOUNT CLOSED WITH 2026-09-18 VISUAL AMENDMENTS · NO CURSOR IMPLEMENTATION HANDOFF`

## Resume rule

`PROJECT_INSTRUCTIONS → CURRENT → latest active checkpoint → directly relevant Decision/Spec → NEXT OPEN ITEM`

이미 PO 승인 또는 QA PASS된 범위는 새 변경·충돌·regression 가능성·명시 재검토 요청이 없으면 다시 처음부터 검토하지 않는다.

---

## Canonical Figma

Current editing surface:
- file `W3lZurXCXbThP67rF2xk2b`
- page `MVP_전체_와이어프레임` — `34:1076`
- shared component page `Common_Component`
- current top-level independent screen frames: `98`
- current Light roots: `98 / 98`
- group wrapper frames: `0`

Whole-MVP component linkage read-back after the latest maintenance:
- instance nodes: `1,977`
- missing main-component links: `0`
- live MVP instances whose source page is not `Common_Component`: `0`

The prior `97` screen count after the Group 08 FAQ removal and Group 06 recommended-routine dialog restructuring is superseded by the current `98` count after adding the approved `00_Splash` screen.

---

## Latest active checkpoints

### Current active asset-prep checkpoint
- `docs/ux-decisions/2026-09-18-exercise-thumbnail-production-crop-prep.md`

### Current consolidated maintenance
- `docs/ux-decisions/2026-09-18-mvp-figma-maintenance-checkpoint.md`
- previous baseline: `docs/ux-decisions/2026-09-17-mvp-component-binding-settings-maintenance-checkpoint.md`

### Light color system / MVP rollout
- `docs/ux-decisions/2026-09-17-light-color-system-po-approval.md`
- `docs/ux-decisions/2026-09-17-light-color-system-session-handoff.md`
- `docs/ux-decisions/2026-09-17-mvp-light-theme-rollout-preview.md`
- `docs/ux-decisions/2026-09-17-mvp-light-theme-color-acceptance.md`

### Shared design-system maintenance
- `docs/ux-decisions/2026-09-17-shared-tabs-consolidation-checkpoint.md`
- `docs/ux-decisions/2026-09-17-shared-tabs-option-list-maintenance.md`
- `docs/ux-decisions/2026-09-17-light-radius-exploration-checkpoint.md`

### Historical group closures / current product-policy references
- Group 02 compact Home direction exploration: `docs/ux-decisions/2026-09-18-group02-home-routine-selected-compact-direction.md`
- Group 03 routine-name amendment: `docs/ux-decisions/2026-09-18-group03-routine-name-auto-default-policy.md`
- Group 04: `docs/ux-decisions/2026-09-15-group04-final-closure-qa.md`
- Group 04 custom-exercise field policy: `docs/ux-decisions/2026-09-15-group04-custom-exercise-selection-flow.md` — amended 2026-09-18
- Group 04 custom-exercise save action/destination: `docs/ux-decisions/2026-09-15-group04-custom-exercise-save-destination.md` — amended 2026-09-18 / Figma reflected
- Group 05: `docs/ux-decisions/2026-09-16-group05-manual-timer-final-closure-qa.md`
- Group 06: `docs/ux-decisions/2026-09-16-group06-final-closure-qa.md`
- Group 06 recommended flow: `docs/ux-decisions/2026-09-14-recommended-routine-acceptance-current.md`
- Group 07: `docs/ux-decisions/2026-09-16-group07-final-closure-qa.md`
- Group 07 policy: `docs/ux-decisions/2026-09-14-group07-final-policy-lock.md`
- Group 07 body-map Production visual asset application: `docs/ux-decisions/2026-09-18-analysis-bodymap-production-visual-asset-application.md`
- Group 07 prior body-map asset defer baseline: `docs/ux-decisions/2026-09-15-analysis-bodymap-asset-mapping-deferred.md`
- Group 08 historical closure: `docs/ux-decisions/2026-09-16-group08-final-closure-qa.md`

The 2026-09-17 consolidated maintenance checkpoint supersedes older closure documents only where it explicitly records a later PO-approved amendment.

---

# CURRENT DESIGN-SYSTEM STATE

## Light baseline — accepted

Current approved Light values relevant to the live MVP:
- Primary / Brand `#218F8A`
- Primary Action / CTA `#1A7E79`
- Primary Soft `#DCEFED`
- Canvas `#F6F7F7`
- Surface `#FFFFFF`
- Subtle Surface `#EFF2F2`
- Border / Subtle `#EAEEED`
- Border / Default Control `#E7EBEA`
- Border / Strong CTA `#D7DCDA`
- Text Primary `#242927`
- Text Secondary `#626866`
- Text Tertiary `#929A98`
- Success `#4F8A61`
- Danger `#C85A64`

Latest amendments:
- Light `text/primary`: `#242927`
- Light `border/default`: `#E7EBEA`
- Secondary CTA outline contrast: semantic `border/strong` = Light `#D7DCDA`, Dark `#343635`; `CTA Button / Secondary` Default + Pressed use `border/strong`, Disabled remains `border/default`
- other previously accepted Dark token values remain unchanged.

Surface rule remains:
- content/grouped cards: no outer border + subtle `0 2px 8px` shadow at ~5%
- controls may retain semantic default border
- standard D surfaces use no background blur
- Workout LiveBar keeps its accepted local light treatment

## Shared Tabs

Page-level Routine / Exercise Detail / Analysis period tabs reuse shared `Tabs`:
- full width `360 × 54`
- equal-width items
- selected label `brand/primary`
- active bottom underline `2px brand/primary`

## Selection indicator rule

- immediate/applied selection → shared `OptionItem` + right check
- pending selection committed by explicit confirmation CTA → RadioButton

Group 05 replacement-exercise flow remains the intentional RadioButton exception.

## Grouped-card / list divider rule

Current approved rule:
- row content may retain its normal horizontal inset
- row divider spans the full grouped-card/list container width
- standard 320px cards/lists therefore use a 320px divider
- no divider after the final row

This is applied through shared components where available, including `SettingCard` and `PageOptionList`.

## Radius boundary

The size-aware radius exploration remains **preview-only**.

Do not propagate the radius experiment across the MVP or shared component system until the Product Owner explicitly approves it.

---

# COMPONENT / BINDING MAINTENANCE STATUS

The corrected component QA standard is:

`repeated UI → Common_Component master → production Instance → nested shared UI remains linked → variable/type/style bindings preserved`

Latest maintenance result:
- Groups 01–02: no additional repeated-UI component gap found
- Group 03: repeated routine-name / attachment-overlay / bottom-CTA patterns componentized
- Group 04: custom-exercise/search/attachment/history/growth/selection/footer repeated patterns componentized
- Group 05: workout attachment overlay reuse + replacement footer + timer quick-adjust shared patterns
- Group 06: completion header/summary/footer/status/PR/session-summary shared structure
- Group 07: workout session/summary/body-distribution/body-area-detail shared patterns
- Group 08: settings rows/cards, option lists, headers, and screen-content patterns consolidated into shared components

Latest whole-MVP linkage verification:
- `1,977 / 1,977` instances resolve to a main component
- all current MVP component sources resolve through `Common_Component`
- detached/missing main-component instances: `0`

---

# LATEST CROSS-GROUP VISUAL MAINTENANCE — 2026-09-18

Approved and reflected in canonical Figma:
- final `00_Splash` added: `360 × 780`, `brand/primary` background, centered white Tampin wordmark `139 × 28`, no loading indicator/copy
- rejected Light/Dark splash exploration candidates removed
- shared `AppLogo` remains `139 × 28`; internal artwork uses PO-supplied Tampin black/white assets
- `02A` `StartChoiceSection` local wrapper uses `Clip content = OFF` so card shadows are not cut; actual Home scroll viewport clipping remains unchanged
- PO-supplied `Common_Component > thumbs` contains 3 real thumbnail source samples
- current exercise-thumbnail visual preview is applied to `93` instances across `19` screens
- shared exercise thumbnails use `1px INSIDE border/subtle` to separate very-light imagery from white/light surfaces
- current thumbnail image assignment is a visual preview only; exact Production exercise-to-media mapping remains deferred
- Production thumbnail crop/framing prep began with Adobe MCP sample work; generated crop output was valid, but saving generated outputs back into the target Creative Cloud folder repeatedly failed with HTTP `500`
- that Adobe cloud-save problem is no longer the production blocker: a local Photoshop UXP auto-crop route is now technically validated
- the decisive Photoshop script fix was top-level Global Await (`await main();`) so folder/file operations remain alive after the picker returns
- current local crop baseline: `512 × 512`, detected non-white athlete/equipment bounds, target content span about `400px`, per-image square crop, originals preserved
- 5-image real crop test: PASS / PO feedback positive enough to expand testing
- 50-image logged batch: execution confirmed working
- prepared overnight candidate: `tools/photoshop/tampin_auto_crop_v05_overnight.psjs`
- overnight safeguards: 100 images per batch, 60s pause, checkpoint logging, existing-output skip/resume, per-file failure continuation
- full ~3,000-image overnight run and post-run visual exception QA are still pending; Production crop convention is not yet fully locked
- canonical prep record: `docs/ux-decisions/2026-09-18-exercise-thumbnail-production-crop-prep.md`
- focused read-back: `93 / 93` thumbnails have the subtle outline; old placeholder remains in current exercise-thumbnail instances = `0`
- latest whole-MVP linkage: `1,977 / 1,977` instances resolve; missing main-component links = `0`; non-`Common_Component` sources = `0`

Canonical record:
- `docs/ux-decisions/2026-09-18-mvp-figma-maintenance-checkpoint.md`

---

# GROUP 02 — HOME TARGETED REFINEMENT

The Product Owner explicitly reopened only the Home start/access presentation around blank workouts and the routine-selected Home state.

## 02A no-routine state — approved

Current locked 02A primary actions:
- `빈 운동 시작`
- `내 루틴 만들기`

The previous `추천 루틴 받기` Home action is removed.

`빈 운동 시작`:
- starts an active workout without a saved routine
- begins with zero exercises
- uses the existing exercise-add flow during the session
- does not automatically create a saved routine

Recommended ready-made routines remain in MVP as a secondary Routine-area discovery/use path rather than a Home primary action.

Decision:
- `docs/ux-decisions/2026-09-18-group02-home-blank-workout-entry.md`

Figma reflected:
- `02A_Home_NoRoutine` `1346:686`
- shared `HomeStartChoiceCard` Recommended variant repurposed to `Type=BlankWorkout` `1719:1042`

## 02B routine-selected state — compact grid direction approved / canonical reflected

Canonical screen:
- `02B_Home_RoutineSelected` — `1329:593`

Approved direction:
- large selected-routine hero is replaced by compact quick-start cards
- selected routine and blank workout use the same ~`320 × 80` white card language
- both cards use a `36 × 36` circular action with existing `Common_Component` `chevron-right`
- action treatment = `brand/soft` circle + `action/primary` chevron
- Quick Start shared `SectionHeader` uses `Trailing=None`
- `루틴 변경` header action is not used
- Home `최근 운동` region is replaced by compact `내 루틴`
- `내 루틴` uses a `2 × n` grid
- grid width = `320`, gap = `8px`
- current routine tiles = `156 × 88`
- current examples: `Pull Day`, `Leg Day`
- routine tile content = routine name + workout count/time
- right-side chevrons are intentionally omitted from My Routine tiles
- `내 루틴 > 새 루틴` uses the existing shared `SectionHeader / Trailing=Action` text format
- custom plus/chevron header overlays are not used

Canonical promotion / cleanup:
- approved B-grid direction promoted into existing canonical `1329:593`
- all temporary 02B Home exploration frames deleted after promotion
- only one top-level `02B_Home*` frame remains

Focused QA:
- canonical viewport `360 × 780`
- My Routine section `320 × 124`
- two current tiles `156 × 88`
- My Routine tile chevrons = `0`
- visible text overflow = `0`
- visible text font family = SUIT
- missing main-component links inside canonical 02B = `0`
- focused QA PASS

Decision / exploration history:
- `docs/ux-decisions/2026-09-18-group02-home-routine-selected-compact-direction.md`

Do not begin Cursor implementation.

Direct design gap still open:
- current MVP Figma has no zero-exercise Active Workout state
- add a focused blank-workout empty state as the canonical destination
- do not reopen unrelated Group 05 behavior

---

# GROUP 03 — ROUTINE CLOSED / ROUTINE-NAME POLICY AMENDED

Group 03 remains Product/UX closed except for the explicit 2026-09-18 routine-name amendment.

Current locked routine-name rule:
- user-entered routine name is optional
- blank name does not block save by itself
- when the routine otherwise satisfies existing save-validity rules, blank name is saved as `나의 루틴 YYMMDD`
- additional automatically named routines on the same local date use `(2)`, `(3)` ... suffixes
- user-entered names are preserved
- auto-generated names can be edited later and are not regenerated by later exercise edits

Decision:
- `docs/ux-decisions/2026-09-18-group03-routine-name-auto-default-policy.md`

Post-closure component maintenance is recorded in the latest 2026-09-17 consolidated maintenance checkpoint.

Focused Figma follow-up is limited to 03E/03E2 create/save states if current visuals imply that routine name is mandatory.

Do not reopen unrelated Group 03 behavior without a concrete conflict/regression or explicit PO request.

---

# GROUP 04 — EXERCISE LIBRARY / DETAIL CLOSED

Group 04 remains Product/UX closed.

Current locked direction remains:
- exercise search/detail/custom-exercise flows closed except explicit 2026-09-18 custom-create required-field amendment
- shared full-width Tabs
- immediate selection lists use `OptionItem` + check
- recording/attachment policies unchanged

Custom exercise create required-field policy:
- required: `운동명`, `주 타겟 근육`, `기록 방식`
- optional: `장비`, `보조 타겟 근육`
- optional fields do not block Save
- `주 타겟 근육` remains required for analysis/filter attribution
- decision authority: `docs/ux-decisions/2026-09-15-group04-custom-exercise-selection-flow.md` (2026-09-18 amendment)

Custom exercise save-action policy:
- primary save commit is the bottom Primary CTA `저장`
- Create header right = none
- Edit header right = Trash
- Edit base states keep Save Disabled until a valid change exists
- old header Save and bottom `운동 삭제 / 확인` DualCTA are not used
- shared Figma `CustomExerciseSaveFooter` uses `State=Default / Disabled`
- decision authority: `docs/ux-decisions/2026-09-15-group04-custom-exercise-save-destination.md` (2026-09-18 amendment / Figma reflected)

Custom exercise history-lock presentation:
- completed history exists → `기록 방식` is `ValueOnly` read-only
- do not open selector and do not show a Toast on tap
- persistently show neutral inline hint: `기록이 있는 운동은 기록 방식을 변경할 수 없어요.`
- shared `icon/hint` now has `State=Error / Info`; existing Group 01 validation remains Error
- shared `InlineHint` component is used in `04F_Custom_Edit_HistoryLocked`
- decision authority: `docs/ux-decisions/2026-09-15-group04-custom-exercise-selection-flow.md` (2026-09-18 amendment / Figma reflected)

Deferred data/runtime work remains:
- final Production Exercise DB normalization/deduplication from purchased Gym Animations source
- exact Production attachment allowlists / canonical attachment IDs/names / media mapping
- Cursor implementation only after explicit handoff

Do not reopen QA-passed behavior without a concrete conflict/regression or explicit PO request.

---

# GROUP 05 — ACTIVE WORKOUT CLOSED

Locked:
- WorkoutLiveBar / pinned content scroll
- automatic RestLiveBar
- separate Manual Timer popup
- end/discard/update flow
- replacement-exercise selection remains RadioButton + explicit `선택 완료`
- shared Common_Component structure

Post-closure component/binding maintenance is recorded in the latest consolidated checkpoint.

2026-09-18 targeted visual maintenance:
- shared `ExerciseReplaceItem` uses standalone-card surface: white surface / no outer stroke / 12px radius / subtle 0 2px 8px shadow
- `05H_Exercise_Replace_Selected` reflects the card treatment; shared inheritance also aligns 05G / 05G2
- Secondary CTA Default/Pressed outline uses `border/strong`; Disabled remains `border/default`
- shared `ActionRows` background uses `bg/surface` instead of `bg/default`; existing outer border and vertical Divider styling are preserved
- `05I_Workout_Menu` representative QA PASS

**GROUP 05 CLOSED.**

---

# GROUP 06 — WORKOUT COMPLETION CLOSED / VISUAL AMENDMENTS APPLIED

Core completion flow remains closed.

Current Figma amendments recorded 2026-09-17:
- shared `CompletionHeader / CompletionSummary / CompletionFooter`
- shared `CompletionPRStatusIcon`
- plain shared `07D/PersonalRecordCard` treatment with standalone trophy/status visual in the completion header area
- current Default / PR-none / Volume-N/A completion states remain linked to the shared completion structure

Recommended-routine dialog states are now normal app-screen states:
- `FINAL_06_RECOMMENDED_ROUTINE_DIALOGS` — `1896:8585` — `360 × 780`
- `FINAL_06_RECOMMENDED_ROUTINE_MODIFIED_SAVE_DIALOG` — `1896:8610` — `360 × 780`

Both use:
- completion screen background
- full-screen dim overlay
- shared `DialogCard / DialogButtons`
- centered dialog

Recommended-routine behavior itself is unchanged.

Do not reopen completion behavior without a concrete conflict/regression or explicit PO request.

---

# GROUP 07 — ANALYSIS / WORKOUT HISTORY CLOSED

Group 07 remains Product/UX closed.

Latest design-system maintenance:
- Analysis recent-change / recent-workout grouped-card dividers span full card width
- Body Area contributor-list dividers span full card width
- Workout History performed-exercise table dividers span full card width
- `07D_Workout_History_Detail_DeleteConfirm` is normalized to a standard `360 × 780` full-screen dialog overlay state
- shared component/binding cleanup is recorded in the current consolidated checkpoint

PO-prepared Production front/back body-map visual assets are now applied through the existing shared Group 07 components.

Current reflected Figma:
- source: `Common_Component > bodymap` — `1979:11119`
- `BodyDistributionCard / Context=Analysis` BodyMapPreview — `1868:8169`
- `BodyDistributionCard / Context=Session` BodyMapPreview — `1868:8241`
- `BodyAreaDetailCard / State=Data` BodyMapPreview — `1868:8398`
- neutral front/back base layers added; all existing muscle layers now use the PO-prepared source images
- existing visibility/opacity semantics are preserved
- focused master/instance read-back QA PASS

Canonical record:
- `docs/ux-decisions/2026-09-18-analysis-bodymap-production-visual-asset-application.md`

This resolves the prior missing-production-asset Figma deferral. Runtime binding/implementation remains outside the current Design/Figma mode.

**GROUP 07 CLOSED.**

---

# GROUP 08 — SETTINGS / ACCOUNT CLOSED / MVP SCOPE AMENDED

The historical Group 08 closure remains valid except where superseded by the explicit 2026-09-17 amendment below.

## FAQ removed from MVP

By explicit PO decision:
- `08F_FAQ` removed
- `08F1_FAQ_Expanded` removed
- Settings Home `자주 묻는 질문` row removed

Current Group 08 live screen count: `17`.

FAQ is not part of the current MVP scope.

## Settings Home grouping

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

`구독 관리` remains a future-facing stub with `준비 중인 기능이에요.` feedback and no management destination screen.

## Profile logout

`08B_Profile` current rule:
- no grouped account card for Logout
- `로그아웃` is a plain centered text action
- it sits directly above the Save CTA
- gap to Save CTA: `16px`
- implementation is in shared `ProfileContent`

## Settings lists

- `SettingCard` row content keeps its inset while row dividers span full 320px card width
- `PageOptionList` `Items=2/3` uses full 320px between-row dividers with no trailing divider
- `08D2_Timer_End_Sound` and `08H_Language_Settings` remain immediate-selection `OptionItem` + check screens

## Default rest-time wheel picker

`08D1_Default_Rest_Time_Sheet` current approved picker presentation:
- shared `WheelPicker/SingleColumn` uses `bg/default`
- radius = 12 using the existing radius token
- width/height remain `320 × 200`
- existing wheel rows and selected-row guide lines remain unchanged
- no additional stroke or shadow
- treatment aligns the picker with the internal-box hierarchy used by other Group 08 bottom sheets
- focused read-back QA PASS

Shared nodes:
- `WheelPicker/SingleColumn` `1169:1105`
- `WheelPicker_RestTime` `1170:697`
- `08D1_Default_Rest_Time_Sheet` `1163:676`

## Support inquiry attachment remove affordance

`08G_Support_Inquiry` current approved attached-image presentation:
- shared `AttachmentSlot / Filled` includes a circular remove badge overlapping the slot top-right
- badge: `20 × 20`, position `x=56 / y=-2`
- badge fill = `neutral/900`
- badge outline = 1px `neutral/100`
- existing subtle shadow + `radius/full` retained
- PO-provided `close 1` SVG glyph is used at `6 × 6`, centered in the badge
- Filled slot and parent `AttachmentSlots` allow overflow so the badge is not clipped
- representative 08G state shows slot 1 Filled and slots 2–3 Empty
- focused screenshot/read-back QA PASS

Shared nodes:
- `AttachmentSlot` set `1255:1161`
- Filled `1255:1150`
- `RemoveBadge` `1928:8903`
- `SupportInquiryContent` `1882:9310`

## Existing Group 08 behavior retained

Unchanged:
- profile photo / nickname / provider presentation
- account deletion/destructive flow
- unit settings
- workout settings
- notification scope
- support inquiry category / submit / failure behavior outside the approved attachment-remove visual amendment
- Terms / Privacy external-document entry behavior
- language supports `한국어 / English` and applies immediately
- theme remains hidden for MVP

Release follow-ups that are not Figma blockers:
- actual public Terms / Privacy URLs
- exact inquiry record/image retention period and disclosure
- external account-deletion request URL
- final timer sound assets / labels

**GROUP 08 CLOSED.**

---

# NEXT OPEN ITEM

**The current active side-track is the Production exercise-thumbnail overnight bulk crop run. The local Photoshop auto-crop path is technically validated through 5-image and 50-image tests; the full ~3,000-image run and post-run exception QA remain open. The previously opened zero-exercise Active Workout follow-up remains next in the Figma track.**

Immediate focused follow-ups:
1. Exercise thumbnail Production crop prep — run `tools/photoshop/tampin_auto_crop_v05_overnight.psjs` on the full source folder, inspect `tampin_crop_log.txt`, QA representative/edge-case outputs, and lock the crop convention only if the large-run result is acceptable
2. Blank-workout Active state — add the canonical zero-exercise Active Workout destination for `02A 빈 운동 시작`, reusing existing Group 05 shell/components and existing exercise-add flow
3. Group 03 `03E / 03E2` routine-create/save Figma alignment — verify name is optional and save is not visually/structurally gated by name alone

Remaining intentionally deferred / later items:
1. size-aware radius system — preview only; propagate only after explicit PO approval
2. Routine-tab recommended-routine secondary placement refinement
4. pre-release Settings follow-ups — public Terms/Privacy URLs, inquiry-retention disclosure, external deletion-request URL, final timer-sound assets/labels
5. implementation/Cursor handoff — only after explicit Product Owner authorization

Do not automatically reopen Groups 03–08.
Do not automatically propagate the radius experiment.
Do not begin Cursor implementation handoff automatically.

# Development boundary

Product Owner가 개발 전환을 명시하기 전까지 개발/Cursor handoff를 하지 않는다.
