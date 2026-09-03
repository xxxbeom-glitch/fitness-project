# G Fit Exercise DB Gap Analysis v1

**Date:** 2026-09-03  
**Status:** RECOMMENDED — P0 ASSET PACK AWAITS PO REVIEW  
**Baseline:** `exercise-db-v1-production.md` — 195 app-facing canonical exercises / 206 purchased source rows

## Goal

경쟁 앱의 운동 개수를 그대로 따라가는 것이 아니라, 현재 Production DB v1에서 **국내 상용 헬스장 웨이트 기록 / 추천 루틴 / 대체 운동에 실제로 빠진 핵심 운동**만 찾는다.

비교 기준:

- Planfit 공식 운동 가이드 / 개별 운동 페이지
- Hevy authenticated built-in exercise template catalog
- 현재 G Fit 195 canonical exercise coverage
- 승인된 G Fit identity / equipment / grip 정책

## Conclusion

### Recommended P0 new asset pack: **16개**

1. 바벨 루마니안 데드리프트
2. 덤벨 루마니안 데드리프트
3. 바벨 힙 쓰러스트
4. 라잉 레그 컬 머신
5. 시티드 레그 컬 머신
6. 시티드 카프 레이즈 머신
7. 힙 어브덕션 머신
8. 힙 어덕션 머신
9. 스미스 머신 벤치프레스
10. 스미스 머신 스쿼트
11. 어시스트 풀업
12. 어시스트 딥스
13. 핵 스쿼트 머신
14. 플랭크
15. 크런치
16. 레그 레이즈

이 16개는 현재 DB의 195개 수량을 단순히 늘리기 위한 목록이 아니다. **기본적인 상용 헬스장 패턴이 비어 있거나, 초보 추천/대체에서 공백이 크거나, 같은 이름으로 기존 기록에 합치면 안 되는 장비/자세 차이가 큰 항목**을 우선했다.

## P0 data fix — 새 이미지 불필요

`machine-front-military-press`는 현재 구매 asset / source가 머신 오버헤드 프레스 계열을 이미 제공한다.

따라서 별도 숄더 프레스 이미지를 바로 새로 만들기 전에 사용자 검색명을 `숄더 프레스 머신`으로 찾을 수 있도록 **rename / alias 정리**를 우선 검토한다.

Planfit은 `숄더 프레스 머신`, Hevy는 `Seated Shoulder Press (Machine)`과 `Shoulder Press (Machine Plates)`를 별도 built-in 항목으로 제공한다. G Fit은 제조사/모델별 머신 목록을 만들지 않는다는 기존 정책을 유지하면서, 실제 asset 형태와 기록 비교 가능성을 보고 최종 display/alias를 정리한다.

## P1 — useful but not MVP-blocking

후속 확장 후보:

- 케이블 레터럴 레이즈
- 레터럴 레이즈 머신
- 리버스 펙덱 플라이
- 암 풀다운 / cable straight-arm pulldown
- 케이블 크런치
- 프론트 스쿼트
- 덤벨 아놀드 프레스
- 펜들레이 로우
- 덤벨 데드리프트
- 스미스 머신 루마니안 데드리프트
- 스미스 머신 바벨 로우
- 힙 쓰러스트 머신
- 스탠딩 카프 레이즈 머신
- 레그 프레스 카프 레이즈
- 스모 데드리프트
- 트랩바 데드리프트
- 싯업

이 항목들은 실제 운동으로서 타당하지만, G Fit MVP에는 이미 역할이 가까운 대체 운동이 있거나 장비 보급 편차가 있어 P0 16개보다 후순위로 둔다.

## Explicit no-add / no-new-asset examples

### Weighted pull-up / weighted dip

Planfit / Hevy 모두 별도 이름으로 제공하지만 동작 이미지는 기본 풀업 / 딥스와 같다. G Fit에서는 우선 **동일 exercise identity의 추가중량 기록 방식 문제**로 풀고 새 이미지를 복제하지 않는 것을 권장한다.

### Pause bench press

정지 템포 차이만으로 MVP 기본 검색 운동을 새 identity로 늘리지 않는다. 기본 벤치프레스 + 향후 workout note / prescription 기능이 더 적합하다.

### Lat pulldown grip variants

Planfit은 parallel / underhand / close-grip 등을 별도 이름으로 노출한다. G Fit은 이미 PO가 승인한 정책대로 **케이블 / 풀리 운동 안의 optional grip history**를 유지하며 기본 검색 목록을 변형명으로 확대하지 않는다.

## Why not copy the full competitor catalog

Hevy는 매우 넓은 built-in exercise catalog를 갖고 있고 Planfit 역시 웨이트 외 mobility / stretching / Pilates / cardio 및 많은 세부 변형을 포함한다.

G Fit의 목표는 catalog size 경쟁이 아니다. 핵심은:

1. 일반적인 웨이트 기록에서 사용자가 운동을 찾지 못하는 빈도를 낮추고
2. 추천 루틴이 접근성 높은 운동으로 구성될 수 있게 하며
3. 기록 비교가 틀려지는 과도한 merge를 피하고
4. 필요하면 Custom Exercise로 롱테일 장비를 처리하는 것이다.

따라서 P0는 16개로 제한하고, P1은 실제 사용 데이터가 쌓인 뒤 확장한다.

## Evidence notes

Planfit official pages/catalog에서 이번 패스에 직접 확인한 대표 gap:

- 루마니안 데드리프트 / 덤벨 루마니안 데드리프트
- 바벨 힙 쓰러스트
- 레그 컬 / 시티드 레그 컬
- 시티드 카프레이즈 머신
- 힙 어브덕션 머신 / 힙 어덕션 머신
- 스미스 머신 벤치 프레스
- 어시스트 풀 업 / 어시스트 딥스
- 핵 스쿼트 머신
- 플랭크 / 크런치 / 레그 레이즈
- 케이블 레터럴 레이즈 / 레터럴 레이즈 머신
- 리버스 펙덱 플라이
- 암 풀다운
- 케이블 크런치
- 프론트 스쿼트
- 펜들레이 로우
- 덤벨 데드리프트

Hevy built-in template catalog에서 이번 패스에 직접 확인한 대표 gap:

- Romanian Deadlift (Barbell / Dumbbell / Smith Machine)
- Hip Thrust (Barbell / Machine / Smith Machine)
- Lying / Seated Leg Curl (Machine)
- Seated / Standing Calf Raise
- Hip Abduction / Adduction (Machine)
- Bench Press / Squat (Smith Machine)
- Pull Up (Assisted)
- Chest Dip / Triceps Dip (Assisted)
- Hack Squat (Machine)
- Plank / Crunch / Lying Leg Raise
- Lateral Raise (Cable / Machine)
- Rear Delt Reverse Fly (Machine / Cable)
- Front Squat
- Arnold Press (Dumbbell)
- Pendlay Row (Barbell)
- Rope Straight Arm Pulldown

## Next

Product Owner가 P0 16개 방향을 승인하면:

1. 16개 canonical row spec 확정
2. 기존 구매 asset과 같은 시각 계열로 신규 poster 제작
3. source provenance와 분리된 G Fit-created asset으로 관리
4. image QA + body/equipment/name QA
5. Production Exercise DB v1.x에 추가

추가 제작 전에 구매 에셋을 AI reference로 사용하는 범위의 modification / derivative / AI license 확인은 별도 gate로 남긴다.
