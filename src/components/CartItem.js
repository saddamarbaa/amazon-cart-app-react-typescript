import React from "react";
import "./CartItem.css";

// CartItem component(child component)

const CartItem = () => {
  return (
    <div className="CartItem">
      <div className="CartItem-image">
        <img
          src="https://static.bhphoto.com/images/images500x500/apple_mthl2ll_a_ipad_pro_64gb_wi_fi_1592330791_1568358.jpg"
          alt="ipad pro"
        />
        {/* <img
          src="https://www.slickwraps.com/media/catalog/product/cache/1/image/580x580/9df78eab33525d08d6e5fb8d27136e95/i/p/ipad-pro-12-9-2018-_0000s_0009s_0002_red.jpg"
          alt="ipad pro"
        /> */}
      </div>

      <div className="CartItem-info">
        <div className="info-title">
          <h2>Apple ipad pro</h2>
        </div>
        <div className="info-stock">In Stock</div>

        <div className="item-actions">
          <div className="item-quantity">
            <select>
              <option value="1">QTY: 1</option>
              <option value="2">QTY: 2</option>
              <option value="3">QTY: 3</option>
            </select>
          </div>
          <div className="item-actions-divider">|</div>
          <div className="item-delete">Delete</div>
        </div>
      </div>
      <div className="CartItem-price">$769.00</div>
    </div>
  );
};

export default CartItem;
