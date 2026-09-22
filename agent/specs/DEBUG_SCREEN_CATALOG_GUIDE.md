# Debug UI Catalog Guide — Tampin

## 목적
Tampin의 canonical 화면/state를 실제 로그인, SQLite, Supabase, production navigation 연결 전에도 Android Development Build에서 직접 확인하기 위한 개발 전용 UI Catalog다.

```text
Tampin UI Catalog
├─ 00 시작
├─ 01 로그인/온보딩
├─ 02 홈
├─ 03 루틴
├─ 04 운동
├─ 05 운동 중
├─ 06 완료
├─ 07 분석/기록
└─ 08 설정
```

## 핵심 원칙
- canonical screen ID/name은 `agent/FIGMA_SCREEN_MAP.md`와 일치한다.
- deterministic fake state를 사용한다.
- SQLite/Supabase/Auth가 없어도 렌더링 가능해야 한다.
- 실제 사용자 데이터/secret을 읽지 않는다.
- production/release 앱에서 사용자 진입점으로 노출하지 않는다.
- Figma frame을 무조건 별도 route로 만들지 않는다.

## 권장 source shape
```text
src/
├─ app/
│  ├─ navigation/
│  └─ providers/
├─ design-system/
│  ├─ tokens/
│  └─ components/
├─ features/
│  ├─ startup/
│  ├─ auth/
│  ├─ home/
│  ├─ routine/
│  ├─ exercise/
│  ├─ workout/
│  ├─ completion/
│  ├─ analysis/
│  └─ settings/
├─ data/
│  ├─ contracts/
│  └─ mock/
├─ platform/
├─ shared/
└─ debug/
   └─ ui-catalog/
      ├─ registry/
      ├─ fake/
      └─ components/
```

실제 navigation library 선택에 따라 entrypoint 방식은 달라질 수 있다. 이 문서는 Expo Router / React Navigation 중 하나를 선행 확정하지 않는다.

## Screen 구조
화면은 가능한 한 명시적 state/actions로 렌더링한다.

```ts
type ProfileScreenProps = {
  state: ProfileUiState;
  onAction: (action: ProfileAction) => void;
};

export function ProfileScreen({ state, onAction }: ProfileScreenProps) {
  // render only
}
```

실제 navigation/data adapter 연결은 Route/Controller 쪽에서 담당한다.

## Fake state
필요한 대표 상태만 둔다.
- Content
- Empty
- Error
- Disabled
- Permission
- Long content
- canonical dialog/sheet/state cases

모든 화면에 Loading/Error를 기계적으로 만들지 않는다.

## Registry
각 entry에 최소:
- canonical frame name
- group/category
- state label
- description
- render function
을 둔다.

96개를 첫날 모두 등록하지 않는다.
각 implementation Issue에서 구현한 canonical row를 함께 등록한다.

## Production separation
- `src/debug/ui-catalog` 아래에 둔다.
- 개발 전용 entry point는 `__DEV__` 또는 build/environment guard를 적용한다.
- Release user flow에서 catalog route/button을 노출하지 않는다.
- Catalog가 production bundle에 물리적으로 포함되는지 여부보다 중요한 최소 Gate는 production 사용자 진입/실행 불가와 real-data 분리다.
- 필요 시 release 단계에서 bundle exclusion까지 별도 검증한다.

## 완료 기준
- 개발 build에서 catalog 진입 가능
- 구현한 canonical row가 목록에서 검색/선택 가능
- production navigation 없이 direct render
- fake state로 crash 없이 렌더링
- Figma 비교 가능
- Screen Map 상태 갱신
