# Group 07 Analysis / Workout History — Figma Exploration

**Date:** 2026-09-12  
**Status:** REVIEW DRAFT · NOT PO APPROVED  
**Scope:** `07 분석 · 운동 기록` 페이지를 사용자 질문 중심으로 다시 구성한 Figma exploration

## Context

Group 06 운동 완료는 Product Owner가 닫고 Group 07로 이동하기로 했다.

기존 Group 07 IA는 유지한다.

1. 분석 홈
2. 부위별 분석
3. 운동별 성장
4. 운동 기록
5. 운동 기록 상세

이번 작업은 위 IA를 변경하는 결정이 아니라, 사용자가 실제로 분석 화면에서 확인하려는 질문을 기준으로 화면 정보량과 구조를 다시 시각화한 review draft다.

사용자 질문 기준:

- 요즘 운동을 꾸준히 하고 있나?
- 어디를 많이 / 적게 운동했나?
- 실제 기록이 좋아지고 있나?
- 지난 운동에서 무엇을 했나?

## Figma

File: `W3lZurXCXbThP67rF2xk2b`  
Page: `07 분석 · 운동 기록` — `233:2078`

새 exploration frames:

- `07A_분석홈_Exploration` — `836:1112`
- `07B_부위별분석_Exploration` — `836:1265`
- `07C_운동별성장_Exploration` — `836:1383`
- `07D_운동기록_Exploration` — `836:1490`
- `07E_운동기록상세_Exploration` — `836:1593`

기존 Group 07 draft frames 6개는 Product Owner 요청에 따라 삭제했다.

- old 07A 분석 홈
- old 07B 부위별 분석
- old 07C 운동별 성장
- old 07D 운동 기록
- old 07E 운동 기록 상세
- old 07F 분석 빈 상태

## Exploration structure

### 07A 분석 홈

한 화면에서 다음 질문에 빠르게 답하는 summary/navigation surface로 구성했다.

- 기간: 4주 / 3개월 / 6개월 / 1년
- 운동 횟수 / 완료 세트 / 운동 시간
- 최근 4주 운동 흐름
- 앞/뒤 body map + 상위 부위 분포
- 최근 기록 변화 운동
- 최근 운동 기록

### 07B 부위별 분석

- 기간 선택
- 큰 front/back body map
- 부위별 분포
- 선택 부위를 inline 확장하여 해당 부위에 기여한 운동을 노출

기존 승인된 `primary completed set 1.0 / secondary 0.5` 계산 기준은 변경하지 않는다.

### 07C 운동별 성장

- 운동 identity
- 기간 선택
- 최근 비교 가능한 기록 변화 요약
- 기록 추이 visualization
- 대표 최고 기록 요약
- 해당 운동의 최근 수행 기록

정확한 recording-type별 graph metric / PR formula는 아직 lock하지 않는다.

### 07D 운동 기록

- 월 단위 요약
- 날짜순 workout-session history
- 부분 저장 기록은 lightweight 상태로 구분
- 각 row에서 운동 기록 상세로 진입

### 07E 운동 기록 상세

- 세션명 / 날짜
- 총 볼륨 / 운동 시간 / 운동 수 / 완료 세트
- 유효한 PR highlight
- 실제 persisted 운동과 completed set 값
- `weight_reps`와 `reps` 등 recording type에 맞는 표기

## Design-system reuse

새 평행 디자인 시스템은 만들지 않았다.

재사용:

- local Fitness Colors / Spacing / Radius variables
- SUIT local text styles
- `Nav Header`
- `Bottom App Bar` / `Active=분석`
- existing body-map front/back assets
- existing workout row / chevron patterns where applicable

## QA status

Focused screenshot review:

- 07A: content hierarchy readable; one long-scroll exploration screen
- 07B: body-map + inline contributing-exercise explanation readable
- 07C: structure readable; chart visual is exploration only and not locked
- 07D: chronological session history readable
- 07E: recording-type-specific persisted-set presentation readable

This is **not** a final design PASS. It is a PO feedback artifact.

## NEXT OPEN ITEM

Product Owner reviews the five exploration screens and decides what to keep/change/remove, starting from `07A 분석 홈`.

Do not lock new Analysis metrics or graph formulas solely because they appear in this exploration.

**NO CURSOR IMPLEMENTATION HANDOFF.**
