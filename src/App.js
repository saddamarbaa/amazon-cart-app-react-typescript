import React from "react";
import Header from "./Header";
import CartItems from "./CartItems";
import "./App.css";

// App component(parent components)

const App = () => {
  return (
    <div className="App">
      <Header title="Amazon Cart" />

      <div className="App-main">
        <CartItems title="Shopping Cart" />

        <div className="CartTotal">
          <h1>Cart Total</h1>
        </div>
      </div>
    </div>
  );
};

export default App;
