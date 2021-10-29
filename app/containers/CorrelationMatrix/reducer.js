/*
 *
 * CorrelationMatrix reducer
 *
 */
import produce from 'immer';
import { 
  LOAD_CORRELATION_MATRIX_DATA,
  LOAD_CORRELATION_MATRIX_DATA_SUCCESS,
  LOAD_CORRELATION_MATRIX_DATA_ERROR
 } from './constants';

 export const initialState = {
  correlationMatrixData:[],
  loadingCorrelationMatrix: false,
  errorCorrelationMatrix: false,

};

/* eslint-disable default-case, no-param-reassign */
const correlationMatrixReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case LOAD_CORRELATION_MATRIX_DATA:
       return {
         ...state,
         loadingCorrelationMatrix: true,
         errorCorrelationMatrix: false,
       };
     case LOAD_CORRELATION_MATRIX_DATA_SUCCESS:
       return {
         ...state,
         loadingCorrelationMatrix: false,
         errorCorrelationMatrix: false,
         correlationMatrixData: action.correlationMatrixData,
       };
     case LOAD_CORRELATION_MATRIX_DATA_ERROR:
       return {
         ...state,
         loadingCorrelationMatrix: false,
         errorCorrelationMatrix: action.error,
       };
   }
  });

export default correlationMatrixReducer;
