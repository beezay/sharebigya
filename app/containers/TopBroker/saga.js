// import { take, call, put, select } from 'redux-saga/effects';



import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import {
  loadTopBrokersDataSuccess,
  loadTopBrokersDataError
} from './actions';


import { LOAD_TOP_BROKERS_DATA,
  LOAD_TOP_BROKERS_DATA_SUCCESS,
  LOAD_TOP_BROKERS_DATA_ERROR
 } from './constants';
import { requestTopBrokersData } from './api';

function* fetchTopBrokersData(){
  try {
    let data = yield call(requestTopBrokersData);
  

    // const  allData = yield call(pagination,data);

    yield put(loadTopBrokersDataSuccess(data.data));
  } catch (error) {
    yield put(loadTopBrokersDataError(error));
  }
}

export function* loadTopBrokersData(){
  yield takeLatest(LOAD_TOP_BROKERS_DATA, fetchTopBrokersData);
}

export default function* topBrokerSaga() {
  // See example in containers/HomePage/saga.js
   yield all([loadTopBrokersData()]);
}
