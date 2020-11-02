import React, { Fragment, useState, useEffect, useRef } from "react";
import { ReactComponent as Logo } from "../../assets/images/istanbulkart-logo.svg";
import { ReactComponent as IBBLogo } from "../../assets/images/ibb-logo.svg";
import SvgIcon from "../../miniApp/components/icon/svg/SvgIcon";
import "./cardTemplate.scss";

const CardTemplate = ({
  amount,
  name,
  id,
  number,
  isMain,
  cardPos,
  index,
  activeCard,
}) => {
  const [style, setStyle] = useState({
   
  });
 useEffect(() => {
  
  console.log(activeCard,pos.current,index)

  if(activeCard.current===index){
    setStyle({
      transform: "scale(1)",
    opacity: "1",
    transformOrigin: "center",
    })
  }
 }, [])

  const pos = useRef();
  const shadowref = useRef();
  if (cardPos.current) {
    
    let posStyle = {};
    let scale;
    let rotatiton;
    let transformOrigin;
    let opacity;
    let shadow;
    const { prev, next, progress, delta } = cardPos.current;

    rotatiton = delta * 0.5;
    if (rotatiton > 20) {
      rotatiton = 20;
    } else if (rotatiton < -20) {
      rotatiton = -20;
    }

    if (next === prev && activeCard.current === index) {
      scale = "1";
      opacity = "1";
      shadow = 10;
      rotatiton=0
      transformOrigin = "center";
    } else {
      if (next === index) {
        scale = 0.002 * Math.abs(progress) + 0.8;
        opacity = 0.004 * Math.abs(progress) + 0.6;
        shadow = 0.1 * Math.abs(progress);
        if (next < prev) {
          transformOrigin = "right";
        } else {
          transformOrigin = "left";
        }
      } else if (prev === index) {
        
        scale = 1 - 0.002 * Math.abs(progress);
        opacity = 1 - 0.004 * Math.abs(progress);
        shadow = 10 - 0.1 * Math.abs(progress);
        if (prev < next) {
          transformOrigin = "right";
        } else {
          transformOrigin = "left";
        }
      } else {
        
        scale = "0.8";
        opacity = "0.6";
        shadow = 0;
        if (index < activeCard.current) {
          transformOrigin = "right";
        } else {
          transformOrigin = "left";
        }
      }
    }

    posStyle.transform = `scale(${scale}) rotateY(${rotatiton}deg)`;
    posStyle.opacity = `${opacity}`;
    pos.current = posStyle;
    shadowref.current = { boxShadow: `0px  ${shadow}px 10px #0000004a` };
  }

  const handleCardAction = (id, type) => {};

  return (
    <div className="rotate-cover">
      <div style={pos.current ? pos.current : style} className="card">
        <div
          style={shadowref.current && shadowref.current}
          className="shadow"
        ></div>

        <div
          style={{
            flexDirection: "column",
            backgroundColor: "#161517",
            borderRadius: "20pt",
            height: "100%",
          }}
        >

        <div className="card-top">
        <div className="amount-card">
          
        {amount}<span class="price-icon">₺</span></div>
          <div className="card-right-container">
            <div
              style={{
                position: "relative",
    display: "flex",
    justifyContent:" flex-end",
    paddingRight: "20px"
              }}
            >
              <Logo />
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
            <div className="card-number">{number}</div>
          </div>
        </div>
      </div>
      {isMain
        ? activeCard.current === index && (
            <div
              style={{
                position: "absolute",
                opacity: `${1}`,
                transition: "all 0.25s ease-out",
              }}
              className="card-actions"
            >
              <div
                onClick={(id) => handleCardAction(id, "main")}
                className="action"
              >
                <div className="circle-button">
                  <SvgIcon
                    name="flama"
                    stroke={"#333333"}
                    strokeWidth={"20"}
                    size={16}
                    lineCap="rounded"
                    join="rounded"
                  ></SvgIcon>
                </div>
              </div>
             
            </div>
          )
        : null}
    </div>
  );
};

export default CardTemplate;
