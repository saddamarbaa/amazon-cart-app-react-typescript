import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartItems from "./components/CartItems";
import CartTotal from "./components/CartTotal";
import data from "./Data";
import { itemsFixPrice } from "./Data";
import "./App.css";

// App component(parent component)
const App = () => {
  const [cartItems, setCartItems] = useState(data);
  const [fixedPrice, setfixedPrice] = useState(itemsFixPrice);

  return (
    <div className="App">
      <Header title="Amazon Cart" />
      <div className="App-main">
        <CartItems
          items={cartItems}
          setCartItems={setCartItems}
          fixedPrice={fixedPrice}
        />
        <CartTotal items={cartItems} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
