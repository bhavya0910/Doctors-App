import {combineReducers} from 'redux';
import loginReducer from './loginStatus';
import signUpDataReducer from './signUpData';
export default combineReducers({
    loggedIn:loginReducer,
    signUpData:signUpDataReducer,
})