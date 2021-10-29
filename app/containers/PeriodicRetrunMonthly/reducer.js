/*
 *
 * PeriodicRetrunMonthly reducer
 *
 */
import produce from 'immer';
import { 
  LOAD_PERIODICRETURN_MONTHLY_DATA,
  LOAD_PERIODICRETURN_MONTHLY_DATA_SUCCESS,
  LOAD_PERIODICRETURN_MONTHLY_DATA_ERROR
} from './constants';

export const initialState = {
  periodicReturnMonthlyData:[],
  loadingPeriodicReturnMonthly: false,
  errorPeriodicReturnMonthly: false,
};


/* eslint-disable default-case, no-param-reassign */
const periodicRetrunMonthlyReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
     switch (action.type) {
      case LOAD_PERIODICRETURN_MONTHLY_DATA:
       return {
         ...state,
         loadingPeriodicReturnMonthly: true,
         errorPeriodicReturnMonthly: false,
       };
     case LOAD_PERIODICRETURN_MONTHLY_DATA_SUCCESS:
       return {
         ...state,
         loadingPeriodicReturnMonthly: false,
         errorPeriodicReturnMonthly: false,
         periodicReturnMonthlyData: action.periodicReturnMonthlyData,
       };
     case LOAD_PERIODICRETURN_MONTHLY_DATA_ERROR:
       return {
         ...state,
         loadingPeriodicReturnMonthly: false,
         errorPeriodicReturnMonthly: action.error,
       };
   }
  });

export default periodicRetrunMonthlyReducer;
