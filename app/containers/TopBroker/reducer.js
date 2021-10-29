/*
 *
 * TopBroker reducer
 *
 */
import produce from 'immer';
import { LOAD_TOP_BROKERS_DATA,
LOAD_TOP_BROKERS_DATA_SUCCESS,
LOAD_TOP_BROKERS_DATA_ERROR,
 } from './constants';

export const initialState = {
  topBrokersData:[],
  loadingTopBrokersData: false,
  errorTopBrokers: false
};

/* eslint-disable default-case, no-param-reassign */
const topBrokerReducer = (state = initialState, action) =>
 produce(state, (/* draft */) => {
   switch (action.type) {
      case LOAD_TOP_BROKERS_DATA:
        return {
          ...state,
          loadingTopBrokersData: true,
          errorTopBrokers: false,
        };
      case LOAD_TOP_BROKERS_DATA_SUCCESS:
        return {
          ...state,
          loadingTopBrokersData: false,
          errorTopBrokers: false,
          topBrokersData: action.topBrokersData,
        };
      case LOAD_TOP_BROKERS_DATA_ERROR:
        return {
          ...state,
          loadingTopBrokersData: false,
          errorTopBrokers: action.error,
        };
    }
  });


export default topBrokerReducer;
