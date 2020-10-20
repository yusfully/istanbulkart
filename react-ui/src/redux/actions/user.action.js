import {
  CURRENT_USER,
  SIGN_IN_FAIL,
  SIGN_IN_START,
  SIGN_IN_SUCCESS,
  USER_SESSION,
  SIGN_OUT_START,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAIL,
  ACTIVATION_START,
  ACTIVATION_SUCCESS,
  ACTIVATION_FAIL,
} from "../actionTypes";
import history from "../../history";
export const setCurrentUser = (user) => ({
  type: CURRENT_USER,
  payload: user,
});

export const signInSuccess = (user) => ({
  type: SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFail = (error) => ({
  type: SIGN_IN_FAIL,
  payload: error,
});

export const signInStart = (userCreddentials) => ({
  type: SIGN_IN_START,
  payload: userCreddentials,
});

export const userSession = () => ({
  type: USER_SESSION,
});

export const signOutStart = () => ({
  type: SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: SIGN_OUT_SUCCESS,
});
export const signOutFail = () => ({
  type: SIGN_OUT_FAIL,
});

export const activationBegin = (userCreddentials) => ({
  type: ACTIVATION_START,
  payload: userCreddentials,
});

export const activationSuccess = (user) => {
  history.push(`/login`);
  return {
    type: ACTIVATION_SUCCESS,
    payload: user,
  };
};

export const activationFail = (error) => ({
  type: ACTIVATION_FAIL,
  payload: error,
});
