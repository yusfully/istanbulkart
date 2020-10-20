import React, { useState, useEffect, useRef } from "react";
import Carousel from "../../miniApp/components/carousel/carousel";
import { Tab } from "../../miniApp/components/tabs";
import { useRouteMatch, useHistory } from "react-router-dom";
import CardTemplate from "./CardTemplate";
import CardTemplateAdd from "./CardTemplateAdd";
import { connect } from "react-redux";
import Transactions from "./Transactions";
import Orders from "./Orders";
import { addMoney, setMoney } from "../../redux/actions/money.action";
import SwipablePage from "../../miniApp/components/swipablepage/swipablepage";
import AddMoney from "./AddMoney";
import ActionSheet from "../../miniApp/components/actionsheet/ActionSheet";
import { resetMoney } from "../../redux/actions/money.action";
import {setActiveCard} from "../../redux/actions/cards.action";

import SvgIcon from "../../miniApp/components/icon/svg/SvgIcon";

import "./index.scss";

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
  250: {
    text: "250",
  },
  500: {
    text: "500",
  },
  1000: {
    text: "1000",
  },
  plus: {
    text: "+",
  },
};
const TabListElement = [
  {
    title: "İşlemlerim",
    name: "shop",
    component: () => <Transactions page={"page-1"} />,
  },
  {
    title: "Talimatlar",
    name: "card",
    component: () => <Orders page={"page-3"} />,
  },
];

const Index = ({ activeCard,setActiveCard, myCards, addMoney, amount, setMoney, resetMoney }) => {



  const scrollCase = useRef();
  const addMoneyComp = useRef();
  const cardProg = useRef();
  const active = useRef();
  const swipePage = useRef();
  const history = useHistory();
  const match = useRouteMatch();
  const [isPlusActive, setisPlusActive] = useState(true);
  const [scrollDragLimit, setLimit] = useState();
  const [cardList, setcards] = useState();
  const [lock, setLock] = useState(true);
  const [progress, setProgress] = useState();
  const [cardProgress, setCardProgress] = useState();

  useEffect(() => {
   
    setLimit(
      (window.innerHeight * 2 / 3) -
      window.innerHeight-swipePage.current.domEl.getBoundingClientRect().top*-1
    );
  }, []);

 
  useEffect(() => {
  

    scrollCase.current = "start";
  }, [myCards]);

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
        <div style={{
          height:`${window.innerWidth*0.72*0.55}px`
        }} className="template">
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

    let add = (
      <div className="template">
        <CardTemplateAdd></CardTemplateAdd>
      </div>
    );

    cardsarr.push(add);
    return cardsarr;
  };
  useEffect(() => {
    
    console.log(match)
  }, []);
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
    
    setActiveCard(Object.keys(myCards)[index],index);

  
  
    if (myCards[Object.keys(myCards)[index]]) {
     

      history.push(Object.keys(myCards)[index]);
    } else {
      history.push(match.path + "newcard");
    }
  };

  const handleCardProgress = (next, prev, progress, delta) => {
    setCardProgress({
      next: next,
      prev: prev,
      progress: progress,
      delta: delta,
    });
  };

  const handleAddMoney = () => {
    addMoneyComp.current.open();
  };

  const handleFinishScroll = (isfinished) => {
    swipePage.current.scrollPos(isfinished);
  };

  return (
    <div className="transaction-list">
    <div className="card-list-cover"> 
    
   {myCards && <Carousel
    id="myCards"
    direction="x"
    swipe
    defaultCard={activeCard}
    type="dots"
    shape="circle"
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
  <div className="card-amount-cover">
  <div className="card-amount">
          <small>BAKİYE</small>
          <div className="amount-cover-text">
            <span className="amount">{myCards[activeCard.id].amount}</span>
            <span class="price-icon">₺</span>
          </div>
        </div> <div
        onClick={handleAddMoney}
         className="action">
        PARA YÜKLE
        </div></div>
  
  </div>

      <div className="transaction-list-cover">

        <SwipablePage
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
              lock={lock || false}
              activeColor="#ffffff"
              onTabScrollFinish={(isFinished) => handleFinishScroll(isFinished)}
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
                      component={element.component}
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
                            fontSize: "14px",
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
