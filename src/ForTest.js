import React from "react";
import "./ForTest.css";

// this only for test will be remove
// Test components(child components)

const ForTest = ({ test }) => {
  console.log(test);
  return <div className="test"> {test}</div>;
};

export default ForTest;
export const testVaraible1 = 12;
export const testVaraible2 = 1;
