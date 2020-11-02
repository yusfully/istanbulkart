import _ from 'lodash';
export const addCard = (cartItems, cartItemToAdd) => {
  const existingCardItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  console.log(cartItemToAdd);
  if (existingCardItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeCard = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const sortCard=(cards)=>{
  let mainCardIndex=cards.findIndex((element)=>element.isMain===true)
let sorteCards=[cards[mainCardIndex]]
cards.splice(mainCardIndex,1)

cards.map((element)=>{

  sorteCards.push(element)
 

})


 return  _.mapKeys(sorteCards, "id")
}



const sortDate=(a,b)=>{

 if( a.split("/")[2].split(",")[0]>b.split("/")[2].split(",")[0])  return -1
 else if(a.split("/")[2].split(",")[0]<b.split("/")[2].split(",")[0]) return 1
 else if (a.split("/")[2].split(",")[0]===b.split("/")[2].split(",")[0]){
  if(a.split("/")[1]>b.split("/")[1]) return -1
  else if(a.split("/")[1]<b.split("/")[1]) return 1
  else if(a.split("/")[1]===b.split("/")[1]){
    if(a.split("/")[0]>b.split("/")[0]) return -1
    else if(a.split("/")[0]<b.split("/")[0]) return 1
    else if(a.split("/")[0]===b.split("/")[0]){
      if( a.split("/")[2].split(",")[0]>b.split("/")[2].split(",")[1].split(":")[0])  return -1
      else if( a.split("/")[2].split(",")[0]<b.split("/")[2].split(",")[1].split(":")[0])  return 1
      else if( a.split("/")[2].split(",")[0]===b.split("/")[2].split(",")[1].split(":")[0]){
        if( a.split("/")[2].split(",")[0]>b.split("/")[2].split(",")[1].split(":")[1])  return -1
      else if( a.split("/")[2].split(",")[0]<b.split("/")[2].split(",")[1].split(":")[1])  return 1
      else{
        return 0
      }
      }
    }

  }
 }
}
export const sortTransactions=(transactions)=>{
var sorted=transactions.sort((a,b)=>sortDate(a.date,b.date))

return sorted
}
