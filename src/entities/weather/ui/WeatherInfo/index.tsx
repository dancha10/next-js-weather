'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.scss';
import { getWeatherByCity, $weatherByCity, $pendingWeatherByCity } from '../../model';
import { useUnit } from 'effector-react';
import { Skeleton } from '@/shared/ui/Skeleton';

const weatherIcon = (desc: string) => {
  if (desc.toLowerCase().includes('ясно')) return '☀️';
  if (desc.toLowerCase().includes('дожд')) return '🌧️';
  if (desc.toLowerCase().includes('обла')) return '⛅';
  if (desc.toLowerCase().includes('пасмурно')) return '☁️';
  if (desc.toLowerCase().includes('снег')) return '❄️';
  return '🌡️';
};

export const WeatherInfo: React.FC<{ id: string }> = ({ id }) => {
  const [weather, getWeather, pending] = useUnit([$weatherByCity, getWeatherByCity, $pendingWeatherByCity]);

  useEffect(() => {
    getWeather(id);
  }, [id]);

  if (pending) {
    return (
      <div className="relative w-full min-h-screen flex items-center justify-center">
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
        <div className="relative z-10 max-w-2xl w-full mx-4 rounded-3xl bg-white/20 backdrop-blur-lg shadow-2xl p-10 flex flex-col items-center">
          <div className="flex items-center gap-4 mb-2">
            <Skeleton className="w-16 h-16 rounded-full" />
            <Skeleton className="w-32 h-16" />
          </div>
          <Skeleton className="w-48 h-8 mb-2" />
          <Skeleton className="w-64 h-6 mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full mt-2">
            <div className="flex flex-col items-center bg-white/30 rounded-2xl p-4 shadow-md backdrop-blur-md">
              <Skeleton className="w-12 h-12 rounded-full mb-1" />
              <Skeleton className="w-16 h-6 mb-1" />
              <Skeleton className="w-12 h-4" />
            </div>
            <div className="flex flex-col items-center bg-white/30 rounded-2xl p-4 shadow-md backdrop-blur-md">
              <Skeleton className="w-12 h-12 rounded-full mb-1" />
              <Skeleton className="w-16 h-6 mb-1" />
              <Skeleton className="w-12 h-4" />
            </div>
            <div className="flex flex-col items-center bg-white/30 rounded-2xl p-4 shadow-md backdrop-blur-md">
              <Skeleton className="w-12 h-12 rounded-full mb-1" />
              <Skeleton className="w-16 h-6 mb-1" />
              <Skeleton className="w-12 h-4" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!weather) return null;

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center">
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
      <div className="absolute inset-0 z-0">
        <Image
          src={weather.image}
          alt={weather.name}
          fill
          style={{ objectFit: 'cover', filter: 'blur(4px) brightness(0.7)' }}
          priority
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/40 z-0" />
      <div
        className={
          'relative z-10 max-w-2xl w-full mx-4 rounded-3xl bg-white/20 backdrop-blur-lg shadow-2xl p-10 flex flex-col items-center ' +
          styles['fade-in']
        }>
        <div className="flex items-center gap-4 mb-2">
          <span className={'text-6xl drop-shadow-lg ' + styles['pop-in'] + ' ' + styles['delay-100']}>
            {weather.description ? weatherIcon(weather.description) : null}
          </span>
          <span
            className={
              'text-6xl font-extrabold text-white drop-shadow-lg ' + styles['pop-in'] + ' ' + styles['delay-200']
            }>
            {weather.temperature}&deg;C
          </span>
        </div>
        <h1
          className={
            'text-3xl font-bold text-white mb-2 drop-shadow-lg text-center ' +
            styles['fade-in'] +
            ' ' +
            styles['delay-300']
          }>
          {weather.name}
        </h1>
        <div className={'text-xl text-white/90 mb-8 text-center ' + styles['fade-in'] + ' ' + styles['delay-300']}>
          {weather.description}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full mt-2">
          <div className="flex flex-col items-center bg-white/30 rounded-2xl p-4 shadow-md backdrop-blur-md">
            <span className="text-3xl mb-1">💨</span>
            <span className="text-lg text-gray-800 font-semibold">{weather.wind} м/с</span>
            <span className="text-xs text-gray-600">Ветер</span>
          </div>
          <div className="flex flex-col items-center bg-white/30 rounded-2xl p-4 shadow-md backdrop-blur-md">
            <span className="text-3xl mb-1">💧</span>
            <span className="text-lg text-gray-800 font-semibold">{weather.humidity}%</span>
            <span className="text-xs text-gray-600">Влажность</span>
          </div>
          <div className="flex flex-col items-center bg-white/30 rounded-2xl p-4 shadow-md backdrop-blur-md">
            <span className="text-3xl mb-1">🌡️</span>
            <span className="text-lg text-gray-800 font-semibold">{weather.pressure} мм</span>
            <span className="text-xs text-gray-600">Давление</span>
          </div>
        </div>
      </div>
    </div>
  );
};
