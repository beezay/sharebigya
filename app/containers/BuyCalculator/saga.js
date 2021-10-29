import { take, call, put, select, all, takeLatest , takeEvery} from 'redux-saga/effects';
import axios from 'axios';

import {
  loadBuySellCalcDataSuccess,
  loadBuySellCalcDataError
} from './actions';
import { LOAD_BUY_SELL_CALC_DATA } from './constants';
import { requestBuySellCalc } from './api';

// Individual exports for testing

function* fetchBuySellValue(action) {
  try {
    const BuySelCalceResult = yield call(requestBuySellCalc,action.buySellCalcData);
       
    yield put(loadBuySellCalcDataSuccess(BuySelCalceResult.data));
  } catch (error) {
    yield put(loadBuySellCalcDataError(error));
  }
}

export function* loadBuySellCalcData(value) {
  yield takeEvery(LOAD_BUY_SELL_CALC_DATA, fetchBuySellValue);
}

export default function* buyCalculatorSaga() {
  // See example in containers/HomePage/saga.js
  yield all([loadBuySellCalcData()]);
}
