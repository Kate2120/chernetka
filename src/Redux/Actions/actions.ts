import {Types} from './Types';
import {Request, GetUsersSuccess, User, dataAuth, authRequest, RequestAll} from './interfacies';

export const fetchUsersRequest = (data: number): Request => ({
    type: Types.GET_USERS,
    payload: data,
})
export const fetchUsersSuccess = (data: User[]): GetUsersSuccess => ({
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

export const fetchAllUsersRequest = (): RequestAll => ({
    type: Types.GET_USERS,
})
export const fetchAllUsersSuccess = (data: User[]): GetUsersSuccess => ({
    type: Types.GET_ALL_USERS_SUCCESS,
    payload: data,
})