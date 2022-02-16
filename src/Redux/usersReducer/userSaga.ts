import {call, put, takeLatest} from 'redux-saga/effects';
import {Types} from './Types';
import {User, authRequest, dataError} from "./interfacies";
import {fetchUsersSuccess, logoutSuccess, sendDataAuthSuccess} from './actions';
import errorHandler from './handlerError'
import {fetchUsers} from '../../Api/api';

interface Params<T> {
    type: string;
    payload: T;
    error?: dataError;
}

function* fetchUsersWorker<T extends number>({payload}: Params<T>) {
    try {
        const users = (yield call(fetchUsers, payload)) as User[];
        yield put(fetchUsersSuccess(users));
    } catch (error: any) {
        yield errorHandler(error);
    }
}

function* sendDataAuthWorker({payload}: authRequest) {

    try {
        localStorage.setItem('is_logged', 'true');
        yield put(sendDataAuthSuccess(payload));

    } catch {
    }
}

function* logoutWorker() {
    try {
        localStorage.setItem('is_logged', 'false');
        localStorage.setItem('users', JSON.stringify([]));
        yield put(logoutSuccess());
    } catch {
    }
}

export function* usersWatcher() {
    yield takeLatest(Types.SEND_DATA_AUTH, sendDataAuthWorker);
    yield takeLatest(Types.GET_USERS, fetchUsersWorker);
    yield takeLatest(Types.GET_LOGOUT, logoutWorker);
}