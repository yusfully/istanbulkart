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
  },
  {
    uid: "042o46E2115180",
    type: "yukleme", category: "wallet",
    talimatNo: "7449817",
    date: "03/09/2020, 07:30",
    amount: "100,00",
    balance: "183,33",
    title: "Para yükleme",
  },
  {
    uid: "04910250115180",
    type: "yukleme", category: "wallet",
    talimatNo: "7202117",
    date: "02/07/2020, 11:00",
    amount: "10,00",
    balance: "183,33",
    title: "Para yükleme",
  },
  {
    uid: "04223212115180",
    type: "yukleme", category: "wallet",
    talimatNo: "7400817",
    date: "19/06/2020, 12:30",
    amount: "20,00",
    balance: "183,33",
    title: "Para yükleme",
  },
  {
    uid: "0429232315180",
    type: "yukleme", category: "wallet",
    talimatNo: "7239817",
    date: "21/07/2020, 21:30",
    amount: "50,00",
    balance: "183,33",
    title: "Para yükleme",
  },
  {
    uid: "0422399E2115180",
    type: "yukleme", category: "wallet",
    talimatNo: "7449817",
    date: "11/07/2020, 13:00",
    amount: "100,00",
    balance: "183,33",
    title: "Para yükleme",
  },
  {
    uid: "049102323115180",
    type: "yukleme", category: "wallet",
    talimatNo: "7233117",
    date: "21/07/2020, 11:00",
    amount: "10,00",
    balance: "183,33",
    title: "Para yükleme",
  },
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
