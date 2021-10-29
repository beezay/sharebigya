import { take, call, put, select, all, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import {
  loadPeriodicReturnSuccess,
  loadPeriodicReturnError,
} from './actions';
import { LOAD_PeriodicReturn_Data } from './constants';
import { requestPeriodicReturnData } from './api';
import {pagination} from '../Pagination/pagination';



function* fetchPeriodicReturnData() {
  try {
    const periodicReturnData = yield call(requestPeriodicReturnData);
      if(periodicReturnData.data.next){
      const  allData = yield call(pagination,periodicReturnData);
         yield put(loadPeriodicReturnSuccess( allData));
      }
      else{
           yield put(loadPeriodicReturnSuccess( periodicReturnData.data));
      }

  } catch (error) {
    yield put(loadPeriodicReturnError(error));
  }
}

export function* loadPeriodicReturnData() {
  yield takeLatest(LOAD_PeriodicReturn_Data, fetchPeriodicReturnData);
}


// Individual exports for testing
export default function* periodicReturnSaga() {
  // See example in containers/HomePage/saga.js
  yield all([loadPeriodicReturnData()]);
}
