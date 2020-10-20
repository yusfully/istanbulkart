import React, { createContext, useReducer, useContext } from "react";

const TabContext = createContext();
export const ActionTypes = {
  scrollChanged: "scrollChanged",
  tabchanged: "tabchanged",
  swipeStart: "swipeStart",
  swipeEnd: "swipeEnd",
  animatedItemstate: "animatedItemstate",
  goTo: "goTo",
  totalElement: "totalElement",
  isTouchMove: "isTouchMove",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.tabchanged:
      return {
        ...state,
        currentTab: action.current,
        prevCurrentTab: action.prev,
        totalProgres: action.progres,
      };
    case ActionTypes.isTouchMove:
      return {
        ...state,
        isTouchMove: action.isTouchMove,

        willChange: action.willChange,
      };
    case ActionTypes.animatedItemstate:
      return {
        ...state,
        animatedItemstate: {
          left: action.left,
          width: action.width,
        },
      };
    case ActionTypes.scrollChanged:
      return {
        ...state,

        swipeProgress: action.progress,
        pageProgress: action.pageProgress,
        nextTab: action.nextTab,
      };
    case ActionTypes.totalElement:
      return {
        ...state,
        totalElement: action.totalElement,
      };
    case ActionTypes.goTo:
      return {
        ...state,
        goTo: action.target,
      };
    case ActionTypes.swipeStart:
      return {
        ...state,
        goTo: null,
        isSwiping: true,
      };
    case ActionTypes.swipeEnd:
      return {
        ...state,
        isSwiping: false,
      };
    default:
      return state;
  }
};
const initialState = (
  totalElement,
  defaultTab,
  backGroundColor,
  color,
  animatedItem,
  borderRadius,
  border,
  activeColor,
  uiStyle,
  itemGap,
  shape,
  direction,
  width,
  height
) => {
  return {
    contents: totalElement.component,
    scrollValue: 0,
    prevCurrentTab: null,
    isSwiping: false,
    totalProgres: 0,
    swipeProgress: 0,
    animatedItemstate: {},
    activeColor: activeColor || "#ffffff",
    isTouchMove: false,
    pageProgress: 0,
    direction: direction || "x",
    uiStyle: uiStyle || null,
    animatedItem: animatedItem,
    nextTab: 0,
    shape: shape || "line",
    borderRadius: borderRadius || 0,
    backGroundColor: backGroundColor,
    color: color,
    willChange: 0,
    width: width,
    height: height,
    itemGap: itemGap || 0,
    border: border,
    totalElement: totalElement.count || 0,
    currentTab: defaultTab || 0,
  };
};
export const TabProvider = ({
  totalElement,
  children,
  defaultTab,
  backGroundColor,
  color,
  animatedItem,
  borderRadius,
  border,
  activeColor,
  uiStyle,
  itemGap,
  shape,
  direction,
  width,
  height,
}) => {
  const [tabState, dispatchTabSwipe] = useReducer(
    reducer,
    initialState(
      totalElement,
      defaultTab,
      backGroundColor,
      color,
      animatedItem,
      borderRadius,
      border,
      activeColor,
      uiStyle,
      itemGap,
      shape,
      direction,
      width,
      height
    )
  );

  return (
    <TabContext.Provider value={{ tabState, dispatchTabSwipe }}>
      {children}
    </TabContext.Provider>
  );
};

export const useTabContext = () => useContext(TabContext);
