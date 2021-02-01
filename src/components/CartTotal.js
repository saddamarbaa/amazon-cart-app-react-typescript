import React from "react";
import "./CartTotal.css";
import NumberFormat from "react-number-format";

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
    return totalPrice;
  };

  const getTotalTtems = () => {
    let totalTtems = 0;
    items.forEach((item) => {
      totalTtems += item.quantity;
    });
    return totalTtems;
  };

  return (
    <div className="CartTotal">
      <h3>
        Subtotal({getTotalTtems()} items):
        <span className="cartTotal-price">
          <NumberFormat
            value={getTotalPrice()}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            decimalScale={2}
          />
        </span>
      </h3>
      <button>Proceed to checkout</button>
    </div>
  );
};

export default CartTotal;
