/*
 *
 * BuyCalculator actions
 *
 */

import { 
  LOAD_BUY_SELL_CALC_DATA,
  LOAD_BUY_SELL_CALC_SUCCESS,
  LOAD_BUY_SELL_CALC_ERROR,
} from './constants';


export function loadBuySellCalcData(buySellCalcData) {
  return {
    type: LOAD_BUY_SELL_CALC_DATA,
    buySellCalcData,
  };
}

export function loadBuySellCalcDataSuccess(buySellCalcData) {
  return {
    type: LOAD_BUY_SELL_CALC_SUCCESS,
    buySellCalcData,
  };
}
export function loadBuySellCalcDataError(error) {
  return {
    type: LOAD_BUY_SELL_CALC_ERROR,
    error,
  };
}