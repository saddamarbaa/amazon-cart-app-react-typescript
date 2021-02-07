import React from "react";
import CartItem from "./CartItem";
import "./CartItems.css";

// CartItems component

const CartItems = ({ items, setCartItems }) => {
  // console.log(items);
  // console.log(setCartItems);

  // step
  // 1: when we select a quantity on item , we passed it in here
  // 2: pass the item index
  // 3: using the index we need to change the quantity to the select option
  // 4: update the Item state(change the state)

  const changeItemQuantity = (event, index) => {
    // console.log("Quantity is changed");
    // console.log(event.target.value);
    // console.log("index is now : ", index);
    // console.log(items[index].quantity);

    // deep copy
    const newItems = [...items];
    newItems[index].quantity = event.target.value;
    setCartItems(newItems); // change state
  };

  const deleteItem = (indexToDelete) => {
    // console.log("Item Deleted", indexToDelete);
    // console.log("Items before deteing", items);

    // filter out the items where the items index does not equal to the selected item index
    const newItems = items.filter((item, index) => {
      // console.log(item);
      return index !== indexToDelete;
    });

    // console.log("Items aftere deteing", newItems);
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
