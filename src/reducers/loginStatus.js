// import { FETCH_POSTS, NEW_POST } from '../actions/types';
import {ToggleLoggedIn} from '../actions/types';

let intitialState={
    loggedIn:true,
    user_type:null,
}

export default function(state=intitialState,action){
    switch (action.type) {
        case ToggleLoggedIn:
            return {
                ...state,
                loggedIn: action.payload.loggedIn,
                user_type:action.payload.user_type
            }
        default:
            return state;
    }
}
