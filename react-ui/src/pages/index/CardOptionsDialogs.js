
import React, { useEffect,useState } from "react";
import { useRouteMatch, useHistory, Route } from "react-router-dom";
import Button from "../../miniApp/components/buttons/Button";
import {deleteCard,setMainCard} from "../../redux/actions/cards.action";
import SvgIcon from "../../miniApp/components/icon/svg/SvgIcon"
import { connect } from "react-redux";

import Portal from "../../miniApp/components/pager/Portal"
import { CSSTransition } from "react-transition-group";
const CardOptionsDialogs = ({deleteCard,type,setMainCard}) => {
let match=useRouteMatch()
const [ready, setReady] = useState(false);
const [mounted, setmounted] = useState(false)
let history=useHistory()
useEffect(() => {
  setmounted(true)
  
}, [history])

useEffect(() => {
 
}, [])

const handleDelete=()=>{
  
  // if(type==="delete"){
  //   deleteCard(match.params.id)
  // }else{
  //   setMainCard(match.params.id)
  // }
  setReady(false)
  setTimeout(() => {
  history.goBack(1)
  }, 300);
 
}
const handleMounted = () => {
  setReady(true);
};
const handleBack=()=>{
  setReady(false)
 setTimeout(() => {
   
 history.goBack(1)
 }, 300);
}
  return (
      <Route path={`${match.url}`}>
    <Portal
    className="modal-main"
    id={"main"}
    type={"modal"}
    onMount={() => handleMounted()}
  >
    <CSSTransition in={ready} timeout={300} classNames="slide">
    
    <div style={{
      display:"flex",
      alignItems: "center",
      
      height: "100%",
      justifyContent: "center",
      padding: "20px"
    }} className="delete-dialog">
<div className="overlay"></div>
    <div className="dialog-content">
   <div className="dialog-icon">
   <SvgIcon

name={`${type==="delete" ? "trash" : "flama"}`}
stroke={"#333333"}
strokeWidth={"10"}
size={50}
lineCap="rounded"
join="rounded"
></SvgIcon>
  
   </div>
    <div className="kart-id">
    <strong>{match.params.id} </strong>numaralı kartınızı {type==="delete" ? "silmek" : "varsayılan yapmak"} istediğinizden emin misiniz?
    </div>

    <div style={{
      padding:"0 10px"
    }} className="card-opt-dialog-actions">
    <Button
type="button"
            text="VAZGEÇ"
            size="block"
            borderRadius="10px"
            hoverStyle={{
              backgrounColor: "#333",
            }}
            addClass="bordered radius button grey filled"
            icon={{
              svgIcon:"tick",
              pos: "right",
            }}
            uiStyle="bordered"
            onClick={()=>handleBack()}
          />
          <Button
type="button"
            text="ONAYLA"
            size="block"
            borderRadius="10px"
            hoverStyle={{
              backgrounColor: "#333",
            }}
            addClass="bordered radius button  filled"
            icon={{
              svgIcon:"tick",
              pos: "right",
            }}
            uiStyle="bordered"

            onClick={()=>handleDelete()}
          />
          </div>
    </div>
    </div>
    </CSSTransition></Portal></Route>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteCard: (id) => dispatch(deleteCard(id)),
  setMainCard: (id) => dispatch(setMainCard(id)),
});

export default connect(null, mapDispatchToProps)(CardOptionsDialogs);
