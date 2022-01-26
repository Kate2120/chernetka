import {Types} from './Types';
import {Request, GetUsersSucsess, User, dataAuth, authRequest} from './interfacies';

export const fetchUsersRequest = (): Request => ({
    type: Types.GET_USERS
})
export const fetchUsersSuccess = (data: User[]): GetUsersSucsess => ({
    type: Types.GET_USERS_SUCCESS,
    payload: data,
})
export const authorisationRequest = (data: dataAuth): authRequest => ({
    type: Types.SEND_DATA_AUTH,
    payload: data,
})
export const sendDataAuthSuccess = (data: dataAuth): authRequest => ({
    type: Types.GET_DATA_AUTH_SUCCESS,
    payload: data,
})