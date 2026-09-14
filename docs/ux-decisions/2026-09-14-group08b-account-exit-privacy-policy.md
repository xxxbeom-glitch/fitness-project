# Group 08B — 계정 탈퇴 개인정보 파기 정책

**Date:** 2026-09-14  
**Status:** PRODUCT/UX APPROVED / FIGMA APPLIED / TARGETED QA PASS / BASE 08B REMAINS LOCKED / NO CURSOR HANDOFF

## Scope

기존 Group 08B 계정 탈퇴 흐름은 유지하고, 탈퇴 시 개인정보 파기 안내와 제품 정책을 명확히 추가한다.

Canonical Figma:
- file `W3lZurXCXbThP67rF2xk2b`
- page `08 설정 · 계정` — `233:2079`
- dedicated account-exit screen — `1222:846`
- final confirm state — `1222:7487`

## Approved deletion presentation

삭제되는 앱 데이터는 전용 탈퇴 화면에서 카드/행으로 나누지 않고 한 문장으로 표시한다.

`운동 기록, 루틴, 직접 만든 운동, 프로필 및 신체 정보, 앱 설정 및 계정 데이터`

추가 개인정보 안내:
- heading = `개인정보도 함께 파기돼요`
- 앱에서 보관 중인 닉네임, 프로필 이미지, 성별, 생년월일, 신체 정보와 소셜 로그인 연동 정보는 탈퇴 처리 시 함께 파기한다.
- 파기는 복구·재생되지 않도록 수행한다.
- 다만 관계 법령에 따라 보존이 필요한 정보는 필요한 최소 범위만 별도로 분리 보관하고, 법정 보존기간 종료 후 파기한다.
- 외부 Google/Kakao 계정 자체는 삭제 대상이 아니다.

Final confirmation dialog:
- title = `정말 계정을 탈퇴할까요?`
- body = `운동 기록, 루틴, 프로필과 개인정보 등 모든 계정 데이터가 삭제되며 복구할 수 없어요.`
- actions = `취소 / 탈퇴하기`

## Product privacy policy

Account deletion is a product-level privacy event, not only a UI action.

Current MVP policy:
1. 최종 탈퇴 확인이 완료되면 Fitness 계정에 연결된 앱 데이터와 개인정보를 삭제 대상으로 처리한다.
2. 파기 대상은 앱이 실제 보관 중인 개인정보에 한정하며, 현재 범위에는 닉네임, 프로필 이미지, 성별, 생년월일, 신체 정보 및 앱이 보관 중인 소셜 로그인 연동 정보가 포함된다.
3. 파기 시 복구 또는 재생되지 않도록 처리한다.
4. 다른 법령에 따라 보존 의무가 있는 정보가 존재하는 경우, 해당 정보는 일반 사용자 데이터와 분리하여 필요한 최소 범위로 보관한다.
5. 법정 보존기간이 끝나면 해당 보존 정보도 파기한다.
6. 개인정보처리방침에는 개인정보 보유기간, 파기 절차·방법, 법정 보존 예외가 있다면 그 보존 근거와 항목을 명시한다.
7. Google/Kakao 자체 계정은 삭제하지 않으며 Fitness 앱 계정/데이터 관계만 종료한다.
8. 탈퇴 완료 후 현재 로그인 세션을 종료하고 로그인 진입 화면으로 이동한다.

## Legal basis checked

2026-09-14 기준 대한민국 개인정보 보호법을 확인했다.

- 개인정보 보호법 제21조: 개인정보가 불필요해진 경우 지체 없이 파기해야 하며, 파기 시 복구 또는 재생되지 않도록 조치해야 한다. 다른 법령에 따라 보존해야 하는 경우에는 다른 개인정보와 분리해 저장·관리한다.
- 개인정보 보호법 제30조: 개인정보처리방침에 처리·보유기간, 파기절차 및 파기방법을 포함하고, 법정 보존 예외가 있다면 보존근거와 보존 개인정보 항목을 포함해야 한다.

Official references:
- https://law.go.kr/lsLinkCommonInfo.do?chrClsCd=010202&lsJoLnkSeq=1029335625
- https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1029331583

## Figma QA

- dedicated deletion screen remains `360 × 780`
- 삭제 데이터 문구는 쉼표 구분 한 문장으로 표시
- 개인정보 파기 안내 추가
- CTA remains at page bottom
- final dialog copy includes 개인정보
- final confirm state background synchronized with current deletion screen
- targeted screenshot QA = PASS

## NEXT OPEN ITEM

Continue Group 08 with `자주 묻는 질문 → 문의하기 → 약관/개인정보/법률 표시`.

Legal/privacy presentation must reuse this deletion policy and must not introduce a conflicting retention/deletion rule.

## Development boundary

No Cursor/development handoff is authorized by this checkpoint.
