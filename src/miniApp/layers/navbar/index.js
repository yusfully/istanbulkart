import React, { useState, useEffect, useRef } from "react";
import { useNavBarContext } from "../../store/stores/NavbarProvider";

const Navbar = () => {
  const { navState, navdispatch } = useNavBarContext();
  const { text, backButton, backgroundColor, color, textSize } = navState;

  const [pixelRatio, setRatio] = useState(window.devicePixelRatio);
  useEffect(() => {
    console.log(navState);
  }, [navState]);
  return (
    <div
      style={{
        height: `${44}pt`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        top: 0,
        width: "100%",
        backgroundColor: `${backgroundColor}`,
      }}
      className="navbar"
    >
      <div className="title">
        <h2
          style={{
            color: `${color}`,
            fontSize: `${textSize}`,
          }}
        >
          {text}
        </h2>
      </div>
    </div>
  );
};
export default Navbar;
