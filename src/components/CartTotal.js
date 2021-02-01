import React from "react";
import "./CartTotal.css";

// CartTotal component(child component)

const CartTotal = ({ items }) => {
  const getTotalPrice = () => {
    // initialize total price to 0
    // loop through all the items in the cart
    // add the price of item with the quantity to the total price
    // return the total price

    let totalPrice = 0;
    items.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    return Math.floor(totalPrice);
  };

  return (
    <div className="CartTotal">
      <h3>
        Subtotal({items.length} items):
        <span className="cartTotal-price">${getTotalPrice()}</span>
      </h3>
      <button>Proceed to checkout</button>
    </div>
  );
};

export default CartTotal;
