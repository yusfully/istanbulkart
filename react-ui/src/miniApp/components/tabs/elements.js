import React, { useEffect, useRef, useState, lazy } from "react";
import { useTabContext } from "./provider";

import Slider from "../slider/Slider";

import Scrollable from "../slider/Scrollable";
export const TabListItem = ({ index, children, id, addClass }) => {
  const { tabState, dispatchTabSwipe } = useTabContext();
  const [widthDom, setDomWidth] = useState();
  const [maskActive, setMaskActive] = useState();
  const [itemActive, setitemActive] = useState();
  const item = useRef();
  const mask = useRef();
  const oposite = useRef();
  useEffect(() => {
    if (tabState.pageProgress === index || tabState.nextTab === index) {
      if (tabState.pageProgress === index) {
        setitemActive(true);
      }
      setMaskActive(true);
    } else {
      setMaskActive(false);
    }
    if (tabState.uiStyle) {
      if (tabState.pageProgress === index) {
        if (tabState.nextTab > index) {
          setDomWidth(
            tabState.animatedItemstate.left - item.current.offsetLeft
          );
        } else if (tabState.nextTab < index) {
          setDomWidth(
            tabState.animatedItemstate.left -
              item.current.offsetLeft +
              (tabState.animatedItemstate.width - item.current.offsetWidth)
          );
        } else {
          setDomWidth(
            tabState.animatedItemstate.left - item.current.offsetLeft
          );
        }
      }
      if (tabState.nextTab === index) {
        if (tabState.pageProgress < index) {
          setDomWidth(
            tabState.animatedItemstate.left -
              item.current.offsetLeft +
              (tabState.animatedItemstate.width - item.current.offsetWidth)
          );
        } else if (tabState.pageProgress > index) {
          setDomWidth(
            tabState.animatedItemstate.left - item.current.offsetLeft
          );
        } else {
          setDomWidth(
            tabState.animatedItemstate.left - item.current.offsetLeft
          );
        }
      }
    }
  }, [tabState.animatedItemstate]);

  const handleClick = (e) => {
    dispatchTabSwipe({
      type: "goTo",

      target: index,
    });
  };

  return (
    <div
      ref={item}
      id={id}
      className={`tab-item ${itemActive ? "tab-active" : ""} ${
        addClass ? addClass : ""
      } ${tabState.shape ? tabState.shape : ""}`}
      onClick={(e) => handleClick(e)}
    >
      {tabState.uiStyle && (
        <div className="mask-cover">
          <div
            style={{
              left: widthDom + "px",
              width: "100%",
              opacity: `${maskActive ? 1 : 0}`,
              height: tabState.animatedItem.height,
            }}
            ref={mask}
            className="mask tab-item"
          >
            <span
              className="center-tab-item"
              style={{
                transform: `translate(${widthDom * -1 + "px,0"})`,
              }}
              ref={oposite}
            >
              {children}
            </span>
          </div>
        </div>
      )}
      <span className="center-tab-item">{children}</span>
    </div>
  );
};

export const TabContent = ({
  swipe,
  carousel,
  onTabChange,
  onProgressTab,
  lock
}) => {
  const { tabState, dispatchTabSwipe } = useTabContext();

  const [content, setContents] = useState();
  const momentum = useRef();
  useEffect(() => {
    if (tabState.goTo != null) {
      scrollableContent.current.goToSlider(tabState.goTo);
    }
  }, [tabState.goTo]);
  useEffect(() => {

  
    let contents = tabState.contents.map((component) => {
      const Component = component();
      return Component;
    });
    setContents(contents);
  }, [tabState.contents]);

  useEffect(() => {
    onProgressTab &&
      onProgressTab(
        tabState.nextTab,
        tabState.pageProgress,
        tabState.swipeProgress,
        momentum.current
      );
  }, [tabState.swipeProgress]);

  const scrollableContent = useRef();
  

  const currentTabChanged = (current, prev) => {
    dispatchTabSwipe({
      type: "tabchanged",

      current: current,
      prev: prev,
      progress: 0,
    });
    onTabChange && onTabChange(current);
  };
  const onSwipping = (index, pageProgress, next, delta) => {
    momentum.current = delta;
    dispatchTabSwipe({
      type: "scrollChanged",
      progress: index,
      pageProgress: pageProgress,
      nextTab: next,
    });
  };


  const renderElements = () => {
  
    let elements = [];
    let i = -1;

    while (++i <= tabState.totalElement - 1) {

      
      elements.push(
        carousel ? (
          content[i]
        ) : (
          <div
            style={{
              flex: "0 0 100%",
              maxWidth: "100%",
            }}
            className="tab-content-item"
            key={i}
          >
           
              {content[i]}
             
          </div>
        )
      );
    }

    return elements;
  };

  const handleSwipeEnd = (e) => {
    dispatchTabSwipe({
      type: "swipeEnd",
    });
  };
  const handleSwipeStart = (e) => {
    dispatchTabSwipe({
      type: "swipeStart",
    });
  };
  return (
    <div
      style={{ minHeight: `${tabState.height+20 }px` }}
      className="tab-content-cover"
    >
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      >
        <Slider
          width={tabState.width ? tabState.width : window.innerWidth}
          height={tabState.height ? tabState.height : "auto"}
          snapSwipe
          ref={scrollableContent}
          damping={0.1}
          direction={carousel ? tabState.direction : "x"}
          onTouchEnd={handleSwipeEnd}
          onCurrentTabChanged={currentTabChanged}
          onSwiping={onSwipping}
          onTouchStart={handleSwipeStart}
          snapSwipe={swipe}
          lock={lock}
        >
          <div
            style={{
              display: "flex",
              flexWrap: `${tabState.direction === "y" ? "wrap" : "nowrap"}`,
              minHeight: `${tabState.height ? tabState.height + "px" : "100%"}`,
              minWidth: `${
                tabState.width * tabState.totalElement +
                (window.innerWidth - tabState.width)
              }px`,
              padding: `0 ${(window.innerWidth - tabState.width) / 2}px`,
            }}
            className="tab-content"
          >
            {content && renderElements()}
          </div>
        </Slider>
      </div>
    </div>
  );
};
