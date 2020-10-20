import React from "react";

const Header = ({ children }) => {
  return (
    <div
      style={{
        position: "relative",
        padding: "20px",
        margin: "0 -20px",
        borderBottom: "1px solid #cac8c8",
      }}
      className="card-box-header"
    >
      {children}
    </div>
  );
};

export default Header;
