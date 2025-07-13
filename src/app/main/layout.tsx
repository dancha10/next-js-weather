import { FC, PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
  return <div className="bg-amber-300">{children}</div>;
}
