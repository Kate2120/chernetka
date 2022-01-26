
import {Action} from './interfacies';
import {Types} from './Actions/Types';

const initialState  = {
    users: [],
    auth: null
}
const Reduser = (state = initialState, action: Action) => {

switch(action.type){
    case Types.GET_USERS_SUCCESS:
        return { ...state, users: action.payload };
    case Types.GET_DATA_AUTH_SUCCESS:
        return { ...state, auth: action.payload};
    default:
      return state;
}
}
export default Reduser;