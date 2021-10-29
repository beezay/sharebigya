import { call, put, takeEvery, all } from 'redux-saga/effects';
import { APIURL } from '../../api';
import {
  GET_ORGS_FAILED,
  GET_ORGS_REQUESTED,
  GET_ORGS_SUCCESS
} from '../types';
const getAPI = () => {
  return fetch(APIURL, {
    method: 'GET'
  })
    .then(res => res.json())
    .catch(e => {
      throw e;
    });
};

function* fetchOrgs(action) {
  console.log('Func');
  try {
    const orgs = yield call(getAPI);
    yield put({
      type: GET_ORGS_SUCCESS,
      orgs: orgs
    });
  } catch (error) {
    yield put({
      type: GET_ORGS_FAILED,
      message: error.message
    });
  }
}

function* orgsSagas() {
  console.log('Saga');
  yield takeEvery(GET_ORGS_REQUESTED, fetchOrgs);
}

export default orgsSagas;
