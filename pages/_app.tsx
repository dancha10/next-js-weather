import type { AppProps } from 'next/app';
import { EffectorNext } from '@effector/next';
import { FC, PropsWithChildren } from 'react';
import './globals.css';

const ProviderSSR: FC<PropsWithChildren> = ({ children }) => {
  if (process.env.NEXT_PUBLIC_USE_SSR) return <EffectorNext>{children}</EffectorNext>;

  return children;
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProviderSSR>
      <div className="antialiased min-h-screen flex flex-col h-screen overflow-auto">
        <Component {...pageProps} />
      </div>
    </ProviderSSR>
  );
}
