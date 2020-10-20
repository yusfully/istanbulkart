import React from "react";

const CollapseList = ({ children, platform, style }) => {
  const renderLists = (children) => {
    return children;
  };
  return (
    <div className={`list-style-${style} ${platform} list`}>
      {renderLists(children)}
    </div>
  );
};

export default CollapseList;
