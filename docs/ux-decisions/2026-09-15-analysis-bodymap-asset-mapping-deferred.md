# Analysis Body-map Asset Mapping Deferred — 2026-09-15

**Status:** PO DEFERRED / USER ASSET PREP REQUIRED / NO FIGMA MUTATION / NO CURSOR HANDOFF

## Decision

The final mapping between canonical muscle data and the front/back body-map image layers is deferred.

The Product Owner will first prepare the production-ready body-map image assets.

Current asset direction:

- use the existing purchased/source muscle-highlight PNGs as provided
- do not redraw or recolor muscle regions in ChatGPT/Figma
- use the existing blend-mode approach already validated by the Product Owner
- preserve each supplied muscle layer's original geometry/alignment relationship
- a neutral/no-highlight base-body image still needs to be prepared by the Product Owner because the current source set does not provide the required clean base in the desired form
- final size/alignment preparation will be done by the Product Owner before the mapping is locked

## Deferred decisions

After the prepared image set is available, decide:

1. canonical muscle -> image-layer mapping
2. whether one muscle activates one layer or multiple layers
3. exact handling of compound groups such as triceps sublayers and chest/abdominal sublayers
4. final front/back layer alignment and blend-mode implementation details
5. whether any source layer is omitted or grouped in the production body map

Do not create replacement body-map artwork or paint additional regions before the Product Owner supplies the prepared assets.

## Product boundary

This deferral does not block the remaining Analysis product/data decisions that do not depend on the final image files.

Proceed next with the next unresolved Analysis item from `2026-09-05-analysis-tab-ia.md`: **workout-frequency definition**.

**NO CURSOR IMPLEMENTATION HANDOFF.**
