# Gym Visual held near-match resolution v1

**Date:** 2026-09-21  
**Status:** PASS · 45 / 45 HELD PAIRS RESOLVED

## Result

- held pairs reviewed: **45**
- merge to one exercise identity: **6**
- keep as separate exercise identities: **39**
- working identity count before this resolution: **5,654**
- working identity count after this resolution: **5648**

## Merge rule

Only pairs where the remaining wording difference does not change workout-history meaning were merged.

Additional merges:
- Cable Seated Row With V Bar ↔ Cable Low Seated Row With V Bar
- Cable Straight Arm Pulldown ↔ Cable Straight Arm Pulldown II
- Sitting Torso Twist On A Chair ↔ Sitting Core Twist On A Chair
- Single Leg Hip Thrusts ↔ Single Leg Thrusts
- Push Up (wall) II ↔ Push Up (wall)
- Duck Side Punch ↔ Duck And Side Punch

Everything else in the held set remains separate. This is intentionally conservative: posture, grip, pause/pin, laterality, range, target action, or other execution modifiers are not collapsed merely because names are similar.

## External check used for V-bar row wording

Current exercise references describe the seated V-bar cable row as using a low pulley, supporting `Low` as setup wording rather than a distinct exercise identity:
- https://www.kovofitness.com/exercises/cable-seated-row-with-v-bar
- https://1rm.fit/exercises/cable_seated_row_with_v_bar
- https://loadmuscle.com/exercises/cable-low-seated-row-with-v-bar

## Artifact

- `data/exercises/gym-visual/v1/gym_visual_cross_gender_hold_resolution_v1.csv`

## NEXT

Apply this resolved identity baseline and run Korean/local semantic normalization + equipment/body-part/muscle/recording-type QA.