import { ActionType, getType } from 'typesafe-actions';
import * as actions from '../actions/session';
import { Session } from '../../types';

export type SessionAction = ActionType<typeof actions>;

export type SessionState = Session;

const initialState = {
  isLoggedIn: false,
  isGettingInfo: false
};

const session = (state: SessionState = initialState, action: SessionAction) => {
  switch (action.type) {
    case getType(actions.getSessionInfo):
      return {
        ...state,
        isGettingInfo: true
      };
    default:
      return state;
  }
};

export default session;
