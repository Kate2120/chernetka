import {combineReducers} from 'redux';
import Reducer from './usersReducer/Reducer';


const rootReducer = combineReducers({
    users: Reducer,
});

export default rootReducer;