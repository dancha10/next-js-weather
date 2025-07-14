import React from 'react';
import { twMerge } from 'tailwind-merge';
import styles from './styles.module.scss';

export const Skeleton: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className = '', style }) => (
  <div className={twMerge(styles['skeleton-base'], 'w-full min-h-10', className)} style={style}>
    <div className={styles['skeleton-shimmer']} />
  </div>
);
