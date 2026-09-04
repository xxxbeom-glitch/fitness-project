# Exercise DB Normalization — Resume Checkpoint

**Date:** 2026-09-05  
**Status:** HANDOFF CHECKPOINT / RESUME FROM SMITH + LANDMINE FINAL QA

## Why this checkpoint exists

새 채팅에서 현재 위치를 다시 묻지 않고 바로 이어가기 위한 handoff 문서다.

Source of Truth 우선순위는 계속 `docs/CURRENT.md`이며, 이 문서는 현재 Exercise DB normalization 작업의 압축 checkpoint다.

---

## Raw source / storage

Purchased source:

- Gym Animations — `Gym Workout Man Package`

Raw source:

- total files: **17,085**
- total size: **98.69 GB**
- Male analysis base: `MP4/MALE/Library_database`
- analysis-base MP4 count: **2,109**

Cloudflare R2 raw upload:

- bucket: `gfit-source-original`
- remote objects: **17,085**
- remote size: **98.694 GiB**
- exact: **105,972,019,458 Byte**
- status: **VERIFIED / DONE**

Raw filename/path/media는 read-only provenance로 유지하며 rename/delete/overwrite하지 않는다.

---

## Completed normalization / visual QA

### Cable — COMPLETE

- `Cable*` raw: 297
- cable-associated extra: 1
- working manifest: 298 rows
- ambiguous direct visual QA: 14 complete
- duplicate candidates: 18 groups / 38 files complete
- result includes canonical / attachment / grip / execution / duplicate / media-exception boundaries
- reference artifact: `cable_normalization_map_v0_2.csv`

Key rule:

- same movement + attachment only → same canonical + attachment context/media
- grip-only difference → same family + grip context
- posture/laterality/path materially different → execution variant, history auto-merge 금지
- vendor filename보다 실제 visual movement를 우선

### Machine — COMPLETE

- 33 files direct visual QA complete
- duplicate candidates: 25 files / 12 groups
- ambiguous machine/non-machine: 8
- result:
  - same canonical + media/machine-design variant: 10 groups
  - grip variant: 1 — Lever High Row
  - execution variant: 1 — Lever Triceps Extension
  - ambiguous machine confirmed: 5
  - ambiguous non-machine confirmed: 3
- current Machine source-scope candidate: **207 raw rows**
- unresolved: 0

### Barbell — COMPLETE

- 8 groups / 18 files direct visual QA complete
- same canonical + media/POV/load/render/timing: 7 groups
- execution variant: 1 — Barbell Rear Lunge (`front_foot_elevated` vs `floor`)
- unresolved: 0

### Dumbbell — COMPLETE

- 9 groups / 20 files direct visual QA complete
- same canonical + media/render/POV/bench: 8 groups
- load-position / execution variant: 1 — Dumbbell Hyperextension (`hanging_load` vs `chest_close_load`)
- unresolved: 0

### Kettlebell — COMPLETE

- 6 groups / 12 files direct visual QA complete
- same canonical + render/POV/timing: 3 groups
- load-position / implement-count variant: 2 groups
  - Forward Lunge — single goblet/front hold vs two kettlebells at sides
  - Sumo Squat — low-hang vs goblet/high-front hold
- naming / movement mismatch: 1 group
  - `Kettlebell-Good-Morning-(male)` → true good morning
  - `Kettlebell-Good-Morning_Hips_` → visually closer to kettlebell deadlift/RDL family candidate
- unresolved: 0

---

## Full 2,109 equipment pass baseline

Filename/path/size first-pass counts:

- Machine high-confidence: 202
- Barbell: 212
- Dumbbell: 493
- Kettlebell: 188
- Smith: 61
- Landmine: 33
- EZ Bar: 35
- Machine-or-nonmachine ambiguous: 8
- Other / not-yet-normalized: 579

Remaining duplicate candidates after completed families:

- **Smith: 1 group / 2 files**
- **Landmine: 4 groups / 8 files**

---

## Immediate next — DO THIS FIRST

**Smith + Landmine final targeted visual QA — 10 files total**

Reason:

- Smith 2 + Landmine 8을 한 ZIP으로 묶어 사용자 반복 작업을 줄이기로 했다.
- assistant-side extraction script artifact was prepared as `Smith_Landmine_Final_Review_10.ps1`.
- user has not yet uploaded the final `Smith_Landmine_Final_Review_10.zip` at this checkpoint.

When the ZIP arrives:

1. verify 10 files present
2. SHA256 / timeline-frame visual comparison
3. resolve Smith 1 duplicate group
4. resolve Landmine 4 duplicate groups
5. classify same canonical vs execution/load/grip/media variant
6. update GitHub result doc + `CURRENT.md`

이 단계가 끝나면 **기본적인 ZIP 기반 duplicate visual-QA 반복은 종료**한다. 단, 이후 DB mapping에서 filename/visual 충돌이 새로 발견되면 소량 targeted QA가 추가될 수 있다.

---

## After final Smith + Landmine QA

다음 메인 단계:

1. 전체 normalized source 정리
2. 기존 Production Exercise DB v1과 mapping
3. source variant를 app-facing canonical exercise / attachment / grip / execution context로 흡수
4. 실제 중복 제거 후 최종 G Fit canonical 후보 수 계산
5. 기존 DB에 없는 **실제 gap 운동 수** 재산출
6. gap 중 G Fit gym-first MVP에서 필요한 운동 우선순위 결정
7. canonical mapping 안정화 후 production media selection / transform / app-serving storage 결정

아직 Cursor 구현 handoff 단계가 아니다.

---

## Product/UX parallel context to preserve

Exercise DB normalization과 별개로 Product/UX OPEN은 유지한다.

- 추천 루틴 실제 프로그램 contents — Exercise DB/substitution data 선행 필요
- Analysis first screen / drilldown scope
- Settings main scope
- rest timer 종료 signal 세부 동작

최근 Analysis 논의에서는 아래 방향을 검토했지만 별도 승인 문서로 확정하지 않았다.

- 기간 선택
- 운동 요약
- 운동 빈도
- 구매한 인체 visual 스타일을 활용한 front/back body-map 기반 운동 부위 분포

Exercise Detail scope 등 기존 PO-approved UX는 `CURRENT.md` 기준으로 보존하고 다시 열지 않는다.

---

## Resume instruction for next chat

새 채팅에서 사용자가 `이어가자`, `다음`, `깃헙 확인하고 진행해`처럼 말하면:

1. `docs/CURRENT.md` 확인
2. 이 checkpoint 확인
3. Smith + Landmine final ZIP이 현재 대화에 있으면 즉시 visual QA
4. 없으면 `Smith_Landmine_Final_Review_10.zip`만 요청
5. 이미 완료된 Cable / Machine / Barbell / Dumbbell / Kettlebell 내용을 재논의하지 않는다.

No Cursor implementation handoff.