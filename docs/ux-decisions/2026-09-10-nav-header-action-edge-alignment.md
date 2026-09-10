# Nav Header Action Edge Alignment — 2026-09-10

**Status:** PO APPROVED
**Scope:** 공용 `Nav Header` 좌/우 액션 아이콘의 시각 정렬

## Decision

공용 `Nav Header`의 좌/우 액션은 **44×44 최소 터치영역을 그대로 유지**하되, 시각 아이콘은 터치영역 중앙이 아니라 화면 바깥쪽 방향으로 정렬한다.

- leading/left action visual icon → 44×44 hit wrapper의 **left aligned**
- trailing/right action visual icon → 44×44 hit wrapper의 **right aligned**
- vertical alignment → center 유지
- visual icon size → 기존 24×24 유지
- header page inset → 기존 20px 유지
- hit wrapper → 기존 44×44 유지
- title → 기존 optical center 구조 유지

의도는 화면 기본 inset + 44px hit wrapper 내부 중앙정렬이 중첩되어 좌우 액션이 과도하게 안쪽으로 들어와 보이는 문제를 줄이는 것이다. 터치 가능 영역 자체를 축소하거나 화면 가장자리로 이동시키는 변경은 아니다.

## Figma

Canonical file: `W3lZurXCXbThP67rF2xk2b`

Shared component set:

- `Nav Header` — `360:2361`
- 16 variants 전체 반영

Implementation:

- left 44px slot: horizontal MIN / vertical CENTER
- right 44px slot: horizontal MAX / vertical CENTER
- action slot size remains 44×44
- icon visual remains 24×24

Screenshot QA sampled on:

- `04E_Custom_Create` — back + save
- `04A_Search` — back + plus

Both confirm the intended tighter edge alignment without changing touch target size or title centering.

## Related system rules

- `docs/15_TONAL_DESIGN_SYSTEM_SPEC.md` — Navigation/TopBar, minimum 44×44 leading/trailing hit wrapper
- `docs/09_DESIGN_SYSTEM.md` — minimum 44 interaction target and reusable component structure

## Implementation

Cursor 제품 구현 handoff는 아직 승인하지 않는다.
