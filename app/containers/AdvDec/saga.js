import { take, call, put, select, all, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import {
  loadAdvanceDeclineDataSuccess,
  loadAdvanceDeclineDataError,
  loadAdvanceDeclineData4Success,
  loadAdvanceDeclineData4Error,
} from './actions';

import {
  LOAD_ADVANCE_DECLINE_DATA,
  LOAD_ADVANCE_DECLINE_4_DATA,
} from './constants';

import { requestAdvDecData, requestAdvDec4Data } from './api';


//  Fetch Adv Dec Data
function* fetchAdvanceDeclineData() {
  try {
    const advDecData = yield call(requestAdvDecData);
    // Pass the API Data Into Reducer
    yield put(loadAdvanceDeclineDataSuccess(advDecData.data));
  } catch (error) {
    yield put(loadAdvanceDeclineDataError(error));
  }
}

export function* loadAdvDecData() {
  yield takeLatest(LOAD_ADVANCE_DECLINE_DATA, fetchAdvanceDeclineData);
}


//  Fetch Adv Dec 4 Data
function* fetchAdvanceDecline4Data() {
  try {
    const advDecData4 = yield call(requestAdvDec4Data);
    // Pass the API Data Into Reducer
    yield put(loadAdvanceDeclineData4Success(advDecData4.data));
  } catch (error) {
    yield put(loadAdvanceDeclineData4Error(error));
  }
}

export function* loadAdvDec4Data() {
  yield takeLatest(LOAD_ADVANCE_DECLINE_4_DATA, fetchAdvanceDecline4Data);
}


export default function* advDecSaga() {
  yield all([loadAdvDecData(), loadAdvDec4Data()]);
}
