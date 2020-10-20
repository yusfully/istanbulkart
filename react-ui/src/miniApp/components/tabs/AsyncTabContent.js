import React, { useRef, useEffect } from "react";
import asyncComponent from "../../utils/AsyncComponent";
import { Switch, Route, Link, withRouter } from "react-router-dom";

const AsyncTabContent = ({ match, children, route }) => {
  return (
    <Switch>
      <Route
        path={`${match.url}`}
        component={asyncComponent(() =>
          import("../../pages/dialogs/lists.js.js")
        )}
      />
    </Switch>
  );
};
export default withRouter(AsyncTabContent);
