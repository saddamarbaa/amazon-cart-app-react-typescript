import React, { SetStateAction } from 'react'
import { v4 as uuidv4 } from 'uuid'

import CartItem from './CartItem'
import './CartItems.css'
import { ProductType } from '../types'

type CartItemsProps = {
	items: ProductType[]
	setCartItems: (item: SetStateAction<ProductType[]>) => void
	fixedPrice: number[]
}
const CartItems = ({ items, setCartItems, fixedPrice }: CartItemsProps) => {
	const changeItemQuantity = (
		event: React.ChangeEvent<HTMLSelectElement>,
		index: number,
	) => {
		const newItems = [...items]
		newItems[index].quantity = +event.target.value
		newItems[index].price = fixedPrice[index] * newItems[index].quantity
		if (newItems) {
			setCartItems([...newItems])
		}
	}

	const deleteItem = (indexToDelete: number) => {
		const newItems = items.filter((item, index) => {
			return index !== indexToDelete
		})
		if (newItems) {
			setCartItems(newItems)
		}
	}

	return (
		<div className="CartItems">
			<h1>Shopping Cart</h1>
			<hr />
			<div className="CartItems-items">
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
	)
}

export default CartItems
