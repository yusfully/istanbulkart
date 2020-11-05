import {
  CARDS_FETCH,
  CARDS_DELETE,
  CARDS_ADD,
  SET_ACTIVE_CARD,
  CHANGE_MAIN_CARD,

} from "../actionTypes";
import {sortCard} from "./helpers"
import _ from 'lodash';


const INITIAL_STATE = {
  cards: null,
  error: null,
  activeCard: {id:"askugyfdn92378rtyx9238yrx92",
index:0},
mainCard:"askugyfdn92378rtyx9238yrx92"
};

const cardsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CARDS_FETCH:

      return {
        ...state,
        cards: sortCard(action.payload),
      };
      case CHANGE_MAIN_CARD:

        return {
          ...state,
          mainCard: action.id,
        };
    case CARDS_ADD:
      return {
        ...state,
        cards: action.payload,
      };
    case SET_ACTIVE_CARD:
   
      return {
        ...state,
        activeCard: {
          id:action.id,
          index:action.index
        },
      };
    case CARDS_DELETE:
      return {
        ...state,
        cards: _.omit(state.cards, action.payload)
      };

    default:
      return state;
  }
};

export default cardsReducer;
