export class WeatherError extends Error {
  constructor(message, solution) {
    super(message);
    this.solution = solution;
    this.name = 'WeatherError';
  }
}

export class CityNotFoundError extends WeatherError {
  constructor() {
    super('City not found', 'Check the spelling or try searching for a different city.');
    this.name = 'CityNotFoundError';
  }
}

export class NetworkError extends WeatherError {
  constructor() {
    super('Network error', 'Check your internet connection.');
    this.name = 'NetworkError';
  }
}

export class ApiError extends WeatherError {
  constructor(status) {
    super('Weather service error', 'Weather service is temporarily unavailable.');

    this.name = 'ApiError';
    this.status = status;
  }
}

export class ResponseError extends WeatherError {
  constructor() {
    super('Invalid server response', 'The weather service returned invalid data. Please try again later.');
    this.name = 'ResponseError';
  }
}
