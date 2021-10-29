import { take, call, put, select, all, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import {
  loadPeriodicReturnYearlySuccess,
  loadPeriodicReturnYearlyError,
} from './actions';
import { LOAD_PERIODICRETURNYEARLY_DATA } from './constants';
import { requestPeriodicReturnYearlyData } from './api';
import {pagination} from '../Pagination/pagination';



function* fetchPeriodicReturnYearlyData() {
  try {
    const periodicReturnYearlyData = yield call(requestPeriodicReturnYearlyData);
      if(periodicReturnYearlyData.data.next){
      const  allData = yield call(pagination,periodicReturnYearlyData);
         yield put(loadPeriodicReturnYearlySuccess( allData));
      }
      else{
           yield put(loadPeriodicReturnYearlySuccess( periodicReturnYearlyData.data));
      }

  } catch (error) {
    yield put(loadPeriodicReturnYearlyError(error));
  }
}

export function* loadPeriodicReturnYearlyData() {
  yield takeLatest(LOAD_PERIODICRETURNYEARLY_DATA, fetchPeriodicReturnYearlyData);
}



// Individual exports for testing
export default function* periodicReturnYearlySaga() {
  // See example in containers/HomePage/saga.js
  yield all([loadPeriodicReturnYearlyData()]);
}
