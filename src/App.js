import React, { useState } from "react";
import Header from "./components/Header";
import CartItems from "./components/CartItems";
import CartTotal from "./components/CartTotal";
import data from "./Data";
import "./App.css";

// App component(parent component)

const App = () => {
  // React Hook
  // Declare a new state variable, which we'll call "cartItems"
  const [cartItems, setCartItems] = useState(data);
  // console.log(data);
  // console.log(cartItems);

  return (
    <div className="App">
      <Header title="Amazon Cart" />
      <div className="App-main">
        <CartItems items={cartItems} setCartItems={setCartItems} />
        <CartTotal items={cartItems} setCartItems={setCartItems} />
      </div>
    </div>
  );
};

export default App;
