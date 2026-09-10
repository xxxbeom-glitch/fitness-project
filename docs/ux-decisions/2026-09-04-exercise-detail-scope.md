# Exercise Detail Scope — 2026-09-04

**Status:** PO APPROVED
**Scope:** 기본 운동 라이브러리의 Exercise Detail 정보 구조와 기존 Figma `341_Library_Exercise_History` 활용 방식

## Decision

Exercise Detail은 새 IA를 추가로 만들지 않고, 기존 Figma `341_Library_Exercise_History`의 **2탭 구조를 유지**한다.

탭:

- `운동 정보`
- `최근 기록`

현재 Figma의 `최근 기록` 상태는 유지하고, 비어 있는 `운동 정보` 탭을 완성하는 방식으로 진행한다.

이 결정은 `DEC-011 — Exercise detail is text-first and media-optional`을 최신 구매 미디어 상황에 맞게 구체화한다.

## 1. 운동 정보 탭

기본 정보 우선순위:

1. 운동 동작 미디어
2. 운동명
3. 장비 + 주요 근육
4. 보조 근육
5. 짧은 운동 방법
6. 핵심 체크포인트 / 주의점

### Media

Gym Animations 구매 소스에서 해당 운동에 적절한 media가 연결된 경우, 운동 정보 탭 상단의 주요 시각 정보로 사용한다.

- 기본 운동에서는 구매한 운동 animation / motion media를 우선 활용할 수 있다.
- media가 없더라도 운동 정보 화면은 완전하게 동작해야 한다.
- media 부재를 위해 빈 placeholder 영역을 고정 예약하지 않는다.
- Cable attachment 등 같은 canonical exercise 안에서 attachment별 media가 다르면 해당 context에 맞는 media를 보여줄 수 있다.

즉, media는 현재 확보한 강한 제품 자산이지만 Exercise Detail의 필수 데이터 dependency로 만들지는 않는다.

## 2. 최근 기록 탭

기존 Figma `341_Library_Exercise_History` 방향을 유지한다.

- 날짜별 실제 수행 기록
- 세트 번호
- 중량 / 보조중량 등 해당 recording type의 값
- 반복수 등 해당 exercise type에 필요한 실제 기록

완료되지 않은 세트를 완료 기록처럼 채우지 않는다.

Exercise Detail 첫 화면에 개인 통계와 장기 분석을 과도하게 중복 노출하지 않는다. 깊은 추세 / 장기 분석은 별도 Analysis 영역과 역할을 분리한다.

## 3. Tab structure

MVP에서는 Hevy처럼 `Summary / History / How to / Leaderboard` 등 다수 탭으로 확장하지 않는다.

`운동 정보 | 최근 기록` 2탭을 유지한다.

운동 방법과 체크포인트는 `운동 정보` 안에 함께 배치한다. 별도 `How to` 탭을 만들지 않는다.

이유:

- 사용자가 운동을 확인하는 핵심 목적은 동작 이해와 최근 내 기록 확인이다.
- 탭이 많아질수록 탐색 비용이 증가한다.
- G Fit은 운동 백과사전보다 빠른 웨이트 기록 경험이 우선이다.

## 4. Exercise Search / selection context

Exercise Search 목록에서는 기존 정책대로 빠른 선택을 우선한다.

- 썸네일 / 운동명 / 큰 부위 등 필요한 식별 정보
- 목록의 `+`를 통한 직접 추가
- 운동명 또는 미디어 영역을 통해 Exercise Detail 선택 진입 가능

Exercise Detail을 반드시 거쳐야 운동을 추가할 수 있게 만들지 않는다.

루틴 만들기 / 운동 중 추가 등 선택 context에서 Exercise Detail에 진입한 경우에는 기존 DEC-011대로 `이 운동 추가`를 주요 action으로 사용할 수 있다.

## 5. Reference review

2026-09-04 Figma + Mobbin 검토에서 다음 패턴을 참고했다.

- Hevy: 운동 visual + muscle metadata + 개인 기록 / History / How to 분리
- Runna: animation / video + 설명
- Bevel: 운동 visual + equipment + primary / secondary muscle
- Tonal: movement demo + muscle view

G Fit은 이 패턴들을 그대로 복제하지 않고, 기존 제품 구조에 맞춰 **2탭으로 축약**한다.

## Figma mapping

Canonical Figma:

`341_Library_Exercise_History`

- 기존 `최근 기록` tab/state 유지
- `운동 정보` tab/state 추가 또는 완성
- 별도 신규 Exercise Detail navigation 구조는 만들지 않음

최종 visual spacing / typography / animation frame size는 Figma design sync 단계에서 조정한다.

## Figma implementation status — 2026-09-10

Canonical Group 04 screen:

- page: `04 운동 목록 · 상세` — `233:2075`
- `04D_운동상세` — `40:2325`
- `04G_Exercise_History` — `34:1714`

Applied to the `운동 정보` tab:

- screen shell normalized to `360 × 954` vertical Auto Layout
- media remains first visual block
- exercise name remains the Nav Header title (`벤치프레스` sample)
- display-only metadata rows remain:
  - `장비` → `바벨`
  - `주 타겟 근육` → `가슴`
  - `보조 타겟 근육` → `삼두 · 전면 어깨`
- `운동 방법` remains a numbered text list
- `핵심 체크포인트` also uses a short numbered text list to match the exercise-method format
- existing `RowLabel` / `RowValue(Type=ValueOnly)` components remain reused for metadata

### 04D visual treatment update — PO APPROVED / 2026-09-10

The information area is now **flat rather than card-stacked**.

Canonical treatment:

- media remains the only prominent rounded surface block in the information tab
- metadata (`장비 / 주 타겟 근육 / 보조 타겟 근육`) has no background card or rounded container
- metadata keeps thin row dividers to preserve scanability
- metadata row content aligns directly to the page content inset rather than an extra inner card inset
- `운동 방법` has no inner background card or rounded container; heading + numbered list are shown directly on the page
- `핵심 체크포인트` has no inner background card or rounded container; heading + numbered list are shown directly on the page
- both numbered lists use the same list spacing pattern (`spacing/12`) and responsive text behavior
- section separation is handled by the existing typography hierarchy and tokenized vertical spacing, not additional boxes
- media surface is intentionally retained because it is a distinct visual/content region rather than another text-information card

Figma node mapping after flattening:

- `ExerciseMetadata_Flat` — `543:1048`
- `InstructionList_Flat` — `40:2364`
- `CheckpointList_Flat` — `543:1072`

QA after flattening:

- structure remains semantic vertical Auto Layout
- existing metadata components are not detached
- metadata divider color binding is preserved
- heading/body typography and section spacing bindings are preserved
- both method/checkpoint text rows use horizontal FILL + height auto for long-copy wrapping
- screenshot QA confirms the updated 04D fits the canonical `360 × 954` viewport without collision or clipped content

Applied to the `최근 기록` tab:

- legacy `360 × 1102` artboard normalized to the canonical `360 × 954` viewport
- screen shell converted to vertical Auto Layout
- Status Area, Nav Header, and 2-tab bar remain fixed-height / full-width
- `ExerciseHistoryContent` uses the remaining `782px` viewport region and is vertically scrollable
- existing date-grouped records and set values are preserved rather than shortened to fit the viewport
- existing spacing/surface/divider variable bindings are retained
- root-level accidental `minHeight=780` constraint was removed so shorter devices can shrink the screen shell normally
- temporary `360 × 620` QA confirmed the history content shrinks to the remaining `448px` and remains vertically scrollable without layout collision
- structure QA, binding QA, and screenshot QA completed

This completes the current 04D/04G Exercise Detail screen pass. Exact coaching copy remains product content and may be refined later without changing the approved information architecture.

## Explicit non-goals

- Leaderboard
- 운동별 social ranking
- Exercise Detail 안의 장기 분석 dashboard
- media가 없는 운동을 위해 빈 고정 media box 유지
- How-to 전용 별도 tab
- Exercise Detail 강제 경유 후 운동 추가

## Related decisions

- `docs/08_DECISIONS.md` — DEC-011
- `docs/ux-decisions/2026-09-02-exercise-db-normalization.md`
- `docs/ux-decisions/2026-09-03-cable-attachment-active-workout.md`

## Implementation

Cursor 제품 구현 handoff는 아직 승인하지 않는다.
