import { GET_WEATHER, WEATHER_ERROR } from '../actions/actions';

const initialState = {
  lon: null,
  lat: null,
  weatherData: null,
  loading: true,
  error: null
};

// reducer for acquiring the weather
const weather = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_WEATHER:
      return {
        ...state,
        lon: payload.lon,
        lat: payload.lat,
        weatherData: payload.weatherInfo,
        loading: false
      };
    case WEATHER_ERROR:
      return {
        ...state,
        loading: false,
        error: payload
      };
    default:
      return state;
  }
};

export default weather;
