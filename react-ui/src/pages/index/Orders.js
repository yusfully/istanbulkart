import React, { Fragment, useState, useEffect } from "react";
import List from "../../miniApp/components/list/List";
import SvgIcon from "../../miniApp/components/icon/svg/SvgIcon";
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
      {transactions ? transactions.length>0 ? transactions.map((element,index) => {
    
        return (
      
          <List.item  
      
         addClass={`${element.category}`}
          id={`transaction-${element.islemNo ? element.islemNo : element.talimatNo ? element.talimatNo : index}`}
          key={`transaction-${index}`}
            thumb={{
              radius: "10px",
              backgroundColor: "#ffffff",
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
                      (element.type === "islem" && "İşlem ")}
                    No
                  </div>
                  <div className="right-side">{element.talimatNo ? element.talimatNo : element.islemNo ? element.islemNo : "" }</div>
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
      }) : <div className="empty-screen">
      <SvgIcon
      name={"warning"}
      stroke={"#333333"}
      strokeWidth={"10"}
      size={70}
      lineCap="rounded"
      join="rounded"
      ></SvgIcon>
      <h3>Talimatınız bulunmamaktadır</h3>
      </div> : <div>Loading</div>}
      </List>
    </Fragment>
  );
};

export default Transactions;
