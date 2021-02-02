// import React from "react";
import React, { useState } from 'react';

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  function clickEvent(event){
    setIsOn((isOn) => !isOn);
  }

  const color = isOn ? "red" : "white"

  return <button onClick={clickEvent} style={{background: color}}>{isOn? "ON" : "OFF"}</button>;
}

export default Toggle;
