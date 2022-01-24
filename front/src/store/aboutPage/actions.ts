import axios from 'axios';
import { Dispatch } from 'redux';
import { ReduxActionType } from '../../types/GlobalTypes';

export enum GetAboutActions {
  SAVE_ABOUT_PAGE = 'SAVE_ABOUT_PAGE'
}

export const savePage = (page: any) => ({
  type: GetAboutActions.SAVE_ABOUT_PAGE as const,
  page
});

export const thunkFetchAbout = () => async (dispatch: Dispatch) => {
  try {
    const response = await axios.get(`http://web.straddle.pro:8080/api/about-page`);
    if (response.data) {
      dispatch(savePage(response.data.data.attributes));
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export type AboutActionTypes = ReduxActionType<typeof savePage>;
