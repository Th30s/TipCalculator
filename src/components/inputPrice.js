import React, { Component, useState } from "react";


function InputPrice(props) {
  let [inputValue, setinputValue] = useState();

  const onChange = (event) => {
    console.log(event.target.value);
    setinputValue(event.target.value)
    props.updateInputPriceInApp(event.target.value)
  };
  
  return (<div id="inputPriceDiv"><input size="40" type="text" placeholder="Type price here" value={inputValue} onChange={onChange} />
  </div>);
}

export default InputPrice;
