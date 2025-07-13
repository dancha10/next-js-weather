'use client';
import { FC } from 'react';
import { $cities } from '../../model';
import { useList } from 'effector-react';
import { Card } from '../Card';

export const Cities: FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 mt-4">
      {useList($cities, {
        fn: (city) => <Card city={city} />,
        getKey: ({ id }) => id,
      })}
    </div>
  );
};
