import React from "react";

const Grid = ({
  width,
  height,
  justifyColums,
  justifyRows,
  rowHeight,
  colWidth,
  autoFill,
  space,
  equal,
  col,
  colTablet,
  row,
  justifyItems,
  alignItems,
  nospace,
  children,
}) => {
  const mobile = window.innerWidth < 768;
  const column = mobile ? col : colTablet ? colTablet : col;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${column + "," + 1 + "fr"})`,
        gridTemplateRows: `repeat(${row + "," + rowHeight || "auto"})`,
        autoFlow: `${"row"}`,
        height: `${height ? height : "auto"}`,
        width: `${width ? width : "100%"}`,
        alignContent: `${
          justifyRows
            ? (justifyRows === "center" && "center") ||
              (justifyRows === "justify" && "space-between") ||
              (justifyRows === "bottom" && "end") ||
              (justifyRows === "fill" && "stretch")
            : "top"
        }`,
        justifyContent: `${
          justifyColums
            ? (justifyColums === "center" && "center") ||
              (justifyColums === "justify" && "space-between") ||
              (justifyColums === "bottom" && "end") ||
              (justifyColums === "fill" && "stretch")
            : "left"
        }`,
        alignItems: alignItems ? alignItems : "center",
        justifyItems: justifyItems ? justifyItems : "center",
        gap: `${space && space}`,
        margin: `0 ${space ? space * -1 : nospace ? "0px" : "-10px"}`,
        marginBottom: "20px",
      }}
      className={`kb-grid-box ${equal && "equal"}`}
    >
      {children}
    </div>
  );
};

export default Grid;
