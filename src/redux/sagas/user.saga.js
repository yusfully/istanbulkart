import { takeLatest, put, all, call } from "redux-saga/effects";
import { SIGN_IN_START } from "../actionTypes";
export function* signIn({ payload: { email, password } }) {}
export function* signInStart() {
  yield takeLatest(SIGN_IN_START, signIn);
}
export function* userSagas() {
  yield all([call(signInStart)]);
}
