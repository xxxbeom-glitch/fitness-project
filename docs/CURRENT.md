# CURRENT — Fitness Project

**Updated:** 2026-09-10

## Current mode

`PRODUCT/UX FIGMA GROUP 04 FINAL QA ACTIVE · 04A/04B HEVY-ALIGNED CANONICAL · 04B V2 SELECTED-CHIPS CANONICAL · 04B CTA SCROLL-SAFETY PASS · 04C/04D/04E/04F/04G/04H SCREEN PASS ALIGNED · GROUP 04 SAMPLE-DATA QA NEXT · ATTACHMENT PRODUCTION ALLOWLIST DATA QA DEFERRED · ANALYSIS BODY-AREA GRANULARITY DEFERRED RESUME ITEM · EXERCISE DB P0 16 DATA + DEFAULT MEDIA INPUT LOCKED · 211 DERIVED ARTIFACT NOT YET REGENERATED · NO CURSOR IMPLEMENTATION HANDOFF`

## Resume rule

다음 대화에서는 이미 PO가 승인/검수 완료한 항목을 다시 설명하거나 재논의하지 않는다.

재개 순서:

`CURRENT 확인 → latest active-track checkpoint 확인 → NEXT OPEN ITEM부터 바로 진행`

---

# CURRENT PRODUCT/UX TRACK — Figma Group 04 Exercise library/search QA

운동 목록 / Add Exercise interaction은 가능한 범위에서 Hevy의 검증된 상호작용 구조를 우선 참고하되, LIFTLY Tracker APP 디자인 시스템과 현재 제품/데이터 정책을 유지한다.

Latest active checkpoint:

- `docs/ux-decisions/2026-09-10-exercise-library-04b-selected-chips-approved.md`

Other relevant decisions:

- `docs/ux-decisions/2026-09-09-exercise-library-hevy-alignment.md`
- `docs/ux-decisions/2026-09-08-exercise-library-figma-04-list-filter-checkpoint.md`
- `docs/ux-decisions/2026-09-06-exercise-library-figma-04-checkpoint.md`
- `docs/ux-decisions/2026-09-04-exercise-detail-scope.md`
- `docs/ux-decisions/2026-09-03-cable-attachment-active-workout.md`
- `docs/ux-decisions/2026-09-05-exercise-recording-types.md`

Canonical Figma target:

- file: `W3lZurXCXbThP67rF2xk2b`
- page: `04 운동 목록 · 상세` — node `233:2075`
- URL: `https://www.figma.com/design/W3lZurXCXbThP67rF2xk2b/LIFTLY_%EC%B5%9C%EC%A2%85?node-id=233-2075`

Important correction:

- older Group 04 docs referenced node `34:1880`
- current working page is node `233:2075`
- do not mutate `Page 1` or infer another page when continuing Group 04

## Canonical Group 04 states

1. `04A_Search` — `207:1238` — **ALIGNED / CANONICAL**
2. `04B_Search_Selected` — `515:1140` — **ALIGNED / CANONICAL · V2 SELECTED-CHIPS PROMOTED**
3. `04C_Search_Empty` — `539:1050` — **ALIGNED**
4. `04D_운동상세` — `40:2325` — **ALIGNED**
5. `04E_Custom_Create` — `34:1672` — **ALIGNED**
6. `04F_Custom_Edit` — `34:1692` — **ALIGNED**
7. `04G_Exercise_History` — `34:1714` — **VIEWPORT / SCROLL ALIGNED**
8. `04H_Exercise_Attachment_Selection` — `170:2174` — **PICKER UI / INTERACTION ALIGNED**

Supporting states:

- `04A_Filter_Equipment_Sheet` — `515:3327`
- `04A_Filter_BodyPart_Sheet` — `515:3514`
- `04H_Custom_Attachment_Input` — `552:3356`

## 04A / 04B — locked base behavior

Base list order:

1. search
2. `장비 전체`
3. `부위 전체`
4. selected-exercise strip when selection count > 0
5. `최근 운동`
6. `전체 운동`

Rules:

- `전체 운동` = current display-language ascending order; Korean UI = 가나다순
- `최근 운동` remains a recency shortcut and does not remove duplicates from `전체 운동`
- compact row = thumbnail + exercise name + `주동근 · 장비` + right-side detail affordance
- row body tap = select / deselect
- selected row = slim left `brand/primary` indicator
- selected-row content indent = `8px`
- divider geometry does not move
- selection state follows exercise identity across recent/all duplicate appearances
- selected count > 0 = fixed bottom CTA `N개 운동 추가`
- right-side affordance = exercise detail/history entry, not selection control

Filters:

- `장비 전체` / `부위 전체` open bottom sheets
- single-select per category
- current value returns into the trigger
- no removable filter-chip row in the canonical filter pattern
- existing `OptionItem`, glass sheet shell and overlay are reused

## 04B selected-exercise overview — PO APPROVED / CANONICAL

PO selected **V2 selected chips**.

Canonical behavior:

- heading = `선택한 운동 (N개)`
- one horizontal free-scroll chip row; no snap-card carousel
- each selected exercise remains individually visible by horizontal scrolling
- each chip uses `운동명 ×` and removes/deselects that exercise from the shared selection state
- selected strip disappears when selected count becomes 0
- previous comparison-only `+N` summary chip is not used
- `최근 운동` remains historical recency and is not reused as selected-state UI

Component reuse:

- existing Tracker APP `FilterChip`
- state = `Active`
- existing semantic typography/color/spacing/radius bindings retained
- no detached/ad-hoc selected-chip family introduced

Canonical Figma implementation:

- `04B_Search_Selected` — `515:1140`
- promoted selected section — `SelectedExerciseChips_HorizontalScroll` `566:1340`
- approved proposal reference — `04B_V2_Selected_Chips_APPROVED` `560:1293`
- current 10-item sample exists only to stress-test overflow; sample names are not a Production taxonomy decision

### 04B scroll safety — PASS

- selection footer remains fixed/absolute, height `100px`
- scrollable `SearchContent` bottom padding = `120px`
- final list content can therefore scroll above `N개 운동 추가` instead of remaining hidden behind it
- structure QA / binding QA / screenshot QA completed

## 04C — no result

Aligned to the same canonical 04A shell:

- same header/search/equipment/body filters
- invalid/absent search example
- no-result message
- direct custom-exercise entry retained

## 04D / 04G — Exercise Detail

Approved IA remains two tabs:

- `운동 정보`
- `최근 기록`

04D includes media, equipment, primary muscle, secondary muscles, text method and checkpoints/cautions.

Current sample:

- 벤치프레스
- 장비 `바벨`
- 주 타겟 `가슴`
- 보조 타겟 `삼두 · 전면 어깨`

04G final viewport state:

- `360 × 954`
- root vertical Auto Layout
- fixed-height Status Area / Nav Header / 2-tab bar
- `ExerciseHistoryContent` fills remaining `782px` and scrolls vertically
- dated set-history content remains intact below fold
- structure / binding / screenshot QA completed

## 04E / 04F — custom exercise metadata

Both create/edit screens contain:

- exercise name
- equipment
- primary muscle
- secondary muscle
- recording type

Approved recording model:

MVP active:

- `weight_reps`
- `reps`
- `duration`
- `added_weight_reps`
- `assisted_weight_reps`

Reserved:

- `weight_duration`
- `distance_duration`
- `distance_weight`

Current user-facing sample for `weight_reps` = `중량 + 횟수`.

## 04H — attachment picker

UI/interaction aligned:

- background = canonical 04A
- current exercise only shows its allowed/recommended attachment choices
- preset tap selects and returns; no Apply button
- last row = `직접 입력`
- custom input state = `04H_Custom_Attachment_Input`
- direct input reuses existing `InputBox` + primary CTA `사용하기`
- custom text is current exercise-record context only in MVP; it is not auto-promoted into shared canonical taxonomy

Current 랫풀다운 UI sample:

- 스트레이트 바
- 와이드 랫 바
- 뉴트럴 그립 · 클로즈
- 뉴트럴 그립 · 미디엄
- 뉴트럴 그립 · 와이드
- V바
- 직접 입력

Important boundary:

- sample is not the exhaustive Production taxonomy
- exact Production exercise-by-exercise attachment allowlists / canonical IDs / media mapping remain a DB/data task
- this deferred data task does not block visual Group 04 closure unless a screen contradiction appears

## Figma construction rule — standing requirement

All future Figma mutations must follow:

- `docs/09_DESIGN_SYSTEM.md`
- `docs/15_TONAL_DESIGN_SYSTEM_SPEC.md`
- `docs/16_FIGMA_TONAL_BUILD_INSTRUCTIONS.md`
- `docs/17_FIGMA_AGENT_EXECUTION_QA.md`

Required order:

1. read CURRENT + relevant decision
2. read design-system / QA rules
3. inspect/reuse existing components before creating new UI
4. use semantic Auto Layout
5. define Fixed/Hug/Fill independently by axis
6. bind supported typography/color/spacing/radius/divider values
7. avoid unnecessary absolute positioning, detached duplicates and raw-value drift
8. structure QA → binding QA → Figma screenshot QA

# NEXT OPEN ITEM — exact resume point

Do **not** redo completed Hevy/reference research or the 04B 1/2/3 comparison.

1. final exercise-list/filter sample-data QA against canonical Production taxonomy
2. final Group 04 A~H structure/binding/screenshot QA
3. if no screen-level blocker remains, CLOSE Group 04 and resume Analysis body-area granularity

No Cursor implementation handoff yet.

---

# DEFERRED PRODUCT/UX TRACK — Analysis

Approved Analysis hierarchy remains locked:

1. 분석 홈
2. 부위별 분석
3. 운동별 성장
4. 운동 기록
5. 운동 기록 상세

Analysis Home approved basics:

- default period = 최근 4주
- choices = 4주 / 3개월 / 6개월 / 1년
- headline metrics = 운동 횟수 / 완료 세트 / 운동 시간
- 총 볼륨 is not a universal headline metric across recording types

Body-map calculation basis locked:

- completed/persisted primary-muscle set contribution = `1.0`
- secondary-muscle contribution = `0.5`
- incomplete/unpersisted = `0`
- do not multiply by kg/reps/duration/assistance
- this is a tracking heuristic, not physiological truth
- do not label as optimal/undertrained/overtrained/recovered

Analysis visual/body-area details remain OPEN.

Resume after Group 04:

1. map canonical muscle/body-part taxonomy into practical front/back body-map regions
2. avoid visual granularity finer than the DB supports consistently
3. define combined-label mapping such as upper back / lats / broader core
4. define workout-frequency calculation/presentation
5. define recent-growth selection, recent-record density and empty states

Reference:

- `docs/ux-decisions/2026-09-05-analysis-tab-ia.md`

---

# Exercise DB / media checkpoint — preserved

Purchased source:

- Gym Animations — Gym Workout Man Package
- full raw: **17,085 files / 98.69 GB**
- Cloudflare R2 `gfit-source-original`: **17,085 objects / 105,972,019,458 bytes / VERIFIED**
- raw source remains immutable provenance

Primary source analysis base:

- `MP4/MALE/Library_database` — 2,109 MP4
- Gym 2,081 is contained byte-identically in Library
- Home 2,120 is a separate source pool

Normalization/visual QA already completed for Cable, Machine, Barbell, Dumbbell, Kettlebell, Smith, Landmine, P1 identity review and P0 Home fallback. Do not reopen completed broad source/video QA without a specific Production conflict.

Production baseline:

- existing app-facing canonical exercises = **195**
- P0 additions = **16**
- P0 canonical/data row QA = PASS / LOCKED
- package source coverage = **16/16**
- target after regeneration = **211**
- **derived workbook/runtime DB has not yet been regenerated to 211 rows**

P0 default media inputs:

- Library = 13/16
- Home fallback = 3/16
- missing = 0
- source input lock = 16/16

Four legacy recording values to migrate on regeneration:

- `elbow-side-plank`: `time` → `duration`
- `hand-plank`: `time` → `duration`
- `wall-sit`: `time` → `duration`
- `kettlebell-farmers-carry`: `weight_distance_or_time` → `distance_weight`

P1 17:

- source-covered = 15/17
- true gaps = bilateral Dumbbell Deadlift, standard floor Sit Up
- P1 remains non-blocking / post-MVP

Deferred parallel item:

1. representative media-transform sample
2. background removal/transparency + codec/container + resolution/FPS/quality + size + derived R2 path validation
3. regenerate derived Production artifact 195 + migrations + P0 16
4. integrity QA = exact 211, uniqueness, recording vocabulary, P0 source links, raw unchanged
5. only when implementation becomes the next dependency, create Issue/AC and hand off to Cursor

Key references:

- `docs/exercise-db/2026-09-05-p0-211-production-promotion-qa-result.md`
- `docs/exercise-db/2026-09-05-p0-16-default-media-source-lock.md`
- `docs/exercise-db/2026-09-05-library-2109-bulk-mapping-v0.2.md`
- `docs/ux-decisions/2026-09-05-exercise-recording-types.md`

---

# Figma / implementation

Canonical Figma:

`https://www.figma.com/design/W3lZurXCXbThP67rF2xk2b/LIFTLY_%EC%B5%9C%EC%A2%85?node-id=0-1`

Current Group 04 page:

`https://www.figma.com/design/W3lZurXCXbThP67rF2xk2b/LIFTLY_%EC%B5%9C%EC%A2%85?node-id=233-2075`

Canonical production wireframe:

`https://liftly-wireframe.vercel.app`

GitHub Decision/CURRENT overrides older Figma/wireframe state when they conflict.

**No Cursor implementation handoff.**