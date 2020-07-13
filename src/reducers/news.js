import { GET_NEWS, NEWS_ERROR } from '../actions/actions';

const initialState = {
  result: null,
  loading: true,
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
    default:
      return state;
  }
};

export default news;
