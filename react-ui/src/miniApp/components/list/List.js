import React, { Fragment } from "react";
import ListItem from "./ListItem";
import CollapseList from "./CollapseList";
import {ListProvider} from "./Provider";
import "./list.scss";

const List = ({ children, platform, style, addClass }) => {
  return (
    <ListProvider>
    <div
      className={`list-style-${style} ${platform} ${
        addClass ? addClass : ""
      } list `}
    >
      {children}
    </div></ListProvider>
  );
};

export default List;
List.item = ListItem;
List.CollapseList = CollapseList;
