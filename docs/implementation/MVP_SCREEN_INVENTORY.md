# MVP Canonical Screen Inventory

**Status:** FIGMA READ-BACK VERIFIED · SCREEN DESIGN FROZEN  
**Updated:** 2026-09-22

## Canonical source

- Figma file: `W3lZurXCXbThP67rF2xk2b`
- page: `MVP_전체_와이어프레임` — `34:1076`
- top-level frames read back: `96`

Group count:
- 00: 1
- 01: 7
- 02: 3
- 03: 11
- 04: 29
- 05: 18
- 06: 3
- 07: 6
- 08: 18

## Implementation interpretation

This is an implementation inventory, not a requirement that every Figma top-level frame becomes a separate navigation route.

- base / focused / filled / disabled variants may be states of one production screen
- dialog / sheet / action-sheet frames are overlay states
- long authored frames represent scroll-content composition, not a taller physical device
- `01A1_Login_Error_Overlay_Cases` is a comparison board containing three login-error cases
- `FINAL_*` frames are canonical state cases, not route-name requirements
- runtime-derived states defined in the handoff may reuse an existing shell without adding another top-level frame

## 00 — Splash

| Node | Frame | Authored size |
|---|---|---:|
| `1961:8909` | `00_Splash` | 360×780 |

## 01 — Authentication / first run

| Node | Frame | Authored size |
|---|---|---:|
| `40:2075` | `01A_Login` | 360×780 |
| `40:2138` | `01C_Basic_Info` | 360×780 |
| `1292:1183` | `01C1_Basic_Info_Error` | 360×780 |
| `1296:643` | `01A1_Login_Error_Overlay_Cases` | 1160×780 |
| `1314:645` | `01C2_Basic_Info_Focused` | 360×780 |
| `1314:670` | `01C3_Basic_Info_Filled` | 360×780 |
| `1314:695` | `01C4_Basic_Info_Disabled` | 360×780 |

`01A1_Login_Error_Overlay_Cases` contains:
- general login failure
- network failure
- login-service failure

Use current dialog copy from `2026-09-19-dialog-copy-simplification.md`.

## 02 — Home

| Node | Frame | Authored size |
|---|---|---:|
| `1329:593` | `02B_Home_WithRoutine` | 360×780 |
| `1346:686` | `02A_Home_NoRoutine` | 360×780 |
| `1346:710` | `02D_Home_Active` | 360×780 |

No recommended-routine Home state exists.

## 03 — Routine

| Node | Frame | Authored size |
|---|---|---:|
| `34:1401` | `03A_Routine_List` | 360×780 |
| `34:1438` | `03B_Routine_Empty` | 360×780 |
| `34:1447` | `03D_Routine_Detail` | 360×1516 |
| `34:1457` | `03E_Routine_Create` | 360×780 |
| `34:1477` | `03F_Routine_Edit` | 360×2518 |
| `352:896` | `03E2_Routine_Create_WithExercises` | 360×2518 |
| `706:5023` | `03A_Routine_List_Menu` | 360×780 |
| `706:5087` | `03F_Routine_Exercise_Menu` | 360×780 |
| `1380:1995` | `03EF_Routine_Unsaved_Confirm` | 360×780 |
| `1380:7170` | `03F_Routine_Delete_Confirm` | 360×780 |
| `1423:1972` | `03D_Routine_Detail_Empty` | 360×780 |

No My/Recommended tabs and no recommended-routine detail exist.

## 04 — Exercise library / custom exercise / exercise detail

| Node | Frame | Authored size |
|---|---|---:|
| `40:2325` | `04D_Exercise_Detail_Info` | 360×894 |
| `34:1672` | `04E_Custom_Create` | 360×780 |
| `34:1692` | `04F_Custom_Edit` | 360×780 |
| `34:1714` | `04D_Exercise_Detail_History` | 360×780 |
| `170:2174` | `04H_Exercise_Attachment_Selection` | 360×780 |
| `207:1238` | `04A_Search` | 360×780 |
| `515:3327` | `04A_Filter_Equipment_Page` | 360×780 |
| `515:3514` | `04A_Filter_BodyPart_Page` | 360×780 |
| `515:1140` | `04B_Search_Selected` | 360×780 |
| `539:1050` | `04C_Search_Empty` | 360×780 |
| `552:3356` | `04H_Custom_Attachment_Input` | 360×780 |
| `1000:1519` | `04D_Exercise_Detail_Growth` | 360×780 |
| `1391:1619` | `04D_Exercise_Detail_History_Reps` | 360×780 |
| `1391:1707` | `04D_Exercise_Detail_Growth_Reps` | 360×780 |
| `1391:1779` | `04D_Exercise_Detail_History_Duration` | 360×780 |
| `1391:1867` | `04D_Exercise_Detail_Growth_Duration` | 360×780 |
| `1391:1939` | `04D_Exercise_Detail_History_Assisted` | 360×780 |
| `1391:2027` | `04D_Exercise_Detail_Growth_Assisted` | 360×780 |
| `1391:2099` | `04D_Exercise_Detail_History_Empty` | 360×780 |
| `1391:2190` | `04D_Exercise_Detail_Growth_Empty` | 360×780 |
| `1391:2265` | `04D_Exercise_Detail_Growth_Insufficient` | 360×780 |
| `1396:2298` | `04I_Custom_Equipment_Select` | 360×780 |
| `1396:8091` | `04J_Custom_PrimaryMuscle_Select` | 360×780 |
| `1396:8179` | `04K_Custom_SecondaryMuscle_Select` | 360×834 |
| `1396:8271` | `04L_Custom_RecordingType_Select` | 360×780 |
| `1396:8393` | `04F_Custom_Edit_HistoryLocked` | 360×780 |
| `1401:1890` | `04E_Custom_Create_Valid` | 360×780 |
| `1401:7683` | `04EF_Custom_Unsaved_Confirm` | 360×780 |
| `1429:1751` | `04F_Custom_Delete_Confirm` | 360×780 |

## 05 — Active workout

| Node | Frame | Authored size |
|---|---|---:|
| `148:1979` | `05A_Workout_Weight` | 360×780 |
| `148:3392` | `05I_Workout_Menu` | 360×780 |
| `36:3609` | `05J_Reorder` | 360×780 |
| `36:3620` | `05K_End_Incomplete` | 360×780 |
| `36:3623` | `05L_End_Complete` | 360×780 |
| `36:3626` | `05M_Discard` | 360×780 |
| `148:3730` | `05O_Workout_UpdateRoutine` | 360×780 |
| `713:14526` | `05H_Exercise_Replace_Selected` | 360×780 |
| `713:14539` | `05G_Exercise_Replace_Suggest` | 360×780 |
| `727:3622` | `05N_Workout_OtherRoutine_Incomplete` | 360×780 |
| `727:3842` | `05N_Workout_OtherRoutine_Complete` | 360×780 |
| `731:3906` | `05G2_Exercise_Replace_SecondBatch` | 360×780 |
| `734:3883` | `05P_Exercise_Replace_DeleteConfirm` | 360×780 |
| `1495:2408` | `05A_Workout_Weight_Scrolled_3rdExercise` | 360×780 |
| `1498:2769` | `05F_Workout_RestTimer` | 360×780 |
| `1519:2581` | `05Q_ManualTimer_Idle` | 360×780 |
| `1525:4014` | `05Q_ManualTimer_Running` | 360×780 |
| `1547:3691` | `05Q_ManualTimer_Paused` | 360×780 |

Blank-workout zero-exercise behavior reuses `05A_Workout_Weight` shell and is defined in `MVP_IMPLEMENTATION_HANDOFF.md`; it is intentionally not an additional top-level frame.

## 06 — Workout completion

| Node | Frame | Authored size |
|---|---|---:|
| `793:15748` | `06A_Completion_Default` | 360×780 |
| `819:696` | `FINAL_06_PR_NONE_CASE` | 360×780 |
| `823:716` | `FINAL_06_VOLUME_NA_CASE` | 360×780 |

Recommended-routine save dialogs were removed from the MVP.

## 07 — Analysis / workout history

| Node | Frame | Authored size |
|---|---|---:|
| `836:1593` | `07D_Workout_History_Detail` | 360×1437 |
| `887:936` | `07A_Analysis_Home` | 360×1542 |
| `887:1028` | `07B_BodyArea_Detail` | 360×890 |
| `1057:593` | `07B_BodyArea_Detail_Empty` | 360×890 |
| `2121:8457` | `07C_Workout_History` | 360×780 |
| `1136:4054` | `07D_Workout_History_Detail_DeleteConfirm` | 360×780 |

## 08 — Settings / account / support

| Node | Frame | Authored size |
|---|---|---:|
| `1158:649` | `08A_Settings_Home` | 360×885 |
| `1158:7365` | `08D_Workout_Settings` | 360×780 |
| `1158:7457` | `08E_Notification_Settings` | 360×780 |
| `1163:676` | `08D1_Default_Rest_Time_Sheet` | 360×780 |
| `1163:7296` | `08D2_Timer_End_Sound` | 360×780 |
| `1175:709` | `08C_Unit_Settings_Sheet` | 360×780 |
| `1181:724` | `08B1_Profile_Photo_Sheet` | 360×780 |
| `2144:8195` | `08B1A_Profile_Photo_Crop` | 360×780 |
| `1204:770` | `08B_Profile` | 360×780 |
| `1207:799` | `08B2_Account_Management_Sheet` | 360×780 |
| `1222:846` | `08B3_Account_Deletion` | 360×780 |
| `1222:7487` | `08B4_Account_Deletion_Confirm` | 360×780 |
| `1257:927` | `08G_Support_Inquiry` | 360×780 |
| `1260:946` | `08G1_Inquiry_Category_Sheet` | 360×780 |
| `1261:977` | `08G2_Inquiry_Submitted` | 360×780 |
| `1261:1044` | `08G3_Inquiry_Send_Failed` | 360×780 |
| `1601:987` | `08H_Language_Settings` | 360×780 |
| `1601:1015` | `08A1_Settings_Home_SubscriptionToast` | 360×780 |

FAQ screens are not in the current MVP.

## Verification result

Counted from the canonical page after the PO-approved profile-photo crop amendment on 2026-09-22:
- total = `96`
- listed in this document = `96`
- no recommended-routine top-level screen is included
