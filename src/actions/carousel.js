import axios from 'axios';
import {
  GET_CAROUSEL_WORLD_NEWS,
  GET_CAROUSEL_TRENDING_NEWS,
  CAROUSEL_ERROR
} from './actions';

// get the carousel data for the world tab

const NEWS_API_KEY = process.env.REACT_APP_NEWS_API;

export const getCarouselWorld = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        'content-type': 'application/octet-stream',
        'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
        'x-rapidapi-key': '10d9159985mshd96dbd53b59f696p1c4b5ejsnc5325ed3243a',
        useQueryString: true
      },
      params: {
        autoCorrect: 'true',
        pageNumber: '1',
        pageSize: '10',
        q: 'world news',
        safeSearch: 'false'
      }
    };

    const res = await axios.get(
      'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/NewsSearchAPI',
      config
    );

    dispatch({
      type: GET_CAROUSEL_WORLD_NEWS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: CAROUSEL_ERROR,
      payload: err.response.data
    });
  }
};

export const getCarouselTrending = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${NEWS_API_KEY}`
    );

    dispatch({
      type: GET_CAROUSEL_TRENDING_NEWS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: CAROUSEL_ERROR,
      payload: err.response.data
    });
  }
};
