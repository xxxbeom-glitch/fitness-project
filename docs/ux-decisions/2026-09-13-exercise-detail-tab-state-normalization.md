# 2026-09-13 Exercise detail tab-state normalization

Status: FIGMA APPLIED / VISUAL QA PASS / NO CURSOR HANDOFF

## Figma
File: `W3lZurXCXbThP67rF2xk2b`
Page: `04 운동 목록 · 상세`

The exercise detail is represented as one screen with tab states, so the top-level frame numbering/name was normalized under `04D`.

- `40:2325` -> `04D_운동상세_운동정보`
- `34:1714` -> `04D_운동상세_최근기록`
- `1000:1519` -> `04D_운동상세_성장`
- comparison artifact `1011:612` -> `04D_운동상세_성장_PeriodInside_비교안`

## Tab binding
`04D_운동상세_운동정보` previously still used the old 2-tab variant.
It is now bound to the shared `fixed-tab-bar` 3-tab variant:

- instance `191:2038`
- main `997:658` `Type=3탭, Active=운동 정보, State=Default`
- size 360x54

The other tab-state screens remain on their corresponding 3-tab variants:
- 최근 기록 -> `Type=3탭, Active=최근 기록`
- 성장 -> `Type=3탭, Active=성장`

## QA
Screenshot QA on `04D_운동상세_운동정보` PASS:
- 3 tabs visible: `운동 정보 / 최근 기록 / 성장`
- `운동 정보` active state correct
- existing exercise-detail content unchanged
- no clipping/collision observed

This is Figma structure/naming cleanup only. No Cursor implementation handoff.