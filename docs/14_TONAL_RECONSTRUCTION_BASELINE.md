# 14 TONAL RECONSTRUCTION BASELINE

**Status:** ACTIVE AUDIT — PROVISIONAL
**Updated:** 2026-08-28

## Purpose

Reconstruct a practical Tonal-like visual design system from the Tonal screens accessible through Mobbin, then use that system as the Phase-A visual baseline for Fitness before Fitness-specific customization.

This document is evidence-oriented. It records repeated visible patterns and later provisional token estimates. It does **not** claim access to Tonal's official internal design tokens.

## Audit method

1. Search Tonal by screen family rather than using only one attractive flow.
2. Deduplicate repeated screens.
3. Compare patterns that recur across onboarding, dashboard, program/workout, exercise/detail, profile/settings, charts/history, and navigation.
4. Infer provisional tokens only after repeated evidence.
5. Mark every item as one of:
   - **OBSERVED** — directly visible across screenshot evidence
   - **INFERRED** — consistent relationship inferred from several screenshots
   - **ESTIMATED TOKEN** — implementation value chosen to reproduce the visible relationship
6. Build the Fitness Figma component library from this reconstructed baseline.
7. Perform Fitness-specific customization only after the baseline is coherent.

## Current Mobbin evidence families

### Onboarding / profile setup
Representative evidence:
- https://mobbin.com/screens/a0bb4e2e-0082-4b57-b943-0600d062256d
- https://mobbin.com/screens/6ef5e1ef-5078-4260-9d07-5e2b7d502cf1
- https://mobbin.com/screens/6f0a7139-a0f8-4b46-abbc-f9448634e56f
- https://mobbin.com/screens/24db49c3-fb68-4ca6-955b-07d29192e6f5
- https://mobbin.com/screens/295f67ac-33bd-42ed-ba2c-17fd52a7e677

Repeated patterns observed:
- centered or strongly centered question hierarchy
- top progress line on multi-step setup
- large text-led rectangular choices
- selected option frequently becomes black with white text
- unselected choices use light neutral surfaces
- strong black rectangular primary CTA
- large whitespace between question/input region and bottom CTA
- helper text uses noticeably quieter gray hierarchy
- numeric selectors emphasize one very large central number

### Home / dashboard / progress
Representative evidence:
- https://mobbin.com/screens/74e51c99-0993-4408-9ef7-fcd0a2ebd96c
- https://mobbin.com/screens/2493c7a2-d321-4d4f-8b2e-81614d8ceacf
- https://mobbin.com/screens/93ffb0da-29cd-4a78-8c10-8f5fa1e24966
- https://mobbin.com/screens/1aeeb897-cb51-490b-9091-fc7c0bbee48d
- https://mobbin.com/screens/7b996db9-f556-4656-aea3-ac8e76be62aa

Repeated patterns observed:
- large numeric values dominate statistics
- uppercase compact labels accompany metrics
- white modules sit on a light neutral background
- large blocks are separated more by whitespace than decoration
- charts use minimal framing and restrained grid/axis treatment
- green is used for progress/positive training data
- bottom navigation is visually heavy and black on main app surfaces

### Program / workout / exercise
Representative evidence:
- https://mobbin.com/screens/5324e86f-5cf1-4e9b-82a5-7180451ed22a
- https://mobbin.com/screens/b8bf6776-884a-4f05-9426-cab43455b3f6
- https://mobbin.com/screens/c281932e-ae03-4adc-ae7f-98cb8db9421e
- https://mobbin.com/screens/a8be9862-08b3-4282-8402-fd1129dd399d
- https://mobbin.com/screens/2cc18b5a-683e-48be-9f56-48be40596668

Repeated patterns observed:
- media-led hero areas use dark overlay + white metadata
- lower detail content returns to bright neutral/white surfaces
- workout blocks use bold uppercase section labels
- movement rows remain mostly flat and list-like
- black rectangular bottom actions remain prominent
- exercise setup uses simple white panels on light neutral background
- selected training modes use strong black inversion
- plus/minus numeric controls are compact and utilitarian

### Settings / profile / legal
Representative evidence:
- https://mobbin.com/screens/4d6bde90-cad3-460d-b3fa-f14f0bc71daa
- https://mobbin.com/screens/e79e9b5f-fea6-4310-a98b-f33d35ef16d8
- https://mobbin.com/screens/0090bd2e-76af-4e22-b565-fe04b8ba4735
- https://mobbin.com/screens/812b461c-f9bf-44a8-9456-b4ba675cfeed
- https://mobbin.com/screens/db537973-f4ea-442d-b895-0fd0a78bbf22

Repeated patterns observed:
- settings use flat rows and thin dividers instead of large decorative cards
- top bars are simple and restrained
- secondary explanatory text stays small and gray
- destructive/legal actions are text-led and sparse
- toggles use native-looking compact treatment
- profile modules use simple white blocks and large numeric values

## Initial reconstructed system hypotheses

### Color roles
**OBSERVED**
- primary ink: near-black
- app background: very light cool/neutral gray
- content surface: white
- secondary surface: pale gray
- positive/training accent: bright mint/green
- destructive accent: red/pink
- occasional informational/progress accent: blue

### Typography
**OBSERVED / INFERRED**
- very bold large headings
- compact body text with subdued gray color for helpers
- uppercase small labels with heavier weight and increased visual emphasis in workout/stat contexts
- large tabular-feeling numbers or at least visually stable numeric emphasis

### Shape
**OBSERVED / INFERRED**
- low-to-moderate corner radius, not pill-heavy
- rectangular CTAs
- large rectangular selection cards
- circles reserved for avatars, achievements, radios, and some metrics

### Spacing
**INFERRED**
- strong vertical rhythm with large gaps between major semantic groups
- tighter internal padding inside simple rows/cards
- page structure relies on whitespace before extra borders/shadows

### Elevation
**OBSERVED**
- minimal shadows
- separation primarily through surface color, dividers, and whitespace

## Token reconstruction backlog

The next pass should convert visual relationships into provisional implementation tokens for:
- typography
- spacing
- page margins
- colors
- radii
- dividers
- buttons
- selection cards
- tabs
- list rows
- form controls
- bottom navigation
- charts/metrics
- workout blocks
- exercise-detail panels

Each token must carry confidence/evidence notes until Design System freeze.

## Important boundary

The Phase-A goal is visual-system reconstruction. Tonal product behavior is not authoritative for Fitness.

Fitness functionality remains controlled by current GitHub product decisions, with Hevy used as the primary repeated weight-training interaction reference.
