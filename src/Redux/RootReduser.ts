import { combineReducers } from 'redux';
import Reduser from './Reduser';


const rootReducer = combineReducers({
    users: Reduser,
    
});

export default rootReducer;