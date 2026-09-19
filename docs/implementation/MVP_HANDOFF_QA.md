# MVP Implementation Handoff QA

**Status:** 94-SCREEN DEEP QA COMPLETE · FIX / DECISION NEEDED · IMPLEMENTATION NOT STARTED  
**Verified:** 2026-09-20

## QA purpose

Cursor-facing MVP handoff 문서가:
- 최신 제품 결정을 반영하는지
- superseded 추천 루틴 기획을 다시 살리지 않는지
- canonical Figma와 화면 목록이 일치하는지
- 개발자가 임의로 제품/기술 결정을 해야 하는 gap을 숨기지 않는지

검증했다.

This is handoff/document QA, not production-code QA.

## Evidence level

- Product/Decision review: **E1 PASS**
- GitHub handoff artifact review: **E2 PASS**
- Canonical Figma structure/read-back: **E2 PASS**
- Logic tests: **NOT APPLICABLE — implementation not started**
- Integration tests: **NOT VERIFIED**
- Runtime/Device: **NOT VERIFIED**

## 1. Product-source consistency

Reviewed current authority:
- `PROJECT_INSTRUCTIONS.md`
- `docs/CURRENT.md`
- `docs/24_PRODUCT_DIRECTION_V2.md`
- `docs/00_PROJECT_BRIEF.md`
- `docs/01_PRODUCT_POLICY.md`
- `docs/11_GLOBAL_INVARIANTS.md`
- `docs/12_REGRESSION_MATRIX.md`
- `docs/06_ENGINEERING_HARNESS.md`
- `docs/07_QA_RELEASE_HARNESS.md`
- relevant current Decision files

Result:
- current MVP recommended-routine requirement: **0**
- current product direction explicitly says recommended routines are removed
- old recommendation assumptions were removed from the active Project Brief / Global Invariants / Regression Matrix / Engineering QA wording where they could mislead implementation
- old web planning/wireframe docs now carry an implementation non-authority notice

Historical/superseded documents may still contain old recommendation discussions as history. They do not override the current authority chain.

## 2. Figma freeze read-back

Canonical:
- file `W3lZurXCXbThP67rF2xk2b`
- page `MVP_전체_와이어프레임` — `34:1076`

Final read-back:
- top-level frames: `94`
- group counts:
  - 00 = 1
  - 01 = 7
  - 02 = 3
  - 03 = 11
  - 04 = 29
  - 05 = 18
  - 06 = 3
  - 07 = 5
  - 08 = 17
- current instances: `1,855`
- missing main-component links: `0`
- component sources outside `Common_Component`: `0`

Verdict: **PASS**

## 3. Screen-inventory machine comparison

Compared:
- all canonical Figma top-level frame tuples `id / name / width / height`
- all rows in `docs/implementation/MVP_SCREEN_INVENTORY.md`

Result:
- Figma count = `94`
- document count = `94`
- missing in document = `0`
- extra in document = `0`
- ID/name/size mismatch = `0`

Verdict: **PASS — 94 / 94 exact match**

## 4. Recommendation removal verification

Figma read-back:
- top-level frame name matching recommended-routine semantics = `0`
- visible current MVP text matching `추천 루틴 / 추천루틴 / 추천 결과 / 추천받...` = `0`
- `RoutineTabs` instances = `0`

GitHub:
- `2026-09-19-recommended-routine-feature-removal.md` is the current superseding Decision
- Cursor handoff explicitly forbids restoring recommendation list/detail/matcher/save flows

Verdict: **PASS**

## 5. Routine optional-name verification

Canonical `03E_Routine_Create`:
- `RoutineNameInputSection` = Default
- Save CTA = Disabled
- exercise-card count = `0`

Current Decision:
- routine name is optional
- blank name does not block save
- blank valid routine auto-names to `나의 루틴 YYMMDD`

Handoff interpretation:
- current Disabled state is due to an otherwise empty/invalid routine, not the blank name
- Cursor must keep name validity separate from save-validity logic

Verdict: **PASS — behavior gap documented without requiring another Figma screen**

## 6. Blank-workout zero-exercise verification

Canonical `05A_Workout_Weight` contains:
- shared `WorkoutLiveBar`
- `ExerciseList`
- existing `운동 추가` action

Current blank-workout policy:
- starts active workout with zero exercises
- no saved routine auto-created
- exercises added through existing flow

Handoff:
- derives zero-exercise state from the existing 05A shell
- title = `빈 운동`
- ExerciseList empty
- `운동 추가` remains available

Verdict: **PASS — implementable state specified without a 95th top-level frame**

## 7. Dialog / logo consistency spot-check

Canonical read-back:
- live DialogCard count = `18`
- AppLogo instances = `4`
- all four AppLogo instances = `139 × 28`

Current decisions:
- dialog copy source = `2026-09-19-dialog-copy-simplification.md`
- default AppLogo = brand-primary
- Splash logo = white exception

Verdict: **PASS**

## 8. Recording-type completeness

Current MVP-active recording types:
- `weight_reps`
- `reps`
- `duration`
- `assisted_weight_reps`

Reserved:
- `weight_duration`
- `distance_duration`
- `distance_weight`

Out:
- `added_weight_reps`

Verified gap:
- `duration` storage semantics are approved
- detailed Active Workout timed-set interaction is explicitly deferred

Handoff correctly marks this as:
- `DECISION NEEDED`
- Cursor must not invent interaction behavior

Verdict: **CONDITIONAL PASS**

## 9. Technology architecture readiness

Reviewed current authority docs and repository searches for a locked production stack.

No current canonical decision was found for:
- client framework
- platform launch priority
- local persistence technology
- backend/database technology
- sync infrastructure
- app state/DI/navigation architecture

This QA does **not** claim the repository contains no code. It means the current authority reviewed for implementation does not lock the production architecture.

Because core stack/architecture is a Product Owner decision under project rules, Cursor must not select it implicitly.

Verdict: **DECISION NEEDED**

## 10. Asset readiness

Production exercise-thumbnail work:
- local crop automation technically validated
- full ~3,000-source overnight run still open
- exception QA / exact exercise-to-media mapping still open

Impact:
- does not block initial structural/domain implementation
- blocks final Production visual/media completion

Verdict: **NON-BLOCKING FOR EARLY IMPLEMENTATION · REQUIRED BEFORE FINAL VISUAL/RELEASE QA**

## 11. Reference integrity

Cursor handoff document references were checked against GitHub.

After creating this QA file:
- expected implementation docs exist
- current Product/Policy/Harness/Decision references resolve
- screen inventory exists and matches Figma

Historical `product/wireframe/*` remains accessible only as planning history and is explicitly marked non-authoritative for implementation.

## 12. Regression / risk requirements for implementation

When implementation starts, issue-level QA must select only affected packs.

Core likely packs:
- `PACK-ACTIVE-SESSION`
- `PACK-PERSISTENCE`
- `PACK-ROUTINE`
- `PACK-EXERCISE`
- `PACK-HISTORY`
- `PACK-UNITS`
- `PACK-DESIGN-SYSTEM`

High-risk focus:
- active workout durable recovery
- stable exercise identity
- historical immutability
- no duplicate/lost completed workout
- kg/lb integrity
- local/cloud authority and pending-change safety

Logic PASS must not be reported as Runtime/Device PASS.

## 13. Deep screen-by-screen behavior QA — 2026-09-20

The first handoff QA verified exact screen inventory and major contracts. A second, stricter QA was then performed at the Product Owner's request.

New artifact:
- `docs/implementation/MVP_SCREEN_BEHAVIOR_MATRIX.md`

Coverage:
- canonical frames mapped: `94 / 94`
- each frame classified by purpose / entry / primary behavior / implementation rule / QA verdict
- current Figma visible copy/state was read back for Groups 01–08
- previously approved behavior not visible as a standalone frame was recovered into the implementation contract where supported
- no Figma prototype reactions were found on representative route surfaces, so routing must come from GitHub behavior contracts rather than inferred Figma links

### New FIX findings

#### FIX-01 — primary bottom navigation missing

Product IA requires:
- 홈
- 루틴
- 분석
- 설정

But canonical Figma root screens contain no primary bottom-navigation instance, and `Common_Component` contains no corresponding primary bottom-nav component.

This would force Cursor to invent:
- visual shell
- selected/unselected states
- safe-area/height behavior
- root switching interaction

Verdict: **FIX**

The 94 content/state frames remain valid; the primary navigation shell requires targeted design completion before app-shell implementation.

#### RESOLVED — stale brand naming

Deep QA found stale working-name `G Fit` text in current top-level product docs while canonical visual branding was Tampin.

Resolved during this QA:
- `docs/24_PRODUCT_DIRECTION_V2.md` aligned to Tampin
- `docs/00_PROJECT_BRIEF.md` aligned to Tampin

Verdict: **PASS after correction**

### New DECISION NEEDED findings

#### DECISION-01 — weekday scheduling conflict

Current top-level product text still allows optional weekday assignment and today/next semantics.

Frozen Figma:
- has no weekday assignment control in current Routine states
- has no `오늘의 운동 / 다음 운동` Home state
- uses a selected saved routine in `02B_Home_RoutineSelected`

Verdict: **DECISION NEEDED — remove/defer scheduling from MVP or reopen only the required affected states.**

#### DECISION-02 — routine Duplicate

`03A_Routine_List_Menu` contains `복제`, but exact duplicate behavior is not currently specified.

Missing:
- generated copied name
- metadata copy scope
- deep-copy boundary
- destination
- repeat-name collision handling

Verdict: **DECISION NEEDED**

#### DECISION-03 — W / D / F set semantics

Current routine/workout cards visibly include W / numbered / D / F set rows.

No reviewed authority defines:
- exact meaning
- set-type editing
- storage semantics
- completion behavior
- volume/PR/history effect

Verdict: **DECISION NEEDED**

### Conditional platform finding

Current Login Figma = Google / Kakao.
Policy says iOS also requires Apple.

Verdict:
- Android-first surface: aligned
- iOS launch: Apple provider presentation and provider-specific account/deletion copy require alignment

### Previously known blockers remain

- technology stack / architecture
- duration Active Workout timed-set interaction

### Detailed rules added to handoff

The deep QA also found approved behavior that was valid but under-specified in the original Cursor handoff. These were added rather than treated as new decisions:

Group 03:
- create/edit/delete destinations
- unsaved Back behavior
- replacement record initialization
- routine estimated-duration calculation

Group 04:
- custom exercise create/edit save destinations
- custom exercise delete consequences
- attachment-media fallback

Group 05:
- replacement candidate pool / batch policy
- completed-set replacement boundary
- other-routine start ordering

Group 07:
- total-volume applicability
- all-valid-PR presentation
- body-area contributor-list behavior
- workout deletion derived-data consequences

Verdict for these additions: **PASS — recovered approved rules, not new product behavior.**

## 14. Final QA verdict

### PASS
- 94 / 94 screen behavior rows mapped
- current product scope alignment
- recommendation removal
- MVP screen freeze
- 94-screen Figma/document 1:1 inventory
- Figma component linkage
- Cursor-facing behavior/data/design contract
- blank-workout runtime state specification
- routine optional-name specification
- dialog/logo current-state references
- stale planning artifact guardrails

### FIX before relevant UI implementation
1. primary bottom-navigation visual/component contract

### DECISION NEEDED before production implementation
1. weekday scheduling / today-next semantics
2. routine Duplicate behavior
3. W / D / F set-type semantics
4. technology stack / platform architecture
5. `duration` Active Workout timed-set interaction

### CONDITIONAL
- iOS launch requires Apple sign-in/provider copy alignment

### Open but non-blocking for early development
- Production exercise-thumbnail crop/mapping

## Final result

**FIX / DECISION NEEDED — the 94 canonical screens are now individually mapped and most behavior is implementation-ready, but the handoff is not a full PASS. Resolve the targeted FIX / DECISION NEEDED items above before production implementation, then re-run focused handoff QA.**
