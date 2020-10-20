import React, { Fragment, useEffect, useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import "./button.scss";
import { useRouteMatch, Route } from "react-router-dom";
import { useTabbar } from "../../store/stores/TabbarProvider";
import { useNavigation } from "../../store/stores/NavigationProvider";

import Button from "./Button";

const Navigator = ({
  addClass,
  arrow,
  icon,
  btnType,
  btnStyle,
  exact,
  openType,
  children,
  style,
  text,
  size,
  pos,
  uiStyle,
  onClick,
  component,
  goTo,
  target,
  openPage,
  openStyle,
  goBackWith,
  inverted,
}) => {
  const { dispatchTabbar } = useTabbar();
  const { dispatchNav } = useNavigation();
  const [paths, setpath] = useState();
  const match = useRouteMatch();
  const history = useHistory();

  useEffect(() => {
    if (openType === "navigate") {
      if (target.pathType && target.pathType === "location") {
        setpath(
          history.location.pathname + "/" + target.router + target.params.id
        );
      } else {
        setpath(match.path + "/" + target.router + ":" + target.params.id);
      }

      dispatchNav({
        type: "addPage",
        id: match.path + "/" + target.router,
        page: {
          route:
            target.pathType && target.pathType === "location"
              ? history.location.pathname + "/" + target.router
              : match.path + "/" + target.router,
          Component: target.component,
          params: target.params.id,
          type: target.type,
          animation: "slide-left",
          wrapClassName: "horizontal-center-page",
        },
      });
    }
    return () => {};
  }, []);
  const handleTouch = () => {
    debugger;
    console.log(match);
    history.push(`${paths}`);
  };
  const render = () => {
    if (!openType) return;

    switch (openType) {
      case "redirect":
        return (
          <Link
            to={`${target}`}
            className={`${
              uiStyle
                ? (uiStyle === "border" && "btn-bordered") ||
                  (uiStyle === "filled" && "btn-filled") ||
                  (uiStyle === "both" && "btn-both")
                : "btn-normal"
            } ${addClass ? addClass : ""}  ${btnStyle ? btnStyle : ""} button `}
          >
            {children}
          </Link>
        );
        break;
      case "navigate":
        return (
          <div onClick={handleTouch} className="navigator-cover">
            {children}
          </div>
        );
        break;
      case "switchTab":
        return (
          <Button
            text={text}
            onTouchEnd={() =>
              dispatchTabbar({ type: "changeTab", payload: target })
            }
          ></Button>
        );

        break;
      case "modal":
        return (
          <Link to={`${target}`} className="link btn">
            {children} {icon && <span className={`font-icon ${icon}`}></span>}
          </Link>
        );
        break;
      default:
        break;
    }
  };
  return (
    <div className="navigator-container">
      <div
        className={`${inverted ? "inverted" : ""} ${
          addClass ? addClass : ""
        }  ${btnStyle ? btnStyle : ""}`}
      >
        {render()}
      </div>
    </div>
  );
};

export default Navigator;
