import React from "react";
import "./CartItem.css";

// CartItem component(child component)

const CartItem = ({ item }) => {
  // console.log("given item is now ", item);
  const { title, stock, price, quantity, image } = item;

  // console.log("title is now ", title);
  // console.log("Stock is now ", stock);

  return (
    <div className="CartItem">
      <div className="CartItem-image">
        <img src={process.env.PUBLIC_URL + "/items/" + image} alt="" />
      </div>

      <div className="CartItem-info">
        <div className="info-title">
          <h2>{title}</h2>
        </div>
        <div className="info-stock">{stock}</div>

        <div className="item-actions">
          <div className="item-quantity">
            <select value={quantity}>
              <option value="1">QTY: 1</option>
              <option value="2">QTY: 2</option>
              <option value="3">QTY: 3</option>
            </select>
          </div>
          <div className="item-actions-divider">|</div>
          <div className="item-delete">Delete</div>
        </div>
      </div>
      <div className="CartItem-price">${price}</div>
    </div>
  );
};

export default CartItem;
