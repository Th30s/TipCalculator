import React, { Component, useState } from "react";

function ResultPrice(props) {
  console.log(props.splitVal + " Splt Value")
  let perPerson = props.splitVal === 1 || isNaN(props.splitVal) ? '':'per person';
  console.log(typeof props.splitVal);
  console.log("Perperson: " + perPerson)
  return <h1>${props.totalPrice} {perPerson}</h1>;
}

export default ResultPrice;
