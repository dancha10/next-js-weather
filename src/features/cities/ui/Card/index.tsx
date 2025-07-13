'use client';
import React from 'react';
import type { TCity } from '../../types';
import Link from 'next/link';
import { Skeleton } from '@/shared/ui/Skeleton';

export const Card: React.FC<{ city: TCity }> = ({ city }) => {
  return (
    <Link href={`/details/${city.id}`} className="block">
      <div
        className="relative w-80 h-52 rounded-3xl overflow-hidden shadow-xl m-4 cursor-pointer transition-transform duration-200 hover:scale-105 hover:rotate-1"
        style={{ backgroundImage: `url(${city.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-white/10 flex flex-col justify-end p-6">
          <h2 className="text-white text-2xl font-bold mb-2 drop-shadow-lg">{city.name}</h2>
          {!city.temperature ? (
            <Skeleton className="w-30" />
          ) : (
            <div className="text-yellow-300 text-xl font-semibold drop-shadow">{city.temperature}&deg;C</div>
          )}
        </div>
      </div>
    </Link>
  );
};
