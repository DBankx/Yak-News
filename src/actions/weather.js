import { GET_WEATHER, WEATHER_ERROR } from './actions';
import axios from 'axios';
import React from 'react';

// get the users longitude and latitude, then get the weather from the api

export const getWeather = () => async (dispatch) => {
  if (window.navigator.geolocation) {
    window.navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { longitude, latitude } = position.coords;

          const API_KEY = process.env.REACT_APP_WEATHER_API;

          const res = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
          );

          dispatch({
            type: GET_WEATHER,
            payload: { lon: longitude, lat: latitude, weatherInfo: res.data }
          });
        } catch (err) {
          dispatch({
            type: WEATHER_ERROR,
            payload: 'Server Error'
          });
        }
      },
      (err) => {
        console.log(err);
        dispatch({
          type: WEATHER_ERROR,
          payload: 'No location data'
        });
      }
    );
  }
};
