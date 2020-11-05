import React,{useEffect,useRef} from "react";
import NavigationPortal from "../../components/pager/NavigationPortal";
import { Route,useHistory } from "react-router-dom";
import Index from "../../../pages/index"

const AppInner = () => {
const stableHeight = useRef()


useEffect(() => {
  stableHeight.current.style.height=window.innerHeight+"px"
}, [])
  return (
    <div ref={stableHeight} className="app-inner">
      <NavigationPortal> </NavigationPortal>
      <Route path="/cards">
        <Index />
      </Route>
    </div>
  );
};



export default AppInner
