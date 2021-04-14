import React from "react";

function SelectTip(props){

  // round brackets. :P 
  //like that?
  // almost... not curly ones Nice!
return (
<div>
  <label for="pet-select">Choose a pet:</label>

  <select name="pets" id="pet-select">
      <option value="">--Please choose an option--</option>
      <option value="dog">Dog</option>
      <option value="goldfish">Goldfish</option>
  </select>
</div>
)
};

export default SelectTip;