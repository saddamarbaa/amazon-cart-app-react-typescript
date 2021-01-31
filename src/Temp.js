import React, { useState } from "react";
import "./Temp.css";

// this will be remove(just for learning react hooks)
//Temp component(child component)

const Temp = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(1); // useState return array of value and function

  const friends = ["adam", "Ali", "Adams", "JOHON"];

  // Array of Object
  const students = [
    {
      name: "adam",
      age: 12,
      gender: "male",
    },
    {
      name: "dcd",
      age: 1,
      gender: "female",
    },
    {
      name: "John",
      age: 23,
      gender: "male",
    },
    {
      name: "Sany",
      age: 18,
      gender: "female",
    },
  ];

  return (
    <div className="Temp">
      <p>You clicked {count} times</p>

      <button className="btn" onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <h1>{count}</h1>
      <br></br>
      <br></br>
      <br></br>
      <h4>{"ok"}</h4>
      {/* Array donst return value */}
      {friends.forEach((friend) => {
        return <h5>{friend}</h5>;
      })}

      {/* map return array */}
      {friends.map((friend) => (
        <h5>{friend}</h5>
      ))}

      <div className="sts">
        {students.map((student) => {
          return (
            <div>
              <h6>{`Name :${student.name} ID :Name :${student.name} Age :${student.age}`}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Temp;
