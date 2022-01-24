import { Reducer } from 'redux';
import { AppState } from '../../types/AppState';
import { GetHomeActions, HomeActionTypes } from './actions';

export const HomeReducer: Reducer<any> = (state = [], action: HomeActionTypes) => {
  switch (action.type) {
    case GetHomeActions.SAVE_HOME_PAGE:
      return action.page;
    default:
      return state;
  }
};

export const getHomePage = (state: AppState) => state.home;
