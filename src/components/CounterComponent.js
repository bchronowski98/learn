import { useState } from "react";

const CounterComponent = (props) => {
  return (
    <div>
      {props.isVis && <button onClick={props.onClickPlus}>plus</button>}

      <span> {props.counter}</span>
      {props.isVis && <button onClick={props.onClickMinus}>minus</button>}
    </div>
  );
};

export default CounterComponent;
