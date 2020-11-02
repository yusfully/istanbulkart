import React, { Fragment,useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { TabbarMain } from "./miniApp/layers/tabbar";
import Navbar from "./miniApp/layers/navbar/index";
import AppInner from "./miniApp/layers/app/index";
import "./App.css";
import Callback from "./pages/callbback/Callback";


const App = ({ data }) => {

  const { pages, tabBar, window: windowConfig } = data;

  useEffect(() => {
   
  }, [])
  return (
    <Fragment>
      <Route path="/">
        <AppInner></AppInner>
      </Route>
      <Route path="/callback">
        <Callback></Callback>
      </Route>
      <Navbar></Navbar>

      <TabbarMain props={tabBar}></TabbarMain>
    </Fragment>
  );
};

export default App;
