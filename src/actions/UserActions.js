// import Axios from "axios";

// import {
//   FOLLOW_USER,
//   LOADING,
//   GET_POST,
//   SET_CURRENT_USER,
//   GET_POSTS,
//   GET_ERRORS
//   // GET_USER
// } from "./Types";

// import { setCurrentUser } from "./AuthActions";
// import setAuthToken from "../utils/setAuthToken";
// import jwt_decode from "jwt-decode";

// export const loading = () => {
//   return {
//     type: LOADING
//   };
// };

// export const followUser = user => dispatch => {
//   dispatch(loading());
//   Axios.post(`http://localhost:5000/api/users/follow/${user}`)
//     .then(res => {
//       const { token } = res.data;
//       localStorage.setItem("token", token);
//       setAuthToken(token);
//       const decoded_token = jwt_decode(token);
//       console.log("rewr23r");

//       dispatch({ TYPE: FOLLOW_USER, payload: res.data });
//       // setCurrentUser(decoded_token);
//       console.log("rewr");
//       dispatch({ TYPE: SET_CURRENT_USER, payload: decoded_token });
//       console.log("rewrfsdfsd");
//     })
//     .catch(err => dispatch({ type: GET_ERRORS, payload: err }));
// };

// // export const getCurrentUser = user => dispatch => {
// //   dispatch(loading());
// //   Axios.get(`http://localhost:5000/api/users/${user}`)
// //     .then(res => {
// //       dispatch({ TYPE: GET_USER, payload: res.data });
// //     })
// //     .catch(err => console.log(err));
// // };
