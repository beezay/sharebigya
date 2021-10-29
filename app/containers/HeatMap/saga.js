import { take, call, put, select, all, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import {
  loadHeatMapDataSuccess,
  loadHeatMapDataError,
} from './actions';

import {
  LOAD_HEATMAP_DATA,
  LOAD_HEATMAP_DATA_SUCCESS,
  LOAD_HEATMAP_DATA_ERROR,
} from './constants';

import { requestheatMapData } from './api';

function* fetchHeatMapData() {
  try {
    const heatMapData = yield call(requestheatMapData);
    // Pass the API Data Into Reducer
    yield put(loadHeatMapDataSuccess(heatMapData.data));
  } catch (error) {
    yield put(loadHeatMapDataError(error));
  }
}

export function* loadHeatMapData() {
  yield takeLatest(LOAD_HEATMAP_DATA, fetchHeatMapData);
}

export default function* heatMapSaga() {
  yield all([loadHeatMapData()]);
}
