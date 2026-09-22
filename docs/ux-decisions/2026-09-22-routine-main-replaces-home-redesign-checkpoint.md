# Routine Main replaces Home — redesign checkpoint

**Date:** 2026-09-22  
**Status:** ACTIVE DESIGN CHECKPOINT · PO DECISION RECORDED · IDEATION FIGMA IN PROGRESS · NOT YET PROMOTED TO CANONICAL MVP SCREEN SET  
**Mode:** DESIGN / FIGMA  
**Development:** PAUSED · DEV-002 MUST NOT EXECUTE

## 1. Decision summary

Product Owner approved a major IA change during the reopened design revision:

- the standalone Home screen is removed as the app's primary/default destination
- the app's default/main entry becomes **Routine**
- this removes the need for a thin Home gateway that mostly duplicated workout/routine entry actions
- existing historical Group 02 Home decisions remain reference/history only and must not be implemented as the current destination while this redesign is active
- the existing DEV-001 scaffold remains accepted; this IA/design change does not authorize development

This is a **major user-facing UX meaning change** and supersedes the prior assumption that Group 02 Home is the default app landing experience.

## 2. Reference direction

The current redesign uses external products as reference only:

- **Jomo / Rules**: card rhythm, soft surface treatment, collapsible section/folder presentation, compact outlined status chip, restrained gray hierarchy
- **Hevy**: routines organized into multiple folders/groups

Rules:

- references are not copied wholesale
- Tampin behavior/policy remains authoritative
- current Tampin design-system assets are reused where appropriate
- Jomo-like color/radius/shadow treatment below is currently **local to the ideation screen**, not a global token/system change

## 3. Active Figma surface

File:
- `W3lZurXCXbThP67rF2xk2b`

Ideation page:
- `ideation` — `2156:8989`

Active redesign screen:
- `IDEA_Routine_Main_Jomo_01` — `2168:7614`

Figma URL:
- https://www.figma.com/design/W3lZurXCXbThP67rF2xk2b/LIFTLY_%EC%B5%9C%EC%A2%85?node-id=2168-7614

Important:
- this screen is still an **ideation/redesign surface**
- it has **not yet replaced/promoted the canonical Group 02/03 screens on `MVP_전체_와이어프레임`**
- therefore the canonical independent-screen count remains **96** until promotion/remapping is explicitly performed and QA-closed

## 4. Current top-level structure

Latest Figma read-back:

- screen: `360 × 1123`
- content frame: `RoutineMain_Content`
  - x = 20
  - y = 52
  - width = 320
  - height = 704
  - vertical item spacing = 32
  - Clip content = OFF
- screen/root clipping remains the outer viewport boundary

Current content order:
1. screen Header
2. quick actions
3. expanded `PPL Routine` group
4. collapsed `3분할 루틴` group header

## 5. Quick actions — current PO-adjusted state

There is **no “바로 시작” section header**.

The previous collapsible/static “바로 시작” header was removed entirely by PO direction.

Current actions:
- `루틴 없이 시작`
- `새 루틴 만들기`

### Shared visual treatment

Both cards currently read back as:

- width: `320`
- height: `72`
- horizontal padding: `20`
- vertical padding: `14`
- radius: `20`
- Fill: none / transparent
- stroke: `1px #BBC0C9`
- dash pattern: `6 / 6`
- shadow: none
- section gap between the two cards: `12`

Title:
- SUIT Bold
- `16px`
- line-height `24px`
- `#09090A`
- single-line only
- no subtext

Right action:
- `36 × 36` circular button
- Fill `#E6EAF1`
- no stroke
- plus icon `16 × 16`
- Jomo-like gray plus treatment

### Meaning

`루틴 없이 시작`
- starts workout recording without selecting a saved routine
- reuses the existing blank-workout meaning; it does not automatically save/create a routine

`새 루틴 만들기`
- enters the routine-creation flow

Removed from this area:
- “Pull Day / 최근 기록” repeat/recent shortcut
- any recent-workout replay behavior that was not previously approved

The removed recent shortcut must not be treated as an approved MVP feature.

## 6. Routine folder/group direction

PO approved using a folder/group presentation for saved routines, inspired by Hevy's routine-folder organization.

Current visible groups:
- `PPL Routine` — expanded
- `3분할 루틴` — collapsed header only in the current ideation state

Current group-header visual read-back:
- width `320`
- height `26`
- SUIT Bold `14px`
- line-height `26px`
- gray text `#979DA9`
- chevron `16 × 16`
- chevron positioned on the **left** of the title
- horizontal spacing = `8`

The current folder-header typography/placement is a **PO manual override** and is authoritative for this ideation screen.

Open:
- exact user-facing folder management semantics (create / rename / delete / reorder / limits) are **not yet locked**
- do not infer full Hevy behavior merely from the visual grouping direction

## 7. Routine card — current compact information hierarchy

Current sample cards:
- `Push Day`
- `Pull Day`
- `Leg Day`

Current card read-back:
- width `320`
- height `108`
- padding `16`
- internal vertical spacing `10`
- radius `20`
- Fill `#FFFFFF`
- no outer stroke
- shadow:
  - x = `0`
  - y = `2`
  - blur/radius = `8`
  - black alpha ≈ `0.07`

Card information:
- routine icon slot / placeholder
- routine name
- estimated-time chip
- right chevron
- target muscle chips

Removed from routine cards:
- `n개 운동`
- exercise-name preview row
- `외 n개` text
- large bottom-right estimated-time text

### Routine title

- SUIT Bold
- `16px`
- line-height `24px`

### Estimated-time chip

Current examples:
- `45분`
- `50분`

Current read-back:
- approx. `38 × 20`
- Fill: none
- stroke: `1px #F2D3BC`
- radius: full pill
- horizontal padding `6`
- vertical padding `2`
- text: SUIT Bold `11px`
- line-height `14px`
- text color `#F05A1F`

This uses the Jomo-like **outline-only status-chip** hierarchy.

### Routine card chevron

- outer slot: `16 × 16`
- internal icon: `12 × 12`
- centered at x = 2 / y = 2 within the slot
- slot size is preserved while only the visual icon is smaller

### Muscle chips

- muscle chips remain on the second row
- exercise-count text is removed
- current samples include pairs such as chest/shoulder, back/biceps, lower-body/core

## 8. Routine icon direction

PO wants a reusable routine-icon set/slot.

Current status:
- the routine card reserves the icon position
- no final icon library/policy is locked yet

Future policy to decide:
- user selects an icon when creating/editing a routine, and/or
- Tampin assigns an automatic default icon based on routine contents/type

Do not finalize this behavior without a later PO decision.

## 9. Card shadow clipping fix

During the redesign, card shadows were visibly cut by parent containers.

Confirmed fix:
- internal content/folder containers that hold shadowed cards use `Clip content = OFF`
- the outer screen/root still owns the viewport clipping boundary

Do not re-enable clipping on those internal containers if it reintroduces cut shadows.

## 10. PO manual override rule for this redesign

The Product Owner manually changed several values directly in Figma after assistant edits.

Latest canvas read-back is authoritative.

Confirmed PO-adjusted values include:
- quick-action card height = `72` (not the assistant's previous 88/96 experiments)
- quick-action vertical padding = `14`
- folder header = SUIT Bold `14px`, line-height `26px`, gray `#979DA9`
- folder chevron is on the left of the title
- added `3분할 루틴` collapsed header

Rule:
- do not revert these values to prior assistant-created numbers unless PO explicitly requests a change
- when future values differ from prior assistant history, current Figma canvas + latest PO instruction wins

## 11. Existing behavior direction retained

Routine-card selection direction from this redesign thread:
- tap a routine card → open a concise routine preview/detail
- from preview/detail → start workout
- Edit remains visually secondary rather than the dominant action

This direction is compatible with the existing routine behavior but must be validated when the redesign is promoted to canonical screens.

## 11A. Routine preview/detail ideation — current state

PO approved continuing the Routine-first redesign into a concise routine preview/detail variation.

Active ideation screen:
- `IDEA_Routine_Detail_Jomo_01` — `2229:7652`
- same Figma file / `ideation` working surface
- ideation only; **not promoted to canonical Group 03**

Reference interpretation:
- the PO's `image 7` annotation is a **layout/composition reference**, not merely a content reference
- the intended direction is an image-led landing/detail composition:
  1. image/hero-dominant upper area
  2. concise routine identity/summary
  3. minimal lower-detail content
  4. strong primary `운동 시작` CTA
- Edit remains secondary

### Current design-system alignment

Header:
- canonical shared component reused: `LeftAction=Back, RightAction=Edit` — `360:2215`
- no custom back/edit controls
- existing 44 × 44 action hit areas and 24px edit icon are preserved
- header title = `루틴 상세`

Color mode:
- root `Colors` collection is explicitly set to existing `Light` mode

Hero:
- begins directly below the 56px shared header
- current hero frame = `360 × 300`
- `Push Day` remains the dominant title within the hero
- current hero bitmap is a **temporary zoomed crop of the image-7 reference used only to validate layout/composition**
- this temporary crop is **not an approved/final Tampin image asset** and must be replaced when the final hero-image source/policy is decided

Lower content:
- existing `Routine Summary` component — `637:3524`
  - 예상 시간 = `45분`
  - 운동 = `4개`
  - 세트 = `12세트`
- existing muscle `Tag` components reused for target areas
- existing `Compact Button / Type=Secondary, State=Default` — `636:828` reused for `전체 구성 보기`
- existing primary CTA — `635:794` reused for `운동 시작`

Typography:
- lower section headings bind to existing `heading/02` = SUIT Bold 14/20
- preview/body copy binds to existing `body/01` = SUIT Medium 14/20
- no new local text style was created for this lower-content structure

Spacing:
- horizontal content inset = `20`
- lower section gap binds to existing `spacing/24`
- heading → content gap binds to existing `spacing/8`
- preview text → secondary button gap binds to existing `spacing/16`
- muscle-tag gap binds to existing `spacing/6`

Read-back:
- shared Header / Routine Summary / Tag / Compact Button / Primary CTA links were read back
- text-style IDs and spacing-variable bindings were read back after the latest refinement
- no canonical screen, behavior matrix, screen inventory, or Development contract was changed

## 12. Superseded / historical items

The following are no longer current for the redesigned main entry:

- standalone Home as the default app entry
- Home “빠른 시작” section hierarchy
- Home recent-workout shortcut
- prior Home-first landing assumption

Historical Group 02 Home records remain useful as provenance for behavior/components, but they are **superseded for current IA** by this checkpoint.

## 13. Canonical promotion impact — not done yet

Before this redesign can be design-closed, the affected canonical contract still needs to be reconciled.

Expected affected areas:
- default post-onboarding/app-launch destination
- BottomAppBar / primary IA mapping if Home was a nav destination
- Group 02 Home screens and their status
- Group 03 Routine list/main mapping
- screen numbering/naming/inventory if screens are removed/reassigned
- behavior matrix / implementation handoff references
- active-workout resume entry placement if it depended on Home
- navigation/back/deep-link behavior affected by Home removal

Do **not** blindly delete historical screens or change implementation contracts before this reconciliation.

## 14. QA status

PASS / verified for the current ideation work:
- requested local visual edits were read back from Figma
- card shadow clipping issue fixed on internal containers
- current quick-action values read back after PO manual edits
- current folder-header values read back after PO manual edits
- current routine-card hierarchy read back

NOT VERIFIED / not yet done:
- canonical MVP promotion
- full affected IA/navigation mapping
- behavior-matrix update
- canonical screen-count change
- affected cross-screen Figma QA after promotion
- implementation handoff update
- runtime/device behavior

## 15. NEXT OPEN ITEM

Continue from the current Figma canvas, **without resetting PO-adjusted values**.

Next design work:
1. review/refine the current Routine main + detail ideation pair:
   - `IDEA_Routine_Main_Jomo_01` — `2168:7614`
   - `IDEA_Routine_Detail_Jomo_01` — `2229:7652`
2. replace the temporary image-7 hero crop only when the final hero-image source/policy is decided
3. decide only the still-open routine-folder management semantics and routine-icon policy when needed
4. reconcile Home removal with canonical IA/navigation/screen inventory
5. promote the approved redesign into `MVP_전체_와이어프레임`
6. re-run only affected Design/Figma QA
7. update implementation handoff only after the redesigned contract is closed

Development remains paused until PO explicitly resumes it.
