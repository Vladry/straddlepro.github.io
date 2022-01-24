import { Reducer } from 'redux';
import { AppState } from '../../types/AppState';
import { GetTeamActions, TeamActionTypes } from './actions';

export const TeamReducer: Reducer<any> = (state = [], action: TeamActionTypes) => {
  switch (action.type) {
    case GetTeamActions.SAVE_TEAM_PAGE:
      return action.page;
    default:
      return state;
  }
};

export const getTeamPage = (state: AppState) => state.team;
