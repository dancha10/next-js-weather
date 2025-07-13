import { createEffect, createStore, sample } from 'effector';
import { TCity } from '../types';
import { cities } from '../config';
import { forecastWeatherFactory } from '@/shared/lib';
import { pageOpened } from '@/entities/weather';

export const $cities = createStore<TCity[]>(cities as TCity[]);

const cityCoords = [
  { name: 'moscow', coords: { lat: 55.75, lon: 37.62 } },
  { name: 'saint-petersburg', coords: { lat: 59.93, lon: 30.31 } },
  { name: 'kazan', coords: { lat: 55.79, lon: 49.12 } },
  { name: 'sochi', coords: { lat: 43.6, lon: 39.73 } },
  { name: 'yekaterinburg', coords: { lat: 56.84, lon: 60.61 } },
];

export const weathersFx = createEffect(
  async () => await Promise.all(cityCoords.map(({ coords }) => forecastWeatherFactory()(coords))),
);

sample({
  clock: pageOpened,
  target: weathersFx,
});

sample({
  clock: weathersFx.doneData,
  source: $cities,
  fn: (cities, forecasts) => {
    return cities.map((city, index) => ({ ...city, temperature: forecasts[index].temperature }));
  },
  target: $cities,
});

export const $pending = weathersFx.pending;
