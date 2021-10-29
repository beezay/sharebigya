import { all } from '@redux-saga/core/effects';
import orgsSagas from './orgsSagas';

export default function* rootSaga() {
  yield all([orgsSagas()]);
}
