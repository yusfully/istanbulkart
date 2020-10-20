import {
  CARDS_FETCH,
  CARDS_DELETE,
  CARDS_ADD,
  SET_ACTIVE_CARD,
} from "../actionTypes";
import _ from 'lodash';


const INITIAL_STATE = {
  cards: null,
  error: null,
  activeCard: {id:"98a7f98enxf9q8wenf98nrx7",
index:0},
};

const cardsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CARDS_FETCH:

      return {
        ...state,
        cards: _.mapKeys(action.payload, "id"),
      };
    case CARDS_ADD:
      return {
        ...state,
        cards: null,
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
        error: action.payload,
      };

    default:
      return state;
  }
};

export default cardsReducer;
