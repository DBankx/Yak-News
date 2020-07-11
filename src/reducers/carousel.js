import {
  GET_CAROUSEL_WORLD_NEWS,
  GET_CAROUSEL_TRENDING_NEWS,
  CAROUSEL_ERROR
} from '../actions/actions';

const initialState = {
  loading: true,
  trending: null,
  world: null,
  business: null,
  sports: null,
  art: null,
  books: null,
  science: null,
  travel: null,
  food: null,
  health: null,
  tech: null,
  us: null,
  errors: []
};

const carousel = (state = initialState, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case GET_CAROUSEL_WORLD_NEWS:
      return {
        ...state,
        world: payload,
        loading: false
      };
    case CAROUSEL_ERROR:
      return {
        ...state,
        errors: payload,
        loading: false
      };
    case GET_CAROUSEL_TRENDING_NEWS:
      return {
        ...state,
        trending: payload,
        loading: false
      };
    default:
      return state;
  }
};

export default carousel;
