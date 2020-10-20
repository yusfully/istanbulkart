import React, { Component, Fragment } from "react";
import Nprogress from "nprogress";
import ReactPlaceholder from "react-placeholder";
import "nprogress/nprogress.css";
import Page from "./index";
import { PageProvider } from "./Provider";
import "react-placeholder/lib/reactPlaceholder.css";
import CircularProgress from "../../components/progress/progress";
import asyncComponent from "../../utils/AsyncComponent";
import Portal from "../../components/page/Portal";
import { Route, withRouter } from "react-router";
import Ondex from "../map/listter";
import "./page.scss";
import Nav from "../navigation/index";
import Forms from "../dialogs/dialogs";

import Carosel from "../carousel/index";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default function pageHoc(component, extraProps) {
  class Pager extends Component {
    constructor(props) {
      super(props);
      this.state = {
        routes: [
          {
            path: "/pages/index/helloo",
            Component: () => <Nav></Nav>,
          },
          {
            path: "/pages/index/helloo/nav",
            Component: () => <Carosel></Carosel>,
          },
          {
            path: "/tabs",
            Component: () => <Nav></Nav>,
          },
        ],
      };
    }

    render() {
      const Componentt = component;

      return (
        <PageProvider>
          <Componentt {...this.props} extra={extraProps} />

          <Portal className="new-page-main" id={"page"} type={"newww"}>
            <TransitionGroup>
              <CSSTransition
                key={this.props.location.key}
                classNames="fade"
                timeout={3000}
              >
                <Fragment>
                  {this.state.routes.map(({ path, Component }) => {
                    return (
                      <Route path={path}>
                        <div className="page-scroll">
                          <div className="maincontent">
                            <Component />
                          </div>
                        </div>
                      </Route>
                    );
                  })}
                </Fragment>
              </CSSTransition>
            </TransitionGroup>
          </Portal>
        </PageProvider>
      );
    }
  }

  return withRouter(Pager);
}
