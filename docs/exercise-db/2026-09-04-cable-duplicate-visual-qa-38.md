# Cable Duplicate Visual QA — 38 Files / 18 Candidate Groups

**Date:** 2026-09-04  
**Status:** COMPLETE / CABLE NORMALIZATION MAP v0.2 DERIVED  
**Scope:** Duplicate-candidate subset from `MP4/MALE/Library_database` Cable manifest

## Purpose

Cable normalization map v0.1에서 filename cleanup으로 잡힌 **18개 duplicate candidate groups / 38 files**를 실제 영상 기준으로 재검수해 `true duplicate / attachment variant / execution variant / source-media exception`을 확정한다.

구매 원본 filename/path/media는 read-only provenance로 유지하며 수정하지 않는다.

## Review method

- 38개 영상의 SHA256을 확인했다.
- **binary-identical SHA256 duplicate는 0개**였다.
- 각 영상은 timeline 전 구간에서 대표 frame을 추출해 같은 candidate group끼리 시각 비교했다.
- duplicate 판정은 binary identity가 아니라 **G Fit app-facing 수행이 사실상 동일한지**를 기준으로 한다.

## Group-level result

- candidate groups reviewed: **18 / 18**
- files reviewed: **38 / 38**
- **true app-facing duplicate groups: 14**
- **execution-variant groups: 2**
- **attachment-variant groups: 1**
- **mixed source-media exception group: 1**

Row-level result within the 38-file subset:

- `DUPLICATE_CONFIRMED`: **30 rows**
- `EXECUTION_VARIANT`: **4 rows**
- `ATTACHMENT_VARIANT`: **3 rows**
- `SOURCE_MEDIA_EXCEPTION`: **1 row**

## 18 group decisions

| Group | Files | Result | Normalization decision |
|---|---:|---|---|
| cable decline fly | 2 | TRUE DUPLICATE | Same decline cable fly identity/history; media render/camera difference only |
| cable forearm pronation | 2 | TRUE DUPLICATE | Same cable forearm pronation identity/history |
| cable kneeling crunch | 2 | TRUE DUPLICATE | Same kneeling cable crunch identity/history; small posture/render difference not history-defining |
| cable kneeling triceps extension | 2 | EXECUTION VARIANT | `kneeling_overhead` vs `prone_bench`; do not merge performance history |
| cable low chest press | 2 | TRUE DUPLICATE | Same low cable chest press identity/history |
| cable low seated row | 2 | TRUE DUPLICATE | Same low seated cable row identity/history |
| cable middle fly | 2 | TRUE DUPLICATE | Same middle cable fly identity/history |
| cable neutral grip wide pulldown | 3 | ATTACHMENT VARIANT | Same neutral-grip wide pulldown parent, but visibly different attachment forms; preserve attachment-specific media/context |
| cable one arm curl | 2 | TRUE DUPLICATE | Same cable one-arm curl identity/history |
| cable one arm front raise | 3 | MIXED SOURCE EXCEPTION | Two files are same cable one-arm front raise; one file is visually a two-dumbbell squat-to-overhead-press/thruster-like movement and must be excluded from Cable identity until reclassified |
| cable one arm lat pulldown | 2 | TRUE DUPLICATE | Same seated one-arm lat pulldown identity/history |
| cable one arm lateral raise | 2 | TRUE DUPLICATE | Same cable one-arm lateral raise identity/history |
| cable seated chest press | 2 | TRUE DUPLICATE + MEDIA EXCEPTION | Same seated cable chest press identity/history; female-model file remains a Male-catalog media exception |
| cable side bend | 2 | TRUE DUPLICATE | Same cable side bend identity/history; free-hand placement/render difference is not history-defining |
| cable standing jab | 2 | TRUE DUPLICATE | Same standing cable jab identity/history |
| cable standing single delt row | 2 | TRUE DUPLICATE | Same standing single-delt/rear-delt row identity/history |
| cable straight arm pulldown | 2 | EXECUTION VARIANT | `bent_over` vs `standing_upright_slight_lean`; preserve separate execution history |
| cable upright row | 2 | TRUE DUPLICATE | Same cable upright row identity/history |

## Important exceptions

### 1. `Cable One Arm Front Raise.mp4` is not a cable front raise

Visual review shows a **two-dumbbell squat-to-overhead-press / thruster-like movement**.

Handling:

- raw filename remains unchanged
- classify as `SOURCE_MEDIA_EXCEPTION`
- media exception: `NON_CABLE_MEDIA_MISLABEL`
- exclude from Cable canonical mapping
- exact non-Cable normalized name remains candidate-level until the Dumbbell/non-Cable pass

The other two files in that candidate group remain the same cable one-arm front raise identity.

### 2. Female-model media inside Male catalog

Two reviewed files visibly use a female model while present in the Male source catalog:

- `Cable One Arm Front Raise .mp4`
- `Cable-Seated-Chest-Press-(female)_Chest_.mp4`

These are media-selection exceptions, not separate exercise identities.

### 3. Neutral wide pulldown group is not a duplicate group

All three files show the same broad neutral-grip wide pulldown movement, but the attachment form is visibly different.

Handling:

`same canonical parent + attachment-specific context/media`

Do not collapse the three assets as redundant duplicates.

### 4. Two execution-variant groups must keep separate performance history

`Cable Kneeling Triceps Extension`:

- kneeling overhead execution
- prone-bench execution

`Cable Straight Arm Pulldown`:

- bent-over execution
- upright/slight-lean standing execution

Under Cable normalization rule v1, these posture/execution differences are large enough that performance history should not be silently merged.

## v0.2 mapping effect

Cable normalization map v0.2 applies the 38-file visual QA result on top of v0.1:

- all 18 duplicate candidates are resolved
- no duplicate candidate group remains unresolved
- attachment/execution/media exceptions are preserved as explicit derived fields
- raw provenance remains unchanged

The v0.2 working map still represents a **derived normalization candidate**, not a final full-app canonical DB.

## Next

1. treat Cable duplicate QA as complete
2. preserve v0.2 Cable map as the reference for Cable identity/variant rules
3. expand the same normalization framework to the remaining equipment families in `Library_database`
4. compare normalized source candidates with Production Exercise DB v1
5. recalculate final G Fit canonical candidates / true gaps
6. only after canonical mapping stabilizes, decide app-serving media selection/transform

No Cursor implementation handoff is implied.
