import '../styles/Banner.css'

function Banner({ children }) {
	return <div className='lmj-banner'>{children}{children}{children}<h1 className='lmj-title text-uppercase text-white'>flowers SHOP</h1>{children}{children}{children}</div>
}

export default Banner
