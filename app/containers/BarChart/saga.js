

import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import {
  loadTopStocksDataSuccess,
  loadTopStocksDataError
} from './actions';


import {
  LOAD_TOP_STOCKS_DATA,
  LOAD_TOP_STOCKS_DATA_SUCCESS,
  LOAD_TOP_STOCKS_DATA_ERROR
 } from './constants';


import { requestTopStocksData } from './api';
// Individual exports for testing

function* fetchTopStocksData(){
  try {
    let data = yield call(requestTopStocksData);
    // const  allData = yield call(pagination,data);

    yield put(loadTopStocksDataSuccess(data.data));
  } catch (error) {
    yield put(loadTopStocksDataError(error));
  }
}

export function* loadTopStocksData(){
  yield takeLatest(LOAD_TOP_STOCKS_DATA, fetchTopStocksData);
}


export default function* barChartSaga() {
  // See example in containers/HomePage/saga.js
  yield all([loadTopStocksData()]);
}
