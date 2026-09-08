# Figma Nav Header Balance Rule — 2026-09-08

**Status:** PO APPROVED / FIGMA APPLIED / VISUAL QA PASS
**Scope:** Canonical app navigation headers in Figma

## Decision

The shared app navigation header must keep the screen title on a stable center axis regardless of whether left or right actions are present.

Canonical header geometry:

- screen/header width: `360`
- header height: `56`
- horizontal outer padding: `20` each side
- left action slot: fixed `44 x 44`
- title area: fixed/fill result `232 x 24`
- right action slot: fixed `44 x 44`

The key rule is that an absent action removes only the icon/content, not the action slot itself.

Do not delete/collapse the left or right slot in an instance. Empty slots remain structurally present so the title never shifts horizontally.

## Existing icon preservation rule

Header balance work is structural only. Existing action artwork must not be redesigned or substituted.

For `LeftAction=Back`, reuse the existing Figma back icon artwork exactly as already used in the original header:

- node/layer name: `icon/arrow-left`
- artwork size: `24 x 24`
- placement inside the fixed `44 x 44` left slot: `x=10`, `y=10`

Do not redraw, replace, enlarge, or stylistically reinterpret the back icon when creating or migrating header variants. The same preservation rule applies to existing right-action icons unless a separate PO decision changes the icon itself.

## Variant model

A local `Nav Header` component set is maintained on `MVP_공용_UI`.

- component set node: `360:2361`
- `LeftAction`: `Back | None`
- `RightAction`: `None | Plus | Edit | Trash | Pause | More | Save | Play`
- text property: `Title`

This creates 16 explicit `LeftAction x RightAction` combinations.

## Why a local component was created

The previously used `Nav Header` definition was a remote/read-only library component. Some screens achieved a root-header state by manually removing the left back-action frame from an instance. Because the header uses Auto Layout, removing that frame widened the title area and shifted the title off the screen center axis.

The local component keeps the original visual language and original action artwork, while owning the structural balance rule inside this fitness-project file.

This is a scoped exception to the earlier design-system boundary that external component definitions were not rebuilt. The exception applies specifically to `Nav Header` because the remote component could not represent the approved balanced empty-action behavior safely.

## Screen usage

- root/top-level screen: `LeftAction=None`
- child/detail/create/edit screen with navigation back: `LeftAction=Back`
- an unavailable right action uses `RightAction=None`
- `None` never means removing the 44px slot

## Migration applied

Canonical split pages were migrated to the local header where `Nav Header` is used:

- `01 로그인 · 첫 진입`: 1 instance
- `02 홈`: 0 instances
- `03 루틴`: 8 instances
- `04 운동 목록 · 상세`: 9 instances
- `05 운동 중`: 13 instances
- `06 운동 완료`: 0 instances
- `07 분석 · 운동 기록`: 6 instances
- `08 설정 · 계정`: 5 instances

Total migrated: **42 instances**.

Existing title text and intended left/right action meaning were preserved during migration. Structural instance overrides that had removed the left slot were cleared by assigning the exact local variant.

## QA

PASS:

- all 16 local variants are `360 x 56`
- all 16 variants retain `44px` left and right slots
- title area resolves to `232px`
- all 8 `LeftAction=Back` variants reuse the original `icon/arrow-left` artwork at `24 x 24`, centered in the `44 x 44` slot
- representative root state (`Left=None / Right=Plus`) keeps title centered
- representative child state (`Left=Back / Right=None`) keeps title centered
- representative `03`, `04`, and `05` migrated headers render correctly after migration

No Cursor implementation handoff is part of this Figma-only decision.
