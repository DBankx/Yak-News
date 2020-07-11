import { combineReducers } from 'redux';
import weather from './weather';
import carousel from './carousel';

const rootReducer = combineReducers({
  weather,
  carousel
});

export default rootReducer;
