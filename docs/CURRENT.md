# CURRENT — Fitness Project

**Updated:** 2026-09-05

## Current mode

`EXERCISE DB / ASSET NORMALIZATION ACTIVE · RAW R2 VERIFIED · 2,109 BULK MAPPING COMPLETE · P0 SOURCE COVERAGE LOCKED 16/16 · RECORDING MODEL 5 ACTIVE + 3 RESERVED APPROVED · P0 16 DATA ROW LOCK QA PASS · 211 MERGE SAFE · DEFAULT PRODUCTION-SERVING MEDIA SELECTION NEXT · P1 15/17 SOURCE-COVERED · PRODUCT/UX BASELINE PRESERVED · NO CURSOR IMPLEMENTATION HANDOFF`

## Resume rule

다음 대화에서는 이미 PO가 승인/검수 완료한 항목을 다시 설명하거나 재논의하지 않는다.

재개 순서:

`CURRENT 확인 → latest exercise-db checkpoint 확인 → NEXT OPEN ITEM부터 바로 진행`

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

---

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

Normalization boundary:

1. same movement + render/POV/media difference → same canonical + media variant
2. Cable attachment-only difference → same canonical + attachment context/media
3. grip-only difference → same parent family + grip context
4. posture / laterality / load position / implement count / movement path that materially changes recording meaning → execution/load context; history auto-merge prohibited
5. vendor filename is evidence, not normalized truth; actual movement wins
6. raw source remains immutable; all normalized values are derived

Broad manual ZIP review is finished. New visual QA is exception-only when a specific Production identity conflict appears.

---

## 3. Library_database 2,109 bulk mapping — COMPLETE

Actual source-family counts from full manifest:

- Dumbbell: **494**
- Cable: **298**
- Other: **264**
- Barbell: **212**
- Machine: **207**
- Kettlebell: **188**
- Band: **122**
- Rings: **80**
- Weighted Bodyweight: **69**
- Smith Machine: **61**
- Suspension: **40**
- EZ Bar: **35**
- Landmine: **33**
- Trap Bar: **6**
- total: **2,109**

Conservative source identity/history layer:

- total buckets: **1,954**
- active buckets: **1,912**
- excluded buckets: **42**
- unresolved buckets: **1**
- mapped to existing Production canonical: **75 buckets**
- new source-derived candidate buckets: **1,836**

**Do not interpret 1,912 active buckets as app-facing exercises.**

They preserve source/history-relevant execution differences. G Fit search/catalog remains curated from the Production baseline.

Current explicit Library identity unresolved:

- `Kettlebell-Good-Morning_Hips_.mp4`
  - visual movement is a hanging two-hand hip hinge, not a true Good Morning
  - exact Deadlift vs RDL-like parent remains deferred until this source is actually needed for curated Production

---

## 4. Production baseline / P0 / P1

Existing Production DB v1:

- purchased source rows: **206**
- app-facing canonical exercises: **195**

Reference:

- `docs/exercise-db/exercise-db-v1-production.md`
- `docs/exercise-db/exercise-db-gap-analysis-v1.md`

### P0 16 — DATA ROW LOCK QA PASS

PO-approved P0 identities remain unchanged.

Source coverage:

- Library source: **13 / 16**
- Home fallback source: **3 / 16**
- unresolved: **0**
- package-level source coverage: **16 / 16**

P0 Production-promotion QA result:

- 16 canonical IDs unique vs current Production 195: **PASS**
- accidental merge/history absorption: **PASS**
- Korean/English display + aliases: **PASS / LOCKED**
- equipment/body-part/movement taxonomy: **PASS / normalized to current Production style**
- recording semantics: **PASS**
- source provenance: **PASS**
- final arithmetic target: **195 + 16 = 211**

Reference:

- `docs/exercise-db/2026-09-05-p0-211-production-promotion-qa-result.md`

Important boundary:

- P0 16 canonical/data rows are Production-locked
- the derived workbook/runtime DB has **not yet been regenerated as 211 rows**
- therefore do not claim a physical 211-row Production artifact exists until merge/generation + count QA is executed

### Recording model — PO APPROVED

Current model:

- MVP ACTIVE: `weight_reps`, `reps`, `duration`, `added_weight_reps`, `assisted_weight_reps`
- schema RESERVED: `weight_duration`, `distance_duration`, `distance_weight`

P0 critical locks:

- `plank` → `duration`
- `crunch` → `reps`
- `lying-leg-raise` → `reps`
- `machine-assisted-pull-up` → `assisted_weight_reps`
- `machine-assisted-dip` → `assisted_weight_reps`
- remaining weighted P0 rows → `weight_reps`

Final 211 consistency QA also found four legacy values in the existing 195 baseline that must migrate when the derived artifact is regenerated:

- `elbow-side-plank`: `time` → `duration`
- `hand-plank`: `time` → `duration`
- `wall-sit`: `time` → `duration`
- `kettlebell-farmers-carry`: `weight_distance_or_time` → `distance_weight`

These are schema cleanup only; completed source/video QA is not reopened.

Reference:

- `docs/ux-decisions/2026-09-05-exercise-recording-types.md`
- `docs/ux-decisions/2026-09-05-duration-exercise-recording.md`

### P1 17 — non-blocking

Current reviewed result:

- source-covered: **15 / 17**
- true source gaps under current evidence: **2**
- unresolved: **0**

True gaps:

1. standard bilateral `Dumbbell Deadlift`
2. standard floor bodyweight `Sit Up`

P1 remains post-MVP / non-blocking.

Smith Machine Romanian Deadlift is source-covered by `Smith-Deadlift_Hips.mp4` after direct visual review.

Trap Bar Deadlift source exists but `Trap Bar` equipment taxonomy remains a future Production decision if P1 is activated.

---

# NEXT OPEN ITEM — Default production-serving media + derived 211 artifact

## Immediate next

1. choose one default production-serving media source for each P0 16 canonical row
2. define media transform/compression/storage/app-serving structure
3. generate/update the derived Production exercise DB artifact with:
   - existing 195 baseline
   - four legacy recording-type migrations
   - locked P0 16 rows
4. rerun machine-verifiable integrity QA:
   - exact canonical count = **211**
   - canonical uniqueness = **211 / 211**
   - recording_type vocabulary ⊆ approved 5+3
   - P0 provenance links present
   - raw source unchanged
5. only when application implementation becomes the next dependency, create Issue/AC and hand off to Cursor

No Cursor implementation handoff yet.

---

# Approved Product/UX baseline — preserve, do not reopen

Existing approved UX decisions remain canonical in their individual docs. Important references:

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

Parallel OPEN Product/UX items remain:

- timed exercise Active Workout UI details
- recommended-routine actual program contents — DB/substitution data dependency
- Analysis first screen / drilldown scope
- Settings main scope
- rest timer end signal detail

Recent Analysis exploration (`period selection / exercise summary / frequency / front-back body-map distribution`) is not yet a PO-approved decision.

---

# Figma / implementation

Canonical Figma:

`https://www.figma.com/design/W3lZurXCXbThP67rF2xk2b/LIFTLY_%EC%B5%9C%EC%A2%85?node-id=0-1`

Canonical production wireframe:

`https://liftly-wireframe.vercel.app`

GitHub Decision/CURRENT overrides an older Figma/wireframe state when they conflict.

**No Cursor implementation handoff.**