/*
 *
 * PeriodicReturnYearly actions
 *
 */

import { 
  LOAD_PERIODICRETURNYEARLY_DATA,
  LOAD_PERIODICRETURNYEARLY_DATA_SUCCESS,
  LOAD_PERIODICRETURNYEARLY_DATA_ERROR
} from './constants';

export function loadPeriodicReturnYearlyData(periodicReturnYearlyData) {
  return {
    type: LOAD_PERIODICRETURNYEARLY_DATA,
    periodicReturnYearlyData,
  };
}
export function loadPeriodicReturnYearlySuccess(periodicReturnYearlyData) {
  return {
    type: LOAD_PERIODICRETURNYEARLY_DATA_SUCCESS,
    periodicReturnYearlyData,
  };
}
export function loadPeriodicReturnYearlyError(error) {
  return {
    type: LOAD_PERIODICRETURNYEARLY_DATA_ERROR,
    error,
  };
}

