/*
 *
 * PeriodicReturnWeekly actions
 *
 */

import { 
  LOAD_PERIODICRETURNWEEKLY_DATA,
  LOAD_PERIODICRETURNWEEKLY_DATA_SUCCESS,
  LOAD_PERIODICRETURNWEEKLY_DATA_ERROR
} from './constants';

export function loadPeriodicReturnWeeklyData(periodicReturnWeeklyData) {
  return {
    type: LOAD_PERIODICRETURNWEEKLY_DATA,
    periodicReturnWeeklyData,
  };
}
export function loadPeriodicReturnWeeklySuccess(periodicReturnWeeklyData) {
  return {
    type: LOAD_PERIODICRETURNWEEKLY_DATA_SUCCESS,
    periodicReturnWeeklyData,
  };
}
export function loadPeriodicReturnWeeklyError(error) {
  return {
    type: LOAD_PERIODICRETURNWEEKLY_DATA_ERROR,
    error,
  };
}
