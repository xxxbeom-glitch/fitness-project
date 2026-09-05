# Library_database 2,109 Bulk Mapping v0.2

**Date:** 2026-09-05  
**Status:** BULK MAPPING PASS COMPLETE / TARGETED QA REMAINS  
**Source scope:** `MP4/MALE/Library_database` 2,109-row manifest  
**Production anchor:** G Fit Exercise DB v1 — 195 app-facing canonical exercises

## 1. Input / boundary

Uploaded manifest was parsed as:

- source rows: **2,109**
- unique filenames: **2,109**
- duplicate exact filename rows: **0**

Purchased source filename/path/media remains read-only provenance. This pass creates normalized mapping data only; it does not rename, move, convert, delete, or overwrite raw assets.

This is a conservative bulk pass. Filename/rule-based mapping is allowed only where prior normalization rules are sufficient. Visual ambiguity is not silently promoted to Production.

## 2. Verified source-family counts

Counts from the actual 2,109 manifest:

| Source family | Rows |
|---|---:|
| Dumbbell | **494** |
| Cable | **298** |
| Other | **264** |
| Barbell | **212** |
| Machine | **207** |
| Kettlebell | **188** |
| Band | **122** |
| Rings | **80** |
| Weighted Bodyweight | **69** |
| Smith Machine | **61** |
| Suspension | **40** |
| EZ Bar | **35** |
| Landmine | **33** |
| Trap Bar | **6** |
| **Total** | **2,109** |

Correction from the earlier equipment-pass checkpoint: Dumbbell is **494**, not 493. The manifest contains 492 `Dumbbell*` names plus 2 `Dumbell*` typo-prefixed source files.

## 3. Conservative mapping result

### Row-level roles

| Mapping role | Rows |
|---|---:|
| new canonical candidate | **1,055** |
| execution/load context | **709** |
| grip context | **132** |
| media duplicate/variant | **63** |
| attachment context | **56** |
| existing Production canonical | **50** |
| excluded/non-gym-first | **43** |
| unresolved | **1** |
| **Total** | **2,109** |

### Source identity/history buckets

- total conservative source identity/history buckets: **1,954**
- active buckets: **1,912**
- excluded buckets: **42**
- unresolved buckets: **1**
- buckets matched to an existing Production canonical: **75**
- new source-derived candidate buckets: **1,836**

**Important:** `1,912 active buckets` is **not** the number of exercises that should appear in the app.

These buckets intentionally preserve history-relevant posture, laterality, load-position, implement-count and execution differences. They are an analysis/index layer. Turning all 1,912 into app-facing search items would create excessive search noise and fragment performance history.

The app-facing baseline remains the curated Production catalog.

## 4. Production / P0 / P1 interpretation

### Existing Production

- current Production baseline: **195 canonical exercises**

### Old P0 16 — source-scope correction

The previous checkpoint said the new 2,109 source covered 16/16 P0. The actual `Library_database` manifest shows:

- `Library_database` source-covered: **13 / 16**
- not present in `Library_database`: **3 / 16**

The 3 absent standard identities are:

1. `Plank`
2. `Crunch`
3. `Lying Leg Raise`

Folder comparison explains the discrepancy:

- `Gym_Workout_`: 2,081 MP4
- `Library_database`: 2,109 MP4
- all 2,081 Gym files are byte-identical matches inside Library; Library has 28 extra
- `Home_Workout_`: 2,120 MP4
- Home and Library overlap by only 6 exact filenames

Therefore `Library_database` is a valid superset of Male Gym source, but it is **not** a package-wide master that contains Home source.

The purchased Home source does contain exact-name fallback candidates for all 3 P0 gaps:

| P0 identity | Home source candidate | Status |
|---|---|---|
| Plank | `Front-Elbow-Plank-(male)_Waist-FIX_.mp4` | exact-name fallback candidate; direct visual QA required |
| Crunch | `Crunch-Floor-(male)_waist.mp4` | exact-name fallback candidate; direct visual QA required |
| Lying Leg Raise | `Lying-Leg-Raise_Waist-FIX_.mp4` | exact-name fallback candidate; direct visual QA required |

If those three Home candidates pass direct visual QA, package-level source availability returns to **16/16 P0**, and source-availability-driven P0 new asset creation returns to **0**.

Until that QA is done, the accurate status is:

`P0 = Library 13/16 covered + Home fallback 3 pending visual QA`

The product priority of the P0 16 does not change.

If all 16 P0 are promoted, the curated MVP catalog target remains:

- `195 existing + 16 P0 = 211 app-facing exercises`

### Old P1 17

The prior targeted Library identity review remains valid for the current Production scope:

- Library source-covered: **15 / 17**
- unresolved in that reviewed scope: **0**
- reviewed gaps: **2**

1. standard bilateral `Dumbbell Deadlift`
2. standard floor bodyweight `Sit Up`

`Dumbbell Deadlift` remains a real source gap under current evidence: available dumbbell hinge clips are RDL / stiff-leg / straight-leg / sumo / unilateral variants rather than the conventional bilateral identity.

Home source contains several sit-up variants, but none has yet been approved as the exact standard floor `Sit Up` identity. Therefore the P1 Sit Up gap is **not** automatically closed from filename inventory alone. If P1 expansion becomes active, a small Home targeted identity review can be done before deciding to create a new asset.

Product-count reference only:

- Production + P0 = **211**
- Production + P0 + current 15 source-covered P1 = **226**
- Production + P0 + all 17 P1 = **228** only if the 2 remaining P1 identities are resolved or media is intentionally optional

P1 remains non-blocking for MVP.

## 5. Remaining targeted QA only

Broad ZIP-based duplicate review is still considered complete. Do not return to large manual review batches.

Remaining minimum QA created by this bulk pass:

1. Home `Front-Elbow-Plank-(male)_Waist-FIX_.mp4` → standard Plank identity check
2. Home `Crunch-Floor-(male)_waist.mp4` → standard Crunch identity check
3. Home `Lying-Leg-Raise_Waist-FIX_.mp4` → standard Lying Leg Raise identity check
4. `Kettlebell-Good-Morning_Hips_.mp4` → existing targeted visual QA already indicates a hanging two-hand hip hinge rather than a good morning; exact normalized parent (`Deadlift` vs `RDL`-like) remains the only explicit unresolved Library identity in the conservative bulk map

Optional only if P1 expansion is activated:

- Home sit-up variants → determine whether any truly represent the standard floor Sit Up identity

## 6. Product decision / boundary

1. `Library_database` remains the primary Male Gym analysis base because it contains all `Gym_Workout_` MP4s plus 28 additional files.
2. Do **not** treat `Library_database` as a package-wide superset of `Home_Workout_`.
3. Home source can be used as an explicit fallback source candidate when an approved gym-first exercise identity is missing from Library; this does not by itself broaden the product into a home-workout product.
4. Raw purchased source remains immutable provenance.
5. The 1,954 source identity/history buckets are analysis structure, not an app-facing exercise count.
6. App-facing expansion stays curated: Production 195 → P0 target 211 first. P1 expansion is later and non-blocking.
7. Only identity conflicts created by Production promotion should trigger additional visual QA.

## 7. Next

Immediate next action:

1. visually verify the 3 Home P0 fallback clips
2. if approved, lock P0 package source coverage at 16/16
3. normalize those P0 rows into G Fit naming / equipment / body-part / recording schema
4. prepare the 16 P0 additions for Production DB promotion
5. resolve `Kettlebell-Good-Morning_Hips_.mp4` only when its identity is needed for the curated Production set

No Cursor implementation handoff yet. Exercise DB source/canonical normalization is still active.
