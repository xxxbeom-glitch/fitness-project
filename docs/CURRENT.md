# CURRENT — Fitness Project

**Updated:** 2026-09-05

## Current mode

`PRODUCT/UX ANALYSIS HOME CONTENT ACTIVE · ANALYSIS 5-SCREEN HIERARCHY PO APPROVED · ANALYSIS PERIOD 4W/3M/6M/1Y LOCKED · TOP METRICS WORKOUTS/SETS/TIME LOCKED · BODY-MAP DATA BASIS PRIMARY1/SECONDARY0.5 LOCKED · BODY-MAP VISUAL TREATMENT DEFERRED TO DESIGN · BODY-AREA GRANULARITY NEXT · EXERCISE DB P0 DEFAULT MEDIA SOURCE INPUT LOCKED 16/16 · 211 MERGE SAFE · MEDIA TRANSFORM SAMPLE DEFERRED PARALLEL · P1 15/17 SOURCE-COVERED · NO CURSOR IMPLEMENTATION HANDOFF`

## Resume rule

다음 대화에서는 이미 PO가 승인/검수 완료한 항목을 다시 설명하거나 재논의하지 않는다.

재개 순서:

`CURRENT 확인 → latest active-track checkpoint 확인 → NEXT OPEN ITEM부터 바로 진행`

---

# CURRENT PRODUCT/UX TRACK — Analysis Home content

The Product Owner intentionally paused exercise-media transform/export work and resumed screen IA planning.

## Analysis tab hierarchy — PO APPROVED

Approved screen structure:

1. `분석 홈`
2. `부위별 분석`
3. `운동별 성장`
4. `운동 기록`
5. `운동 기록 상세`

Hierarchy rule:

- `분석 홈` is a summary/navigation surface
- deep charts and full histories are not all placed on the first screen
- body-area/distribution -> `부위별 분석`
- exercise progress -> `운동별 성장`
- history/more -> `운동 기록`
- individual workout -> `운동 기록 상세`

Approved Analysis-home content direction:

- period selection
- compact workout summary metrics
- front/back body-area distribution visualization
- workout frequency summary
- recent exercise-progress summary
- recent workout records

## Analysis Home period — PO APPROVED

Default:

- `최근 4주`

Choices:

- `4주`
- `3개월`
- `6개월`
- `1년`

`1주` and `전체` are not primary MVP Analysis-home choices.

## Analysis Home top summary metrics — PO APPROVED

Fixed headline metrics:

1. `운동 횟수`
2. `완료 세트`
3. `운동 시간`

Rules:

- saved partial workouts with real persisted performed work count toward `운동 횟수`
- discarded / empty sessions do not count
- `완료 세트` uses final persisted completion state only
- `운동 시간` sums approved saved-session elapsed workout time under the existing workout-time policy

`총 볼륨` is not a universal headline metric because approved recording types do not share one valid kg-volume calculation. It may still appear in workout detail, exercise-specific progress, or a clearly scoped secondary module where valid.

## Analysis body-map data basis — PRODUCT DECISION LOCKED

The Product Owner delegated the underlying calculation choice.

Base rule:

- count only final completed/persisted sets
- primary muscle contribution per completed set: `1.0`
- secondary muscle contribution per completed set: `0.5`
- incomplete/unpersisted set: `0`
- multiple primary muscles each receive `1.0`
- multiple secondary muscles each receive `0.5`

This creates a per-muscle **muscle-set exposure score**. It is not the same thing as global completed-set count and must not be presented as a literal total-set number across muscles.

Recording-type rule:

- do not multiply the body-map score by kg, reps, duration, or assistance value
- weighted, bodyweight, timed, and assisted completed sets can all contribute through their canonical primary/secondary muscle mapping
- exercises without valid muscle mapping remain in history/global summaries but are excluded from the body-map calculation rather than guessed at runtime

Retained derived values per muscle:

1. selected-period weighted score
2. weekly-average weighted score for comparable rate-based views
3. distribution share of total muscle score for relative-distribution views

Weekly-average uses only the actual account-history span available inside the selected period; dates before the account existed are not counted. Fewer than 7 eligible days is treated as insufficient/unstable for weekly-average display and will be handled in the later insufficient-data state pass.

Interpretation boundary:

- `1.0 / 0.5` is a practical fractional-set convention, not a claim that secondary muscles receive exactly 50% of physiological stimulus
- do not label values as `optimal`, `undertrained`, `overtrained`, or `recovered`
- do not infer fatigue/readiness from this score in MVP
- recent resistance-training literature supports weekly set volume as a useful dosage variable and has explicitly evaluated fractional `0.5` counting for indirect sets; this is used as a tracking heuristic, not biological truth

Reference:

- `docs/ux-decisions/2026-09-05-analysis-tab-ia.md`

## Analysis body-map visual treatment — OPEN / DESIGN-PHASE DECISION

Current structural direction:

- use front/back neutral-body visual assets as the body-map concept
- body areas must visually reflect the underlying training data
- the body map remains a data visualization layer, not a second exercise-demo asset system

The Product Owner explicitly does **not** lock the visual encoding before actual UI composition.

Deferred to the design pass:

- overlay-layer vs fill/mask/other rendering technique
- one-hue intensity vs another color/visual encoding
- neutral/untrained treatment
- exact brand color vs separate analytics accent color
- exact opacity/lightness/saturation/gradient/border/texture behavior
- final readable contrast at the real body-map size
- final visual mapping from retained data values to appearance

Competitor color systems are references only, not adopted product policy.

Important OPEN product/data details:

- body-area granularity / mapping to available front-back visual areas
- workout-frequency definition
- `최근 성장한 운동` selection rule
- recent-record information density
- empty / insufficient-data states
- exact chart type and metric rules by exercise recording type

References:

- `docs/ux-decisions/2026-09-05-analysis-tab-ia.md`
- `docs/ux-decisions/2026-09-04-workout-completion-metrics.md`
- `docs/14_IA_STORYBOARD.md`

# NEXT OPEN ITEM — Analysis body-area granularity

The underlying body-map score is now locked. The body-map color/rendering remains intentionally deferred to the design phase.

Immediate next:

1. map current canonical muscle/body-part taxonomy into a practical front/back body-map region set
2. avoid visual regions more granular than the actual exercise DB can support consistently
3. define how combined DB labels such as upper back / lats or broader core categories map to body regions
4. then define workout-frequency calculation/presentation
5. then define `최근 성장한 운동`, recent-record density, and empty states

No Cursor implementation handoff yet.

---

# Latest checkpoint — Gym Animations normalization / Production promotion

## 1. Purchased source / raw storage

Purchased source:

- Gym Animations — `Gym Workout Man Package`
- full raw: **17,085 files / 98.69 GB**

Cloudflare R2 raw bucket:

- `gfit-source-original`
- verified objects: **17,085**
- exact size: **105,972,019,458 Byte**
- status: **DONE / VERIFIED**

Raw purchased filename/path/media remains **read-only provenance**.

Male source relationship:

- `MP4/MALE/Gym_Workout_`: **2,081 MP4**
- `MP4/MALE/Library_database`: **2,109 MP4**
- Gym 2,081 rows are byte-identical matches inside Library
- Library has 28 additional rows
- `MP4/MALE/Home_Workout_`: **2,120 MP4**
- Home is a separate source pool; Library is not a package-wide superset of Home

Primary gym analysis base remains:

`MP4/MALE/Library_database`

References:

- `docs/exercise-db/2026-09-04-gym-animations-source-analysis-checkpoint.md`
- `docs/exercise-db/2026-09-05-library-2109-bulk-mapping-v0.2.md`

## 2. Targeted normalization / visual QA — COMPLETE

Completed:

- Cable
- Machine
- Barbell
- Dumbbell
- Kettlebell
- Smith
- Landmine
- P1 identity review 3
- P0 Home fallback 3

Broad manual ZIP review is finished. New visual QA is exception-only when a specific Production identity conflict appears.

Normalization boundary:

1. same movement + render/POV/media difference -> same canonical + media variant
2. Cable attachment-only difference -> same canonical + attachment context/media
3. grip-only difference -> same parent family + grip context
4. posture / laterality / load position / implement count / movement path that materially changes recording meaning -> execution/load context; history auto-merge prohibited
5. vendor filename is evidence, not normalized truth; actual movement wins
6. raw source remains immutable; all normalized values are derived

Main references:

- `docs/exercise-db/2026-09-04-cable-normalization-rule-v1.md`
- `docs/exercise-db/2026-09-04-cable-visual-review-14.md`
- `docs/exercise-db/2026-09-04-cable-duplicate-visual-qa-38.md`
- `docs/exercise-db/2026-09-04-machine-visual-qa-33.md`
- `docs/exercise-db/2026-09-05-barbell-visual-qa-18.md`
- `docs/exercise-db/2026-09-05-dumbbell-visual-qa-20.md`
- `docs/exercise-db/2026-09-05-kettlebell-visual-qa-12.md`
- `docs/exercise-db/2026-09-05-smith-landmine-visual-qa-10.md`
- `docs/exercise-db/2026-09-05-p1-identity-review-3-result.md`
- `docs/exercise-db/2026-09-05-p0-home-fallback-visual-qa-3.md`

## 3. Library_database 2,109 bulk mapping — COMPLETE

Source-family total: **2,109**.

Conservative source identity/history layer:

- total buckets: **1,954**
- active buckets: **1,912**
- excluded buckets: **42**
- unresolved buckets: **1**
- mapped to existing Production canonical: **75 buckets**
- new source-derived candidate buckets: **1,836**

**Do not interpret 1,912 active buckets as app-facing exercises.**

Current explicit Library identity unresolved:

- `Kettlebell-Good-Morning_Hips_.mp4`
  - visual movement is a hanging two-hand hip hinge, not a true Good Morning
  - exact Deadlift vs RDL-like parent remains deferred until this source is actually needed for curated Production

Reference:

- `docs/exercise-db/2026-09-05-library-2109-bulk-mapping-v0.2.md`

## 4. Production baseline / P0 / P1

Existing Production DB v1:

- purchased source rows: **206**
- app-facing canonical exercises: **195**

References:

- `docs/exercise-db/exercise-db-v1-production.md`
- `docs/exercise-db/exercise-db-gap-analysis-v1.md`

### P0 16 — DATA ROW LOCK QA PASS

Source coverage:

- Library source: **13 / 16**
- Home fallback source: **3 / 16**
- unresolved: **0**
- package-level source coverage: **16 / 16**

P0 Production-promotion QA:

- 16 canonical IDs unique vs current Production 195: **PASS**
- accidental merge/history absorption: **PASS**
- Korean/English display + aliases: **PASS / LOCKED**
- equipment/body-part/movement taxonomy: **PASS / normalized to current Production style**
- recording semantics: **PASS**
- source provenance: **PASS**
- final arithmetic target: **195 + 16 = 211**

Important boundary:

- P0 16 canonical/data rows are Production-locked
- the derived workbook/runtime DB has **not yet been regenerated as 211 rows**

Reference:

- `docs/exercise-db/2026-09-05-p0-211-production-promotion-qa-result.md`

### P0 16 default media source inputs — LOCKED 16/16

- Library_database default inputs: **13 / 16**
- Home_Workout_ fallback default inputs: **3 / 16**
- missing: **0**

Boundary:

- raw source stays immutable
- selected raw source is the transform input
- background removal / transparent export / resize / compression happen later as derived-media processing
- completed source/video QA is not reopened
- GIF is not selected as the production format
- final codec/container, transparency method, resolution/FPS/quality, and derived R2 serving path remain OPEN for sample validation

Reference:

- `docs/exercise-db/2026-09-05-p0-16-default-media-source-lock.md`

### Recording model — PO APPROVED

MVP ACTIVE:

- `weight_reps`
- `reps`
- `duration`
- `added_weight_reps`
- `assisted_weight_reps`

Schema RESERVED:

- `weight_duration`
- `distance_duration`
- `distance_weight`

P0 critical locks:

- `plank` -> `duration`
- `crunch` -> `reps`
- `lying-leg-raise` -> `reps`
- `machine-assisted-pull-up` -> `assisted_weight_reps`
- `machine-assisted-dip` -> `assisted_weight_reps`
- remaining weighted P0 rows -> `weight_reps`

Four existing 195-row legacy values must migrate when the derived artifact is regenerated:

- `elbow-side-plank`: `time` -> `duration`
- `hand-plank`: `time` -> `duration`
- `wall-sit`: `time` -> `duration`
- `kettlebell-farmers-carry`: `weight_distance_or_time` -> `distance_weight`

References:

- `docs/ux-decisions/2026-09-05-exercise-recording-types.md`
- `docs/ux-decisions/2026-09-05-duration-exercise-recording.md`

### P1 17 — non-blocking

- source-covered: **15 / 17**
- true source gaps: **2**
- unresolved: **0**

True gaps:

1. standard bilateral `Dumbbell Deadlift`
2. standard floor bodyweight `Sit Up`

P1 remains post-MVP / non-blocking.

---

# DEFERRED PARALLEL ITEM — Media transform sample + derived 211 artifact

The Product Owner explicitly deferred this work while Product/UX Analysis IA is active.

When resumed:

1. define a small representative media-transform sample
2. decide/test background removal/transparency, export boundary, app-serving codec/container, resolution/FPS/quality, file-size target, and derived R2 path/naming
3. validate sample playback/quality/size before bulk conversion
4. generate/update the derived Production exercise DB artifact with existing 195 + four recording migrations + locked P0 16 + P0 default media source linkage
5. rerun integrity QA: exact count 211, uniqueness 211/211, recording vocabulary within approved 5+3, P0 source links present, raw source unchanged
6. only when application implementation becomes the next dependency, create Issue/AC and hand off to Cursor

---

# Approved Product/UX baseline — preserve, do not reopen

Important references:

- Home / Recommended Routine: `docs/ux-decisions/2026-09-03-recommended-routine-detail-flow.md`, `docs/ux-decisions/2026-09-04-recommended-routine-post-workout-save.md`
- Exercise Detail: `docs/ux-decisions/2026-09-04-exercise-detail-scope.md`
- Cable attachment: `docs/ux-decisions/2026-09-03-cable-attachment-active-workout.md`
- Active Workout / routine update: `docs/ux-decisions/2026-09-03-active-workout-routine-update.md`
- Rest Timer: `docs/ux-decisions/2026-09-03-rest-timer-behavior.md`
- Timed exercise recording: `docs/ux-decisions/2026-09-05-duration-exercise-recording.md`
- Exercise recording types: `docs/ux-decisions/2026-09-05-exercise-recording-types.md`
- Assisted machine recording: `docs/ux-decisions/2026-09-03-assisted-machine-recording.md`
- Workout Complete: `docs/ux-decisions/2026-09-03-post-workout-completion-carousel.md`, `docs/ux-decisions/2026-09-04-workout-completion-metrics.md`
- Progression Hint: `docs/ux-decisions/2026-09-04-progression-hint-threshold.md`
- Workout End / Discard: `docs/ux-decisions/2026-09-03-workout-end-flow.md`
- Analysis tab IA: `docs/ux-decisions/2026-09-05-analysis-tab-ia.md`

Parallel OPEN Product/UX items:

- timed exercise Active Workout UI details
- recommended-routine actual program contents — DB/substitution data dependency
- Settings main scope
- rest timer end signal detail

Analysis screen hierarchy is locked; the active Analysis work is exact home calculation/content/state definition.

---

# Figma / implementation

Canonical Figma:

`https://www.figma.com/design/W3lZurXCXbThP67rF2xk2b/LIFTLY_%EC%B5%9C%EC%A2%85?node-id=0-1`

Canonical production wireframe:

`https://liftly-wireframe.vercel.app`

GitHub Decision/CURRENT overrides an older Figma/wireframe state when they conflict.

**No Cursor implementation handoff.**