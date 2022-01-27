import { call, put, takeLatest } from 'redux-saga/effects';
import {Types} from './Types';
import {User, dataAuth, authRequest} from "./interfacies";
import {fetchAllUsersSuccess, fetchUsersSuccess, sendDataAuthSuccess} from './actions';
import {fetchUsers, fetchAllUsers} from '../../Api/api';
import {Action} from "redux";
interface IParams<T> {
    type: string;
    payload: T;
}

function* fetchUsersWorker <T extends number>({payload}: IParams<T>){
    try {
        const users = (yield call(fetchUsers, payload)) as User[];
        yield put(fetchUsersSuccess(users));
      } catch {}
}
function* fetchAllUsersWorker(){
    try {
        const allUsers = (yield call(fetchAllUsers)) as User[];
        console.log(allUsers);
        yield put(fetchAllUsersSuccess(allUsers));
    } catch {}
}
function* sendDataAuthWorker({payload}: authRequest){

    try{
        yield put(sendDataAuthSuccess(payload));
        console.log(payload)
    }catch{}
}

export function* usersWatcher(){
    yield takeLatest(Types.SEND_DATA_AUTH, sendDataAuthWorker);
    yield takeLatest(Types.GET_ALL_USERS, fetchAllUsersWorker);
    yield takeLatest(Types.GET_USERS, fetchUsersWorker);

}