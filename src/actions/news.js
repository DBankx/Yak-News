import axios from 'axios';
import {
  GET_NEWS,
  NEWS_ERROR,
  GET_SUGGESTIONS,
  GET_SEARCH,
  CLEAR_NEWS
} from './actions';

const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_2;

// get the news from the news api
export const getNews = (topic, page) => async (dispatch) => {
  // clear the news
  dispatch(clearNews());
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

// clear the news from the state
export const clearNews = () => async (dispatch) => {
  dispatch({
    type: CLEAR_NEWS
  });
};

// get suggestions from users text
export const getSuggestions = (topic) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://newsapi.org/v2/everything?q="${topic}"&page=1&pageSize=6&apiKey=${NEWS_API_KEY}`
    );

    dispatch({
      type: GET_SUGGESTIONS,
      payload: res.data
    });
  } catch (err) {
    dispatch({ type: NEWS_ERROR, payload: err.response });
  }
};

// get articles from searched topic
export const getSearchedNews = (topic, page, sortby) => async (dispatch) => {
  dispatch(clearNews());
  try {
    const res = await axios.get(
      `https://newsapi.org/v2/everything?q=${topic}&page=${page}&pageSize=12&sortBy=${sortby}&apiKey=${NEWS_API_KEY}`
    );

    dispatch({
      type: GET_SEARCH,
      payload: res.data
    });
  } catch (err) {
    dispatch({ type: NEWS_ERROR, payload: err.response });
  }
};
