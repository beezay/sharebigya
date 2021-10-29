/*
 *
 * BarChart actions
 *
 */

import {
  LOAD_TOP_STOCKS_DATA,
  LOAD_TOP_STOCKS_DATA_SUCCESS,
  LOAD_TOP_STOCKS_DATA_ERROR
 } from './constants';


export function loadTopStocksData(topStocksData){
  return{
    type: LOAD_TOP_STOCKS_DATA,
    topStocksData,
  }
}

export function loadTopStocksDataSuccess(topStocksData){
  return{
    type: LOAD_TOP_STOCKS_DATA_SUCCESS,
    topStocksData,
  }
}

export function loadTopStocksDataError(error){
  return{
    type: LOAD_TOP_STOCKS_DATA_ERROR,
    error,
  }
}