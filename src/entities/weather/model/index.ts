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

export const weatherByCityId: Record<number, TWeatherDetails> = {
  moscow: {
    id: 1,
    name: 'Москва',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    temperature: 22,
    description: 'Ясно, без осадков',
    wind: 4,
    humidity: 60,
    pressure: 755,
  },
  2: {
    id: 2,
    name: 'Санкт-Петербург',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
    temperature: 19,
    description: 'Облачно, небольшой дождь',
    wind: 6,
    humidity: 72,
    pressure: 752,
  },
  3: {
    id: 3,
    name: 'Казань',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80',
    temperature: 24,
    description: 'Переменная облачность',
    wind: 3,
    humidity: 55,
    pressure: 758,
  },
  4: {
    id: 4,
    name: 'Сочи',
    image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80',
    temperature: 27,
    description: 'Солнечно, жарко',
    wind: 2,
    humidity: 48,
    pressure: 760,
  },
  5: {
    id: 5,
    name: 'Екатеринбург',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
    temperature: 18,
    description: 'Пасмурно',
    wind: 5,
    humidity: 68,
    pressure: 750,
  },
};
