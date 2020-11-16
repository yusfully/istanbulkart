import React, { Fragment, useState, useEffect, useRef,forwardRef,useImperativeHandle } from "react";
import UiIcon from "../../miniApp/components/icon/svg/UiIcon";
import "./sliderRange.scss"

const SliderRange  = forwardRef(
    (
        {onValueChange},
      ref
    ) => {
      useImperativeHandle(ref, () => ({
        setAmount(amount) {
            handleAmountChange(amount);
        },
        isDragging:isDragging
      }));

 
    const [limit, setLimit] = useState(500)
    const [domLimit, setDomLimit] = useState()
    const [step, setStep] = useState(5)
    const [domstep, setDomStep] = useState()
    const [value, setvalue] = useState(5)
    const [snapPoint, setSnap] = useState(0)
    const [pos, setPos] = useState(0)
    const [isDragging, setisDragging] = useState(false);
    const [touch, setTouch] = useState(0);
    const draggable = useRef()
    const mainLine = useRef()
    const rangeLine = useRef()

    const handleAmountChange=(amount)=>{
      
        if(value!==amount && domstep){
        
            setPos(Number(((amount/step)*domstep).toFixed(2)))
        }
    }
    useEffect(() => {
        
        setDomLimit(mainLine.current.getBoundingClientRect().width) 
    }, [mainLine.current])
useEffect(() => {
    if(domLimit){
        
        setDomStep((domLimit/(limit/step)))
    }
    

}, [domLimit])

useEffect(() => {
    
  if(domstep){
    
    setSnap(Number((pos-pos%domstep).toFixed(2)))
   
  }
  rangeLine.current.style.width=pos+"px"
  
    
}, [pos])
const handleChangeValue=(type)=>{
  
if(type==="increase"){
    if(value===limit) return
   
    setPos(pos+domstep)
  
}else{
  if(value===0) return
  setPos(pos-domstep)
   
}
}

useEffect(() => {
   
    if(domstep){
        
        setvalue((Math.round((snapPoint/domstep)*step)))


    }
    
}, [snapPoint,domstep])


useEffect(() => {
  
  onValueChange && onValueChange(value)
}, [value])
    
    const handleDragStart=(e)=>{

        setTouch(e.touches[0].clientX)

    }
    const handleDragMove=(e)=>{
      setisDragging(true)
        let diff = e.changedTouches[0].clientX - touch;
        setTouch(e.changedTouches[0].clientX > window.innerWidth ? window.innerWidth : e.changedTouches[0].clientX < 0 ? 0 : e.changedTouches[0].clientX);

        let newPos = pos + diff;
    
        if (newPos > domLimit) {
            
          newPos = domLimit;
        }
        else if (newPos < 0) {
          newPos = 0;
          
        }
        newPos=Number(newPos.toFixed(2))
          

        
    
        setisDragging(true);
        setPos(newPos);
    }
    const handleDragEnd=(e)=>{
      setisDragging(false)
    }

  return (
    <Fragment>
    <div className="slider-container">
    <div onTouchEnd={()=>handleChangeValue("decrease")} className="slider-action decrease-slider">
     <UiIcon
               
     currentIcon="minus"
     stroke={"#333333"}
     strokeWidth={"40pt"}
     size="16"
     lineCap="rounded"
     join="rounded"
   ></UiIcon>
     </div>
     <div ref={mainLine} className="slider-main-line">
     <div ref={rangeLine} className="slider-range-line"></div>
     <div 
    style={{
        transform:`translate(${snapPoint}px, 0px)`
    }}
      ref={draggable} className="draggable">
     <div  onTouchStart={
         (e)=>handleDragStart(e)
     }
     onTouchMove={
        (e)=>handleDragMove(e)
    }
    onTouchEnd={
        (e)=>handleDragEnd(e)
    } className="sliderHandler"></div>
     </div>
     </div>
     <div onTouchEnd={()=>handleChangeValue("increase")} className="slider-action increase-slider">
     <UiIcon
               
     currentIcon="plus"
     stroke={"#333333"}
     strokeWidth={"40pt"}
     size="16"
     lineCap="rounded"
     join="rounded"
   ></UiIcon>
     </div>
     
     </div>
     
     
    </Fragment>
  );
})

export default SliderRange;
