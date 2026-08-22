import DOM from './dom.js';
import state from './state.js';
import { render } from './render.js';

import { getCoordinates, getWeather } from './api.js';

async function handleSearchSubmit(event) {
  event.preventDefault();

  const city = DOM.searchInput.value.trim();
  if (!city) return;

  state.status = 'loading';
  render();

  try {
    const { latitude, longitude, timezone, city: cityName, country } = await getCoordinates(city);

    const weather = await getWeather(latitude, longitude, timezone);

    state.weather = {
      ...weather,
      city: cityName,
      country,
    };

    state.status = 'weather';
    state.error = null;
    render();
  } catch (error) {
    console.error(error);

    state.weather = null;
    state.error = error;
    state.status = 'error';
    render();
  }
}

export function setupEvents() {
  DOM.searchForm.addEventListener('submit', handleSearchSubmit);
}
