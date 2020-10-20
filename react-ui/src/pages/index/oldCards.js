import React, { Fragment, useState, useEffect } from "react";
import Carousel from "../../miniApp/components/carousel/carousel";
import { Tab } from "../../miniApp/components/tabs";
import { useRouteMatch, useHistory, Router } from "react-router-dom";
import CardTemplate from "./CardTemplate";
import { connect } from "react-redux";
import Transactions from "./Transactions";
import Offers from "./Offers";
import AddMoney from "./AddMoney";
import SvgIcon from "../../miniApp/components/icon/svg/SvgIcon";

import "./index.scss";

const TabListElement = [
  {
    title: "İşlemlerim",
    name: "shop",
    component: () => <Transactions page={"page-1"} />,
  },
  {
    title: "Para yükle",
    name: "gear",
    component: () => <AddMoney page={"page-2"} />,
  },
  {
    title: "Talimatlar",
    name: "card",
    component: () => <Offers page={"page-3"} />,
  },
];

const Index = ({ myCards }) => {
  const history = useHistory();
  const match = useRouteMatch();
  const [cardList, setcards] = useState();
  const [activeCard, setActiveCard] = useState(
    myCards.cards.length > 0
      ? myCards.cards.findIndex((element) => element.isMain === true)
      : 0
  );

  useEffect(() => {
    if (myCards) {
      const { cards } = myCards;
      setcards(cards);

      if (myCards.cards.length > 0) {
        let indexActive = myCards.cards.findIndex(
          (element) => element.isMain === true
        );

        history.push(match.url + "/" + myCards.cards[indexActive].id);
        setActiveCard(indexActive);
      } else {
      }
      if (myCards.cards.length > 0) {
        let indexActive = myCards.cards.findIndex(
          (element) => element.isMain === true
        );
        setActiveCard(indexActive);
      }
    }
  }, [myCards]);

  const handleProgress = (progress) => {
    debugger;
  };
  const handleActive = (index) => {
    debugger;
  };

  return (
    <Router path={match.path}>
      <div className="transaction-list">
        {cardList ? (
          <Carousel
            id="myCards"
            direction="x"
            swipe
            defaultCard={activeCard}
            type="dots"
            shape="rectangle"
            customSize={{
              width: "72",
              dimension: {
                width: 1,
                height: 0.55,
              },
            }}
          >
            {cardList.map((element) => {
              return (
                <div className="template">
                  <CardTemplate
                    name={element.name}
                    number={element.number}
                    id={element.id}
                    amount={element.amount}
                    isMain={element.isMain}
                  ></CardTemplate>
                </div>
              );
            })}
          </Carousel>
        ) : (
          <div>Loading...</div>
        )}

        <Tab swipe selected={0} color="#333333" activeColor="#ffffff">
          <Tab.TabList>
            {TabListElement.map((element, index) => {
              return (
                <Tab.TabListItem
                  id={`tab2-${index}`}
                  component={element.component}
                  index={index}
                  addClass="tab-list"
                  onProgress={(progress) => handleProgress(progress)}
                  onActive={(index) => handleActive(index)}
                >
                  <div className="">
                    <SvgIcon
                      name={element.name}
                      circle
                      circleBorder
                      stroke={"#333333"}
                      strokeWidth={"2"}
                      size="25"
                    ></SvgIcon>
                  </div>
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
    </Router>
  );
};

const mapStateToProps = (state) => ({
  myCards: state.myCards,
});

export default connect(mapStateToProps, null)(Index);
