import React from "react";
import Header from "./Header";
const Card = ({ backGround, corner, shadow, children }) => {
  return (
    <div
      style={{
        display: "block",
        width: `${"100%"}`,
        padding: "20px",
        marginBottom: `20px`,
        backgroundColor: `${backGround ? backGround : "#ffffff"}`,
        boxShadow: `${shadow ? shadow : ""}`,
        borderRadius: "0px",
      }}
      className="card-box"
    >
      {children}
    </div>
  );
};

export default Card;
Card.Header = Header;
