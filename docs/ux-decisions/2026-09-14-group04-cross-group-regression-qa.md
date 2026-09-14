# Group 04 Exercise Library / Detail — Cross-group Regression QA

**Date:** 2026-09-14  
**Status:** PASS · NO BLOCKING FIGMA REGRESSION · NO CURSOR HANDOFF

## Scope

Product Owner explicitly reopened Group 04 for a current Figma QA pass.

This is a scoped regression/integration QA, not a redesign pass. The already-passed 2026-09-10 Group 04 closure work was not re-reviewed from scratch.

Primary regression triggers checked:
- later 2026-09-13 Exercise Detail tab/growth refinements
- recent relocation of shared component masters into `Common_Component`
- current canonical screen/state inventory and naming

Canonical Figma:
- file `W3lZurXCXbThP67rF2xk2b`
- page `04 운동 목록 · 상세` — `233:2075`

## Governing checkpoints

- `2026-09-10-group04-closure-qa.md`
- `2026-09-10-group04-session-handoff.md`
- `2026-09-13-exercise-detail-tab-state-normalization.md`
- `2026-09-13-04d-content-top-spacing-normalization.md`
- `2026-09-13-04d-growth-relative-week-xaxis.md`
- `2026-09-13-04g-growth-weight-change-title.md`
- `2026-09-13-04g-growth-personal-best-table-sync.md`
- `docs/17_FIGMA_AGENT_EXECUTION_QA.md`

## Current canonical screen/state inventory

All current top-level product states are `360 × 954`:

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

No stale top-level `04G_Exercise_History` state remains. The Exercise Detail states are normalized under `04D`.

The former Growth period-placement comparison frame is not present as a current top-level canonical state.

## QA-1 — Structure / state integrity

**PASS**

- all 12 current top-level Group 04 product states use the canonical `360 × 954` viewport
- no component/component-set master is left on the Group 04 product page
- current page contains 337 component instances and no instance with a missing main component was found
- `04D` tab states use the expected 3-tab variants:
  - 운동 정보 → `Type=3탭, Active=운동 정보`
  - 최근 기록 → `Type=3탭, Active=최근 기록`
  - 성장 → `Type=3탭, Active=성장`
- the three 04D content frames all retain `paddingTop=20` bound to `spacing/20` (`VariableID:278:897`)

## QA-2 — Shared component / binding regression

**PASS**

Recent shared-master relocation did not break Group 04.

Verified examples:
- 04C `Compact Button` remains a live instance of `Compact Button` set `636:827`, now located in `Common_Component / 03_GROUP_CONFIRMED_COMPONENTS`
- 04D metadata divider and Growth Personal Best divider remain live instances of `Divider` set `915:597`, now located in `Common_Component / 03_GROUP_CONFIRMED_COMPONENTS`
- Group 04 Nav Headers remain live instances of canonical `Nav Header` set `360:2361` in `Common_Component / 01_GROUP_CONFIRMED_COMPONENTS`
- 04D tab states remain linked to shared `fixed-tab-bar` set `638:3298`
- 04A/04H list rows remain linked to shared `ExerciseSearchRow`
- filter pages remain linked to shared `OptionItem`

No broken/detached component relationship caused by the recent Common component organization change was found.

## QA-3 — Visual / product regression

**PASS**

Focused screenshot checks were performed on the states most exposed to recent changes:
- 04A Search
- 04B Search Selected
- 04C Search Empty
- 04D Exercise Detail / Info
- 04D Exercise Detail / History
- 04D Exercise Detail / Growth
- 04F Custom Edit
- Equipment filter
- Body-part filter
- 04H Attachment Selection

Results:
- no clipping/collision introduced by shared component relocation
- current search/list samples remain aligned to the previously approved Production sample naming/taxonomy
- 04C retains the approved centered empty-state + compact primary action
- 04D Info retains flat metadata + numbered method/checkpoint structure
- 04D History renders the 3-tab state and set history cleanly
- 04D Growth currently renders the approved bench-press sample with:
  - section title `중량 변화`
  - period control `4주 / 3개월 / 1년`
  - 4-week X-axis labels `3주 전 / 2주 전 / 지난주 / 이번주`
  - flat `개인 최고 기록` table with `전체 기록 기준`
- equipment filter remains 10 options including `전체`
- body-part filter remains `전체 / 가슴 / 등 / 어깨 / 팔 / 하체 / 코어 / 전신 / 기타`
- 04H attachment sheet remains visually intact over the canonical exercise-list shell

## Deferred / non-blocking product rule

Recording-type-specific Growth metric selection/naming remains a later product rule. Current `벤치프레스` weight-based sample is internally valid, so this does not block the current Figma QA PASS.

This QA does not finalize:
- Production attachment allowlists/canonical IDs/media mapping
- regenerated 211-row Production workbook/runtime DB
- Cursor implementation

## Result

**PASS — current Group 04 Product/UX Figma artifact has no blocking regression.**

No Figma correction was required by this QA pass.

Promotion/reorganization of remaining Group 04-specific component masters into `Common_Component` was not performed as part of this verification pass; do it only if the Product Owner explicitly opens that cleanup.

**NO CURSOR IMPLEMENTATION HANDOFF.**
