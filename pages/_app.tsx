import type { AppProps } from 'next/app';
import { EffectorNext } from '@effector/next';
import './globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <EffectorNext>
      <div className="antialiased overflow-hidden h-screen">
        <div className="flex flex-col h-full overflow-auto">
          <Component {...pageProps} />
        </div>
      </div>
    </EffectorNext>
  );
} 