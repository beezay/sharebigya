import { take, call, put, select, all, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import {
  loadIndexSuccess,
  loadIndexError,
  loadSignalSuccess,
  loadSignalError,
} from './actions';
import { LOAD_INDEX_DATA, LOAD_SIGNAL_DATA } from './constants';
import { requestIndexData, requestSignalData, requestEachindexData } from './api';

import {pagination} from './pagination';

function* fetchIndexData() {
  try {
    const indexData = yield call(requestIndexData);

      if(indexData.data.next){
      const  allData = yield call(pagination,indexData);
         yield put(loadIndexSuccess( allData));
      }
      else{
           yield put(loadIndexSuccess( indexData.data.results));
      }

  
    // yield put(loadIndexSuccess( allData));
  } catch (error) {
    yield put(loadIndexError(error));
  }
}

function* fetchSignalData() {
  try {
    const signalData = yield call(requestSignalData);
    // Pass the API Data Into Reducer
    yield put(loadSignalSuccess(signalData.data));
  } catch (error) {
    yield put(loadSignalError(error));
  }
}

export function* loadIndexData() {
  yield takeLatest(LOAD_INDEX_DATA, fetchIndexData);
}

export function* loadSignalData() {
  yield takeLatest(LOAD_SIGNAL_DATA, fetchSignalData);
}

// Individual exports for testing
export default function* mainPageSaga() {
  yield all([loadIndexData(), loadSignalData()]);
}
