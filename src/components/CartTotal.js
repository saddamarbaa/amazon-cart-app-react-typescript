import React from "react";
import "./CartTotal.css";

// CartTotal component(child component)
const CartTotal = ({ title }) => {
  return (
    <div className="CartTotal">
      <h1>{title}</h1>
    </div>
  );
};

export default CartTotal;
