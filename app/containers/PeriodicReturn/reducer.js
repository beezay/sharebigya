/*
 *
 * PeriodicReturn reducer
 *
 */
import produce from 'immer';
import { 
  LOAD_PeriodicReturn_Data,
  LOAD_PeriodicReturn_Data_SUCCESS,
  LOAD_PeriodicReturn_Data_ERROR
} from './constants';

export const initialState = {
  periodicReturnData:[],
  loadingPeriodicReturn: false,
  errorPeriodicReturn: false,
};

/* eslint-disable default-case, no-param-reassign */
const periodicReturnReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case LOAD_PeriodicReturn_Data:
       return {
         ...state,
         loadingPeriodicReturn: true,
         errorPeriodicReturn: false,
       };
     case LOAD_PeriodicReturn_Data_SUCCESS:
       return {
         ...state,
         loadingPeriodicReturn: false,
         errorPeriodicReturn: false,
         periodicReturnData: action.periodicReturnData,
       };
     case LOAD_PeriodicReturn_Data_ERROR:
       return {
         ...state,
         loadingPeriodicReturn: false,
         errorPeriodicReturn: action.error,
       };
   }
  });

export default periodicReturnReducer;
