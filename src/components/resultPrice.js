import React, { Component, useState } from "react";

function ResultPrice(props) {
  let [calResultPrice, setcalResultPrice] = useState(
    (props.tipPrecent / 100) * props.inputPrice + props.inputPrice
  );

  return <h1>${props.totalPrice}</h1>;
}

export default ResultPrice;
