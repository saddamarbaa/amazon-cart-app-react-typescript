import React, { useState } from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import CartItems from '../components/CartItems'
import CartTotal from '../components/CartTotal'
import '../App.css'
import { ProductType } from '../types'
import { itemsFixPrice, mockedData } from '../utils'

export const HomeScreen = () => {
	const [cartItems, setCartItems] = useState<ProductType[]>(mockedData)
	const [fixedPrice, setFixedPrice] = useState(itemsFixPrice)

	return (
		<div className="App">
			<Header title="Amazon Cart" />
			<div className="App-main">
				<CartItems
					items={cartItems}
					fixedPrice={fixedPrice}
					setCartItems={setCartItems}
				/>
				<CartTotal items={cartItems} />
			</div>
			<Footer />
		</div>
	)
}

export default HomeScreen
