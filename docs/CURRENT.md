# CURRENT — Fitness Project

**Updated:** 2026-09-05

## Current mode

`EXERCISE DB / ASSET NORMALIZATION ACTIVE · RAW R2 VERIFIED · 2,109 BULK MAPPING COMPLETE · P0 SOURCE COVERAGE LOCKED 16/16 · PLANK DURATION APPROVED · P0 211 PRODUCTION PROMOTION QA NEXT · P1 15/17 SOURCE-COVERED · PRODUCT/UX BASELINE PRESERVED · NO CURSOR IMPLEMENTATION HANDOFF`

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

### P0 16 — SOURCE COVERAGE LOCKED 16/16

PO-approved P0 identities remain unchanged.

Library source directly covers **13 / 16**.

The 3 identities absent from Library were directly reviewed from purchased Home source:

1. Plank → `Front-Elbow-Plank-(male)_Waist-FIX_.mp4`
2. Crunch → `Crunch-Floor-(male)_waist.mp4`
3. Lying Leg Raise → `Lying-Leg-Raise_Waist-FIX_.mp4`

Direct visual QA result:

- Plank: standard forearm plank — PASS
- Crunch: standard floor bodyweight crunch — PASS
- Lying Leg Raise: standard supine bilateral leg raise — PASS
- unresolved: **0**

Therefore package-level P0 source coverage is now:

**16 / 16**

Source absence-driven new P0 media creation need:

**0 / 16**

Reference:

- `docs/exercise-db/2026-09-05-p0-home-fallback-visual-qa-3.md`

Promotion draft:

- `docs/exercise-db/2026-09-05-p0-16-production-promotion-spec.md`

If all 16 are promoted, curated MVP catalog target:

**195 + 16 = 211 app-facing exercises**

### Timed exercise recording — PO APPROVED

Policy:

- Plank처럼 수행 성과가 유지시간인 운동은 `recording_type = duration`
- duration seconds를 가짜 reps로 변환하지 않음
- P0 `plank`는 `duration`으로 lock
- `crunch`, `lying-leg-raise`는 `reps` 유지

시간제 운동의 수행시간 측정과 Rest Timer는 별도 개념으로 유지한다.

UI 상세는 후속으로 미룬다:

- TIME 세트 행 UI
- 시작/정지 방식
- countdown vs stopwatch
- 시간 종료 signal
- timed set 종료 후 Rest Timer 시작 조건

이 UI 미확정은 P0 211 데이터 승격을 막지 않는다.

Reference:

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

# NEXT OPEN ITEM — P0 Production promotion QA

## Immediate next

**Run P0 16 Production promotion QA.**

Check:

1. canonical ID uniqueness against current Production 195
2. Korean / English display names and search aliases
3. equipment / body part normalization
4. recording semantics
   - Plank = `duration`
   - Assisted Pull-Up / Dip = `assisted_weight_reps`
5. source provenance integrity
6. verify expected app-facing row count = **211**

After row lock:

1. choose default production-serving media for each promoted row
2. decide media transform/compression/storage/app-serving structure
3. only when implementation becomes the next dependency, create Issue/AC and hand off to Cursor

No Cursor implementation handoff until canonical/data promotion is stable.

---

# Approved Product/UX baseline — preserve, do not reopen

Existing approved UX decisions remain canonical in their individual docs. Important references:

- Home / Recommended Routine: `docs/ux-decisions/2026-09-03-recommended-routine-detail-flow.md`, `docs/ux-decisions/2026-09-04-recommended-routine-post-workout-save.md`
- Exercise Detail: `docs/ux-decisions/2026-09-04-exercise-detail-scope.md`
- Cable attachment: `docs/ux-decisions/2026-09-03-cable-attachment-active-workout.md`
- Active Workout / routine update: `docs/ux-decisions/2026-09-03-active-workout-routine-update.md`
- Rest Timer: `docs/ux-decisions/2026-09-03-rest-timer-behavior.md`
- Timed exercise recording: `docs/ux-decisions/2026-09-05-duration-exercise-recording.md`
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