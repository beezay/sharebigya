/*
 *
 * PeriodicReturn actions
 *
 */

import { 
  LOAD_PeriodicReturn_Data,
  LOAD_PeriodicReturn_Data_SUCCESS,
  LOAD_PeriodicReturn_Data_ERROR
} from './constants';

export function loadPeriodicReturnData(periodicReturnData) {
  return {
    type: LOAD_PeriodicReturn_Data,
    periodicReturnData,
  };
}
export function loadPeriodicReturnSuccess(periodicReturnData) {
  return {
    type: LOAD_PeriodicReturn_Data_SUCCESS,
    periodicReturnData,
  };
}
export function loadPeriodicReturnError(error) {
  return {
    type: LOAD_PeriodicReturn_Data_ERROR,
    error,
  };
}
