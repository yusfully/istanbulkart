import React, {  useState, useEffect, useRef } from "react";
import Portal from "../../components/pager/Portal";

import "./modal.scss";
import { useHistory, useParams, Route, useRouteMatch } from "react-router-dom";
import {  CSSTransition } from "react-transition-group";
import Button from "../buttons/Button";


const Modal = ({
  visible,
  id,
  children,
  transitionEnter,
  transitionGone,
  overlay,
  title,
  highlight,
  close,
  controls,
}) => {
  const match = useRouteMatch();
  const { params } = useParams();
  const history = useHistory();
  const [ready, setReady] = useState(false);
  const [isOpened, setOpened] = useState(false);
  const [isCoverBigger, setCoverClass] = useState(false);
  const cover = useRef();
  const handleMounted = () => {
    setReady(true);
  };
  useEffect(() => {
    if (visible) {
      setOpened(true);
      history.push(match.url + "/:" + id);
    } else {
      setReady(false);
    }
  }, [visible]);

  useEffect(() => {}, []);
  useEffect(() => {
    if (!ready) {
      setTimeout(() => {
        setOpened(false);
        isOpened && history.goBack();
      }, 200);
    } else {
      if (cover.current.getBoundingClientRect().height > window.innerHeight) {
        setCoverClass(true);
      }
    }
  }, [ready]);

  return (
    isOpened && (
      <Route path={`${match.url + "/:params"}`}>
        <Portal
          onMount={() => handleMounted()}
          className="modal-main"
          id={id ? id : "modal"}
          type={"modal"}
        >
          <CSSTransition in={ready} timeout={200} classNames="overlay">
            <div
              style={{
                backgroundColor: `${
                  overlay
                    ? overlay.backGroundColor && overlay.backGroundColor
                    : "#333"
                }`,
                opacity: `${
                  overlay ? overlay.opacity && overlay.opacity : 0.5
                }`,
              }}
              className="modal-overlay"
            ></div>
          </CSSTransition>
          <CSSTransition in={ready} timeout={200} classNames="fade">
            <div
              className={`modal-content enter-${transitionEnter} gone-${transitionGone} ${
                isCoverBigger ? "bigger" : ""
              }`}
            >
              <div ref={cover} className="modal-cover">
                <div className="modal-header">
                  <h3 className="title">{title}</h3>
                  <h5 className="small">{highlight}</h5>
                  <span className="close-modal" onTouchEnd={() => close(false)}>
                    <i className="lni lni-close"></i>
                  </span>
                </div>
                <div className="modal-body">{children}</div>
                {controls ? (
                  <div className="modal-controls">
                    {Object.keys(controls).map((key) => {
                      const { action, text, className, icon } = controls[key];

                      return (
                        <Button
                          text={text}
                          ripple
                          addClass={`${
                            className ? className : "modal-confirm-button"
                          }`}
                          icon={{
                            fontIcon: `${controls[key].icon}`,
                            pos: "left",
                          }}
                          uiStyle="border"
                          onClick={() => action(id, params)}
                        />
                      );
                    })}
                  </div>
                ) : null}
              </div>
            </div>
          </CSSTransition>
        </Portal>
      </Route>
    )
  );
};

export default Modal;