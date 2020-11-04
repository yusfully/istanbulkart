import React, { useRef, useEffect, useState } from "react";
import { useCollapseContext } from "./Provider";

const Body = ({ children, action,close,index }) => {
  const {collapseState, dispatchCollapse } = useCollapseContext();

  const touchStart = useRef()

  const handleTouchStart = (e) => {
    
    touchStart.current=e.touches[0].clientY
 
  };

  const handleTouchMove = (e) => {

   if(e.touches[0].clientY-touchStart.current>5 ||  e.touches[0].clientY-touchStart.current<-5){
    dispatchCollapse({type:"scrolling",scrolling:false})
   }else{
    dispatchCollapse({type:"scrolling",scrolling:true})
   }
  };
  const handleTouchEnd = (e) => {
    
    if ( collapseState.scrolling) {
      
      dispatchCollapse({
        type: "onOpened",
      });
    } else {
      e.preventDefault();
      
      
    }
    dispatchCollapse({type:"scrolling",scrolling:true})
  };

  useEffect(() => {

    if(close)
    {
   
      dispatchCollapse({
      type: "close",
    });
  }
  }, [close])
  return (
    <div
    
      onTouchStart={(e) => handleTouchStart(e)}
      onTouchMove={(e) => handleTouchMove(e)}
      onTouchEnd={(e) => handleTouchEnd(e)}
      className="collapse-body"
    >
      {children}
    </div>
  );
};

export default Body;
