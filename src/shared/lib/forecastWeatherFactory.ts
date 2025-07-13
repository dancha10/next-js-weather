import { createEffect } from 'effector';
import { TCurrentWeather } from '@/shared/types';

export const forecastWeatherFactory = () =>
  createEffect(async (coords: { lat: number; lon: number }) => {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true&hourly=relative_humidity_2m,surface_pressure,weathercode&timezone=auto`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('Ошибка запроса погоды');
    const data = await res.json();
    const current = data.current_weather;
    // Берём ближайший час для влажности и давления
    const humidity = data.hourly?.relative_humidity_2m?.[0] ?? null;
    const pressure = data.hourly?.surface_pressure?.[0] ?? null;
    // Описание по weathercode (можно расширить)
    const code = current.weathercode;
    const description = weatherCodeToDesc(code);
    return {
      temperature: current.temperature,
      wind: current.windspeed,
      humidity,
      pressure,
      description,
    } as TCurrentWeather;
  });

function weatherCodeToDesc(code: number): string {
  if (code === 0) return 'Ясно';
  if ([1, 2, 3].includes(code)) return 'Облачно';
  if ([45, 48].includes(code)) return 'Туман';
  if ([51, 53, 55, 56, 57].includes(code)) return 'Морось';
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return 'Дождь';
  if ([71, 73, 75, 77, 85, 86].includes(code)) return 'Снег';
  if ([95, 96, 99].includes(code)) return 'Гроза';
  return 'Неизвестно';
}
