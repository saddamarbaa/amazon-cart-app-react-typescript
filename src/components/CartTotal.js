/** @format */

import React from "react";
import "./CartTotal.css";
import NumberFormat from "react-number-format";

const CartTotal = ({ items }) => {
	const getTotalPrice = () => {
		let totalPrice = 0;
		items.map((item) => (totalPrice += item.price * item.quantity));
		return totalPrice;
	};

	const getTotalTtems = () => {
		let totalTtems = 0;
		items.forEach((item) => {
			totalTtems += parseInt(item.quantity);
		});
		return totalTtems;
	};

	return (
		<div className='CartTotal'>
			<h3>
				Subtotal({getTotalTtems()} items):
				<span className='cartTotal-price'>
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
