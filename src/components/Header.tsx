import React from 'react'
import './Header.css'

type Props = {
	title: string
}
const Header = ({ title }: Props) => {
	return (
		<div className="App-header">
			<h1>{title}</h1>
		</div>
	)
}

export default Header
