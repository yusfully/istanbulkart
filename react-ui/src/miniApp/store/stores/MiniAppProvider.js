import React from "react";
import { AppProvider } from "./AppProvider";
import { NavigationProvider } from "./NavigationProvider";
import { NavbarProvider } from "./NavbarProvider";
import { TabbarProvider } from "./TabbarProvider";
import { GlobalProvider } from "./GlobalProvider";

export const MiniAppProvider = ({ data, children }) => {
  const renderNavigation = (children) => {
    return (
      <GlobalProvider>
        <NavbarProvider>
          <NavigationProvider>
            <AppProvider>
              {React.cloneElement(children, {
                data: data,
              })}
            </AppProvider>
          </NavigationProvider>
        </NavbarProvider>
      </GlobalProvider>
    );
  };
  const renderTabBar = (children) => {
    if (data.tabBar) {
      return (
        <TabbarProvider connectData={data.tabBar && data.tabBar.list}>
          {renderNavigation(children)}
        </TabbarProvider>
      );
    } else {
      renderNavigation(children);
    }
  };
  return renderTabBar(children);
};
