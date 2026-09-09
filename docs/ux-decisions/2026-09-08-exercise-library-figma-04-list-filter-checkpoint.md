# Exercise Library / Search Figma Group 04 List + Filter Checkpoint — 2026-09-08

**Status:** IN PROGRESS / PO-DIRECTED PROPOSAL ITERATION
**Scope:** Group 04 운동 검색 리스트 표현, 부위/장비 필터 진입 방식, 목록 메타 노출 규칙, Figma 구조/디자인시스템 QA

## Canonical Figma target

File:

`W3lZurXCXbThP67rF2xk2b` — `LIFTLY_최종`

Current page:

- `04 운동 목록 · 상세` — node `233:2075`
- URL: `https://www.figma.com/design/W3lZurXCXbThP67rF2xk2b/LIFTLY_%EC%B5%9C%EC%A2%85?node-id=233-2075`

Important correction:

- older docs referenced Group 04 node `34:1880`
- the current working page actually resolved in Figma as canvas/page node `233:2075`
- all new Group 04 work must target this current page, not `Page 1` or an assumed root frame

## 1. 04I flat-list direction — PO-DIRECTED PROPOSAL

The Product Owner preferred a flat list over the previous large card-style exercise rows.

Current proposal screen:

- `04I_Search_List_Proposal` — node `207:1238`

Current row pattern:

- exercise thumbnail
- exercise name
- secondary line `주동근 · 장비`
- right-side `+`
- flat list rather than large cards
- list dividers, when used, span the full list container width instead of starting after the thumbnail/text column

The proposal also uses display-name grouping similar to Bevel:

- Korean locale: Hangul initial-consonant grouping (`ㄷ / ㄹ / ㅂ / ...`)
- future localization may change grouping/order according to the active app language
- English locale can later use A–Z grouping without changing the underlying exercise identity

### Muscle metadata visibility — PO DIRECTION

For exercise-list rows:

- show **primary muscle only** as the body-part metadata
- keep secondary-muscle data in the exercise model
- do **not** expose secondary muscles in the compact search/list row
- primary/secondary separation remains appropriate for Exercise Detail and later analysis/data use

Therefore the list metadata contract is:

`주동근 · 장비`

not a combined primary+secondary muscle string.

## 2. Top filter control direction — PO-DIRECTED PROPOSAL

The previous horizontal muscle-chip carousel is being replaced in the proposal.

Current 04I filter controls:

- `부위 전체`
- `장비 전체`

Applied filter values can appear below as removable selected-value chips, e.g.:

- `등 ×`
- `케이블 ×`

Rationale from reference review:

- the horizontal body-part carousel becomes increasingly long as body-part coverage grows
- separate body-part and equipment entry points scale better
- selected values can remain visible without exposing every available option at once

Functional references reviewed during this pass include Hevy, Bevel, Peloton Strength+, Equinox+, Gymshark and related exercise-library patterns.

## 3. Body-part / equipment selection — FULL PAGE, NOT BOTTOM SHEET

After reviewing Hevy's filter-selection flow, the Product Owner directed the proposal to use full-page selection screens rather than the earlier bottom-sheet experiment.

Current proposal states:

### Body part

- `04I2_Filter_BodyPart_FullPage_Proposal` — node `451:984`
- title: `부위 선택`
- vertical list
- current sample selected state: `등`

Current sample options:

- 전체
- 가슴
- 등
- 어깨
- 하체
- 이두
- 삼두
- 코어

### Equipment

- `04I3_Filter_Equipment_FullPage_Proposal` — node `465:1150`
- title: `장비 선택`
- vertical list
- current sample selected state: `케이블`

Current sample options:

- 전체
- 바벨
- 덤벨
- 머신
- 케이블
- 스미스 머신
- EZ바
- 케틀벨
- 맨몸
- 기타

Boundary:

- these option labels are current UI proposal examples and must ultimately align with the canonical exercise DB taxonomy
- exact filter selection cardinality/behavior should not be silently expanded beyond the currently depicted simple selected-value state without PO review
- the previous 04I2 bottom-sheet filter experiment is superseded by these full-page proposal screens

## 4. Figma design-system / structural QA — REQUIRED BASELINE

The Product Owner explicitly reiterated that new screens must follow the existing GitHub design-system contract from the first construction pass, not be visually recreated first and repaired later.

Canonical docs consulted for this correction:

- `docs/09_DESIGN_SYSTEM.md`
- `docs/15_TONAL_DESIGN_SYSTEM_SPEC.md`
- `docs/16_FIGMA_TONAL_BUILD_INSTRUCTIONS.md`
- `docs/17_FIGMA_AGENT_EXECUTION_QA.md`

This is a standing rule for future Figma work in this project.

Required execution order:

1. read CURRENT + relevant product/UX decision
2. read canonical design-system/QA rules
3. inspect existing Figma components/patterns before creating anything new
4. build semantic hierarchy with Auto Layout
5. explicitly set Fixed / Hug / Fill on both axes
6. reuse existing components/instances when they fit
7. bind typography, color, spacing, radius, divider and other supported values to actual design-system styles/variables
8. avoid unnecessary absolute positioning, detached instances, and repeated raw-value drift
9. run structure QA, binding QA, then screenshot/visual QA

### Current filter-screen structural state

The two full-page filter proposals were corrected to follow this baseline:

- screen shell: vertical Auto Layout, fixed viewport `360 × 954`
- existing `Nav Header` instance reused
- content: vertical Auto Layout, Fill / Fill
- list: vertical Auto Layout, Fill / Hug
- option row: horizontal Auto Layout, Fill / Hug
- leading content: Fill / Hug
- trailing selected value: Hug / Hug
- divider: Fill / Fixed

Current system bindings/reuse include:

- `spacing/20` — page/content padding
- `spacing/16` — row padding
- `spacing/12` — row internal gap
- `bg/default`
- `border/default`
- `radius/md`
- `text/primary`
- `brand/primary`
- existing `RowLabel` instance
- existing `RowValue` instance for selected state

## 5. Current Group 04 status

This checkpoint does **not** close Group 04.

The current 04I direction has been materially refined, but final promotion to canonical 04A/04B still requires the PO to finish comparison/approval and propagation.

Still open:

1. decide whether the current 04I flat-list + filter pattern is promoted to 04A/04B
2. if promoted, propagate the list/filter pattern consistently to 04A/04B and define selected/multi-select state
3. clean 04A/04B mock exercise-to-primary-muscle labels and filter coverage
4. fix 04C no-result mock
5. complete 04D equipment + primary/secondary muscle + checkpoint/caution metadata QA
6. complete 04E/04F equipment + recording-type metadata QA
7. finish 04H attachment taxonomy/copy/direct-input decision
8. run full Group 04 structure/binding/visual QA before closing

## Next open item

Continue from the **current 04I proposal review**:

- inspect the updated flat-list + full-page body/equipment filter proposal as one flow
- PO decides whether to promote it to canonical 04A/04B
- do not restart completed reference research unless a specific unresolved UI question requires it

## Boundary

- Figma / Product UX stage only
- no Cursor implementation handoff yet
- Analysis body-area granularity remains deferred until Group 04 closes
- GitHub design-system rules are mandatory defaults for future Figma mutations even when the PO does not restate them
