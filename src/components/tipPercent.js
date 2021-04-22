import React from "react";

function SelectTip(props){
return (
<div>
  <label for="tipPercent-select">Choose a tip percentage:</label>

  <select name="tipPercent" id="tipPercent-select">
      <option value="">--Please choose an option--</option>
      <option value="15">15%</option>
      <option value="20">20%</option>
  </select>
</div>
)
};

export default SelectTip;