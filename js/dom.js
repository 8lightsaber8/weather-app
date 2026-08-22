const DOM = {
  searchForm: document.querySelector('.search-form'),
  searchInput: document.querySelector('.search-input'),
  searchButton: document.querySelector('.search-button'),

  states: {
    loading: document.querySelector('.loading-state'),
    error: document.querySelector('.error-state'),
    empty: document.querySelector('.empty-state'),
    weather: document.querySelector('.weather-card'),
  },

  error: {
    errorStateTitle: document.querySelector('#error-state-title'),
    messageHowToSolveTheProblem: document.querySelector('[data-message-how-to-solve-the-problem]'),
  },

  weather: {
    city: document.querySelector('#city-name'),
    country: document.querySelector('.country-name'),

    icon: document.querySelector('[data-weather-icon]'),

    temperatureNow: document.querySelector('[data-temperature-now]'),
    temperatureMax: document.querySelector('[data-temperature-max]'),
    temperatureMin: document.querySelector('[data-temperature-min]'),

    weatherDescription: document.querySelector('.weather-description'),
    feelsLike: document.querySelector('[data-feels-like]'),
    humidity: document.querySelector('[data-humidity]'),
    windSpeed: document.querySelector('[data-wind-speed]'),
    visibility: document.querySelector('[data-visibility]'),
    pressure: document.querySelector('[data-pressure]'),
  },
};

export default DOM;
