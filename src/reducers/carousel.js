import {
  GET_CAROUSEL_WORLD_NEWS,
  GET_CAROUSEL_TECH_NEWS,
  GET_CAROUSEL_POLITICS_NEWS,
  GET_CAROUSEL_COUNTRY_NEWS,
  GET_CAROUSEL_SCIENCE_NEWS,
  GET_CAROUSEL_TRAVEL_NEWS,
  GET_CAROUSEL_SPORT_NEWS,
  GET_CAROUSEL_BUSNIESS_NEWS,
  GET_CAROUSEL_HEALTH_NEWS,
  GET_CAROUSEL_ART_NEWS,
  GET_CAROUSEL_FASHION_NEWS,
  GET_CAROUSEL_FOOD_NEWS,
  CAROUSEL_ERROR
} from '../actions/actions';

const initialState = {
  loading: true,
  world: null,
  business: null,
  sports: null,
  art: null,
  books: null,
  fashion: null,
  science: null,
  travel: null,
  food: null,
  health: null,
  tech: null,
  country: null,
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
    case GET_CAROUSEL_TECH_NEWS:
      return {
        ...state,
        tech: payload,
        loading: false
      };
    case GET_CAROUSEL_COUNTRY_NEWS:
      return {
        ...state,
        country: payload,
        loading: false
      };
    case GET_CAROUSEL_SPORT_NEWS:
      return {
        ...state,
        sports: payload,
        loading: false
      };
    case GET_CAROUSEL_POLITICS_NEWS:
      return {
        ...state,
        politics: payload,
        loading: false
      };
    case GET_CAROUSEL_SCIENCE_NEWS:
      return {
        ...state,
        science: payload,
        loading: false
      };
    case GET_CAROUSEL_TRAVEL_NEWS:
      return {
        ...state,
        travel: payload,
        loading: false
      };
    case GET_CAROUSEL_FOOD_NEWS:
      return {
        ...state,
        food: payload,
        loading: false
      };
    case GET_CAROUSEL_HEALTH_NEWS:
      return {
        ...state,
        health: payload,
        loading: false
      };
    case GET_CAROUSEL_BUSNIESS_NEWS:
      return {
        ...state,
        busniess: payload,
        loading: false
      };
    case GET_CAROUSEL_ART_NEWS:
      return {
        ...state,
        art: payload,
        loading: false
      };
    case GET_CAROUSEL_FASHION_NEWS:
      return {
        ...state,
        fashion: payload,
        loading: false
      };
    case CAROUSEL_ERROR:
      return {
        ...state,
        errors: [...state.errors, payload],
        loading: false
      };
    default:
      return state;
  }
};

export default carousel;
