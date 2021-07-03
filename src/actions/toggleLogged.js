import {ToggleLoggedIn} from './types';
export const Toggle_Logged_In=(status)=>dispatch=>{
    dispatch({
        type:ToggleLoggedIn,
        payload:status,
    })
}

// export const fetchPosts = () => dispatch => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(res => res.json())
//       .then(posts =>
//         dispatch({
//           type: FETCH_POSTS,
//           payload: posts
//         })
//       );
//   };