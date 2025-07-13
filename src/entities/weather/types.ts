import { TCurrentWeather } from '@/shared/types';

export type TWeatherDetails = TCurrentWeather & {
  name: string;
  image: string;
};

export type TCoordinates = {
  lat: number;
  lon: number;
};
