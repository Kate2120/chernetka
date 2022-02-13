import { State} from './Actions/interfacies';
export const getUsers = (state: State) => state.users.users;
export const getAuth = (state: State) => state.users.auth;
export const getIsLogged = (state: State) => state.users.isLogged;

