
import React, { useEffect } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import Button from "../../miniApp/components/buttons/Button";
import {deleteCard,setMainCard} from "../../redux/actions/cards.action";
import { connect } from "react-redux";
const CardOptionsDialogs = ({deleteCard,type,setMainCard}) => {
let match=useRouteMatch()
let history=useHistory()
useEffect(() => {
  
   
  
}, [])

const handleDelete=()=>{
  if(type==="delete"){
    deleteCard(match.params.id)
  }else{
    setMainCard(match.params.id)
  }
  history.goBack()
}
  return (
    <div style={{
      display:"flex",
      alignItems: "center",
      
      height: "100%",
      justifyContent: "center",
      padding: "20px"
    }} className="delete-dialog">
<div className="overlay"></div>
    <div className="dialog-content">
   
    <div className="kart-id">
    <strong>{match.params.id} </strong>numaralı kartınızı {type==="delete" ? "silmek" : "varsayılan yapmak"} istediğinizden emin misiniz?
    </div>

    <div className="card-opt-dialog-actions">
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
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteCard: (id) => dispatch(deleteCard(id)),
  setMainCard: (id) => dispatch(setMainCard(id)),
});

export default connect(null, mapDispatchToProps)(CardOptionsDialogs);
