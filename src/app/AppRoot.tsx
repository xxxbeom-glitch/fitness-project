import { StatusBar } from 'expo-status-bar';
import { AppProviders } from './providers';
import { RootShell } from './navigation';

export function AppRoot() {
  return (
    <AppProviders>
      <StatusBar style="dark" />
      <RootShell />
    </AppProviders>
  );
}
