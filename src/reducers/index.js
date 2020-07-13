import { combineReducers } from 'redux';
import weather from './weather';
import carousel from './carousel';
import news from './news';

const rootReducer = combineReducers({
  weather,
  carousel,
  news
});

export default rootReducer;
