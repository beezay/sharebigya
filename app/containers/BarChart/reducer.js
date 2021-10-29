/*
 *
 * BarChart reducer
 *
 */
import produce from 'immer';
import {
  LOAD_TOP_STOCKS_DATA,
  LOAD_TOP_STOCKS_DATA_SUCCESS,
  LOAD_TOP_STOCKS_DATA_ERROR
 } from './constants';

export const initialState = {
    topStocksData:[],
  loadingTopStocksData: false,
  errorTopStocks: false
};

/* eslint-disable default-case, no-param-reassign */
const barChartReducer = (state = initialState, action) =>
 produce(state, (/* draft */) => {
   switch (action.type) {
      case LOAD_TOP_STOCKS_DATA:
        return {
          ...state,
          loadingTopStocksData: true,
          errorTopStocks: false,
        };
      case LOAD_TOP_STOCKS_DATA_SUCCESS:
        return {
          ...state,
          loadingTopStocksData: false,
          errorTopStocks: false,
          topStocksData: action.topStocksData,
        };
      case LOAD_TOP_STOCKS_DATA_ERROR:
        return {
          ...state,
          loadingTopStocksData: false,
          errorTopStocks: action.error,
        };
    }
  });

export default barChartReducer;
