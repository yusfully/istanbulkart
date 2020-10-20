
import React, { useState } from "react";
import Button from "../../miniApp/components/buttons/Button";
import { connect } from "react-redux";
import { payMoney } from "../../redux/actions/money.action";
import "./addMoney.scss";

const AddMoney = ({ amount, payMoney }) => {
  return (
    <div className="add-money-main">
      <div className="add-money-content">
        <div className="card-amount total-amount">
          <small>YÜKLENECEK TUTAR</small>
          <div className="amount-cover-text">
            <span className="amount">{amount + ",00"}</span>
            <span class="price-icon">₺</span>
          </div>
        </div>
      </div>

      <Button
        text="İstanbul Pay ile Öde"
        arrow
        size="block"
        backgroundColor="#333333"
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
      />
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
