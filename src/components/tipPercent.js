import React from "react";

function SelectTip(props){
  function changeTipPercent(event){
    let tip = event.target.value;
    props.test(event.target.value)
    console.log(tip)
  };
  return (
    <div>
      <label for="tipPercent-select">Choose a tip percentage: </label>

      <select id="tipPercent-select" onChange={changeTipPercent}>
          <option value="">--Please choose an option--</option>
          <option class= "percent" value= "15">15%</option>
          <option class= "percent" value= "20">20%</option>
      
      </select>
    </div>
  );
  // the indent might help you see where the syntax issue is ;)
};

export default SelectTip;