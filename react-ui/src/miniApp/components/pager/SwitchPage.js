import React, { Fragment, Children } from "react";
import Portal from "../../components/page/Portal";
import { Route, withRouter } from "react-router";
import Nav from "../navigation/index";
import Ondex from "../layout/index";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Pager extends React.Component {
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
          Component: () => <Ondex></Ondex>,
        },
        {
          path: "/tabs",
          Component: () => <Nav></Nav>,
        },
      ],
    };
  }

  render() {
    return (
      <Fragment>
        {this.props.children}
        <Route path={"*"}>
          <Portal className="new-page-main" id={"page"} type={"newww"}>
            {this.state.routes.map(({ path, Component }) => {
              return (
                <Route key={path} path={path}>
                  {({ match }) => (
                    <CSSTransition
                      in={match != null}
                      timeout={3000}
                      classNames="fade"
                      unmountOnExit
                    >
                      <div className="page-scroll">
                        <div className="maincontent">
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
  }
}

export default withRouter(Pager);
