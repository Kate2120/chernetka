import {Types} from "./Types";
import {FormikValues} from "formik";

export interface UserName {
    title: string,
    first: string,
    last: string,
}

export interface DateBirth {
    date: string,
    age: string,
}

export interface Picture {
    large: string,
    medium: string,
    thumbnail: string,
}

export interface Location {
    street: string,
    city: string,
    state: string,
    postcode: string,
    coordinates: Coordinates,
}

export interface Coordinates {
    latitude: string,
    longitude: string,
}

export interface Registered {
    date: string,
    age: string
}

export interface User {
    name: UserName,
    gender: string,
    dob: DateBirth,
    picture: Picture,
    location: Location,
    registered: Registered,
    phone: string
}

export interface State {
    users: {
        users: User[],
        auth: FormikValues,
        isLogged: boolean,
    },
}

export interface Users {
    users: User[],
}

export interface Request {
    type: string,
    payload: number,
}

export interface GetUsersSuccess {
    type: string,
    payload: User[],
}

export interface dataAuth {
        name: string,
        password: string,
        confirmPassword: string,
}

export interface authRequest {
    type: string,
    payload: FormikValues,
}

export interface RequestLogout {
    type: string,
    payload: null,
}

export interface LogoutSuccess {
    type: string,
    payload: null,
}

export interface dataError {
    status: number,
    title: string
}

export interface fetchUsersError {
    type: string,
    payload: dataError
}
