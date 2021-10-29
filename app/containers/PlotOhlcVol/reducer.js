/*
 *
 * PlotOhlcVol reducer
 *
 */
import produce from 'immer';
import { 

  LOAD_OHLC_VOL_DATA,
  LOAD_OHLC_VOL_DATA_SUCCESS,
  LOAD_OHLC_VOL_DATA_ERROR
 } from './constants';

export const initialState = {
  ohlcVolData:[],
  loadingOhlcVol: false,
  errorOhlcVol: false,

};

/* eslint-disable default-case, no-param-reassign */
const plotOhlcVolReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
       case LOAD_OHLC_VOL_DATA:
        return {
          ...state,
          loadingOhlcVol: true,
          errorOhlcVol: false,
        };
      case LOAD_OHLC_VOL_DATA_SUCCESS:
        return {
          ...state,
          loadingOhlcVol: false,
          errorOhlcVol: false,
          ohlcVolData: action.ohlcVolData,
        };
      case LOAD_OHLC_VOL_DATA_ERROR:
        return {
          ...state,
          loadingOhlcVol: false,
          errorOhlcVol: action.error,
        };
    }
  });

export default plotOhlcVolReducer;
