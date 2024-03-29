import React, { useState, useEffect, useRef } from "react";
import Carousel from "../../miniApp/components/carousel/carousel";
import { Tab } from "../../miniApp/components/tabs";
import { useRouteMatch, useHistory , Route} from "react-router-dom";
import CardTemplate from "./CardTemplate";
import { connect } from "react-redux";
import Transactions from "./Transactions";
import Orders from "./Orders";
import Modal from "../../miniApp/components/modal/Modal"
import { addMoney, setMoney } from "../../redux/actions/money.action";
import SwipablePage from "../../miniApp/components/swipablepage/swipablepage";
import AddMoney from "./AddMoney";
import ActionSheet from "../../miniApp/components/actionsheet/ActionSheet";
import { resetMoney } from "../../redux/actions/money.action";
import {setActiveCard} from "../../redux/actions/cards.action";
import { useCardsContext } from "./Provider";

import "./index.scss";
import AddNewCard from "./AddNewCard";
import SvgIcon from "../../miniApp/components/icon/svg/SvgIcon";
import CardOptionsDialogs from "./CardOptionsDialogs";

const moneyData = {
  5: {
    text: "5",
  },
  10: {
    text: "10",
  },
  20: {
    text: "20",
  },
  50: {
    text: "50",
  },
  100: {
    text: "100",
  },
  plus: {
    text: "+",
  },
};

const TabListElement = [
  {
    title: "İşlemlerim",
    name: "islemler",
  },
  {
    title: "Talimatlar",
    name: "talimatlar",
  },
];
const Index = ({ activeCard,setActiveCard, myCards, addMoney, amount, setMoney, resetMoney }) => {


const topPart = useRef()
  const scrollCase = useRef();
  const addMoneyComp = useRef();
  const height = useRef(window.innerWidth*0.72*0.55)
  const cardProg = useRef();
  const active = useRef();
  const swipePage = useRef();
  const history = useHistory();
  const match = useRouteMatch();

  const { cardsState, cardsDispatch}=useCardsContext()
  const [isAddCardVisible, setisAddCardVisible] = useState(false);
  const [isPlusActive, setisPlusActive] = useState(true);
  const [scrollDragLimit, setLimit] = useState();
  const [topPartHeight, settopPartHeight] = useState(height.current+20);
  const [lock, setLock] = useState(true);
  const [progress, setProgress] = useState();
  const [cardProgress, setCardProgress] = useState();

  useEffect(() => {
  
    setLimit(
      110
    );
  }, []);

 
  useEffect(() => {
  

    scrollCase.current = "start";

   
  }, [myCards]);

  useEffect(() => {
    cardsDispatch({type:"isLocked",isLocked:lock})
  }, [lock])
  const callbackFunction = (islock) => {

    setLock(islock);
  };
  const moneyClosed = () => {
    resetMoney();
  };

  const itemClick = (index) => {
    if (index === "plus") {
      setisPlusActive(true);
      return;
    } else {
      if (isPlusActive) {
        addMoney(index);
        setisPlusActive(false);
      } else {
        setMoney(index);
      }
    }
  };

  const renderCards = () => {

    let cardsarr = Object.keys(myCards).map((element, index) => {
  
      return (
        <div  className={`${index===activeCard.index ? "activeCard" : ""} template`}>
          <CardTemplate
            activeCard={active}
            index={index}
           
            cardPos={cardProg}
            name={myCards[element].name}
            number={myCards[element].number}
            id={myCards[element].id}
            amount={myCards[element].amount}
            isMain={myCards[element].isMain}
          ></CardTemplate>
        </div>
      );
    });

    

    
    return cardsarr;
  };
 
  useEffect(() => {
    cardProg.current = cardProgress;
  }, [cardProgress]);

  useEffect(() => {
    
    active.current = activeCard.index;
  }, [activeCard]);
  const handleProgress = (next, prev, progress) => {
    setProgress({
      progress: progress,
      next: next,
      prev: prev,
    });
  };
  const handleCardChange = (index) => {
    if(index<0){
      index=0
    }
    setActiveCard(Object.keys(myCards)[index],index);

  
  
    if (myCards[Object.keys(myCards)[index]]) {
     

      history.push(Object.keys(myCards)[index]);
    }
  };

  const handleCardProgress = (next, prev, progress, delta) => {
    setCardProgress({
      next: next,
      prev: prev,
      progress: progress,
      delta: delta,
    });
  }

  const handlePageDrag=(pos)=>{
let rate=pos/scrollDragLimit
let posTotal=topPartHeight+pos
    topPart.current.style.height=posTotal+20+"px"


    
    cardsDispatch({type:"changeHeight",height:-pos-20})
 }

 const handleAddCard=()=>{
   
  setisAddCardVisible(true)
 }


  const handleAddMoney = () => {
    addMoneyComp.current.open();
  };

  const handleFinishScroll = (isfinished) => {
   if( swipePage.current){
    swipePage.current.scrollPos(isfinished);
   }
     
  
   
  };

  return (
    <div className="transaction-list">
    <div className="card-amount-cover">
    <div className="amount">
    <small>BAKİYE</small>
  <div className="amount-cover"><div  className="amount">{myCards[activeCard.id].amount}</div><span class="price-icon">₺</span></div></div>
  <div
          onClick={handleAddMoney}
           className="action">
          PARA YÜKLE
          </div></div>

 <div style={{
   position:"relative",
   overflow:"hidden"
 }}>
    <div ref={topPart} className="card-list-cover"> 
   
   {myCards && <Carousel
    id="myCards"
    direction="x"
    swipe
    defaultCard={activeCard}
    type="dots"
    shape="circle"
    lock={cardsState.lockCards}
    onProgressSlide={(progress, next, prev, delta) =>
      handleCardProgress(progress, next, prev, delta)
    }
    onSlideChange={handleCardChange}
    customSize={{
      width: "72",
      dimension: {
        width: 1,
        height: 0.55,
      },
    }}
  >
  
    {renderCards()}
  </Carousel>}

<div onClick={()=>handleAddCard()} className="add-card">
  <div className="cards-count">
 <p ><span className="active-card-num">{activeCard.index+1}</span><span className="total-card-num">{Object.keys(myCards).length}</span></p>
  </div>
  <div className="add-card-action">
  <span className="add-card-action-label">KART EKLE</span>
  <SvgIcon
  name="plus"
  stroke={"#54420a"}
  strokeWidth={"25"}
  size={16}
  lineCap="rounded"
  join="rounded"
></SvgIcon>
  </div>
  </div>
   
  </div>

 

  <div className="card-num-bg">
  {activeCard.index+1}</div></div>

  
      <div className="transaction-list-cover">

        <SwipablePage
        onDrag={((pos)=>handlePageDrag(pos))}
          limit={scrollDragLimit}
          lock={(islocked) => callbackFunction(islocked)}
          ref={swipePage}
        >
          <div className="swipable-list">
            <Tab
              onProgressTab={(progress, next, prev, isFinished) =>
                handleProgress(progress, next, prev, isFinished)
              }
              selected={0}
              color="#333333"
             
              activeColor="#ffffff"
             
              animatedItem={{
                backGroundColor: "#333333",
                height: "2px",
                borderRadius: "2px",
              }}
            >
              <Tab.TabList>
                {TabListElement.map((element, index) => {
                  return (
                    <Tab.TabListItem
                      id={`tab2-${index}`}
                      component={()=> element.name ==="islemler" ? <Transactions  onFinish={(isfinished)=>handleFinishScroll(isfinished)} type={element.name}   /> : <Orders onFinish={(isfinished)=>handleFinishScroll(isfinished)} type={element.name}   />}
                      index={index}
                      addClass="tab-list"
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          position: "relative",
                        }}
                      ></div>
                      <div>
                        <p
                          style={{
                            fontSize: "13pt",
    fontFamily: 'bw-mitga-bold'
                          }}
                        >
                          {element.title}
                        </p>
                      </div>
                    </Tab.TabListItem>
                  );
                })}
              </Tab.TabList>
            </Tab>
          </div>
        </SwipablePage>
      </div>
      <ActionSheet
        isPlusDisable={amount === 0 ? true : false}
        itemClick={itemClick}
        ref={addMoneyComp}
        style="horizontalButtons"
        title="Para ekle"
        controls={moneyData}
        onClosed={moneyClosed}
      >
        <AddMoney></AddMoney>
      </ActionSheet>
      
      <Modal
      id="modal-2"
     
      transitionEnter="slidebottom"
      transitionGone="slidetop"
      className="modal-full"
      title="YENİ KART EKLE" 
       wrapClassName="vertical-center-modal"
  
      visible={isAddCardVisible}
      overlay={{
        backGroundColor: "#333",
        opacity: 0.5,
      }}
      close={() => setisAddCardVisible(false)}
    >
    <AddNewCard></AddNewCard>
    </Modal>
    <Route path={match.path+"/delete"}>
  
    <CardOptionsDialogs type="delete"></CardOptionsDialogs>
    </Route>
    <Route path={match.path+"/setMain"}>
  
    <CardOptionsDialogs type="setMain"></CardOptionsDialogs>
    </Route>
    </div>
   
  );
};

const mapDispatchToProps = (dispatch) => ({
  addMoney: (amount) => dispatch(addMoney(amount)),
  setMoney: (amount) => dispatch(setMoney(amount)),
  resetMoney: () => dispatch(resetMoney()),
  setActiveCard: (id,index) => dispatch(setActiveCard(id,index)),
  
});
const mapStateToProps = (state) => ({
  myCards: state.myCards.cards,
  amount: state.addedMoney.moneyAdded,
  activeCard:state.myCards.activeCard
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
