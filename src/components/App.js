import { useState } from 'react'
import Banner from './Banner'
import logo from '../assets/mint.jpg'
import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Layout.css'

function App() {
	const [cart, updateCart] = useState([])
	return (
		<div>
			<Banner>
				<img src={logo} alt='flowers SHOP' className='lmj-logo' />
				
			</Banner>
			<div className='lmj-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} />
				<ShoppingList cart={cart} updateCart={updateCart} />
			</div>
			
			<Footer />
		</div>
	)
}

export default App
