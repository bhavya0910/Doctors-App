import {SetSignUpData} from '../actions/types'

let intitialState={
    signup_data:null,
}

export default function(state=intitialState,action){
    switch (action.type) {
        case SetSignUpData:
        console.log('HIT');
            return {
                ...state,
                signup_data: action.payload
            }
        default:
            return state;
    }
}
