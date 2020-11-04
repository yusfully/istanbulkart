import React from "react";
import { TabProvider } from "./provider";
import { TabContent, TabListItem } from "./elements";
import TabList from "./TabList";
import "./tab.scss";

const calculateChildren = (children) => {
  let count;
  let component = [];

  React.Children.map(children, (child, index) => {
   
    if (child.type.name && child.type.name === "TabListItem") {

      component.push(child.props.component);
    } else {
      
      child.props.children.map((grandChild) => {
      
        if (grandChild.props.component) {
          component.push(grandChild.props.component);
        }
      });
    }
  });
  count = component.length;

  
  return { count, component };
};

export const Tab = ({
  defaultTab,
  children,
  backGroundColor,
  color,
  animatedItem,
  swipe,
  uiStyle,
  border,
  direction,
  borderRadius,
  activeColor,
  itemGap,
  carousel,
  shape,
  width,
  height,
  onTabChange,
  onProgressTab,
  lock
}) => {
  return (
    <TabProvider
      totalElement={calculateChildren(children)}
      current={defaultTab}
      backGroundColor={backGroundColor}
      color={color}
      border={border}
      animatedItem={animatedItem}
      borderRadius={borderRadius}
      activeColor={activeColor}
      uiStyle={uiStyle}
      itemGap={itemGap}
      direction={direction}
      shape={shape}
      carousel={carousel}
      width={width}
      height={height}
    >
      <div className={`${carousel ? "carousel" : ""}  tab-cover`}>
        {children}
        <TabContent
          
          defaultTab={defaultTab}
          onTabChange={onTabChange}
          carousel={carousel}
          lock={lock}
          onProgressTab={onProgressTab}
          swipe={swipe ? swipe : null}
        />
      </div>
    </TabProvider>
  );
};

Tab.TabContent = TabContent;
Tab.TabList = TabList;
Tab.TabListItem = TabListItem;
