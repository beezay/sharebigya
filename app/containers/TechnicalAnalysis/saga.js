// import { take, call, put, select } from 'redux-saga/effects';

// Individual exports for testing

import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import {
  loadTechAnalySuccess,
  loadTechAnalyError
} from './actions';

import {
  LOAD_TECH_ANALY_DATA,
  LOAD_TECH_ANALY_DATA_SUCCESS,
  LOAD_TECH_ANALY_DATA_ERROR,
} from './constants';
import { requestTechAnalyData } from './api';

function* fetchTechAnalyData(){
  try {
    const techAnalyData = yield call(requestTechAnalyData);
    

    yield put(loadTechAnalySuccess(techAnalyData.data));
  } catch (error) {
    yield put(loadTechAnalyError(error));
  }
}

export function* loadTechAnalyData(){
  yield takeLatest(LOAD_TECH_ANALY_DATA, fetchTechAnalyData);
}

export default function* technicalAnalysisSaga() {
  yield all([loadTechAnalyData()]);
}
