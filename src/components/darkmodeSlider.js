import React, { Component, useState } from "react";

function DarkModeSlider(props) {

  return (
    <div class="darkModeDiv">
    <label class="switch">
      <input
        onClick={() => props.toggle(!props.isChecked)} 
        type="checkbox"
        checked={props.isChecked ? 'checked':''}
      />
      <span class="slider round" />
    </label>
    <h1>DarkMode:</h1>
    </div>
  );
}

export default DarkModeSlider;
