import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import {
  loadTimeSeriesSuccess,
  loadTimeSeriesError
} from './actions';
import {pagination} from '../Pagination/pagination';

import { 
  LOAD_TIME_SERIES_DATA,
   } from './constants';
import { requestTimeSeriesData } from './api';

function* fetchTimeSeriesData(){
  try {
    let data = yield call(requestTimeSeriesData); 
     
    const  allData = yield call(pagination,data);
    allData.sort(function(a,b){
      return new Date(b.date) - new Date(a.date);
    });

    yield put(loadTimeSeriesSuccess(allData));
  } catch (error) {
    yield put(loadTimeSeriesError(error));
  }
}

export function* loadTimeSeriesData(){
  yield takeLatest(LOAD_TIME_SERIES_DATA, fetchTimeSeriesData);
}

export default function* timeSeriesSaga() {
 yield all([loadTimeSeriesData()]);
}
