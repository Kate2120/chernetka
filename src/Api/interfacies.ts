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
        allUsers: User[],
        auth: FormikValues,
    },

}

export interface Users {
    users: User[],
}
