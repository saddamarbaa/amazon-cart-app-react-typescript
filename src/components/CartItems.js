import React from "react";
import CartItem from "./CartItem";
import "./CartItems.css";

// CartItems component(child component)

const CartItems = ({ items }) => {
  return (
    <div className="CartItems">
      <h1>Shopping Cart</h1>
      <hr />
      <div className="CartItems-items">
        {items.map((item, index) => (
          <CartItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CartItems;
