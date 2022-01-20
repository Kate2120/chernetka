import { all } from 'redux-saga/effects';
import { usersWatcher } from './userSaga';


export function* rootSaga() {
  yield all([usersWatcher()]);
}
