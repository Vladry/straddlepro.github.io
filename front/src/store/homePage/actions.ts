import axios from 'axios';
import { Dispatch } from 'redux';
import { ReduxActionType } from '../../types/GlobalTypes';

export enum GetHomeActions {
  SAVE_HOME_PAGE = 'SAVE_HOME_PAGE'
}

export const savePage = (page: any) => ({
  type: GetHomeActions.SAVE_HOME_PAGE as const,
  page
});

export const thunkFetchHome = () => async (dispatch: Dispatch) => {
  try {
    const response = await axios.get(`http://web.straddle.pro:8080/api/home-page`);
    if (response.data) {
      dispatch(savePage(response.data.data.attributes));
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export type HomeActionTypes = ReduxActionType<typeof savePage>;
