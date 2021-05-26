import React, { Component, useState } from "react";
import "./styles.css";
import ResultPrice from "./components/resultPrice";
import InputPrice from "./components/inputPrice";
import SelectTip from "./components/tipPercent";
import Enter from "./components/enter";
import signLogo from "./images/signLogo.png";
import DarkModeSlider from "./components/darkmodeSlider";
import Split from "./components/split";
import Mailto from "./components/mailto";

const LIGHT_MODE = "light";

export default function App() {
  let [inputPrice, setinputPrice] = useState(0);
  console.log("inputPriceInApp:", inputPrice);
  let [splitValue, setSplitValue] = useState(1);
  let [tipPrecentage, setTipPrecentage] = useState(0);
  let [totalPrice, setTotalPrice] = useState(0);
  let [isDarkMode, setIsDarkMode] = useState(true);
  console.log("totalPrice = " + totalPrice);
  return (
    <div className={`App ${isDarkMode ? "" : LIGHT_MODE}`}>
      <div className={`divGreeting ${isDarkMode ? "" : LIGHT_MODE}`}>
        <img src={signLogo} style={{ width: "100px" }} alt="Logo" />
        <h1 id="greetingh1">Welcome to LibreTip!</h1>
      </div>
      <DarkModeSlider isChecked={isDarkMode} toggle={setIsDarkMode} />
      <ResultPrice totalPrice={totalPrice} splitVal={splitValue} />
      <InputPrice updateInputPriceInApp={setinputPrice} />
      <Split updatesplitValueInApp={setSplitValue} />
      <Mailto tipResult={totalPrice} />
      <SelectTip test={setTipPrecentage} />
      <Enter
        updateTotalPrice={setTotalPrice}
        tipPrecent={tipPrecentage}
        inputPrice={inputPrice}
        splitValue={splitValue}
      />
    </div>
  );
}
