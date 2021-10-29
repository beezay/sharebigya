import { take, call, put, select, all, takeLatest , takeEvery} from 'redux-saga/effects';
import axios from 'axios';

import {
  loadSubscribeSuccess,
  loadSubscribeError
} from './actions';
import { LOAD_SUBSCRIBE} from './constants';
import { requestPostSubscribe } from './api';

// Individual exports for testing


function* postSubscribe(action) {
  try {
    const SubscribeResult = yield call(requestPostSubscribe,action.subscribeData);
       
    yield put(loadSubscribeSuccess(SubscribeResult.data));
  } catch (error) {
    yield put(loadSubscribeError(error));
  }
}

export function* loadSubscribe(value) {
  yield takeEvery(LOAD_SUBSCRIBE, postSubscribe);
}

export default function* landingPageSaga() {
  // See example in containers/HomePage/saga.js
  yield all([loadSubscribe()]);
}