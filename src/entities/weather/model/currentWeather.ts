import { createEvent, createStore, sample } from 'effector';
import { debug } from 'patronum';
import { forecastWeatherFactory } from '@/shared/lib';
import { TCurrentWeather } from '@/shared/types';

// Координаты Москвы
const MOSCOW_COORDS = { lat: 55.75, lon: 37.62 };

export const pageOpened = createEvent();

export const currentWeatherFx = forecastWeatherFactory();

sample({
  clock: pageOpened,
  fn: () => MOSCOW_COORDS,
  target: currentWeatherFx,
});

export const $currentWeather = createStore<TCurrentWeather | null>(null);

sample({
  clock: currentWeatherFx.doneData,
  target: $currentWeather,
});

export const $pending = currentWeatherFx.pending;

// sample({
//   clock: weatherGate.close,
//   target: $currentWeather.reinit,
// });
