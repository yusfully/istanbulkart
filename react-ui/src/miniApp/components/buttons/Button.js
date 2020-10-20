import React, { useRef, useEffect, useState } from "react";
import Ripple from "../ripple/Ripple";
import "./button.scss";

const Button = ({
  addClass,
  hoverClass,
  arrow,
  icon,
  btnType,
  btnStyle,
  children,
  style,
  size,
  type,
  circle,
  onTouchEnd,
  pos,
  corner,
  text,
  uiStyle,
  tapStyle,
  backgroundColor,
  borderColor,
  borderRadius,
  color,
  onClick,
}) => {
  const ripple = useRef();
  const buttonRef = useRef();
  const [sizeDom, setSize] = useState();
  const [tapped, setTapped] = useState(false);
  const [normalStyle, setStyle] = useState();
  const [hoverStyle, setHoverStyle] = useState();

  useEffect(() => {
    if (circle || (corner && corner === "rounded")) {
      setSize({
        width: buttonRef.current.getBoundingClientRect().width + "px",
        height: buttonRef.current.getBoundingClientRect().height + "px",
      });
    }

    styleSet();
  }, []);

  useEffect(() => {
    if (sizeDom) {
      if (circle) {
        setStyle({
          ...normalStyle,
          height: sizeDom.width,
          borderRadius: "100%",
        });
        setHoverStyle({
          ...normalStyle,
          height: sizeDom.width,
          borderRadius: "100%",
        });
      } else if (corner && corner === "rounded") {
        setStyle({
          ...normalStyle,
          borderRadius: sizeDom.height,
        });
        setHoverStyle({
          ...normalStyle,
          borderRadius: sizeDom.height,
        });
      }
    }
  }, [sizeDom]);
  const handleClick = (e) => {
    onClick && onClick(e);
  };
  const handleTouchEnd = (e) => {
    onTouchEnd && onTouchEnd(e);
    setTapped(false);
  };
  const handleTouchStart = (e) => {
    onClick && onClick(e);
    setTapped(true);
    ripple && ripple.current.startAction(e);
  };

  const styleSet = () => {
    let styleObj = {};
    let hoverStyleObj = {};
    if (uiStyle) {
      if (uiStyle === "border") {
        styleObj.borderColor = color ? color : "#333333";
        styleObj.backgroundColor = backgroundColor
          ? backgroundColor
          : "transparent";
        styleObj.color = color ? color : "#333333";

        hoverStyleObj.color = backgroundColor ? backgroundColor : "#ffffff";
        hoverStyleObj.borderColor = backgroundColor
          ? backgroundColor
          : "transparent";

        hoverStyleObj.backgroundColor = color ? color : "#333333";
      } else if (uiStyle === "filled") {
        styleObj.backgroundColor = backgroundColor
          ? backgroundColor
          : "#dedede";
        styleObj.color = color ? color : "#333333";

        hoverStyleObj.backgroundColor = backgroundColor ? backgroundColor : "";

        hoverStyleObj.color = color ? color : "#333333";
      }
    } else {
      if (backgroundColor) {
        styleObj.backgroundColor = backgroundColor
          ? backgroundColor
          : "#dedede";
      }
      if (color) {
        styleObj.color = color ? color : "#333333";
      }
    }

    if (corner) {
      styleObj.overflow = "hidden";
      hoverStyleObj.overflow = "hidden";
      if (corner !== "rounded") {
        styleObj.borderRadius = corner;
      }
    } else if (borderRadius) {
      styleObj.borderRadius = borderRadius;
    } else {
      styleObj.borderRadius = "0px";
    }

    if (tapStyle) {
      hoverStyleObj = tapStyle;
    }

    setStyle(styleObj);
    setHoverStyle(hoverStyleObj);
  };

  return (
    <div
      className={`
      ${addClass ? addClass : ""} 
      ${tapped && hoverClass ? hoverClass : ""} 
      button-container ${
        size
          ? (size === "large" && "btn-large") ||
            (size === "small" && "btn-small") ||
            (size === "inline" && "btn-inline") ||
            (size === "auto" && "btn-auto") ||
            "btn-block"
          : "btn-block"
      } ${
        pos
          ? (pos === "right" && "btn-right") ||
            (pos === "left" && "btn-left") ||
            (pos === "center" && "btn-center")
          : "center"
      } ${
        icon
          ? icon.pos
            ? (icon.pos === "right" && "btn-icon-right") ||
              (icon.pos === "top" && "btn-icon-top") ||
              (icon.pos === "bottom" && "btn-icon-bottom") ||
              (icon.pos === "left" && "btn-icon-left")
            : "btn-icon-left"
          : ""
      }`}
    >
      <button
        ref={buttonRef}
        type={type ? type : "button"}
        onTouchEnd={(e) => handleTouchEnd(e)}
        onClick={(e) => handleClick(e)}
        onTouchStart={(e) => handleTouchStart(e)}
        style={tapped ? hoverStyle : normalStyle}
        className={`${
          uiStyle
            ? (uiStyle === "border" && "btn-bordered") ||
              (uiStyle === "filled" && "btn-filled") ||
              (uiStyle === "both" && "btn-both")
            : "btn-normal"
        } ${circle ? "btn-circle" : ""} ${btnStyle ? btnStyle : ""} button btn`}
      >
        {children}
        {icon
          ? (icon.fontIcon && (
              <i className={`icon-button font-icon ${icon.fontIcon}`}></i>
            )) ||
            (icon.src && <i className="icon-image">{`${icon.src}`}</i>)
          : null}
        <span>{text}</span>
        {arrow ? (
          <span className="btn-arrow">
            <i className="lni lni-chevron-right"></i>
          </span>
        ) : null}
        {ripple && <Ripple ref={ripple} pos={{ pos: { x: 0, y: 0 } }}></Ripple>}
      </button>
    </div>
  );
};

export default Button;
