import React, { useRef, useEffect, useState } from "react";
import { TweenMax, Power4 } from "gsap/all";
import { useCollapseContext } from "./Provider";

const Inner = ({ isOpened, children }) => {
  const { collapseState } = useCollapseContext();
  const innerContainer = useRef();
  const innerInner = useRef();
  useEffect(() => {
    if (collapseState.isOpened) {
      handleOpen();
    } else {
      handleCollapse();
    }
  }, [collapseState.isOpened]);

  const handleOpen = () => {
    let height = innerInner.current.offsetHeight;
    TweenMax.to(innerContainer.current, 0.5, {
      height: height + "px",
      ease: Power4.easeOut,
    });
  };
  const handleCollapse = () => {
    TweenMax.to(innerContainer.current, 0.5, {
      height: 0,
      ease: Power4.easeOut,
    });
  };

  const renderChildren = (children) => {};

  return (
    <div
      style={{
        height: 0,
        overflow: "hidden",
        position: "relative",
        display: "block",
      }}
      ref={innerContainer}
      className="collapse-inner-conatiner"
    >
      <div className="collapse-inner" ref={innerInner}>
        {children}
      </div>
    </div>
  );
};

export default Inner;
