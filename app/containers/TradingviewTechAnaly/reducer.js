/*
 *
 * TradingviewTechAnaly reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION } from './constants';

import { 
  LOAD_TRADING_VIEW_DATA,
  LOAD_TRADING_VIEW_DATA_SUCCESS,
  LOAD_TRADING_VIEW_ERROR,
   } from './constants';

export const initialState = {
  tradingViewData:[],
  loadingtradingViewData: false,
  errorTradingView: false,
};


/* eslint-disable default-case, no-param-reassign */
const tradingviewTechAnalyReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    
    switch (action.type) {
      case LOAD_TRADING_VIEW_DATA:
        return {
          ...state,
          loadingtradingViewData: true,
          errorTradingView: false,
        };
      case LOAD_TRADING_VIEW_DATA_SUCCESS:
        
        return {
          ...state,
          loadingtradingViewData: false,
          errorTradingView: false,
          tradingViewData: action.tradingViewData,
        };
      case LOAD_TRADING_VIEW_ERROR:
        return {
          ...state,
          loadingtradingViewData: false,
          errorTradingView: action.error,
        };
    }
  });

export default tradingviewTechAnalyReducer;
