import React from "react";
import "./CartTotal.css";

// CartTotal component(child component)

const CartTotal = () => {
  return (
    <div className="CartTotal">
      <h3>
        SubTotal Subtotal(5 items):
        <span className="cartTotal-price">$2.172.38</span>
      </h3>
      <button>Proceed to checkout</button>
    </div>
  );
};

export default CartTotal;
