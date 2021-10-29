import { take, call, put, select, all, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import {
  loadPeriodicReturnWeeklySuccess,
  loadPeriodicReturnWeeklyError,
} from './actions';
import { LOAD_PERIODICRETURNWEEKLY_DATA } from './constants';
import { requestPeriodicReturnWeeklyData } from './api';
import {pagination} from '../Pagination/pagination';




function* fetchPeriodicReturnWeeklyData() {
  try {
    const periodicReturnWeeklyData = yield call(requestPeriodicReturnWeeklyData);
      if(periodicReturnWeeklyData.data.next){
      const  allData = yield call(pagination,periodicReturnWeeklyData);
         yield put(loadPeriodicReturnWeeklySuccess( allData));
      }
      else{
           yield put(loadPeriodicReturnWeeklySuccess( periodicReturnWeeklyData.data));
      }

  } catch (error) {
    yield put(loadPeriodicReturnWeeklyError(error));
  }
}

export function* loadPeriodicReturnYearlyData() {
  yield takeLatest(LOAD_PERIODICRETURNWEEKLY_DATA, fetchPeriodicReturnWeeklyData);
}




// Individual exports for testing
export default function* periodicReturnWeeklySaga() {
  yield all([loadPeriodicReturnYearlyData()]);
}
