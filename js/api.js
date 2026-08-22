import DOM from './dom.js';
import { CityNotFoundError, NetworkError, ApiError, ResponseError } from './errors.js';
import { WEATHER_CODES, GEOCODING_API_URL, WEATHER_API_URL } from './constants.js';

async function fetchJson(url) {
  let response;

  try {
    response = await fetch(url);
  } catch {
    throw new NetworkError();
  }

  if (!response.ok) {
    throw new ApiError(response.status);
  }

  try {
    return await response.json();
  } catch {
    throw new ResponseError();
  }
}

export async function getCoordinates(city) {
  const params = new URLSearchParams({
    name: city,
    count: 1,
  });
  const url = `${GEOCODING_API_URL}?${params}`;

  const json = await fetchJson(url);

  if (!json.results?.length) {
    throw new CityNotFoundError();
  }

  const location = json.results[0];

  return {
    latitude: location.latitude,
    longitude: location.longitude,
    timezone: location.timezone,
    city: location.name,
    country: location.country,
  };
}

export async function getWeather(latitude, longitude, timezone) {
  const params = new URLSearchParams({
    latitude,
    longitude,
    timezone,
    current: [
      'temperature_2m',
      'apparent_temperature',
      'relative_humidity_2m',
      'pressure_msl',
      'wind_speed_10m',
      'visibility',
      'weather_code',
      'is_day',
    ],

    daily: ['temperature_2m_max', 'temperature_2m_min'],
  });

  const url = `${WEATHER_API_URL}?${params}`;

  const json = await fetchJson(url);

  return {
    temperatureNow: json.current.temperature_2m,
    temperatureMax: json.daily.temperature_2m_max[0],
    temperatureMin: json.daily.temperature_2m_min[0],

    weatherCode: json.current.weather_code,
    weatherDescription: WEATHER_CODES[json.current.weather_code] ?? 'Unknown weather',

    feelsLike: json.current.apparent_temperature,
    humidity: json.current.relative_humidity_2m,
    windSpeed: json.current.wind_speed_10m,
    visibility: json.current.visibility,
    pressure: json.current.pressure_msl,

    isDay: json.current.is_day === 1,
  };
}
