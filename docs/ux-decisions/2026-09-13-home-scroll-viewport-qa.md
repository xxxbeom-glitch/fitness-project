# Home Scroll Viewport — Figma QA Checkpoint

**Date:** 2026-09-13  
**Status:** FIGMA STRUCTURE FIX / QA PASS / NO CURSOR HANDOFF

## Scope

Canonical Home primary states:
- `02A_Home_NoRoutine` — `34:1194`
- `02B_Home_RoutineSelected` — `34:1228`
- `02D_Home_Active` — `34:1310`

## Fix

The 360×780 screen frame remains a fixed viewport and is not converted to top-level Auto Layout.

`HomeScrollContent` is the vertical scrolling viewport below the fixed header:
- x = `0`
- y = `130`
- width = `360`
- height = `650` (`780 - 130`)
- Auto Layout = Vertical
- overflow = Vertical scrolling
- clips content = true
- horizontal padding = `spacing/20`
- vertical padding = `spacing/32`
- section gap = `spacing/32`

This replaces the previous HomeScrollContent heights (`662` for 02A/02B, `680` for 02D) that extended past the 780px screen frame and made the bottom content appear clipped by the screen boundary.

## Layout rule

Home screen structure:
1. fixed 360×780 screen viewport
2. fixed status/header area
3. fixed-height vertical scrolling `HomeScrollContent`
4. section wrappers use Vertical Auto Layout
5. cards/rows use their own component-level Auto Layout

Do not make the top-level screen frame Hug-height merely to expose all content on the Figma canvas. Content exceeding the viewport is handled by the scrolling content frame.

## QA

- 02A / 02B / 02D `HomeScrollContent` read-back: `360×650`, Vertical Auto Layout, Vertical overflow, clipping enabled
- existing `spacing/20`, `spacing/32`, section structure and shared components preserved
- 02D visual read-back shows the final recent-workout card itself fully inside the 780px viewport; remaining bottom padding is available via vertical scroll
- no card, divider, header, or component regression observed

**NO CURSOR IMPLEMENTATION HANDOFF.**
