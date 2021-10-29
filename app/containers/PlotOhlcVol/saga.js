import { take, call, put, select, all, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import {
  loadOhlcVolSuccess,
  loadOhlcVolError,
} from './actions';
import { LOAD_OHLC_VOL_DATA } from './constants';
import { requestOhlcVolData } from './api';
import {pagination} from '../Pagination/pagination';

// Individual exports for testing

function* fetchloadOhlcVolData() {
  try {
    const ohlcVolData = yield call(requestOhlcVolData);
      if(ohlcVolData.data.next){
      const  allData = yield call(pagination,ohlcVolData);
         yield put(loadOhlcVolSuccess( allData));
      }
      else{
           yield put(loadOhlcVolSuccess( ohlcVolData.data));
      }

  } catch (error) {
    yield put(loadOhlcVolError(error));
  }
}

export function* loadOhlcVolData() {
  yield takeLatest(LOAD_OHLC_VOL_DATA, fetchloadOhlcVolData);
}



export default function* plotOhlcVolSaga() {
  yield all([loadOhlcVolData()]);
}
