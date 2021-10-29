/*
 *
 * PeriodicReturnWeekly reducer
 *
 */
import produce from 'immer';
import { 
  LOAD_PERIODICRETURNWEEKLY_DATA,
  LOAD_PERIODICRETURNWEEKLY_DATA_SUCCESS,
  LOAD_PERIODICRETURNWEEKLY_DATA_ERROR
} from './constants';

export const initialState = {
  periodicReturnWeeklyData:[],
  loadingPeriodicReturnWeekly: false,
  errorPeriodicReturnWeekly: false,
};

/* eslint-disable default-case, no-param-reassign */
const periodicReturnWeeklyReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case LOAD_PERIODICRETURNWEEKLY_DATA:
       return {
         ...state,
         loadingPeriodicReturnWeekly: true,
         errorPeriodicReturnWeekly: false,
       };
     case LOAD_PERIODICRETURNWEEKLY_DATA_SUCCESS:
       return {
         ...state,
         loadingPeriodicReturnWeekly: false,
         errorPeriodicReturnWeekly: false,
         periodicReturnWeeklyData: action.periodicReturnWeeklyData,
       };
     case LOAD_PERIODICRETURNWEEKLY_DATA_ERROR:
       return {
         ...state,
         loadingPeriodicReturnWeekly: false,
         errorPeriodicReturnWeekly: action.error,
       };
   }
  });

export default periodicReturnWeeklyReducer;
