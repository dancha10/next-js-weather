export type TWeatherDetails = {
  id: number;
  name: string;
  image: string;
  temperature: number;
  description: string;
  wind: number;
  humidity: number;
  pressure: number;
};

export * from './currentWeather';
export { $weatherByCity, getWeatherByCity, $pendingWeatherByCity } from './weatherByCity';
