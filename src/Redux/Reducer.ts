
import {Action} from './interfacies';
import {Types} from './Actions/Types';

const initialState  = {
    users: [],
    auth: null,

}
const Reducer = (state = initialState, action: Action) => {

switch(action.type){
    case Types.GET_USERS_SUCCESS:
        return { ...state,  users: [...state.users, ...action.payload ]};
    case Types.GET_DATA_AUTH_SUCCESS:
        return { ...state, auth: action.payload};
    case Types.LOGOUT_SUCCESS:
        return {...state, auth: null};
    default:
      return state;
}
}
export default Reducer;