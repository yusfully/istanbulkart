
import React, { useState,useEffect } from "react";
import {fetchCards, setActiveCard} from "../../redux/actions/cards.action"
import {Route,useRouteMatch,useHistory} from "react-router-dom"
import { PageProvider } from "./Provider";
import { connect } from "react-redux";

import Cards from "./Cards";
const data = [
  {
    id: "98a7f98enxf9q8wenf98nrx7",
    name: "Yusuf Ozturk",
    number: "12 3234 2342 8843 3322",
    amount: "153.00",
    isMain: false,
  },
  {
    id: "askugyfdn92378rtyx9238yrx92",
    name: "Berrak Edin Yılmaz",
    number: "12 2342 0002 1992 2233",
    amount: "0.10",
    isMain: true,
  },
  {
    id: "ksjhdfna98s7dn9as8nydfaıusfh",
    name: "Furkan Konyalı",
    number: "12 52 0022 2299 1101",
    amount: "9.85",
    isMain: false,
  },
  {
    id: "23874n293847n928374n92837n",
    name: "Sevmediğim kart",
    number: "12 4400 1100 1112 9999",
    amount: "1234.43",
    isMain: false,
  },
  {
    id: "asdasda09823740293740dn1283",
    name: "Sevdiğim kart",
    number: "12 3434 1100 8492 9999",
    amount: "1234.43",
    isMain: false,
  },
];

const Index = ({ fetchCards, myCards,setActiveCard }) => {
 let match=useRouteMatch()
let history=useHistory()
  useEffect(() => {
   
    setActiveCard(myCards.cards[Object.keys(myCards.cards)[myCards.mainCard]].id,myCards.mainCard)
    if(!myCards.cards){
      fetchCards(data)
    }else{
 
      history.push(match.path+"/"+myCards.cards[Object.keys(myCards.cards)[myCards.mainCard]].id)
    }
   
  }, [])



 
  return ( 
    <PageProvider>
    <Route path={match.path+"/:id"}>
   { myCards.cards ? <Cards/> : <div className="loading">loading</div>}
    </Route></PageProvider>
  )
}


const mapDispatchToProps = (dispatch) => ({
  fetchCards: (cards) => dispatch(fetchCards(cards)),
  setActiveCard: (index,id) => dispatch(setActiveCard(index,id)),
});
const mapStateToProps = (state) => ({
  myCards: state.myCards,
});
export default connect(mapStateToProps, mapDispatchToProps)(Index);
