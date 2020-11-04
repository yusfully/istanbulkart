import React, { Fragment, useState, useEffect, useRef } from "react";
import { ReactComponent as Logo } from "../../assets/images/istanbulkart-logo.svg";
import { useCardsContext } from "./Provider";
import SvgIcon from "../../miniApp/components/icon/svg/SvgIcon";
import { useRouteMatch, useHistory } from "react-router-dom";
import { TweenMax,Linear } from "gsap/all";
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
  const [style, setStyle] = useState({});
const history=useHistory()
const match=useRouteMatch()
  const { cardsState, cardsDispatch}=useCardsContext()

  const [cardOptPos, setcardOptPos] = useState(0)
  const [isOptOpened, setOptOpened] = useState(false)
  useEffect(() => {
    if(cardOptPos===0){
      cardsDispatch({type:"lockCards",lockCards:false})
      opt.current.style.display="none"
    }else{
      cardsDispatch({type:"lockCards",lockCards:true})
      opt.current.style.display="flex"
    }
   
  }, [cardOptPos])

 
 useEffect(() => {
  

 
  if(activeCard.current===index){
    setStyle({
      transform: "scale(1)",
    opacity: "1",
    transformOrigin: "center",
    })
  }
 }, [])
const pullOptions = useRef()
  const pos = useRef();
  const opt = useRef();
  const shadowref = useRef();
  const optionsCover = useRef()
  const firstTouch = useRef()

const closeOpt=()=>{
  let object = {
    y: cardOptPos,
  };
  setOptOpened(false);
 
  TweenMax.to(object, 0.25, {
    y: 0,
    ease: Linear.easeOut,
    onUpdate: function () {
      setcardOptPos(object.y);
    },
  });
}
const openOpt=()=>{
  
    let object = {
      y: cardOptPos,
    };
    setOptOpened(true);
   
    TweenMax.to(object, 0.25, {
      y: -50,
      ease: Linear.easeOut,
      onUpdate: function () {
        setcardOptPos(object.y);
      },
    });
  
}

  const handleOptionsMove=(e)=>{
  
    let diff = e.touches[0].clientY - firstTouch.current;
    firstTouch.current=e.touches[0].clientY
    let newPos = cardOptPos + diff;

if(newPos<=-50){
  newPos=-50
}
else if(newPos>=0){
  newPos=0
}
     setcardOptPos(newPos)
  }
  const handleOptionsStart=(e)=>{

    firstTouch.current=e.touches[0].clientY
    
    cardsDispatch({type:"lockCards",lockCards:true})


  }

  const handleOptionsEnd=(e)=>{
   if(isOptOpened){
     closeOpt()
   }else{
    openOpt()
   }
    
  }

  const handleCardOptions=(type)=>{
    
history.push(`${match.url}/${type}`)
  }
  if (cardPos.current) {
    
    let posStyle = {};
    let scale;
    let rotationX;
    let rotationY;
    let transformOrigin;
    let opacity;
    let shadow;


    const { prev, next, progress, delta } = cardPos.current;

    rotationX = delta * 0.5;
    rotationY=cardOptPos
    if (rotationX > 20) {
      rotationX = 20;
    } else if (rotationX < -20) {
      rotationX = -20;
    }

    if (next === prev && activeCard.current === index) {
      scale = "1";
      opacity = "1";
      shadow = 10- cardOptPos/5;
      rotationX=0
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

    posStyle.transform = `scale(${scale}) rotateY(${rotationX}deg)  rotateX(${-rotationY}deg)  translate(0px, ${cardOptPos/1.5}%)`;
    posStyle.opacity = `${opacity}`;
    pos.current = posStyle;
    shadowref.current = { boxShadow: `0px  ${shadow}px ${10-cardOptPos/4}px #0000004a` };
  }

  const handleCardAction = (id, type) => {};

  return ( <Fragment> 
    <div ref={optionsCover} className="rotate-cover">
    <div ref={opt} className="card-back-wrap">
     
    <div  className="pull-options">
    <div className="pull-options-inner">
<div className="card-options">
<div onTouchEnd={
  ()=>handleCardOptions("setMain")
} className="card-option">
<SvgIcon
name="flama"
stroke={"#333333"}
strokeWidth={"20"}
size={18}
lineCap="rounded"
join="rounded"
></SvgIcon>
</div>
<div onTouchEnd={
  ()=>handleCardOptions("delete")
} className="card-option">
<SvgIcon

name="trash"
stroke={"#333333"}
strokeWidth={"20"}
size={20}
lineCap="rounded"
join="rounded"
></SvgIcon>
</div>
</div>
    </div>
   



    </div>
    </div>
      
      <div style={pos.current ? pos.current : style} className="card">
      <div onTouchMove={
        (e)=>handleOptionsMove(e)
      } 
      onTouchStart={
       (e)=>handleOptionsStart(e)
     }
     onTouchEnd={(e)=>handleOptionsEnd(e)}
     ref={pullOptions} className="pull-icon">

     </div>
       <span
      style={shadowref.current && shadowref.current}
       className="shadow">
      
      </span>

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
    

       
    </div>
    </Fragment>
  );
};

export default CardTemplate;
