import {
  GET_NEWS,
  NEWS_ERROR,
  GET_SUGGESTIONS,
  GET_SEARCH
} from '../actions/actions';

const initialState = {
  result: null,
  loading: true,
  suggestions: null,
  search: null,
  errors: []
};

const news = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_NEWS:
      return {
        ...state,
        result: payload,
        loading: false
      };
    case NEWS_ERROR:
      return {
        ...state,
        errors: [...state.errors, payload],
        loading: false
      };
    case GET_SUGGESTIONS:
      return {
        ...state,
        loading: false,
        suggestions: payload
      };
    case GET_SEARCH:
      return {
        ...state,
        search: payload,
        loading: false
      };
    default:
      return state;
  }
};

export default news;
