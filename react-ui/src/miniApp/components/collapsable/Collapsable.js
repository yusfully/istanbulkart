import React, { useEffect } from "react";
import { useCollapseContext } from "./Provider";

const Collapsable = ({
  isOpened,
  onOpened,
  onCollapsed,
  addClass,
  onChange,
  collapseButton,
  arrow,
  triggerElement,
  children,
}) => {
  const { collapseState } = useCollapseContext();

  useEffect(() => {
  
    onChange && onChange(collapseState.isOpened);
  }, [collapseState.isOpened]);

  const renderChildren = (children) => {
    const elements = React.Children.map(children, (child) => {
      if (child.type) {
        if (child.type.name === "Button") {
          return React.cloneElement(child, {
            action: triggerElement === "button" ? true : false,
          });
        } else if (child.type.name === "Body") {
          return React.cloneElement(child, {
            action: triggerElement !== "button" ? true : false,
          });
        } else {
          return child;
        }
      } else {
        return child;
      }
    });

    return elements;
  };

  return <div className="collapse-wrapper">{renderChildren(children)}</div>;
};

export default Collapsable;
