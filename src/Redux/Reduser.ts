
import {Action} from './interfacies';
import {Types} from './Actions/Types';

const initialState  = {
    users: [],
}
const Reduser = (state = initialState, action: Action) => {
    console.log(action.payload);
switch(action.type){
    case Types.GET_USERS_SUCSESS:
        return { ...state, users: action.payload };
    default:
      return state;
}
}
export default Reduser;