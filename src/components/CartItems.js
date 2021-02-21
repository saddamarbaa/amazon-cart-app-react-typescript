import React from "react";
import CartItem from "./CartItem";
import "./CartItems.css";

const CartItems = ({ items, setCartItems, fixedPrice }) => {
  const changeItemQuantity = (event, index) => {
    // step
    // 1: when we select a quantity on item ,we passed it in here
    // 2: pass the item index
    // 3: using the index we need to change the quantity to the select option
    // 4: using the index we need to change the price
    // 5: update the Item state(change the state)

    const newItems = [...items]; // deep copy
    // newItems[index].quantity = parseInt(event.target.value);
    newItems[index].quantity = event.target.value;
    newItems[index].price = fixedPrice[index] * newItems[index].quantity;

    setCartItems(newItems); // change state
  };

  const deleteItem = (indexToDelete) => {
    // filter out the items where the items index does not equal to the selected item index
    const newItems = items.filter((item, index) => {
      return index !== indexToDelete;
    });
    setCartItems(newItems); // change state
  };

  return (
    <div className="CartItems">
      <h1>Shopping Cart</h1>
      <hr />
      <div className="CartItems-items">
        {items.map((item, index) => (
          <CartItem
            index={index}
            key={index}
            item={item}
            changeItemQuantity={changeItemQuantity}
            deleteItem={deleteItem}
          />
        ))}
      </div>
    </div>
  );
};

export default CartItems;
