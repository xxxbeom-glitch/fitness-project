# Recommended Routine Detail Flow — 2026-09-03

**Status:** PO APPROVED
**Scope:** Home의 추천 루틴 카드 선택 후 운동 시작 전 상세 확인 흐름

## Decision

추천 루틴 카드를 누르면 즉시 Active Workout으로 들어가지 않고, **간단한 추천 루틴 상세 화면을 한 번 거친 뒤 운동을 시작**한다.

Flow:

`Home 추천 루틴 카드 → 추천 루틴 상세 → 운동 시작 → Active Workout`

## Detail screen content

상세 화면은 시작 전 전체 구성을 빠르게 확인하는 목적에 집중한다.

포함:

- 추천 루틴명
- 짧은 설명
- 운동 수
- 총 세트 수
- 예상 운동 시간
- 전체 운동 목록
- 운동별 세트 수 / 반복 범위
- 하단 고정 CTA `운동 시작`

과도한 정보는 넣지 않는다.

## Save semantics

추천 루틴 상세 화면에는 **내 루틴 저장 버튼을 두지 않는다.**

기존 승인 정책을 유지한다.

`추천 루틴 선택 → 저장 없이 운동 시작 → 운동 완료 → 사용자가 내 루틴 저장 여부 결정`

오늘의 운동 기록 저장과 추천 루틴 자체의 저장은 별개의 동작이다.

## Intentionally excluded

MVP 상세 화면에서는 다음을 기본적으로 제외한다.

- 운동 시작 전 내 루틴 저장
- 즐겨찾기
- 긴 프로그램 설명
- 추천 설문 / 개인화 질문
- 불필요한 개인화 태그

## Review artifact

검토에 사용한 Vercel review artifact source:

`product/wireframe/recommended-routine-detail-review.html`

PO가 해당 review 화면을 보고 방향을 승인했다. 최종 시각 스타일은 Figma 디자인 단계에서 조정할 수 있으나, 위 제품 흐름과 정보 구조는 재기획 대상이 아니다.

## Implementation note

이 문서는 제품/UX 결정이다. Cursor 구현은 아직 승인되지 않았다.
