import React from "react";
import NavigationPortal from "../../components/pager/NavigationPortal";
import { Route } from "react-router-dom";
import Index from "../../../pages/index"

const AppInner = () => {


  return (
    <div className="app-inner">
      <NavigationPortal> </NavigationPortal>
      <Route path="/cards">
        <Index />
      </Route>
    </div>
  );
};



export default AppInner
