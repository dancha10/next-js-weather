import { useRouter } from 'next/router';
import React from 'react';
import Link from 'next/link';

const cities = ['moscow', 'saint-petersburg', 'kazan', 'sochi', 'yekaterinburg'];

function getRandomCity() {
  return cities[Math.floor(Math.random() * cities.length)];
}

export default function RandomPage() {
  const router = useRouter();

  const handleClick = () => {
    const city = getRandomCity();
    router.push(
      {
        pathname: '/random',
        query: { city },
      },
      undefined,
      { shallow: true },
    );
  };

  return (
    <div className="h-full flex items-center justify-center relative">
      <div className="flex flex-col items-center gap-6">
        <button
          onClick={handleClick}
          className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 via-pink-400 to-blue-400 text-white text-xl font-bold shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 border-none outline-none focus:outline-none">
          Сгенерировать случайный город
        </button>
        <div className="mt-4 text-lg text-gray-700">
          <div>Текущий city:</div>
          <pre className="bg-white/80 rounded p-2 mt-2">{router.query.city || '—'}</pre>
        </div>
      </div>
      <Link
        href="/"
        className="fixed top-8 left-8 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-white text-base font-semibold shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 border-none outline-none focus:outline-none z-50 flex items-center gap-2">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
          aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
        Назад
      </Link>
    </div>
  );
}
