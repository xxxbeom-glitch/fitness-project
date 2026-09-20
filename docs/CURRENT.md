# CURRENT — Fitness Project

**Updated:** 2026-09-20

## Current mode

`MVP 94 CONTENT/STATE FRAMES FROZEN · 94-SCREEN BEHAVIOR MATRIX COMPLETE · HANDOFF QA = FIX / DECISION NEEDED · PRIMARY BOTTOM-NAV COMPONENT PASS / ROOT PLACEMENT OPEN · WEEKDAY SCHEDULING CONFLICT · ROUTINE DUPLICATE OPEN · W/D/F SET SEMANTICS OPEN · REST-TIMER EDGE POLICY OPEN · RECOVERY SYSTEM-NOTIFICATION UX OPEN · TECH STACK / ARCHITECTURE OPEN · DURATION ACTIVE-SET UX OPEN · IMPLEMENTATION NOT STARTED`

## Resume rule

`PROJECT_INSTRUCTIONS → CURRENT → latest active checkpoint → directly relevant Decision/Spec → NEXT OPEN ITEM`

이미 PO 승인 또는 QA PASS된 범위는 새 변경·충돌·regression 가능성·명시 재검토 요청이 없으면 다시 처음부터 검토하지 않는다.

---

## Canonical Figma

Current editing surface:
- file `W3lZurXCXbThP67rF2xk2b`
- page `MVP_전체_와이어프레임` — `34:1076`
- shared component page `Common_Component`
- current top-level independent screen frames: `94`
- current Light roots: `94 / 94`
- group wrapper frames: `0`

Whole-MVP component linkage read-back after the latest maintenance:
- instance nodes: `1,855`
- missing main-component links: `0`
- live MVP instances whose source page is not `Common_Component`: `0`

The previous `98` screen count is superseded by the current `94` after the 2026-09-19 PO decision removed the recommended-routine list/detail/completion-dialog screens from the MVP.

---

## Latest active checkpoints

### MVP design freeze / implementation handoff preparation
- `docs/ux-decisions/2026-09-20-mvp-screen-design-freeze.md`
- `docs/implementation/README.md`
- `docs/implementation/MVP_IMPLEMENTATION_HANDOFF.md`
- `docs/implementation/MVP_SCREEN_INVENTORY.md`
- `docs/implementation/MVP_SCREEN_BEHAVIOR_MATRIX.md`
- `docs/implementation/MVP_HANDOFF_QA.md`

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
- `docs/ux-decisions/2026-09-20-bottom-app-bar-light-component-foundation.md`
- `docs/ux-decisions/2026-09-17-shared-tabs-consolidation-checkpoint.md`
- `docs/ux-decisions/2026-09-17-shared-tabs-option-list-maintenance.md`
- `docs/ux-decisions/2026-09-17-light-radius-exploration-checkpoint.md`

### Historical group closures / current product-policy references
- AppLogo primary color update: `docs/ux-decisions/2026-09-19-app-logo-primary-color.md`
- Cross-group dialog copy simplification: `docs/ux-decisions/2026-09-19-dialog-copy-simplification.md`
- Group 02 Home component/binding maintenance: `docs/ux-decisions/2026-09-19-group02-home-component-binding-maintenance.md`
- Group 02 compact Home direction: `docs/ux-decisions/2026-09-18-group02-home-routine-selected-compact-direction.md`
- Recommended-routine feature removal / Group 03 Routine simplification: `docs/ux-decisions/2026-09-19-recommended-routine-feature-removal.md`
- Group 03 routine-name amendment: `docs/ux-decisions/2026-09-18-group03-routine-name-auto-default-policy.md`
- Group 04: `docs/ux-decisions/2026-09-15-group04-final-closure-qa.md`
- Group 04 custom-exercise field policy: `docs/ux-decisions/2026-09-15-group04-custom-exercise-selection-flow.md` — amended 2026-09-18
- Group 04 custom-exercise save action/destination: `docs/ux-decisions/2026-09-15-group04-custom-exercise-save-destination.md` — amended 2026-09-18 / Figma reflected
- Group 05: `docs/ux-decisions/2026-09-16-group05-manual-timer-final-closure-qa.md`
- Group 06: `docs/ux-decisions/2026-09-16-group06-final-closure-qa.md`
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

Page-level Exercise Detail / Analysis period tabs reuse shared `Tabs`:
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
- App shell: local `BottomAppBar` component set `2078:2401` promoted from the prior read-only reference; Light bindings and 4 current IA variants QA PASS; root-screen placement still open
- Group 01: no additional repeated-UI component gap found
- Group 02 Home: remaining local Home cards componentized; shared `HomeQuickAction` + `HomeRoutineTile` added, existing `HomeRoutineFocusCard` / `HomeStartChoiceCard` reused and rebound
- Group 03: repeated routine-name / attachment-overlay / bottom-CTA patterns componentized
- Group 04: custom-exercise/search/attachment/history/growth/selection/footer repeated patterns componentized
- Group 05: workout attachment overlay reuse + replacement footer + timer quick-adjust shared patterns
- Group 06: completion header/summary/footer/status/PR/session-summary shared structure
- Group 07: workout session/summary/body-distribution/body-area-detail shared patterns
- Group 08: settings rows/cards, option lists, headers, and screen-content patterns consolidated into shared components

Latest whole-MVP linkage verification:
- `1,855 / 1,855` instances resolve to a main component
- all current MVP component sources resolve through `Common_Component`
- detached/missing main-component instances: `0`

---

# LATEST CROSS-GROUP VISUAL MAINTENANCE — 2026-09-18

Approved and reflected in canonical Figma:
- final `00_Splash` added: `360 × 780`, `brand/primary` background, centered white Tampin wordmark `139 × 28`, no loading indicator/copy
- rejected Light/Dark splash exploration candidates removed
- shared `AppLogo` remains `139 × 28`; default artwork now renders with existing `brand/primary` (`#218F8A`) through the existing wordmark mask
- current live default AppLogo instances: Login + Home states (4 total)
- Splash remains the explicit exception and keeps its separate white Tampin wordmark
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
- latest whole-MVP linkage: `1,855 / 1,855` instances resolve; missing main-component links = `0`; non-`Common_Component` sources = `0`

Canonical record:
- `docs/ux-decisions/2026-09-18-mvp-figma-maintenance-checkpoint.md`

---

# CROSS-GROUP DIALOG COPY — 2026-09-19

The Product Owner approved a copy simplification pass across all live MVP dialogs.

Scope:
- copy only: title / body / button labels
- behavior, branching, component structure, and action order unchanged
- live `DialogCard` count = `18`
- system-like wording reduced where possible
- active-workout dialogs shortened for faster scanning
- destructive actions use explicit action labels

Focused Figma QA:
- text overflow = `0`
- button-label overflow = `0`
- visible dialog text font family = SUIT
- missing main-component links inside dialog structures = `0`
- representative long-copy visual QA PASS

Canonical record:
- `docs/ux-decisions/2026-09-19-dialog-copy-simplification.md`

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

`추천 루틴` 기능 자체는 2026-09-19 PO 결정으로 현재 MVP에서 제거되었다. Home과 Routine 영역 모두 추천 루틴 진입점을 두지 않는다.

Decision:
- `docs/ux-decisions/2026-09-18-group02-home-blank-workout-entry.md`

Figma reflected:
- `02A_Home_NoRoutine` `1346:686`
- shared `HomeStartChoiceCard / Type=BlankWorkout` `1719:1042`
- Home scroll top padding / section rhythm aligned to `24px`
- one-off start prompt replaced by shared `SectionHeader / Trailing=None` with title `빠른 시작`
- existing `StartChoiceCard / BlankWorkout` and `BuildOwn` masters are now `320 × 80`
- both use the approved Home quick-action language: `36 × 36` `brand/soft` circle + `action/primary` `chevron-right`
- current card copy: `빈 운동 / 루틴 없이 바로 기록`, `내 루틴 만들기 / 운동과 세트를 직접 구성`
- `최근 운동` remains as state-specific secondary content

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

## 02D active Home state — compact direction aligned / canonical reflected

Canonical screen:
- `02D_Home_Active` — `1346:710`

Current reflected direction:
- Home scroll top padding / section rhythm aligned to `24px`
- shared `SectionHeader / Trailing=None` remains `진행 중인 운동`
- existing shared `RoutineFocusCard / State=Active` master `1719:1036` is compacted from the prior 198px hero to `320 × 80`
- old target-muscle tag row removed from the Active Home card
- old large `운동 계속하기` CTA removed from the Active Home card
- card now uses routine title + active progress meta + the approved `36 × 36` soft circular chevron action
- title/meta typography matches the approved 02B quick-start card
- `최근 운동` remains as state-specific secondary content

Shared Home-state QA:
- 02A StartChoice cards = `320 × 80` × 2
- 02D Active card = `320 × 80`
- 02A / 02D visible text overflow = `0`
- visible text font family = SUIT
- missing main-component links = `0`
- whole-MVP instances after this maintenance = `1,855 / 1,855`
- whole-MVP instance sources outside `Common_Component` = `0`
- focused QA PASS

Decision / canonical records:
- `docs/ux-decisions/2026-09-18-group02-home-routine-selected-compact-direction.md`
- `docs/ux-decisions/2026-09-19-group02-home-component-binding-maintenance.md`

Home component/binding state:
- shared `HomeQuickAction` — `2038:1951`
- shared `HomeRoutineTile` — `2039:1953`
- `HomeRoutineFocusCard / Ready / Active` = `320 × 80`
- `HomeStartChoiceCard / BlankWorkout / BuildOwn` = `320 × 80`
- 02B selected-routine, blank-workout, Pull Day, Leg Day cards are all Common_Component instances
- repeated manual Home-card frame count in canonical 02B = `0`
- `HomeRoutineFocusCard` exposes `RoutineName / RoutineMeta` TEXT properties
- `HomeRoutineTile` exposes `RoutineName / RoutineMeta` TEXT properties
- Home scroll / section / grid spacing values are bound to existing spacing tokens
- no new spacing/radius/color variables were created
- latest focused component/binding QA PASS

Screen-freeze interpretation:
- no additional zero-exercise top-level Figma frame is required
- `빈 운동` reuses the approved Group 05 Active Workout shell with an empty ExerciseList and existing `운동 추가` flow
- implementation contract: `docs/ux-decisions/2026-09-20-mvp-screen-design-freeze.md`

---

# GROUP 03 — ROUTINE CLOSED / RECOMMENDED ROUTINES REMOVED / ROUTINE-NAME POLICY AMENDED

Group 03 remains Product/UX closed after the explicit 2026-09-19 recommended-routine removal and the 2026-09-18 routine-name amendment.

Current Routine scope:
- user-created saved routines only
- `03A_Routine_List` — `34:1401` — no My/Recommended tabs
- `03B_Routine_Empty` — `34:1438` — no tabs / no recommendation preview
- `03A_Routine_List_Recommended` removed
- `03C_추천루틴상세` removed
- recommendation questionnaire / matching / acceptance / save flows are not part of the current MVP

Superseding decision:
- `docs/ux-decisions/2026-09-19-recommended-routine-feature-removal.md`


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

Screen-freeze interpretation:
- no extra 03E/03E2 top-level Figma state is required solely to prove optional naming
- current 03E Save Disabled state represents an otherwise-invalid empty routine, not a name requirement
- once other save-validity requirements are met, blank name is allowed and receives the approved automatic name at first save

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

2026-09-19 recommended-routine removal amendment:
- `FINAL_06_RECOMMENDED_ROUTINE_DIALOGS` removed
- `FINAL_06_RECOMMENDED_ROUTINE_MODIFIED_SAVE_DIALOG` removed
- generic shared `DialogCard / DialogButtons` remain because they are not recommendation-specific
- normal workout-completion behavior remains unchanged

Decision:
- `docs/ux-decisions/2026-09-19-recommended-routine-feature-removal.md`

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

**94개 canonical content/state frame의 화면별 행동 매핑 QA까지 완료했다. 기존 handoff의 `CONDITIONAL PASS`는 철회하고 현재 판정은 `FIX / DECISION NEEDED`다.**

Detailed QA:
- `docs/implementation/MVP_SCREEN_BEHAVIOR_MATRIX.md`
- `docs/implementation/MVP_HANDOFF_QA.md`

## Targeted FIX

1. **Primary bottom navigation root placement**
   - current product IA = `홈 / 루틴 / 분석 / 설정`
   - shared local `BottomAppBar` component now exists on `Common_Component`: `2078:2401`
   - variants = `Active=홈 / 루틴 / 분석 / 설정`
   - Light semantic binding / reference QA PASS
   - frozen root screens still do not contain the BottomAppBar instance
   - next targeted design step = apply the shared component only to applicable roots and verify bottom placement/content clearance

Brand naming drift found by deep QA was corrected:
- current Product Direction / Project Brief now use Tampin

## Product Decision Needed

2. **Weekday scheduling / today-next semantics**
   - older product text: optional weekday assignment / scheduled-vs-unscheduled Home
   - current frozen Figma: weekday control 없음, today/next Home state 없음
   - MVP에서 제거/연기할지, 필요한 화면을 targeted reopen할지 PO 결정 필요

3. **Routine Duplicate**
   - `03A_Routine_List_Menu`의 `복제` action은 존재
   - name / metadata / deep-copy / destination / collision rule 미정

4. **W / D / F routine-set semantics**
   - Routine create/edit Figma에 W / numbered / D / F rows 존재; current 05A Active Workout representative screen uses numbered rows only
   - 의미 / 선택 / 저장 / 완료 / volume / PR / history 영향 미정

5. **Automatic Rest Timer runtime edge**
   - 세트 완료 → 자동 시작 / RestLiveBar / 휴식 종료는 확정
   - 이미 Rest Timer가 실행 중일 때 또 다른 세트를 완료하면 재시작/교체/유지 중 무엇을 할지 미정
   - 0 도달 시 sound/vibration/background-notification 정확한 runtime feedback도 미정

6. **Active-session recovery system notification UX**
   - interruption/restart 후 동일 active session 복구는 확정
   - dedicated in-app recovery screen/banner는 사용하지 않음
   - system notification으로 ongoing state를 드러내는 방향은 확정
   - notification copy / actions / platform behavior는 미정

7. **Technology stack / platform architecture**
   - production client framework / platform priority / local persistence / backend-sync architecture 결정 필요

8. **Duration Active Workout interaction**
   - `recording_type=duration` storage semantics는 확정
   - stopwatch/countdown/start-stop/rest-transition은 여전히 미정

## Conditional platform alignment

9. **iOS launch scope**
   - current Login Figma = Google / Kakao
   - iOS launch 시 Apple sign-in/provider-specific account copy alignment 필요

## Active non-blocking asset side-track

- Production exercise-thumbnail full crop/mapping QA
- final timer-end sound assets/labels
- public Terms/Privacy URLs and inquiry-retention disclosure before release

## Development authorization

위 FIX / Product Decision Needed를 해결한 뒤 Product Owner가 개발 시작을 명시하면 첫 scoped implementation Issue를 만든다.
Broad unscoped Cursor build는 시작하지 않는다.

# Development boundary

Cursor-facing documents exist, but **production implementation is not authorized yet**.

Current handoff verdict:
- `FIX / DECISION NEEDED`

Before development:
- targeted BottomAppBar root-screen placement FIX
- weekday scheduling decision
- routine Duplicate decision
- W / D / F routine-set decision
- automatic Rest Timer runtime edge/end-feedback decision
- active-session recovery system-notification UX decision
- tech stack / architecture decision
- duration Active Workout interaction decision
- launch-platform scope check
- explicit Product Owner development authorization

After resolution, create the first scoped Issue and switch to Development mode.
