export interface UserName{
    title: string, 
    first: string,
    last: string,
}
export interface DateBirth{
    date: string,
    age: string,
}
export interface Picture{
    large: string,
    medium: string,
    thumbnail: string,
}
export interface User {
    name: UserName,
    gender: string,
    dob: DateBirth,
    picture: Picture,
    
}
export interface State {
    users: User[],
}

  export interface Users{
    users: User[],
}
export interface Request {
  type: string
}
export interface GetUsersSucsess{
    type: string,
    payload: User[];
}
