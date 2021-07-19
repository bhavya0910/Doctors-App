import {ToggleLoggedIn,SetSignUpData} from './types';
export const Set_Signup_Data=(data)=>dispatch=>{
    console.log(data);
    return new Promise((resolve,reject)=>{
        dispatch({
            type:SetSignUpData,
            payload:data
        })
        resolve();
    })
}