import React from "react";
import "./AppMain.css";
import CartItems from "./CartItems";
import CartTotal from "./CartTotal";

// AppMain component(parent components)
function AppMain() {
  return (
    <div className="App-main">
      <CartItems title="Shopping Cart" />

      <CartTotal title="Cart Total" />
    </div>
  );
}

export default AppMain;
