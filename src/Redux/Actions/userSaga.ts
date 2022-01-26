import { call, put, takeLatest } from 'redux-saga/effects';
import {Types} from './Types';
import {User, dataAuth, authRequest} from "./interfacies";
import {fetchUsersSuccess, sendDataAuthSuccess} from './actions';
import {fetchUsers} from '../../Api/api';


function* fetchUsersWorker(){
    try {
        const users = (yield call(fetchUsers)) as User[];
        yield put(fetchUsersSuccess(users));
      } catch {}
}
function* sendDataAuthWorker({payload}: authRequest){

    try{
        yield put(sendDataAuthSuccess(payload));
        console.log(payload)
    }catch{}
}

export function* usersWatcher(){
    yield takeLatest(Types.GET_USERS, fetchUsersWorker);
    yield takeLatest(Types.SEND_DATA_AUTH, sendDataAuthWorker)
}