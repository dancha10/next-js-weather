import React from 'react';
import { twMerge } from 'tailwind-merge';
import './styles.scss';

export const Skeleton: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className = '', style }) => (
  <div className={twMerge('skeleton-base w-full min-h-10', className)} style={style}>
    <div className="skeleton-shimmer" />
  </div>
);
