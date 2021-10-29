import { take, call, put, select, all, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import {
  loadDailyVolReturnSuccess,
  loadDailyVolReturnError,
} from './actions';
import { LOAD_DAILY_VOL_RETURN_DATA } from './constants';
import { requestDailyVolReturnData } from './api';
import {pagination} from '../Pagination/pagination';


function* fetchDailyVolReturnData() {
  try {
    const dailyVolReturn = yield call(requestDailyVolReturnData);
      if(dailyVolReturn.data.next){
      const  allData = yield call(pagination,dailyVolReturn);
         yield put(loadDailyVolReturnSuccess( allData));
      }
      else{
           yield put(loadDailyVolReturnSuccess( dailyVolReturn.data));
      }

  } catch (error) {
    yield put(loadDailyVolReturnError(error));
  }
}

export function* loadDailyVolReturnData() {
  yield takeLatest(LOAD_DAILY_VOL_RETURN_DATA, fetchDailyVolReturnData);
}







export default function* dailyVolReturnSaga() {
  // See example in containers/HomePage/saga.js
  yield all([loadDailyVolReturnData()]);
}
