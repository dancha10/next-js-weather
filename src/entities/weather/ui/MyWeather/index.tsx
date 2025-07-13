'use client';
import { FC, useEffect } from 'react';
import { $currentWeather, $pending, pageOpened } from '../../model';
import { useUnit } from 'effector-react';
import { Skeleton } from '@/shared/ui/Skeleton';

export const MyWeather: FC = () => {
  const { gateOpened, weather, pending } = useUnit({
    weather: $currentWeather,
    gateOpened: pageOpened,
    pending: $pending,
  });

  useEffect(gateOpened, []);

  return (
    <div className="w-full flex justify-center pt-16 pb-8">
      <div className="bg-white/80 rounded-2xl shadow-lg px-16 py-10 flex flex-col items-center gap-2">
        {!weather ? (
          <Skeleton />
        ) : (
          <span className="text-5xl font-extrabold text-purple-700 drop-shadow">+{weather.temperature}°C</span>
        )}
        <span className="text-lg text-gray-700 font-medium opacity-80">Текущая температура</span>
      </div>
    </div>
  );
};
