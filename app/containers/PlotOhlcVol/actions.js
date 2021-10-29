/*
 *
 * PlotOhlcVol actions
 *
 */

import { 

  LOAD_OHLC_VOL_DATA,
  LOAD_OHLC_VOL_DATA_SUCCESS,
  LOAD_OHLC_VOL_DATA_ERROR
 } from './constants';

export function loadOhlcVolData(ohlcVolData) {
  return {
    type: LOAD_OHLC_VOL_DATA,
    ohlcVolData,
  };
}

export function loadOhlcVolSuccess(ohlcVolData) {
  return {
    type: LOAD_OHLC_VOL_DATA_SUCCESS,
    ohlcVolData,
  };
}
export function loadOhlcVolError(error) {
  return {
    type: LOAD_OHLC_VOL_DATA_ERROR,
    error,
  };
}
