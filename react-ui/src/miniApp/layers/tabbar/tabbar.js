import React, { useState, useEffect, useRef } from "react";
import { TabItem } from "./TabbItem";
import { TabBarMenu } from "./TabBarMenu";
import { useHistory, useLocation } from "react-router-dom";
import { TweenMax, Power4 } from "gsap/all";
import "./tabbar.scss";
import { useTabBarContext } from "./provider";
import { useTabbar } from "../../store/stores/TabbarProvider";

export const Tabbar = ({ props }) => {
  const {
    animatedItem,
    backgroundColor,
    hoverBackgroundColor,
    hoverColor,
    hoverElement,
    hoverOpacity,
    textColor,
    blur,
    activeTabStyle,
    list,
    opacity,
    posStyle,
    style,
  } = props;

  const { stateTabbar } = useTabbar();
  const { tabState } = useTabBarContext();
  const animatedItemDom = useRef();
  const tabbarCover = useRef();
  const mask = useRef();
  let history = useHistory();
  let elements = [];
  let refs = [];
  const [locationState, setLocation] = useState(history.location.pathname);
  const [isAnimationEnd, setAnimationEnd] = useState();
  const [tabList, setList] = useState(props.list);

  const handleTouchStart = (element, index) => {
    let newPos =
      element.current.getBoundingClientRect().left +
      element.current.getBoundingClientRect().width / 2 -
      mask.current.getBoundingClientRect().left;
    TweenMax.to(animatedItemDom.current, 0.3, {
      left: newPos,
      ease: Power4.easeOut,
    });
  };
  useEffect(() => {
    showTabbar(stateTabbar.isShown);
  }, [stateTabbar.isShown]);
  const showTabbar = (show) => {
    TweenMax.to(tabbarCover.current, 0.3, { y: show ? "0%" : "100%" });
  };
  const animatedStyle = () => {
    let type = {
      height: "3pt",
      width: "20pt",
    };
    let pos = {
      bottom: "0px",
      top: "auto",
    };
    if (animatedItem.pos === "top") {
      pos = { bottom: "auto", top: "0px" };
    }
    if (animatedItem.style === "dot") {
      type = { height: "5pt", width: "5pt" };
    }
    if (animatedItem.height) {
      type.height = animatedItem.height;
    }
    return {
      backgroundColor: animatedItem.background,
      height: type.height,
      width: type.width,
      top: pos.top,
      bottom: pos.bottom,
      borderRadius: animatedItem.style === "dot" ? "5pt" : 0,
      position: "absolute",
      transform: "translate(-50%, 0)",
    };
  };

  const closeAnimation = (open) => {
    refs.forEach((element, index) => {
      if (index === refs.length - 1) {
        open && setAnimationEnd(false);
      }

      TweenMax.to(element.current, 0.2, {
        y: open ? -60 * index - 120 : "150%",
        delay: 0.05 * index,

        onComplete: function () {
          if (index === refs.length - 1) {
            setTimeout(() => {
              !open && setAnimationEnd(true);
              console.log(isAnimationEnd, tabState.otherMenuOpened);
            }, 200);
          }
        },
      });
    });
  };

  useEffect(() => {
    closeAnimation(tabState.otherMenuOpened);
  }, [tabState.otherMenuOpened]);

  useEffect(() => {
    console.log(stateTabbar);
    if (
      stateTabbar.currentTab !== stateTabbar.prevTab &&
      stateTabbar.currentTab > 0 &&
      stateTabbar.currentTab < tabList.length - 1
    ) {
      history.push("/" + tabList[stateTabbar.currentTab].pagePath);
    }
  }, [stateTabbar.currentTab]);

  const renderTabList = () => {
    if (list) {
      return list.map((element, index) => {
        let count = 4;
        if (list.length > 4) {
          count = 4;
        }
        if (index <= count) {
          return (
            <TabItem
              key={index}
              activeLocation={locationState}
              onTouch={handleTouchStart}
              pagePath={element.pagePath}
              text={element.text}
              index={index}
              textColor={textColor}
              badge={stateTabbar[element.connect && element.connect.type]}
              icon={element.icon && element.icon}
              activeTabStyle={activeTabStyle && activeTabStyle}
            ></TabItem>
          );
        } else {
          elements.push(element);
          let ref = React.createRef();
          refs.push(ref);
          if (index === list.length - 1) {
            return (
              <TabBarMenu
                key={index}
                text="Menu"
                index={index}
                icon="lni lni-menu"
              ></TabBarMenu>
            );
          }
        }
      });
    }
  };
  return (
    <div
      ref={tabbarCover}
      className="tabbar"
      style={{
        width: "100%",
        position: "fixed",
        left: 0,
        bottom: 0,
        padding: `${posStyle === "detached" ? "10pt" : "0px"}`,
        fontSize: "0.8rem",
      }}
    >
      <div
        className="tabbar-mask"
        ref={mask}
        style={{
          display: "flex",
          overflow: "hidden",
          borderRadius: `${
            style
              ? (style === "rounded" ? "15pt" : "0px") ||
                (style === "roundedTop" ? "25pt 25pt 0 0" : "0px")
              : "0px"
          }`,

          justifyContent: "space-evenly",
          position: "relative",
          height: `${49}pt`,
        }}
      >
        <div
          className="tabbar-background"
          style={{
            filter: `blur(${blur || "#none"})`,
            opacity: `${opacity || "1"}`,
            backgroundColor: `${backgroundColor || "#dedede"}`,
          }}
        ></div>
        {
          <div
            ref={animatedItemDom}
            className="animated-item"
            style={animatedStyle()}
          ></div>
        }
        {renderTabList()}
      </div>

      {tabState.otherMenuOpened || !isAnimationEnd ? (
        <div
          className="other-tabbar-menu"
          style={{
            padding: "20px",
            width: "100%",
            display: "flex",
            flexWrap: "nowrap",
            position: "absolute",
            bottom: "0%",
            left: "0",
            flexDirection: "column",
          }}
        >
          <div className="other-menu-item-container">
            {elements.map((element, index) => {
              return (
                <div
                  ref={refs[index]}
                  key={index}
                  onTouchEnd={() => history.push(`/${element.pagePath}`)}
                  className="other-tabbar-menu-item"
                >
                  <i
                    className={`font-icon ${element.fontIcon || element.icon}`}
                  ></i>

                  {element.text && <p>{element.text}</p>}
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
};
