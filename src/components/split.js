import React, { Component, useState } from "react";

function Split(props) {

  let [splitValue, setSplitValue] = useState();

  const onChange = (event) => {
    setSplitValue(event.target.value)
    props.updatesplitValueInApp(parseInt(event.target.value))
  };
  
  return (<div id="splitDiv" ><input size="6" maxlength="4" type="text" placeholder="# of people" value={splitValue} onChange={onChange} />
  </div>);
}

export default Split;
