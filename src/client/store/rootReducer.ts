import { combineReducers, Reducer } from 'redux';
import session, { SessionState } from './reducers/session';

export type RootState = {
  session: SessionState;
};

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  session
});

export default rootReducer;
