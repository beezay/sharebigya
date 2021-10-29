/*
 *
 * DailyVolReturn reducer
 *
 */
import produce from 'immer';
import { 

  LOAD_DAILY_VOL_RETURN_DATA,
  LOAD_DAILY_VOL_RETURN_DATA_SUCCESS,
  LOAD_DAILY_VOL_RETURN_DATA_ERROR
 } from './constants';

export const initialState = {
  dailyVolReturnData:[],
  loadingDailyVolReturn: false,
  errorDailyVolReturn: false,

};

/* eslint-disable default-case, no-param-reassign */
const dailyVolReturnReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
       case LOAD_DAILY_VOL_RETURN_DATA:
        return {
          ...state,
          loadingDailyVolReturn: true,
          errorDailyVolReturn: false,
        };
      case LOAD_DAILY_VOL_RETURN_DATA_SUCCESS:
        return {
          ...state,
          loadingDailyVolReturn: false,
          errorDailyVolReturn: false,
          dailyVolReturnData: action.dailyVolReturnData,
        };
      case LOAD_DAILY_VOL_RETURN_DATA_ERROR:
        return {
          ...state,
          loadingDailyVolReturn: false,
          errorDailyVolReturn: action.error,
        };
    }
  });

export default dailyVolReturnReducer;
