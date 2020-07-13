import axios from 'axios';
import { GET_NEWS, NEWS_ERROR, GET_SUGGESTIONS } from './actions';

const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_2;

// get the news from the news api
export const getNews = (topic, page) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://newsapi.org/v2/everything?q=${topic}&page=${page}&pageSize=9&apiKey=${NEWS_API_KEY}`
    );

    dispatch({
      type: GET_NEWS,
      payload: res.data
    });
  } catch (err) {
    dispatch({ type: NEWS_ERROR, payload: err.response });
  }
};

export const getSuggestions = (topic) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://newsapi.org/v2/everything?q="${topic}"&page=6&pageSize=9&apiKey=${NEWS_API_KEY}`
    );

    dispatch({
      type: GET_SUGGESTIONS,
      payload: res.data
    });
  } catch (err) {
    dispatch({ type: NEWS_ERROR, payload: err.response });
  }
};
