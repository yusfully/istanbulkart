
import React, { useState } from "react";
import Button from "../../miniApp/components/buttons/Button";
import { connect } from "react-redux";
import { payMoney } from "../../redux/actions/money.action";
import "./addMoney.scss";

const AddMoney = ({ amount, payMoney }) => {
  return (
    <div className="add-money-main">
      <div className="add-money-content">
        
      </div>

     <div style={{
       position:"relative"
     }} className="istanbul-pay-button">
     
     <svg style={{
       position:"absolute"
     }} x="0px" y="0px"
     viewBox="0 0 340.1 84.5" >
  
  <g>
    <path class="st0" d="M316.5,84.5c19.8,0,23.6-9.3,23.6-21.6V21.6c0-12.3-3.8-21.6-23.6-21.6H23.6C3.8,0,0,9.3,0,21.6v41.3
      c0,12.3,3.8,21.6,23.6,21.6H316.5z"/>
  </g>
  </svg>
  <Button
  text="İstanbul Pay ile Öde"
  arrow
  size="block"
  backgroundColor="transparent"
  borderColor="transparent"
  borderRadius="20px"
  color={"#F2F2F2"}
  tapStyle={{
    borderRadius: "20px",
    backgroundColor: "#FDC415",
    color: "#4f4f4f",
  }}
  addClass="istabulpay-button"
  hoverClass="tapped"
  icon={{
    fontIcon: "font-icon icon-power",
    pos: "left",
  }}
  uiStyle="filled"
>
<div className="amount-cover-text">
            <span className="amount">{amount + ",00"}</span>
            <span class="price-icon">₺</span>
          </div></Button>
  </div>
    
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  payMoney: (id) => dispatch(payMoney(id)),
});
const mapStateToProps = (state) => ({
  amount: state.addedMoney.moneyAdded,
});
export default connect(mapStateToProps, mapDispatchToProps)(AddMoney);
