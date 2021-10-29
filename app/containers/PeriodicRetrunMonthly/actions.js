/*
 *
 * PeriodicRetrunMonthly actions
 *
 */

import { 
  LOAD_PERIODICRETURN_MONTHLY_DATA,
  LOAD_PERIODICRETURN_MONTHLY_DATA_SUCCESS,
  LOAD_PERIODICRETURN_MONTHLY_DATA_ERROR
} from './constants';

export function loadPeriodicReturnMonthlyData(periodicReturnMonthlyData) {
  
  return {
    type: LOAD_PERIODICRETURN_MONTHLY_DATA,
    periodicReturnMonthlyData,
  };
}
export function loadPeriodicReturnMonthlySuccess(periodicReturnMonthlyData) {
  return {
    type: LOAD_PERIODICRETURN_MONTHLY_DATA_SUCCESS,
    periodicReturnMonthlyData,
  };
}
export function loadPeriodicReturnMonthlyError(error) {
  return {
    type: LOAD_PERIODICRETURN_MONTHLY_DATA_ERROR,
    error,
  };
}