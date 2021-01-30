import React from "react";
import "./CartItems.css";

// CartItems component(child component)

const CartItems = ({ title }) => {
  return (
    <div className="CartItems">
      <h1>{title}</h1>
    </div>
  );
};

export default CartItems;
