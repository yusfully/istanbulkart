import { combineReducers } from "redux";
import userReducer from "./reducers/user.reducer";
import cardsReducer from "./reducers/cards.reducer";
import moneyReducer from "./reducers/money.reducer";
import transactionReducer from "./reducers/transactions.reducer";

const rootReducer = combineReducers({
  auth: userReducer,
  myCards: cardsReducer,
  addedMoney: moneyReducer,
  transactions:transactionReducer
});

export default rootReducer;
