import { take, call, put, select, all, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import {
  loadPeriodicReturnMonthlySuccess,
  loadPeriodicReturnMonthlyError,
} from './actions';
import { LOAD_PERIODICRETURN_MONTHLY_DATA } from './constants';
import { requestPeriodicReturnMonthlyData } from './api';
import {pagination} from '../Pagination/pagination';



function* fetchPeriodicReturnMonthlyData() {
  try {
    
    const periodicReturnMonthlyData = yield call(requestPeriodicReturnMonthlyData);
    
      if(periodicReturnMonthlyData.data.next){
      const  allData = yield call(pagination,periodicReturnMonthlyData);
         yield put(loadPeriodicReturnMonthlySuccess( allData));
      }
      else{
           yield put(loadPeriodicReturnMonthlySuccess( periodicReturnMonthlyData.data));
      }

  } catch (error) {
    yield put(loadPeriodicReturnMonthlyError(error));
  }
}

export function* loadPeriodicReturnMonthlyData() {
  
  yield takeLatest(LOAD_PERIODICRETURN_MONTHLY_DATA, fetchPeriodicReturnMonthlyData);
}



export default function* periodicRetrunMonthlySaga() {
  // See example in containers/HomePage/saga.js
   yield all([loadPeriodicReturnMonthlyData()]);
}
