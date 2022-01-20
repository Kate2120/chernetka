import { call, put, takeLatest } from 'redux-saga/effects';
import {Types} from './Types';
import {User, GetUsersSucsess} from "./interfacies";
import {fetchUsersSuccess} from './actions';
import {getUsers} from '../../Api/api';

function* fetchUsersWorker(){
    try {
        const users = (yield call(getUsers)) as User[];
        yield put(fetchUsersSuccess(users));
      } catch {}
}

export function* usersWatcher(){
    yield takeLatest(Types.GET_USERS, fetchUsersWorker);
}