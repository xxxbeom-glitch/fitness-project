# Error Ledger

반복 가능성이 있거나 다음 작업에서 재사용 가치가 있는 오류만 기록한다.

## Active Errors
현재 등록된 오류 없음.

---

## Entry Template

### ERR-YYYYMMDD-001 — Short title
- Fingerprint:
- Status: OPEN | INVESTIGATING | BLOCKED | WORKAROUND | RESOLVED
- First seen:
- Last seen:
- Occurrences:
- Command:
- Affected area:
- Root cause:
- Fix:
- Verification:
- Notes:

## Rules
- 실제 검증 성공 전에는 RESOLVED로 바꾸지 않는다.
- 동일 fingerprint는 새 항목 대신 occurrences를 증가시킨다.
- secrets/개인정보/전체 환경변수/긴 원본 로그를 기록하지 않는다.
