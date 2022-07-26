import { useState, useEffect } from 'react'
import '../styles/Cart.css'

function Cart({ cart, updateCart }) {
	const [isOpen, setIsOpen] = useState(true)
	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)
/*	useEffect(() => {
		alert(` ${total}€ 💸`)
	}, [total]) */
	
	return isOpen ? (
		<div className='lmj-cart text-white'>
			<button
				className='lmj-cart-toggle-button btn btn-dark text-white'
				
				onClick={() => setIsOpen(false)}
			>
				Close my cart
			</button>
			{cart.length > 0 ? (
				<div>
					<h2 className='m-1'>My List</h2>
					<ul>
						{cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`} >
						{index+1} <h2 className='item badge'>{name} <span className="badge badge-pill bg-success">{amount}</span>
						<span className="item">{amount*price} €</span></h2>
								</div>
						))}
					</ul>
					<h3>ALL :{total}€</h3>
					<button className='btn btn-sm w-100 btn-success text-white mt-1' onClick={() => updateCart([])}>Confirm</button>

					<button className='btn btn-sm w-100 btn-info text-white mt-1' onClick={() => updateCart([])}>Clean</button>
				</div>
			) : (
				<div>No flowers</div>
			)}
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button btn text-white'
				onClick={() => setIsOpen(true)}
			>
				Open my cart
			</button>
		</div>
	)
}

export default Cart
