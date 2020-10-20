import React, { useState, useEffect, useRef } from "react";
import { useGlobal } from "../../store/actions/globalActions";
import { useHistory } from "react-router-dom";
import { useTabbar } from "../../store/stores/TabbarProvider";
import SvgIcon from "../../components/icon/svg/SvgIcon";

export const TabItem = ({
  pagePath,
  text,
  onTouch,
  icon,
  badge,
  textColor,
  index,
  activeTabStyle,
}) => {
  const [active, setActive] = useState(false);
  const [isTapped, setTapped] = useState(false);
  const { stateTabbar } = useTabbar();

  useEffect(() => {
    if (stateTabbar.currentTab === index) {
      onActive();
      setActive(true);
    } else {
      setActive(false);
    }
  }, [stateTabbar.currentTab]);

  let history = useHistory();
  const domelement = useRef();

  const handleTouchEnd = () => {
    history.push(`/${pagePath}`);
  };

  const onActive = () => {
    onTouch(domelement, index);
  };
  const renderIcon = () => {
    if (icon.name) {
      return (
        <SvgIcon
          name={icon.name}
          animation={
            active &&
            activeTabStyle &&
            activeTabStyle.icon &&
            activeTabStyle.icon.animation
              ? true
              : false
          }
          animationRepeat={1}
          stroke={
            active
              ? activeTabStyle &&
                activeTabStyle.icon &&
                activeTabStyle.icon.stroke
              : icon.stroke && icon.stroke
          }
          strokeWidth={icon.strokeWidth && icon.strokeWidth}
          fill={
            active
              ? activeTabStyle &&
                activeTabStyle.icon &&
                activeTabStyle.icon.fill
              : icon.fill && icon.fill
          }
          size={icon.size && icon.size}
        ></SvgIcon>
      );
    }
  };
  return (
    <div
      onTouchStart={() => setActive(true)}
      onTouchEnd={(e) => handleTouchEnd(e)}
      ref={domelement}
      className={`${isTapped ? "firstTouch" : ""} ${
        active ? "active-tabbar" : ""
      } tabbar-item`}
      style={{
        flex: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="tabbar-container">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            marginBottom: "2.5pt",
          }}
          className="icon-container"
        >
          {icon && renderIcon()}
          {badge > 0 ? (
            <p
              className="tabbar-badge"
              style={{
                height: `${12}pt`,
                minWidth: `${12}pt`,
                borderRadius: `${12}pt`,
                fontSize: `${8}pt`,
                marginBottom: `-${13}pt`,
                padding: "0 3pt",
              }}
            >
              {badge}
            </p>
          ) : null}
        </div>
        <div
          style={{
            color: active
              ? activeTabStyle &&
                activeTabStyle.textColor &&
                activeTabStyle.textColor
              : textColor
              ? textColor
              : "#333333",
            fontSize: `${8}pt`,
            marginBottom: "-2pt",
          }}
        >
          {text}
        </div>
      </div>
    </div>
  );
};
