import React from 'react'
import NumberFormat from 'react-number-format'

import { ProductType } from '../types'
import './CartTotal.css'

const CartTotal = ({ items }: { items: ProductType[] }) => {
	const getTotalPrice = () => {
		let totalPrice = 0
		items?.map(
			(item: ProductType) => (totalPrice += item.price * item.quantity),
		)
		return totalPrice
	}

	const getTotalTtems = () => {
		let totalItems: number = 0
		items?.forEach((item: ProductType) => {
			totalItems += Number(item?.quantity)
		})
		return totalItems
	}

	return (
		<div className="CartTotal">
			<h3>
				Subtotal({getTotalTtems()} items):
				<span className="cartTotal-price">
					<NumberFormat
						value={getTotalPrice()}
						displayType={'text'}
						thousandSeparator={true}
						prefix={'$'}
						decimalScale={2}
					/>
				</span>
			</h3>
			<button>Proceed to checkout</button>
		</div>
	)
}

export default CartTotal
