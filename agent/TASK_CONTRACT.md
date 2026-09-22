# Active Task Contract

이 문서는 현재 Cursor 구현 작업 한 건만 유지한다.
새 Issue를 시작할 때 이전 내용을 교체한다.

## Current state
- Development authorization: PAUSED BY PRODUCT OWNER — 2026-09-22
- Previous completed Issue: #5 / DEV-001 — PASS · merged to main
- Paused Issue: #6 / DEV-002 — NOT EXECUTED
- Active implementation Issue: NONE
- Status: NO_ACTIVE_DEV_TASK
- Current mode: DESIGN / FIGMA
- Next Owner: ChatGPT + Product Owner

## Reason

Product Owner가 현재 canonical 디자인을 크게 수정하기 위해 Development를 일시 중단했다.

DEV-001의 Expo/RN/TS bootstrap은 그대로 유지한다.
DEV-002는 실행 전 상태로 보류한다.

## Cursor rule

현재 Cursor는 production app 구현을 진행하지 않는다.

금지:
- Issue #6 실행
- 새 implementation Issue 선행 실행
- canonical Figma 변경 전 화면 구현
- SQLite/Supabase/Auth/Sync 등 후속 개발 선행

재개 조건:
1. canonical Figma redesign 완료
2. 변경 범위 Design QA PASS
3. 관련 implementation handoff/behavior contract 갱신 필요 시 반영
4. Product Owner의 명시적 Development 재개 승인

## Result

- Status: PAUSED
- Code rollback: NONE
- DEV-001: retained
- DEV-002: waiting
