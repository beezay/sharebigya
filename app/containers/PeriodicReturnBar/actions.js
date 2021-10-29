/*
 *
 * PeriodicReturnBar actions
 *
 */

import { 
LOAD_PERIODIC_RETURNBAR_DATA,
LOAD_PERIODIC_RETURNBAR_SUCCESS,
LOAD_PERIODIC_RETURNBAR_ERROR
 } from './constants';
 
export function loadPeriodicReturnBarData(periodicReturnBarData) {
  return {
    type: LOAD_PERIODIC_RETURNBAR_DATA,
    periodicReturnBarData,
  };
}

export function loadPeriodicReturnSuccess(periodicReturnBarData) {

  return {
    type: LOAD_PERIODIC_RETURNBAR_SUCCESS,
    periodicReturnBarData,
  };
}
export function loadPeriodicReturnError(error) {
  return {
    type: LOAD_PERIODIC_RETURNBAR_ERROR,
    error,
  };
}
