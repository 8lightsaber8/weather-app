const GEOCODING_API_URL = 'https://geocoding-api.open-meteo.com/v1/search';

const WEATHER_API_URL = 'https://api.open-meteo.com/v1/forecast';

const WEATHER_CODES = {
  0: 'Clear sky',
  1: 'Mainly clear',
  2: 'Partly cloudy',
  3: 'Overcast',

  45: 'Fog',
  48: 'Depositing rime fog',

  51: 'Light drizzle',
  53: 'Moderate drizzle',
  55: 'Dense drizzle',

  56: 'Light freezing drizzle',
  57: 'Dense freezing drizzle',

  61: 'Slight rain',
  63: 'Moderate rain',
  65: 'Heavy rain',

  66: 'Light freezing rain',
  67: 'Heavy freezing rain',

  71: 'Slight snow fall',
  73: 'Moderate snow fall',
  75: 'Heavy snow fall',

  77: 'Snow grains',

  80: 'Slight rain showers',
  81: 'Moderate rain showers',
  82: 'Violent rain showers',

  85: 'Slight snow showers',
  86: 'Heavy snow showers',

  95: 'Thunderstorm',
  96: 'Thunderstorm with slight hail',
  99: 'Thunderstorm with heavy hail',
};

const WEATHER_ICONS = {
  0: {
    day: 'clear-day',
    night: 'clear-night',
  },

  1: {
    day: 'partly-cloudy-day',
    night: 'partly-cloudy-night',
  },

  2: {
    day: 'partly-cloudy-day',
    night: 'partly-cloudy-night',
  },

  3: 'overcast',

  45: {
    day: 'fog-day',
    night: 'fog-night',
  },

  48: {
    day: 'fog-day',
    night: 'fog-night',
  },

  51: 'drizzle',
  53: 'drizzle',
  55: 'drizzle',

  56: 'sleet',
  57: 'sleet',

  61: 'rain',
  63: 'rain',
  65: 'rain',

  66: 'sleet',
  67: 'sleet',

  71: 'show',
  73: 'show',
  75: 'show',
  77: 'show',

  80: 'rain',
  81: 'rain',
  82: 'rain',

  85: 'show',
  86: 'show',

  95: 'thunderstorms',
  96: 'hail',
  99: 'thunderstorms-extreme',
};

export { WEATHER_CODES, WEATHER_ICONS, GEOCODING_API_URL, WEATHER_API_URL };
