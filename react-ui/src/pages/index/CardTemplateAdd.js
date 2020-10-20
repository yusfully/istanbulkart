import React, { Fragment } from "react";

import "./cardTemplateAdd.scss";
import SvgIcon from "../../miniApp/components/icon/svg/SvgIcon";

const CardTemplate = ({ amount, name, id, number, isMain }) => {
  return (
    <Fragment>
      <div className="card card-add">
        <div className="add-card-inner">
          <SvgIcon
            name="plus"
            lineCap="round"
            join="round"
            stroke={"#333333"}
            strokeWidth={"20"}
            size="50"
          ></SvgIcon>
          <h5
            style={{
              marginLeft: "5px",
            }}
          >
            Yeni kart ekle
          </h5>
        </div>
      </div>
    </Fragment>
  );
};

export default CardTemplate;
