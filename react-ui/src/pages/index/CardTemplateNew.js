import React, { Fragment,useEffect } from "react";
import { ReactComponent as Logo } from "../../assets/images/istanbulkart-logo.svg";
import { ReactComponent as IBBLogo } from "../../assets/images/ibb-logo.svg";
import "./cardTemplateAdd.scss";


const CardTemplate = ({ name,  number,activeInput }) => {


  useEffect(() => {
  console.log(activeInput)
  }, [activeInput])
  const formatNumber=(number)=>{
    
    if(number && number.length<1) return number
   

    let numberArr=number.split("")
    let formattedArr=numberArr.map((element,index)=>{
      
      if((index+1) % 4 === 0){
        element=element+" "
      }
return element
    })
    formattedArr=formattedArr.join("")
   

return formattedArr
  }
  return (
    <Fragment>
      <div className="card ">
      <div style={{
        boxShadow: `0px  10px 10px #0000004a`
      }}
        
          className="shadow"
        ></div>
        <div
        style={{
          flexDirection: "column",
          backgroundColor: "#161517",
          borderRadius: "20px",
          height: "100%",
        }}
      >
        <div>
          <div
            className="new-card-top"
          >
            <Logo />
          </div>
          <div
            style={{
              right: "5%",
              top: "10%",
              height: "20%",
              position: "absolute",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <IBBLogo />
              </div>
            </div>
          </div>
          <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            bottom: "0",
            padding: "5%",
          }}
          className="card-bottom"
        >
          <div className="card-name">{name}</div>
          <div style={{
            fontSize:"12pt",
            height:"12pt"
          }} className="card-number">{number && formatNumber(number)}</div>
        </div>
        </div></div>
      </div>
    </Fragment>
  );
};

export default CardTemplate;
