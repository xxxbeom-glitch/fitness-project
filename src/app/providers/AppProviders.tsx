import { type ReactNode } from 'react';

type AppProvidersProps = {
  children: ReactNode;
};

/** Bootstrap providers shell — no auth/data SDKs in DEV-001. */
export function AppProviders({ children }: AppProvidersProps) {
  return <>{children}</>;
}
