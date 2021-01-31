import React from "react";
import CartItem from "./CartItem";
import "./CartItems.css";

// CartItems component(child component)

const CartItems = (items) => {
  console.log("Inside CartItems component ", items);
  for (const key in items) {
    // const element = object[key];
    // console.log(items[key]);
    let x = items[key];
    // console.log(x);
    x.forEach((t) => {
      console.log(t.title);
    });
  }

  // const { title, stock, image, price, quantity } = props;

  return (
    <div className="CartItems">
      <h1>Shopping Cart</h1>
      <hr />
      <div className="CartItems-items">
        <CartItem />
      </div>
    </div>
  );
};

export default CartItems;
