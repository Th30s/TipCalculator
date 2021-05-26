import React, { Component, useState } from "react";

function Mailto(props) {
  let [emailValue, setEmailValue] = useState();
  
  const onChange = (event) => {
    setEmailValue(event.target.value)
  };

  let body = `The total amount you have pay as tip is ${props.tipResult}`
  let temp = `mailto:${emailValue}&subject=LibreTip Summary Email &body=${body}`

  return <div id="emailInput" class="mailto">
    <input type="text" placeholder="Email of a friend (Optional)" onChange={onChange}/>
    <a href={temp}> Send Email</a>
  
  </div>;
}

export default Mailto;

