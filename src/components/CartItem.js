/** @format */

import React from "react";
import "./CartItem.css";
import NumberFormat from "react-number-format";

const CartItem = ({ index, item, changeItemQuantity, deleteItem }) => {
	const { title, stock, price, quantity, image } = item;

	return (
		<div className='CartItem'>
			<div className='CartItem-image'>
				<img src={process.env.PUBLIC_URL + "/items/" + image} alt='' />
			</div>

			<div className='CartItem-info'>
				<div className='info-title'>
					<h2>{title}</h2>
				</div>
				<div className='info-stock'>{stock}</div>

				<div className='item-actions'>
					<div className='item-quantity'>
						<select
							value={quantity}
							onChange={(event) => changeItemQuantity(event, index)}>
							<option value='1'>Qty: 1</option>
							<option value='2'>Qty: 2</option>
							<option value='3'>Qty: 3</option>
							<option value='4'>Qty: 4</option>
							<option value='5'>Qty: 5</option>
							<option value='6'>Qty: 6</option>
							<option value='7'>Qty: 7</option>
							<option value='8'>Qty: 8</option>
							<option value='9'>Qty: 9</option>
						</select>
					</div>
					<div className='item-actions-divider'>|</div>
					<div
						className='item-delete'
						onClick={deleteItem.bind(this, index)}>
						Delete
					</div>
				</div>
			</div>
			<div className='CartItem-price'>
				<NumberFormat
					value={price}
					displayType={"text"}
					thousandSeparator={true}
					prefix={"$"}
					decimalScale={2}
				/>
			</div>
		</div>
	);
};

export default CartItem;
