import React, { Component, useState } from "react";

function Enter(props) {
  // () => {}
  // calResultPrice: 10

function changeResultPrice(resultPrice){
  console.log(resultPrice)
  // setcalResultPrice(100)
  let testVariable = ((parseInt(props.tipPrecent) / 100) * parseFloat(props.inputPrice) + parseFloat(props.inputPrice)).toFixed(2)
  console.log("tipPrecent = " + props.tipPrecent)
  console.log("inputPrice = " + props.inputPrice)
  props.updateTotalPrice(testVariable)
  
};
  return <button id="enterBtn" onClick = {changeResultPrice} > Enter </button>
};

export default Enter;
 