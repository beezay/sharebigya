/*
 *
 * CorrelationMatrix actions
 *
 */

import { 
  LOAD_CORRELATION_MATRIX_DATA,
  LOAD_CORRELATION_MATRIX_DATA_SUCCESS,
  LOAD_CORRELATION_MATRIX_DATA_ERROR,
} from './constants';

export function loadCorrelationMatrixData(correlationMatrixData) {
  
  return {
    type: LOAD_CORRELATION_MATRIX_DATA,
    correlationMatrixData,
  };
}

export function loadCorrelationMatrixSuccess(correlationMatrixData) {
  return {
    type: LOAD_CORRELATION_MATRIX_DATA_SUCCESS,
    correlationMatrixData,
  };
}
export function loadCorrelationMatrixError(error) {
  return {
    type: LOAD_CORRELATION_MATRIX_DATA_ERROR,
    error,
  };
}
