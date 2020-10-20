import React from "react";
import { TabBarProvider } from "./provider";
import { Tabbar } from "./tabbar";

export const TabbarMain = ({ props }) => {
  return (
    <TabBarProvider>
      <Tabbar props={props} />
    </TabBarProvider>
  );
};
