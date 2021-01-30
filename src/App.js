import React from "react";
import Header from "./Header";
import "./App.css";

// App components(parent components)

const App = () => {
  return (
    <div className="App">
      <Header title="Amazon Cart" />

      <div className="App-main">
        <div className="CartItems">
          <h1>Shopping Cart</h1>
        </div>
        <div className="CartTotal">
          <h1>Cart Total</h1>
        </div>
      </div>
    </div>
  );
};

export default App;
