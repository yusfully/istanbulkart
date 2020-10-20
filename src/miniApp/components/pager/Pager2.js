import React, {
  Fragment,
  useState,
  useEffect,
  useImperativeHandle,
  useRef,
  createRef,
} from "react";
import { Route, withRouter } from "react-router";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useNavigation } from "../../store/stores/NavigationProvider";
import { useGlobal } from "../../store/actions/globalActions";
import "./page.scss";

const Pager2 = ({ route, Component, match, location }) => {
  const { stateNav } = useNavigation();
  const { width } = useGlobal();
  const page = createRef();
  const getWidth = () => {
    return width;
  };
  useEffect(function () {
    console.log(page);

    return function cleanup() {
      onUnmount();
    };
  }, []);

  const kbl = {
    getDevice: function () {},

    setDevice: function () {},

    appOnLoad: function () {},

    appOnMount: function () {},
    AppOnUnmount: function () {},
    AppOnReceiveData: function () {},
    AppOnUpdate: function () {},
  };
  const onLoad = () => {};

  const onMount = () => {};

  const onUnmount = () => {};
  const onReceiveData = () => {
    debugger;
  };
  const onUpdate = () => {
    debugger;
  };

  const renderComponent = (component) => {
    const Component = React.cloneElement(component, {
      kbl: kbl,
      ref: page,
      props: component.props,
    });

    return Component;
  };

  return (
    <Fragment>
      <Route key={route} path={route}>
        {({ match }) => (
          <CSSTransition
            in={match != null}
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <div className="page-scroll">
              <div className="maincontent"> {renderComponent(Component())}</div>
            </div>
          </CSSTransition>
        )}
      </Route>
    </Fragment>
  );
};

export default withRouter(Pager2);
