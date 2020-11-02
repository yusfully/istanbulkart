
import React, { useState } from "react";
import Button from "../../miniApp/components/buttons/Button";
import { connect } from "react-redux";
import CardTemplateNew from "./CardTemplateNew"
import  Form from "../../miniApp/components/form/form/index"
import  {Field} from "../../miniApp/components/form/input/Field"
import { addCard } from "../../redux/actions/cards.action";
import "./addNewCard.scss";

const AddNewCard = () => {

    const [cardInfo, setCard] = useState({
        name:"",
        number:""
    })

    const [activeInput, setactiveInput] = useState()
    const handleFormChange=(values)=>{
        setCard({name:values.name,
        number:values.number})
    }
    const handleFormSubbmited=(values)=>{
       
    }

    const handleFocus=(focused)=>{
        setactiveInput(focused)
    }
  return (
    <div style={{
      display:"flex",
      alignItems: "center",
      flexDirection: "column"
    }} className="">
    
    <div className="card-template">
    <div  className="template new-card-temp">
    <CardTemplateNew
    active={activeInput}
      name={cardInfo.name}
      number={cardInfo.number}
    ></CardTemplateNew>
  </div>

    </div>

    <div className="new-card-form">
    <Form onFormSubmited={(values)=>handleFormSubbmited(values)} onFormChange={(values)=>handleFormChange(values)}>
    
    <Field
    type="text"
    className="rounded cutted-line"
    onFocus={()=>handleFocus("number")}
    label="KART NUMARASI"
    labelType="placeholder"
    activeClass="form-active"
    focusClass="form-focused"
    id="number"
    validation={{
      required: true,
      max: 16,
      min: 16,
    }}
  ></Field>

  <Field
  type="text"
  onFocus={()=>handleFocus("name")}
  className="rounded cutted-line"
  label="KARTA VERMEK İSTEDİĞİNİZ İSİM"
  labelType="placeholder"
  activeClass="form-active"
  focusClass="form-focused"
  id="name"
  validation={{
    required: true,
    max: 20,
    min: 3,
  }}
></Field>



<Button
type="submit"
            text="KART EKLE"
            size="block"
            borderRadius="10px"
            hoverStyle={{
              backgrounColor: "#333",
            }}
            addClass="bordered radius button green filled"
            icon={{
              svgIcon:"tick",
              pos: "right",
            }}
            uiStyle="bordered"
          />



          </Form>
    </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addCard: (cardNo,cardName) => dispatch(addCard(cardNo,cardName)),
});

export default connect(null, mapDispatchToProps)(AddNewCard);
