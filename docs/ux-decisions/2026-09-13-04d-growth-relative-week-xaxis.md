# 04D Exercise Detail Growth — 4주 X축 상대 주차 표기

Status: FIGMA APPLIED / VISUAL QA PASS / NO CURSOR HANDOFF

## Decision
- `04D_Exercise_Detail_Growth`의 4주 차트 X축은 날짜 범위 대신 상대 주차 라벨을 사용한다.
- 라벨: `3주 전 / 2주 전 / 지난주 / 이번주`
- 각 라벨 중심은 기존 4개 주간 버킷 데이터 포인트 중심과 유지한다.
- 정확한 날짜 범위는 포인트 인터랙션/툴팁에서 확인하는 방향을 유지한다.
- 3개월/1년 표기 규칙은 기존 정책을 유지한다.

## Figma QA
- Screen: `04D_Exercise_Detail_Growth` (`1000:1519`)
- X labels: `1008:604`–`1008:607`
- Centers preserved at x=56 / 136 / 216 / 296
- Full-screen screenshot QA: PASS

No Cursor implementation handoff.
