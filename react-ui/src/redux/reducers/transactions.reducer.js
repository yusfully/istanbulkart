import {
  TRANSACTION_FETCH,
  TRANSACTION_FILTER,
  TRANSACTION_GET
} from "../actionTypes";
import {sortTransactions,filterTransactions} from "./helpers"



const INITIAL_STATE = {
  transactions: null,
  error: null,
};

const transactionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRANSACTION_FETCH:

      return {
        ...state,
        transactions: sortTransactions(action.payload),
      };
     
    case TRANSACTION_GET:
      return {
        ...state,
        transactions: action.payload.id,
      };
   
    default:
      return state;
  }
};

export default transactionReducer;
