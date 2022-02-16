import {Action} from './interfacies';
import {Types} from './Types';

const initialState = {
    users: [],
    auth: null,
    isLogged: localStorage.getItem('is_logged'),
}
const Reducer = (state = initialState, action: Action) => {

    switch (action.type) {
        case Types.GET_USERS_SUCCESS:
            return {...state, users: [...state.users, ...action.payload]};
        case Types.GET_DATA_AUTH_SUCCESS:
            return {...state, auth: action.payload, isLogged: 'true'};
        case Types.LOGOUT_SUCCESS:
            return {...state, auth: null, isLogged: 'false'};
        default:
            return state;
    }
}
export default Reducer;