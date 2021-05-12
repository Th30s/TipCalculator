import React, { Component, useState } from "react";
import "./styles.css";
import ResultPrice from "./components/resultPrice";
import InputPrice from "./components/inputPrice";
import SelectTip from "./components/tipPercent";
import Enter from "./components/enter";
import signLogo from "./images/signLogo.png";


export default function App() {
  let [inputPrice, setinputPrice] = useState(0);
  console.log("inputPriceInApp:", inputPrice);
  let [tipPrecentage, setTipPrecentage] = useState(0);
  let [totalPrice, setTotalPrice] = useState(0);
  console.log("totalPrice = " + totalPrice)
  return (
    <div className="App">
      <div id="divGreeting">
        <img src={signLogo} style={{ width: '100px' }} alt="Logo" />
        <h1 id="greetingh1">Welcome to LibreTip!</h1>
        <div id="bottomGreetingBorder" />
      </div>
      <ResultPrice totalPrice={totalPrice} />
      <InputPrice updateInputPriceInApp={setinputPrice}/>
      <SelectTip test={setTipPrecentage}/>
      <Enter updateTotalPrice={setTotalPrice} tipPrecent={tipPrecentage} inputPrice={inputPrice} />
    </div>
  );
}

