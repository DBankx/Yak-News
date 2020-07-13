import { GET_NEWS, NEWS_ERROR, GET_SUGGESTIONS } from '../actions/actions';

const initialState = {
  result: null,
  loading: true,
  suggestions: null,
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
    default:
      return state;
  }
};

export default news;
