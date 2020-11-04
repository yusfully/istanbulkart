import React,{useEffect} from "react";
import NavigationPortal from "../../components/pager/NavigationPortal";
import { Route,useHistory } from "react-router-dom";
import Index from "../../../pages/index"

const AppInner = () => {
let history=useHistory()
useEffect(() => {

}, [])
  return (
    <div className="app-inner">
      <NavigationPortal> </NavigationPortal>
      <Route path="/cards">
        <Index />
      </Route>
    </div>
  );
};



export default AppInner
