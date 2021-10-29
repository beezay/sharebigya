/*
 *
 * BuyCalculator reducer
 *
 */
import produce from 'immer';
import {
  LOAD_BUY_SELL_CALC_DATA,
  LOAD_BUY_SELL_CALC_SUCCESS,
  LOAD_BUY_SELL_CALC_ERROR,
 } from './constants';

export const initialState = {
  buySellCalcResult: [],
  loadingBuySellCalc: false,
  errorBuySellCalc: false,
};

/* eslint-disable default-case, no-param-reassign */
const buyCalculatorReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case LOAD_BUY_SELL_CALC_DATA:
        return {
          ...state,
          loadingBuySellCalc: true,
          errorBuySellCalc: false,
        };
      case LOAD_BUY_SELL_CALC_SUCCESS:
        return {
          ...state,
          loadingBuySellCalc: false,
          errorBuySellCalc: false,
          buySellCalcResult: action,
        };
      case LOAD_BUY_SELL_CALC_ERROR:
        return {
          ...state,
          loadingBuySellCalc: false,
          errorBuySellCalc: action.error,
        };
      default:
        return state;
    }
  });

export default buyCalculatorReducer;
