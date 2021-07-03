// import { FETCH_POSTS, NEW_POST } from '../actions/types';
import {ToggleLoggedIn} from '../actions/types';

let intitialState={
    loggedIn:true,
}

export default function(state=intitialState,action){
    switch (action.type) {
        case ToggleLoggedIn:
            return {
                ...state,
                loggedIn: action.payload
            }
        default:
            return state;
    }
}
