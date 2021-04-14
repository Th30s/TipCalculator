import React, { Component, useState } from "react";

function ResultPrice(props) {
  console.log(props.tipPrecent);
  console.log(props.inputPrice);
  let [calResultPrice, setcalResultPrice] = useState(
    (props.tipPrecent / 100) * props.inputPrice + props.inputPrice
  );

  return <h1>{calResultPrice}</h1>;
}

export default ResultPrice;
