import React, { Component, useState } from "react";

function InputPrice(props) {
  let [inputValue, setinputValue] = useState(0);

  const onChange = (event) => {
    console.log(event.target.value);
    setinputValue(event.target.value)
  };
  
  return <input type="text"  value={inputValue} onChange={onChange}/>;
}

export default InputPrice;
