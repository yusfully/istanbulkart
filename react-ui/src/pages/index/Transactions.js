import React, { Fragment, useState, useEffect } from "react";
import Navigator from "../../miniApp/components/buttons/Navigator";
import List from "../../miniApp/components/list/List";
import Transaction from "./Transaction";
const transactions = [
  {
    uid: "042988E2115180",
    type: "yukleme",
    talimatNo: "7449817",
    date: "21/07/2020, 07:30",
    amount: "20,00",
    balance: "183,33",
    title: "Para yükleme",
  },
  {
    uid: "042988E2115180",
    type: "islem",
    islemNo: "2345231",
    date: "01/06/2020, 18:30",
    amount: "1,45",
    balance: "32,33",
    category: "Market",
    title: "Migros AŞ.",
  },
  {
    uid: "042988E2147180",
    type: "islem",
    islemNo: "2323231",
    date: "04/06/2020, 21:20",
    amount: "1,45",
    balance: "46,93",
    category: "Ulasim",
    title: "İBB Metro",
  },
  {
    uid: "04298303119260",
    type: "islem",
    islemNo: "1220231",
    date: "14/08/2020, 01:10",
    amount: "1,45",
    balance: "46,93",
    category: "Ulasim",
    title: "İETT",
  },
  {
    uid: "0429823115180",
    type: "yukleme",
    talimatNo: "7422817",
    date: "24/07/2020, 02:30",
    amount: "50,00",
    balance: "183,33",
    title: "Para yükleme",
  },
  {
    uid: "042021E2115180",
    type: "islem",
    islemNo: "1293231",
    date: "24/08/2020, 13:20",
    amount: "12250,99",
    balance: "23,00",
    category: "Elektronik",
    title: "MediaMrkt",
  },
  {
    uid: "04202P62115180",
    type: "islem",
    islemNo: "1003231",
    date: "27/08/2020, 20:20",
    amount: "92,00",
    balance: "223,00",
    category: "Tourism",
    title: "Cafe",
  },
  {
    uid: "042988E2115180",
    type: "islem",
    islemNo: "23499031",
    date: "02/09/2020, 08:50",
    amount: "200,00",
    balance: "123,33",
    category: "event",
    title: "Ticket master",
  },
  {
    uid: "04298892315180",
    type: "islem",
    islemNo: "22018031",
    date: "05/09/2020, 18:50",
    amount: "200,00",
    balance: "123,33",
    category: "online",
    title: "Yemek sepeti.com",
  },
];

const Transactions = ({ myCards }) => {
  return (
    <div style={{
      backgroundColor:"#f6f6f7"
    }}>
      <List style="atached" platform="ios" addClass="transaction-lists-cover">
        {transactions.map((element) => {
          return (
            <List.item
              thumb={{
                radius: "10px",
                backgroundColor: "#efefef",
                stroke: "#333333",
                svgIcon: `${element.category}`,
                size: 25,
              }}
              action={{
                type: "collapse",
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
            >
              <List.CollapseList>
                <div className="list-transactions-cover">
                  <div className="list-item-transactions">
                    <div className="title">Kart UID</div>
                    <div className="right-side">{element.uid}</div>
                  </div>
                  <div className="list-item-transactions">
                    <div className="title">
                      {(element.type === "yukleme" && "Talimat ") ||
                        (element.type === "harcama" && "Harcama ")}{" "}
                      No
                    </div>
                    <div className="right-side">{element.talimatNo}</div>
                  </div>
                  <div className="list-item-transactions">
                    <div className="title">
                      {(element.type === "yukleme" && "Talimat ") ||
                        (element.type === "harcama" && "Harcama ")}{" "}
                      tarihi
                    </div>
                    <div className="right-side">{element.date}</div>
                  </div>

                  <div className="list-item-transactions">
                    <div className="title">
                      {(element.type === "yukleme" && "Talimat ") ||
                        (element.type === "harcama" && "Harcama ")}{" "}
                      tutarı
                    </div>
                    <div className="right-side">{element.amount}</div>
                  </div>
                  {element.desc && (
                    <div className="list-item-transactions">
                      <div className="title">Açıklamalar</div>
                      <div className="right-side">{element.desc}</div>
                    </div>
                  )}
                </div>
              </List.CollapseList>
            </List.item>
          );
        })}
      </List>
    </div>
  );
};

export default Transactions;
