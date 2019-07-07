import { createAction } from 'typesafe-actions';
import { ApiError, SessionInfo } from '../../types';

const GET_SESSION_INFO = 'GET_SESSION_INFO';
const GET_SESSION_INFO_FAIL = 'GET_SESSION_INFO_FAIL';
const GET_SESSION_INFO_DONE = 'GET_SESSION_INFO_DONE';

export const getSessionInfo = createAction(GET_SESSION_INFO, (resolve) => () =>
  resolve()
);

export const getSessionInfoFail = createAction(
  GET_SESSION_INFO_FAIL,
  (resolve) => {
    return (error: ApiError) => resolve(error);
  }
);

export const getSessionInfoDone = createAction(
  GET_SESSION_INFO_DONE,
  (resolve) => (info: SessionInfo) => resolve(info)
);

const LOGIN_DONE = 'LOGIN_DONE';

export const loginDone = createAction(LOGIN_DONE, (resolve) => () => resolve());

const LOGOUT_DONE = 'LOGOUT_DONE';

export const logoutDone = createAction(LOGOUT_DONE, (resolve) => () =>
  resolve()
);

const LOGOUT_FAIL = 'LOGOUT_FAIL';

export const logoutFail = createAction(LOGOUT_FAIL, (resolve) => {
  return (error: ApiError) => resolve(error);
});
