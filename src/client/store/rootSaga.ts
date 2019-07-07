import { getType } from 'typesafe-actions';
import { all, takeLatest } from 'redux-saga/effects';
import { getSessionInfo } from './actions';
import { getSessionInfoSaga } from './sagas';

export default function* rootSaga() {
  yield all([takeLatest(getType(getSessionInfo), getSessionInfoSaga)]);
}
