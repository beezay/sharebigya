/*
 *
 * TradingviewTechAnaly actions
 *
 */

import { LOAD_TRADING_VIEW_DATA,
  LOAD_TRADING_VIEW_DATA_SUCCESS,
  LOAD_TRADING_VIEW_ERROR,

} from './constants';



export function loadTradingViewData(tradingViewData) {
  return {
    type: LOAD_TRADING_VIEW_DATA,
    tradingViewData,
  };
}

export function loadTradingViewSuccess(tradingViewData) {
  return {
    type: LOAD_TRADING_VIEW_DATA_SUCCESS,
    tradingViewData,
  };
}

export function loadTradingViewError(error) {
  return {
    type: LOAD_TRADING_VIEW_ERROR,
    error,
  };
}