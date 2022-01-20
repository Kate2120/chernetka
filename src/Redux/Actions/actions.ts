import {Types} from './Types';
import {Request, GetUsersSucsess, User} from './interfacies';

export const fetchUsersRequest = (): Request => ({
    type: Types.GET_USERS
})
export const fetchUsersSuccess = (data: User[]): GetUsersSucsess => ({
    type: Types.GET_USERS_SUCSESS,
    payload: data,
})