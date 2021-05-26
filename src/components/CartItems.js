/** @format */

import React from "react";
import CartItem from "./CartItem";
import "./CartItems.css";
import { v4 as uuidv4 } from "uuid";

const CartItems = ({ items, setCartItems, fixedPrice }) => {
	const changeItemQuantity = (event, index) => {
		const newItems = [...items];
		newItems[index].quantity = event.target.value;
		newItems[index].price = fixedPrice[index] * newItems[index].quantity;
		setCartItems(newItems);
	};

	const deleteItem = (indexToDelete) => {
		const newItems = items.filter((item, index) => {
			return index !== indexToDelete;
		});
		setCartItems(newItems);
	};

	return (
		<div className='CartItems'>
			<h1>Shopping Cart</h1>
			<hr />
			<div className='CartItems-items'>
				{items.map((item, index) => (
					<CartItem
						key={uuidv4()}
						index={index}
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
