import axios from 'axios';
import { Dispatch } from 'redux';
import { ReduxActionType } from '../../types/GlobalTypes';

export enum GetTeamActions {
  SAVE_TEAM_PAGE = 'SAVE_TEAM_PAGE'
}

export const savePage = (page: any) => ({
  type: GetTeamActions.SAVE_TEAM_PAGE as const,
  page
});

export const thunkFetchTeam = () => async (dispatch: Dispatch) => {
  try {
    const response = await axios.get(`http://web.straddle.pro:8080/api/team-page`);
    if (response.data) {
      dispatch(savePage(response.data.data.attributes));
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export type TeamActionTypes = ReduxActionType<typeof savePage>;
