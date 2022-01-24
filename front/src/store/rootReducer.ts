import { combineReducers } from 'redux';
import { AboutReducer } from './aboutPage/reducers';
import { TeamReducer } from './teamPage/reducers';
import { HomeReducer } from './homePage/reducers';

export const rootReducer = combineReducers({
  team: TeamReducer,
  home: HomeReducer,
  about: AboutReducer
});

export default rootReducer;
