import React, { Fragment, useState, useEffect,useRef } from "react";
import { useRouteMatch } from "react-router-dom";
import List from "../../miniApp/components/list/List";
import SvgIcon from "../../miniApp/components/icon/svg/SvgIcon";
import Scrollable from "../../miniApp/components/slider/Scrollable"
const TransactionsList = ({transactions,lock,onFinish}) => {
  const match = useRouteMatch();
  const [scrollTo, setScroll] = useState(0)
  const scrollableInner = useRef();
  useEffect(() => {
    
   
  }, [transactions]);
  const handleCollapseOpened=(height,top,openedPrev)=>{
 
    if(openedPrev){
      setScroll(top)
      
    }else{
      if(scrollTo>top){
       
        setScroll(top)
      }else{
        setScroll(top-114)
      }
      
    }
    
  
  }

  useEffect(() => {
    scrollableInner.current.scrollTo(scrollTo)
  }, [scrollTo])
  const handleScrollContent = (offset, limit, data) => {
    if (onFinish) {
      if (offset.y === 0) {
        onFinish("start");
      } else if (offset.y === data.limit.y) {
        onFinish("finish");
      } else {
        onFinish("mid");
      }
    }
  };
  return (
    <Scrollable
    ref={scrollableInner}
    damping={0.1}
    continuousScrolling={true}
    direction="y"
    lock={lock || false}
    onScroll={handleScrollContent}
  >
    <div style={{
backgroundColor:"#f6f6f7"
}}>
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
          onCollapseOpened={(height,top,openedPrev)=>handleCollapseOpened(height,top,openedPrev)}
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
    <h3>İşleminiz bulunmamaktadır</h3>
    </div> : <div>Loading</div>}
    </List>
    </div></Scrollable>
  );
};

export default TransactionsList;
