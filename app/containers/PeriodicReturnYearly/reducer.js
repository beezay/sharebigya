/*
 *
 * PeriodicReturnYearly reducer
 *
 */
import produce from 'immer';
import { 
  LOAD_PERIODICRETURNYEARLY_DATA,
  LOAD_PERIODICRETURNYEARLY_DATA_SUCCESS,
  LOAD_PERIODICRETURNYEARLY_DATA_ERROR
} from './constants';


export const initialState = {
  periodicReturnYearlyData:[],
  loadingPeriodicReturnYearly: false,
  errorPeriodicReturnYearly: false,
};

/* eslint-disable default-case, no-param-reassign */
const periodicReturnYearlyReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case LOAD_PERIODICRETURNYEARLY_DATA:
       return {
         ...state,
         loadingPeriodicReturnYearly: true,
         errorPeriodicReturnYearly: false,
       };
     case LOAD_PERIODICRETURNYEARLY_DATA_SUCCESS:
       return {
         ...state,
         loadingPeriodicReturnYearly: false,
         errorPeriodicReturnYearly: false,
         periodicReturnYearlyData: action.periodicReturnYearlyData,
       };
     case LOAD_PERIODICRETURNYEARLY_DATA_ERROR:
       return {
         ...state,
         loadingPeriodicReturnYearly: false,
         errorPeriodicReturnYearly: action.error,
       };
   }
  });

export default periodicReturnYearlyReducer;
