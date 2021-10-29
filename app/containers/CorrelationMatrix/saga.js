import { take, call, put, select, all, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import {
  loadCorrelationMatrixSuccess,
  loadCorrelationMatrixError,
} from './actions';
import { LOAD_CORRELATION_MATRIX_DATA } from './constants';
import { requestCorrelationMatrixData } from './api';
import {pagination} from '../Pagination/pagination';
// Individual exports for testing

function* fetchloadCorrelationMatrixData() {
  try {
    
    const correlationMatrixData = yield call(requestCorrelationMatrixData);
    
      if(correlationMatrixData.data.next){
      const  allData = yield call(pagination,correlationMatrixData);
         yield put(loadCorrelationMatrixSuccess( allData));
      }
      else{
           yield put(loadCorrelationMatrixSuccess( correlationMatrixData.data));
      }

  } catch (error) {
    yield put(loadCorrelationMatrixError(error));
  }
}

export function* loadCorrelationMatrixData() {
  
  yield takeLatest(LOAD_CORRELATION_MATRIX_DATA, fetchloadCorrelationMatrixData);
}




export default function* correlationMatrixSaga() {
  // See example in containers/HomePage/saga.js
  yield all([loadCorrelationMatrixData()]);
}
