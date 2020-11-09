import React, { Fragment, useState, useEffect } from "react";
import Navigator from "../../miniApp/components/buttons/Navigator";
import List from "../../miniApp/components/list/List";
import Transaction from "./Transaction";
const transactions = [
  {
    uid: "042988E2115180",
    type: "yukleme", category: "wallet",
    talimatNo: "7449817",
    date: "18/08/2020, 23:30",
    amount: "20,00",
    balance: "183,33",
    title: "Para yükleme",
  },
  {
    uid: "0429s942115180",
    type: "yukleme", category: "wallet",
    talimatNo: "7239817",
    date: "16/06/2020, 21:30",
    amount: "50,00",
    balance: "183,33",
    title: "Para yükleme",
  }

];

const Transactions = ({ myCards }) => {
  return (
    <Fragment>
      <List style="atached" platform="ios" addClass="transaction-lists-cover">
        {transactions.map((element) => {
          return (
            <Navigator
              target={{
                component: () => <Transaction />,
                openStyle: "fromRight",
                goBackWith: "arrow",
                pathType: "location",
                router: element.type,
                params: { id: element.uid },
                type: "newPage",
              }}
              openType="navigate"
            >
              <List.item
                thumb={{
                  radius: "10px",
                  backgroundColor: "#ffffff",
                  stroke: "#333333",
                  svgIcon: `${element.category}`,
                  size: 25,
                }}
                align="middle"
                small={element.date}
                text={element.title}
                rightSide={
                  <div
                    style={{
                      color: `${
                        element.type === "yukleme" ? "#219653" : "#EB5757"
                      }`,
                    }}
                  >
                    {element.amount}
                  </div>
                }
              ></List.item>
            </Navigator>
          );
        })}
      </List>
    </Fragment>
  );
};

export default Transactions;
