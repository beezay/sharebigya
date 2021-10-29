import { take, call, put, select, all, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import {
  loadPeriodicReturnSuccess,
  loadPeriodicReturnError,
} from './actions';
import { LOAD_PERIODIC_RETURNBAR_DATA } from './constants';
import { requestPeriodicBarData } from './api';
import {pagination} from '../Pagination/pagination';


// Individual exports for testing
function* fetchLoadPeriodicReturnBarData() {
  try {
    const periodicReturnBarData = yield call(requestPeriodicBarData);
      if(periodicReturnBarData.data.next){
      const  allData = yield call(pagination,periodicReturnBarData);
         yield put(loadPeriodicReturnSuccess( allData ));
      }
      else{
           yield put(loadPeriodicReturnSuccess( periodicReturnBarData.data ));
      }

  } catch (error) {

    yield put(loadPeriodicReturnError(error));
  }
}
export function* loadperiodicReturnBarData() {
  yield takeLatest(LOAD_PERIODIC_RETURNBAR_DATA, fetchLoadPeriodicReturnBarData);
}

export default function* periodicReturnBarSaga() {
  yield all([loadperiodicReturnBarData()]);
}
