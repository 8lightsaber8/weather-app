import state from './state.js';
import DOM from './dom.js';
import { WEATHER_ICONS } from './constants.js';

// empty, loading, weather, error
function showState(stateToShow) {
  Object.entries(DOM.states).forEach(([key, value]) => {
    if (key === stateToShow) {
      value.classList.remove('hidden');
    } else {
      value.classList.add('hidden');
    }
  });
}

function setIcon(weatherState) {
  let icon = WEATHER_ICONS[weatherState.weatherCode];

  if (typeof icon === 'object') {
    if (weatherState.isDay) {
      icon = icon.day;
    } else {
      icon = icon.night;
    }
  }

  DOM.weather.icon.src = `./icons/${icon ?? 'cloudy'}.svg`;
  DOM.weather.icon.alt = weatherState.weatherDescription;
}

function renderWeather(weatherState) {
  setIcon(weatherState);

  DOM.weather.city.textContent = weatherState.city;
  DOM.weather.country.textContent = weatherState.country;

  const temperatureNow = Math.round(weatherState.temperatureNow);
  DOM.weather.temperatureNow.textContent = temperatureNow;
  DOM.weather.temperatureNow.value = temperatureNow;

  const temperatureMax = Math.round(weatherState.temperatureMax);
  DOM.weather.temperatureMax.textContent = temperatureMax;
  DOM.weather.temperatureMax.value = temperatureMax;

  const temperatureMin = Math.round(weatherState.temperatureMin);
  DOM.weather.temperatureMin.textContent = temperatureMin;
  DOM.weather.temperatureMin.value = temperatureMin;

  DOM.weather.weatherDescription.textContent = weatherState.weatherDescription;

  const feelsLike = Math.round(weatherState.feelsLike);
  DOM.weather.feelsLike.textContent = feelsLike;
  DOM.weather.feelsLike.value = feelsLike;

  DOM.weather.humidity.textContent = weatherState.humidity;
  DOM.weather.humidity.value = weatherState.humidity;

  const windSpeed = Math.round(weatherState.windSpeed);
  DOM.weather.windSpeed.textContent = windSpeed;
  DOM.weather.windSpeed.value = windSpeed;

  const visibility = weatherState.visibility / 1000;
  DOM.weather.visibility.textContent = visibility;
  DOM.weather.visibility.value = visibility;

  DOM.weather.pressure.textContent = weatherState.pressure;
  DOM.weather.pressure.value = weatherState.pressure;
}

function renderError(error) {
  DOM.error.errorStateTitle.textContent = error?.message || 'Something went wrong';
  DOM.error.messageHowToSolveTheProblem.textContent =
    error?.solution || 'Please check your connection or try again later.';
}

export function render() {
  switch (state.status) {
    case 'empty':
      showState('empty');
      break;

    case 'loading':
      showState('loading');
      break;

    case 'weather':
      renderWeather(state.weather);
      showState('weather');
      break;

    case 'error':
      renderError(state.error);
      showState('error');
      break;
  }
}
