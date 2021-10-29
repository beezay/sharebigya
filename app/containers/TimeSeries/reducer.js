/*
 *
 * TimeSeries reducer
 *
 */
import produce from 'immer';
import { 
  LOAD_TIME_SERIES_DATA,
  LOAD_TIME_SERIES_DATA_SUCCESS,
  LOAD_TIME_SERIES_ERROR,
   } from './constants';

export const initialState = {
  timeSeriesData:[],
  loadingtimeSeriesData: false,
  errorTimeSeries: false
};

/* eslint-disable default-case, no-param-reassign */
const timeSeriesReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
   switch (action.type) {
      case LOAD_TIME_SERIES_DATA:
        return {
          ...state,
          loadingtimeSeriesData: true,
          errorTimeSeries: false,
        };
      case LOAD_TIME_SERIES_DATA_SUCCESS:
        return {
          ...state,
          loadingtimeSeriesData: false,
          errorTimeSeries: false,
          timeSeriesData: action.timeSeriesData,
        };
      case LOAD_TIME_SERIES_ERROR:
        return {
          ...state,
          loadingtimeSeriesData: false,
          errorTimeSeries: action.error,
        };
    }
  });

export default timeSeriesReducer;
