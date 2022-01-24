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
    const response = await axios.get(`http://localhost:8080/api/about-page`, {
      headers: { 'Access-Control-Allow-Origin': '*' }
    });
    if (response.data) {
      dispatch(savePage(response.data));
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export type AboutHomeTypes = ReduxActionType<typeof savePage>;
