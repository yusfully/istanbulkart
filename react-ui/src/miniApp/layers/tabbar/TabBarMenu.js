import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useTabBarContext } from "./provider";

export const TabBarMenu = ({ elements }) => {
  const { tabState, dispatchTab } = useTabBarContext();
  const [isTapped, setTapped] = useState(false);
  let history = useHistory();
  const domelement = useRef();
  useEffect(() => {
    console.log(tabState);
  }, [tabState]);
  const handleTouchEnd = () => {
    dispatchTab({ type: "otherMenuOpened" });
    setTapped(!isTapped);
  };

  return (
    <div
      onTouchEnd={(e) => handleTouchEnd(e)}
      ref={domelement}
      className={`${isTapped ? "opened" : ""}  tabbar-item`}
      style={{
        flex: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="tabbar-container">
        <div
          style={{ display: "flex", justifyContent: "center" }}
          className="icon-container"
        >
          <i
            className="tabbar-menu"
            style={{
              height: "24pt",
              padding: "2pt",
            }}
          >
            <span
              style={{
                width: `${isTapped ? "0pt" : "10pt"}`,
                height: "1.5pt",
                background: "#333",
                display: "block",
                marginTop: "15px",
                position: "relative",
                transition: "all 0.3s ease-out",
                display: "flex",
                transformOrigin: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            ></span>
          </i>
        </div>
        <div style={{ fontSize: `${8}pt`, marginBottom: "-2pt" }}>Other</div>
      </div>
    </div>
  );
};
