import React, { Fragment, useState, useEffect } from "react";
import Portal from "./Portal";
import { Route, withRouter } from "react-router";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useNavigation } from "../../store/stores/NavigationProvider";
import "./page.scss";

const NavigationPortal = ({ children }) => {
  const { stateNav } = useNavigation();

  useEffect(() => {
    console.log(stateNav.pages);
  }, [stateNav.pages]);
  return (
    <Fragment>
      <Route path={"/"}>
        <Portal className="new-page-main" id={"page"} type={"newww"}>
          {Object.keys(stateNav.pages).map((id) => {
            const { route, Component } = stateNav.pages[id];
            return (
              <Route key={route} path={route + ":id"}>
                {({ match }) => (
                  <CSSTransition
                    in={match != null}
                    timeout={300}
                    classNames="fade"
                    unmountOnExit
                  >
                    <div className="page-scroll">
                      <div className="animatescroll">
                        <Component />
                      </div>
                    </div>
                  </CSSTransition>
                )}
              </Route>
            );
          })}
        </Portal>
      </Route>
    </Fragment>
  );
};

export default withRouter(NavigationPortal);
