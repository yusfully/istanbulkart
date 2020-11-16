
import React, { useState,useEffect } from "react";
import AddNewCard from "./AddNewCard";
import "./newCard.scss"


const NewCard = ({ fetchCards, myCards,setActiveCard }) => {

 
  return ( 
  <div className="firstPage">
  <AddNewCard></AddNewCard>
  </div>
  )
}



export default NewCard
