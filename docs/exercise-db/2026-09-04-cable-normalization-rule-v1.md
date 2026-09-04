# Cable Normalization Rule v1

**Date:** 2026-09-04  
**Status:** PO APPROVED / APPLY TO FULL CABLE SOURCE SCOPE  
**Scope:** `MP4/MALE/Library_database` Cable source normalization

## Purpose

Gym Animations raw source의 Cable 영상들을 G Fit app-facing exercise DB로 정규화할 때, vendor filename을 그대로 exercise identity로 사용하지 않고 실제 운동 의미를 기준으로 `canonical exercise / attachment / execution variant / duplicate`를 구분한다.

구매 원본 filename/path/media는 read-only provenance로 유지하며 수정하지 않는다.

이 규칙은 14개 ambiguous Cable 영상의 직접 visual QA 결과와 2026-09-04 PO 승인에 근거한다.

Reference:

- `docs/exercise-db/2026-09-04-cable-visual-review-14.md`
- `docs/ux-decisions/2026-09-03-cable-attachment-active-workout.md`
- `docs/exercise-db/2026-09-04-cable-normalization-map-v0.1.md`

## Source scope note

초기 first-pass의 **297 Cable raw videos**는 filename이 `Cable`로 시작하는 source count다.

후속 filename/size manifest를 넓게 `cable` 문자열로 추출하면서 아래 1개가 추가 발견되었다.

- `Inverse-Leg-Curl-(on-pull-up-cable-machine)_Thighs.mp4`

따라서 현재 derived normalization scope는:

- `Cable*` prefix source: **297**
- cable-associated extra: **1**
- manifest total: **298**

으로 구분한다.

이 reconciliation은 이전 297 source fact를 덮어쓰는 것이 아니다. `source_scope`를 분리하여 raw provenance를 그대로 보존한다.

## PO-approved core rules

### Rule 1 — 같은 운동 + 손잡이만 다름

운동 자체의 관절 패턴 / 자세 / 수행 경로가 같고 **attachment만 다르면**:

`same canonical exercise + attachment context + attachment-specific media`

예:

- Cable Curl + straight bar
- Cable Curl + multipurpose V-bar

이 경우 source variant마다 별도 canonical exercise를 만들지 않는다.

단, 제품 기록 맥락은 attachment를 보존한다. 같은 canonical이라도 다른 손잡이로 수행한 카드는 서로 덮어쓰지 않으며, 이전 기록도 attachment context를 잃지 않는다.

### Rule 2 — 그립만 다름

운동 자체는 같고 손바닥 방향 / 손 간격 같은 **grip 차이만 있는 경우**:

`same parent movement family + grip variant/context`

으로 우선 처리한다.

그립 차이만으로 새 canonical parent를 만들지 않는다.

다만 grip 차이가 실제 수행 경로를 크게 바꾸거나 국내에서 별도 운동으로 통용되는 경우에는 Rule 3/4 검토로 승격한다.

### Rule 3 — 자세 / 한손·양손 / 큰 수행 방식 차이

다음처럼 수행 맥락이 크게 달라지면 attachment swap으로 흡수하지 않는다.

- lying / seated / standing / half-kneeling
- unilateral / bilateral
- behind-neck path
- 큰 body-position 차이
- 큰 execution-path 차이

처리:

`same broad family + explicit execution variant`

을 기본으로 한다.

이 variant들은 성과/이전 기록을 자동으로 하나로 합치지 않는다.

예:

- standing cable curl vs lying cable curl
- standing bilateral diagonal lift vs half-kneeling unilateral diagonal lift
- regular lat pulldown vs behind-neck pulldown

### Rule 4 — 운동 자체가 달라지는 경우

회전, 관절 패턴, 타깃 동작이 materially 달라져 같은 운동으로 보기 어려우면:

`separate canonical movement candidate`

로 유지한다.

예:

- ordinary cable row vs twisting rotational cable pull
- ordinary lateral raise vs bent-over unilateral rear-delt style movement

vendor filename이 비슷하다는 이유만으로 합치지 않는다.

## Supporting invariants

### True duplicate

`DUPLICATE`는 filename 유사성이 아니라 **실제 app-facing 수행이 사실상 동일한 경우**에만 판정한다.

가능하면 filename/size 후보 → visual 또는 hash 검증 순으로 확인한다.

### Vendor naming is evidence, not truth

vendor filename의 운동명/부위 suffix가 실제 영상과 충돌하면 raw filename은 그대로 보존하고 G Fit normalized name을 별도로 정한다.

14개 visual QA에서 이미 확인된 예:

- `Cable-Incline-Pushdown_Back_` → ordinary triceps pushdown으로 해석하지 않음
- `Cable-Standing-Pulldown-(with-rope)_Forearms_` → lat pulldown으로 자동 병합하지 않음

### Source-media exception is separate from identity

모델 성별, 잘못된 폴더 배치 등 media 품질/selection 문제는 exercise identity와 분리해서 `SOURCE_MEDIA_EXCEPTION`으로 추적한다.

예:

- Male raw analysis catalog 안의 female-model Cable Seated Chest Press

## Full-catalog mapping fields

Cable source scope를 적용할 때 최소 다음 derived fields를 만든다.

- `raw_filename`
- `raw_size_bytes`
- `source_scope`
- `canonical_parent_candidate`
- `normalized_name_candidate`
- `variant_class`
  - `BASE`
  - `ATTACHMENT_VARIANT`
  - `GRIP_VARIANT`
  - `EXECUTION_VARIANT`
  - `CANONICAL_MOVEMENT_CANDIDATE`
  - `DUPLICATE`
- `attachment_context`
- `grip_context`
- `posture_context`
- `laterality_context`
- `execution_context`
- `history_scope`
- `media_exception`
- `confidence`
- `review_note`

Raw source field는 이 derived mapping으로 덮어쓰지 않는다.

## History / card boundary

Cable attachment UX의 기존 승인 정책을 유지한다.

- 같은 canonical exercise라도 attachment가 다르면 Active Workout에서는 별도 카드
- attachment는 카드가 생성될 때 고정
- attachment별 수행 기록 맥락을 보존
- execution variant는 자동으로 동일 history로 합치지 않음
- true duplicate만 동일 identity/history로 완전히 흡수 가능

## Current application plan

1. filename/size manifest 확보 — **DONE: 298 rows = 297 prefix + 1 associated extra**
2. filename 기반 전체 1차 mapping — **DONE: v0.1**
3. 14개 visual-reviewed 결과 반영 — **DONE**
4. duplicate candidate groups **18 groups / 38 files** visual/hash 검증 — **NEXT**
5. naming-review cases 정리
6. Cable canonical parent / attachment / grip / execution / duplicate map 확정
7. 그 다음 Machine / Barbell / Dumbbell / Kettlebell / Smith / Landmine으로 동일 프레임 확장

No Cursor implementation handoff is implied. This is Exercise DB/source normalization work.
