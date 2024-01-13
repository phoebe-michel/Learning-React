import React from "react";

function FunctionClick() {
  function clickHandler() {
    console.log("button clicked!");
  }

  return (
    <div>
      {/** When user clicks on this button, a click event is fired
       * Goal: capture the click event and execute some basic code
       */}
      <button onClick={clickHandler}>Click</button>
    </div>
  );
}

export default FunctionClick;
