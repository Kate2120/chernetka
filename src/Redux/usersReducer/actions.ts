import {Types} from './Types';
import {
    Request,
    GetUsersSuccess,
    User,
    authRequest,
    RequestLogout,
    LogoutSuccess,
    fetchUsersError, dataError
} from './interfacies';
import {Simulate} from "react-dom/test-utils";
import {FormikValues} from "formik";


export const fetchUsersRequest = (data: number): Request => ({
    type: Types.GET_USERS,
    payload: data,
})
export const fetchUsersSuccess = (data: User[]): GetUsersSuccess => ({
    type: Types.GET_USERS_SUCCESS,
    payload: data,
})
export const authorisationRequest = (data: FormikValues): authRequest => ({
    type: Types.SEND_DATA_AUTH,
    payload: data,
})
export const sendDataAuthSuccess = (data: FormikValues): authRequest => ({
    type: Types.GET_DATA_AUTH_SUCCESS,
    payload: data,
})

export const fetchLogout = (): RequestLogout => ({
    type: Types.GET_LOGOUT,
    payload: null
})
export const logoutSuccess = (): LogoutSuccess => ({
    type: Types.LOGOUT_SUCCESS,
    payload: null
})
export const fetchUsersFail = (error: dataError): fetchUsersError => ({
    type: Types.GET_USERS_ERROR,
    payload: error
})