import { useState } from 'react';
import { BootstrapHomeScreen } from '../../features/startup';
import { UiCatalogScreen } from '../../debug/ui-catalog';

export type RootRoute = 'bootstrap' | 'ui-catalog';

/**
 * Minimal navigation baseline for DEV-001:
 * local React state shell only — no Expo Router / React Navigation yet.
 * Product screen Issues may introduce a single navigation system later.
 */
export function RootShell() {
  const [route, setRoute] = useState<RootRoute>('bootstrap');

  if (route === 'ui-catalog') {
    return <UiCatalogScreen onBack={() => setRoute('bootstrap')} />;
  }

  return (
    <BootstrapHomeScreen
      onOpenCatalog={
        __DEV__ ? () => setRoute('ui-catalog') : undefined
      }
    />
  );
}
