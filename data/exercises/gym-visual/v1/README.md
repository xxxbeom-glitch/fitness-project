# Gym Visual Exercise Catalog — Auto Normalization v1

**Date:** 2026-09-20  
**Status:** AUTO-GENERATED WORKING DATA · NOT PRODUCTION-LOCKED

## 결과
- source media pairs: **7,197**
- conservative exercise candidate groups: **5,854**
- exact normalized male/female 1:1 groups: **1,108**
- exact normalized multi-variant groups: **76**
- male-only groups: **2,911**
- female-only groups: **1,759**
- version/name duplicate review groups: **117**

## 파일
- `gym_visual_exercise_candidates_v1.csv`: 운동 identity 후보.
- `gym_visual_duplicate_review_groups_v1.csv`: VERSION/이름 차이 때문에 같은 운동일 수 있는 검토 묶음.
- `summary.json`: 자동 정리 결과 요약.

## 자동 처리
- `(male)/(female)`, `FIX`, POV/view 같은 기술 표기 분리
- 파일명 끝 Gym Visual 부위/카테고리 태그 분리
- 남/녀 이름이 동일해진 후보 묶기
- 파일명에 명시된 장비 후보 분류
- 근거가 충분한 범위에서만 대분류/recording type 후보 생성
- `VERSION-*`은 자동 병합하지 않고 review group으로 유지

## 아직 확정하지 않은 값
파일명만으로 근거가 부족한 값은 비워 둔다.
- `name_ko`
- 세부 주요/보조 근육
- movement/posture
- 최종 duplicate merge
- 최종 남/녀 기본 미디어 선택
- 최종 Cloudflare video key / 인앱 WebP path

Stretching / Plyometrics / Cardio / Pilates도 자동 삭제하지 않고 review 대상으로 유지한다.

## Public repo boundary
이 repository는 public이므로 구매 에셋 전체 원본 파일명/path raw map은 이번 커밋에 넣지 않는다.
현재 GitHub에는 앱용 파생 운동 후보 데이터만 둔다.

## 다음
duplicate/version QA → cross-gender near-match QA → 한국어명/semantic metadata QA → default media 선택 → Cloudflare MP4 + 인앱 WebP manifest.
