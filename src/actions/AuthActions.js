import { GET_ERRORS, SET_CURRENT_USER, FOLLOW_USER, LOADING } from "./Types";
import Axios from "axios";
import jwt_decode from "jwt-decode";

import setAuthToken from "../utils/setAuthToken";

export const registerUser = (userData, history) => dispatch => {
  Axios.post("http://localhost:5000/api/users/register", userData)
    .then(res => {
      Axios.post("http://localhost:5000/api/users/login", userData)
        .then(res => {
          const { token } = res.data;
          localStorage.setItem("token", token);
          setAuthToken(token);
          const decoded_token = jwt_decode(token);
          dispatch(setCurrentUser(decoded_token));
        })
        .catch(err =>
          dispatch({
            type: GET_ERRORS,
            payload: err.response.data
          })
        );
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const loginUser = (userData, history) => dispatch => {
  // console.log(userData);
  Axios.post("http://localhost:5000/api/users/login", userData)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem("token", token);
      setAuthToken(token);
      const decoded_token = jwt_decode(token);
      dispatch(setCurrentUser(decoded_token));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const setCurrentUser = decoded_token => {
  console.log("here");
  return { type: SET_CURRENT_USER, payload: decoded_token };
};

export const logoutUser = () => dispatch => {
  localStorage.removeItem("token");
  setAuthToken(false);
  dispatch(setCurrentUser({}));
};

export const loading = () => {
  return {
    type: LOADING
  };
};

export const followUser = user => dispatch => {
  // dispatch(loading());
  Axios.post(`http://localhost:5000/api/users/follow/${user}`)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem("token", token);
      setAuthToken(token);
      const decoded_token = jwt_decode(token);
      dispatch(setCurrentUser(decoded_token));
    })
    .catch(err => {
      dispatch({ type: GET_ERRORS, payload: err });
    });
};
