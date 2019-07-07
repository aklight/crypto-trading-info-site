import { ActionType } from 'typesafe-actions';
import { put, call } from 'redux-saga/effects';
import {
  getSessionInfo,
  getSessionInfoDone,
  getSessionInfoFail
} from '../actions/session';
import * as api from '../../api';

export function* getSessionInfoSaga(action: ActionType<typeof getSessionInfo>) {
  try {
    const response = yield call(api.getInfo);
    yield put(getSessionInfoDone(response.info));
  } catch (error) {
    yield put(getSessionInfoFail(error));
  }
}
