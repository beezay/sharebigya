/*
 *
 * TopBroker actions
 *
 */

import {
  LOAD_TOP_BROKERS_DATA,
  LOAD_TOP_BROKERS_DATA_SUCCESS,
  LOAD_TOP_BROKERS_DATA_ERROR
 } from './constants';


export function loadTopBrokersData(topBrokersData){
  return{
    type: LOAD_TOP_BROKERS_DATA,
    topBrokersData,
  }
}

export function loadTopBrokersDataSuccess(topBrokersData){
  return{
    type: LOAD_TOP_BROKERS_DATA_SUCCESS,
    topBrokersData,
  }
}

export function loadTopBrokersDataError(error){
  return{
    type: LOAD_TOP_BROKERS_DATA_ERROR,
    error,
  }
}