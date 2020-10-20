import React, { Fragment } from "react";
import ListItem from "./ListItem";
import CollapseList from "./CollapseList";
import "./list.scss";

const List = ({ children, platform, style }) => {
  return (
    <div className={`list-style-${style} ${platform} list`}>{children}</div>
  );
};

export default List;
List.item = ListItem;
List.CollapseList = CollapseList;
