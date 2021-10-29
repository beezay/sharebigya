/* import { take, call, put, select, all, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { loadScreenData, loadScreenSuccess, loadScreenError } from './actions';
import {
  LOAD_SCREENER_DATA,
  LOAD_SCREENER_DATA_SUCCESS,
  LOAD_SCREENER_DATA_ERROR,
} from './constants';
import { requestScreenerData } from './api';
import { pagination } from '../Pagination/pagination';

function* fetchScreenerData() {
  try {
    const apiResult = yield call(requestScreenerData);

    let allData;

    if (apiResult.data.next !== null) {
      allData = yield call(pagination, apiResult);
    } else {
      allData = apiResult.data.results;
    }

    // Pass the API Data Into Reducer
    // yield put(loadScreenSuccess(apiResult.data.results));
    yield put(loadScreenSuccess(allData));
  } catch (error) {
    yield put(loadScreenError(error));
  }
}

export function* loadScreenerData() {
  yield takeLatest(LOAD_SCREENER_DATA, fetchScreenerData);
}

export default function* screenerSaga() {
  yield all([loadScreenerData()]);
}
 */

import { call, takeLatest } from 'redux-saga/effects';
import API from 'utils/apiHelper';
import * as actions from './actions';
import * as types from './constants';

export function* getScreenerData() {
  yield call(
    API.get(
      `stock/screener/?format=json`,
      actions.loadScreenSuccess,
      actions.loadScreenError,
      '',
      '',
      'GET',
    ),
  );
}
export default function* screenerSaga() {
  yield takeLatest(types.LOAD_SCREENER_DATA, getScreenerData);
}
