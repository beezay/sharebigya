/*
 *
 * TimeSeries actions
 *
 */

import { 
  LOAD_TIME_SERIES_DATA,
  LOAD_TIME_SERIES_DATA_SUCCESS,
  LOAD_TIME_SERIES_ERROR,
   } from './constants';

export function loadTimeSeriesData(timeSeriesData) {
  return {
    type: LOAD_TIME_SERIES_DATA,
    timeSeriesData,
  };
}

export function loadTimeSeriesSuccess(timeSeriesData) {
 
  return {
    type: LOAD_TIME_SERIES_DATA_SUCCESS,
    timeSeriesData,
  };
}

export function loadTimeSeriesError(error) {
  return {
    type: LOAD_TIME_SERIES_ERROR,
    error,
  };
}