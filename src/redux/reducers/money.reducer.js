import { ADD_MONEY, RESET_MONEY, SET_MONEY, PAY_MONEY } from "../actionTypes";

const INITIAL_STATE = {
  moneyAdded: 0,
  cardId: "",
  error: null,
};

const moneyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_MONEY:
      return {
        ...state,
        moneyAdded: state.moneyAdded + Number(action.payload),
      };
    case SET_MONEY:
      return {
        ...state,
        moneyAdded: Number(action.payload),
      };
    case RESET_MONEY:
      return {
        ...state,
        moneyAdded: 0,
      };

    case PAY_MONEY:
      return {
        ...state,
        moneyAdded: state.moneyAdded,
        cardId: action.payload,
      };

    default:
      return state;
  }
};

export default moneyReducer;
