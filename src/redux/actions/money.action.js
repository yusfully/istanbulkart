import { ADD_MONEY, RESET_MONEY, PAY_MONEY, SET_MONEY } from "../actionTypes";

export const addMoney = (amount) => ({
  type: ADD_MONEY,
  payload: amount,
});
export const setMoney = (amount) => ({
  type: SET_MONEY,
  payload: amount,
});
export const resetMoney = () => ({
  type: RESET_MONEY,
});
export const payMoney = (cardId) => ({
  type: PAY_MONEY,
  payload: cardId,
});
