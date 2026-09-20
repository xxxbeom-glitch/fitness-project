# Band / Rings / Suspension recording semantics

**Date:** 2026-09-21  
**Status:** CURRENT DATA POLICY · MVP RECORDING MODEL REUSE · NO NEW UI TYPE

## Decision

- Resistance Band dynamic movements → `reps`
- Rings dynamic movements → `reps`
- Suspension Trainer dynamic movements → `reps`
- pure static/isometric apparatus holds → `duration`
- band-assisted pull-up/chin-up/dip variants → `reps` in MVP; do not pretend band assistance is a standardized kg value
- counterweight machine-assisted pull-up/chin-up/dip remains `assisted_weight_reps`
- externally weighted ring/suspension/bodyweight variants stay outside active MVP when they require added-weight semantics

## Why

Elastic resistance changes with band stretch/anchor setup and manufacturer specifications, so a plain kg field is not reliably comparable. Rings and suspension systems similarly change effective resistance through body position/leverage rather than a standardized external load.

Hevy is useful as a comparison point: it distinguishes bodyweight, assisted, and weighted-bodyweight semantics, and its exercise library includes resistance-band and suspension equipment. Tampin MVP intentionally has a narrower four-type active recording model, so this decision reuses `reps`/`duration` rather than adding a new band-resistance type.

## Alternative considered

`weight_reps` for bands was rejected for MVP because nominal band force depends on elongation/setup and would make history comparisons look more precise than they are.

`assisted_weight_reps` for band-assisted bodyweight was rejected for MVP because the current Tampin meaning is machine/counterweight assistance; band assistance is not a stable numeric counterweight.

## Future option

A later version may add band-level/resistance metadata or a dedicated elastic-resistance recording model if user demand justifies the extra UI/history complexity.

## Evidence

- ACE: resistance bands provide dynamic resistance that increases as the band stretches: https://www.acefitness.org/continuing-education/certified/july-2025/8897/the-ace-workout-builder-for-resistance-band-workouts/
- TheraBand example: published resistance is tied to a specific elongation percentage: https://www.performbetter.com/Thera-Band-50-Yard-Box-5-Wide/
- Hevy bodyweight/assisted/weighted semantics: https://help.hevyapp.com/hc/en-us/articles/38386262243223-Bodyweight-Exercises-in-Hevy-Bodyweight-vs-Assisted-vs-Weighted
- Hevy exercise library includes resistance-band and suspension-kit equipment: https://help.hevyapp.com/hc/en-us/articles/35688251991575-Hevy-Exercise-Library-400-Exercises-and-Custom-Exercises

## Data effect

- affected apparatus rows reviewed: **432**
- externally weighted apparatus rows moved out of MVP: **4**
- active MVP rows after this policy: **3722**

Semantic v2 artifacts apply this policy; v1 remains historical prepass provenance.