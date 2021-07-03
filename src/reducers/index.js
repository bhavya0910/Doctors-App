import {combineReducers} from 'redux';
import loginReducer from './loginStatus';

export default combineReducers({
    loggedIn:loginReducer,
})