import React, { Fragment, useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";

const Transaction = () => {
  const match = useRouteMatch();
  useEffect(() => {
    debugger;
    console.log(match);
  }, []);

  return (
    <Fragment>
      <div>dasljkfaskljdhfkasjhdkajsh</div>
    </Fragment>
  );
};

export default Transaction;
