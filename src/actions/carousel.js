import axios from 'axios';
import {
  GET_CAROUSEL_WORLD_NEWS,
  GET_CAROUSEL_TECH_NEWS,
  GET_CAROUSEL_POLITICS_NEWS,
  GET_CAROUSEL_COUNTRY_NEWS,
  GET_CAROUSEL_BUSNIESS_NEWS,
  GET_CAROUSEL_SCIENCE_NEWS,
  GET_CAROUSEL_TRAVEL_NEWS,
  GET_CAROUSEL_ART_NEWS,
  GET_CAROUSEL_FASHION_NEWS,
  GET_CAROUSEL_SPORT_NEWS,
  GET_CAROUSEL_FOOD_NEWS,
  GET_CAROUSEL_HEALTH_NEWS,
  CAROUSEL_ERROR
} from './actions';

// get the carousel data for the world tab

const NEWS_API_KEY = process.env.REACT_APP_NEWS_API;
const SEC_NEWS_API = process.env.REACT_APP_NEWS_API_2;

export const getCarouselWorld = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${NEWS_API_KEY}`
    );

    dispatch({
      type: GET_CAROUSEL_WORLD_NEWS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: CAROUSEL_ERROR,
      payload: 'Server Error'
    });
  }
};

export const getCarouselTech = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=${NEWS_API_KEY}`
    );

    dispatch({
      type: GET_CAROUSEL_TECH_NEWS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: CAROUSEL_ERROR,
      payload: 'Server Error'
    });
  }
};

// export const getCarouselUs = () => async (dispatch) => {
//   try {
//     const res = await axios.get(
//       `https://api.nytimes.com/svc/topstories/v2/us.json?api-key=${NEWS_API_KEY}`
//     );

//     dispatch({
//       type: GET_CAROUSEL_US_NEWS,
//       payload: res.data
//     });
//   } catch (err) {
//     dispatch({
//       type: CAROUSEL_ERROR,
//       payload: 'Server Error'
//     });
//   }
// };

export const getCarouselPolitics = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=${NEWS_API_KEY}`
    );

    dispatch({
      type: GET_CAROUSEL_POLITICS_NEWS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: CAROUSEL_ERROR,
      payload: 'Server Error'
    });
  }
};

export const getCarouselBusniess = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://api.nytimes.com/svc/topstories/v2/business.json?api-key=${NEWS_API_KEY}`
    );

    dispatch({
      type: GET_CAROUSEL_BUSNIESS_NEWS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: CAROUSEL_ERROR,
      payload: 'Server Error'
    });
  }
};

// get the news according to the country you are currently in
export const getCarouselCountry = (country) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${SEC_NEWS_API}`
    );

    dispatch({
      type: GET_CAROUSEL_COUNTRY_NEWS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: CAROUSEL_ERROR,
      payload: 'Server Error'
    });
  }
};

export const getCarouselHealth = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://api.nytimes.com/svc/topstories/v2/health.json?api-key=${NEWS_API_KEY}`
    );

    dispatch({
      type: GET_CAROUSEL_HEALTH_NEWS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: CAROUSEL_ERROR,
      payload: 'Server Error'
    });
  }
};

export const getCarouselSports = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=${NEWS_API_KEY}`
    );

    dispatch({
      type: GET_CAROUSEL_SPORT_NEWS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: CAROUSEL_ERROR,
      payload: 'Server Error'
    });
  }
};

export const getCarouselArt = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${NEWS_API_KEY}`
    );

    dispatch({
      type: GET_CAROUSEL_ART_NEWS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: CAROUSEL_ERROR,
      payload: 'Server Error'
    });
  }
};

export const getCarouselFashion = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://api.nytimes.com/svc/topstories/v2/fashion.json?api-key=${NEWS_API_KEY}`
    );

    dispatch({
      type: GET_CAROUSEL_FASHION_NEWS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: CAROUSEL_ERROR,
      payload: 'Server Error'
    });
  }
};

export const getCarouselScience = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://api.nytimes.com/svc/topstories/v2/science.json?api-key=${NEWS_API_KEY}`
    );

    dispatch({
      type: GET_CAROUSEL_SCIENCE_NEWS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: CAROUSEL_ERROR,
      payload: 'Server Error'
    });
  }
};

export const getCarouselTravel = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=${NEWS_API_KEY}`
    );

    dispatch({
      type: GET_CAROUSEL_TRAVEL_NEWS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: CAROUSEL_ERROR,
      payload: 'Server Error'
    });
  }
};

export const getCarouselFood = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://api.nytimes.com/svc/topstories/v2/food.json?api-key=${NEWS_API_KEY}`
    );

    dispatch({
      type: GET_CAROUSEL_FOOD_NEWS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: CAROUSEL_ERROR,
      payload: 'Server Error'
    });
  }
};
