import React, { useState, useEffect } from "react";

import history from "./history";
import { Router, Switch, Route } from "react-router-dom";
import data from "./app.json";
import App from "./App";
import { MiniAppProvider } from "./miniApp/store/stores/MiniAppProvider";
import "./App.scss";

function Config() {
  if (data) {
    return (
      <Router history={history}>
        <Switch>
          <MiniAppProvider data={data}>
            <App data={data}></App>
          </MiniAppProvider>
        </Switch>
      </Router>
    );
  } else {
    return <div></div>;
  }
}

export default Config;
