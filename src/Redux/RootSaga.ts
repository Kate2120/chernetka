import { all } from 'redux-saga/effects';
import { usersWatcher } from './usersReducer/userSaga';

export function* rootSaga() {
  yield all([usersWatcher()]);
}
