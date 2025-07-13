import { combine, createEffect, createEvent, createStore, sample } from 'effector';
import { TCoordinates, TWeatherDetails } from '../types';
import { cityConfig } from '../config';
import { forecastWeatherFactory } from '@/shared/lib';
import { TCurrentWeather } from '@/shared/types';

export const getWeatherByCity = createEvent<string>();
const $cityInfo = createStore<
  | (Pick<TWeatherDetails, 'name' | 'image'> & {
      coords: TCoordinates;
    })
  | null
>(null);

sample({
  clock: getWeatherByCity,
  filter: (id) => Boolean(cityConfig[id]),
  fn: (id) => {
    const { displayName, ...other } = cityConfig[id];

    return { ...other, name: displayName };
  },
  target: $cityInfo,
});

const forecastWeatherFx = forecastWeatherFactory();

const $forecastWeather = createStore<TCurrentWeather | null>(null);

sample({
  clock: $cityInfo,
  filter: Boolean,
  fn: ({ coords }) => coords,
  target: forecastWeatherFx,
});

sample({
  clock: forecastWeatherFx.doneData,
  target: $forecastWeather,
});

export const $weatherByCity = combine($cityInfo, $forecastWeather, (info, forecast) => {
  if (!info && !forecast) return null;

  return { ...(info ?? {}), ...(forecast ?? {}) } as TWeatherDetails;
});

export const $pendingWeatherByCity = forecastWeatherFx.pending;
