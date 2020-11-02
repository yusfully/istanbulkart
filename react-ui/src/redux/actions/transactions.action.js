import {
  TRANSACTION_FETCH,
  TRANSACTION_FILTER,
  TRANSACTION_GET
} from "../actionTypes";

export const fetchTransaction = (transactions) => ({
  type: TRANSACTION_FETCH,
  payload: transactions,
});
export const filterTransaction = (filter) => ({
  type: TRANSACTION_FILTER,
  payload: filter,
});
export const getTransaction = (id) => ({
  type: TRANSACTION_GET,
  payload: id,
});
