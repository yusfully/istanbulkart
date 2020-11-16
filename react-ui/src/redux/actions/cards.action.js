import {
  CARDS_FETCH,
  CARDS_DELETE,
  CARDS_ADD,
  SET_ACTIVE_CARD,
  CHANGE_MAIN_CARD
} from "../actionTypes";

export const fetchCards = (cards) => ({
  type: CARDS_FETCH,
  payload: cards,
});
export const addCard = (number,name) => ({
  type: CARDS_ADD,
  payload:{
    number:number,
    name:name
  } 
});
export const deleteCard = (id) => ({
  type: CARDS_DELETE,
  payload: id,
});
export const setActiveCard = (id,index) => ({
  type: SET_ACTIVE_CARD,
  id: id,
  index:index
});
export const setMainCard = (id) => ({
  type: CHANGE_MAIN_CARD,
  id: id,
});