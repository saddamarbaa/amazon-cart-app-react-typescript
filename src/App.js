import React from "react";
import Header from "./components/Header";
import CartItems from "./components/CartItems";
import CartTotal from "./components/CartTotal";
import "./App.css";

/*********************** */
// this will be removed
import Temp from "./Temp";
/*********************** */

// App component(parent component)

const App = () => {
  return (
    <div className="App">
      <Header title="Amazon Cart" />
      <div className="App-main">
        <CartItems title="Shopping Cart" />
        <CartTotal title="Cart Total" />
      </div>

      {/* this will be removed */}
      <Temp />

      {/* this will be removed */}
    </div>
  );
};

export default App;
