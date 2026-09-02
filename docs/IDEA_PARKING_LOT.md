# IDEA PARKING LOT — Fitness Project

이 문서는 아직 확정되지 않은 아이디어를 보관하는 곳이다.

운영 원칙:
- 여기에 적힌 항목은 `DECISION`, `CONFIRMED`, 구현 요구사항이 아니다.
- 와이어프레임 / Figma / Cursor 구현에 자동 반영하지 않는다.
- 관련 영역을 정식 기획할 때 근거·비용·복잡도·우선순위를 다시 검토한 뒤 채택/기각한다.

## Exercise DB — 브랜드 머신 / 그립 변형

**상태:** IDEA ONLY · 재검토 예정

Exercise DB를 진지하게 설계할 때 다음 방향을 검토한다.

- Hammer Strength, Cybex, Booty Builder 등 대표 헬스 머신 제조사의 브랜드/모델 정보를 운동 선택에 활용하는 방안
- 일반 운동명 아래에 실제 머신을 variant로 연결하는 구조 검토
  - 예: `Seated Row -> Hammer Strength / Cybex / Generic machine variant`
- 동일 계열 운동이라도 머신 구조가 달라 기록 비교가 부정확할 수 있으므로, 머신별 기록 identity 분리 필요성 검토
- 그립(오버/언더/뉴트럴, 폭 등)에 따른 수행 차이와 근육 강조도(`muscle emphasis`) 메타데이터 제공 가능성 검토
- 그립별 차이를 모두 별도 운동으로 쪼갤지, 운동/머신 하위 variant 또는 metadata로 둘지는 미정
- 그립에 따른 타깃 차이는 과장된 헬스 상식이 아니라 연구 근거 수준을 확인해 표현할 것
- 제조사 로고·제품 사진·설명서 이미지 등의 사용권 문제는 별도 검토 필요

**정식 판단 시점:** `Exercise DB / visual assets / exercise identity` 기획 단계

**현재 결론:** 채택하지도 기각하지도 않음. 아이디어만 보존한다.
