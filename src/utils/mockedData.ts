import { ProductType } from '../types'

export const mockedData: ProductType[] = [
	{
		title: 'Apple iPad Pro',
		stock: 'In Stock',
		image: 'item-1.jpg',
		price: 769.0,
		quantity: 1,
	},
	{
		title: 'Beats Flex Wireless Earphones',
		stock: 'In Stock',
		image: 'item-2.jpg',
		price: 49.88,
		quantity: 2,
	},
	{
		title: "De'Longhi La Specialista Espresso Machine with Knock Box",
		stock: 'In Stock',
		image: 'item-3.jpg',
		price: 745.05,
		quantity: 1,
	},
	{
		title: 'Oculus Quest 2 — Advanced All-In-One Virtual Reality Headset',
		stock: 'In stock on January 2, 2020',
		image: 'item-4.jpg',
		price: 399.0,
		quantity: 1,
	},
	{
		title: 'All-new Echo Dot (4th Gen) | Glacier White',
		stock: 'In stock on December 25, 2020',
		image: 'item-5.jpg',
		price: 39.99,
		quantity: 3,
	},
	{
		title: 'Samsung Galaxy Note 10, 256GB',
		stock: 'In Stock',
		image: 'item-6.jpg',
		price: 569.0,
		quantity: 1,
	},
	{
		title: 'Nulaxy A5 Tablet Stand- Heavy Duty Black',
		stock: 'In stock on February 7, 2021',
		image: 'item-7.jpg',
		price: 569.0,
		quantity: 1,
	},
]

export const itemsFixPrice = mockedData.map((item) => item.price)
