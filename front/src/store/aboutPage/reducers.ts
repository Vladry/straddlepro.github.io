import { Reducer } from 'redux';
import { AppState } from '../../types/AppState';
import { GetAboutActions, AboutActionTypes } from './actions';

export const AboutReducer: Reducer<any> = (state = [], action: AboutActionTypes) => {
  switch (action.type) {
    case GetAboutActions.SAVE_ABOUT_PAGE:
      return action.page;
    default:
      return state;
  }
};

export const getAboutPage = (state: AppState) => state.about;
