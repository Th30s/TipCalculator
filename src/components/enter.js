import React, { Component, useState } from "react";

function Enter(props) {
  // () => {}
  let [calResultPrice, setcalResultPrice] = useState(0);
function changeResultPrice(resultPrice){
  console.log(resultPrice)
  setcalResultPrice((parseInt(props.tipPrecent) / 100) * parseFloat(props.inputPrice) + parseFloat(props.inputPrice))
  console.log("tipPrecent = " + props.tipPrecent)
  console.log("inputPrice = " + props.inputPrice)
  props.updateTotalPrice(calResultPrice)
  console.log("calResultPrice = " + calResultPrice)
};
  return <button onClick = {changeResultPrice} > Enter </button>
};

export default Enter;
 