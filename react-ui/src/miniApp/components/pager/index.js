import React, { useEffect } from "react";
import { PageProvider } from "./Provider";
import Pager2 from "./Pager2";

const Page = ({ route, Component }) => {
  return (
    <PageProvider>
      <Pager2 route={route} Component={Component}></Pager2>
    </PageProvider>
  );
};
export default Page;
