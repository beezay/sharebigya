/*
 *
 * DailyVolReturn actions
 *
 */

import { 

  LOAD_DAILY_VOL_RETURN_DATA,
  LOAD_DAILY_VOL_RETURN_DATA_SUCCESS,
  LOAD_DAILY_VOL_RETURN_DATA_ERROR
 } from './constants';

export function loadDailyVolReturnData(dailyVolReturnData) {
  return {
    type: LOAD_DAILY_VOL_RETURN_DATA,
    dailyVolReturnData,
  };
}

export function loadDailyVolReturnSuccess(dailyVolReturnData) {
  return {
    type: LOAD_DAILY_VOL_RETURN_DATA_SUCCESS,
    dailyVolReturnData,
  };
}
export function loadDailyVolReturnError(error) {
  return {
    type: LOAD_DAILY_VOL_RETURN_DATA_ERROR,
    error,
  };
}

