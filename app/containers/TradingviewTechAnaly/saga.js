import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import {
  loadTradingViewSuccess,
  loadTradingViewError
} from './actions';
import {pagination} from '../Pagination/pagination';


import { LOAD_TRADING_VIEW_DATA,
  LOAD_TRADING_VIEW_DATA_SUCCESS,
  LOAD_TRADING_VIEW_ERROR,

} from './constants';
import { requestTradingViewData, requestEachTradingViewData } from './api';



function* fetchTradingViewData(){
  try {
    let data = yield call(requestTradingViewData); 
   
    const  allData = yield call(pagination,data);


     

    allData.sort(function(a,b){
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      return new Date(b.date) - new Date(a.date);
    });

    // allData.sort();


    yield put(loadTradingViewSuccess(allData));
  } catch (error) {
   
    yield put(loadTradingViewError(error));
  }
}

export function* loadTradingViewData(){
  
  yield takeLatest(LOAD_TRADING_VIEW_DATA, fetchTradingViewData);
}
// Individual exports for testing
export default function* tradingviewTechAnalySaga() {
  // See example in containers/HomePage/saga.js
  yield all([loadTradingViewData()]);
}
