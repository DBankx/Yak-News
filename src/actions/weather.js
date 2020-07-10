import { GET_WEATHER, WEATHER_ERROR } from './actions';
import axios from 'axios';
import React from 'react';

// get the users longitude and latitude, then get the weather from the api
export const getWeather = () => async (dispatch) => {
  if (window.navigator.geolocation) {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        const { longitude, latitude } = position.coords;
        dispatch({
          type: GET_WEATHER,
          payload: { lon: longitude, lat: latitude }
        });
      },
      (err) => {
        console.log(err);
        dispatch({
          type: WEATHER_ERROR,
          payload: 'Couldnt get values'
        });
      }
    );
  }
};
