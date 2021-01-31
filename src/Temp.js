import React, { useState } from "react";
import "./Temp.css";

// this will be remove(just for learning react hooks)
//Temp component(child component)

const Temp = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(1); // useState return array of value and function

  return (
    <div className="Temp">
      <p>You clicked {count} times</p>

      <button className="btn" onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <h1>{count}</h1>
    </div>
  );
};

export default Temp;
