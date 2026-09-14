# Group 08B — 계정 탈퇴 흐름 업데이트

**Date:** 2026-09-14
**Status:** PRODUCT/UX APPROVED / FIGMA APPLIED / TARGETED QA PASS / BASE PROFILE REMAINS LOCKED / NO CURSOR HANDOFF

## Scope

08B 기본 프로필은 그대로 LOCK 유지하고, 계정 탈퇴 흐름만 이번 PO 결정으로 갱신한다.

Canonical Figma:
- file `W3lZurXCXbThP67rF2xk2b`
- page `08 설정 · 계정` — `233:2079`
- base profile — `1204:770`
- account-management sheet — `1207:799`
- dedicated account-exit screen — `1222:846`
- final confirm state — `1222:7487`

이전 프로필 배경의 탈퇴 확인 상태 `1207:859`는 제거되었다.

## Approved flow

`프로필 헤더 ⋮ → 계정 관리 바텀시트 → 계정 탈퇴 → 계정 탈퇴 전용 화면 → 계정 탈퇴하기 → 최종 확인 다이얼로그`

바텀시트는 진입점일 뿐이며 즉시 탈퇴를 실행하지 않는다.

## Dedicated screen

- header title = `계정 탈퇴`
- back action
- no right action
- `탈퇴 전에 확인해 주세요`
- 안내 목록:
  - 운동 기록
  - 루틴
  - 직접 만든 운동
  - 프로필 및 신체 정보
  - 앱 설정 및 계정 데이터
- `삭제된 데이터는 복구할 수 없어요.` 안내
- 같은 Google/Kakao 계정으로 재가입할 수 있으나 이전 데이터는 복구되지 않는다는 안내
- bottom CTA = `계정 탈퇴하기`
- destructive red treatment
- minimum frame size = `360 × 780`

## Final confirmation

`계정 탈퇴하기` 선택 후 최종 확인 다이얼로그를 표시한다.

- title = `정말 계정을 탈퇴할까요?`
- 영구 삭제 및 복구 불가 안내
- actions = `취소 / 탈퇴하기`
- final action uses destructive red treatment

최종 `탈퇴하기`를 선택한 경우에만 실제 탈퇴 처리를 시작한다.

## Current MVP policy

- 별도의 7일/30일 유예기간은 두지 않는다.
- Google/Kakao 자체 계정을 없애는 것이 아니라 Fitness 앱 계정 연결과 앱 데이터를 대상으로 한다.
- 같은 소셜 로그인으로 다시 가입할 수 있지만 기존 기록은 복원되지 않는다.
- 성공 후 현재 로그인 세션을 종료하고 로그인 진입 화면으로 이동한다.

법적 보존 의무가 생기는 데이터가 있다면 일반 앱 데이터와 분리하고 개인정보처리방침에서 별도로 다룬다.

## QA

Targeted Figma QA = PASS.

- dedicated screen 360 × 780 확인
- 안내 목록/복구 불가/재가입 안내 확인
- bottom CTA 확인
- final confirm이 프로필이 아니라 전용 탈퇴 화면 위에 표시되는 것 확인
- 08B 기본 프로필에는 regression 없음

## NEXT OPEN ITEM

Continue Group 08 with `자주 묻는 질문 → 문의하기 → 약관/개인정보/법률 표시`.

Google Play용 외부 계정 탈퇴 요청 URL은 legal/store follow-up에서 다룬다.
