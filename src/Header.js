import React from "react";
import "./Header.css";

// Header components(child components)

const Header = (props) => {
  const { title } = props;
  // console.log(props);
  // console.log(title);
  return (
    <div className="App-header">
      <h1>{title}</h1>
    </div>
  );
};

export default Header;
