/*
 *
 * PeriodicReturnBar reducer
 *
 */
import produce from 'immer';
import { 
LOAD_PERIODIC_RETURNBAR_DATA,
LOAD_PERIODIC_RETURNBAR_SUCCESS,
LOAD_PERIODIC_RETURNBAR_ERROR

 } from './constants';

export const initialState = {
  periodicReturnBarData:[],
  loadingPeriodicReturnBar: false,
  errorPeriodicReturnBar: false
};

/* eslint-disable default-case, no-param-reassign */
const periodicReturnBarReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
   switch (action.type) {
       case LOAD_PERIODIC_RETURNBAR_DATA:
  
        return {
          ...state,
          loadingPeriodicReturnBar: true,
          errorPeriodicReturnBar: false,
        };
      case LOAD_PERIODIC_RETURNBAR_SUCCESS:
        return {
          ...state,
          loadingPeriodicReturnBar: false,
          errorPeriodicReturnBar: false,
          periodicReturnBarData: action.periodicReturnBarData,
        };
      case LOAD_PERIODIC_RETURNBAR_ERROR:

        return {
          ...state,
          loadingPeriodicReturnBar: false,
          errorPeriodicReturnBar: action.error,
        };
    }
  });

export default periodicReturnBarReducer;
