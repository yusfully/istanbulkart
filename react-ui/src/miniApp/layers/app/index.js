import React,{useEffect,useRef} from "react";
import NavigationPortal from "../../components/pager/NavigationPortal";
import { Route,useHistory,useRouteMatch } from "react-router-dom";
import {fetchCards, setActiveCard} from "../../../redux/actions/cards.action"
import Index from "../../../pages/index"
import { connect } from "react-redux";

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
const AppInner = ({myCards,fetchCards,setActiveCard}) => {
const stableHeight = useRef()


const history=useHistory()
const match=useRouteMatch()



useEffect(() => {
  if(!myCards.cards){
    fetchCards(data)
  }
}, [])

useEffect(() => {

  if(myCards.cards){

    history.push(match.path+"cards/"+myCards.mainCard)
  }
}, [myCards.cards])


  return (
    <div ref={stableHeight} className="app-inner">
      <NavigationPortal> </NavigationPortal>
      <Route path="/cards">
        <Index />
      </Route>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  fetchCards: (cards) => dispatch(fetchCards(cards)),
  setActiveCard: (index,id) => dispatch(setActiveCard(index,id)),
});
const mapStateToProps = (state) => ({
  myCards: state.myCards,
});

export default connect(mapStateToProps, mapDispatchToProps)(AppInner);
